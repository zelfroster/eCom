import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryItemBody,
} from "./directory-item.styles";
import { StyleSheetManager } from "styled-components";
import isValidProp from "@emotion/is-prop-valid";

function DirectoryItem({ category }) {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  function onNavigateHandler() {
    navigate(route);
  }
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <StyleSheetManager shouldForwardProp={isValidProp}>
        <BackgroundImage imageUrl={imageUrl} />
      </StyleSheetManager>
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
