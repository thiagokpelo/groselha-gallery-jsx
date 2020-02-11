import React from 'react';
import { Container, Image } from './styles';
var Gallery = function (_a) {
    var data = _a.data, imageSize = _a.imageSize;
    return (<Container>
    {(data || []).map(function (item) { return (<Image key={item.id} alt={item.caption.text} src={item.images.standard_resolution.url} size={imageSize}/>); })}
  </Container>);
};
export default Gallery;
//# sourceMappingURL=index.jsx.map