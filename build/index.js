import React from 'react';
import { Container, Image } from './styles';
var Gallery = function (_a) {
    var data = _a.data, imageSize = _a.imageSize;
    return (React.createElement(Container, null, (data || []).map(function (item) { return (React.createElement(Image, { key: item.id, alt: item.caption.text, src: item.images.standard_resolution.url, size: imageSize })); })));
};
export default Gallery;
//# sourceMappingURL=index.js.map