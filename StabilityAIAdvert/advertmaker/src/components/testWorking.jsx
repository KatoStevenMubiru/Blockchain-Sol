import React, { useEffect, useState } from "react";

const TextToImageComponent = () => {
  const [apiKey, setApiKey] = useState("API_KEY");
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchImage = async () => {
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
          text: "An Beach Party Advert",
          weight: 1,
        },
        {
          text: "blurry, bad, misspelled",
          weight: -1,
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

  useEffect(() => {
    console.log("Effect triggered");
    fetchImage();
  }, []);

  return (
    <div>
      <h1>Text to Image Component</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        imageData && <img src={imageData} alt="Generated Image" />
      )}
    </div>
  );
};

export default TextToImageComponent;
