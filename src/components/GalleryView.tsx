import React from "react";
import { Link } from "react-router-dom";

const GalleryView: React.FC = () => {
  const images = [
    { id: 1, src: "https://via.placeholder.com/150", title: "Item 1" },
    { id: 2, src: "https://via.placeholder.com/150", title: "Item 2" },
  ];

  return (
    <div>
      <h1>Gallery View</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        {images.map(img => (
          <Link key={img.id} to={`/details/${img.id}`}>
            <img src={img.src} alt={img.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GalleryView;
