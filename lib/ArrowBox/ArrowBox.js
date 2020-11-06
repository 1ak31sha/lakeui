"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

require("./ArrowBox.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        position: relative;\n        background: ", ";\n        color: ", ";\n        border: ", "px solid ", ";\n        width: 200px;\n        padding: 0.6rem;\n        &:after,\n        &:before {\n          left: ", ";\n          bottom: ", ";\n          right: ", ";\n          top: ", ";\n          border: solid transparent;\n          content: \" \";\n          height: 0;\n          width: 0;\n          position: absolute;\n          pointer-events: none;\n        }\n        &:before {\n          border-bottom-color: ", ";\n          border-left-color: ", ";\n          border-top-color: ", ";\n          border-right-color: ", ";\n          border-width: ", "px;\n          margin-left: -", "px;\n          margin-top: -", "px;\n        }\n        &:after {\n          border-bottom-color: ", ";\n          border-left-color: ", ";\n          border-top-color: ", ";\n          border-right-color: ", ";\n          border-width: ", "px;\n          margin-left: -", "px;\n          margin-top: -", "px;\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var arrowSize = 10;

var ArrowBox = function ArrowBox(_ref) {
  var children = _ref.children,
      position = _ref.position,
      backgroundColor = _ref.backgroundColor,
      borderWidth = _ref.borderWidth,
      borderColor = _ref.borderColor,
      textColor = _ref.textColor,
      arrowSize = _ref.arrowSize;
  var left,
      bottom,
      topp,
      right,
      borderBottomBeforeColor,
      borderBottomAfterColor,
      borderTopBeforeColor,
      borderTopAfterColor,
      borderLeftBeforeColor,
      borderLeftAfterColor,
      borderRightBeforeColor,
      borderRightAfterColor,
      marginTop,
      marginLeft = undefined;

  switch (position) {
    case "TOP":
      left = "50%";
      bottom = "100%";
      borderBottomBeforeColor = borderColor;
      borderBottomAfterColor = backgroundColor;
      marginLeft = arrowSize;
      break;

    case "RIGHT":
      left = "100%";
      topp = "50%";
      borderLeftBeforeColor = borderColor;
      borderLeftAfterColor = backgroundColor;
      marginTop = arrowSize;
      break;

    case "BOTTOM":
      topp = "100%";
      left = "50%";
      borderTopBeforeColor = borderColor;
      borderTopAfterColor = backgroundColor;
      marginLeft = arrowSize;
      break;

    case "LEFT":
      right = "100%";
      topp = "50%";
      borderRightBeforeColor = borderColor;
      borderRightAfterColor = backgroundColor;
      marginTop = arrowSize;
      break;

    default:
      break;
  }

  return (
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: (0, _emotion.css)(_templateObject(), backgroundColor, textColor, borderWidth, borderColor, left, bottom, right, topp, borderBottomBeforeColor, borderLeftBeforeColor, borderTopBeforeColor, borderRightBeforeColor, arrowSize + borderWidth, marginLeft + borderWidth, marginTop + borderWidth, borderBottomAfterColor, borderLeftAfterColor, borderTopAfterColor, borderRightAfterColor, arrowSize, marginLeft, marginTop)
    }, children)
  );
};

ArrowBox.propTypes = {
  /** the width of the arrow itself */
  arrowSize: _propTypes["default"].number,

  /** The position of the Box's Arrow */
  position: _propTypes["default"].string,

  /** The background color... */
  backgroundColor: _propTypes["default"].string,

  /** The border width */
  borderWidth: _propTypes["default"].number,

  /** the border color */
  borderColor: _propTypes["default"].string,

  /** the text color */
  textColor: _propTypes["default"].string
};
ArrowBox.defaultProps = {
  arrowSize: 10,
  backgroundColor: "#FFF",
  borderColor: "palevioletred",
  borderWidth: 1,
  position: "BOTTOM",
  textColor: "#000"
};
var _default = ArrowBox;
exports["default"] = _default;