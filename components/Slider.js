import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import styles from "../styles/components/Slider.module.css";




const Slide = styled.div`
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  font-size: 2.3em;

  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
`;

const SliderContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
  height: 1020px;
  padding-bottom: 30px;
  padding-top: 30px;
`;

const StyledReactSlick = styled(Slider)`
  /* Add your styling here */
  
  .slick-prev {
    left: 4%;
   
    z-index: 1; 
   
  }

  .slick-next {
    right: 5%;
    z-index: 1;
  }
  

  .slick-prev:before,
  .slick-next:before {
    color: var(--primary-color);
    font-size: 30px;
  }

  .slick-track {
    margin: 0 auto;
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

function MySlider({ images, name }) {
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
    <SliderContainer>
      <div>
        <StyledReactSlick {...settings}>
          {images.map((image, index) => (
            <Slide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={styles.photo}
              />

              <Title>{name}</Title>
            </Slide>
          ))}
        </StyledReactSlick>
      </div>
    </SliderContainer>
  );
}

export default MySlider;
