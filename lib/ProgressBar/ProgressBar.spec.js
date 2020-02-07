"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _ProgressBar = require("./ProgressBar");

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ProgressBar', function () {
  test('getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', function () {
    var wrapper = (0, _enzyme.shallow)(_react2["default"].createElement(_ProgressBar2["default"], {
      percent: 50,
      width: 500
    }));
    var width = wrapper.instance().getWidthAsPercentOfTotalWidth();
    expect(width).toEqual(250);
  });
});