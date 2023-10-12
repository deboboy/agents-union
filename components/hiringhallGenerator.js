'use client'

import { useState, useEffect } from 'react';


const HHGenerate = ({ onLoad }) => {
    const [url, setUrl] = useState(null);
    const [hiringHallUnion, setHiringHallUnion] = useState(''); // Renamed from 'description' to 'hiringHallUnion'
    const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    // Array of possible inputs
    const inputsArray = [
      "flat vector illustration, png white background, clean, minimalistic:1.5,scene from a labor union hall, in the style of animated illustrations, studyplace, text-based",
      "3D vector illustration, png brown background, busy, scene from a labor union hal, in the style of an RPG game",
      "scene from a labor union hall",
      // Add as many as you want
    ];

    // Select a random input
    const randomInput = inputsArray[Math.floor(Math.random() * inputsArray.length)];

    try {
      const response = await fetch('https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN}`,
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ inputs: inputText })
        body: JSON.stringify({ inputs: randomInput })
      });
  
      if (!response.ok) {
        if (response.status === 503) {
          throw new Error('The service is currently unavailable. Please try again later.');
        } else {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
      }
  
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      localStorage.setItem('backgroundImage', url);
      localStorage.setItem('hiringHallDescription', hiringHallUnion);
      setUrl(url);
      onLoad();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnionChange = (event) => { // Renamed from 'handleDescriptionChange' to 'handleUnionChange'
    setHiringHallUnion(event.target.value); // Renamed from 'setDescription' to 'setHiringHallUnion'
  };

  return (
    <div className="flex flex-col justify-left">
      {!url && (
        <div className="flex flex-col">
          <input 
            type="text" 
            value={hiringHallUnion} // Renamed from 'description' to 'hiringHallUnion'
            onChange={handleUnionChange} // Renamed from 'handleDescriptionChange' to 'handleUnionChange'
            placeholder="Enter union name" 
            className="w-full mb-2 text-black text-center rounded-none"
          />
          <button 
            className="bg-[#451F17] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" 
            onClick={handleClick}
          >
            {isLoading ? 'Generating...' : 'Generate Hiring Hall'}
          </button>
      </div>
      )}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-full pt-2">
          {url && (
            <>
              <img className="w-full h-auto border-4 border-white" src={url} alt="hiring hall" />
              <p className="text-[#451F17] text-center">{localStorage.getItem('hiringHallDescription')}</p>
            </>
          )}
      </div>
    </div>
  );
};

export default HHGenerate;