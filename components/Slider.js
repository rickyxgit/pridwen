import React, { component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import Image from "next/image";

import styles from "../styles/components/Slider.module.css";



const SliderContainer = styled.div`
  margin: 0 auto;
  height: 900px;
`;

const StyledReactSlick = styled(Slider)`
  /* Add your styling here */
  .slick-prev {
    left: 20px;
    z-index: 1;
  }

  .slick-next {
    right: 40px;
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    color: var(--primary-color);
    font-size: 30px;
  }

  .slick-track {
    margin: auto;
  }

  /** dots */
  .slick-dots li button:before {
    color: var(--primary-color);
    opacity: 0.8;
  }

  .slick-dots li.slick-active button:before {
    color: #165c95;
    opacity: 1;
  }

  .slick-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

function MySlider({ images }) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: "custom-slider",
    autoplaySpeed: 2000 * 5,
  };

  return (
    <div>
      <SliderContainer>
        <StyledReactSlick {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Image src={image} alt={`Slide ${index + 1}`} height={300} width={300} className={styles.photo} />
            </div>
          ))}
        </StyledReactSlick>
      </SliderContainer>
    </div>
  );
}

export default MySlider;
