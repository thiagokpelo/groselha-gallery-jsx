import React from 'react';
import { Container, Image } from './styles';
const Gallery = ({ data, imageSize }) => (<Container>
    {(data || []).map((item) => (<Image key={item.id} alt={item.caption.text} src={item.images.standard_resolution.url} size={imageSize}/>))}
  </Container>);
export default Gallery;
//# sourceMappingURL=index.jsx.map