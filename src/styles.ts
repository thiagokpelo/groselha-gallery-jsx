import styled from 'styled-components';

interface ImageType {
  size: number;
}

const SIZE = 200;

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;

// eslint-disable-next-line prettier/prettier
export const Image = styled.img<ImageType>`
  box-sizing: border-box;
  margin: 0;
  width: ${({ size }): number => size || SIZE}px;
  height: ${({ size }): number => size || SIZE}px;
  object-fit: cover;
`;
