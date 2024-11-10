import React from "react";
import styled from "styled-components";
import ThumbnailImage from "~components/ProductImageGallery/ThumbnailImage/ThumbnailImage";

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 100px;
`;

function ThumbnailList({
  images,
  onThumbnailClick,
  imageError,
  handleImageError,
}) {
  return (
    <ThumbnailContainer>
      {images?.map((image, index) => (
        <ThumbnailImage
          key={index}
          image={image}
          index={index}
          onClick={onThumbnailClick}
          onError={() => handleImageError(index)}
          hasError={imageError[index]}
        />
      ))}
    </ThumbnailContainer>
  );
}

export default ThumbnailList;
