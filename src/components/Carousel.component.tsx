import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface ImageStream {
  images: StaticImageData[];
}

const ImageCarousel = ({ images }: ImageStream) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex items-center justify-center ">
      <div>
        <Carousel showThumbs={false}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index}`}
              onClick={() => handleClick(index)}
              className={` h-[800px] cursor-pointer rounded-md object-cover ${
                activeIndex === index ? " border-l-offBlack" : ""
              }`}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
