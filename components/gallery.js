// components/Gallery.js

'use client'

import { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('images')) || [];
    setImages(storedImages);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((imageUrl, index) => (
        <img key={index} className="w-full h-auto border-4 border-white" src={imageUrl} alt={`Generated ${index}`} />
      ))}
    </div>
  );
};

export default Gallery;