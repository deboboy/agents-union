'use client'

import { useState } from 'react';

const HFGenerate = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [inputText, setInputText] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN}`,
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ inputs: inputText })
        body: JSON.stringify({ inputs: "an artificial intelligence agents, in the style of a Mexican punk robot, 1960s" })
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
      setImageUrl(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-left p-4">
      {/* <input 
        type="text" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
        className="shadow appearance-none border rounded w-3/4 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 mr-2"
        placeholder="Describe your agent..."
      /> */}
      <button 
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded " 
        onClick={handleClick}
      >
        Recruit
      </button>
      {imageUrl && 
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pt-2">
          <img className="w-full h-auto border-4 border-white" src={imageUrl} alt="Generated" />
        </div>
      }
    </div>
  );
};

export default HFGenerate;