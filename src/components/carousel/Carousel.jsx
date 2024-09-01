"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    img: "/one-big-happy-family-cropped-shot-of-a-happy-dive-2023-11-27-04-53-51-utc.jpg",
    title: "Empowering Financial Security for Everyone",
    description: "We are committed to providing accessible and reliable financial services to help individuals and families"
  },
  {
    img: "/family-ties-2024-03-26-01-25-07-utc.jpg",
    title: "Empowering Financial Security for Everyone",
    description: "We are committed to providing accessible and reliable financial services to help individuals and families"
  },
  {
    img: "/family-showcasing-their-home.jpg",
    title: "Empowering Financial Security for Everyone",
    description: "We are committed to providing accessible and reliable financial services to help individuals and families"
  },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

  return (
    <div className="max-w-[1400px] h-[620px] w-full m-auto py-4 relative group overflow-hidden">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="animate-zoomOut w-full h-full bg-center bg-cover transition-all duration-500"
      ></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] max-w-[720px] w-9/12">
        <div className="text-2xl text-white text-center font-semibold md:text-5xl">
            {slides[currentIndex].title}
        </div>
        <div className="mt-4 text-white text-center">
            {slides[currentIndex].description}
        </div>
      </div>
      {/* Left arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 p-2  rounded-md  bg-black/80 text-center cursor-pointer">
        <span 
        onClick={prevSlide}
        className="material-symbols-outlined">arrow_back_ios</span>
      </div>
      {/* Right arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 p-2 rounded-md  bg-black/80 text-center cursor-pointer">
        <span 
        onClick={nextSlide}        
        className="material-symbols-outlined">arrow_forward_ios</span>
      </div>
    </div>
  );
};

export default Carousel;
