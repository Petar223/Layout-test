import React from "react";
import styled from "styled-components";
import {
  StarIcon as StarOutline,
  StarFilledIcon as StarFilledSVG,
} from "~components/Icons/Icons";

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-bottom: 32px;
`;

const StarIcon = styled(StarOutline)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.palette.grey[300]};
`;

const StarFilledIcon = styled(StarFilledSVG)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.palette.star};
`;

const CustomStarIcon = ({ filled }) => {
  const IconComponent = filled ? StarFilledIcon : StarIcon;
  return <IconComponent />;
};

function ProductRating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <CustomStarIcon key={index} filled={index < Math.round(rating)} />
  ));

  return <RatingContainer>{stars}</RatingContainer>;
}

export default ProductRating;
