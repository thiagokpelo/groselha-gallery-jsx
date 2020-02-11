"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styles_1 = require("./styles");
var Gallery = function (_a) {
    var data = _a.data, imageSize = _a.imageSize;
    return (react_1.default.createElement(styles_1.Container, null, (data || []).map(function (item) { return (react_1.default.createElement(styles_1.Image, { key: item.id, alt: item.caption.text, src: item.images.standard_resolution.url, size: imageSize })); })));
};
exports.default = Gallery;
//# sourceMappingURL=index.js.map