"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// border-radius: 0.25em;
// border: 2px solid palevioletred;
// background: ${props => (props.primary ? 'palevioletred' : 'white')};
// const fontSizes = {}
// case 0: return 'palevioletred'
// case 1: return '#121212'
// case 2: return 'black'
// color: $props => {
// props.color === 2 ? 'black' : '#121212'
// }};
// background: ${props => (props.dark ? 'orange' : 'white')};
//const Bttn = styled.input
//  font-size: ${props => {
//    switch (props.fontSize) {
//      case 0:
//        return css
//          font-size: 12pt;
//        
//      case 1:
//        return '24pt'
//      case 2:
//        return '48pt'
//      default:
//        return '36'
//    }
//  }};
//
// margin: ${props => {
// switch(props.margin){
// case 0: return '1px'
// case 1: return '3px'
// case 2: return '50px'
// }
// }};

/** Password input with integrated label, quality tips, and show password toggle. */
var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (reactSyntheticEvent) {
      // eslint-disable-next-line no-use-before-define
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
      var _this2 = this;

      var createButtonStyleFromTheme = function createButtonStyleFromTheme(_ref) {
        var button = _ref.button;
        return {
          borderColor: button.borderColor,
          backgroundColor: _this2.props.color || button.backgroundColor,
          color: button.color,
          fontSize: _this2.props.fontSize || button.fontSize,
          fontFamily: button.fontFamily,
          borderWidth: button.borderWidth,
          borderStyle: button.borderStyle,
          borderRadius: button.borderRadius,
          width: button.width,
          padding: button.padding,
          margin: button.margin
        };
      }; //const themes = {
      //  light: {
      //    borderColor: 'palevioletred',
      //    backgroundColor: '#fff',
      //    color: 'palevioletred',
      //    borderStyle: 'solid',
      //  },
      //  darkTheme: {
      //    borderColor: 'palevioletred',
      //    backgroundColor: '#121212',
      //    color: 'palevioletred',
      //  },
      //}


      var _this$props = this.props,
          text = _this$props.text,
          theme = _this$props.theme,
          margin = _this$props.margin,
          fontSize = _this$props.fontSize; // dark

      if (theme) {// const finalTheme = themes.light
      } else {
        return _react2["default"].createElement("input", {
          type: "button",
          onClick: this.handleClick,
          fontSize: fontSize,
          margin: margin,
          value: text
        });
      }

      return _react2["default"].createElement("input", {
        style: createButtonStyleFromTheme(theme),
        type: "button",
        onClick: this.handleClick,
        fontSize: fontSize,
        margin: margin,
        value: text
      });
    }
  }]);

  return Button;
}(_react2["default"].Component);

Button.propTypes = {
  /** the text to show on the button */
  text: _propTypes2["default"].string,
  theme: _propTypes2["default"].object
};
Button.defaultProps = {
  text: 'Click me',
  theme: {
    button: {
      backgroundColor: 'white',
      borderColor: 'palevioletred',
      color: 'palevioletred',
      fontSize: '16pt',
      fontFamily: 'Avenir Next',
      borderRadius: '3px',
      width: '8em',
      padding: '0.5rem 0',
      margin: '0.5rem 1rem',
      borderWidth: '0.051em'
    }
  }
};
exports["default"] = Button;