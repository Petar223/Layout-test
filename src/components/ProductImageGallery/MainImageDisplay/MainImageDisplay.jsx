import React from "react";
import styled from "styled-components";
import {
  ZoomInIcon as ZoomInSVG,
  PackageIcon as PackageSVG,
} from "~components/Icons/Icons";

const MainImageContainer = styled.div`
  flex: 1;
  border: 1.5px solid ${({ theme }) => theme.palette.grey[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  max-width: 400px;
  min-width: 400px;
  position: relative;
`;

const ZoomButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const MainImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LargePackageIcon = styled(PackageSVG)`
  width: 180px;
  height: 180px;
  fill: ${({ theme }) => theme.palette.grey[300]};
`;

const ZoomInIcon = styled(ZoomInSVG)`
  width: 25px;
  height: 25px;
  fill: ${({ theme }) => theme.palette.grey[600]};
`;

function MainImageDisplay({ image, hasError, onError }) {
  return (
    <MainImageContainer>
      {hasError ? (
        <LargePackageIcon />
      ) : (
        <MainImageStyled src={image} alt="Selected product" onError={onError} />
      )}
      <ZoomButton>
        <ZoomInIcon />
      </ZoomButton>
    </MainImageContainer>
  );
}

export default MainImageDisplay;
