'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = require('../../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = require('../../../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = require('../../../utils/Props');

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  (0, _inherits3.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck3.default)(this, Icon);
    return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
  }

  (0, _createClass3.default)(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-platform-sco', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--responsive', responsive), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'platform-sco');

      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#000000', fillRule: 'evenodd', d: 'M16.1601041,16.1052616 L24,16.1052616 C23.7531246,16.8514638 23.0107679,17.4724977 22.2065,17.4724977 L1.27284858,17.4724977 C0.469157559,17.4724977 -0.0563179315,16.8514638 0.00482411239,16.1052616 L14.7072237,16.1052616 C14.4878705,15.5269428 14.3890063,14.8374216 14.5068517,14.1475626 L14.5068517,14.1479472 L15.4658973,14.1479472 C15.4658973,14.3350264 15.4658973,14.4905733 15.4968529,14.6453511 C15.8058317,14.5517154 16.1153874,14.3657897 16.3934106,14.1479472 L17.0117528,14.1479472 C16.4862773,14.7072623 15.9915651,15.1733261 15.7439206,15.3600209 C15.8577181,15.6369483 16.0052874,15.8883615 16.1601041,16.1052616 L16.1601041,16.1052616 L16.1601041,16.1052616 Z M21.7427242,7.71466974 C20.6915809,7.27975369 19.3616453,7 17.8469377,7 C16.3012746,7 14.8167534,7.27975369 13.6414034,7.71466974 L13.6725512,7.77696541 L21.6817744,7.77696541 L21.7427242,7.71466974 L21.7427242,7.71466974 L21.7427242,7.71466974 Z M15.1260976,12.6562543 C15.1570531,12.5939587 15.1882009,12.531663 15.2189642,12.4384118 L4.42700896,12.4695596 L4.39605339,12.3449683 C7.0557323,11.816801 10.3641321,11.5060917 13.9203688,11.5060917 C14.4767998,11.5060917 15.0643787,11.5060917 15.5898542,11.5372396 C15.6208097,11.4126482 15.651573,11.3195893 15.6827209,11.1951902 L7.02554582,11.1951902 L6.99459026,11.101939 C9.31375797,10.6049195 12.2203123,10.2944025 15.3427865,10.2944025 L15.6832977,10.2944025 C15.6525344,10.2321069 15.6215788,10.1077078 15.5906233,10.0142643 L9.71541121,10.0142643 L9.68445565,9.92101308 C11.2301188,9.57915599 13.0547666,9.2994023 15.0651478,9.23710663 C14.9718965,9.11270757 14.8484588,9.01964861 14.7244443,8.92678192 L11.8486533,8.92678192 L11.7869344,8.83333842 C13.2714556,8.36727454 15.0651478,8.08771311 17.0134255,8.08771311 C18.8995999,8.08771311 20.5692776,8.39842237 21.8984441,8.83333842 L21.8676808,8.89563408 L15.3127923,8.92678192 C15.4048899,8.98888531 15.4977566,9.08232882 15.5906233,9.2059588 C15.9615132,9.17500323 16.3320186,9.17500323 16.7036776,9.17500323 C19.0536087,9.17500323 21.2179986,9.4549492 22.9493951,9.82795412 L22.9184395,10.0142643 L16.0232321,10.0142643 C16.0541876,10.1077078 16.0541876,10.2321069 16.0851432,10.3253581 C18.5902366,10.3566982 20.8780642,10.6358751 22.7948096,11.0084955 L22.7640463,11.1951902 L16.1472466,11.1951902 C16.1472466,11.3195893 16.1472466,11.4437961 16.1159065,11.536855 C18.5279409,11.6608695 20.7542419,11.9098599 22.6098453,12.2824803 L22.5786974,12.4380272 L18.4352665,12.4380272 C18.4043109,12.5314707 18.3425921,12.5935741 18.2802964,12.6558698 L17.7857765,12.6558698 C17.816732,12.5935741 17.8786431,12.5314707 17.909791,12.4380272 L15.9615132,12.4380272 C15.9305576,12.5314707 15.9305576,12.5935741 15.8992175,12.6558698 L15.1260976,12.6558698 L15.1260976,12.6562543 L15.1260976,12.6562543 L15.1260976,12.6562543 Z M14.5068517,14.1475626 C14.5378073,13.9920157 14.5689551,13.8374302 14.6308662,13.6814987 L6.83890877,13.6814987 L6.77718992,13.5570997 C9.09616536,13.0906512 11.9719564,12.779942 15.0642441,12.779942 C15.0642441,12.7487942 15.0951997,12.6872676 15.1261552,12.656312 L15.8986984,12.656312 C15.8986984,12.6872676 15.8675506,12.7487942 15.8675506,12.779942 C16.4553217,12.8110898 17.0738562,12.8110898 17.6302872,12.8733855 C17.6920061,12.8110898 17.7535327,12.7176463 17.784296,12.656312 L18.2790082,12.656312 C18.2480526,12.7487942 18.1861415,12.8110898 18.0930825,12.9045333 C19.7016182,12.9974 21.1544147,13.2152426 22.4533947,13.4636562 L22.4224391,13.6814987 L17.4435925,13.6814987 C17.289007,13.8372379 17.1649924,13.9914389 17.0109837,14.1475626 L16.3926415,14.1475626 C16.6095227,14.0231635 16.7950639,13.8374302 16.9498417,13.6814987 L15.5272317,13.6814987 C15.4962761,13.8372379 15.4651283,14.022779 15.4651283,14.1475626 L14.5068517,14.1475626 L14.5068517,14.1475626 L14.5068517,14.1475626 Z', stroke: 'none' })
      );
    }
  }]);
  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _react.PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'PlatformSco';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];