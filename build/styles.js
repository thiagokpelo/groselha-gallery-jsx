"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var SIZE = 200;
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  width: 100%;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n"], ["\n  box-sizing: border-box;\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  width: 100%;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n"])));
// eslint-disable-next-line prettier/prettier
exports.Image = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  margin: 0;\n  width: ", "px;\n  height: ", "px;\n  object-fit: cover;\n"], ["\n  box-sizing: border-box;\n  margin: 0;\n  width: ", "px;\n  height: ", "px;\n  object-fit: cover;\n"])), function (_a) {
    var size = _a.size;
    return size || SIZE;
}, function (_a) {
    var size = _a.size;
    return size || SIZE;
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map