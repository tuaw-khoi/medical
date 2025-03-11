import React, { useEffect, useRef, useState } from "react";
import Navbar from "./navbar";
import ImageSlider from "./ImageSlider";

const Slides = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 200; // Khi cuộn xuống 200px thì sticky

      if (window.scrollY > triggerPoint) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Kiểm tra nếu phần tử Slides ra khỏi viewport thì ẩn nút
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setIsVisible(rect.bottom > 0); // Nếu nó vẫn còn trong màn hình thì hiện
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      <ImageSlider />

      {/* Navbar */}
      <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-[90%] z-50 w-full">
        <Navbar />
      </div>

      {/* Emergency Button */}

      {isVisible && (
        <div
          className={`text-red-600 bg-white flex flex-col z-50 px-2 justify-center items-center py-2 transition-all duration-300 shadow-lg w-[100px] right-0 ${
            isSticky ? "fixed top-0" : "fixed top-[40%]"
          }`}
        >
          <img
            className="w-[30px]"
            src="src/assets/alarm.svg"
            alt="Emergency Icon"
          />
          <span className="font-bold">Emergency</span>
        </div>
      )}

      {/* Content */}
      <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/3 z-50">
        <h3 className="text-[18px]">HEALING FUTURES</h3>
        <h1 className="text-[56px] leading-[60px] font-bold">
          Empowering Future Healers at National Medical College
        </h1>
        <p className="text-[20px] mt-5">
          Join us in our commitment to excellence in medical education and
          compassionate healthcare.
        </p>
        <button className="bg-[#186533] text-[20px] p-2 rounded-3xl mt-5">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Slides;
