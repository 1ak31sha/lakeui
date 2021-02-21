"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

function Func() {
  // const [index, setIndex] = useState(0)
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

  return (
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: ""
    },
    /*#__PURE__*/
    _react["default"].createElement("br", null),
    /*#__PURE__*/
    _react["default"].createElement("br", null))
  );
}
/** SVG Eye Icon */


var EyeIcon2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EyeIcon2, _React$Component);

  var _super = _createSuper(EyeIcon2);

  function EyeIcon2(props) {
    var _this;

    _classCallCheck(this, EyeIcon2);

    _this = _super.call(this, props);
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
      return (
        /*#__PURE__*/
        _react["default"].createElement("h1", null, "Hello,",
        /*#__PURE__*/
        _react["default"].createElement(Func, null), " ")
      );
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
}(_react["default"].Component); // Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg
// Mounting
// These methods are called in the following order when an instance of a component is being created and inserted into the DOM:


var _default = EyeIcon2;
exports["default"] = _default;