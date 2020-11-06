"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cauldronReact = require("cauldron-react");

var _RecipeModalItem = _interopRequireDefault(require("../RecipeModalItem"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RecipeModal =
/*#__PURE__*/
function (_Component) {
  _inherits(RecipeModal, _Component);

  var _super = _createSuper(RecipeModal);

  function RecipeModal() {
    var _this;

    _classCallCheck(this, RecipeModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "addIngredient", function () {
      return _this.props.add('ingredients');
    });

    _defineProperty(_assertThisInitialized(_this), "addInstruction", function () {
      return _this.props.add('instructions');
    });

    _defineProperty(_assertThisInitialized(_this), "renderItems", function (type) {
      var _this$props = _this.props,
          errors = _this$props.errors,
          edit = _this$props.edit,
          recipe = _this$props.recipe,
          setItemRef = _this$props.setItemRef,
          onDelete = _this$props.onDelete;
      return recipe[type].map(function (value, i) {
        return (
          /*#__PURE__*/
          _react["default"].createElement(_RecipeModalItem["default"], {
            key: "".concat(recipe.name, ":").concat(value || "empty".concat(i)),
            error: errors[type].includes(i) ? 'Ingredient must not be empty' : null,
            edit: edit,
            index: i,
            data: value,
            type: type,
            fieldRef: function fieldRef(input) {
              setItemRef(type, i, input);
            },
            onDelete: onDelete
          })
        );
      });
    });

    return _this;
  }

  _createClass(RecipeModal, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          errors = _this$props2.errors,
          show = _this$props2.show,
          recipe = _this$props2.recipe,
          edit = _this$props2.edit,
          onClose = _this$props2.onClose,
          setWrapperRef = _this$props2.setWrapperRef,
          onGreaseChange = _this$props2.onGreaseChange,
          validate = _this$props2.validate;
      var ingredientItems = this.renderItems('ingredients');
      var instructionItems = this.renderItems('instructions');
      return (
        /*#__PURE__*/
        _react["default"].createElement(_cauldronReact.Modal, {
          show: show,
          heading: {
            text: "".concat(edit ? 'Edit' : 'Cooking', " ").concat(recipe.name)
          },
          onClose: onClose,
          className: "RecipeModal"
        },
        /*#__PURE__*/
        _react["default"].createElement("form", {
          onSubmit: validate
        },
        /*#__PURE__*/
        _react["default"].createElement(_cauldronReact.ModalContent, null,
        /*#__PURE__*/
        _react["default"].createElement("h3", {
          id: "ingredients-heading"
        }, "Ingredients"),
        /*#__PURE__*/
        _react["default"].createElement("div", {
          className: "RecipeModal__group",
          tabIndex: -1,
          ref: function ref(el) {
            setWrapperRef('ingredientsWrapper', el);
          },
          "aria-labelledby": "ingredients-heading"
        }, edit ? ingredientItems :
        /*#__PURE__*/
        _react["default"].createElement("ul", null, ingredientItems)), edit &&
        /*#__PURE__*/
        _react["default"].createElement("div", {
          className: "RecipeModal__add-another"
        },
        /*#__PURE__*/
        _react["default"].createElement("button", {
          type: "button",
          className: "dqpl-link",
          onClick: this.addIngredient
        }, "+ Add another ingredient")),
        /*#__PURE__*/
        _react["default"].createElement("h3", {
          id: "instructions-heading"
        }, "Instructions"),
        /*#__PURE__*/
        _react["default"].createElement("div", {
          className: "RecipeModal__group",
          tabIndex: -1,
          ref: function ref(el) {
            setWrapperRef('instructionsWrapper', el);
          },
          "aria-labelledby": "instructions-heading"
        }, edit ? instructionItems :
        /*#__PURE__*/
        _react["default"].createElement("ol", null, instructionItems)), edit ?
        /*#__PURE__*/
        _react["default"].createElement("div", {
          className: "RecipeModal__add-another"
        },
        /*#__PURE__*/
        _react["default"].createElement("button", {
          type: "button",
          className: "dqpl-link",
          onClick: this.addInstruction
        }, "+ Add another instruction")) :
        /*#__PURE__*/
        _react["default"].createElement("div", {
          className: "RecipeModal__global"
        },
        /*#__PURE__*/
        _react["default"].createElement(_cauldronReact.TextField, {
          label: "Rate the yumminess (0 - 50)",
          defaultValue: "".concat(recipe.yumminess),
          error: errors.yumminess ? 'Yumminess must be a number between 0 and 50' : null,
          type: "number",
          min: "0",
          max: "50",
          fieldRef: function fieldRef(el) {
            setWrapperRef('yumminess', el);
          }
        }),
        /*#__PURE__*/
        _react["default"].createElement(_cauldronReact.Checkbox, {
          value: "true",
          id: "grease-fire",
          name: "grease-fire",
          label: "I caused a grease fire making this",
          onChange: onGreaseChange
        }))),
        /*#__PURE__*/
        _react["default"].createElement(_cauldronReact.ModalFooter, null,
        /*#__PURE__*/
        _react["default"].createElement(_cauldronReact.Button, {
          type: "submit",
          onClick: validate,
          disabled: !recipe.instructions.length && !recipe.ingredients.length
        }, edit ? 'Save' : 'I cooked it'),
        /*#__PURE__*/
        _react["default"].createElement(_cauldronReact.Button, {
          secondary: true,
          onClick: onClose
        }, edit ? 'Cancel' : 'Close'))))
      );
    }
  }]);

  return RecipeModal;
}(_react.Component);

exports["default"] = RecipeModal;

_defineProperty(RecipeModal, "propTypes", {
  show: _propTypes["default"].bool.isRequired,
  recipe: _propTypes["default"].object.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onDelete: _propTypes["default"].func.isRequired,
  onGreaseChange: _propTypes["default"].func.isRequired,
  validate: _propTypes["default"].func.isRequired,
  add: _propTypes["default"].func.isRequired,
  setItemRef: _propTypes["default"].func.isRequired,
  setWrapperRef: _propTypes["default"].func.isRequired,
  errors: _propTypes["default"].object.isRequired,
  edit: _propTypes["default"].bool
});