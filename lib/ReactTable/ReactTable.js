"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

require("./ReactTable.css");

var _reactTable = require("react-table");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                        color: ", ";\n                        background-image: ", ";\n                        border-radius: 50px;\n                        padding: ", ";\n                        font-family: ", ";\n                        text-transform: ", ";\n                        text-shadow: ", ";\n                        font-weight: ", ";\n                        font-size: ", ";\n                        font-style: ", ";\n                      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                      text-align: center;\n                    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                &:first-child {\n                  td {\n                    border-top: 0;\n                  }\n                }\n                color: palevioletred;\n                &:hover {\n                  color: black;\n                }\n              "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n              background-image: linear-gradient(#969899, #ccc);\n              color: #000;\n              th {\n                padding: 5px;\n                &:first-child {\n                  border-top-left-radius: 52px;\n                  border-bottom-left-radius: 52px;\n                }\n                &:last-child {\n                  border-top-right-radius: 52px;\n                  border-bottom-right-radius: 52px;\n                  padding-right: 15px;\n                }\n              }\n            "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Table = function Table(_ref) {
  var columns = _ref.columns,
      data = _ref.data,
      rowClickCallback = _ref.rowClickCallback;

  //
  //
  // const foo = { bar: { foo: "bar"}}
  // const test = foo?.bar
  var _useTable = (0, _reactTable.useTable)({
    columns: columns,
    data: data
  }, _reactTable.useSortBy),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow; // } = useTable({ headers, data2 })


  return (
    /*#__PURE__*/
    _react["default"].createElement("table", getTableProps(),
    /*#__PURE__*/
    _react["default"].createElement("thead", {
      className: (0, _emotion.css)(_templateObject())
    }, headerGroups.map(function (headerGroup) {
      return (
        /*#__PURE__*/
        _react["default"].createElement("tr", _extends({}, headerGroup.getHeaderGroupProps(), {
          className: (0, _emotion.css)(_templateObject2())
        }), headerGroup.headers.map(function (column) {
          return (
            /*#__PURE__*/
            // Add the sorting props to control sorting. For this example
            // we can add them into the header props
            _react["default"].createElement("th", column.getHeaderProps(column.getSortByToggleProps()), column.render("Header"),
            /*#__PURE__*/
            _react["default"].createElement("span", null, column.isSorted ? column.isSortedDesc ? " 🔽" : " 🔼" : ""))
          );
        }))
      );
    })),
    /*#__PURE__*/
    _react["default"].createElement("tbody", getTableBodyProps(), rows.map(function (row) {
      prepareRow(row);
      return (
        /*#__PURE__*/
        _react["default"].createElement("tr", _extends({}, row.getRowProps(), {
          onClick: function onClick() {
            return rowClickCallback(row);
          },
          className: (0, _emotion.css)(_templateObject3())
        }), row.cells.map(function (cell) {
          var color,
              backgroundImage,
              textTransform,
              textShadow,
              fontFamily,
              fontWeight,
              fontStyle,
              fontSize,
              padding = undefined;

          if (cell.column.id === "type") {
            padding = "3px";

            switch (cell.value) {
              case "grass":
                color = "#fff";
                backgroundImage = "linear-gradient(#a0ce90, #2bb452)";
                break;

              case "psychic":
                color = "#fff";
                backgroundImage = "linear-gradient(#b3a3c5, #6b4a9b)";
                break;

              case "water":
                color = "#fff";
                backgroundImage = "linear-gradient(#56B2F8, #C0E6F4)";
                break;

              case "fire":
                color = "#fff";
                backgroundImage = "linear-gradient(#EA3D4A, #DF9371)";
                break;

              case "lightning":
                color = "#000";
                backgroundImage = "linear-gradient(#EDB82D, #E8E01D)";
                break;

              case "dark":
                color = "#fff";
                backgroundImage = "linear-gradient(#436e88, #30343d)";
                break;

              case "steel":
                color = "#fff";
                backgroundImage = "linear-gradient(#7e7c77, #d6c6af)";
                break;

              case "fairy":
                color = "#fff";
                backgroundImage = "linear-gradient(#fd149b, #c0054a)";
                break;

              case "fighting":
                color = "#000";
                backgroundImage = "linear-gradient( #e36229, #FFC271)";
                break;

              case "normal":
                color = "#000";
                backgroundImage = "linear-gradient(#E2D2DC, #EDE9E8)";
                break;

              default:
                break;
            }

            console.log(cell);
          } else if (cell.column.id === "name") {
            fontFamily = "Fira Sans";
          } else if (cell.column.id === "hp") {
            fontFamily = "Fira Sans";
          } else if (cell.column.id === "retreatCost") {
            fontFamily = "Fira Sans";
          } else if (cell.column.id === "quantity") {
            fontFamily = "Fira Sans";
          } else if (cell.column.id === "category") {
            padding = "3px";

            switch (cell.value) {
              case "Trainer":
                textTransform = "uppercase";
                backgroundImage = "linear-gradient(-90deg,#EEC035, #F3E383,#EEC035)";
                color = "#000";
                fontFamily = "Signika";
                fontStyle = "bold";
                fontWeight = "800";
                break;

              case "Stadium":
                textTransform = "uppercase";
                backgroundImage = "linear-gradient(#647757,#DEEBD4 )";
                color = "Black";
                fontWeight = "800"; // fontSize = "10pt"

                break;

              case "Supporter":
                textTransform = "uppercase";
                color = "#F63916";
                backgroundImage = "linear-gradient(#8A7871, #FBF7E9,#8A7871)";
                fontWeight = 600;
                textShadow = "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff";
                fontFamily = "'Passion One', sans-serif";
                fontStyle = "italic";
                break;

              case "Stage 1":
                textTransform = "uppercase";
                color = "#626565";
                backgroundImage = "linear-gradient(#A19D90, #FFFEFE,#A19D90)";
                fontWeight = 800;
                break;

              case "Stage 2":
                textTransform = "uppercase";
                color = "#626565";
                backgroundImage = "linear-gradient(#A19D90, #FFFEFE,#A19D90)";
                fontWeight = 800;
                break;

              case "Basic":
                textTransform = "uppercase";
                color = "#626565";
                fontFamily = "'Orbitron', cursive";
                backgroundImage = "linear-gradient(#A19D90, #FFFEFE,#A19D90)";
                fontWeight = 800;
                break;

              case "Tool":
                textTransform = "uppercase";
                color = "#0E74BA";
                backgroundImage = "linear-gradient(#A19D90, #FFFEFE,#A19D90)";
                fontWeight = 800;
                break;

              case "Energy":
                textTransform = "uppercase";
                fontFamily = "'Audiowide', cursive";
                color = "#000";
                fontWeight = 800;
                break;

              case "Special Energy":
                textTransform = "uppercase";
                fontFamily = "'Audiowide', cursive";
                color = "#000";
                fontWeight = 500;
                fontSize = "10pt";
                break;

              default:
                break;
            }
          } else {
            padding = "5px";
          }

          return (
            /*#__PURE__*/
            _react["default"].createElement("td", _extends({
              className: (0, _emotion.css)(_templateObject4())
            }, cell.getCellProps()),
            /*#__PURE__*/
            _react["default"].createElement("div", {
              className: (0, _emotion.css)(_templateObject5(), color, backgroundImage, padding, fontFamily, textTransform, textShadow, fontWeight, fontSize, fontStyle)
            }, cell.render("Cell")))
          );
        }))
      );
    })))
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