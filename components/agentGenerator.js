'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

const AgentGenerate = ({ hiringHallUnion }) => {
  console.log('hiringHallUnion:', hiringHallUnion);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [imageUrls, setImageUrls] = useState([]);
  const [descriptions, setDescriptions] = useState(Array(4).fill(''));
  const [imageIds, setImageIds] = useState([]); // New state variable for storing image IDs

  const [toastVisible, setToastVisible] = useState(false);
  const [imagesGenerated, setImagesGenerated] = useState(false); // New state variable for hiding the Generate Agents button

  const handleSubmit = (index) => (event) => {
    event.preventDefault();
    if (inputRefs[index] && inputRefs[index].current) {
      const inputValue = inputRefs[index].current.value;
      const newDescriptions = [...descriptions];
      newDescriptions[index] = inputValue;
      setDescriptions(newDescriptions);
      localStorage.setItem(`imageDescription${index}`, inputValue);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000); // Hide the toast after 3 seconds
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedImageUrls = localStorage.getItem('imageUrls');
      setImageUrls(JSON.parse(storedImageUrls) || []);
      const storedDescriptions = Array(4).fill().map((_, index) => localStorage.getItem(`imageDescription${index}`));
      setDescriptions(storedDescriptions);
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

    const newImageUrls = [...imageUrls];
    const newImageIds = [...imageIds]; // Copy the current image IDs

    for (let i = 0; i < 4; i++) {
      // Select a random input
      const randomInput = inputsArray[Math.floor(Math.random() * inputsArray.length)];

      try {
        const response = await fetch('https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN}`,
            'Content-Type': 'application/json'
          },
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
        newImageUrls.push(url);
        newImageIds.push(uuidv4()); // Generate a new ID for the image
      } catch (error) {
        console.log(error);
      }
    }

    setImageUrls(newImageUrls);
    setImageIds(newImageIds); // Update the image IDs state
    if (typeof window !== 'undefined') {
      localStorage.setItem('imageUrls', JSON.stringify(newImageUrls));
    }
    setImagesGenerated(true);
  };

  return (
    <div className="flex flex-col justify-left p-2">
      {toastVisible && (
        <div className="fixed top-0 right-0 m-4 p-2 bg-[#b57236] text-white rounded">
          Description saved successfully!
        </div>
      )}
      {!imagesGenerated && (
        <button 
          className="bg-[#451F17] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" 
          onClick={handleClick}
        >
          Generate Agents
        </button>
      )}
      <div className="grid grid-cols-2 gap-4">
        {imageUrls.map((url, index) => {
          return (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-full pt-2 relative">
              <img src={url} className="w-full" />
              <div className="w-full inset-0 bg-opacity-50 text-[#605911] flex items-center justify-center border border-white">
                {descriptions[index]}
              </div>
              <div className="text-[#605911] text-center mt-2">
                ID: {imageIds[index]}
              </div>
              {/* <div className="text-[#605911] text-center mt-2">
                Union: {hiringHallUnion}
              </div> */}
              {!descriptions[index] && (
                <form onSubmit={handleSubmit(index)}>
                  <input ref={inputRefs[index]} type="text" className="w-full text-gray-900 dark:text-white text-center mt-2 mb-2 rounded-none" placeholder="Describe agent skills and tools" />
                  <div className="flex justify-center">
                    <button 
                      type="submit"
                      className="bg-[#451F17] hover:bg-gray-700 text-sm text-white font-bold py-2 px-2 rounded"
                    >
                      Save Description
                    </button>
                  </div>
                </form>
              )}
            </div>
          );
        })}
      </div>
      <div className="bg-[#f1e89d] flex justify-center mt-4">
      {descriptions.every(description => description) && (
        <Link href="/jobs">
          <button 
            className="bg-[#451F17] hover:bg-gray-700 text-white font-bold py-2 px-2 rounded" 
          >
            Get Agents Hired
          </button>
        </Link>
      )}
      </div>
    </div>
  );
};

export default AgentGenerate;