import React, { useCallback, useMemo, useState, useEffect, Component } from 'react';
import { Input as Input$1, Checkbox as Checkbox$1, Radio as Radio$1, Rate as Rate$1, DatePicker as DatePicker$1, Select as Select$1, Switch as Switch$1, message, Upload as Upload$1, Button, TimePicker as TimePicker$1, Progress as Progress$1, Row, Col, Slider, InputNumber as InputNumber$1, Form } from 'antd';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function getTypeof(obj) {
  return Object.prototype.toString.call(obj);
}
function isObject(args) {
  return toString.call(args) === '[object Object]';
}
function isUndefined(args) {
  return toString.call(args) === '[object Undefined]';
}
function isEmptyObject(args) {
  if (!isObject(args)) {
    return false;
  }
  for (var prop in args) {
    if (!isUndefined(args[prop])) {
      return false;
    }
  }
  return true;
}
var isEqual = function isEqual(obj1, obj2) {
  if (getTypeof(obj1) !== getTypeof(obj2)) {
    return false;
  }

  // 至少有一个不是数组，也不是对象，直接判断值
  var o1 = obj1 instanceof Object;
  var o2 = obj2 instanceof Object;
  if (!o1 || !o2) {
    return obj1 === obj2;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  var result = true;
  for (var key in obj1) {
    if (!isEqual(obj1[key], obj2[key])) {
      result = false;
      return false;
    }
  }
  return result;
};
function filterObj(obj, keys) {
  if (!obj || isEmptyObject(obj)) {
    return obj;
  }
  var newObj = {};
  Object.keys(obj).forEach(function (key) {
    if (!keys.includes(key)) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

var transformObjectToMap = function transformObjectToMap(arr, key, value) {
  var targetMap = new Map();
  arr.forEach(function (item) {
    return targetMap.set(item[key], item[value]);
  });
  return targetMap;
};

function segmentationArray(arr) {
  var ssLenth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (arr.length <= ssLenth) {
    return [arr];
  }
  var arrCopy = arr.concat();
  var segArr = [];
  while (arrCopy.length > ssLenth) {
    segArr.push(arrCopy.splice(0, ssLenth));
  }
  segArr.push(arrCopy);
  return segArr;
}

var EventCenter = /*#__PURE__*/function () {
  function EventCenter() {
    _classCallCheck(this, EventCenter);
    this.listeners = [];
  }
  _createClass(EventCenter, [{
    key: "subscribe",
    value: function subscribe(listener) {
      if (typeof listener === 'function') {
        this.listeners.push(listener);
      }
      return function () {
        var index = this.listeners.findIndex(function (fn) {
          return fn === listener;
        });
        this.listeners.splice(index, 1);
      }.bind(this);
    }
  }, {
    key: "emit",
    value: function emit() {
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }
      this.listeners.forEach(function (fn) {
        return fn.apply(void 0, params);
      });
    }
  }]);
  return EventCenter;
}();

var _excluded$b = ["placeholder", "disabled", "type"];
function Input(props) {
  var placeholder = props.placeholder,
    disabled = props.disabled,
    type = props.type,
    rest = _objectWithoutProperties(props, _excluded$b);
  return /*#__PURE__*/React.createElement(Input$1, _extends({}, rest, {
    placeholder: placeholder,
    disabled: disabled,
    type: type
  }));
}

function Checkbox(props) {
  var disabled = props.disabled,
    options = props.options,
    value = props.value;
  var onChange = useCallback(function (checkedValue) {
    props.onChange && props.onChange(checkedValue);
  }, [props.onChange]);
  return /*#__PURE__*/React.createElement(Checkbox$1.Group, {
    disabled: disabled,
    onChange: onChange,
    options: options,
    value: value
  });
}

var _excluded$a = ["placeholder", "disabled", "options", "optionType"];
function Radio(props) {
  props.placeholder;
    var disabled = props.disabled,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    optionType = props.optionType,
    rest = _objectWithoutProperties(props, _excluded$a);
  return /*#__PURE__*/React.createElement(Radio$1.Group, _extends({}, rest, {
    disabled: disabled,
    options: options,
    optionType: optionType
  }));
}

var _excluded$9 = ["placeholder", "disabled", "value", "onChange"];
function Textarea(props) {
  var placeholder = props.placeholder,
    disabled = props.disabled,
    value = props.value,
    onChange = props.onChange,
    rest = _objectWithoutProperties(props, _excluded$9);
  return /*#__PURE__*/React.createElement(Input$1.TextArea, _extends({
    placeholder: placeholder,
    disabled: disabled,
    value: value,
    onChange: onChange
  }, rest));
}

var _excluded$8 = ["disabled"];
function Rate(props) {
  var disabled = props.disabled,
    rest = _objectWithoutProperties(props, _excluded$8);
  return /*#__PURE__*/React.createElement(Rate$1, _extends({}, rest, {
    disabled: disabled
  }));
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var dayjs_min = {exports: {}};

(function (module, exports) {
  !function (t, e) {
    module.exports = e() ;
  }(commonjsGlobal, function () {

    var t = 1e3,
      e = 6e4,
      n = 36e5,
      r = "millisecond",
      i = "second",
      s = "minute",
      u = "hour",
      a = "day",
      o = "week",
      f = "month",
      h = "quarter",
      c = "year",
      d = "date",
      l = "Invalid Date",
      $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function ordinal(t) {
          var e = ["th", "st", "nd", "rd"],
            n = t % 100;
          return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
      },
      m = function m(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
      },
      v = {
        s: m,
        z: function z(t) {
          var e = -t.utcOffset(),
            n = Math.abs(e),
            r = Math.floor(n / 60),
            i = n % 60;
          return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
          if (e.date() < n.date()) return -t(n, e);
          var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
            i = e.clone().add(r, f),
            s = n - i < 0,
            u = e.clone().add(r + (s ? -1 : 1), f);
          return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function a(t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function p(t) {
          return {
            M: f,
            y: c,
            w: o,
            d: a,
            D: d,
            h: u,
            m: s,
            s: i,
            ms: r,
            Q: h
          }[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function u(t) {
          return void 0 === t;
        }
      },
      g = "en",
      D = {};
    D[g] = M;
    var p = function p(t) {
        return t instanceof _;
      },
      S = function t(e, n, r) {
        var i;
        if (!e) return g;
        if ("string" == typeof e) {
          var s = e.toLowerCase();
          D[s] && (i = s), n && (D[s] = n, i = s);
          var u = e.split("-");
          if (!i && u.length > 1) return t(u[0]);
        } else {
          var a = e.name;
          D[a] = e, i = a;
        }
        return !r && i && (g = i), i || !r && g;
      },
      w = function w(t, e) {
        if (p(t)) return t.clone();
        var n = "object" == _typeof(e) ? e : {};
        return n.date = t, n.args = arguments, new _(n);
      },
      O = v;
    O.l = S, O.i = p, O.w = function (t, e) {
      return w(t, {
        locale: e.$L,
        utc: e.$u,
        x: e.$x,
        $offset: e.$offset
      });
    };
    var _ = function () {
        function M(t) {
          this.$L = S(t.locale, null, !0), this.parse(t);
        }
        var m = M.prototype;
        return m.parse = function (t) {
          this.$d = function (t) {
            var e = t.date,
              n = t.utc;
            if (null === e) return new Date(NaN);
            if (O.u(e)) return new Date();
            if (e instanceof Date) return new Date(e);
            if ("string" == typeof e && !/Z$/i.test(e)) {
              var r = e.match($);
              if (r) {
                var i = r[2] - 1 || 0,
                  s = (r[7] || "0").substring(0, 3);
                return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
              }
            }
            return new Date(e);
          }(t), this.$x = t.x || {}, this.init();
        }, m.init = function () {
          var t = this.$d;
          this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m.$utils = function () {
          return O;
        }, m.isValid = function () {
          return !(this.$d.toString() === l);
        }, m.isSame = function (t, e) {
          var n = w(t);
          return this.startOf(e) <= n && n <= this.endOf(e);
        }, m.isAfter = function (t, e) {
          return w(t) < this.startOf(e);
        }, m.isBefore = function (t, e) {
          return this.endOf(e) < w(t);
        }, m.$g = function (t, e, n) {
          return O.u(t) ? this[e] : this.set(n, t);
        }, m.unix = function () {
          return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function () {
          return this.$d.getTime();
        }, m.startOf = function (t, e) {
          var n = this,
            r = !!O.u(e) || e,
            h = O.p(t),
            l = function l(t, e) {
              var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
              return r ? i : i.endOf(a);
            },
            $ = function $(t, e) {
              return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
            },
            y = this.$W,
            M = this.$M,
            m = this.$D,
            v = "set" + (this.$u ? "UTC" : "");
          switch (h) {
            case c:
              return r ? l(1, 0) : l(31, 11);
            case f:
              return r ? l(1, M) : l(0, M + 1);
            case o:
              var g = this.$locale().weekStart || 0,
                D = (y < g ? y + 7 : y) - g;
              return l(r ? m - D : m + (6 - D), M);
            case a:
            case d:
              return $(v + "Hours", 0);
            case u:
              return $(v + "Minutes", 1);
            case s:
              return $(v + "Seconds", 2);
            case i:
              return $(v + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m.endOf = function (t) {
          return this.startOf(t, !1);
        }, m.$set = function (t, e) {
          var n,
            o = O.p(t),
            h = "set" + (this.$u ? "UTC" : ""),
            l = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],
            $ = o === a ? this.$D + (e - this.$W) : e;
          if (o === f || o === c) {
            var y = this.clone().set(d, 1);
            y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
          } else l && this.$d[l]($);
          return this.init(), this;
        }, m.set = function (t, e) {
          return this.clone().$set(t, e);
        }, m.get = function (t) {
          return this[O.p(t)]();
        }, m.add = function (r, h) {
          var d,
            l = this;
          r = Number(r);
          var $ = O.p(h),
            y = function y(t) {
              var e = w(l);
              return O.w(e.date(e.date() + Math.round(t * r)), l);
            };
          if ($ === f) return this.set(f, this.$M + r);
          if ($ === c) return this.set(c, this.$y + r);
          if ($ === a) return y(1);
          if ($ === o) return y(7);
          var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
            m = this.$d.getTime() + r * M;
          return O.w(m, this);
        }, m.subtract = function (t, e) {
          return this.add(-1 * t, e);
        }, m.format = function (t) {
          var e = this,
            n = this.$locale();
          if (!this.isValid()) return n.invalidDate || l;
          var r = t || "YYYY-MM-DDTHH:mm:ssZ",
            i = O.z(this),
            s = this.$H,
            u = this.$m,
            a = this.$M,
            o = n.weekdays,
            f = n.months,
            h = function h(t, n, i, s) {
              return t && (t[n] || t(e, r)) || i[n].slice(0, s);
            },
            c = function c(t) {
              return O.s(s % 12 || 12, t, "0");
            },
            d = n.meridiem || function (t, e, n) {
              var r = t < 12 ? "AM" : "PM";
              return n ? r.toLowerCase() : r;
            },
            $ = {
              YY: String(this.$y).slice(-2),
              YYYY: this.$y,
              M: a + 1,
              MM: O.s(a + 1, 2, "0"),
              MMM: h(n.monthsShort, a, f, 3),
              MMMM: h(f, a),
              D: this.$D,
              DD: O.s(this.$D, 2, "0"),
              d: String(this.$W),
              dd: h(n.weekdaysMin, this.$W, o, 2),
              ddd: h(n.weekdaysShort, this.$W, o, 3),
              dddd: o[this.$W],
              H: String(s),
              HH: O.s(s, 2, "0"),
              h: c(1),
              hh: c(2),
              a: d(s, u, !0),
              A: d(s, u, !1),
              m: String(u),
              mm: O.s(u, 2, "0"),
              s: String(this.$s),
              ss: O.s(this.$s, 2, "0"),
              SSS: O.s(this.$ms, 3, "0"),
              Z: i
            };
          return r.replace(y, function (t, e) {
            return e || $[t] || i.replace(":", "");
          });
        }, m.utcOffset = function () {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function (r, d, l) {
          var $,
            y = O.p(d),
            M = w(r),
            m = (M.utcOffset() - this.utcOffset()) * e,
            v = this - M,
            g = O.m(this, M);
          return g = ($ = {}, $[c] = g / 12, $[f] = g, $[h] = g / 3, $[o] = (v - m) / 6048e5, $[a] = (v - m) / 864e5, $[u] = v / n, $[s] = v / e, $[i] = v / t, $)[y] || v, l ? g : O.a(g);
        }, m.daysInMonth = function () {
          return this.endOf(f).$D;
        }, m.$locale = function () {
          return D[this.$L];
        }, m.locale = function (t, e) {
          if (!t) return this.$L;
          var n = this.clone(),
            r = S(t, e, !0);
          return r && (n.$L = r), n;
        }, m.clone = function () {
          return O.w(this.$d, this);
        }, m.toDate = function () {
          return new Date(this.valueOf());
        }, m.toJSON = function () {
          return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function () {
          return this.$d.toISOString();
        }, m.toString = function () {
          return this.$d.toUTCString();
        }, M;
      }(),
      T = _.prototype;
    return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t) {
      T[t[1]] = function (e) {
        return this.$g(e, t[0], t[1]);
      };
    }), w.extend = function (t, e) {
      return t.$i || (t(e, _, w), t.$i = !0), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function (t) {
      return w(1e3 * t);
    }, w.en = D[g], w.Ls = D, w.p = {}, w;
  });
})(dayjs_min);
var dayjs_minExports = dayjs_min.exports;
var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);

var weekday$1 = {exports: {}};

(function (module, exports) {
  !function (e, t) {
    module.exports = t() ;
  }(commonjsGlobal, function () {

    return function (e, t) {
      t.prototype.weekday = function (e) {
        var t = this.$locale().weekStart || 0,
          i = this.$W,
          n = (i < t ? i + 7 : i) - t;
        return this.$utils().u(e) ? n : this.subtract(n, "day").add(e, "day");
      };
    };
  });
})(weekday$1);
var weekdayExports = weekday$1.exports;
var weekday = /*@__PURE__*/getDefaultExportFromCjs(weekdayExports);

var localeData$1 = {exports: {}};

(function (module, exports) {
  !function (n, e) {
    module.exports = e() ;
  }(commonjsGlobal, function () {

    return function (n, e, t) {
      var r = e.prototype,
        o = function o(n) {
          return n && (n.indexOf ? n : n.s);
        },
        u = function u(n, e, t, r, _u) {
          var i = n.name ? n : n.$locale(),
            a = o(i[e]),
            s = o(i[t]),
            f = a || s.map(function (n) {
              return n.slice(0, r);
            });
          if (!_u) return f;
          var d = i.weekStart;
          return f.map(function (n, e) {
            return f[(e + (d || 0)) % 7];
          });
        },
        i = function i() {
          return t.Ls[t.locale()];
        },
        a = function a(n, e) {
          return n.formats[e] || function (n) {
            return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (n, e, t) {
              return e || t.slice(1);
            });
          }(n.formats[e.toUpperCase()]);
        },
        s = function s() {
          var n = this;
          return {
            months: function months(e) {
              return e ? e.format("MMMM") : u(n, "months");
            },
            monthsShort: function monthsShort(e) {
              return e ? e.format("MMM") : u(n, "monthsShort", "months", 3);
            },
            firstDayOfWeek: function firstDayOfWeek() {
              return n.$locale().weekStart || 0;
            },
            weekdays: function weekdays(e) {
              return e ? e.format("dddd") : u(n, "weekdays");
            },
            weekdaysMin: function weekdaysMin(e) {
              return e ? e.format("dd") : u(n, "weekdaysMin", "weekdays", 2);
            },
            weekdaysShort: function weekdaysShort(e) {
              return e ? e.format("ddd") : u(n, "weekdaysShort", "weekdays", 3);
            },
            longDateFormat: function longDateFormat(e) {
              return a(n.$locale(), e);
            },
            meridiem: this.$locale().meridiem,
            ordinal: this.$locale().ordinal
          };
        };
      r.localeData = function () {
        return s.bind(this)();
      }, t.localeData = function () {
        var n = i();
        return {
          firstDayOfWeek: function firstDayOfWeek() {
            return n.weekStart || 0;
          },
          weekdays: function weekdays() {
            return t.weekdays();
          },
          weekdaysShort: function weekdaysShort() {
            return t.weekdaysShort();
          },
          weekdaysMin: function weekdaysMin() {
            return t.weekdaysMin();
          },
          months: function months() {
            return t.months();
          },
          monthsShort: function monthsShort() {
            return t.monthsShort();
          },
          longDateFormat: function longDateFormat(e) {
            return a(n, e);
          },
          meridiem: n.meridiem,
          ordinal: n.ordinal
        };
      }, t.months = function () {
        return u(i(), "months");
      }, t.monthsShort = function () {
        return u(i(), "monthsShort", "months", 3);
      }, t.weekdays = function (n) {
        return u(i(), "weekdays", null, null, n);
      }, t.weekdaysShort = function (n) {
        return u(i(), "weekdaysShort", "weekdays", 3, n);
      }, t.weekdaysMin = function (n) {
        return u(i(), "weekdaysMin", "weekdays", 2, n);
      };
    };
  });
})(localeData$1);
var localeDataExports = localeData$1.exports;
var localeData = /*@__PURE__*/getDefaultExportFromCjs(localeDataExports);

var _excluded$7 = ["type", "onChange", "value", "showTime"];
dayjs.extend(weekday);
dayjs.extend(localeData);
function DatePicker(props) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'date' : _props$type,
    onChange = props.onChange,
    value = props.value,
    _props$showTime = props.showTime,
    showTime = _props$showTime === void 0 ? false : _props$showTime,
    rest = _objectWithoutProperties(props, _excluded$7);
  var _props$format = props.format,
    format = _props$format === void 0 ? 'YYYY-MM-DD hh:mm:ss' : _props$format;
  var onDateChange = useCallback(function (date) {
    onChange(date);
  }, [onChange]);
  var transformDateValue = useMemo(function () {
    if (Object.prototype.toString.call(value) !== '[object String]' || !value) {
      return value;
    }
    var displayDate = dayjs(value, format);
    return displayDate;
  }, [value]);
  return /*#__PURE__*/React.createElement(DatePicker$1, _extends({
    onChange: onDateChange,
    picker: type,
    showTime: showTime,
    value: transformDateValue,
    format: format
  }, rest));
}

var _excluded$6 = ["placeholder", "disabled", "type", "value", "onChange", "format", "showTime"];
var AntdRangePicker = DatePicker$1.RangePicker;
function RangePicker(props) {
  var placeholder = props.placeholder,
    disabled = props.disabled,
    type = props.type,
    value = props.value,
    onChange = props.onChange;
    props.format;
    var showTime = props.showTime,
    rest = _objectWithoutProperties(props, _excluded$6);
  var onRangeDateChange = useCallback(function (dateArr) {
    onChange(dateArr);
  }, [onChange]);
  var transformRangeDateValue = useMemo(function () {
    return value;
  }, [value]);
  return /*#__PURE__*/React.createElement(AntdRangePicker, _extends({}, rest, {
    placeholder: placeholder,
    disabled: disabled,
    onChange: onRangeDateChange,
    picker: type,
    value: transformRangeDateValue,
    showTime: showTime
  }));
}

function Select(props) {
  var placeholder = props.placeholder,
    disabled = props.disabled,
    options = props.options,
    value = props.value,
    onChange = props.onChange;
  return /*#__PURE__*/React.createElement(Select$1, {
    placeholder: placeholder,
    disabled: disabled,
    options: options,
    value: value,
    onChange: onChange
  });
}

var _excluded$5 = ["disabled", "value"];
function Switch(props) {
  var disabled = props.disabled,
    value = props.value,
    rest = _objectWithoutProperties(props, _excluded$5);
  return /*#__PURE__*/React.createElement(Switch$1, _extends({}, rest, {
    checked: value,
    disabled: disabled
  }));
}

var _excluded$4 = ["disabled", "action", "listType", "value", "onChange", "max", "size"];
function Upload(props) {
  var disabled = props.disabled,
    action = props.action,
    _props$listType = props.listType,
    listType = _props$listType === void 0 ? 'picture-card' : _props$listType,
    _props$value = props.value,
    value = _props$value === void 0 ? [] : _props$value,
    onChange = props.onChange,
    max = props.max,
    size = props.size,
    rest = _objectWithoutProperties(props, _excluded$4);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    fileList = _useState2[0],
    setFileList = _useState2[1];
  useEffect(function () {
    setFileList(value.map(function (item, index) {
      return {
        uid: "".concat(item).concat(index),
        name: '',
        url: item,
        status: 'done'
      };
    }));
  }, []);
  var handlePicChange = useCallback(function (_ref) {
    var file = _ref.file,
      fileList = _ref.fileList;
    if (size && file.size / 1024 >= size) {
      message.error("\u8D85\u51FA\u6700\u5927\u56FE\u7247\u9650\u5236".concat(size, "KB"));
      return;
    }
    if (file.status === 'error') {
      message.error(file.response && file.response.msg || '上传图片失败');
      // 说明 如果要显示上传错误的样式，需要自己实现上传列表的展示，upload默认不支持
      setFileList(fileList.filter(function (item) {
        return !item.error;
      }));
      return;
    }
    if (file.status === 'done') {
      setFileList(fileList.map(function (item) {
        if (item.response) {
          item.url = item.response.data || item.response.url;
        }
        return item;
      }));
      onChange(fileList.map(function (item) {
        return item.url;
      }).filter(function (item) {
        return !!item;
      }));
    }
    if (file.status === 'uploading' || file.status === 'removed') {
      setFileList(fileList);
      onChange(fileList.map(function (item) {
        return item.url;
      }).filter(function (item) {
        return !!item;
      }));
    }
    if (fileList.length === 0) {
      onChange([]);
    }
  }, []);
  return /*#__PURE__*/React.createElement(Upload$1, _extends({
    disabled: disabled,
    action: action,
    listType: listType
  }, rest, {
    fileList: fileList,
    onChange: handlePicChange
  }), fileList.length < max || !max ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    disabled: disabled
  }, "\u4E0A\u4F20")) : null);
}

var _excluded$3 = ["type", "onChange", "value"];
function TimePicker(props) {
  props.type;
    var onChange = props.onChange,
    value = props.value,
    rest = _objectWithoutProperties(props, _excluded$3);
  var _props$format = props.format,
    format = _props$format === void 0 ? 'HH:mm:ss' : _props$format;
  var onTimeChange = useCallback(function (time) {
    onChange(time);
  }, [onChange]);
  var transformTimeValue = useMemo(function () {
    if (Object.prototype.toString.call(value) !== '[object String]' || !value) {
      return value;
    }
    var ymd = dayjs().format('YYYY-MM-DD');
    var displayTime = dayjs("".concat(ymd, " ").concat(value));
    return displayTime;
  }, [value]);
  return /*#__PURE__*/React.createElement(TimePicker$1, _extends({
    onChange: onTimeChange,
    value: transformTimeValue,
    format: format
  }, rest));
}

var _excluded$2 = ["value"];
function Progress(props) {
  var value = props.value,
    rest = _objectWithoutProperties(props, _excluded$2);
  return /*#__PURE__*/React.createElement(Progress$1, _extends({
    percent: value
  }, rest));
}

function DecimalStep(props) {
  var value = props.value,
    triggerChange = props.onChange,
    step = props.step,
    _props$max = props.max,
    max = _props$max === void 0 ? 1 : _props$max,
    _props$min = props.min,
    min = _props$min === void 0 ? 0 : _props$min,
    defaultValue = props.defaultValue;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var onChange = function onChange(value) {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);
    triggerChange(value);
  };
  useEffect(function () {
    if (!value) {
      setInputValue(defaultValue);
    } else {
      setInputValue(value);
    }
  }, []);
  return /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(Slider, {
    min: min,
    max: max,
    onChange: onChange,
    value: typeof inputValue === 'number' ? inputValue : 0,
    step: step
  })), /*#__PURE__*/React.createElement(Col, {
    span: 4
  }, /*#__PURE__*/React.createElement(InputNumber$1, {
    min: min,
    max: max,
    style: {
      margin: '0 16px'
    },
    step: step,
    value: inputValue,
    onChange: onChange
  })));
}

var _excluded$1 = ["max", "min", "value", "onChange"];
function InputNumber(props) {
  props.max;
    props.min;
    var value = props.value,
    onChange = props.onChange,
    rest = _objectWithoutProperties(props, _excluded$1);
  return /*#__PURE__*/React.createElement(InputNumber$1, _extends({
    value: value
  }, rest, {
    onChange: onChange
  }));
}

var FormItemList = [{
  marktype: 'input',
  component: Input
}, {
  marktype: 'select',
  component: Select
}, {
  marktype: 'checkbox',
  component: Checkbox
}, {
  marktype: 'textarea',
  component: Textarea
}, {
  marktype: 'radio',
  component: Radio
}, {
  marktype: 'upload',
  component: Upload
}, {
  marktype: 'rate',
  component: Rate
}, {
  marktype: 'switch',
  component: Switch
}, {
  marktype: 'progress',
  component: Progress
}, {
  marktype: 'slide',
  component: DecimalStep
}, {
  marktype: 'datepicker',
  component: DatePicker
}, {
  marktype: 'timepicker',
  component: TimePicker
}, {
  marktype: 'rangepicker',
  component: RangePicker
}, {
  marktype: 'inputNumber',
  component: InputNumber
}];
var ComponentMap = transformObjectToMap(FormItemList, 'marktype', 'component');

var FormItem = Form.Item;
function GenerateFormItem(props) {
  var formItemConfig = props.formItemConfig,
    _props$isEditor = props.isEditor,
    isEditor = _props$isEditor === void 0 ? true : _props$isEditor,
    column = props.column;
  var rules = formItemConfig.rules;
  var DynamicFormItem = ComponentMap.get(formItemConfig.marktype) || null;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    disabled = _useState2[0],
    setDisabled = _useState2[1];
  useEffect(function () {
    var disabled = isEditor ? formItemConfig.disabled : true;
    setDisabled(disabled);
  }, [formItemConfig.disabled, isEditor]);
  rules = useMemo(function () {
    return rules && rules.length > 0 ? rules.map(function (item) {
      if (item.validator && typeof item.validator === 'string') {
        item.validator = new Function('rule', 'value', item.validator);
      }
      return item;
    }) : [];
  }, [rules]);
  var width = useMemo(function () {
    return "".concat(1 / column * 100, "%");
  }, [column]);
  return DynamicFormItem ? /*#__PURE__*/React.createElement(Col, {
    style: {
      width: width
    },
    className: "form-item-cell"
  }, /*#__PURE__*/React.createElement(FormItem, {
    label: formItemConfig.label,
    name: formItemConfig.param,
    rules: rules
  }, /*#__PURE__*/React.createElement(DynamicFormItem, _extends({}, formItemConfig, {
    disabled: disabled
  })))) : /*#__PURE__*/React.createElement(FormItem, {
    label: formItemConfig.label,
    name: formItemConfig.param,
    style: {
      color: 'red'
    }
  }, "\u4E0D\u652F\u6301", formItemConfig.marktype, "\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E");
}
function GenerateFormItems(props) {
  var isEditor = props.isEditor,
    formData = props.formData,
    _props$column = props.column,
    column = _props$column === void 0 ? 1 : _props$column;
  return segmentationArray(formData, column).map(function (rowData, rowIndex) {
    return /*#__PURE__*/React.createElement(Row, {
      className: "form-item-row",
      key: rowIndex,
      gutter: [1, 0],
      justify: "space-between"
    }, rowData.map(function (formItemConfig, index) {
      return /*#__PURE__*/React.createElement(GenerateFormItem, {
        formItemConfig: formItemConfig,
        key: index,
        isEditor: isEditor,
        column: column
      });
    }));
  });
}

var _excluded = ["isEditor", "children"];
var GenerateForm = /*#__PURE__*/function (_Component) {
  _inherits(GenerateForm, _Component);
  var _super = _createSuper(GenerateForm);
  function GenerateForm(props) {
    var _this;
    _classCallCheck(this, GenerateForm);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "state", {
      formError: null,
      originFormData: [],
      activeFormData: []
    });
    _this.removeListeners = [];
    _this.onValuesChange = _this.onValuesChange.bind(_assertThisInitialized(_this));
    _this.updateFormData = _this.updateFormData.bind(_assertThisInitialized(_this));
    _this.addListener = _this.addListener.bind(_assertThisInitialized(_this));
    _this.addListener();
    return _this;
  }
  _createClass(GenerateForm, [{
    key: "addListener",
    value: function addListener() {
      var form = this.props.form;
      if (form && form.isWatchForm) {
        var eventCenter = form.formInstanceEventCenter;
        this.removeListeners.push(eventCenter.subscribe(this.updateFormData));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeListeners.forEach(function (remove) {
        return remove();
      });
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      this.setState({
        formError: err
      });
    }
  }, {
    key: "updateFormData",
    value: function updateFormData(values) {
      var _this$props = this.props,
        _this$props$useEvent = _this$props.useEvent,
        useEvent = _this$props$useEvent === void 0 ? false : _this$props$useEvent,
        form = _this$props.form;
      if (!useEvent) {
        return;
      }

      // 找到存在eventConfig的值
      var changeParams = Object.keys(values);
      var originFormData = this.state.originFormData;
      var activeFormData = _toConsumableArray(originFormData);
      var eventMap = {};
      changeParams.forEach(function (param) {
        var formItemConfig = originFormData.find(function (item) {
          return item.param === param;
        }) || {};
        var eventConfig = formItemConfig.eventConfig;
        if (eventConfig) {
          eventMap[param] = eventConfig;
        }
      });
      if (isEmptyObject(eventMap)) {
        return;
      }

      // 执行eventMap每个元素的filter, modify
      var _loop = function _loop() {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          field = _Object$entries$_i[0],
          etg = _Object$entries$_i[1];
        var value = values[field];
        var filter = etg.filter,
          modify = etg.modify;

        // 执行filter
        if (filter) {
          var fieldScope = filter.fieldScope,
            rules = filter.rules;
          var _ref = rules.find(function (item) {
              return item.triggerValue.includes(value);
            }) || {},
            _ref$showFields = _ref.showFields,
            showFields = _ref$showFields === void 0 ? [] : _ref$showFields;
          activeFormData = filterArr(activeFormData, filterArr(fieldScope, showFields));
        }

        // 执行modify
        if (modify) {
          modify.forEach(function (item) {
            // 校验规则，选项，是否禁用更新
            if (item.newFormItemData) {
              activeFormData.forEach(function (formItem, index) {
                if (formItem.param === item.field) {
                  activeFormData[index] = _objectSpread2(_objectSpread2({}, formItem), item.newFormItemData);
                }
              });
            }

            // 值更新
            if (item.newValue !== undefined) {
              item.field && form.setFieldValue(item.field, item.newValue);
            }
          });
        }
      };
      for (var _i = 0, _Object$entries = Object.entries(eventMap); _i < _Object$entries.length; _i++) {
        _loop();
      }
      this.setState({
        activeFormData: activeFormData
      });
      function filterArr(arr1, arr2) {
        return arr1.filter(function (item) {
          if (typeof item === 'string') {
            return !arr2.includes(item);
          }
          return !arr2.includes(item.param);
        });
      }
    }
  }, {
    key: "onValuesChange",
    value: function onValuesChange(values, allvalues) {
      this.updateFormData(values);
      var onValuesChange = this.props.onValuesChange;
      onValuesChange && onValuesChange(values, allvalues);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        isEditor = _this$props2.isEditor,
        children = _this$props2.children,
        rest = _objectWithoutProperties(_this$props2, _excluded);
      var _this$state = this.state,
        formError = _this$state.formError,
        activeFormData = _this$state.activeFormData;
      var formProps = filterObj(rest, ['formData', 'useEvent']);
      return /*#__PURE__*/React.createElement("div", null, !formError ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form, _extends({
        ref: this.props.formInstance
      }, formProps, {
        className: "".concat(this.props.className, " dynamic-form"),
        labelCol: this.props.labelCol,
        wrapperCol: this.props.wrapperCol,
        initialValues: this.props.initialValues || {},
        onValuesChange: this.onValuesChange
      }), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenerateFormItems, {
        isEditor: isEditor,
        formData: activeFormData,
        column: this.props.column
      }), children)), this.props.footer) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "\u8868\u5355\u914D\u7F6E\u9519\u8BEF")));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var formData = props.formData;
      var originFormData = state.originFormData;
      if (isEqual(originFormData, formData)) {
        return null;
      }
      return {
        originFormData: formData,
        activeFormData: formData
      };
    }
  }]);
  return GenerateForm;
}(Component);
_defineProperty(GenerateForm, "defaultProps", {
  formData: [],
  wrapperCol: {
    span: 6
  },
  labelCol: {
    span: 18
  }
});

function useWatchForm() {
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    formInstance = _Form$useForm2[0];
  var newForm = useMemo(function () {
    var eventCenter = new EventCenter();
    var composeForm = new Proxy(formInstance, {
      get: function get(target, propKey, receiver) {
        if (propKey === 'setFieldValue') {
          var fn = Reflect.get(target, propKey, receiver);
          return function (field, value) {
            fn(field, value); // form.getFieldsValue()已经可以获取到值
            eventCenter.emit(_defineProperty({}, field, value));
          };
        }
        if (propKey === 'setFieldsValue') {
          var _fn = Reflect.get(target, propKey, receiver);
          return function (values) {
            _fn(values); // form.getFieldsValue()已经可以获取到值
            eventCenter.emit(values);
          };
        }
        return Reflect.get(target, propKey, receiver);
      }
    });

    // 将事件中心赋值给form实例 组合成抽象的form实例导出 用户是无感知

    composeForm.formInstanceEventCenter = eventCenter;
    composeForm.isWatchForm = true;
    return composeForm;
  }, [formInstance]);
  return [newForm];
}

export { GenerateForm, GenerateFormItems, GenerateForm as default, useWatchForm };
