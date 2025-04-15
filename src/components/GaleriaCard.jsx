import React, { useEffect, useState } from "react";
import ImageCarousel from "./ImageCarousel";

// 👇 Esto es un glob ESTÁTICO, que sí acepta Vite
const allImages = import.meta.glob('/src/assets/**/**/*.{jpg,jpeg,png,gif,JPG,PNG}', {
  eager: true,
  as: 'url',
});

const GaleriaCard = ({ folderName, title }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const filtered = Object.entries(allImages)
      .filter(([path]) => path.includes(`/assets/${folderName}/`))
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([, url]) => url);

    setImages(filtered);
  }, [folderName]);

  return (
    images.length > 0 && <ImageCarousel images={images} title={title} />
  );
};

export default GaleriaCard;
