import React from "react";
import styled from "styled-components";
import { Package as PackageSVG } from "~components/Icons";

const ThumbnailCard = styled.div`
  border: 1.5px solid ${({ theme }) => theme.palette.grey[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  cursor: pointer;
  margin-bottom: 6px;
`;

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
`;

const ThumbnailImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PackageIcon = styled(PackageSVG)`
  width: 45px;
  height: 45px;
  fill: ${({ theme }) => theme.palette.grey[300]};
`;

function ThumbnailImage({ image, index, onClick, onError, hasError }) {
  return (
    <ThumbnailCard onClick={() => onClick(image)}>
      {hasError ? (
        <Placeholder>
          <PackageIcon />
        </Placeholder>
      ) : (
        <ThumbnailImageStyled
          src={image}
          alt={`Image ${index + 1}`}
          onError={onError}
        />
      )}
    </ThumbnailCard>
  );
}

export default ThumbnailImage;
