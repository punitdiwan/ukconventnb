import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import { IoIosArrowForward ,IoIosArrowBack} from "react-icons/io";

const Slider = ({ slider_data }) => {

  const slides = [
    { title: "/images/is15.jpg ", description: 'Lorem ipsum' },
    { title: "/images/sd2.jpg", description: 'Lorem ipsum' },
  ];
console.log("slider_data",slider_data)
  const sortedSlides = slider_data?.data
    ? [...slider_data.data].sort((a, b) => a.sort_order - b.sort_order)
    : [];

  return (
    <div className="relative">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}

       
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              className="absolute left-4 top-1/2 -translate-y-1/2 
                         bg-white/30 hover:bg-white text-black 
                         px-4 py-4 rounded-full z-20 mt-10"
            >
                   <IoIosArrowBack size={26}/>
            </button>
          )
        }

      
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              className="absolute right-4 top-1/2 -translate-y-1/2 
                         bg-white/30 hover:bg-white text-black 
                         px-4 py-4 rounded-full z-20 mt-10"
            >
             <IoIosArrowForward size={26}/>
            </button>
          )
        }
      >
        {sortedSlides.length > 0
          ? sortedSlides.map((item, index) => (
            <div key={index}>
              <img
                src={item?.image?.data?.full_url?.replace('http://', 'https://')}
                className="w-full h-[230px] md:h-[400px] lg:h-[650px] object-cover bg-black"
                alt="slider"
              />
            </div>
          ))
          : slides.map((slide, index) => (
            <div key={index}>
              <img
                src={slide.title}
                className="w-full h-[230px] md:h-[400px] lg:h-[500px] object-cover bg-black"
                alt="slider"
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Slider;