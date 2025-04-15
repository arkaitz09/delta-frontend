import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-80 h-96 bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between">
      {title && <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>}
      <div className="relative" id="carousel">
      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        className="w-[300px] h-[200px] object-cover rounded-lg"
      />
      <div id="carrousel-footer"> 
        <div className="text-center mt-2 text-sm text-gray-500">
            {currentIndex + 1} / {images.length}
          </div>
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-r"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextImage}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-l"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ImageCarousel;
