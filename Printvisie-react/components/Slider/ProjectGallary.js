import { useState } from "react";
import styles from './ProjectGallary.module.scss'; 

export default function ProjectGallary({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className={styles.projectGallery}>
      <img
        src={images[currentImageIndex]}
        alt="Project image"
        className={styles.galleryImage} 
      />

      {images.length > 1 && (
        <div className={styles.galleryControls}>
          <button
            onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}
          >
            Prev
          </button>
          <button
            onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
