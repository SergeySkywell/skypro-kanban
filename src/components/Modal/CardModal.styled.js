import styled from "styled-components";

export const PopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${(props) => (props.active ? "1 !important" : "0.4")};
  background-color: ${({ $themeColor }) => {
    switch ($themeColor) {
      case "orange":
        return "#ffe4c2";
      case "green":
        return "#b4fdd1";
      case "purple":
        return "#e9d4ff";
      case "gray":
        return "#94a6be";
      default:
        return "#eee";
    }
  }};
`;

export const themeColors = {
  orange: "#ff6d00",
  green: "#06b16e",
  purple: "#9a48f1",
};

export const CategoriesThemeText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  color: ${({ $color }) => themeColors[$color] || "#94a6be"};
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const PopBrowseSubttl = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background: ${({ $active }) => ($active ? "#94a6be" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "#94a6be")};
  display: ${({ $visible }) => ($visible ? "inline-block" : "none")};

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;
