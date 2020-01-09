'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// color: palevioletred;
// border-radius: 0.25em;
// background: ${props => (props.primary ? 'palevioletred' : 'white')};
// border: 2px solid palevioletred;
var Bttn = _styledComponents2.default.input(_templateObject);

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
      var createButtonStyleFromTheme = function createButtonStyleFromTheme(_ref2) {
        var button = _ref2.button;
        return {
          borderColor: button.borderColor,
          backgroundColor: button.backgroundColor,
          color: button.color,
          borderWidth: button.borderWidth,
          borderStyle: button.borderStyle,
          borderRadius: '3px',
          margin: '0 1em',
          padding: '0.5em 2em'
        };
      };
      var defaultTheme = {
        borderColor: 'palevioletred',
        backgroundColor: '#fff',
        color: 'palevioletred',
        borderStyle: 'solid',
        borderRadius: '3px',
        margin: '0 1em',
        padding: '0.5em 2em'
      };
      var darkTheme = {
        borderColor: 'palevioletred',
        backgroundColor: '#121212',
        color: 'palevioletred',
        borderStyle: 'solid',
        borderRadius: '3px',
        margin: '0 1em',
        padding: '0.5em 2em'
      };
      var _props = this.props,
          text = _props.text,
          theme = _props.theme,
          dark = _props.dark;

      var finalTheme = defaultTheme;

      return _react2.default.createElement(Bttn, {
        style: createButtonStyleFromTheme(theme),
        type: 'button',
        onClick: this.handleClick,
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
      borderColor: 'red',
      color: 'blue'
    }
  }
};

exports.default = Button;