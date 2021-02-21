"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button() {
    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (reactSyntheticEvent) {
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick();
      }
    });

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var lightTheme = {
        button: {
          backgroundColor: 'white',
          color: 'palevioletred'
        }
      };

      var createButtonStyleFromTheme = function createButtonStyleFromTheme(_ref) {
        var button = _ref.button;
        return {
          backgroundColor: button.backgroundColor || 'black',
          borderColor: button.borderColor || 'palevioletred',
          color: button.color || 'palevioletred',
          fontSize: button.fontSize || '18pt',
          fontFamily: button.fontFamily || 'verdana',
          borderWidth: button.borderWidth || '2.1px',
          borderStyle: button.borderStyle,
          borderRadius: button.borderRadius || '1rem',
          width: button.width,
          padding: button.padding || '0.14em',
          paddingLeft: '1em',
          paddingRight: '1em',
          margin: button.margin || '0.22em'
        };
      };

      var _this$props = this.props,
          text = _this$props.text,
          theme = _this$props.theme,
          light = _this$props.light; // dark

      console.log(createButtonStyleFromTheme(theme));
      console.log(light);
      return (
        /*#__PURE__*/
        _react["default"].createElement("input", {
          style: light ? createButtonStyleFromTheme(lightTheme) : createButtonStyleFromTheme(theme),
          type: "button",
          onClick: this.handleClick,
          value: text
        })
      );
    }
  }]);

  return Button;
}(_react["default"].Component);

Button.propTypes = {
  /** the text to show on the button */
  text: _propTypes["default"].string,
  theme: _propTypes["default"].object
};
Button.defaultProps = {
  text: 'Click me',
  theme: {
    button: {}
  }
};
var _default = Button;
exports["default"] = _default;