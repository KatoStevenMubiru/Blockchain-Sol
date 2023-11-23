import React, { useEffect, useState } from "react";
import "./TextToImageComponent.css";
import dotenv from "dotenv";
import { CircularProgress } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const TextToImageComponent = () => {
 const [apiKey, setApiKey] = useState(import.meta.env.VITE_API_KEY);
 const [imageData, setImageData] = useState(null);
 const [loading, setLoading] = useState(false);
 const [textInput, setTextInput] = useState("");
 const [lastPrompt, setLastPrompt] = useState(localStorage.getItem('lastPrompt'));

 useEffect(() => {
  const storedImage = localStorage.getItem('generatedImage');
  const storedPrompt = localStorage.getItem('lastPrompt');
  if (storedImage) {
    setImageData(storedImage);
  }
  if (storedPrompt) {
    setLastPrompt(storedPrompt);
  }
 }, []);

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
      const base64Image = `data:image/png;base64,${image.base64}`;
      setImageData(base64Image);
      localStorage.setItem('generatedImage', base64Image);
      localStorage.setItem('lastPrompt', textInput);
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

 const handleDownloadClick = () => {
  const link = document.createElement("a");
  link.href = imageData;
  link.download = "generated-image.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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

    {lastPrompt && (
      <p>Your last prompt was: {lastPrompt}</p>
    )}

    <div className="image-container">
      {loading ? (
        <CircularProgress />
      ) : (
        imageData && (
          <>
            <img
              src={imageData}
              alt="Generated Image"
              style={{ maxWidth: "500px", height: "auto" ,borderRadius: '30px'}}
            />
            <button onClick={handleDownloadClick}>
              <DownloadIcon /> 
            </button>
          </>
        )
      )}
    </div>
  </div>
 );
};

export default TextToImageComponent;
