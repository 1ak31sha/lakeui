"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Func() {
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  console.log('function component'); // const [theme, setTheme] = useState()
  //const themes = {
  //  light: {
  //    button: {
  //      backgroundColor: '#121212',
  //      borderColor: 'palevioletred',
  //      color: 'palevioletred',
  //      fontSize: '21pt',
  //    },
  //  },
  //  dark: {
  //    button: {
  //      backgroundColor: '#202020',
  //      borderColor: '#131313',
  //      color: 'palevioletred',
  //      fontSize: '16pt',
  //      fontFamily: 'Avenir Next',
  //      borderRadius: '3px',
  //      width: '8em',
  //      padding: '0.5rem 0',
  //      margin: '0.5rem 1rem',
  //      borderWidth: '0.051em',
  //    },
  //  },
  //}
  // const toggleTheme = () => {
  // // // // // // // // console.log('new drip', index % 3)
  // setIndex(index => index + 1)
  // setTheme()
  //}

  return _react2["default"].createElement("div", {
    className: ""
  }, _react2["default"].createElement("br", null), _react2["default"].createElement("br", null), "fontSize:", index);
}
/** SVG Eye Icon */


var EyeIcon2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EyeIcon2, _React$Component);

  function EyeIcon2(props) {
    var _this;

    _classCallCheck(this, EyeIcon2);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EyeIcon2).call(this, props));
    _this.state = {
      date: new Date()
    };
    console.log('constructor, props', props, "testing");
    return _this;
  }

  _createClass(EyeIcon2, [{
    key: "render",
    value: function render() {
      console.log('render');
      return _react2["default"].createElement("h1", null, "Hello,", _react2["default"].createElement(Func, null), " ");
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      console.log('getderivedStateFromProps', props, state);
    }
  }, {
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true
      };
    }
  }]);

  return EyeIcon2;
}(_react2["default"].Component); // Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg
// Mounting
// These methods are called in the following order when an instance of a component is being created and inserted into the DOM:


exports["default"] = EyeIcon2;