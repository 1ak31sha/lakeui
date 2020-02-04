"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Label = _interopRequireDefault(require("../Label"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 16px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border: ", ";\n    display: block;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    color: red;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
function TextInput(_ref) {
  var htmlId = _ref.htmlId,
      name = _ref.name,
      label = _ref.label,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      value = _ref.value,
      error = _ref.error,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["htmlId", "name", "label", "type", "required", "onChange", "placeholder", "value", "error", "children"]);

  var Error = _styledComponents.default.div(_templateObject());

  var Input = _styledComponents.default.input(_templateObject2(), error && 'solid 1px red');

  var Fieldset = _styledComponents.default.div(_templateObject3());

  return _react.default.createElement(Fieldset, null, _react.default.createElement(_Label.default, {
    htmlFor: htmlId,
    label: label,
    required: required
  }), _react.default.createElement(Input, _extends({
    id: htmlId,
    type: type,
    name: name,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }, props)), children, error && _react.default.createElement(Error, null, error));
}

;
TextInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: _propTypes.default.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: _propTypes.default.string.isRequired,

  /** Input label */
  label: _propTypes.default.string.isRequired,

  /** Input type */
  type: _propTypes.default.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: _propTypes.default.bool,

  /** Function to call onChange */
  onChange: _propTypes.default.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: _propTypes.default.string,

  /** Value */
  value: _propTypes.default.any,

  /** String to display when error occurs */
  error: _propTypes.default.string,

  /** Child component to display next to the input */
  children: _propTypes.default.node
};
var _default = TextInput;
exports.default = _default;