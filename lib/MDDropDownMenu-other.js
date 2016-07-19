'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MDDropDownMenu = require('./MDDropDownMenu.css');

var _MDDropDownMenu2 = _interopRequireDefault(_MDDropDownMenu);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MDDropDownMenu = function (_Component) {
  _inherits(MDDropDownMenu, _Component);

  function MDDropDownMenu() {
    _classCallCheck(this, MDDropDownMenu);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MDDropDownMenu).call(this));
  }

  _createClass(MDDropDownMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var localDropdown = _MDDropDownMenu2.default.dropdown;
      var localSelected = _MDDropDownMenu2.default.selected;
      var localDefault = _MDDropDownMenu2.default.default;

      var dropdown = (0, _jquery2.default)('.' + localDropdown);
      dropdown.find('dt').click(function () {
        dropdown.find('dd ul').hide();
        (0, _jquery2.default)(this).next().children().toggle();
      });

      dropdown.find('dd ul li a').click(function () {
        var leSpan = (0, _jquery2.default)(this).parents('.' + localDropdown).find('dt a span');
        (0, _jquery2.default)(this).parents('.' + localDropdown).find('dd a').each(function () {
          (0, _jquery2.default)(this).removeClass(localSelected);
        });
        leSpan.html((0, _jquery2.default)(this).html());

        if ((0, _jquery2.default)(this).hasClass(localDefault)) {
          leSpan.removeClass(localSelected);
        } else {
          leSpan.addClass(localSelected);
          (0, _jquery2.default)(this).addClass(localSelected);
        }

        (0, _jquery2.default)(this).parents('ul').hide();
      });
      (0, _jquery2.default)(document).bind('click', function (e) {
        if (!(0, _jquery2.default)(e.target).parents().hasClass(localDropdown)) {
          (0, _jquery2.default)('.' + localDropdown + ' dd ul').hide();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'dl',
        { className: _MDDropDownMenu2.default.dropdown },
        _react2.default.createElement(
          'dt',
          null,
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement(
              'span',
              null,
              'Dropdown n1'
            )
          )
        ),
        _react2.default.createElement(
          'dd',
          null,
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: _MDDropDownMenu2.default.default },
                'default'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                null,
                'option 1'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                null,
                'option 2'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                null,
                'option 3'
              )
            )
          )
        )
      );
    }
  }]);

  return MDDropDownMenu;
}(_react.Component);

exports.default = MDDropDownMenu;