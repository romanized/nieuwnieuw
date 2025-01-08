import Link from "next/link";
import { useState } from "react";
import Lightbox from "react-image-lightbox";

// Utility function to truncate text
const truncateText = (text, limit) => {
  return text.length > limit ? text.substring(0, limit) + '...' : text;
};

export default function SingleIsotope({ item: { id, title, image, category, description, secondDescription } }) {
  const [isOpen, setIsOpen] = useState(false);
  const truncatedDescription = truncateText(description, 100); // Limit description to 100 characters

  return (
    <>
      {isOpen && <Lightbox mainSrc={`/img/portfolio/${image}`} onCloseRequest={() => setIsOpen(false)} />}

      <div className="portfolio-item-card">
        <div className="d-block pointer" onClick={() => setIsOpen(true)}>
          <img src={`/img/portfolio/${image}`} alt={`${title}`} />
        </div>

        <div className="contents">
          <h5>
            <Link href={`/projects/${id}`}>
              <a>{title}</a>
            </Link>
          </h5>
          <span>{category}</span>
          <p>{truncatedDescription}</p> {/* Display truncated description */}
        </div>
      </div>
    </>
  );
}
