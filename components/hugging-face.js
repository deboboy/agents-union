'use client'

import { useState, useEffect, useRef } from 'react';

const HFGenerate = () => {
  const [imageUrls, setImageUrls] = useState([]);

  const inputRef = useRef();

  const [toastVisible, setToastVisible] = useState(false);

  const handleSubmit = (index) => (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    localStorage.setItem(`imageDescription${index}`, inputValue);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000); // Hide the toast after 3 seconds
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedImageUrls = localStorage.getItem('imageUrls');
      setImageUrls(JSON.parse(storedImageUrls) || []);
    }
  }, []);

  const handleClick = async () => {
    // Array of possible inputs
    const inputsArray = [
      "flat vector illustration, png white background, clean, minimalistic:1.5, headshot of a robot facing the camera with a smile on it's face, in the style of animated illustrations, studyplace, text-based",
      "3D vector illustration, png green background, busy, headshot of a robot facing the camera with a smile on it's face, in the style of game charactere",
      "headshot of a robot with a frown on it's face",
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
      const newImageUrls = [...imageUrls, url];
      setImageUrls(newImageUrls);
      if (typeof window !== 'undefined') {
        localStorage.setItem('imageUrls', JSON.stringify(newImageUrls));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-left p-2">
      {toastVisible && (
        <div className="fixed top-0 right-0 m-4 p-2 bg-[#b57236] text-white rounded">
          Description saved successfully!
        </div>
      )}
      <button 
        className="bg-[#451F17] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" 
        onClick={handleClick}
      >
        Generate Agent
      </button>
      {imageUrls.map((url, index) => {
        const description = localStorage.getItem(`imageDescription${index}`);
        return (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-full pt-2 relative">
            <img src={url} className="w-full" />
            <div className="w-full inset-0 bg-opacity-50 text-[#605911] flex items-center justify-center border border-white">
              {description}
            </div>
            <form onSubmit={handleSubmit(index)}>
              <input ref={inputRef} type="text" className="w-full text-black text-center mt-2 mb-2 rounded-none" placeholder="Describe agent skills and tools" />
              <div className="flex justify-center">
                <button 
                  type="submit"
                  className="bg-[#451F17] hover:bg-gray-700 text-sm text-white font-bold py-2 px-2 rounded"
                >
                  Save Description
                </button>
              </div>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default HFGenerate;