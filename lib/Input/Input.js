'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background-color: #464646;\n  color: #a6e22d;\n  border: 0;\n  height: 38px;\n  margin: 0.3em;\n  border-radius: 0.2em;\n'], ['\n  background-color: #464646;\n  color: #a6e22d;\n  border: 0;\n  height: 38px;\n  margin: 0.3em;\n  border-radius: 0.2em;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInput = _styledComponents2.default.input(_templateObject);

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.typing = function (evt) {
      var _this$props = _this.props,
          type = _this$props.type,
          onChange = _this$props.onChange,
          debug = _this$props.debug;

      if (debug) {
        console.log(evt.target.value);
      }
      return onChange(evt.target.value, type);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      console.log('rendering');
      var _props = this.props,
          label = _props.label,
          value = _props.value,
          render = _props.render,
          placeholder = _props.placeholder,
          onChange = _props.onChange,
          autofocus = _props.autofocus,
          debug = _props.debug;

      if (debug) {
        console.log(onChange);
      }

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        render && _react2.default.createElement(StyledInput, {
          value: value,
          placeholder: placeholder,
          type: 'text',
          onChange: this.typing,
          size: 16
        })
      );
    }
  }]);

  return Input;
}(_react2.default.Component);

exports.default = Input;