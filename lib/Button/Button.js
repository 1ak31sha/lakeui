'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', ';\n'], ['\n  font-size: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['font-size: 12pt'], ['font-size: 12pt']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// border-radius: 0.25em;
// border: 2px solid palevioletred;
// background: ${props => (props.primary ? 'palevioletred' : 'white')};

var fontSizes = {};
// case 0: return 'palevioletred'
// case 1: return '#121212'
// case 2: return 'black'
// color: $props => {
// props.color === 2 ? 'black' : '#121212'
// }};
// background: ${props => (props.dark ? 'orange' : 'white')};
var Bttn = _styledComponents2.default.input(_templateObject, function (props) {
  switch (props.fontSize) {
    case 0:
      return (0, _styledComponents.css)(_templateObject2);
    case 1:
      return '24pt';
    case 2:
      return '48pt';
  }
});
// margin: ${props => {
// switch(props.margin){
// case 0: return '1px'
// case 1: return '3px'
// case 2: return '50px'
// }
// }};

/** Password input with integrated label, quality tips, and show password toggle. */

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (reactSyntheticEvent) {
      // eslint-disable-next-line no-use-before-define
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var createButtonStyleFromTheme = function createButtonStyleFromTheme(_ref2) {
        var _ref3;

        var button = _ref2.button;
        return _ref3 = {
          borderColor: button.borderColor,
          backgroundColor: _this2.props.color || button.backgroundColor,
          color: button.color,

          fontSize: _this2.props.fontSize || button.fontSize,
          fontFamily: button.fontFamily,
          borderWidth: button.borderWidth,
          borderStyle: button.borderStyle,
          borderRadius: button.borderRadius
        }, _defineProperty(_ref3, 'borderWidth', button.borderWidth), _defineProperty(_ref3, 'width', button.width), _defineProperty(_ref3, 'padding', button.padding), _defineProperty(_ref3, 'margin', button.margin), _ref3;
      };
      var themes = {
        light: {
          borderColor: 'palevioletred',
          backgroundColor: '#fff',
          color: 'palevioletred',
          borderStyle: 'solid'
        },
        // borderRadius: '3px',
        // margin: '0 1em',
        // padding: '0.5em 2em',
        darkTheme: {
          borderColor: 'palevioletred',
          backgroundColor: '#121212',
          color: 'palevioletred'
        }
        // borderStyle: 'solid',
        // borderRadius: '3px',
        // margin: '0 1em',
        // padding: '0.5em 2em',
      };
      var _props = this.props,
          text = _props.text,
          theme = _props.theme,
          dark = _props.dark,
          margin = _props.margin,
          fontSize = _props.fontSize;

      if (theme) {
        var finalTheme = themes.light;
      } else {
        return _react2.default.createElement(Bttn, {
          type: 'button',
          onClick: this.handleClick,
          fontSize: fontSize,
          margin: margin,
          value: text });
      }
      return _react2.default.createElement(Bttn, {
        style: createButtonStyleFromTheme(theme),
        type: 'button',
        onClick: this.handleClick,
        fontSize: fontSize,
        margin: margin,
        value: text });
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.propTypes = {
  /** the text to show on the button */
  text: _propTypes2.default.string,

  theme: _propTypes2.default.object
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

exports.default = Button;