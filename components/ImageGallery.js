import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "../styles/components/ImageGallery.module.css";


function ImageGallery({ name, images }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

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
              <img src={image} alt="image of construction"  loading="lazy" className={styles.galleryImg} />
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
