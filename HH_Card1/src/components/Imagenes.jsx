import React, { useState } from 'react';
import { image } from '../assets/imageAPI'; // Importa las rutas de las imágenes desde imageApi.js
import './Styles/Imagenes.css';

const Imagenes = () => {
  const [selectedImage, setSelectedImage] = useState('img1');

  const changeImage = (imageName) => {
    setSelectedImage(imageName);
  };

  return (
    <div className="imagenes-container">
      <div className="stack">
        {Object.keys(image[0]).map((imageKey) => (
          <img
            key={imageKey}
            src={image[0][imageKey]}
            alt=""
            className={imageKey === selectedImage ? 'active' : ''}
          />
        ))}
      </div>
      <div className="indicators">
        {Object.keys(image[0]).map((imageKey) => (
          <span
            key={imageKey}
            className={imageKey === selectedImage ? 'active' : ''}
            onClick={() => changeImage(imageKey)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Imagenes;