"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ProgressBar = require("../ProgressBar");

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _EyeIcon = require("../EyeIcon");

var _EyeIcon2 = _interopRequireDefault(_EyeIcon);

var _TextInput = require("../TextInput");

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Password input with integrated label, quality tips, and show password toggle. */
var PasswordInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PasswordInput, _React$Component);

  function PasswordInput(props) {
    var _this;

    _classCallCheck(this, PasswordInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PasswordInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleShowPassword", function (event) {
      _this.setState(function (prevState) {
        return {
          showPassword: !prevState.showPassword
        };
      });

      if (event) event.preventDefault();
    });

    _this.state = {
      expanded: false
    };
    return _this;
  }

  _createClass(PasswordInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          htmlId = _this$props.htmlId,
          value = _this$props.value,
          label = _this$props.label,
          error = _this$props.error,
          onChange = _this$props.onChange,
          placeholder = _this$props.placeholder,
          maxLength = _this$props.maxLength,
          showVisibilityToggle = _this$props.showVisibilityToggle,
          quality = _this$props.quality,
          props = _objectWithoutProperties(_this$props, ["htmlId", "value", "label", "error", "onChange", "placeholder", "maxLength", "showVisibilityToggle", "quality"]);

      var showPassword = this.state.showPassword;
      return _react2["default"].createElement(_TextInput2["default"], _extends({
        htmlId: htmlId,
        label: label,
        placeholder: placeholder,
        type: showPassword ? 'text' : 'password',
        onChange: onChange,
        value: value,
        maxLength: maxLength,
        error: error,
        required: true
      }, props), showVisibilityToggle && _react2["default"].createElement("a", {
        href: "#",
        onClick: this.toggleShowPassword,
        style: {
          marginLeft: 5
        }
      }, _react2["default"].createElement(_EyeIcon2["default"], null)), value.length > 0 && quality && _react2["default"].createElement(_ProgressBar2["default"], {
        percent: quality,
        width: 130
      }));
    }
  }]);

  return PasswordInput;
}(_react2["default"].Component);

PasswordInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: _propTypes2["default"].string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/
  name: _propTypes2["default"].string.isRequired,

  /** Password value */
  value: _propTypes2["default"].any,

  /** Input label */
  label: _propTypes2["default"].string,

  /** Function called when password input value changes */
  onChange: _propTypes2["default"].func.isRequired,

  /** Max password length accepted */
  maxLength: _propTypes2["default"].number,

  /** Placeholder displayed when no password is entered */
  placeholder: _propTypes2["default"].string,

  /** Set to true to show the toggle for displaying the currently entered password */
  showVisibilityToggle: _propTypes2["default"].bool,

  /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */
  quality: _propTypes2["default"].number,

  /** Validation error to display */
  error: _propTypes2["default"].string
};
PasswordInput.defaultProps = {
  maxLength: 50,
  showVisibilityToggle: false,
  label: 'Password'
};
exports["default"] = PasswordInput;