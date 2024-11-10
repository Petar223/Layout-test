import React, { useState } from "react";
import styled from "styled-components";
import ThumbnailList from "~components/ProductImageGallery/ThumbnailList/ThumbnailList";
import MainImageDisplay from "~components/ProductImageGallery/MainImageDisplay/MainImageDisplay";

const GalleryContainer = styled.div`
  display: flex;
  gap: 16px;
`;

function ProductImageGallery({ data }) {
  const [selectedImage, setSelectedImage] = useState(data.article.images[0]);
  const [imageError, setImageError] = useState({});

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleImageError = (index) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <GalleryContainer>
      <ThumbnailList
        images={data.article.images}
        onThumbnailClick={handleThumbnailClick}
        imageError={imageError}
        handleImageError={handleImageError}
      />
      <MainImageDisplay
        image={selectedImage}
        hasError={imageError[selectedImage]}
        onError={() =>
          setImageError((prev) => ({ ...prev, [selectedImage]: true }))
        }
      />
    </GalleryContainer>
  );
}

export default ProductImageGallery;
