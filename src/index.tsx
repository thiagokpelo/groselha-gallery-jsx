import React from 'react';
import { Container, Image } from './styles';

type GalleryTypes = { data: [], imageSize: number };

const Gallery: React.SFC<GalleryTypes> = ({ data, imageSize }) => (
  <Container>
    {(data || []).map((item: any) => (
      <Image
        key={item.id}
        alt={item.caption.text}
        src={item.images.standard_resolution.url}
        size={imageSize}
      />
    ))}
  </Container>
);

export default Gallery;
