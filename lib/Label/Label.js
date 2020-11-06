"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Label with required field display, htmlFor, and block styling */
function Label(_ref) {
  var htmlFor = _ref.htmlFor,
      label = _ref.label,
      required = _ref.required;
  return (
    /*#__PURE__*/
    _react["default"].createElement("label", {
      style: {
        display: 'block'
      },
      htmlFor: htmlFor
    }, label, " ", required &&
    /*#__PURE__*/
    _react["default"].createElement("span", {
      style: {
        color: 'red'
      }
    }, " *"))
  );
}

Label.propTypes = {
  /** HTML ID for associated input */
  htmlFor: _propTypes["default"].string.isRequired,

  /** Label text */
  label: _propTypes["default"].string.isRequired,

  /** Display asterisk after label if true */
  required: _propTypes["default"].bool
};
var _default = Label;
exports["default"] = _default;