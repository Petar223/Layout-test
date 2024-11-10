import React, { useContext, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import DataContext from "../../context/DataContext";
import { CartIcon, FavoriteIcon, FactsSoftIcon } from "~components/Icons/Icons";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import QuantityEditor from "~components/QuantityEditor/QuantityEditor";

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[100]};
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: ${({ $isScrolled, theme }) =>
    $isScrolled ? `0px 4px 8px ${theme.palette.grey[100]}` : "none"};
  transition: box-shadow 0.3s ease;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.palette.common.white};
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const HeaderTitle = styled.h2`
  margin: 16px;
  font-weight: 400;
  font-size: 24px;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const IconGroup = styled.div`
  display: flex;
  margin-right: 8px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.palette.grey[300]};
`;

const FavoriteIconContainer = styled.div`
  margin-left: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FactsIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }

   55% {
    transform: translateY(-7.5px);
  }

  60% {
    transform: translateY(-5px);
  }
`;

const AnimatedBadge = styled(Badge)`
  animation: ${bounce} 0.6s ease forwards;
  animation-fill-mode: forwards;
`;

function Header() {
  const { data, isQuantityEditorVisible } = useContext(DataContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <Navbar>
        <HeaderContent>
          <TitleContainer>
            <HeaderTitle>{data.article.title}</HeaderTitle>
            <IconGroup>
              {isQuantityEditorVisible ? null : (
                <QuantityEditor article={data.article} />
              )}
              <FavoriteIconContainer>
                <IconButton aria-label="favorite">
                  <FavoriteIcon />
                </IconButton>
              </FavoriteIconContainer>
              <FactsIconContainer>
                <IconButton aria-label="facts">
                  <FactsSoftIcon />
                </IconButton>
              </FactsIconContainer>
            </IconGroup>
          </TitleContainer>
          <IconsContainer>
            <CartIconContainer>
              <IconButton aria-label="cart">
                <AnimatedBadge
                  key={data.cart.items}
                  badgeContent={data.cart.items}
                  color="primary"
                >
                  <CartIcon />
                </AnimatedBadge>
              </IconButton>
            </CartIconContainer>
          </IconsContainer>
        </HeaderContent>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
