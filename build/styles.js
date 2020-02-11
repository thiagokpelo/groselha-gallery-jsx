import styled from 'styled-components';
const SIZE = 200;
export const Container = styled.div `
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;
// eslint-disable-next-line prettier/prettier
export const Image = styled.img `
  box-sizing: border-box;
  margin: 0;
  width: ${({ size }) => size || SIZE}px;
  height: ${({ size }) => size || SIZE}px;
  object-fit: cover;
`;
//# sourceMappingURL=styles.js.map