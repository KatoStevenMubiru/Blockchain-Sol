import React, { useEffect, useState } from "react";
import "./TextToImageComponent.css"; 
import dotenv from 'dotenv';
import { CircularProgress } from "@mui/material";
// Import a CSS file for styling (see below)

const TextToImageComponent = () => {
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_API_KEY);
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [textInput, setTextInput] = useState("");

  const fetchImage = async () => {
    setLoading(true);

    const path =
      "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image";

    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    };

    const body = {
      steps: 40,
      width: 1024,
      height: 1024,
      seed: 0,
      cfg_scale: 5,
      samples: 1,
      text_prompts: [
        {
          text: textInput,
          weight: 1,
        },
      ],
    };

    try {
      const response = await fetch(path, {
        headers,
        method: "POST",
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Non-200 response: ${await response.text()}`);
      }

      const responseJSON = await response.json();

      if (responseJSON.artifacts.length > 0) {
        const image = responseJSON.artifacts[0];
        setImageData(`data:image/png;base64,${image.base64}`);
      }
    } catch (error) {
      console.error("Error fetching image:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateClick = () => {
    fetchImage();
  };

  return (
    <div className="text-to-image-container">
      <div className="input-container">
        <h1>Generate Adverts from Text</h1>
        <h5>By Sibomana Glorry & Kato Steven</h5>
        <label htmlFor="textInput">Enter Your Text Prompt:</label>
        <input
          type="text"
          id="textInput"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button className="generate-button" onClick={handleGenerateClick}>
          Generate Image
        </button>
      </div>

      <div className="image-container">
        {loading ? (
          <CircularProgress/>
        ) : (
          imageData && <img src={imageData} alt="Generated Image" />
        )}
      </div>
    </div>
  );
};

export default TextToImageComponent;
