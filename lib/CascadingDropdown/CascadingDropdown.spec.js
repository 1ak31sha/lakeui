"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _PasswordInput = require("./PasswordInput");

var _PasswordInput2 = _interopRequireDefault(_PasswordInput);

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('toggles input type when show/hide password clicked', function () {
  var wrapper = (0, _enzyme.shallow)(_react2["default"].createElement(_PasswordInput2["default"], {
    htmlId: "test",
    name: "test",
    value: "",
    onChange: function onChange() {},
    showVisibilityToggle: true
  })); // Password input should have a type of password initially

  expect(wrapper.find({
    type: 'password'
  })).toHaveLength(1);
  expect(wrapper.find({
    type: 'text'
  })).toHaveLength(0);
  wrapper.find('a').simulate('click'); // Password input should have a type of text after clicking toggle

  expect(wrapper.find({
    type: 'password'
  })).toHaveLength(0);
  expect(wrapper.find({
    type: 'text'
  })).toHaveLength(1);
});
test('hides password quality by default', function () {
  var tree = _reactTestRenderer2["default"].create(_react2["default"].createElement(_PasswordInput2["default"], {
    htmlId: "test",
    name: "test",
    onChange: function onChange() {},
    value: "Uisi38#8iad"
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('shows password quality when enabled and a password is entered', function () {
  var tree = _reactTestRenderer2["default"].create(_react2["default"].createElement(_PasswordInput2["default"], {
    htmlId: "test",
    name: "test",
    onChange: function onChange() {},
    showQuality: true,
    value: "Uisi38#8iad"
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('hides password quality when enabled but no password is entered', function () {
  var tree = _reactTestRenderer2["default"].create(_react2["default"].createElement(_PasswordInput2["default"], {
    htmlId: "test",
    name: "test",
    onChange: function onChange() {},
    showQuality: true,
    value: ""
  })).toJSON();

  expect(tree).toMatchSnapshot();
});