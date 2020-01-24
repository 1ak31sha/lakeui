'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Func() {
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  console.log('function component');
  // const [theme, setTheme] = useState()
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

  return _react2.default.createElement(
    'div',
    { className: '' },
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    'fontSize:',
    index
  );
}

/** SVG Eye Icon */

var EyeIcon2 = function (_React$Component) {
  _inherits(EyeIcon2, _React$Component);

  function EyeIcon2(props) {
    _classCallCheck(this, EyeIcon2);

    var _this = _possibleConstructorReturn(this, (EyeIcon2.__proto__ || Object.getPrototypeOf(EyeIcon2)).call(this, props));

    _this.state = { date: new Date() };
    console.log('constructor, props', props, 'testing');
    return _this;
  }

  _createClass(EyeIcon2, [{
    key: 'render',
    value: function render() {
      console.log('render');
      return _react2.default.createElement(
        'h1',
        null,
        'Hello,',
        _react2.default.createElement(Func, null),
        ' '
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      console.log('getderivedStateFromProps', props, state);
    }
  }, {
    key: 'getDerivedStateFromError',
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  }]);

  return EyeIcon2;
}(_react2.default.Component);
// Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg
// Mounting
// These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

exports.default = EyeIcon2;