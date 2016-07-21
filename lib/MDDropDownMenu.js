'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MDDropDownMenu = require('./MDDropDownMenu.css');

var _MDDropDownMenu2 = _interopRequireDefault(_MDDropDownMenu);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MDDropDownMenu = function (_Component) {
  _inherits(MDDropDownMenu, _Component);

  function MDDropDownMenu(props) {
    _classCallCheck(this, MDDropDownMenu);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MDDropDownMenu).call(this, props));

    _this.state = {
      defaultOption: _this.props.defaultOption,
      id: _uuid2.default.v1()
    };
    return _this;
  }

  _createClass(MDDropDownMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var localDropdown = _MDDropDownMenu2.default.dropdown;
      var localSelected = _MDDropDownMenu2.default.selected;
      var localOptions = _MDDropDownMenu2.default.options;
      var mdDropDownMenu = this;
      var onSelect = this.props.onSelect;

      var dropdown = (0, _jquery2.default)('#' + this.state.id);
      dropdown.find('.' + localSelected).click(function () {
        dropdown.find('.' + localOptions + ' ul').toggle();
      });

      dropdown.find('li').click(function () {
        var selectedOption = (0, _jquery2.default)(this).html();
        mdDropDownMenu.setState({ defaultOption: selectedOption });
        onSelect(selectedOption);
        dropdown.find('.' + localOptions + ' ul').hide();
      });

      (0, _jquery2.default)(document).bind('click', function (e) {
        if (!(0, _jquery2.default)(e.target).parents().hasClass(localDropdown)) {
          (0, _jquery2.default)('.' + localDropdown + ' ul').hide();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var options = _props.options;
      var width = _props.width;
      var height = _props.height;
      var _state = this.state;
      var defaultOption = _state.defaultOption;
      var id = _state.id;

      var widthStyle = { width: width };
      var heightStyle = { height: height, lineHeight: height + 'px' };
      var optionsWithoutDefault = options.filter(function (option) {
        return option !== defaultOption;
      });
      return _react2.default.createElement(
        'div',
        { id: id, className: _MDDropDownMenu2.default.dropdown, style: widthStyle },
        _react2.default.createElement(
          'div',
          { className: _MDDropDownMenu2.default.selected, style: heightStyle },
          _react2.default.createElement(
            'div',
            null,
            defaultOption
          ),
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('i', { className: 'fa fa-chevron-down' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _MDDropDownMenu2.default.options },
          _react2.default.createElement(
            'ul',
            { style: widthStyle },
            optionsWithoutDefault.map(function (option, i) {
              return _react2.default.createElement(
                'li',
                { key: i, style: heightStyle },
                option
              );
            })
          )
        )
      );
    }
  }]);

  return MDDropDownMenu;
}(_react.Component);

MDDropDownMenu.propTypes = {
  options: _react.PropTypes.arrayOf(_react.PropTypes.string),
  defaultOption: _react.PropTypes.string,
  onSelect: _react.PropTypes.func,
  width: _react.PropTypes.number,
  height: _react.PropTypes.number
};

MDDropDownMenu.defaultProps = {
  width: 300,
  height: 40
};

exports.default = MDDropDownMenu;