import { styled } from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 50px;
  row-gap: 20px;
`;

export const CategoryTitle = styled.div`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
