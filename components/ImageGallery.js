import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "../styles/components/ImageGallery.module.css";

//import image1 from "../public/images/7660 malahat ave/image1.jpg";
const image1 = "../public/images/7660 malahat ave/image1.jpg";
import image2 from "../public/images/7660 malahat ave/image2.jpg";
import image3 from "../public/images/7660 malahat ave/image3.jpg";
import image4 from "../public/images/7660 malahat ave/image4.jpg";
import image5 from "../public/images/7660 malahat ave/image5.jpg";
import image6 from "../public/images/7660 malahat ave/image6.jpg";
import image7 from "../public/images/7660 malahat ave/image7.jpg";
import image8 from "../public/images/7660 malahat ave/image8.jpg";
import image9 from "../public/images/7660 malahat ave/image9.jpg";
import image10 from "../public/images/7660 malahat ave/image10.jpg";
import image11 from "../public/images/7660 malahat ave/image11.jpg";
import image12 from "../public/images/7660 malahat ave/image12.jpg";
import image13 from "../public/images/7660 malahat ave/image13.jpg";
import image14 from "../public/images/7660 malahat ave/image14.jpg";
import image15 from "../public/images/7660 malahat ave/image15.jpg";
import image16 from "../public/images/7660 malahat ave/image16.jpg";

import dunbar1 from "../public/images/Dunbar and w 32nd/image1.jpg";
import dunbar2 from "../public/images/Dunbar and w 32nd/image2.jpg";
import dunbar3 from "../public/images/Dunbar and w 32nd/image3.jpg";
import dunbar4 from "../public/images/Dunbar and w 32nd/image4.jpg";

import laneway1 from "../public/images/laneway house at w 22nd and Blenheim/image1.jpg";
import laneway2 from "../public/images/laneway house at w 22nd and Blenheim/image2.jpg";
import laneway3 from "../public/images/laneway house at w 22nd and Blenheim/image3.jpg";
import laneway4 from "../public/images/laneway house at w 22nd and Blenheim/image4.jpg";
import laneway5 from "../public/images/laneway house at w 22nd and Blenheim/image5.jpg";
import laneway6 from "../public/images/laneway house at w 22nd and Blenheim/image6.jpg";
import laneway7 from "../public/images/laneway house at w 22nd and Blenheim/image7.jpg";

const malahat = [
  "../public/images/7660 malahat ave/image1.jpg",
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
];
const dunbar = [dunbar1, dunbar2, dunbar3, dunbar4];
const laneway = [
  laneway1,
  laneway2,
  laneway3,
  laneway4,
  laneway5,
  laneway6,
  laneway7,
];

function ImageGallery({ name, images }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  /** 
  let images;

  switch (name) {
    case "Dunbar and w 32nd":
      images = [...dunbar];
      break;
    case "7660 Malahat ave":
      images = [...malahat];
      break;
    case "Laneway house at w 22nd and Blenheim":
      images = [...laneway];
      break;
    default:
  }
  */

  const imagesWithSrc = images.map(image => ({ src: image }));

  return (
    <div>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryGrid}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.galleryItem}
              onClick={() => handleOpen(index)}
            >
              <img src={image} alt="1" className={styles.galleryImg} />
            </div>
          ))}
        </div>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={imagesWithSrc}
          index={currentIndex}
          animation={{ fade: 300 }}
          caption={{
            enabled: true,
            content: (slide) => <span>{slide.alt}</span>,
          }}
        />
      )}
    </div>
  );
}

export default ImageGallery;
