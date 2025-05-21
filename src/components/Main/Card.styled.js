import styled, { keyframes } from "styled-components";

const cardAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
`;

export const CardsItem = styled.div`
  padding: 5px;
  animation: ${cardAnimation} 500ms linear;
`;

export const StyledCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const themeColors = {
  orange: "#ff6d00",
  green: "#06b16e",
  purple: "#9a48f1",
};

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ themeColor }) =>
    themeColor === "orange"
      ? "rgba(255, 109, 0, 0.3)"
      : themeColor === "green"
      ? "rgba(6, 177, 110, 0.3)"
      : themeColor === "purple"
      ? "rgba(154, 72, 241, 0.3)"
      : "#e0e0e0"};
`;

export const CardThemeText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: ${({ $color }) => themeColors[$color] || "#94a6be"};
`;

export const CardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  & > div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CardDateText = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
`;
