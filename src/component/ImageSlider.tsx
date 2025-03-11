import { useState } from "react";

const images: string[] = [
  "https://s3-alpha-sig.figma.com/img/8bcc/dd06/7a271a40fdcb863da8965bb2ad77fa6b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kh8sOOP~7B9rsrtyF2mkBUFSU~hs6jBfKGy7Bkv4nMjLCTXjXuO6wUiiW0aRepRa6BZ4~XOMN8Drn0S2ujd-H0IsO15cvCHb7RRhtNpSJlKzda34Df82FIx7QiElmHxGkO-g84v7H7ozA5yP1dRp701-OX5v1mA0KMmdbsIkRJQB9gksjfNLlOl2AfiFoj9oPsUq5fjub300mZr1tlKoVQ3nEPyUorqoQqqMVUQI9j9JcEqFDLfp5t3UtRAANGWb1wPhaHsYpVoX8nokut09hzQr3RDZEb~rHl88NlCo8FcVKdTrEt32bNvBfVYSRrUxK5T4KLvAeJ23JnkHrryXeg__",
  "https://res.cloudinary.com/dfua5nwki/image/upload/t_Banner 16:9/v1741685647/tower_soks7u.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[720px] overflow-hidden">
      {/* Overlay Background (Mờ màu đen) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Hiển thị ảnh */}
      <div className="w-full h-full flex transition-transform duration-500 ease-in-out">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Nút Previous */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-80 transition z-20"
      >
        ❮
      </button>

      {/* Nút Next */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-80 transition z-20"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
