"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

require("./Table.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          display: flex;\n          flex-direction: row;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n                display: flex;\n                flex-direction: row;\n              "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            width: ", "px;\n          "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Table = function Table(_ref) {
  var headers = _ref.headers,
      data = _ref.data;
  //
  //
  var col_widths = [];

  var getColumn = function getColumn(data, key) {
    var arr = [];
    data.map(function (row, i) {
      arr.push(row[0]);
    });
    console.log(arr);
    return arr;
  };

  var calcWidths = function calcWidths(data) {// const first = getColumn(data, "quantity")
    // var fontSize = 12
    // var test = document.getElementById("Test")
    // test.style.fontSize = fontSize
    // var height = test.clientHeight + 1 + "px"
    // var width = test.clientWidth + 1 + "px"
    // console.log(height, width)
  };

  var renderItem = function renderItem(item) {
    var col_widths = [3, 4, 5];
    return Object.entries(item).map(function (entry) {
      console.log(entry[0], entry[1]);
      var width = 0;

      switch (entry[0]) {
        case "name":
          width = 50;
          break;

        case "quantity":
          width = 20;

        default:
          break;
      }

      return (
        /*#__PURE__*/
        _react["default"].createElement("div", {
          className: (0, _emotion.css)(_templateObject(), width)
        }, entry[1])
      );
    });
  };

  var renderRows = function renderRows(data) {
    if (data.length > 0) {
      calcWidths(data);
      return data.map(function (item, i) {
        return (
          /*#__PURE__*/
          _react["default"].createElement(_react["default"].Fragment, {
            key: i
          },
          /*#__PURE__*/
          _react["default"].createElement("div", {
            className: (0, _emotion.css)(_templateObject2()),
            onClick: function onClick() {}
          }, renderItem(item)))
        );
      });
    } else {
      return (
        /*#__PURE__*/
        _react["default"].createElement("div", {
          key: 0
        }, "no data!")
      );
    }
  };

  return (
    /*#__PURE__*/
    _react["default"].createElement("div", null,
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: (0, _emotion.css)(_templateObject3())
    },
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: "quantity"
    }, "#"),
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: "name"
    }, "Name"),
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: "category"
    }, "Category"),
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: "type"
    }, "Type"),
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: "hp"
    }, "HP"),
    /*#__PURE__*/
    _react["default"].createElement("div", {
      className: "retreatCost"
    }, "Retreat Cost")), renderRows(data))
  );
};

Table.propTypes = {};
Table.defaultProps = {};
var _default = Table; // psuedo code

/*




for each item, render row
loop through each row, then check the particular colum, get longest string and adjust size

maintain "view" and database, handle sorting in database, then send the data into the table
"pre-processor?" go through values, figure out biggest value and adjust column size














*/

exports["default"] = _default;