import React, { useCallback, useMemo, useState, useEffect, isValidElement, PureComponent, Component } from 'react';
import { Input as Input$1, Checkbox as Checkbox$1, Radio as Radio$1, Rate as Rate$1, DatePicker as DatePicker$1, Select as Select$1, Switch as Switch$1, message, Upload as Upload$1, Button, TimePicker as TimePicker$1, Progress as Progress$1, Row, Col, Slider as Slider$1, InputNumber as InputNumber$1, Popover, Tabs, Form, Space } from 'antd';

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
      _defineProperty$2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}
function _classCallCheck$a(instance, Constructor) {
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
function _createClass$8(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty$2(obj, key, value) {
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
function _extends$f() {
  _extends$f = Object.assign || function (target) {
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
  return _extends$f.apply(this, arguments);
}
function _inherits$a(subClass, superClass) {
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
function _objectWithoutProperties$2(source, excluded) {
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
function _possibleConstructorReturn$a(self, call) {
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
    return _possibleConstructorReturn$a(this, result);
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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function getTypeof(obj) {
  return Object.prototype.toString.call(obj);
}
function isObject$8(args) {
  return toString.call(args) === '[object Object]';
}
function isArray$e(args) {
  return toString.call(args) === '[object Array]';
}
function isUndefined$1(args) {
  return toString.call(args) === '[object Undefined]';
}
function isEmptyObject(args) {
  if (!isObject$8(args)) {
    return false;
  }
  for (var prop in args) {
    if (!isUndefined$1(args[prop])) {
      return false;
    }
  }
  return true;
}
function dc(target) {
  if (isArray$e(target) || isObject$8(target)) {
    var obj = Array.isArray(target) ? [] : {};
    for (var key in target) {
      obj[key] = dc(target[key]);
    }
    return obj;
  }
  return target;
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
function generateObjFromKeys(obj, keys) {
  if (!obj || isEmptyObject(obj)) {
    return obj;
  }
  var newObj = {};
  Object.keys(obj).forEach(function (key) {
    if (keys.includes(key) && obj[key]) {
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

var EventCenter = /*#__PURE__*/function () {
  function EventCenter() {
    _classCallCheck$a(this, EventCenter);
    this.listeners = [];
  }
  _createClass$8(EventCenter, [{
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

var _excluded$e = ["placeholder", "disabled", "type"];
function Input(props) {
  var placeholder = props.placeholder,
    disabled = props.disabled,
    type = props.type,
    rest = _objectWithoutProperties$2(props, _excluded$e);
  return /*#__PURE__*/React.createElement(Input$1, _extends$f({}, rest, {
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

var _excluded$d = ["placeholder", "disabled", "options", "optionType"];
function Radio(props) {
  props.placeholder;
    var disabled = props.disabled,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    optionType = props.optionType,
    rest = _objectWithoutProperties$2(props, _excluded$d);
  return /*#__PURE__*/React.createElement(Radio$1.Group, _extends$f({}, rest, {
    disabled: disabled,
    options: options,
    optionType: optionType
  }));
}

var _excluded$c = ["placeholder", "disabled", "value", "onChange"];
function Textarea(props) {
  var placeholder = props.placeholder,
    disabled = props.disabled,
    value = props.value,
    onChange = props.onChange,
    rest = _objectWithoutProperties$2(props, _excluded$c);
  return /*#__PURE__*/React.createElement(Input$1.TextArea, _extends$f({
    placeholder: placeholder,
    disabled: disabled,
    value: value,
    onChange: onChange
  }, rest));
}

var _excluded$b = ["disabled"];
function Rate(props) {
  var disabled = props.disabled,
    rest = _objectWithoutProperties$2(props, _excluded$b);
  return /*#__PURE__*/React.createElement(Rate$1, _extends$f({}, rest, {
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
        var n = "object" == _typeof$1(e) ? e : {};
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

var _excluded$a = ["type", "onChange", "value", "showTime"];
dayjs.extend(weekday);
dayjs.extend(localeData);
function DatePicker(props) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'date' : _props$type,
    onChange = props.onChange,
    value = props.value,
    _props$showTime = props.showTime,
    showTime = _props$showTime === void 0 ? false : _props$showTime,
    rest = _objectWithoutProperties$2(props, _excluded$a);
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
  return /*#__PURE__*/React.createElement(DatePicker$1, _extends$f({
    onChange: onDateChange,
    picker: type,
    showTime: showTime,
    value: transformDateValue,
    format: format
  }, rest));
}

var _excluded$9 = ["placeholder", "disabled", "type", "value", "onChange", "format", "showTime"];
var AntdRangePicker = DatePicker$1.RangePicker;
function RangePicker(props) {
  var placeholder = props.placeholder,
    disabled = props.disabled,
    type = props.type,
    value = props.value,
    onChange = props.onChange;
    props.format;
    var showTime = props.showTime,
    rest = _objectWithoutProperties$2(props, _excluded$9);
  var onRangeDateChange = useCallback(function (dateArr) {
    onChange(dateArr);
  }, [onChange]);
  var transformRangeDateValue = useMemo(function () {
    return value;
  }, [value]);
  return /*#__PURE__*/React.createElement(AntdRangePicker, _extends$f({}, rest, {
    placeholder: placeholder,
    disabled: disabled,
    onChange: onRangeDateChange,
    picker: type,
    value: transformRangeDateValue,
    showTime: showTime
  }));
}

var _excluded$8 = ["placeholder", "disabled", "options", "value", "onChange"];
function Select(props) {
  var placeholder = props.placeholder,
    disabled = props.disabled,
    options = props.options,
    value = props.value,
    onChange = props.onChange,
    rest = _objectWithoutProperties$2(props, _excluded$8);
  return /*#__PURE__*/React.createElement(Select$1, _extends$f({}, rest, {
    placeholder: placeholder,
    disabled: disabled,
    options: options,
    value: value,
    onChange: onChange
  }));
}

var _excluded$7 = ["disabled", "value"];
function Switch(props) {
  var disabled = props.disabled,
    value = props.value,
    rest = _objectWithoutProperties$2(props, _excluded$7);
  return /*#__PURE__*/React.createElement(Switch$1, _extends$f({}, rest, {
    checked: value,
    disabled: disabled
  }));
}

var _excluded$6 = ["disabled", "action", "listType", "value", "onChange", "max", "size"];
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
    rest = _objectWithoutProperties$2(props, _excluded$6);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    fileList = _useState2[0],
    setFileList = _useState2[1];
  useEffect(function () {
    if (!value) {
      return;
    }
    var adapterValue = value;
    if (typeof adapterValue === 'string') {
      adapterValue = [adapterValue];
    }
    setFileList(adapterValue.map(function (item, index) {
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
  return /*#__PURE__*/React.createElement(Upload$1, _extends$f({
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

var _excluded$5 = ["type", "onChange", "value"];
function TimePicker(props) {
  props.type;
    var onChange = props.onChange,
    value = props.value,
    rest = _objectWithoutProperties$2(props, _excluded$5);
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
  return /*#__PURE__*/React.createElement(TimePicker$1, _extends$f({
    onChange: onTimeChange,
    value: transformTimeValue,
    format: format
  }, rest));
}

var _excluded$4 = ["value"];
function Progress(props) {
  var value = props.value,
    rest = _objectWithoutProperties$2(props, _excluded$4);
  return /*#__PURE__*/React.createElement(Progress$1, _extends$f({
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
    defaultValue = props.defaultValue,
    disabeled = props.disabeled;
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
  }, /*#__PURE__*/React.createElement(Slider$1, {
    min: min,
    max: max,
    onChange: onChange,
    value: typeof inputValue === 'number' ? inputValue : 0,
    step: step,
    disabeled: disabeled
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
    onChange: onChange,
    disabeled: disabeled
  })));
}

var _excluded$3 = ["max", "min", "value", "onChange"];
function InputNumber(props) {
  var max = props.max,
    min = props.min,
    value = props.value,
    onChange = props.onChange,
    rest = _objectWithoutProperties$2(props, _excluded$3);
  var innerChange = function innerChange(val) {
    onChange(val);
  };
  return /*#__PURE__*/React.createElement(InputNumber$1, _extends$f({
    value: value
  }, rest, {
    max: max,
    min: min,
    onChange: innerChange
  }));
}

var lib = {};

var flattenNames$1 = {};

var freeGlobal$3 = _typeof$1(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$3;

var freeGlobal$2 = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf$1 = (typeof self === "undefined" ? "undefined" : _typeof$1(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$a = freeGlobal$2 || freeSelf$1 || Function('return this')();
var _root = root$a;

var root$9 = _root;

/** Built-in value references. */
var _Symbol2 = root$9.Symbol;
var _Symbol$7 = _Symbol2;

var _Symbol$6 = _Symbol$7;

/** Used for built-in method references. */
var objectProto$u = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$o = objectProto$u.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$3 = objectProto$u.toString;

/** Built-in value references. */
var symToStringTag$3 = _Symbol$6 ? _Symbol$6.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$2(value) {
  var isOwn = hasOwnProperty$o.call(value, symToStringTag$3),
    tag = value[symToStringTag$3];
  try {
    value[symToStringTag$3] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString$3.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$3] = tag;
    } else {
      delete value[symToStringTag$3];
    }
  }
  return result;
}
var _getRawTag = getRawTag$2;

/** Used for built-in method references. */
var objectProto$t = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$2 = objectProto$t.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$2(value) {
  return nativeObjectToString$2.call(value);
}
var _objectToString = objectToString$2;

var _Symbol$5 = _Symbol$7,
  getRawTag$1 = _getRawTag,
  objectToString$1 = _objectToString;

/** `Object#toString` result references. */
var nullTag$1 = '[object Null]',
  undefinedTag$1 = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$2 = _Symbol$5 ? _Symbol$5.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$8(value) {
  if (value == null) {
    return value === undefined ? undefinedTag$1 : nullTag$1;
  }
  return symToStringTag$2 && symToStringTag$2 in Object(value) ? getRawTag$1(value) : objectToString$1(value);
}
var _baseGetTag = baseGetTag$8;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$d = Array.isArray;
var isArray_1 = isArray$d;

function isObjectLike$a(value) {
  return value != null && _typeof$1(value) == 'object';
}
var isObjectLike_1 = isObjectLike$a;

var baseGetTag$7 = _baseGetTag,
  isArray$c = isArray_1,
  isObjectLike$9 = isObjectLike_1;

/** `Object#toString` result references. */
var stringTag$6 = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' || !isArray$c(value) && isObjectLike$9(value) && baseGetTag$7(value) == stringTag$6;
}
var isString_1 = isString;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor$2(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
      iterable = Object(object),
      props = keysFunc(object),
      length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$2;

var createBaseFor$1 = _createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor$3 = createBaseFor$1();
var _baseFor = baseFor$3;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes$2(n, iteratee) {
  var index = -1,
    result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$2;

var baseGetTag$6 = _baseGetTag,
  isObjectLike$8 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$6 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$2(value) {
  return isObjectLike$8(value) && baseGetTag$6(value) == argsTag$6;
}
var _baseIsArguments = baseIsArguments$2;

var baseIsArguments$1 = _baseIsArguments,
  isObjectLike$7 = isObjectLike_1;

/** Used for built-in method references. */
var objectProto$s = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$n = objectProto$s.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$3 = objectProto$s.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments$4 = baseIsArguments$1(function () {
  return arguments;
}()) ? baseIsArguments$1 : function (value) {
  return isObjectLike$7(value) && hasOwnProperty$n.call(value, 'callee') && !propertyIsEnumerable$3.call(value, 'callee');
};
var isArguments_1 = isArguments$4;

var isBuffer$5 = {exports: {}};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse$1() {
  return false;
}
var stubFalse_1 = stubFalse$1;

isBuffer$5.exports;
(function (module, exports) {
  var root = _root,
    stubFalse = stubFalse_1;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;
  module.exports = isBuffer;
})(isBuffer$5, isBuffer$5.exports);
var isBufferExports = isBuffer$5.exports;

var MAX_SAFE_INTEGER$3 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint$1 = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$3(value, length) {
  var type = _typeof$1(value);
  length = length == null ? MAX_SAFE_INTEGER$3 : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint$1.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var _isIndex = isIndex$3;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$2 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$4(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$2;
}
var isLength_1 = isLength$4;

var baseGetTag$5 = _baseGetTag,
  isLength$3 = isLength_1,
  isObjectLike$6 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$5 = '[object Arguments]',
  arrayTag$4 = '[object Array]',
  boolTag$5 = '[object Boolean]',
  dateTag$5 = '[object Date]',
  errorTag$4 = '[object Error]',
  funcTag$4 = '[object Function]',
  mapTag$8 = '[object Map]',
  numberTag$5 = '[object Number]',
  objectTag$8 = '[object Object]',
  regexpTag$5 = '[object RegExp]',
  setTag$8 = '[object Set]',
  stringTag$5 = '[object String]',
  weakMapTag$4 = '[object WeakMap]';
var arrayBufferTag$5 = '[object ArrayBuffer]',
  dataViewTag$7 = '[object DataView]',
  float32Tag$3 = '[object Float32Array]',
  float64Tag$3 = '[object Float64Array]',
  int8Tag$3 = '[object Int8Array]',
  int16Tag$3 = '[object Int16Array]',
  int32Tag$3 = '[object Int32Array]',
  uint8Tag$3 = '[object Uint8Array]',
  uint8ClampedTag$3 = '[object Uint8ClampedArray]',
  uint16Tag$3 = '[object Uint16Array]',
  uint32Tag$3 = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags$1 = {};
typedArrayTags$1[float32Tag$3] = typedArrayTags$1[float64Tag$3] = typedArrayTags$1[int8Tag$3] = typedArrayTags$1[int16Tag$3] = typedArrayTags$1[int32Tag$3] = typedArrayTags$1[uint8Tag$3] = typedArrayTags$1[uint8ClampedTag$3] = typedArrayTags$1[uint16Tag$3] = typedArrayTags$1[uint32Tag$3] = true;
typedArrayTags$1[argsTag$5] = typedArrayTags$1[arrayTag$4] = typedArrayTags$1[arrayBufferTag$5] = typedArrayTags$1[boolTag$5] = typedArrayTags$1[dataViewTag$7] = typedArrayTags$1[dateTag$5] = typedArrayTags$1[errorTag$4] = typedArrayTags$1[funcTag$4] = typedArrayTags$1[mapTag$8] = typedArrayTags$1[numberTag$5] = typedArrayTags$1[objectTag$8] = typedArrayTags$1[regexpTag$5] = typedArrayTags$1[setTag$8] = typedArrayTags$1[stringTag$5] = typedArrayTags$1[weakMapTag$4] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$2(value) {
  return isObjectLike$6(value) && isLength$3(value.length) && !!typedArrayTags$1[baseGetTag$5(value)];
}
var _baseIsTypedArray = baseIsTypedArray$2;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary$4(func) {
  return function (value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$4;

var _nodeUtil = {exports: {}};

_nodeUtil.exports;
(function (module, exports) {
  var freeGlobal = _freeGlobal;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;
      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();
  module.exports = nodeUtil;
})(_nodeUtil, _nodeUtil.exports);
var _nodeUtilExports = _nodeUtil.exports;

var baseIsTypedArray$1 = _baseIsTypedArray,
  baseUnary$3 = _baseUnary,
  nodeUtil$4 = _nodeUtilExports;

/* Node.js helper references. */
var nodeIsTypedArray$1 = nodeUtil$4 && nodeUtil$4.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$4 = nodeIsTypedArray$1 ? baseUnary$3(nodeIsTypedArray$1) : baseIsTypedArray$1;
var isTypedArray_1 = isTypedArray$4;

var baseTimes$1 = _baseTimes,
  isArguments$3 = isArguments_1,
  isArray$b = isArray_1,
  isBuffer$4 = isBufferExports,
  isIndex$2 = _isIndex,
  isTypedArray$3 = isTypedArray_1;

/** Used for built-in method references. */
var objectProto$r = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$m = objectProto$r.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$3(value, inherited) {
  var isArr = isArray$b(value),
    isArg = !isArr && isArguments$3(value),
    isBuff = !isArr && !isArg && isBuffer$4(value),
    isType = !isArr && !isArg && !isBuff && isTypedArray$3(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? baseTimes$1(value.length, String) : [],
    length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$m.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex$2(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$3;

/** Used for built-in method references. */
var objectProto$q = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$4(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$q;
  return value === proto;
}
var _isPrototype = isPrototype$4;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg$3(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$3;

var overArg$2 = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$3 = overArg$2(Object.keys, Object);
var _nativeKeys = nativeKeys$3;

var isPrototype$3 = _isPrototype,
  nativeKeys$2 = _nativeKeys;

/** Used for built-in method references. */
var objectProto$p = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$l = objectProto$p.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$2(object) {
  if (!isPrototype$3(object)) {
    return nativeKeys$2(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$l.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$2;

function isObject$7(value) {
  var type = _typeof$1(value);
  return value != null && (type == 'object' || type == 'function');
}
var isObject_1 = isObject$7;

var baseGetTag$4 = _baseGetTag,
  isObject$6 = isObject_1;

/** `Object#toString` result references. */
var asyncTag$1 = '[object AsyncFunction]',
  funcTag$3 = '[object Function]',
  genTag$2 = '[object GeneratorFunction]',
  proxyTag$1 = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$3(value) {
  if (!isObject$6(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$4(value);
  return tag == funcTag$3 || tag == genTag$2 || tag == asyncTag$1 || tag == proxyTag$1;
}
var isFunction_1 = isFunction$3;

var isFunction$2 = isFunction_1,
  isLength$2 = isLength_1;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$5(value) {
  return value != null && isLength$2(value.length) && !isFunction$2(value);
}
var isArrayLike_1 = isArrayLike$5;

var arrayLikeKeys$2 = _arrayLikeKeys,
  baseKeys$1 = _baseKeys,
  isArrayLike$4 = isArrayLike_1;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$6(object) {
  return isArrayLike$4(object) ? arrayLikeKeys$2(object) : baseKeys$1(object);
}
var keys_1 = keys$6;

var baseFor$2 = _baseFor,
  keys$5 = keys_1;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn$3(object, iteratee) {
  return object && baseFor$2(object, iteratee, keys$5);
}
var _baseForOwn = baseForOwn$3;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity$3(value) {
  return value;
}
var identity_1 = identity$3;

var identity$2 = identity_1;

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction$2(value) {
  return typeof value == 'function' ? value : identity$2;
}
var _castFunction = castFunction$2;

var baseForOwn$2 = _baseForOwn,
  castFunction$1 = _castFunction;

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && baseForOwn$2(object, castFunction$1(iteratee));
}
var forOwn_1 = forOwn;

var overArg$1 = _overArg;

/** Built-in value references. */
var getPrototype$5 = overArg$1(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$5;

var baseGetTag$3 = _baseGetTag,
  getPrototype$4 = _getPrototype,
  isObjectLike$5 = isObjectLike_1;

/** `Object#toString` result references. */
var objectTag$7 = '[object Object]';

/** Used for built-in method references. */
var funcProto$5 = Function.prototype,
  objectProto$o = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$5 = funcProto$5.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$k = objectProto$o.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString$1 = funcToString$5.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject$1(value) {
  if (!isObjectLike$5(value) || baseGetTag$3(value) != objectTag$7) {
    return false;
  }
  var proto = getPrototype$4(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$k.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString$5.call(Ctor) == objectCtorString$1;
}
var isPlainObject_1 = isPlainObject$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap$3(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap$3;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear$2() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$2;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq$4(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$4;

var eq$3 = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$5(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$3(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$5;

var assocIndexOf$4 = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto$1 = Array.prototype;

/** Built-in value references. */
var splice$1 = arrayProto$1.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$2(key) {
  var data = this.__data__,
    index = assocIndexOf$4(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice$1.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$2;

var assocIndexOf$3 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$2(key) {
  var data = this.__data__,
    index = assocIndexOf$3(data, key);
  return index < 0 ? undefined : data[index][1];
}
var _listCacheGet = listCacheGet$2;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$2(key) {
  return assocIndexOf$2(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$2;

var assocIndexOf$1 = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$2(key, value) {
  var data = this.__data__,
    index = assocIndexOf$1(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$2;

var listCacheClear$1 = _listCacheClear,
  listCacheDelete$1 = _listCacheDelete,
  listCacheGet$1 = _listCacheGet,
  listCacheHas$1 = _listCacheHas,
  listCacheSet$1 = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$5(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$5.prototype.clear = listCacheClear$1;
ListCache$5.prototype['delete'] = listCacheDelete$1;
ListCache$5.prototype.get = listCacheGet$1;
ListCache$5.prototype.has = listCacheHas$1;
ListCache$5.prototype.set = listCacheSet$1;
var _ListCache = ListCache$5;

var ListCache$4 = _ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$2() {
  this.__data__ = new ListCache$4();
  this.size = 0;
}
var _stackClear = stackClear$2;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete$2(key) {
  var data = this.__data__,
    result = data['delete'](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$2;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet$2(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$2;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas$2(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$2;

var root$8 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$3 = root$8['__core-js_shared__'];
var _coreJsData = coreJsData$3;

var coreJsData$2 = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey$1 = function () {
  var uid = /[^.]+$/.exec(coreJsData$2 && coreJsData$2.keys && coreJsData$2.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$2(func) {
  return !!maskSrcKey$1 && maskSrcKey$1 in func;
}
var _isMasked = isMasked$2;

/** Used for built-in method references. */
var funcProto$4 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$4 = funcProto$4.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$3(func) {
  if (func != null) {
    try {
      return funcToString$4.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
var _toSource = toSource$3;

var isFunction$1 = isFunction_1,
  isMasked$1 = _isMasked,
  isObject$5 = isObject_1,
  toSource$2 = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor$1 = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$3 = Function.prototype,
  objectProto$n = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$3 = funcProto$3.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$j = objectProto$n.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative$1 = RegExp('^' + funcToString$3.call(hasOwnProperty$j).replace(reRegExpChar$1, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$2(value) {
  if (!isObject$5(value) || isMasked$1(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative$1 : reIsHostCtor$1;
  return pattern.test(toSource$2(value));
}
var _baseIsNative = baseIsNative$2;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue$2(object, key) {
  return object == null ? undefined : object[key];
}
var _getValue = getValue$2;

var baseIsNative$1 = _baseIsNative,
  getValue$1 = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$8(object, key) {
  var value = getValue$1(object, key);
  return baseIsNative$1(value) ? value : undefined;
}
var _getNative = getNative$8;

var getNative$7 = _getNative,
  root$7 = _root;

/* Built-in method references that are verified to be native. */
var Map$6 = getNative$7(root$7, 'Map');
var _Map = Map$6;

var getNative$6 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$6 = getNative$6(Object, 'create');
var _nativeCreate = nativeCreate$6;

var nativeCreate$5 = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$2() {
  this.__data__ = nativeCreate$5 ? nativeCreate$5(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$2;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete$2(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$2;

var nativeCreate$4 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$5 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$m = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$i = objectProto$m.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$2(key) {
  var data = this.__data__;
  if (nativeCreate$4) {
    var result = data[key];
    return result === HASH_UNDEFINED$5 ? undefined : result;
  }
  return hasOwnProperty$i.call(data, key) ? data[key] : undefined;
}
var _hashGet = hashGet$2;

var nativeCreate$3 = _nativeCreate;

/** Used for built-in method references. */
var objectProto$l = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$h = objectProto$l.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$2(key) {
  var data = this.__data__;
  return nativeCreate$3 ? data[key] !== undefined : hasOwnProperty$h.call(data, key);
}
var _hashHas = hashHas$2;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$4 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$2(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$2 && value === undefined ? HASH_UNDEFINED$4 : value;
  return this;
}
var _hashSet = hashSet$2;

var hashClear$1 = _hashClear,
  hashDelete$1 = _hashDelete,
  hashGet$1 = _hashGet,
  hashHas$1 = _hashHas,
  hashSet$1 = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$2(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$2.prototype.clear = hashClear$1;
Hash$2.prototype['delete'] = hashDelete$1;
Hash$2.prototype.get = hashGet$1;
Hash$2.prototype.has = hashHas$1;
Hash$2.prototype.set = hashSet$1;
var _Hash = Hash$2;

var Hash$1 = _Hash,
  ListCache$3 = _ListCache,
  Map$5 = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$2() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash$1(),
    'map': new (Map$5 || ListCache$3)(),
    'string': new Hash$1()
  };
}
var _mapCacheClear = mapCacheClear$2;

function isKeyable$2(value) {
  var type = _typeof$1(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
var _isKeyable = isKeyable$2;

var isKeyable$1 = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$5(map, key) {
  var data = map.__data__;
  return isKeyable$1(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
var _getMapData = getMapData$5;

var getMapData$4 = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$2(key) {
  var result = getMapData$4(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$2;

var getMapData$3 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$2(key) {
  return getMapData$3(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$2;

var getMapData$2 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$2(key) {
  return getMapData$2(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$2;

var getMapData$1 = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$2(key, value) {
  var data = getMapData$1(this, key),
    size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$2;

var mapCacheClear$1 = _mapCacheClear,
  mapCacheDelete$1 = _mapCacheDelete,
  mapCacheGet$1 = _mapCacheGet,
  mapCacheHas$1 = _mapCacheHas,
  mapCacheSet$1 = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$4(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$4.prototype.clear = mapCacheClear$1;
MapCache$4.prototype['delete'] = mapCacheDelete$1;
MapCache$4.prototype.get = mapCacheGet$1;
MapCache$4.prototype.has = mapCacheHas$1;
MapCache$4.prototype.set = mapCacheSet$1;
var _MapCache = MapCache$4;

var ListCache$2 = _ListCache,
  Map$4 = _Map,
  MapCache$3 = _MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$1 = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$2(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$2) {
    var pairs = data.__data__;
    if (!Map$4 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$3(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$2;

var ListCache$1 = _ListCache,
  stackClear$1 = _stackClear,
  stackDelete$1 = _stackDelete,
  stackGet$1 = _stackGet,
  stackHas$1 = _stackHas,
  stackSet$1 = _stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$4(entries) {
  var data = this.__data__ = new ListCache$1(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$4.prototype.clear = stackClear$1;
Stack$4.prototype['delete'] = stackDelete$1;
Stack$4.prototype.get = stackGet$1;
Stack$4.prototype.has = stackHas$1;
Stack$4.prototype.set = stackSet$1;
var _Stack = Stack$4;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$3 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd$2(value) {
  this.__data__.set(value, HASH_UNDEFINED$3);
  return this;
}
var _setCacheAdd = setCacheAdd$2;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas$2(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$2;

var MapCache$2 = _MapCache,
  setCacheAdd$1 = _setCacheAdd,
  setCacheHas$1 = _setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache$2(values) {
  var index = -1,
    length = values == null ? 0 : values.length;
  this.__data__ = new MapCache$2();
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache$2.prototype.add = SetCache$2.prototype.push = setCacheAdd$1;
SetCache$2.prototype.has = setCacheHas$1;
var _SetCache = SetCache$2;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome$2(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$2;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas$2(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$2;

var SetCache$1 = _SetCache,
  arraySome$1 = _arraySome,
  cacheHas$1 = _cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$b = 1,
  COMPARE_UNORDERED_FLAG$7 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays$3(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$b,
    arrLength = array.length,
    othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
    result = true,
    seen = bitmask & COMPARE_UNORDERED_FLAG$7 ? new SetCache$1() : undefined;
  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
      othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome$1(other, function (othValue, othIndex) {
        if (!cacheHas$1(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}
var _equalArrays = equalArrays$3;

var root$6 = _root;

/** Built-in value references. */
var Uint8Array$4 = root$6.Uint8Array;
var _Uint8Array = Uint8Array$4;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray$2(map) {
  var index = -1,
    result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$2;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray$2(set) {
  var index = -1,
    result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
var _setToArray = setToArray$2;

var _Symbol$4 = _Symbol$7,
  Uint8Array$3 = _Uint8Array,
  eq$2 = eq_1,
  equalArrays$2 = _equalArrays,
  mapToArray$1 = _mapToArray,
  setToArray$1 = _setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$a = 1,
  COMPARE_UNORDERED_FLAG$6 = 2;

/** `Object#toString` result references. */
var boolTag$4 = '[object Boolean]',
  dateTag$4 = '[object Date]',
  errorTag$3 = '[object Error]',
  mapTag$7 = '[object Map]',
  numberTag$4 = '[object Number]',
  regexpTag$4 = '[object RegExp]',
  setTag$7 = '[object Set]',
  stringTag$4 = '[object String]',
  symbolTag$5 = '[object Symbol]';
var arrayBufferTag$4 = '[object ArrayBuffer]',
  dataViewTag$6 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$4 = _Symbol$4 ? _Symbol$4.prototype : undefined,
  symbolValueOf$2 = symbolProto$4 ? symbolProto$4.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag$2(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$6:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$4:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$3(object), new Uint8Array$3(other))) {
        return false;
      }
      return true;
    case boolTag$4:
    case dateTag$4:
    case numberTag$4:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq$2(+object, +other);
    case errorTag$3:
      return object.name == other.name && object.message == other.message;
    case regexpTag$4:
    case stringTag$4:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';
    case mapTag$7:
      var convert = mapToArray$1;
    case setTag$7:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$a;
      convert || (convert = setToArray$1);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$6;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays$2(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;
    case symbolTag$5:
      if (symbolValueOf$2) {
        return symbolValueOf$2.call(object) == symbolValueOf$2.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$2;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush$3(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush$3;

var arrayPush$2 = _arrayPush,
  isArray$a = isArray_1;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys$3(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$a(object) ? result : arrayPush$2(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$3;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter$2(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$2;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray$3() {
  return [];
}
var stubArray_1 = stubArray$3;

var arrayFilter$1 = _arrayFilter,
  stubArray$2 = stubArray_1;

/** Used for built-in method references. */
var objectProto$k = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$2 = objectProto$k.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$2 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols$5 = !nativeGetSymbols$2 ? stubArray$2 : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter$1(nativeGetSymbols$2(object), function (symbol) {
    return propertyIsEnumerable$2.call(object, symbol);
  });
};
var _getSymbols = getSymbols$5;

var baseGetAllKeys$2 = _baseGetAllKeys,
  getSymbols$4 = _getSymbols,
  keys$4 = keys_1;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys$3(object) {
  return baseGetAllKeys$2(object, keys$4, getSymbols$4);
}
var _getAllKeys = getAllKeys$3;

var getAllKeys$2 = _getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$9 = 1;

/** Used for built-in method references. */
var objectProto$j = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$g = objectProto$j.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects$2(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$9,
    objProps = getAllKeys$2(object),
    objLength = objProps.length,
    othProps = getAllKeys$2(other),
    othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$g.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
      othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
      othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}
var _equalObjects = equalObjects$2;

var getNative$5 = _getNative,
  root$5 = _root;

/* Built-in method references that are verified to be native. */
var DataView$3 = getNative$5(root$5, 'DataView');
var _DataView = DataView$3;

var getNative$4 = _getNative,
  root$4 = _root;

/* Built-in method references that are verified to be native. */
var Promise$4 = getNative$4(root$4, 'Promise');
var _Promise = Promise$4;

var getNative$3 = _getNative,
  root$3 = _root;

/* Built-in method references that are verified to be native. */
var Set$3 = getNative$3(root$3, 'Set');
var _Set = Set$3;

var getNative$2 = _getNative,
  root$2 = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$3 = getNative$2(root$2, 'WeakMap');
var _WeakMap = WeakMap$3;

var DataView$2 = _DataView,
  Map$3 = _Map,
  Promise$3 = _Promise,
  Set$2 = _Set,
  WeakMap$2 = _WeakMap,
  baseGetTag$2 = _baseGetTag,
  toSource$1 = _toSource;

/** `Object#toString` result references. */
var mapTag$6 = '[object Map]',
  objectTag$6 = '[object Object]',
  promiseTag$1 = '[object Promise]',
  setTag$6 = '[object Set]',
  weakMapTag$3 = '[object WeakMap]';
var dataViewTag$5 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString$1 = toSource$1(DataView$2),
  mapCtorString$1 = toSource$1(Map$3),
  promiseCtorString$1 = toSource$1(Promise$3),
  setCtorString$1 = toSource$1(Set$2),
  weakMapCtorString$1 = toSource$1(WeakMap$2);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$6 = baseGetTag$2;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView$2 && getTag$6(new DataView$2(new ArrayBuffer(1))) != dataViewTag$5 || Map$3 && getTag$6(new Map$3()) != mapTag$6 || Promise$3 && getTag$6(Promise$3.resolve()) != promiseTag$1 || Set$2 && getTag$6(new Set$2()) != setTag$6 || WeakMap$2 && getTag$6(new WeakMap$2()) != weakMapTag$3) {
  getTag$6 = function getTag(value) {
    var result = baseGetTag$2(value),
      Ctor = result == objectTag$6 ? value.constructor : undefined,
      ctorString = Ctor ? toSource$1(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString$1:
          return dataViewTag$5;
        case mapCtorString$1:
          return mapTag$6;
        case promiseCtorString$1:
          return promiseTag$1;
        case setCtorString$1:
          return setTag$6;
        case weakMapCtorString$1:
          return weakMapTag$3;
      }
    }
    return result;
  };
}
var _getTag = getTag$6;

var Stack$3 = _Stack,
  equalArrays$1 = _equalArrays,
  equalByTag$1 = _equalByTag,
  equalObjects$1 = _equalObjects,
  getTag$5 = _getTag,
  isArray$9 = isArray_1,
  isBuffer$3 = isBufferExports,
  isTypedArray$2 = isTypedArray_1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$8 = 1;

/** `Object#toString` result references. */
var argsTag$4 = '[object Arguments]',
  arrayTag$3 = '[object Array]',
  objectTag$5 = '[object Object]';

/** Used for built-in method references. */
var objectProto$i = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$f = objectProto$i.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep$2(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$9(object),
    othIsArr = isArray$9(other),
    objTag = objIsArr ? arrayTag$3 : getTag$5(object),
    othTag = othIsArr ? arrayTag$3 : getTag$5(other);
  objTag = objTag == argsTag$4 ? objectTag$5 : objTag;
  othTag = othTag == argsTag$4 ? objectTag$5 : othTag;
  var objIsObj = objTag == objectTag$5,
    othIsObj = othTag == objectTag$5,
    isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$3(object)) {
    if (!isBuffer$3(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$3());
    return objIsArr || isTypedArray$2(object) ? equalArrays$1(object, other, bitmask, customizer, equalFunc, stack) : equalByTag$1(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$8)) {
    var objIsWrapped = objIsObj && hasOwnProperty$f.call(object, '__wrapped__'),
      othIsWrapped = othIsObj && hasOwnProperty$f.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
        othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$3());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$3());
  return equalObjects$1(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$2;

var baseIsEqualDeep$1 = _baseIsEqualDeep,
  isObjectLike$4 = isObjectLike_1;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual$3(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike$4(value) && !isObjectLike$4(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep$1(value, other, bitmask, customizer, baseIsEqual$3, stack);
}
var _baseIsEqual = baseIsEqual$3;

var Stack$2 = _Stack,
  baseIsEqual$2 = _baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$7 = 1,
  COMPARE_UNORDERED_FLAG$5 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch$2(object, source, matchData, customizer) {
  var index = matchData.length,
    length = index,
    noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
      objValue = object[key],
      srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack$2();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? baseIsEqual$2(srcValue, objValue, COMPARE_PARTIAL_FLAG$7 | COMPARE_UNORDERED_FLAG$5, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$2;

var isObject$4 = isObject_1;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable$3(value) {
  return value === value && !isObject$4(value);
}
var _isStrictComparable = isStrictComparable$3;

var isStrictComparable$2 = _isStrictComparable,
  keys$3 = keys_1;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData$2(object) {
  var result = keys$3(object),
    length = result.length;
  while (length--) {
    var key = result[length],
      value = object[key];
    result[length] = [key, value, isStrictComparable$2(value)];
  }
  return result;
}
var _getMatchData = getMatchData$2;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable$3(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable$3;

var baseIsMatch$1 = _baseIsMatch,
  getMatchData$1 = _getMatchData,
  matchesStrictComparable$2 = _matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches$2(source) {
  var matchData = getMatchData$1(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$2(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || baseIsMatch$1(object, source, matchData);
  };
}
var _baseMatches = baseMatches$2;

var baseGetTag$1 = _baseGetTag,
  isObjectLike$3 = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag$4 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$4(value) {
  return _typeof$1(value) == 'symbol' || isObjectLike$3(value) && baseGetTag$1(value) == symbolTag$4;
}
var isSymbol_1 = isSymbol$4;

var isArray$8 = isArray_1,
  isSymbol$3 = isSymbol_1;

/** Used to match property names within property paths. */
var reIsDeepProp$1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp$1 = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$4(value, object) {
  if (isArray$8(value)) {
    return false;
  }
  var type = _typeof$1(value);
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp$1.test(value) || !reIsDeepProp$1.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$4;

var MapCache$1 = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT$3 = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$2(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$3);
  }
  var memoized = function memoized() {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$2.Cache || MapCache$1)();
  return memoized;
}

// Expose `MapCache`.
memoize$2.Cache = MapCache$1;
var memoize_1 = memoize$2;

var memoize$1 = memoize_1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE$1 = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$2(func) {
  var result = memoize$1(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE$1) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$2;

var memoizeCapped$1 = _memoizeCapped;

/** Used to match property names within property paths. */
var rePropName$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar$1 = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$3 = memoizeCapped$1(function (string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName$1, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar$1, '$1') : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$3;

var _Symbol$3 = _Symbol$7,
  arrayMap$2 = _arrayMap,
  isArray$7 = isArray_1,
  isSymbol$2 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$3 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$3 = _Symbol$3 ? _Symbol$3.prototype : undefined,
  symbolToString$1 = symbolProto$3 ? symbolProto$3.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$2(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$7(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap$2(value, baseToString$2) + '';
  }
  if (isSymbol$2(value)) {
    return symbolToString$1 ? symbolToString$1.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$3 ? '-0' : result;
}
var _baseToString = baseToString$2;

var baseToString$1 = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$3(value) {
  return value == null ? '' : baseToString$1(value);
}
var toString_1 = toString$3;

var isArray$6 = isArray_1,
  isKey$3 = _isKey,
  stringToPath$2 = _stringToPath,
  toString$2 = toString_1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$3(value, object) {
  if (isArray$6(value)) {
    return value;
  }
  return isKey$3(value, object) ? [value] : stringToPath$2(toString$2(value));
}
var _castPath = castPath$3;

var isSymbol$1 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$5(value) {
  if (typeof value == 'string' || isSymbol$1(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$2 ? '-0' : result;
}
var _toKey = toKey$5;

var castPath$2 = _castPath,
  toKey$4 = _toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$3(object, path) {
  path = castPath$2(path, object);
  var index = 0,
    length = path.length;
  while (object != null && index < length) {
    object = object[toKey$4(path[index++])];
  }
  return index && index == length ? object : undefined;
}
var _baseGet = baseGet$3;

var baseGet$2 = _baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get$3(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet$2(object, path);
  return result === undefined ? defaultValue : result;
}
var get_1 = get$3;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn$2(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn$2;

var castPath$1 = _castPath,
  isArguments$2 = isArguments_1,
  isArray$5 = isArray_1,
  isIndex$1 = _isIndex,
  isLength$1 = isLength_1,
  toKey$3 = _toKey;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath$2(object, path, hasFunc) {
  path = castPath$1(path, object);
  var index = -1,
    length = path.length,
    result = false;
  while (++index < length) {
    var key = toKey$3(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength$1(length) && isIndex$1(key, length) && (isArray$5(object) || isArguments$2(object));
}
var _hasPath = hasPath$2;

var baseHasIn$1 = _baseHasIn,
  hasPath$1 = _hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn$2(object, path) {
  return object != null && hasPath$1(object, path, baseHasIn$1);
}
var hasIn_1 = hasIn$2;

var baseIsEqual$1 = _baseIsEqual,
  get$2 = get_1,
  hasIn$1 = hasIn_1,
  isKey$2 = _isKey,
  isStrictComparable$1 = _isStrictComparable,
  matchesStrictComparable$1 = _matchesStrictComparable,
  toKey$2 = _toKey;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$6 = 1,
  COMPARE_UNORDERED_FLAG$4 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty$2(path, srcValue) {
  if (isKey$2(path) && isStrictComparable$1(srcValue)) {
    return matchesStrictComparable$1(toKey$2(path), srcValue);
  }
  return function (object) {
    var objValue = get$2(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn$1(object, path) : baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$6 | COMPARE_UNORDERED_FLAG$4);
  };
}
var _baseMatchesProperty = baseMatchesProperty$2;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty$2(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}
var _baseProperty = baseProperty$2;

var baseGet$1 = _baseGet;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep$2(path) {
  return function (object) {
    return baseGet$1(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep$2;

var baseProperty$1 = _baseProperty,
  basePropertyDeep$1 = _basePropertyDeep,
  isKey$1 = _isKey,
  toKey$1 = _toKey;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property$2(path) {
  return isKey$1(path) ? baseProperty$1(toKey$1(path)) : basePropertyDeep$1(path);
}
var property_1 = property$2;

var baseMatches$1 = _baseMatches,
  baseMatchesProperty$1 = _baseMatchesProperty,
  identity$1 = identity_1,
  isArray$4 = isArray_1,
  property$1 = property_1;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee$2(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity$1;
  }
  if (_typeof$1(value) == 'object') {
    return isArray$4(value) ? baseMatchesProperty$1(value[0], value[1]) : baseMatches$1(value);
  }
  return property$1(value);
}
var _baseIteratee = baseIteratee$2;

var isArrayLike$3 = isArrayLike_1;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach$2(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$3(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
      index = fromRight ? length : -1,
      iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var _createBaseEach = createBaseEach$2;

var baseForOwn$1 = _baseForOwn,
  createBaseEach$1 = _createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach$3 = createBaseEach$1(baseForOwn$1);
var _baseEach = baseEach$3;

var baseEach$2 = _baseEach,
  isArrayLike$2 = isArrayLike_1;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap$2(collection, iteratee) {
  var index = -1,
    result = isArrayLike$2(collection) ? Array(collection.length) : [];
  baseEach$2(collection, function (value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}
var _baseMap = baseMap$2;

var arrayMap$1 = _arrayMap,
  baseIteratee$1 = _baseIteratee,
  baseMap$1 = _baseMap,
  isArray$3 = isArray_1;

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map$1(collection, iteratee) {
  var func = isArray$3(collection) ? arrayMap$1 : baseMap$1;
  return func(collection, baseIteratee$1(iteratee));
}
var map_1 = map$1;

Object.defineProperty(flattenNames$1, "__esModule", {
  value: true
});
flattenNames$1.flattenNames = undefined;
var _isString2 = isString_1;
var _isString3 = _interopRequireDefault$7(_isString2);
var _forOwn2$2 = forOwn_1;
var _forOwn3$2 = _interopRequireDefault$7(_forOwn2$2);
var _isPlainObject2 = isPlainObject_1;
var _isPlainObject3 = _interopRequireDefault$7(_isPlainObject2);
var _map2 = map_1;
var _map3 = _interopRequireDefault$7(_map2);
function _interopRequireDefault$7(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var flattenNames = flattenNames$1.flattenNames = function flattenNames() {
  var things = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var names = [];
  (0, _map3["default"])(things, function (thing) {
    if (Array.isArray(thing)) {
      flattenNames(thing).map(function (name) {
        return names.push(name);
      });
    } else if ((0, _isPlainObject3["default"])(thing)) {
      (0, _forOwn3$2["default"])(thing, function (value, key) {
        value === true && names.push(key);
        names.push(key + '-' + value);
      });
    } else if ((0, _isString3["default"])(thing)) {
      names.push(thing);
    }
  });
  return names;
};
flattenNames$1["default"] = flattenNames;

var mergeClasses$1 = {};

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach$2(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$2;

var getNative$1 = _getNative;
var defineProperty$3 = function () {
  try {
    var func = getNative$1(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();
var _defineProperty$1 = defineProperty$3;

var defineProperty$2 = _defineProperty$1;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue$3(object, key, value) {
  if (key == '__proto__' && defineProperty$2) {
    defineProperty$2(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$3;

var baseAssignValue$2 = _baseAssignValue,
  eq$1 = eq_1;

/** Used for built-in method references. */
var objectProto$h = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$e = objectProto$h.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue$3(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$e.call(object, key) && eq$1(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue$2(object, key, value);
  }
}
var _assignValue = assignValue$3;

var assignValue$2 = _assignValue,
  baseAssignValue$1 = _baseAssignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject$5(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
    length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue$1(object, key, newValue);
    } else {
      assignValue$2(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$5;

var copyObject$4 = _copyObject,
  keys$2 = keys_1;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign$1(object, source) {
  return object && copyObject$4(source, keys$2(source), object);
}
var _baseAssign = baseAssign$1;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn$2(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$2;

var isObject$3 = isObject_1,
  isPrototype$2 = _isPrototype,
  nativeKeysIn$1 = _nativeKeysIn;

/** Used for built-in method references. */
var objectProto$g = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$d = objectProto$g.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn$2(object) {
  if (!isObject$3(object)) {
    return nativeKeysIn$1(object);
  }
  var isProto = isPrototype$2(object),
    result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$d.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$2;

var arrayLikeKeys$1 = _arrayLikeKeys,
  baseKeysIn$1 = _baseKeysIn,
  isArrayLike$1 = isArrayLike_1;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$4(object) {
  return isArrayLike$1(object) ? arrayLikeKeys$1(object, true) : baseKeysIn$1(object);
}
var keysIn_1 = keysIn$4;

var copyObject$3 = _copyObject,
  keysIn$3 = keysIn_1;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn$1(object, source) {
  return object && copyObject$3(source, keysIn$3(source), object);
}
var _baseAssignIn = baseAssignIn$1;

var _cloneBuffer = {exports: {}};

_cloneBuffer.exports;
(function (module, exports) {
  var root = _root;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer;
})(_cloneBuffer, _cloneBuffer.exports);
var _cloneBufferExports = _cloneBuffer.exports;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray$2(source, array) {
  var index = -1,
    length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray = copyArray$2;

var copyObject$2 = _copyObject,
  getSymbols$3 = _getSymbols;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols$1(source, object) {
  return copyObject$2(source, getSymbols$3(source), object);
}
var _copySymbols = copySymbols$1;

var arrayPush$1 = _arrayPush,
  getPrototype$3 = _getPrototype,
  getSymbols$2 = _getSymbols,
  stubArray$1 = stubArray_1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn$2 = !nativeGetSymbols$1 ? stubArray$1 : function (object) {
  var result = [];
  while (object) {
    arrayPush$1(result, getSymbols$2(object));
    object = getPrototype$3(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;

var copyObject$1 = _copyObject,
  getSymbolsIn$1 = _getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn$1(source, object) {
  return copyObject$1(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;

var baseGetAllKeys$1 = _baseGetAllKeys,
  getSymbolsIn = _getSymbolsIn,
  keysIn$2 = keysIn_1;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn$1(object) {
  return baseGetAllKeys$1(object, keysIn$2, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1;

/** Used for built-in method references. */
var objectProto$f = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$c = objectProto$f.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray$1(array) {
  var length = array.length,
    result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$c.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;

var Uint8Array$2 = _Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer$4(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$2(result).set(new Uint8Array$2(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$4;

var cloneArrayBuffer$3 = _cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$3(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;

var _Symbol$2 = _Symbol$7;

/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = _Symbol$2 ? _Symbol$2.prototype : undefined,
  symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol$1(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;

var cloneArrayBuffer$2 = _cloneArrayBuffer;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray$2(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$2;

var cloneArrayBuffer$1 = _cloneArrayBuffer,
  cloneDataView = _cloneDataView,
  cloneRegExp = _cloneRegExp,
  cloneSymbol = _cloneSymbol,
  cloneTypedArray$1 = _cloneTypedArray;

/** `Object#toString` result references. */
var boolTag$3 = '[object Boolean]',
  dateTag$3 = '[object Date]',
  mapTag$5 = '[object Map]',
  numberTag$3 = '[object Number]',
  regexpTag$3 = '[object RegExp]',
  setTag$5 = '[object Set]',
  stringTag$3 = '[object String]',
  symbolTag$3 = '[object Symbol]';
var arrayBufferTag$3 = '[object ArrayBuffer]',
  dataViewTag$4 = '[object DataView]',
  float32Tag$2 = '[object Float32Array]',
  float64Tag$2 = '[object Float64Array]',
  int8Tag$2 = '[object Int8Array]',
  int16Tag$2 = '[object Int16Array]',
  int32Tag$2 = '[object Int32Array]',
  uint8Tag$2 = '[object Uint8Array]',
  uint8ClampedTag$2 = '[object Uint8ClampedArray]',
  uint16Tag$2 = '[object Uint16Array]',
  uint32Tag$2 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$3:
      return cloneArrayBuffer$1(object);
    case boolTag$3:
    case dateTag$3:
      return new Ctor(+object);
    case dataViewTag$4:
      return cloneDataView(object, isDeep);
    case float32Tag$2:
    case float64Tag$2:
    case int8Tag$2:
    case int16Tag$2:
    case int32Tag$2:
    case uint8Tag$2:
    case uint8ClampedTag$2:
    case uint16Tag$2:
    case uint32Tag$2:
      return cloneTypedArray$1(object, isDeep);
    case mapTag$5:
      return new Ctor();
    case numberTag$3:
    case stringTag$3:
      return new Ctor(object);
    case regexpTag$3:
      return cloneRegExp(object);
    case setTag$5:
      return new Ctor();
    case symbolTag$3:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;

var isObject$2 = isObject_1;

/** Built-in value references. */
var objectCreate$1 = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate$3 = function () {
  function object() {}
  return function (proto) {
    if (!isObject$2(proto)) {
      return {};
    }
    if (objectCreate$1) {
      return objectCreate$1(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
var _baseCreate = baseCreate$3;

var baseCreate$2 = _baseCreate,
  getPrototype$2 = _getPrototype,
  isPrototype$1 = _isPrototype;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject$2(object) {
  return typeof object.constructor == 'function' && !isPrototype$1(object) ? baseCreate$2(getPrototype$2(object)) : {};
}
var _initCloneObject = initCloneObject$2;

var getTag$4 = _getTag,
  isObjectLike$2 = isObjectLike_1;

/** `Object#toString` result references. */
var mapTag$4 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap$1(value) {
  return isObjectLike$2(value) && getTag$4(value) == mapTag$4;
}
var _baseIsMap = baseIsMap$1;

var baseIsMap = _baseIsMap,
  baseUnary$2 = _baseUnary,
  nodeUtil$3 = _nodeUtilExports;

/* Node.js helper references. */
var nodeIsMap = nodeUtil$3 && nodeUtil$3.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap$1 = nodeIsMap ? baseUnary$2(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;

var getTag$3 = _getTag,
  isObjectLike$1 = isObjectLike_1;

/** `Object#toString` result references. */
var setTag$4 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet$1(value) {
  return isObjectLike$1(value) && getTag$3(value) == setTag$4;
}
var _baseIsSet = baseIsSet$1;

var baseIsSet = _baseIsSet,
  baseUnary$1 = _baseUnary,
  nodeUtil$2 = _nodeUtilExports;

/* Node.js helper references. */
var nodeIsSet = nodeUtil$2 && nodeUtil$2.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet$1 = nodeIsSet ? baseUnary$1(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;

var Stack$1 = _Stack,
  arrayEach$1 = _arrayEach,
  assignValue$1 = _assignValue,
  baseAssign = _baseAssign,
  baseAssignIn = _baseAssignIn,
  cloneBuffer$1 = _cloneBufferExports,
  copyArray$1 = _copyArray,
  copySymbols = _copySymbols,
  copySymbolsIn = _copySymbolsIn,
  getAllKeys$1 = _getAllKeys,
  getAllKeysIn = _getAllKeysIn,
  getTag$2 = _getTag,
  initCloneArray = _initCloneArray,
  initCloneByTag = _initCloneByTag,
  initCloneObject$1 = _initCloneObject,
  isArray$2 = isArray_1,
  isBuffer$2 = isBufferExports,
  isMap = isMap_1,
  isObject$1 = isObject_1,
  isSet = isSet_1,
  keys$1 = keys_1,
  keysIn$1 = keysIn_1;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1,
  CLONE_FLAT_FLAG = 2,
  CLONE_SYMBOLS_FLAG$1 = 4;

/** `Object#toString` result references. */
var argsTag$3 = '[object Arguments]',
  arrayTag$2 = '[object Array]',
  boolTag$2 = '[object Boolean]',
  dateTag$2 = '[object Date]',
  errorTag$2 = '[object Error]',
  funcTag$2 = '[object Function]',
  genTag$1 = '[object GeneratorFunction]',
  mapTag$3 = '[object Map]',
  numberTag$2 = '[object Number]',
  objectTag$4 = '[object Object]',
  regexpTag$2 = '[object RegExp]',
  setTag$3 = '[object Set]',
  stringTag$2 = '[object String]',
  symbolTag$2 = '[object Symbol]',
  weakMapTag$2 = '[object WeakMap]';
var arrayBufferTag$2 = '[object ArrayBuffer]',
  dataViewTag$3 = '[object DataView]',
  float32Tag$1 = '[object Float32Array]',
  float64Tag$1 = '[object Float64Array]',
  int8Tag$1 = '[object Int8Array]',
  int16Tag$1 = '[object Int16Array]',
  int32Tag$1 = '[object Int32Array]',
  uint8Tag$1 = '[object Uint8Array]',
  uint8ClampedTag$1 = '[object Uint8ClampedArray]',
  uint16Tag$1 = '[object Uint16Array]',
  uint32Tag$1 = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] = cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[dateTag$2] = cloneableTags[float32Tag$1] = cloneableTags[float64Tag$1] = cloneableTags[int8Tag$1] = cloneableTags[int16Tag$1] = cloneableTags[int32Tag$1] = cloneableTags[mapTag$3] = cloneableTags[numberTag$2] = cloneableTags[objectTag$4] = cloneableTags[regexpTag$2] = cloneableTags[setTag$3] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] = cloneableTags[uint8Tag$1] = cloneableTags[uint8ClampedTag$1] = cloneableTags[uint16Tag$1] = cloneableTags[uint32Tag$1] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone$1(value, bitmask, customizer, key, object, stack) {
  var result,
    isDeep = bitmask & CLONE_DEEP_FLAG$1,
    isFlat = bitmask & CLONE_FLAT_FLAG,
    isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject$1(value)) {
    return value;
  }
  var isArr = isArray$2(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray$1(value, result);
    }
  } else {
    var tag = getTag$2(value),
      isFunc = tag == funcTag$2 || tag == genTag$1;
    if (isBuffer$2(value)) {
      return cloneBuffer$1(value, isDeep);
    }
    if (tag == objectTag$4 || tag == argsTag$3 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject$1(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack$1());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys$1 : isFlat ? keysIn$1 : keys$1;
  var props = isArr ? undefined : keysFunc(value);
  arrayEach$1(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue$1(result, key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;

var baseClone = _baseClone;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
  CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;

Object.defineProperty(mergeClasses$1, "__esModule", {
  value: true
});
mergeClasses$1.mergeClasses = undefined;
var _forOwn2$1 = forOwn_1;
var _forOwn3$1 = _interopRequireDefault$6(_forOwn2$1);
var _cloneDeep2 = cloneDeep_1;
var _cloneDeep3 = _interopRequireDefault$6(_cloneDeep2);
var _extends$e = Object.assign || function (target) {
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
function _interopRequireDefault$6(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var mergeClasses = mergeClasses$1.mergeClasses = function mergeClasses(classes) {
  var activeNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var styles = classes["default"] && (0, _cloneDeep3["default"])(classes["default"]) || {};
  activeNames.map(function (name) {
    var toMerge = classes[name];
    if (toMerge) {
      (0, _forOwn3$1["default"])(toMerge, function (value, key) {
        if (!styles[key]) {
          styles[key] = {};
        }
        styles[key] = _extends$e({}, styles[key], toMerge[key]);
      });
    }
    return name;
  });
  return styles;
};
mergeClasses$1["default"] = mergeClasses;

var autoprefix$1 = {};

Object.defineProperty(autoprefix$1, "__esModule", {
  value: true
});
autoprefix$1.autoprefix = undefined;
var _forOwn2 = forOwn_1;
var _forOwn3 = _interopRequireDefault$5(_forOwn2);
var _extends$d = Object.assign || function (target) {
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
function _interopRequireDefault$5(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var transforms = {
  borderRadius: function borderRadius(value) {
    return {
      msBorderRadius: value,
      MozBorderRadius: value,
      OBorderRadius: value,
      WebkitBorderRadius: value,
      borderRadius: value
    };
  },
  boxShadow: function boxShadow(value) {
    return {
      msBoxShadow: value,
      MozBoxShadow: value,
      OBoxShadow: value,
      WebkitBoxShadow: value,
      boxShadow: value
    };
  },
  userSelect: function userSelect(value) {
    return {
      WebkitTouchCallout: value,
      KhtmlUserSelect: value,
      MozUserSelect: value,
      msUserSelect: value,
      WebkitUserSelect: value,
      userSelect: value
    };
  },
  flex: function flex(value) {
    return {
      WebkitBoxFlex: value,
      MozBoxFlex: value,
      WebkitFlex: value,
      msFlex: value,
      flex: value
    };
  },
  flexBasis: function flexBasis(value) {
    return {
      WebkitFlexBasis: value,
      flexBasis: value
    };
  },
  justifyContent: function justifyContent(value) {
    return {
      WebkitJustifyContent: value,
      justifyContent: value
    };
  },
  transition: function transition(value) {
    return {
      msTransition: value,
      MozTransition: value,
      OTransition: value,
      WebkitTransition: value,
      transition: value
    };
  },
  transform: function transform(value) {
    return {
      msTransform: value,
      MozTransform: value,
      OTransform: value,
      WebkitTransform: value,
      transform: value
    };
  },
  absolute: function absolute(value) {
    var direction = value && value.split(' ');
    return {
      position: 'absolute',
      top: direction && direction[0],
      right: direction && direction[1],
      bottom: direction && direction[2],
      left: direction && direction[3]
    };
  },
  extend: function extend(name, otherElementStyles) {
    var otherStyle = otherElementStyles[name];
    if (otherStyle) {
      return otherStyle;
    }
    return {
      'extend': name
    };
  }
};
var autoprefix = autoprefix$1.autoprefix = function autoprefix(elements) {
  var prefixed = {};
  (0, _forOwn3["default"])(elements, function (styles, element) {
    var expanded = {};
    (0, _forOwn3["default"])(styles, function (value, key) {
      var transform = transforms[key];
      if (transform) {
        expanded = _extends$d({}, expanded, transform(value));
      } else {
        expanded[key] = value;
      }
    });
    prefixed[element] = expanded;
  });
  return prefixed;
};
autoprefix$1["default"] = autoprefix;

var hover$1 = {};

Object.defineProperty(hover$1, "__esModule", {
  value: true
});
hover$1.hover = undefined;
var _extends$c = Object.assign || function (target) {
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
var _react$3 = React;
var _react2$3 = _interopRequireDefault$4(_react$3);
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _classCallCheck$9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$9(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof$1(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits$9(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof$1(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var hover = hover$1.hover = function hover(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';
  return function (_React$Component) {
    _inherits$9(Hover, _React$Component);
    function Hover() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck$9(this, Hover);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn$9(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        hover: false
      }, _this.handleMouseOver = function () {
        return _this.setState({
          hover: true
        });
      }, _this.handleMouseOut = function () {
        return _this.setState({
          hover: false
        });
      }, _this.render = function () {
        return _react2$3["default"].createElement(Span, {
          onMouseOver: _this.handleMouseOver,
          onMouseOut: _this.handleMouseOut
        }, _react2$3["default"].createElement(Component, _extends$c({}, _this.props, _this.state)));
      }, _temp), _possibleConstructorReturn$9(_this, _ret);
    }
    return Hover;
  }(_react2$3["default"].Component);
};
hover$1["default"] = hover;

var active$1 = {};

Object.defineProperty(active$1, "__esModule", {
  value: true
});
active$1.active = undefined;
var _extends$b = Object.assign || function (target) {
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
var _react$2 = React;
var _react2$2 = _interopRequireDefault$3(_react$2);
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _classCallCheck$8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$8(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof$1(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits$8(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof$1(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var active = active$1.active = function active(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';
  return function (_React$Component) {
    _inherits$8(Active, _React$Component);
    function Active() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck$8(this, Active);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn$8(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        active: false
      }, _this.handleMouseDown = function () {
        return _this.setState({
          active: true
        });
      }, _this.handleMouseUp = function () {
        return _this.setState({
          active: false
        });
      }, _this.render = function () {
        return _react2$2["default"].createElement(Span, {
          onMouseDown: _this.handleMouseDown,
          onMouseUp: _this.handleMouseUp
        }, _react2$2["default"].createElement(Component, _extends$b({}, _this.props, _this.state)));
      }, _temp), _possibleConstructorReturn$8(_this, _ret);
    }
    return Active;
  }(_react2$2["default"].Component);
};
active$1["default"] = active;

var loop = {};

Object.defineProperty(loop, "__esModule", {
  value: true
});
var loopable = function loopable(i, length) {
  var props = {};
  var setProp = function setProp(name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    props[name] = value;
  };
  i === 0 && setProp('first-child');
  i === length - 1 && setProp('last-child');
  (i === 0 || i % 2 === 0) && setProp('even');
  Math.abs(i % 2) === 1 && setProp('odd');
  setProp('nth-child', i);
  return props;
};
loop["default"] = loopable;

Object.defineProperty(lib, "__esModule", {
  value: true
});
lib.ReactCSS = lib.loop = lib.handleActive = handleHover = lib.handleHover = lib.hover = undefined;
var _flattenNames = flattenNames$1;
var _flattenNames2 = _interopRequireDefault$2(_flattenNames);
var _mergeClasses = mergeClasses$1;
var _mergeClasses2 = _interopRequireDefault$2(_mergeClasses);
var _autoprefix = autoprefix$1;
var _autoprefix2 = _interopRequireDefault$2(_autoprefix);
var _hover2 = hover$1;
var _hover3 = _interopRequireDefault$2(_hover2);
var _active = active$1;
var _active2 = _interopRequireDefault$2(_active);
var _loop2 = loop;
var _loop3 = _interopRequireDefault$2(_loop2);
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
lib.hover = _hover3["default"];
var handleHover = lib.handleHover = _hover3["default"];
lib.handleActive = _active2["default"];
lib.loop = _loop3["default"];
var ReactCSS = lib.ReactCSS = function ReactCSS(classes) {
  for (var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    activations[_key - 1] = arguments[_key];
  }
  var activeNames = (0, _flattenNames2["default"])(activations);
  var merged = (0, _mergeClasses2["default"])(classes, activeNames);
  return (0, _autoprefix2["default"])(merged);
};
var _default$2 = lib["default"] = ReactCSS;

var calculateChange$2 = function calculateChange(e, hsl, direction, initialA, container) {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);
  if (direction === 'vertical') {
    var a = void 0;
    if (top < 0) {
      a = 0;
    } else if (top > containerHeight) {
      a = 1;
    } else {
      a = Math.round(top * 100 / containerHeight) / 100;
    }
    if (hsl.a !== a) {
      return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: a,
        source: 'rgb'
      };
    }
  } else {
    var _a = void 0;
    if (left < 0) {
      _a = 0;
    } else if (left > containerWidth) {
      _a = 1;
    } else {
      _a = Math.round(left * 100 / containerWidth) / 100;
    }
    if (initialA !== _a) {
      return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: _a,
        source: 'rgb'
      };
    }
  }
  return null;
};

var checkboardCache = {};
var render = function render(c1, c2, size, serverCanvas) {
  if (typeof document === 'undefined' && !serverCanvas) {
    return null;
  }
  var canvas = serverCanvas ? new serverCanvas() : document.createElement('canvas');
  canvas.width = size * 2;
  canvas.height = size * 2;
  var ctx = canvas.getContext('2d');
  if (!ctx) {
    return null;
  } // If no context can be found, return early.
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
};
var get$1 = function get(c1, c2, size, serverCanvas) {
  var key = c1 + '-' + c2 + '-' + size + (serverCanvas ? '-server' : '');
  if (checkboardCache[key]) {
    return checkboardCache[key];
  }
  var checkboard = render(c1, c2, size, serverCanvas);
  checkboardCache[key] = checkboard;
  return checkboard;
};

var _extends$a = Object.assign || function (target) {
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
var Checkboard = function Checkboard(_ref) {
  var white = _ref.white,
    grey = _ref.grey,
    size = _ref.size,
    renderers = _ref.renderers,
    borderRadius = _ref.borderRadius,
    boxShadow = _ref.boxShadow,
    children = _ref.children;
  var styles = _default$2({
    'default': {
      grid: {
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        absolute: '0px 0px 0px 0px',
        background: 'url(' + get$1(white, grey, size, renderers.canvas) + ') center left'
      }
    }
  });
  return /*#__PURE__*/isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, _extends$a({}, children.props, {
    style: _extends$a({}, children.props.style, styles.grid)
  })) : /*#__PURE__*/React.createElement('div', {
    style: styles.grid
  });
};
Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)',
  renderers: {}
};

var _extends$9 = Object.assign || function (target) {
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
var _createClass$7 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$7(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof$1(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits$7(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof$1(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Alpha = function (_ref) {
  _inherits$7(Alpha, _ref);
  function Alpha() {
    var _ref2;
    var _temp, _this, _ret;
    _classCallCheck$7(this, Alpha);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn$7(this, (_ref2 = Alpha.__proto__ || Object.getPrototypeOf(Alpha)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e) {
      var change = calculateChange$2(e, _this.props.hsl, _this.props.direction, _this.props.a, _this.container);
      change && typeof _this.props.onChange === 'function' && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleChange);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    }, _temp), _possibleConstructorReturn$7(_this, _ret);
  }
  _createClass$7(Alpha, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;
      var rgb = this.props.rgb;
      var styles = _default$2({
        'default': {
          alpha: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          checkboard: {
            absolute: '0px 0px 0px 0px',
            overflow: 'hidden',
            borderRadius: this.props.radius
          },
          gradient: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: 'relative',
            height: '100%',
            margin: '0 3px'
          },
          pointer: {
            position: 'absolute',
            left: rgb.a * 100 + '%'
          },
          slider: {
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            marginTop: '1px',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          gradient: {
            background: 'linear-gradient(to bottom, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)'
          },
          pointer: {
            left: 0,
            top: rgb.a * 100 + '%'
          }
        },
        'overwrite': _extends$9({}, this.props.style)
      }, {
        vertical: this.props.direction === 'vertical',
        overwrite: true
      });
      return /*#__PURE__*/React.createElement('div', {
        style: styles.alpha
      }, /*#__PURE__*/React.createElement('div', {
        style: styles.checkboard
      }, /*#__PURE__*/React.createElement(Checkboard, {
        renderers: this.props.renderers
      })), /*#__PURE__*/React.createElement('div', {
        style: styles.gradient
      }), /*#__PURE__*/React.createElement('div', {
        style: styles.container,
        ref: function ref(container) {
          return _this2.container = container;
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange
      }, /*#__PURE__*/React.createElement('div', {
        style: styles.pointer
      }, this.props.pointer ? /*#__PURE__*/React.createElement(this.props.pointer, this.props) : /*#__PURE__*/React.createElement('div', {
        style: styles.slider
      }))));
    }
  }]);
  return Alpha;
}(PureComponent || Component);

var _createClass$6 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
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
function _classCallCheck$6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$6(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof$1(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits$6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof$1(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var DEFAULT_ARROW_OFFSET = 1;
var UP_KEY_CODE = 38;
var DOWN_KEY_CODE = 40;
var VALID_KEY_CODES = [UP_KEY_CODE, DOWN_KEY_CODE];
var isValidKeyCode = function isValidKeyCode(keyCode) {
  return VALID_KEY_CODES.indexOf(keyCode) > -1;
};
var getNumberValue = function getNumberValue(value) {
  return Number(String(value).replace(/%/g, ''));
};
var idCounter = 1;
var EditableInput = function (_ref) {
  _inherits$6(EditableInput, _ref);
  function EditableInput(props) {
    _classCallCheck$6(this, EditableInput);
    var _this = _possibleConstructorReturn$6(this, (EditableInput.__proto__ || Object.getPrototypeOf(EditableInput)).call(this));
    _this.handleBlur = function () {
      if (_this.state.blurValue) {
        _this.setState({
          value: _this.state.blurValue,
          blurValue: null
        });
      }
    };
    _this.handleChange = function (e) {
      _this.setUpdatedValue(e.target.value, e);
    };
    _this.handleKeyDown = function (e) {
      // In case `e.target.value` is a percentage remove the `%` character
      // and update accordingly with a percentage
      // https://github.com/casesandberg/react-color/issues/383
      var value = getNumberValue(e.target.value);
      if (!isNaN(value) && isValidKeyCode(e.keyCode)) {
        var offset = _this.getArrowOffset();
        var updatedValue = e.keyCode === UP_KEY_CODE ? value + offset : value - offset;
        _this.setUpdatedValue(updatedValue, e);
      }
    };
    _this.handleDrag = function (e) {
      if (_this.props.dragLabel) {
        var newValue = Math.round(_this.props.value + e.movementX);
        if (newValue >= 0 && newValue <= _this.props.dragMax) {
          _this.props.onChange && _this.props.onChange(_this.getValueObjectWithLabel(newValue), e);
        }
      }
    };
    _this.handleMouseDown = function (e) {
      if (_this.props.dragLabel) {
        e.preventDefault();
        _this.handleDrag(e);
        window.addEventListener('mousemove', _this.handleDrag);
        window.addEventListener('mouseup', _this.handleMouseUp);
      }
    };
    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };
    _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleDrag);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    };
    _this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase()
    };
    _this.inputId = 'rc-editable-input-' + idCounter++;
    return _this;
  }
  _createClass$6(EditableInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.value !== this.state.value && (prevProps.value !== this.props.value || prevState.value !== this.state.value)) {
        if (this.input === document.activeElement) {
          this.setState({
            blurValue: String(this.props.value).toUpperCase()
          });
        } else {
          this.setState({
            value: String(this.props.value).toUpperCase(),
            blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
          });
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'getValueObjectWithLabel',
    value: function getValueObjectWithLabel(value) {
      return _defineProperty({}, this.props.label, value);
    }
  }, {
    key: 'getArrowOffset',
    value: function getArrowOffset() {
      return this.props.arrowOffset || DEFAULT_ARROW_OFFSET;
    }
  }, {
    key: 'setUpdatedValue',
    value: function setUpdatedValue(value, e) {
      var onChangeValue = this.props.label ? this.getValueObjectWithLabel(value) : value;
      this.props.onChange && this.props.onChange(onChangeValue, e);
      this.setState({
        value: value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;
      var styles = _default$2({
        'default': {
          wrap: {
            position: 'relative'
          }
        },
        'user-override': {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        'dragLabel-true': {
          label: {
            cursor: 'ew-resize'
          }
        }
      }, {
        'user-override': true
      }, this.props);
      return /*#__PURE__*/React.createElement('div', {
        style: styles.wrap
      }, /*#__PURE__*/React.createElement('input', {
        id: this.inputId,
        style: styles.input,
        ref: function ref(input) {
          return _this2.input = input;
        },
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        placeholder: this.props.placeholder,
        spellCheck: 'false'
      }), this.props.label && !this.props.hideLabel ? /*#__PURE__*/React.createElement('label', {
        htmlFor: this.inputId,
        style: styles.label,
        onMouseDown: this.handleMouseDown
      }, this.props.label) : null);
    }
  }]);
  return EditableInput;
}(PureComponent || Component);

var calculateChange$1 = function calculateChange(e, direction, hsl, container) {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);
  if (direction === 'vertical') {
    var h = void 0;
    if (top < 0) {
      h = 359;
    } else if (top > containerHeight) {
      h = 0;
    } else {
      var percent = -(top * 100 / containerHeight) + 100;
      h = 360 * percent / 100;
    }
    if (hsl.h !== h) {
      return {
        h: h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: 'hsl'
      };
    }
  } else {
    var _h = void 0;
    if (left < 0) {
      _h = 0;
    } else if (left > containerWidth) {
      _h = 359;
    } else {
      var _percent = left * 100 / containerWidth;
      _h = 360 * _percent / 100;
    }
    if (hsl.h !== _h) {
      return {
        h: _h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: 'hsl'
      };
    }
  }
  return null;
};

var _createClass$5 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$5(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof$1(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits$5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof$1(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Hue = function (_ref) {
  _inherits$5(Hue, _ref);
  function Hue() {
    var _ref2;
    var _temp, _this, _ret;
    _classCallCheck$5(this, Hue);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn$5(this, (_ref2 = Hue.__proto__ || Object.getPrototypeOf(Hue)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e) {
      var change = calculateChange$1(e, _this.props.direction, _this.props.hsl, _this.container);
      change && typeof _this.props.onChange === 'function' && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _temp), _possibleConstructorReturn$5(_this, _ret);
  }
  _createClass$5(Hue, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;
      var _props$direction = this.props.direction,
        direction = _props$direction === undefined ? 'horizontal' : _props$direction;
      var styles = _default$2({
        'default': {
          hue: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            padding: '0 2px',
            position: 'relative',
            height: '100%',
            borderRadius: this.props.radius
          },
          pointer: {
            position: 'absolute',
            left: this.props.hsl.h * 100 / 360 + '%'
          },
          slider: {
            marginTop: '1px',
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          pointer: {
            left: '0px',
            top: -(this.props.hsl.h * 100 / 360) + 100 + '%'
          }
        }
      }, {
        vertical: direction === 'vertical'
      });
      return /*#__PURE__*/React.createElement('div', {
        style: styles.hue
      }, /*#__PURE__*/React.createElement('div', {
        className: 'hue-' + direction,
        style: styles.container,
        ref: function ref(container) {
          return _this2.container = container;
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange
      }, /*#__PURE__*/React.createElement('style', null, '\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          '), /*#__PURE__*/React.createElement('div', {
        style: styles.pointer
      }, this.props.pointer ? /*#__PURE__*/React.createElement(this.props.pointer, this.props) : /*#__PURE__*/React.createElement('div', {
        style: styles.slider
      }))));
    }
  }]);
  return Hue;
}(PureComponent || Component);

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = "function" === typeof Symbol && Symbol["for"],
    c = b ? Symbol["for"]("react.element") : 60103,
    d = b ? Symbol["for"]("react.portal") : 60106,
    e = b ? Symbol["for"]("react.fragment") : 60107,
    f = b ? Symbol["for"]("react.strict_mode") : 60108,
    g = b ? Symbol["for"]("react.profiler") : 60114,
    h = b ? Symbol["for"]("react.provider") : 60109,
    k = b ? Symbol["for"]("react.context") : 60110,
    l = b ? Symbol["for"]("react.async_mode") : 60111,
    m = b ? Symbol["for"]("react.concurrent_mode") : 60111,
    n = b ? Symbol["for"]("react.forward_ref") : 60112,
    p = b ? Symbol["for"]("react.suspense") : 60113,
    q = b ? Symbol["for"]("react.suspense_list") : 60120,
    r = b ? Symbol["for"]("react.memo") : 60115,
    t = b ? Symbol["for"]("react.lazy") : 60116,
    v = b ? Symbol["for"]("react.block") : 60121,
    w = b ? Symbol["for"]("react.fundamental") : 60117,
    x = b ? Symbol["for"]("react.responder") : 60118,
    y = b ? Symbol["for"]("react.scope") : 60119;
  function z(a) {
    if ("object" === _typeof$1(a) && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;
  reactIs_production_min.isAsyncMode = function (a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function (a) {
    return z(a) === k;
  };
  reactIs_production_min.isContextProvider = function (a) {
    return z(a) === h;
  };
  reactIs_production_min.isElement = function (a) {
    return "object" === _typeof$1(a) && null !== a && a.$$typeof === c;
  };
  reactIs_production_min.isForwardRef = function (a) {
    return z(a) === n;
  };
  reactIs_production_min.isFragment = function (a) {
    return z(a) === e;
  };
  reactIs_production_min.isLazy = function (a) {
    return z(a) === t;
  };
  reactIs_production_min.isMemo = function (a) {
    return z(a) === r;
  };
  reactIs_production_min.isPortal = function (a) {
    return z(a) === d;
  };
  reactIs_production_min.isProfiler = function (a) {
    return z(a) === g;
  };
  reactIs_production_min.isStrictMode = function (a) {
    return z(a) === f;
  };
  reactIs_production_min.isSuspense = function (a) {
    return z(a) === p;
  };
  reactIs_production_min.isValidElementType = function (a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof$1(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };
  reactIs_production_min.typeOf = z;
  return reactIs_production_min;
}

var reactIs_development = {};

var hasRequiredReactIs_development;
function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development;
  hasRequiredReactIs_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function () {

      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;
      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' ||
        // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof$1(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (_typeof$1(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return _typeof$1(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}

var hasRequiredReactIs;
function requireReactIs() {
  if (hasRequiredReactIs) return reactIs.exports;
  hasRequiredReactIs = 1;
  if (process.env.NODE_ENV === 'production') {
    reactIs.exports = requireReactIs_production_min();
  } else {
    reactIs.exports = requireReactIs_development();
  }
  return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var objectAssign;
var hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign;
  hasRequiredObjectAssign = 1;
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }
      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }
  objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;
function requireHas() {
  if (hasRequiredHas) return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}

var checkPropTypes_1;
var hasRequiredCheckPropTypes;
function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;
  var printWarning = function printWarning() {};
  if (process.env.NODE_ENV !== 'production') {
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has = requireHas();
    printWarning = function printWarning(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {/**/}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== 'production') {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof$1(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof$1(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function () {
    if (process.env.NODE_ENV !== 'production') {
      loggedTypeFailures = {};
    }
  };
  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;
function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;
  var ReactIs = requireReactIs();
  var assign = requireObjectAssign();
  var ReactPropTypesSecret = requireReactPropTypesSecret();
  var has = requireHas();
  var checkPropTypes = requireCheckPropTypes();
  var printWarning = function printWarning() {};
  if (process.env.NODE_ENV !== 'production') {
    printWarning = function printWarning(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  function emptyFunctionThatReturnsNull() {
    return null;
  }
  factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bigint: createPrimitiveTypeChecker('bigint'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && _typeof$1(data) === 'object' ? data : {};
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== 'production') {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
            err.name = 'Invariant Violation';
            throw err;
          } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (!manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
            expectedType: expectedType
          });
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== 'production') {
          if (arguments.length > 1) {
            printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
          } else {
            printWarning('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }
        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
        return emptyFunctionThatReturnsNull;
      }
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
          return emptyFunctionThatReturnsNull;
        }
      }
      function validate(props, propName, componentName, location, propFullName) {
        var expectedTypes = [];
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
      }
      return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
      return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== 'function') {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from props.
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has(shapeTypes, key) && typeof checker !== 'function') {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          if (!checker) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
      switch (_typeof$1(propValue)) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }
          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }
          return true;
        default:
          return false;
      }
    }
    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }
      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = _typeof$1(propValue);
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = requireReactPropTypesSecret();
  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function factoryWithThrowingShims() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}
var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
    result = data['delete'](key);
  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof$1(global)) == 'object' && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof$1(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal$1 || freeSelf || Function('return this')();
var root$1 = root;

/** Built-in value references. */
var _Symbol = root$1.Symbol;
var _Symbol$1 = _Symbol;

/** Used for built-in method references. */
var objectProto$e = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$b = objectProto$e.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$e.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol$1 ? _Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$b.call(value, symToStringTag$1),
    tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$d = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$d.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol$1 ? _Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof$1(value);
  return value != null && (type == 'object' || type == 'function');
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag$1 = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root$1['__core-js_shared__'];
var coreJsData$1 = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/** Used for built-in method references. */
var funcProto$2 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
  objectProto$c = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$c.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$a).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root$1, 'Map');
var Map$2 = Map$1;

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');
var nativeCreate$1 = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$9.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== undefined : hasOwnProperty$8.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map$2 || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = _typeof$1(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
    size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();
var defineProperty$1 = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty$1) {
    defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
      iterable = Object(object),
      props = keysFunc(object),
      length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();
var baseFor$1 = baseFor;

/** Detect free variable `exports`. */
var freeExports$2 = (typeof exports === "undefined" ? "undefined" : _typeof$1(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$2 = freeExports$2 && (typeof module === "undefined" ? "undefined" : _typeof$1(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

/** Built-in value references. */
var Buffer$1 = moduleExports$2 ? root$1.Buffer : undefined,
  allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
    result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

/** Built-in value references. */
var Uint8Array = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
    length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
var baseCreate$1 = baseCreate;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$9;
  return value === proto;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof$1(value) == 'object';
}

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$8.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty$7.call(value, 'callee') && !propertyIsEnumerable$1.call(value, 'callee');
};
var isArguments$1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
var isArray$1 = isArray;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports$1 = (typeof exports === "undefined" ? "undefined" : _typeof$1(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && (typeof module === "undefined" ? "undefined" : _typeof$1(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Built-in value references. */
var Buffer = moduleExports$1 ? root$1.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;

/** `Object#toString` result references. */
var objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto$7 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$6.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
  arrayTag$1 = '[object Array]',
  boolTag$1 = '[object Boolean]',
  dateTag$1 = '[object Date]',
  errorTag$1 = '[object Error]',
  funcTag = '[object Function]',
  mapTag$2 = '[object Map]',
  numberTag$1 = '[object Number]',
  objectTag$2 = '[object Object]',
  regexpTag$1 = '[object RegExp]',
  setTag$2 = '[object Set]',
  stringTag$1 = '[object String]',
  weakMapTag$1 = '[object WeakMap]';
var arrayBufferTag$1 = '[object ArrayBuffer]',
  dataViewTag$2 = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports = (typeof exports === "undefined" ? "undefined" : _typeof$1(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && (typeof module === "undefined" ? "undefined" : _typeof$1(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal$1.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;
    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
var nodeUtil$1 = nodeUtil;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }
  if (key == '__proto__') {
    return;
  }
  return object[key];
}

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
    length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
    result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = _typeof$1(value);
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value),
    isArg = !isArr && isArguments$1(value),
    isBuff = !isArr && !isArg && isBuffer$1(value),
    isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? baseTimes(value.length, String) : [],
    length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
    result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$3.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
    srcValue = safeGet(source, key),
    stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;
  if (isCommon) {
    var isArr = isArray$1(srcValue),
      isBuff = !isArr && isBuffer$1(srcValue),
      isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$1(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments$1(srcValue)) {
      newValue = objValue;
      if (isArguments$1(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor$1(source, function (srcValue, key) {
    stack || (stack = new Stack());
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;
      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax$1(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
      index = -1,
      length = nativeMax$1(args.length - start, 0),
      array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty$1 ? identity : function (func, string) {
  return defineProperty$1(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
var baseSetToString$1 = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
  HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
    lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
      remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString$1);
var setToString$1 = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString$1(overRest(func, start, identity), func + '');
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = _typeof$1(index);
  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
      length = sources.length,
      customizer = length > 1 ? sources[length - 1] : undefined,
      guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
var merge$1 = merge;

var Raised = function Raised(_ref) {
  var zDepth = _ref.zDepth,
    radius = _ref.radius,
    background = _ref.background,
    children = _ref.children,
    _ref$styles = _ref.styles,
    passedStyles = _ref$styles === undefined ? {} : _ref$styles;
  var styles = _default$2(merge$1({
    'default': {
      wrap: {
        position: 'relative',
        display: 'inline-block'
      },
      content: {
        position: 'relative'
      },
      bg: {
        absolute: '0px 0px 0px 0px',
        boxShadow: '0 ' + zDepth + 'px ' + zDepth * 4 + 'px rgba(0,0,0,.24)',
        borderRadius: radius,
        background: background
      }
    },
    'zDepth-0': {
      bg: {
        boxShadow: 'none'
      }
    },
    'zDepth-1': {
      bg: {
        boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)'
      }
    },
    'zDepth-2': {
      bg: {
        boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)'
      }
    },
    'zDepth-3': {
      bg: {
        boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)'
      }
    },
    'zDepth-4': {
      bg: {
        boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)'
      }
    },
    'zDepth-5': {
      bg: {
        boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)'
      }
    },
    'square': {
      bg: {
        borderRadius: '0'
      }
    },
    'circle': {
      bg: {
        borderRadius: '50%'
      }
    }
  }, passedStyles), {
    'zDepth-1': zDepth === 1
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.wrap
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.bg
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.content
  }, children));
};
Raised.propTypes = {
  background: PropTypes.string,
  zDepth: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  radius: PropTypes.number,
  styles: PropTypes.object
};
Raised.defaultProps = {
  background: '#fff',
  zDepth: 1,
  radius: 2,
  styles: {}
};

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return root$1.Date.now();
};
var now$1 = now;

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return _typeof$1(value) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag$1;
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

/** Error message constants. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
  nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime,
    lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs,
      thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime,
      timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  function flush() {
    return timerId === undefined ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(),
      isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var calculateChange = function calculateChange(e, hsl, container) {
  var _container$getBoundin = container.getBoundingClientRect(),
    containerWidth = _container$getBoundin.width,
    containerHeight = _container$getBoundin.height;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);
  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  }
  if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }
  var saturation = left / containerWidth;
  var bright = 1 - top / containerHeight;
  return {
    h: hsl.h,
    s: saturation,
    v: bright,
    a: hsl.a,
    source: 'hsv'
  };
};

var _createClass$4 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$4(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof$1(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits$4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof$1(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Saturation = function (_ref) {
  _inherits$4(Saturation, _ref);
  function Saturation(props) {
    _classCallCheck$4(this, Saturation);
    var _this = _possibleConstructorReturn$4(this, (Saturation.__proto__ || Object.getPrototypeOf(Saturation)).call(this, props));
    _this.handleChange = function (e) {
      typeof _this.props.onChange === 'function' && _this.throttle(_this.props.onChange, calculateChange(e, _this.props.hsl, _this.container), e);
    };
    _this.handleMouseDown = function (e) {
      _this.handleChange(e);
      var renderWindow = _this.getContainerRenderWindow();
      renderWindow.addEventListener('mousemove', _this.handleChange);
      renderWindow.addEventListener('mouseup', _this.handleMouseUp);
    };
    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };
    _this.throttle = throttle(function (fn, data, e) {
      fn(data, e);
    }, 50);
    return _this;
  }
  _createClass$4(Saturation, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.throttle.cancel();
      this.unbindEventListeners();
    }
  }, {
    key: 'getContainerRenderWindow',
    value: function getContainerRenderWindow() {
      var container = this.container;
      var renderWindow = window;
      while (!renderWindow.document.contains(container) && renderWindow.parent !== renderWindow) {
        renderWindow = renderWindow.parent;
      }
      return renderWindow;
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      var renderWindow = this.getContainerRenderWindow();
      renderWindow.removeEventListener('mousemove', this.handleChange);
      renderWindow.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;
      var _ref2 = this.props.style || {},
        color = _ref2.color,
        white = _ref2.white,
        black = _ref2.black,
        pointer = _ref2.pointer,
        circle = _ref2.circle;
      var styles = _default$2({
        'default': {
          color: {
            absolute: '0px 0px 0px 0px',
            background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
            borderRadius: this.props.radius
          },
          white: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          black: {
            absolute: '0px 0px 0px 0px',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          pointer: {
            position: 'absolute',
            top: -(this.props.hsv.v * 100) + 100 + '%',
            left: this.props.hsv.s * 100 + '%',
            cursor: 'default'
          },
          circle: {
            width: '4px',
            height: '4px',
            boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
            borderRadius: '50%',
            cursor: 'hand',
            transform: 'translate(-2px, -2px)'
          }
        },
        'custom': {
          color: color,
          white: white,
          black: black,
          pointer: pointer,
          circle: circle
        }
      }, {
        'custom': !!this.props.style
      });
      return /*#__PURE__*/React.createElement('div', {
        style: styles.color,
        ref: function ref(container) {
          return _this2.container = container;
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange
      }, /*#__PURE__*/React.createElement('style', null, '\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        '), /*#__PURE__*/React.createElement('div', {
        style: styles.white,
        className: 'saturation-white'
      }, /*#__PURE__*/React.createElement('div', {
        style: styles.black,
        className: 'saturation-black'
      }), /*#__PURE__*/React.createElement('div', {
        style: styles.pointer
      }, this.props.pointer ? /*#__PURE__*/React.createElement(this.props.pointer, this.props) : /*#__PURE__*/React.createElement('div', {
        style: styles.circle
      }))));
    }
  }]);
  return Saturation;
}(PureComponent || Component);

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor$1(object, iteratee, keys);
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
      index = fromRight ? length : -1,
      iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);
var baseEach$1 = baseEach;

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray$1(collection) ? arrayEach : baseEach$1;
  return func(collection, castFunction(iteratee));
}

// This file is autogenerated. It's used to publish ESM to npm.
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

var trimLeft = /^\s+/;
var trimRight = /\s+$/;
function tinycolor(color, opts) {
  color = color ? color : "";
  opts = opts || {};

  // If input is already a tinycolor, return itself
  if (color instanceof tinycolor) {
    return color;
  }
  // If we are called as a function, call using new instead
  if (!(this instanceof tinycolor)) {
    return new tinycolor(color, opts);
  }
  var rgb = inputToRGB(color);
  this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
  this._gradientType = opts.gradientType;

  // Don't let the range of [0,255] come back in [0,1].
  // Potentially lose a little bit of precision here, but will fix issues where
  // .5 gets interpreted as half of the total, instead of half of 1
  // If it was supposed to be 128, this was already taken care of by `inputToRgb`
  if (this._r < 1) this._r = Math.round(this._r);
  if (this._g < 1) this._g = Math.round(this._g);
  if (this._b < 1) this._b = Math.round(this._b);
  this._ok = rgb.ok;
}
tinycolor.prototype = {
  isDark: function isDark() {
    return this.getBrightness() < 128;
  },
  isLight: function isLight() {
    return !this.isDark();
  },
  isValid: function isValid() {
    return this._ok;
  },
  getOriginalInput: function getOriginalInput() {
    return this._originalInput;
  },
  getFormat: function getFormat() {
    return this._format;
  },
  getAlpha: function getAlpha() {
    return this._a;
  },
  getBrightness: function getBrightness() {
    //http://www.w3.org/TR/AERT#color-contrast
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  },
  getLuminance: function getLuminance() {
    //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    var rgb = this.toRgb();
    var RsRGB, GsRGB, BsRGB, R, G, B;
    RsRGB = rgb.r / 255;
    GsRGB = rgb.g / 255;
    BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) R = RsRGB / 12.92;else R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    if (GsRGB <= 0.03928) G = GsRGB / 12.92;else G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    if (BsRGB <= 0.03928) B = BsRGB / 12.92;else B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  },
  setAlpha: function setAlpha(value) {
    this._a = boundAlpha(value);
    this._roundA = Math.round(100 * this._a) / 100;
    return this;
  },
  toHsv: function toHsv() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this._a
    };
  },
  toHsvString: function toHsvString() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    var h = Math.round(hsv.h * 360),
      s = Math.round(hsv.s * 100),
      v = Math.round(hsv.v * 100);
    return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
  },
  toHsl: function toHsl() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this._a
    };
  },
  toHslString: function toHslString() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    var h = Math.round(hsl.h * 360),
      s = Math.round(hsl.s * 100),
      l = Math.round(hsl.l * 100);
    return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
  },
  toHex: function toHex(allow3Char) {
    return rgbToHex(this._r, this._g, this._b, allow3Char);
  },
  toHexString: function toHexString(allow3Char) {
    return "#" + this.toHex(allow3Char);
  },
  toHex8: function toHex8(allow4Char) {
    return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
  },
  toHex8String: function toHex8String(allow4Char) {
    return "#" + this.toHex8(allow4Char);
  },
  toRgb: function toRgb() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function toRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function toPercentageRgb() {
    return {
      r: Math.round(bound01(this._r, 255) * 100) + "%",
      g: Math.round(bound01(this._g, 255) * 100) + "%",
      b: Math.round(bound01(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function toPercentageRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function toName() {
    if (this._a === 0) {
      return "transparent";
    }
    if (this._a < 1) {
      return false;
    }
    return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
  },
  toFilter: function toFilter(secondColor) {
    var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
    var secondHex8String = hex8String;
    var gradientType = this._gradientType ? "GradientType = 1, " : "";
    if (secondColor) {
      var s = tinycolor(secondColor);
      secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
  },
  toString: function toString(format) {
    var formatSet = !!format;
    format = format || this._format;
    var formattedString = false;
    var hasAlpha = this._a < 1 && this._a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
    if (needsAlphaFormat) {
      // Special case for "transparent", all other non-alpha formats
      // will return rgba when there is transparency.
      if (format === "name" && this._a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  },
  clone: function clone() {
    return tinycolor(this.toString());
  },
  _applyModification: function _applyModification(fn, args) {
    var color = fn.apply(null, [this].concat([].slice.call(args)));
    this._r = color._r;
    this._g = color._g;
    this._b = color._b;
    this.setAlpha(color._a);
    return this;
  },
  lighten: function lighten() {
    return this._applyModification(_lighten, arguments);
  },
  brighten: function brighten() {
    return this._applyModification(_brighten, arguments);
  },
  darken: function darken() {
    return this._applyModification(_darken, arguments);
  },
  desaturate: function desaturate() {
    return this._applyModification(_desaturate, arguments);
  },
  saturate: function saturate() {
    return this._applyModification(_saturate, arguments);
  },
  greyscale: function greyscale() {
    return this._applyModification(_greyscale, arguments);
  },
  spin: function spin() {
    return this._applyModification(_spin, arguments);
  },
  _applyCombination: function _applyCombination(fn, args) {
    return fn.apply(null, [this].concat([].slice.call(args)));
  },
  analogous: function analogous() {
    return this._applyCombination(_analogous, arguments);
  },
  complement: function complement() {
    return this._applyCombination(_complement, arguments);
  },
  monochromatic: function monochromatic() {
    return this._applyCombination(_monochromatic, arguments);
  },
  splitcomplement: function splitcomplement() {
    return this._applyCombination(_splitcomplement, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function triad() {
    return this._applyCombination(polyad, [3]);
  },
  tetrad: function tetrad() {
    return this._applyCombination(polyad, [4]);
  }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function (color, opts) {
  if (_typeof(color) == "object") {
    var newColor = {};
    for (var i in color) {
      if (color.hasOwnProperty(i)) {
        if (i === "a") {
          newColor[i] = color[i];
        } else {
          newColor[i] = convertToPercentage(color[i]);
        }
      }
    }
    color = newColor;
  }
  return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color == "string") {
    color = stringInputToObject(color);
  }
  if (_typeof(color) == "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format = "hsl";
    }
    if (color.hasOwnProperty("a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok: ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a
  };
}

// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: h,
    s: s,
    l: l
  };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
  var r, g, b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    v = max;
  var d = max - min;
  s = max === 0 ? 0 : d / max;
  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: h,
    s: s,
    v: v
  };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h),
    f = h - i,
    p = v * (1 - s),
    q = v * (1 - f * s),
    t = v * (1 - (1 - f) * s),
    mod = i % 6,
    r = [v, q, p, p, t, v][mod],
    g = [t, v, v, q, p, p][mod],
    b = [p, p, t, v, v, q][mod];
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {
  var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];

  // Return a 3 character hex if possible
  if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];

  // Return a 4 character hex if possible
  if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {
  var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
  return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
  if (!color1 || !color2) return false;
  return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function () {
  return tinycolor.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};

// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function _desaturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s -= amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _saturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s += amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _greyscale(color) {
  return tinycolor(color).desaturate(100);
}
function _lighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l += amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _brighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var rgb = tinycolor(color).toRgb();
  rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
  rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
  rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
  return tinycolor(rgb);
}
function _darken(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l -= amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function _spin(color, amount) {
  var hsl = tinycolor(color).toHsl();
  var hue = (hsl.h + amount) % 360;
  hsl.h = hue < 0 ? 360 + hue : hue;
  return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function _complement(color) {
  var hsl = tinycolor(color).toHsl();
  hsl.h = (hsl.h + 180) % 360;
  return tinycolor(hsl);
}
function polyad(color, number) {
  if (isNaN(number) || number <= 0) {
    throw new Error("Argument to polyad must be a positive number");
  }
  var hsl = tinycolor(color).toHsl();
  var result = [tinycolor(color)];
  var step = 360 / number;
  for (var i = 1; i < number; i++) {
    result.push(tinycolor({
      h: (hsl.h + i * step) % 360,
      s: hsl.s,
      l: hsl.l
    }));
  }
  return result;
}
function _splitcomplement(color) {
  var hsl = tinycolor(color).toHsl();
  var h = hsl.h;
  return [tinycolor(color), tinycolor({
    h: (h + 72) % 360,
    s: hsl.s,
    l: hsl.l
  }), tinycolor({
    h: (h + 216) % 360,
    s: hsl.s,
    l: hsl.l
  })];
}
function _analogous(color, results, slices) {
  results = results || 6;
  slices = slices || 30;
  var hsl = tinycolor(color).toHsl();
  var part = 360 / slices;
  var ret = [tinycolor(color)];
  for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
    hsl.h = (hsl.h + part) % 360;
    ret.push(tinycolor(hsl));
  }
  return ret;
}
function _monochromatic(color, results) {
  results = results || 6;
  var hsv = tinycolor(color).toHsv();
  var h = hsv.h,
    s = hsv.s,
    v = hsv.v;
  var ret = [];
  var modification = 1 / results;
  while (results--) {
    ret.push(tinycolor({
      h: h,
      s: s,
      v: v
    }));
    v = (v + modification) % 1;
  }
  return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function (color1, color2, amount) {
  amount = amount === 0 ? 0 : amount || 50;
  var rgb1 = tinycolor(color1).toRgb();
  var rgb2 = tinycolor(color2).toRgb();
  var p = amount / 100;
  var rgba = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b,
    a: (rgb2.a - rgb1.a) * p + rgb1.a
  };
  return tinycolor(rgba);
};

// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function (color1, color2) {
  var c1 = tinycolor(color1);
  var c2 = tinycolor(color2);
  return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function (color1, color2, wcag2) {
  var readability = tinycolor.readability(color1, color2);
  var wcag2Parms, out;
  out = false;
  wcag2Parms = validateWCAG2Parms(wcag2);
  switch (wcag2Parms.level + wcag2Parms.size) {
    case "AAsmall":
    case "AAAlarge":
      out = readability >= 4.5;
      break;
    case "AAlarge":
      out = readability >= 3;
      break;
    case "AAAsmall":
      out = readability >= 7;
      break;
  }
  return out;
};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function (baseColor, colorList, args) {
  var bestColor = null;
  var bestScore = 0;
  var readability;
  var includeFallbackColors, level, size;
  args = args || {};
  includeFallbackColors = args.includeFallbackColors;
  level = args.level;
  size = args.size;
  for (var i = 0; i < colorList.length; i++) {
    readability = tinycolor.readability(baseColor, colorList[i]);
    if (readability > bestScore) {
      bestScore = readability;
      bestColor = tinycolor(colorList[i]);
    }
  }
  if (tinycolor.isReadable(baseColor, bestColor, {
    level: level,
    size: size
  }) || !includeFallbackColors) {
    return bestColor;
  } else {
    args.includeFallbackColors = false;
    return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
  }
};

// Big List of Colors
// ------------------
// <https://www.w3.org/TR/css-color-4/#named-colors>
var names = tinycolor.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);

// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
  var flipped = {};
  for (var i in o) {
    if (o.hasOwnProperty(i)) {
      flipped[o[i]] = i;
    }
  }
  return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
  if (isOnePointZero(n)) n = "100%";
  var processPercent = isPercentage(n);
  n = Math.min(max, Math.max(0, parseFloat(n)));

  // Automatically convert percentage into number
  if (processPercent) {
    n = parseInt(n * max, 10) / 100;
  }

  // Handle floating point rounding errors
  if (Math.abs(n - max) < 0.000001) {
    return 1;
  }

  // Convert into [0, 1] range if it isn't already
  return n % max / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
  return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
  return c.length == 1 ? "0" + c : "" + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
  if (n <= 1) {
    n = n * 100 + "%";
  }
  return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
var matchers = function () {
  // <http://www.w3.org/TR/css3-values/#integers>
  var CSS_INTEGER = "[-\\+]?\\d+%?";

  // <http://www.w3.org/TR/css3-values/#number-value>
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

  // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
  var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

  // Actual matching.
  // Parentheses and commas are optional, but not required.
  // Whitespace can take the place of commas or opening paren
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
  return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {
  color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color == "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  }

  // Try to match string input using regular expressions.
  // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
  // Just return an object and let the conversion functions handle that.
  // This way the result will be the same whether the tinycolor is initialized with string or object.
  var match;
  if (match = matchers.rgb.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }
  if (match = matchers.rgba.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsl.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }
  if (match = matchers.hsla.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsv.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }
  if (match = matchers.hsva.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hex8.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex6.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  if (match = matchers.hex4.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      a: convertHexToDecimal(match[4] + "" + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex3.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function validateWCAG2Parms(parms) {
  // return valid WCAG2 parms for isReadable.
  // If input parms are invalid, return {"level":"AA", "size":"small"}
  var level, size;
  parms = parms || {
    level: "AA",
    size: "small"
  };
  level = (parms.level || "AA").toUpperCase();
  size = (parms.size || "small").toLowerCase();
  if (level !== "AA" && level !== "AAA") {
    level = "AA";
  }
  if (size !== "small" && size !== "large") {
    size = "small";
  }
  return {
    level: level,
    size: size
  };
}

var simpleCheckForValidColor = function simpleCheckForValidColor(data) {
  var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
  var checked = 0;
  var passed = 0;
  forEach(keysToCheck, function (letter) {
    if (data[letter]) {
      checked += 1;
      if (!isNaN(data[letter])) {
        passed += 1;
      }
      if (letter === 's' || letter === 'l') {
        var percentPatt = /^\d+%$/;
        if (percentPatt.test(data[letter])) {
          passed += 1;
        }
      }
    }
  });
  return checked === passed ? data : false;
};
var toState = function toState(data, oldHue) {
  var color = data.hex ? tinycolor(data.hex) : tinycolor(data);
  var hsl = color.toHsl();
  var hsv = color.toHsv();
  var rgb = color.toRgb();
  var hex = color.toHex();
  if (hsl.s === 0) {
    hsl.h = oldHue || 0;
    hsv.h = oldHue || 0;
  }
  var transparent = hex === '000000' && rgb.a === 0;
  return {
    hsl: hsl,
    hex: transparent ? 'transparent' : '#' + hex,
    rgb: rgb,
    hsv: hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source
  };
};
var isValidHex = function isValidHex(hex) {
  if (hex === 'transparent') {
    return true;
  }
  // disable hex4 and hex8
  var lh = String(hex).charAt(0) === '#' ? 1 : 0;
  return hex.length !== 4 + lh && hex.length < 7 + lh && tinycolor(hex).isValid();
};
var getContrastingColor = function getContrastingColor(data) {
  if (!data) {
    return '#fff';
  }
  var col = toState(data);
  if (col.hex === 'transparent') {
    return 'rgba(0,0,0,0.4)';
  }
  var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
};
var isvalidColorString = function isvalidColorString(string, type) {
  var stringWithoutDegree = string.replace('°', '');
  return tinycolor(type + ' (' + stringWithoutDegree + ')')._ok;
};

var _extends$8 = Object.assign || function (target) {
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
var _createClass$3 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$3(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof$1(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof$1(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ColorWrap = function ColorWrap(Picker) {
  var ColorPicker = function (_ref) {
    _inherits$3(ColorPicker, _ref);
    function ColorPicker(props) {
      _classCallCheck$3(this, ColorPicker);
      var _this = _possibleConstructorReturn$3(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));
      _this.handleChange = function (data, event) {
        var isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = toState(data, data.h || _this.state.oldHue);
          _this.setState(colors);
          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);
          _this.props.onChange && _this.props.onChange(colors, event);
        }
      };
      _this.handleSwatchHover = function (data, event) {
        var isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = toState(data, data.h || _this.state.oldHue);
          _this.props.onSwatchHover && _this.props.onSwatchHover(colors, event);
        }
      };
      _this.state = _extends$8({}, toState(props.color, 0));
      _this.debounce = debounce(function (fn, data, event) {
        fn(data, event);
      }, 100);
      return _this;
    }
    _createClass$3(ColorPicker, [{
      key: 'render',
      value: function render() {
        var optionalEvents = {};
        if (this.props.onSwatchHover) {
          optionalEvents.onSwatchHover = this.handleSwatchHover;
        }
        return /*#__PURE__*/React.createElement(Picker, _extends$8({}, this.props, this.state, {
          onChange: this.handleChange
        }, optionalEvents));
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, state) {
        return _extends$8({}, toState(nextProps.color, state.oldHue));
      }
    }]);
    return ColorPicker;
  }(PureComponent || Component);
  ColorPicker.propTypes = _extends$8({}, Picker.propTypes);
  ColorPicker.defaultProps = _extends$8({}, Picker.defaultProps, {
    color: {
      h: 250,
      s: 0.50,
      l: 0.20,
      a: 1
    }
  });
  return ColorPicker;
};

var _extends$7 = Object.assign || function (target) {
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
var _createClass$2 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$2(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof$1(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof$1(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var handleFocus = function handleFocus(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';
  return function (_React$Component) {
    _inherits$2(Focus, _React$Component);
    function Focus() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck$2(this, Focus);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, (_ref = Focus.__proto__ || Object.getPrototypeOf(Focus)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        focus: false
      }, _this.handleFocus = function () {
        return _this.setState({
          focus: true
        });
      }, _this.handleBlur = function () {
        return _this.setState({
          focus: false
        });
      }, _temp), _possibleConstructorReturn$2(_this, _ret);
    }
    _createClass$2(Focus, [{
      key: 'render',
      value: function render() {
        return /*#__PURE__*/React.createElement(Span, {
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }, /*#__PURE__*/React.createElement(Component, _extends$7({}, this.props, this.state)));
      }
    }]);
    return Focus;
  }(React.Component);
};

var _extends$6 = Object.assign || function (target) {
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
var ENTER = 13;
var Swatch = function Swatch(_ref) {
  var color = _ref.color,
    style = _ref.style,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
    onHover = _ref.onHover,
    _ref$title = _ref.title,
    title = _ref$title === undefined ? color : _ref$title,
    children = _ref.children,
    focus = _ref.focus,
    _ref$focusStyle = _ref.focusStyle,
    focusStyle = _ref$focusStyle === undefined ? {} : _ref$focusStyle;
  var transparent = color === 'transparent';
  var styles = _default$2({
    "default": {
      swatch: _extends$6({
        background: color,
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        position: 'relative',
        outline: 'none'
      }, style, focus ? focusStyle : {})
    }
  });
  var handleClick = function handleClick(e) {
    return onClick(color, e);
  };
  var handleKeyDown = function handleKeyDown(e) {
    return e.keyCode === ENTER && onClick(color, e);
  };
  var handleHover = function handleHover(e) {
    return onHover(color, e);
  };
  var optionalEvents = {};
  if (onHover) {
    optionalEvents.onMouseOver = handleHover;
  }
  return /*#__PURE__*/React.createElement('div', _extends$6({
    style: styles.swatch,
    onClick: handleClick,
    title: title,
    tabIndex: 0,
    onKeyDown: handleKeyDown
  }, optionalEvents), children, transparent && /*#__PURE__*/React.createElement(Checkboard, {
    borderRadius: styles.swatch.borderRadius,
    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
  }));
};
var Swatch$1 = handleFocus(Swatch);

var AlphaPointer = function AlphaPointer(_ref) {
  var direction = _ref.direction;
  var styles = _default$2({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)'
      }
    }
  }, {
    vertical: direction === 'vertical'
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.picker
  });
};

var _extends$5 = Object.assign || function (target) {
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
var AlphaPicker = function AlphaPicker(_ref) {
  var rgb = _ref.rgb,
    hsl = _ref.hsl,
    width = _ref.width,
    height = _ref.height,
    onChange = _ref.onChange,
    direction = _ref.direction,
    style = _ref.style,
    renderers = _ref.renderers,
    pointer = _ref.pointer,
    _ref$className = _ref.className,
    className = _ref$className === undefined ? '' : _ref$className;
  var styles = _default$2({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      alpha: {
        radius: '2px',
        style: style
      }
    }
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.picker,
    className: 'alpha-picker ' + className
  }, /*#__PURE__*/React.createElement(Alpha, _extends$5({}, styles.alpha, {
    rgb: rgb,
    hsl: hsl,
    pointer: pointer,
    renderers: renderers,
    onChange: onChange,
    direction: direction
  })));
};
AlphaPicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: AlphaPointer
};
ColorWrap(AlphaPicker);

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
    length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
  COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
    arrLength = array.length,
    othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
    result = true,
    seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
      othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
    result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
    result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
  COMPARE_UNORDERED_FLAG$2 = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  mapTag$1 = '[object Map]',
  numberTag = '[object Number]',
  regexpTag = '[object RegExp]',
  setTag$1 = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag$1 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol$1 ? _Symbol$1.prototype : undefined,
  symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';
    case mapTag$1:
      var convert = mapToArray;
    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var getSymbols$1 = getSymbols;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
    objProps = getAllKeys(object),
    objLength = objProps.length,
    othProps = getAllKeys(other),
    othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
      othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
      othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/* Built-in method references that are verified to be native. */
var DataView = getNative(root$1, 'DataView');
var DataView$1 = DataView;

/* Built-in method references that are verified to be native. */
var Promise$1 = getNative(root$1, 'Promise');
var Promise$2 = Promise$1;

/* Built-in method references that are verified to be native. */
var Set = getNative(root$1, 'Set');
var Set$1 = Set;

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root$1, 'WeakMap');
var WeakMap$1 = WeakMap;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
  objectTag$1 = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView$1),
  mapCtorString = toSource(Map$2),
  promiseCtorString = toSource(Promise$2),
  setCtorString = toSource(Set$1),
  weakMapCtorString = toSource(WeakMap$1);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag || Map$2 && getTag(new Map$2()) != mapTag || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
      Ctor = result == objectTag$1 ? value.constructor : undefined,
      ctorString = Ctor ? toSource(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object),
    othIsArr = isArray$1(other),
    objTag = objIsArr ? arrayTag : getTag$1(object),
    othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
    othIsObj = othTag == objectTag,
    isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
      othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
        othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
  COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
    length = index,
    noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
      objValue = object[key],
      srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
    length = result.length;
  while (length--) {
    var key = result[length],
      value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type = _typeof$1(value);
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized() {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function (string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
var stringToPath$1 = stringToPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol$1 ? _Symbol$1.prototype : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString$1(value));
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0,
    length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1,
    length = path.length,
    result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object) || isArguments$1(object));
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function (object) {
    var objValue = get(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return baseGet(object, path);
  };
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (_typeof$1(value) == 'object') {
    return isArray$1(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
    result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach$1(collection, function (value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray$1(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}

var BlockSwatches = function BlockSwatches(_ref) {
  var colors = _ref.colors,
    onClick = _ref.onClick,
    onSwatchHover = _ref.onSwatchHover;
  var styles = _default$2({
    'default': {
      swatches: {
        marginRight: '-10px'
      },
      swatch: {
        width: '22px',
        height: '22px',
        "float": 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px'
      },
      clear: {
        clear: 'both'
      }
    }
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.swatches
  }, map(colors, function (c) {
    return /*#__PURE__*/React.createElement(Swatch$1, {
      key: c,
      color: c,
      style: styles.swatch,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: {
        boxShadow: '0 0 4px ' + c
      }
    });
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.clear
  }));
};

var Block = function Block(_ref) {
  var onChange = _ref.onChange,
    onSwatchHover = _ref.onSwatchHover,
    hex = _ref.hex,
    colors = _ref.colors,
    width = _ref.width,
    triangle = _ref.triangle,
    _ref$styles = _ref.styles,
    passedStyles = _ref$styles === undefined ? {} : _ref$styles,
    _ref$className = _ref.className,
    className = _ref$className === undefined ? '' : _ref$className;
  var transparent = hex === 'transparent';
  var handleChange = function handleChange(hexCode, e) {
    isValidHex(hexCode) && onChange({
      hex: hexCode,
      source: 'hex'
    }, e);
  };
  var styles = _default$2(merge$1({
    'default': {
      card: {
        width: width,
        background: '#fff',
        boxShadow: '0 1px rgba(0,0,0,.1)',
        borderRadius: '6px',
        position: 'relative'
      },
      head: {
        height: '110px',
        background: hex,
        borderRadius: '6px 6px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      },
      body: {
        padding: '10px'
      },
      label: {
        fontSize: '18px',
        color: getContrastingColor(hex),
        position: 'relative'
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 10px 10px 10px',
        borderColor: 'transparent transparent ' + hex + ' transparent',
        position: 'absolute',
        top: '-10px',
        left: '50%',
        marginLeft: '-10px'
      },
      input: {
        width: '100%',
        fontSize: '12px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '22px',
        boxShadow: 'inset 0 0 0 1px #ddd',
        borderRadius: '4px',
        padding: '0 7px',
        boxSizing: 'border-box'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      }
    }
  }, passedStyles), {
    'hide-triangle': triangle === 'hide'
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.card,
    className: 'block-picker ' + className
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.triangle
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.head
  }, transparent && /*#__PURE__*/React.createElement(Checkboard, {
    borderRadius: '6px 6px 0 0'
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.label
  }, hex)), /*#__PURE__*/React.createElement('div', {
    style: styles.body
  }, /*#__PURE__*/React.createElement(BlockSwatches, {
    colors: colors,
    onClick: handleChange,
    onSwatchHover: onSwatchHover
  }), /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input
    },
    value: hex,
    onChange: handleChange
  })));
};
Block.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.string),
  triangle: PropTypes.oneOf(['top', 'hide']),
  styles: PropTypes.object
};
Block.defaultProps = {
  width: 170,
  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'],
  triangle: 'top',
  styles: {}
};
ColorWrap(Block);

var red = {
  "50": "#ffebee",
  "100": "#ffcdd2",
  "200": "#ef9a9a",
  "300": "#e57373",
  "400": "#ef5350",
  "500": "#f44336",
  "600": "#e53935",
  "700": "#d32f2f",
  "800": "#c62828",
  "900": "#b71c1c",
  "a100": "#ff8a80",
  "a200": "#ff5252",
  "a400": "#ff1744",
  "a700": "#d50000"
};
var pink = {
  "50": "#fce4ec",
  "100": "#f8bbd0",
  "200": "#f48fb1",
  "300": "#f06292",
  "400": "#ec407a",
  "500": "#e91e63",
  "600": "#d81b60",
  "700": "#c2185b",
  "800": "#ad1457",
  "900": "#880e4f",
  "a100": "#ff80ab",
  "a200": "#ff4081",
  "a400": "#f50057",
  "a700": "#c51162"
};
var purple = {
  "50": "#f3e5f5",
  "100": "#e1bee7",
  "200": "#ce93d8",
  "300": "#ba68c8",
  "400": "#ab47bc",
  "500": "#9c27b0",
  "600": "#8e24aa",
  "700": "#7b1fa2",
  "800": "#6a1b9a",
  "900": "#4a148c",
  "a100": "#ea80fc",
  "a200": "#e040fb",
  "a400": "#d500f9",
  "a700": "#aa00ff"
};
var deepPurple = {
  "50": "#ede7f6",
  "100": "#d1c4e9",
  "200": "#b39ddb",
  "300": "#9575cd",
  "400": "#7e57c2",
  "500": "#673ab7",
  "600": "#5e35b1",
  "700": "#512da8",
  "800": "#4527a0",
  "900": "#311b92",
  "a100": "#b388ff",
  "a200": "#7c4dff",
  "a400": "#651fff",
  "a700": "#6200ea"
};
var indigo = {
  "50": "#e8eaf6",
  "100": "#c5cae9",
  "200": "#9fa8da",
  "300": "#7986cb",
  "400": "#5c6bc0",
  "500": "#3f51b5",
  "600": "#3949ab",
  "700": "#303f9f",
  "800": "#283593",
  "900": "#1a237e",
  "a100": "#8c9eff",
  "a200": "#536dfe",
  "a400": "#3d5afe",
  "a700": "#304ffe"
};
var blue = {
  "50": "#e3f2fd",
  "100": "#bbdefb",
  "200": "#90caf9",
  "300": "#64b5f6",
  "400": "#42a5f5",
  "500": "#2196f3",
  "600": "#1e88e5",
  "700": "#1976d2",
  "800": "#1565c0",
  "900": "#0d47a1",
  "a100": "#82b1ff",
  "a200": "#448aff",
  "a400": "#2979ff",
  "a700": "#2962ff"
};
var lightBlue = {
  "50": "#e1f5fe",
  "100": "#b3e5fc",
  "200": "#81d4fa",
  "300": "#4fc3f7",
  "400": "#29b6f6",
  "500": "#03a9f4",
  "600": "#039be5",
  "700": "#0288d1",
  "800": "#0277bd",
  "900": "#01579b",
  "a100": "#80d8ff",
  "a200": "#40c4ff",
  "a400": "#00b0ff",
  "a700": "#0091ea"
};
var cyan = {
  "50": "#e0f7fa",
  "100": "#b2ebf2",
  "200": "#80deea",
  "300": "#4dd0e1",
  "400": "#26c6da",
  "500": "#00bcd4",
  "600": "#00acc1",
  "700": "#0097a7",
  "800": "#00838f",
  "900": "#006064",
  "a100": "#84ffff",
  "a200": "#18ffff",
  "a400": "#00e5ff",
  "a700": "#00b8d4"
};
var teal = {
  "50": "#e0f2f1",
  "100": "#b2dfdb",
  "200": "#80cbc4",
  "300": "#4db6ac",
  "400": "#26a69a",
  "500": "#009688",
  "600": "#00897b",
  "700": "#00796b",
  "800": "#00695c",
  "900": "#004d40",
  "a100": "#a7ffeb",
  "a200": "#64ffda",
  "a400": "#1de9b6",
  "a700": "#00bfa5"
};
var green = {
  "50": "#e8f5e9",
  "100": "#c8e6c9",
  "200": "#a5d6a7",
  "300": "#81c784",
  "400": "#66bb6a",
  "500": "#4caf50",
  "600": "#43a047",
  "700": "#388e3c",
  "800": "#2e7d32",
  "900": "#1b5e20",
  "a100": "#b9f6ca",
  "a200": "#69f0ae",
  "a400": "#00e676",
  "a700": "#00c853"
};
var lightGreen = {
  "50": "#f1f8e9",
  "100": "#dcedc8",
  "200": "#c5e1a5",
  "300": "#aed581",
  "400": "#9ccc65",
  "500": "#8bc34a",
  "600": "#7cb342",
  "700": "#689f38",
  "800": "#558b2f",
  "900": "#33691e",
  "a100": "#ccff90",
  "a200": "#b2ff59",
  "a400": "#76ff03",
  "a700": "#64dd17"
};
var lime = {
  "50": "#f9fbe7",
  "100": "#f0f4c3",
  "200": "#e6ee9c",
  "300": "#dce775",
  "400": "#d4e157",
  "500": "#cddc39",
  "600": "#c0ca33",
  "700": "#afb42b",
  "800": "#9e9d24",
  "900": "#827717",
  "a100": "#f4ff81",
  "a200": "#eeff41",
  "a400": "#c6ff00",
  "a700": "#aeea00"
};
var yellow = {
  "50": "#fffde7",
  "100": "#fff9c4",
  "200": "#fff59d",
  "300": "#fff176",
  "400": "#ffee58",
  "500": "#ffeb3b",
  "600": "#fdd835",
  "700": "#fbc02d",
  "800": "#f9a825",
  "900": "#f57f17",
  "a100": "#ffff8d",
  "a200": "#ffff00",
  "a400": "#ffea00",
  "a700": "#ffd600"
};
var amber = {
  "50": "#fff8e1",
  "100": "#ffecb3",
  "200": "#ffe082",
  "300": "#ffd54f",
  "400": "#ffca28",
  "500": "#ffc107",
  "600": "#ffb300",
  "700": "#ffa000",
  "800": "#ff8f00",
  "900": "#ff6f00",
  "a100": "#ffe57f",
  "a200": "#ffd740",
  "a400": "#ffc400",
  "a700": "#ffab00"
};
var orange = {
  "50": "#fff3e0",
  "100": "#ffe0b2",
  "200": "#ffcc80",
  "300": "#ffb74d",
  "400": "#ffa726",
  "500": "#ff9800",
  "600": "#fb8c00",
  "700": "#f57c00",
  "800": "#ef6c00",
  "900": "#e65100",
  "a100": "#ffd180",
  "a200": "#ffab40",
  "a400": "#ff9100",
  "a700": "#ff6d00"
};
var deepOrange = {
  "50": "#fbe9e7",
  "100": "#ffccbc",
  "200": "#ffab91",
  "300": "#ff8a65",
  "400": "#ff7043",
  "500": "#ff5722",
  "600": "#f4511e",
  "700": "#e64a19",
  "800": "#d84315",
  "900": "#bf360c",
  "a100": "#ff9e80",
  "a200": "#ff6e40",
  "a400": "#ff3d00",
  "a700": "#dd2c00"
};
var brown = {
  "50": "#efebe9",
  "100": "#d7ccc8",
  "200": "#bcaaa4",
  "300": "#a1887f",
  "400": "#8d6e63",
  "500": "#795548",
  "600": "#6d4c41",
  "700": "#5d4037",
  "800": "#4e342e",
  "900": "#3e2723"
};
var blueGrey = {
  "50": "#eceff1",
  "100": "#cfd8dc",
  "200": "#b0bec5",
  "300": "#90a4ae",
  "400": "#78909c",
  "500": "#607d8b",
  "600": "#546e7a",
  "700": "#455a64",
  "800": "#37474f",
  "900": "#263238"
};

var CircleSwatch = function CircleSwatch(_ref) {
  var color = _ref.color,
    onClick = _ref.onClick,
    onSwatchHover = _ref.onSwatchHover,
    hover = _ref.hover,
    active = _ref.active,
    circleSize = _ref.circleSize,
    circleSpacing = _ref.circleSpacing;
  var styles = _default$2({
    'default': {
      swatch: {
        width: circleSize,
        height: circleSize,
        marginRight: circleSpacing,
        marginBottom: circleSpacing,
        transform: 'scale(1)',
        transition: '100ms transform ease'
      },
      Swatch: {
        borderRadius: '50%',
        background: 'transparent',
        boxShadow: 'inset 0 0 0 ' + (circleSize / 2 + 1) + 'px ' + color,
        transition: '100ms box-shadow ease'
      }
    },
    'hover': {
      swatch: {
        transform: 'scale(1.2)'
      }
    },
    'active': {
      Swatch: {
        boxShadow: 'inset 0 0 0 3px ' + color
      }
    }
  }, {
    hover: hover,
    active: active
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.swatch
  }, /*#__PURE__*/React.createElement(Swatch$1, {
    style: styles.Swatch,
    color: color,
    onClick: onClick,
    onHover: onSwatchHover,
    focusStyle: {
      boxShadow: styles.Swatch.boxShadow + ', 0 0 5px ' + color
    }
  }));
};
CircleSwatch.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};
var CircleSwatch$1 = handleHover(CircleSwatch);

var Circle = function Circle(_ref) {
  var width = _ref.width,
    onChange = _ref.onChange,
    onSwatchHover = _ref.onSwatchHover,
    colors = _ref.colors,
    hex = _ref.hex,
    circleSize = _ref.circleSize,
    _ref$styles = _ref.styles,
    passedStyles = _ref$styles === undefined ? {} : _ref$styles,
    circleSpacing = _ref.circleSpacing,
    _ref$className = _ref.className,
    className = _ref$className === undefined ? '' : _ref$className;
  var styles = _default$2(merge$1({
    'default': {
      card: {
        width: width,
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing
      }
    }
  }, passedStyles));
  var handleChange = function handleChange(hexCode, e) {
    return onChange({
      hex: hexCode,
      source: 'hex'
    }, e);
  };
  return /*#__PURE__*/React.createElement('div', {
    style: styles.card,
    className: 'circle-picker ' + className
  }, map(colors, function (c) {
    return /*#__PURE__*/React.createElement(CircleSwatch$1, {
      key: c,
      color: c,
      onClick: handleChange,
      onSwatchHover: onSwatchHover,
      active: hex === c.toLowerCase(),
      circleSize: circleSize,
      circleSpacing: circleSpacing
    });
  }));
};
Circle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  circleSize: PropTypes.number,
  circleSpacing: PropTypes.number,
  styles: PropTypes.object
};
Circle.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [red['500'], pink['500'], purple['500'], deepPurple['500'], indigo['500'], blue['500'], lightBlue['500'], cyan['500'], teal['500'], green['500'], lightGreen['500'], lime['500'], yellow['500'], amber['500'], orange['500'], deepOrange['500'], brown['500'], blueGrey['500']],
  styles: {}
};
ColorWrap(Circle);

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

var UnfoldMoreHorizontalIcon = {};

Object.defineProperty(UnfoldMoreHorizontalIcon, "__esModule", {
  value: true
});
var _extends$4 = Object.assign || function (target) {
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
var _react$1 = React;
var _react2$1 = _interopRequireDefault$1(_react$1);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _objectWithoutProperties$1(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
var DEFAULT_SIZE$1 = 24;
var _default$1 = UnfoldMoreHorizontalIcon["default"] = function (_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === undefined ? 'currentColor' : _ref$fill,
    _ref$width = _ref.width,
    width = _ref$width === undefined ? DEFAULT_SIZE$1 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === undefined ? DEFAULT_SIZE$1 : _ref$height,
    _ref$style = _ref.style,
    style = _ref$style === undefined ? {} : _ref$style,
    props = _objectWithoutProperties$1(_ref, ['fill', 'width', 'height', 'style']);
  return _react2$1["default"].createElement('svg', _extends$4({
    viewBox: '0 0 ' + DEFAULT_SIZE$1 + ' ' + DEFAULT_SIZE$1,
    style: _extends$4({
      fill: fill,
      width: width,
      height: height
    }, style)
  }, props), _react2$1["default"].createElement('path', {
    d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z'
  }));
};

var _createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof$1(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof$1(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ChromeFields = function (_React$Component) {
  _inherits$1(ChromeFields, _React$Component);
  function ChromeFields(props) {
    _classCallCheck$1(this, ChromeFields);
    var _this = _possibleConstructorReturn$1(this, (ChromeFields.__proto__ || Object.getPrototypeOf(ChromeFields)).call(this));
    _this.toggleViews = function () {
      if (_this.state.view === 'hex') {
        _this.setState({
          view: 'rgb'
        });
      } else if (_this.state.view === 'rgb') {
        _this.setState({
          view: 'hsl'
        });
      } else if (_this.state.view === 'hsl') {
        if (_this.props.hsl.a === 1) {
          _this.setState({
            view: 'hex'
          });
        } else {
          _this.setState({
            view: 'rgb'
          });
        }
      }
    };
    _this.handleChange = function (data, e) {
      if (data.hex) {
        isValidHex(data.hex) && _this.props.onChange({
          hex: data.hex,
          source: 'hex'
        }, e);
      } else if (data.r || data.g || data.b) {
        _this.props.onChange({
          r: data.r || _this.props.rgb.r,
          g: data.g || _this.props.rgb.g,
          b: data.b || _this.props.rgb.b,
          source: 'rgb'
        }, e);
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 1) {
          data.a = 1;
        }
        _this.props.onChange({
          h: _this.props.hsl.h,
          s: _this.props.hsl.s,
          l: _this.props.hsl.l,
          a: Math.round(data.a * 100) / 100,
          source: 'rgb'
        }, e);
      } else if (data.h || data.s || data.l) {
        // Remove any occurances of '%'.
        if (typeof data.s === 'string' && data.s.includes('%')) {
          data.s = data.s.replace('%', '');
        }
        if (typeof data.l === 'string' && data.l.includes('%')) {
          data.l = data.l.replace('%', '');
        }

        // We store HSL as a unit interval so we need to override the 1 input to 0.01
        if (data.s == 1) {
          data.s = 0.01;
        } else if (data.l == 1) {
          data.l = 0.01;
        }
        _this.props.onChange({
          h: data.h || _this.props.hsl.h,
          s: Number(!isUndefined(data.s) ? data.s : _this.props.hsl.s),
          l: Number(!isUndefined(data.l) ? data.l : _this.props.hsl.l),
          source: 'hsl'
        }, e);
      }
    };
    _this.showHighlight = function (e) {
      e.currentTarget.style.background = '#eee';
    };
    _this.hideHighlight = function (e) {
      e.currentTarget.style.background = 'transparent';
    };
    if (props.hsl.a !== 1 && props.view === "hex") {
      _this.state = {
        view: "rgb"
      };
    } else {
      _this.state = {
        view: props.view
      };
    }
    return _this;
  }
  _createClass$1(ChromeFields, [{
    key: 'render',
    value: function render() {
      var _this2 = this;
      var styles = _default$2({
        'default': {
          wrap: {
            paddingTop: '16px',
            display: 'flex'
          },
          fields: {
            flex: '1',
            display: 'flex',
            marginLeft: '-6px'
          },
          field: {
            paddingLeft: '6px',
            width: '100%'
          },
          alpha: {
            paddingLeft: '6px',
            width: '100%'
          },
          toggle: {
            width: '32px',
            textAlign: 'right',
            position: 'relative'
          },
          icon: {
            marginRight: '-4px',
            marginTop: '12px',
            cursor: 'pointer',
            position: 'relative'
          },
          iconHighlight: {
            position: 'absolute',
            width: '24px',
            height: '28px',
            background: '#eee',
            borderRadius: '4px',
            top: '10px',
            left: '12px',
            display: 'none'
          },
          input: {
            fontSize: '11px',
            color: '#333',
            width: '100%',
            borderRadius: '2px',
            border: 'none',
            boxShadow: 'inset 0 0 0 1px #dadada',
            height: '21px',
            textAlign: 'center'
          },
          label: {
            textTransform: 'uppercase',
            fontSize: '11px',
            lineHeight: '11px',
            color: '#969696',
            textAlign: 'center',
            display: 'block',
            marginTop: '12px'
          },
          svg: {
            fill: '#333',
            width: '24px',
            height: '24px',
            border: '1px transparent solid',
            borderRadius: '5px'
          }
        },
        'disableAlpha': {
          alpha: {
            display: 'none'
          }
        }
      }, this.props, this.state);
      var fields = void 0;
      if (this.state.view === 'hex') {
        fields = /*#__PURE__*/React.createElement('div', {
          style: styles.fields,
          className: 'flexbox-fix'
        }, /*#__PURE__*/React.createElement('div', {
          style: styles.field
        }, /*#__PURE__*/React.createElement(EditableInput, {
          style: {
            input: styles.input,
            label: styles.label
          },
          label: 'hex',
          value: this.props.hex,
          onChange: this.handleChange
        })));
      } else if (this.state.view === 'rgb') {
        fields = /*#__PURE__*/React.createElement('div', {
          style: styles.fields,
          className: 'flexbox-fix'
        }, /*#__PURE__*/React.createElement('div', {
          style: styles.field
        }, /*#__PURE__*/React.createElement(EditableInput, {
          style: {
            input: styles.input,
            label: styles.label
          },
          label: 'r',
          value: this.props.rgb.r,
          onChange: this.handleChange
        })), /*#__PURE__*/React.createElement('div', {
          style: styles.field
        }, /*#__PURE__*/React.createElement(EditableInput, {
          style: {
            input: styles.input,
            label: styles.label
          },
          label: 'g',
          value: this.props.rgb.g,
          onChange: this.handleChange
        })), /*#__PURE__*/React.createElement('div', {
          style: styles.field
        }, /*#__PURE__*/React.createElement(EditableInput, {
          style: {
            input: styles.input,
            label: styles.label
          },
          label: 'b',
          value: this.props.rgb.b,
          onChange: this.handleChange
        })), /*#__PURE__*/React.createElement('div', {
          style: styles.alpha
        }, /*#__PURE__*/React.createElement(EditableInput, {
          style: {
            input: styles.input,
            label: styles.label
          },
          label: 'a',
          value: this.props.rgb.a,
          arrowOffset: 0.01,
          onChange: this.handleChange
        })));
      } else if (this.state.view === 'hsl') {
        fields = /*#__PURE__*/React.createElement('div', {
          style: styles.fields,
          className: 'flexbox-fix'
        }, /*#__PURE__*/React.createElement('div', {
          style: styles.field
        }, /*#__PURE__*/React.createElement(EditableInput, {
          style: {
            input: styles.input,
            label: styles.label
          },
          label: 'h',
          value: Math.round(this.props.hsl.h),
          onChange: this.handleChange
        })), /*#__PURE__*/React.createElement('div', {
          style: styles.field
        }, /*#__PURE__*/React.createElement(EditableInput, {
          style: {
            input: styles.input,
            label: styles.label
          },
          label: 's',
          value: Math.round(this.props.hsl.s * 100) + '%',
          onChange: this.handleChange
        })), /*#__PURE__*/React.createElement('div', {
          style: styles.field
        }, /*#__PURE__*/React.createElement(EditableInput, {
          style: {
            input: styles.input,
            label: styles.label
          },
          label: 'l',
          value: Math.round(this.props.hsl.l * 100) + '%',
          onChange: this.handleChange
        })), /*#__PURE__*/React.createElement('div', {
          style: styles.alpha
        }, /*#__PURE__*/React.createElement(EditableInput, {
          style: {
            input: styles.input,
            label: styles.label
          },
          label: 'a',
          value: this.props.hsl.a,
          arrowOffset: 0.01,
          onChange: this.handleChange
        })));
      }
      return /*#__PURE__*/React.createElement('div', {
        style: styles.wrap,
        className: 'flexbox-fix'
      }, fields, /*#__PURE__*/React.createElement('div', {
        style: styles.toggle
      }, /*#__PURE__*/React.createElement('div', {
        style: styles.icon,
        onClick: this.toggleViews,
        ref: function ref(icon) {
          return _this2.icon = icon;
        }
      }, /*#__PURE__*/React.createElement(_default$1, {
        style: styles.svg,
        onMouseOver: this.showHighlight,
        onMouseEnter: this.showHighlight,
        onMouseOut: this.hideHighlight
      }))));
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, state) {
      if (nextProps.hsl.a !== 1 && state.view === 'hex') {
        return {
          view: 'rgb'
        };
      }
      return null;
    }
  }]);
  return ChromeFields;
}(React.Component);
ChromeFields.defaultProps = {
  view: "hex"
};

var ChromePointer = function ChromePointer() {
  var styles = _default$2({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        transform: 'translate(-6px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.picker
  });
};

var ChromePointerCircle = function ChromePointerCircle() {
  var styles = _default$2({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    }
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.picker
  });
};

var Chrome = function Chrome(_ref) {
  var width = _ref.width,
    onChange = _ref.onChange,
    disableAlpha = _ref.disableAlpha,
    rgb = _ref.rgb,
    hsl = _ref.hsl,
    hsv = _ref.hsv,
    hex = _ref.hex,
    renderers = _ref.renderers,
    _ref$styles = _ref.styles,
    passedStyles = _ref$styles === undefined ? {} : _ref$styles,
    _ref$className = _ref.className,
    className = _ref$className === undefined ? '' : _ref$className,
    defaultView = _ref.defaultView;
  var styles = _default$2(merge$1({
    'default': {
      picker: {
        width: width,
        background: '#fff',
        borderRadius: '2px',
        boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
        boxSizing: 'initial',
        fontFamily: 'Menlo'
      },
      saturation: {
        width: '100%',
        paddingBottom: '55%',
        position: 'relative',
        borderRadius: '2px 2px 0 0',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '2px 2px 0 0'
      },
      body: {
        padding: '16px 16px 12px'
      },
      controls: {
        display: 'flex'
      },
      color: {
        width: '32px'
      },
      swatch: {
        marginTop: '6px',
        width: '16px',
        height: '16px',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden'
      },
      active: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
        background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + rgb.a + ')',
        zIndex: '2'
      },
      toggles: {
        flex: '1'
      },
      hue: {
        height: '10px',
        position: 'relative',
        marginBottom: '8px'
      },
      Hue: {
        radius: '2px'
      },
      alpha: {
        height: '10px',
        position: 'relative'
      },
      Alpha: {
        radius: '2px'
      }
    },
    'disableAlpha': {
      color: {
        width: '22px'
      },
      alpha: {
        display: 'none'
      },
      hue: {
        marginBottom: '0px'
      },
      swatch: {
        width: '10px',
        height: '10px',
        marginTop: '0px'
      }
    }
  }, passedStyles), {
    disableAlpha: disableAlpha
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.picker,
    className: 'chrome-picker ' + className
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.saturation
  }, /*#__PURE__*/React.createElement(Saturation, {
    style: styles.Saturation,
    hsl: hsl,
    hsv: hsv,
    pointer: ChromePointerCircle,
    onChange: onChange
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.body
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.controls,
    className: 'flexbox-fix'
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.color
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.swatch
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.active
  }), /*#__PURE__*/React.createElement(Checkboard, {
    renderers: renderers
  }))), /*#__PURE__*/React.createElement('div', {
    style: styles.toggles
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.hue
  }, /*#__PURE__*/React.createElement(Hue, {
    style: styles.Hue,
    hsl: hsl,
    pointer: ChromePointer,
    onChange: onChange
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.alpha
  }, /*#__PURE__*/React.createElement(Alpha, {
    style: styles.Alpha,
    rgb: rgb,
    hsl: hsl,
    pointer: ChromePointer,
    renderers: renderers,
    onChange: onChange
  })))), /*#__PURE__*/React.createElement(ChromeFields, {
    rgb: rgb,
    hsl: hsl,
    hex: hex,
    view: defaultView,
    onChange: onChange,
    disableAlpha: disableAlpha
  })));
};
Chrome.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disableAlpha: PropTypes.bool,
  styles: PropTypes.object,
  defaultView: PropTypes.oneOf(["hex", "rgb", "hsl"])
};
Chrome.defaultProps = {
  width: 225,
  disableAlpha: false,
  styles: {}
};
ColorWrap(Chrome);

var CompactColor = function CompactColor(_ref) {
  var color = _ref.color,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
    onSwatchHover = _ref.onSwatchHover,
    active = _ref.active;
  var styles = _default$2({
    'default': {
      color: {
        background: color,
        width: '15px',
        height: '15px',
        "float": 'left',
        marginRight: '5px',
        marginBottom: '5px',
        position: 'relative',
        cursor: 'pointer'
      },
      dot: {
        absolute: '5px 5px 5px 5px',
        background: getContrastingColor(color),
        borderRadius: '50%',
        opacity: '0'
      }
    },
    'active': {
      dot: {
        opacity: '1'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd'
      },
      dot: {
        background: '#000'
      }
    },
    'transparent': {
      dot: {
        background: '#000'
      }
    }
  }, {
    active: active,
    'color-#FFFFFF': color === '#FFFFFF',
    'transparent': color === 'transparent'
  });
  return /*#__PURE__*/React.createElement(Swatch$1, {
    style: styles.color,
    color: color,
    onClick: onClick,
    onHover: onSwatchHover,
    focusStyle: {
      boxShadow: '0 0 4px ' + color
    }
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.dot
  }));
};

var CompactFields = function CompactFields(_ref) {
  var hex = _ref.hex,
    rgb = _ref.rgb,
    onChange = _ref.onChange;
  var styles = _default$2({
    'default': {
      fields: {
        display: 'flex',
        paddingBottom: '6px',
        paddingRight: '5px',
        position: 'relative'
      },
      active: {
        position: 'absolute',
        top: '6px',
        left: '5px',
        height: '9px',
        width: '9px',
        background: hex
      },
      HEXwrap: {
        flex: '6',
        position: 'relative'
      },
      HEXinput: {
        width: '80%',
        padding: '0px',
        paddingLeft: '20%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px'
      },
      HEXlabel: {
        display: 'none'
      },
      RGBwrap: {
        flex: '3',
        position: 'relative'
      },
      RGBinput: {
        width: '70%',
        padding: '0px',
        paddingLeft: '30%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px'
      },
      RGBlabel: {
        position: 'absolute',
        top: '3px',
        left: '0px',
        lineHeight: '16px',
        textTransform: 'uppercase',
        fontSize: '12px',
        color: '#999'
      }
    }
  });
  var handleChange = function handleChange(data, e) {
    if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    } else {
      onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    }
  };
  return /*#__PURE__*/React.createElement('div', {
    style: styles.fields,
    className: 'flexbox-fix'
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.active
  }), /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.HEXwrap,
      input: styles.HEXinput,
      label: styles.HEXlabel
    },
    label: 'hex',
    value: hex,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.RGBwrap,
      input: styles.RGBinput,
      label: styles.RGBlabel
    },
    label: 'r',
    value: rgb.r,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.RGBwrap,
      input: styles.RGBinput,
      label: styles.RGBlabel
    },
    label: 'g',
    value: rgb.g,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.RGBwrap,
      input: styles.RGBinput,
      label: styles.RGBlabel
    },
    label: 'b',
    value: rgb.b,
    onChange: handleChange
  }));
};

var Compact = function Compact(_ref) {
  var onChange = _ref.onChange,
    onSwatchHover = _ref.onSwatchHover,
    colors = _ref.colors,
    hex = _ref.hex,
    rgb = _ref.rgb,
    _ref$styles = _ref.styles,
    passedStyles = _ref$styles === undefined ? {} : _ref$styles,
    _ref$className = _ref.className,
    className = _ref$className === undefined ? '' : _ref$className;
  var styles = _default$2(merge$1({
    'default': {
      Compact: {
        background: '#f6f6f6',
        radius: '4px'
      },
      compact: {
        paddingTop: '5px',
        paddingLeft: '5px',
        boxSizing: 'initial',
        width: '240px'
      },
      clear: {
        clear: 'both'
      }
    }
  }, passedStyles));
  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else {
      onChange(data, e);
    }
  };
  return /*#__PURE__*/React.createElement(Raised, {
    style: styles.Compact,
    styles: passedStyles
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.compact,
    className: 'compact-picker ' + className
  }, /*#__PURE__*/React.createElement('div', null, map(colors, function (c) {
    return /*#__PURE__*/React.createElement(CompactColor, {
      key: c,
      color: c,
      active: c.toLowerCase() === hex,
      onClick: handleChange,
      onSwatchHover: onSwatchHover
    });
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.clear
  })), /*#__PURE__*/React.createElement(CompactFields, {
    hex: hex,
    rgb: rgb,
    onChange: handleChange
  })));
};
Compact.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.object
};
Compact.defaultProps = {
  colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'],
  styles: {}
};
ColorWrap(Compact);

var GithubSwatch = function GithubSwatch(_ref) {
  var hover = _ref.hover,
    color = _ref.color,
    onClick = _ref.onClick,
    onSwatchHover = _ref.onSwatchHover;
  var hoverSwatch = {
    position: 'relative',
    zIndex: '2',
    outline: '2px solid #fff',
    boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
  };
  var styles = _default$2({
    'default': {
      swatch: {
        width: '25px',
        height: '25px',
        fontSize: '0'
      }
    },
    'hover': {
      swatch: hoverSwatch
    }
  }, {
    hover: hover
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.swatch
  }, /*#__PURE__*/React.createElement(Swatch$1, {
    color: color,
    onClick: onClick,
    onHover: onSwatchHover,
    focusStyle: hoverSwatch
  }));
};
var GithubSwatch$1 = handleHover(GithubSwatch);

var Github = function Github(_ref) {
  var width = _ref.width,
    colors = _ref.colors,
    onChange = _ref.onChange,
    onSwatchHover = _ref.onSwatchHover,
    triangle = _ref.triangle,
    _ref$styles = _ref.styles,
    passedStyles = _ref$styles === undefined ? {} : _ref$styles,
    _ref$className = _ref.className,
    className = _ref$className === undefined ? '' : _ref$className;
  var styles = _default$2(merge$1({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.2)',
        boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
        borderRadius: '4px',
        position: 'relative',
        padding: '5px',
        display: 'flex',
        flexWrap: 'wrap'
      },
      triangle: {
        position: 'absolute',
        border: '7px solid transparent',
        borderBottomColor: '#fff'
      },
      triangleShadow: {
        position: 'absolute',
        border: '8px solid transparent',
        borderBottomColor: 'rgba(0,0,0,0.15)'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      },
      triangleShadow: {
        display: 'none'
      }
    },
    'top-left-triangle': {
      triangle: {
        top: '-14px',
        left: '10px'
      },
      triangleShadow: {
        top: '-16px',
        left: '9px'
      }
    },
    'top-right-triangle': {
      triangle: {
        top: '-14px',
        right: '10px'
      },
      triangleShadow: {
        top: '-16px',
        right: '9px'
      }
    },
    'bottom-left-triangle': {
      triangle: {
        top: '35px',
        left: '10px',
        transform: 'rotate(180deg)'
      },
      triangleShadow: {
        top: '37px',
        left: '9px',
        transform: 'rotate(180deg)'
      }
    },
    'bottom-right-triangle': {
      triangle: {
        top: '35px',
        right: '10px',
        transform: 'rotate(180deg)'
      },
      triangleShadow: {
        top: '37px',
        right: '9px',
        transform: 'rotate(180deg)'
      }
    }
  }, passedStyles), {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right',
    'bottom-left-triangle': triangle === 'bottom-left',
    'bottom-right-triangle': triangle === 'bottom-right'
  });
  var handleChange = function handleChange(hex, e) {
    return onChange({
      hex: hex,
      source: 'hex'
    }, e);
  };
  return /*#__PURE__*/React.createElement('div', {
    style: styles.card,
    className: 'github-picker ' + className
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.triangleShadow
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.triangle
  }), map(colors, function (c) {
    return /*#__PURE__*/React.createElement(GithubSwatch$1, {
      color: c,
      key: c,
      onClick: handleChange,
      onSwatchHover: onSwatchHover
    });
  }));
};
Github.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.string),
  triangle: PropTypes.oneOf(['hide', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
  styles: PropTypes.object
};
Github.defaultProps = {
  width: 200,
  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],
  triangle: 'top-left',
  styles: {}
};
ColorWrap(Github);

var SliderPointer$1 = function SliderPointer(_ref) {
  var direction = _ref.direction;
  var styles = _default$2({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)'
      }
    }
  }, {
    vertical: direction === 'vertical'
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.picker
  });
};

var _extends$3 = Object.assign || function (target) {
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
var HuePicker = function HuePicker(_ref) {
  var width = _ref.width,
    height = _ref.height,
    onChange = _ref.onChange,
    hsl = _ref.hsl,
    direction = _ref.direction,
    pointer = _ref.pointer,
    _ref$styles = _ref.styles,
    passedStyles = _ref$styles === undefined ? {} : _ref$styles,
    _ref$className = _ref.className,
    className = _ref$className === undefined ? '' : _ref$className;
  var styles = _default$2(merge$1({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      hue: {
        radius: '2px'
      }
    }
  }, passedStyles));

  // Overwrite to provide pure hue color
  var handleChange = function handleChange(data) {
    return onChange({
      a: 1,
      h: data.h,
      l: 0.5,
      s: 1
    });
  };
  return /*#__PURE__*/React.createElement('div', {
    style: styles.picker,
    className: 'hue-picker ' + className
  }, /*#__PURE__*/React.createElement(Hue, _extends$3({}, styles.hue, {
    hsl: hsl,
    pointer: pointer,
    onChange: handleChange,
    direction: direction
  })));
};
HuePicker.propTypes = {
  styles: PropTypes.object
};
HuePicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: SliderPointer$1,
  styles: {}
};
ColorWrap(HuePicker);

var Material = function Material(_ref) {
  var onChange = _ref.onChange,
    hex = _ref.hex,
    rgb = _ref.rgb,
    _ref$styles = _ref.styles,
    passedStyles = _ref$styles === undefined ? {} : _ref$styles,
    _ref$className = _ref.className,
    className = _ref$className === undefined ? '' : _ref$className;
  var styles = _default$2(merge$1({
    'default': {
      material: {
        width: '98px',
        height: '98px',
        padding: '16px',
        fontFamily: 'Roboto'
      },
      HEXwrap: {
        position: 'relative'
      },
      HEXinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '2px solid ' + hex,
        outline: 'none',
        height: '30px'
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize'
      },
      Hex: {
        style: {}
      },
      RGBwrap: {
        position: 'relative'
      },
      RGBinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '1px solid #eee',
        outline: 'none',
        height: '30px'
      },
      RGBlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize'
      },
      split: {
        display: 'flex',
        marginRight: '-10px',
        paddingTop: '11px'
      },
      third: {
        flex: '1',
        paddingRight: '10px'
      }
    }
  }, passedStyles));
  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    }
  };
  return /*#__PURE__*/React.createElement(Raised, {
    styles: passedStyles
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.material,
    className: 'material-picker ' + className
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.HEXwrap,
      input: styles.HEXinput,
      label: styles.HEXlabel
    },
    label: 'hex',
    value: hex,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.split,
    className: 'flexbox-fix'
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.third
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.RGBwrap,
      input: styles.RGBinput,
      label: styles.RGBlabel
    },
    label: 'r',
    value: rgb.r,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.third
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.RGBwrap,
      input: styles.RGBinput,
      label: styles.RGBlabel
    },
    label: 'g',
    value: rgb.g,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.third
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.RGBwrap,
      input: styles.RGBinput,
      label: styles.RGBlabel
    },
    label: 'b',
    value: rgb.b,
    onChange: handleChange
  })))));
};
ColorWrap(Material);

var PhotoshopPicker = function PhotoshopPicker(_ref) {
  var onChange = _ref.onChange,
    rgb = _ref.rgb,
    hsv = _ref.hsv,
    hex = _ref.hex;
  var styles = _default$2({
    'default': {
      fields: {
        paddingTop: '5px',
        paddingBottom: '9px',
        width: '80px',
        position: 'relative'
      },
      divider: {
        height: '5px'
      },
      RGBwrap: {
        position: 'relative'
      },
      RGBinput: {
        marginLeft: '40%',
        width: '40%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '5px',
        fontSize: '13px',
        paddingLeft: '3px',
        marginRight: '10px'
      },
      RGBlabel: {
        left: '0px',
        top: '0px',
        width: '34px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px',
        position: 'absolute'
      },
      HEXwrap: {
        position: 'relative'
      },
      HEXinput: {
        marginLeft: '20%',
        width: '80%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '6px',
        fontSize: '13px',
        paddingLeft: '3px'
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '14px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px'
      },
      fieldSymbols: {
        position: 'absolute',
        top: '5px',
        right: '-7px',
        fontSize: '13px'
      },
      symbol: {
        height: '20px',
        lineHeight: '22px',
        paddingBottom: '7px'
      }
    }
  });
  var handleChange = function handleChange(data, e) {
    if (data['#']) {
      isValidHex(data['#']) && onChange({
        hex: data['#'],
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    } else if (data.h || data.s || data.v) {
      onChange({
        h: data.h || hsv.h,
        s: data.s || hsv.s,
        v: data.v || hsv.v,
        source: 'hsv'
      }, e);
    }
  };
  return /*#__PURE__*/React.createElement('div', {
    style: styles.fields
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.RGBwrap,
      input: styles.RGBinput,
      label: styles.RGBlabel
    },
    label: 'h',
    value: Math.round(hsv.h),
    onChange: handleChange
  }), /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.RGBwrap,
      input: styles.RGBinput,
      label: styles.RGBlabel
    },
    label: 's',
    value: Math.round(hsv.s * 100),
    onChange: handleChange
  }), /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.RGBwrap,
      input: styles.RGBinput,
      label: styles.RGBlabel
    },
    label: 'v',
    value: Math.round(hsv.v * 100),
    onChange: handleChange
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.divider
  }), /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.RGBwrap,
      input: styles.RGBinput,
      label: styles.RGBlabel
    },
    label: 'r',
    value: rgb.r,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.RGBwrap,
      input: styles.RGBinput,
      label: styles.RGBlabel
    },
    label: 'g',
    value: rgb.g,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.RGBwrap,
      input: styles.RGBinput,
      label: styles.RGBlabel
    },
    label: 'b',
    value: rgb.b,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.divider
  }), /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      wrap: styles.HEXwrap,
      input: styles.HEXinput,
      label: styles.HEXlabel
    },
    label: '#',
    value: hex.replace('#', ''),
    onChange: handleChange
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.fieldSymbols
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.symbol
  }, '\xB0'), /*#__PURE__*/React.createElement('div', {
    style: styles.symbol
  }, '%'), /*#__PURE__*/React.createElement('div', {
    style: styles.symbol
  }, '%')));
};

var PhotoshopPointerCircle$1 = function PhotoshopPointerCircle(_ref) {
  var hsl = _ref.hsl;
  var styles = _default$2({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    },
    'black-outline': {
      picker: {
        boxShadow: 'inset 0 0 0 1px #000'
      }
    }
  }, {
    'black-outline': hsl.l > 0.5
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.picker
  });
};

var PhotoshopPointerCircle = function PhotoshopPointerCircle() {
  var styles = _default$2({
    'default': {
      triangle: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '4px 0 4px 6px',
        borderColor: 'transparent transparent transparent #fff',
        position: 'absolute',
        top: '1px',
        left: '1px'
      },
      triangleBorder: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '5px 0 5px 8px',
        borderColor: 'transparent transparent transparent #555'
      },
      left: {
        Extend: 'triangleBorder',
        transform: 'translate(-13px, -4px)'
      },
      leftInside: {
        Extend: 'triangle',
        transform: 'translate(-8px, -5px)'
      },
      right: {
        Extend: 'triangleBorder',
        transform: 'translate(20px, -14px) rotate(180deg)'
      },
      rightInside: {
        Extend: 'triangle',
        transform: 'translate(-8px, -5px)'
      }
    }
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.pointer
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.left
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.leftInside
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.right
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.rightInside
  })));
};

var PhotoshopButton = function PhotoshopButton(_ref) {
  var onClick = _ref.onClick,
    label = _ref.label,
    children = _ref.children,
    active = _ref.active;
  var styles = _default$2({
    'default': {
      button: {
        backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
        border: '1px solid #878787',
        borderRadius: '2px',
        height: '20px',
        boxShadow: '0 1px 0 0 #EAEAEA',
        fontSize: '14px',
        color: '#000',
        lineHeight: '20px',
        textAlign: 'center',
        marginBottom: '10px',
        cursor: 'pointer'
      }
    },
    'active': {
      button: {
        boxShadow: '0 0 0 1px #878787'
      }
    }
  }, {
    active: active
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.button,
    onClick: onClick
  }, label || children);
};

var PhotoshopPreviews = function PhotoshopPreviews(_ref) {
  var rgb = _ref.rgb,
    currentColor = _ref.currentColor;
  var styles = _default$2({
    'default': {
      swatches: {
        border: '1px solid #B3B3B3',
        borderBottom: '1px solid #F0F0F0',
        marginBottom: '2px',
        marginTop: '1px'
      },
      "new": {
        height: '34px',
        background: 'rgb(' + rgb.r + ',' + rgb.g + ', ' + rgb.b + ')',
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
      },
      current: {
        height: '34px',
        background: currentColor,
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
      },
      label: {
        fontSize: '14px',
        color: '#000',
        textAlign: 'center'
      }
    }
  });
  return /*#__PURE__*/React.createElement('div', null, /*#__PURE__*/React.createElement('div', {
    style: styles.label
  }, 'new'), /*#__PURE__*/React.createElement('div', {
    style: styles.swatches
  }, /*#__PURE__*/React.createElement('div', {
    style: styles["new"]
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.current
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.label
  }, 'current'));
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof$1(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof$1(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Photoshop = function (_React$Component) {
  _inherits(Photoshop, _React$Component);
  function Photoshop(props) {
    _classCallCheck(this, Photoshop);
    var _this = _possibleConstructorReturn(this, (Photoshop.__proto__ || Object.getPrototypeOf(Photoshop)).call(this));
    _this.state = {
      currentColor: props.hex
    };
    return _this;
  }
  _createClass(Photoshop, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
        _props$styles = _props.styles,
        passedStyles = _props$styles === undefined ? {} : _props$styles,
        _props$className = _props.className,
        className = _props$className === undefined ? '' : _props$className;
      var styles = _default$2(merge$1({
        'default': {
          picker: {
            background: '#DCDCDC',
            borderRadius: '4px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
            boxSizing: 'initial',
            width: '513px'
          },
          head: {
            backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
            borderBottom: '1px solid #B1B1B1',
            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
            height: '23px',
            lineHeight: '24px',
            borderRadius: '4px 4px 0 0',
            fontSize: '13px',
            color: '#4D4D4D',
            textAlign: 'center'
          },
          body: {
            padding: '15px 15px 0',
            display: 'flex'
          },
          saturation: {
            width: '256px',
            height: '256px',
            position: 'relative',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0',
            overflow: 'hidden'
          },
          hue: {
            position: 'relative',
            height: '256px',
            width: '19px',
            marginLeft: '10px',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0'
          },
          controls: {
            width: '180px',
            marginLeft: '10px'
          },
          top: {
            display: 'flex'
          },
          previews: {
            width: '60px'
          },
          actions: {
            flex: '1',
            marginLeft: '20px'
          }
        }
      }, passedStyles));
      return /*#__PURE__*/React.createElement('div', {
        style: styles.picker,
        className: 'photoshop-picker ' + className
      }, /*#__PURE__*/React.createElement('div', {
        style: styles.head
      }, this.props.header), /*#__PURE__*/React.createElement('div', {
        style: styles.body,
        className: 'flexbox-fix'
      }, /*#__PURE__*/React.createElement('div', {
        style: styles.saturation
      }, /*#__PURE__*/React.createElement(Saturation, {
        hsl: this.props.hsl,
        hsv: this.props.hsv,
        pointer: PhotoshopPointerCircle$1,
        onChange: this.props.onChange
      })), /*#__PURE__*/React.createElement('div', {
        style: styles.hue
      }, /*#__PURE__*/React.createElement(Hue, {
        direction: 'vertical',
        hsl: this.props.hsl,
        pointer: PhotoshopPointerCircle,
        onChange: this.props.onChange
      })), /*#__PURE__*/React.createElement('div', {
        style: styles.controls
      }, /*#__PURE__*/React.createElement('div', {
        style: styles.top,
        className: 'flexbox-fix'
      }, /*#__PURE__*/React.createElement('div', {
        style: styles.previews
      }, /*#__PURE__*/React.createElement(PhotoshopPreviews, {
        rgb: this.props.rgb,
        currentColor: this.state.currentColor
      })), /*#__PURE__*/React.createElement('div', {
        style: styles.actions
      }, /*#__PURE__*/React.createElement(PhotoshopButton, {
        label: 'OK',
        onClick: this.props.onAccept,
        active: true
      }), /*#__PURE__*/React.createElement(PhotoshopButton, {
        label: 'Cancel',
        onClick: this.props.onCancel
      }), /*#__PURE__*/React.createElement(PhotoshopPicker, {
        onChange: this.props.onChange,
        rgb: this.props.rgb,
        hsv: this.props.hsv,
        hex: this.props.hex
      }))))));
    }
  }]);
  return Photoshop;
}(React.Component);
Photoshop.propTypes = {
  header: PropTypes.string,
  styles: PropTypes.object
};
Photoshop.defaultProps = {
  header: 'Color Picker',
  styles: {}
};
ColorWrap(Photoshop);

/* eslint-disable no-param-reassign */
var SketchFields = function SketchFields(_ref) {
  var onChange = _ref.onChange,
    rgb = _ref.rgb,
    hsl = _ref.hsl,
    hex = _ref.hex,
    disableAlpha = _ref.disableAlpha;
  var styles = _default$2({
    'default': {
      fields: {
        display: 'flex',
        paddingTop: '4px'
      },
      single: {
        flex: '1',
        paddingLeft: '6px'
      },
      alpha: {
        flex: '1',
        paddingLeft: '6px'
      },
      "double": {
        flex: '2'
      },
      input: {
        width: '80%',
        padding: '4px 10% 3px',
        border: 'none',
        boxShadow: 'inset 0 0 0 1px #ccc',
        fontSize: '11px'
      },
      label: {
        display: 'block',
        textAlign: 'center',
        fontSize: '11px',
        color: '#222',
        paddingTop: '3px',
        paddingBottom: '4px',
        textTransform: 'capitalize'
      }
    },
    'disableAlpha': {
      alpha: {
        display: 'none'
      }
    }
  }, {
    disableAlpha: disableAlpha
  });
  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        a: rgb.a,
        source: 'rgb'
      }, e);
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0;
      } else if (data.a > 100) {
        data.a = 100;
      }
      data.a /= 100;
      onChange({
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: data.a,
        source: 'rgb'
      }, e);
    }
  };
  return /*#__PURE__*/React.createElement('div', {
    style: styles.fields,
    className: 'flexbox-fix'
  }, /*#__PURE__*/React.createElement('div', {
    style: styles["double"]
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input,
      label: styles.label
    },
    label: 'hex',
    value: hex.replace('#', ''),
    onChange: handleChange
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.single
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input,
      label: styles.label
    },
    label: 'r',
    value: rgb.r,
    onChange: handleChange,
    dragLabel: 'true',
    dragMax: '255'
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.single
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input,
      label: styles.label
    },
    label: 'g',
    value: rgb.g,
    onChange: handleChange,
    dragLabel: 'true',
    dragMax: '255'
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.single
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input,
      label: styles.label
    },
    label: 'b',
    value: rgb.b,
    onChange: handleChange,
    dragLabel: 'true',
    dragMax: '255'
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.alpha
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input,
      label: styles.label
    },
    label: 'a',
    value: Math.round(rgb.a * 100),
    onChange: handleChange,
    dragLabel: 'true',
    dragMax: '100'
  })));
};

var _extends$2 = Object.assign || function (target) {
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
var SketchPresetColors = function SketchPresetColors(_ref) {
  var colors = _ref.colors,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
    onSwatchHover = _ref.onSwatchHover;
  var styles = _default$2({
    'default': {
      colors: {
        margin: '0 -10px',
        padding: '10px 0 0 10px',
        borderTop: '1px solid #eee',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative'
      },
      swatchWrap: {
        width: '16px',
        height: '16px',
        margin: '0 10px 10px 0'
      },
      swatch: {
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
      }
    },
    'no-presets': {
      colors: {
        display: 'none'
      }
    }
  }, {
    'no-presets': !colors || !colors.length
  });
  var handleClick = function handleClick(hex, e) {
    onClick({
      hex: hex,
      source: 'hex'
    }, e);
  };
  return /*#__PURE__*/React.createElement('div', {
    style: styles.colors,
    className: 'flexbox-fix'
  }, colors.map(function (colorObjOrString) {
    var c = typeof colorObjOrString === 'string' ? {
      color: colorObjOrString
    } : colorObjOrString;
    var key = '' + c.color + (c.title || '');
    return /*#__PURE__*/React.createElement('div', {
      key: key,
      style: styles.swatchWrap
    }, /*#__PURE__*/React.createElement(Swatch$1, _extends$2({}, c, {
      style: styles.swatch,
      onClick: handleClick,
      onHover: onSwatchHover,
      focusStyle: {
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ' + c.color
      }
    })));
  }));
};
SketchPresetColors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    color: PropTypes.string,
    title: PropTypes.string
  })])).isRequired
};

var _extends$1 = Object.assign || function (target) {
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
var Sketch = function Sketch(_ref) {
  var width = _ref.width,
    rgb = _ref.rgb,
    hex = _ref.hex,
    hsv = _ref.hsv,
    hsl = _ref.hsl,
    onChange = _ref.onChange,
    onSwatchHover = _ref.onSwatchHover,
    disableAlpha = _ref.disableAlpha,
    presetColors = _ref.presetColors,
    renderers = _ref.renderers,
    _ref$styles = _ref.styles,
    passedStyles = _ref$styles === undefined ? {} : _ref$styles,
    _ref$className = _ref.className,
    className = _ref$className === undefined ? '' : _ref$className;
  var styles = _default$2(merge$1({
    'default': _extends$1({
      picker: {
        width: width,
        padding: '10px 10px 0',
        boxSizing: 'initial',
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
      },
      saturation: {
        width: '100%',
        paddingBottom: '75%',
        position: 'relative',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '3px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      controls: {
        display: 'flex'
      },
      sliders: {
        padding: '4px 0',
        flex: '1'
      },
      color: {
        width: '24px',
        height: '24px',
        position: 'relative',
        marginTop: '4px',
        marginLeft: '4px',
        borderRadius: '3px'
      },
      activeColor: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '2px',
        background: 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      hue: {
        position: 'relative',
        height: '10px',
        overflow: 'hidden'
      },
      Hue: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      alpha: {
        position: 'relative',
        height: '10px',
        marginTop: '4px',
        overflow: 'hidden'
      },
      Alpha: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      }
    }, passedStyles),
    'disableAlpha': {
      color: {
        height: '10px'
      },
      hue: {
        height: '10px'
      },
      alpha: {
        display: 'none'
      }
    }
  }, passedStyles), {
    disableAlpha: disableAlpha
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.picker,
    className: 'sketch-picker ' + className
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.saturation
  }, /*#__PURE__*/React.createElement(Saturation, {
    style: styles.Saturation,
    hsl: hsl,
    hsv: hsv,
    onChange: onChange
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.controls,
    className: 'flexbox-fix'
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.sliders
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.hue
  }, /*#__PURE__*/React.createElement(Hue, {
    style: styles.Hue,
    hsl: hsl,
    onChange: onChange
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.alpha
  }, /*#__PURE__*/React.createElement(Alpha, {
    style: styles.Alpha,
    rgb: rgb,
    hsl: hsl,
    renderers: renderers,
    onChange: onChange
  }))), /*#__PURE__*/React.createElement('div', {
    style: styles.color
  }, /*#__PURE__*/React.createElement(Checkboard, null), /*#__PURE__*/React.createElement('div', {
    style: styles.activeColor
  }))), /*#__PURE__*/React.createElement(SketchFields, {
    rgb: rgb,
    hsl: hsl,
    hex: hex,
    onChange: onChange,
    disableAlpha: disableAlpha
  }), /*#__PURE__*/React.createElement(SketchPresetColors, {
    colors: presetColors,
    onClick: onChange,
    onSwatchHover: onSwatchHover
  }));
};
Sketch.propTypes = {
  disableAlpha: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object
};
Sketch.defaultProps = {
  disableAlpha: false,
  width: 200,
  styles: {},
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
};
var SketchPicker = ColorWrap(Sketch);

var SliderSwatch = function SliderSwatch(_ref) {
  var hsl = _ref.hsl,
    offset = _ref.offset,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
    active = _ref.active,
    first = _ref.first,
    last = _ref.last;
  var styles = _default$2({
    'default': {
      swatch: {
        height: '12px',
        background: 'hsl(' + hsl.h + ', 50%, ' + offset * 100 + '%)',
        cursor: 'pointer'
      }
    },
    'first': {
      swatch: {
        borderRadius: '2px 0 0 2px'
      }
    },
    'last': {
      swatch: {
        borderRadius: '0 2px 2px 0'
      }
    },
    'active': {
      swatch: {
        transform: 'scaleY(1.8)',
        borderRadius: '3.6px/2px'
      }
    }
  }, {
    active: active,
    first: first,
    last: last
  });
  var handleClick = function handleClick(e) {
    return onClick({
      h: hsl.h,
      s: 0.5,
      l: offset,
      source: 'hsl'
    }, e);
  };
  return /*#__PURE__*/React.createElement('div', {
    style: styles.swatch,
    onClick: handleClick
  });
};

var SliderSwatches = function SliderSwatches(_ref) {
  var onClick = _ref.onClick,
    hsl = _ref.hsl;
  var styles = _default$2({
    'default': {
      swatches: {
        marginTop: '20px'
      },
      swatch: {
        boxSizing: 'border-box',
        width: '20%',
        paddingRight: '1px',
        "float": 'left'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  // Acceptible difference in floating point equality
  var epsilon = 0.1;
  return /*#__PURE__*/React.createElement('div', {
    style: styles.swatches
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.swatch
  }, /*#__PURE__*/React.createElement(SliderSwatch, {
    hsl: hsl,
    offset: '.80',
    active: Math.abs(hsl.l - 0.80) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
    onClick: onClick,
    first: true
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.swatch
  }, /*#__PURE__*/React.createElement(SliderSwatch, {
    hsl: hsl,
    offset: '.65',
    active: Math.abs(hsl.l - 0.65) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
    onClick: onClick
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.swatch
  }, /*#__PURE__*/React.createElement(SliderSwatch, {
    hsl: hsl,
    offset: '.50',
    active: Math.abs(hsl.l - 0.50) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
    onClick: onClick
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.swatch
  }, /*#__PURE__*/React.createElement(SliderSwatch, {
    hsl: hsl,
    offset: '.35',
    active: Math.abs(hsl.l - 0.35) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
    onClick: onClick
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.swatch
  }, /*#__PURE__*/React.createElement(SliderSwatch, {
    hsl: hsl,
    offset: '.20',
    active: Math.abs(hsl.l - 0.20) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
    onClick: onClick,
    last: true
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.clear
  }));
};

var SliderPointer = function SliderPointer() {
  var styles = _default$2({
    'default': {
      picker: {
        width: '14px',
        height: '14px',
        borderRadius: '6px',
        transform: 'translate(-7px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.picker
  });
};

var Slider = function Slider(_ref) {
  var hsl = _ref.hsl,
    onChange = _ref.onChange,
    pointer = _ref.pointer,
    _ref$styles = _ref.styles,
    passedStyles = _ref$styles === undefined ? {} : _ref$styles,
    _ref$className = _ref.className,
    className = _ref$className === undefined ? '' : _ref$className;
  var styles = _default$2(merge$1({
    'default': {
      hue: {
        height: '12px',
        position: 'relative'
      },
      Hue: {
        radius: '2px'
      }
    }
  }, passedStyles));
  return /*#__PURE__*/React.createElement('div', {
    style: styles.wrap || {},
    className: 'slider-picker ' + className
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.hue
  }, /*#__PURE__*/React.createElement(Hue, {
    style: styles.Hue,
    hsl: hsl,
    pointer: pointer,
    onChange: onChange
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.swatches
  }, /*#__PURE__*/React.createElement(SliderSwatches, {
    hsl: hsl,
    onClick: onChange
  })));
};
Slider.propTypes = {
  styles: PropTypes.object
};
Slider.defaultProps = {
  pointer: SliderPointer,
  styles: {}
};
ColorWrap(Slider);

var CheckIcon = {};

Object.defineProperty(CheckIcon, "__esModule", {
  value: true
});
var _extends = Object.assign || function (target) {
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
var _react = React;
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
var DEFAULT_SIZE = 24;
var _default = CheckIcon["default"] = function (_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === undefined ? 'currentColor' : _ref$fill,
    _ref$width = _ref.width,
    width = _ref$width === undefined ? DEFAULT_SIZE : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === undefined ? DEFAULT_SIZE : _ref$height,
    _ref$style = _ref.style,
    style = _ref$style === undefined ? {} : _ref$style,
    props = _objectWithoutProperties(_ref, ['fill', 'width', 'height', 'style']);
  return _react2["default"].createElement('svg', _extends({
    viewBox: '0 0 ' + DEFAULT_SIZE + ' ' + DEFAULT_SIZE,
    style: _extends({
      fill: fill,
      width: width,
      height: height
    }, style)
  }, props), _react2["default"].createElement('path', {
    d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z'
  }));
};

var SwatchesColor = function SwatchesColor(_ref) {
  var color = _ref.color,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
    onSwatchHover = _ref.onSwatchHover,
    first = _ref.first,
    last = _ref.last,
    active = _ref.active;
  var styles = _default$2({
    'default': {
      color: {
        width: '40px',
        height: '24px',
        cursor: 'pointer',
        background: color,
        marginBottom: '1px'
      },
      check: {
        color: getContrastingColor(color),
        marginLeft: '8px',
        display: 'none'
      }
    },
    'first': {
      color: {
        overflow: 'hidden',
        borderRadius: '2px 2px 0 0'
      }
    },
    'last': {
      color: {
        overflow: 'hidden',
        borderRadius: '0 0 2px 2px'
      }
    },
    'active': {
      check: {
        display: 'block'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd'
      },
      check: {
        color: '#333'
      }
    },
    'transparent': {
      check: {
        color: '#333'
      }
    }
  }, {
    first: first,
    last: last,
    active: active,
    'color-#FFFFFF': color === '#FFFFFF',
    'transparent': color === 'transparent'
  });
  return /*#__PURE__*/React.createElement(Swatch$1, {
    color: color,
    style: styles.color,
    onClick: onClick,
    onHover: onSwatchHover,
    focusStyle: {
      boxShadow: '0 0 4px ' + color
    }
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.check
  }, /*#__PURE__*/React.createElement(_default, null)));
};

var SwatchesGroup = function SwatchesGroup(_ref) {
  var onClick = _ref.onClick,
    onSwatchHover = _ref.onSwatchHover,
    group = _ref.group,
    active = _ref.active;
  var styles = _default$2({
    'default': {
      group: {
        paddingBottom: '10px',
        width: '40px',
        "float": 'left',
        marginRight: '10px'
      }
    }
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.group
  }, map(group, function (color, i) {
    return /*#__PURE__*/React.createElement(SwatchesColor, {
      key: color,
      color: color,
      active: color.toLowerCase() === active,
      first: i === 0,
      last: i === group.length - 1,
      onClick: onClick,
      onSwatchHover: onSwatchHover
    });
  }));
};

var Swatches = function Swatches(_ref) {
  var width = _ref.width,
    height = _ref.height,
    onChange = _ref.onChange,
    onSwatchHover = _ref.onSwatchHover,
    colors = _ref.colors,
    hex = _ref.hex,
    _ref$styles = _ref.styles,
    passedStyles = _ref$styles === undefined ? {} : _ref$styles,
    _ref$className = _ref.className,
    className = _ref$className === undefined ? '' : _ref$className;
  var styles = _default$2(merge$1({
    'default': {
      picker: {
        width: width,
        height: height
      },
      overflow: {
        height: height,
        overflowY: 'scroll'
      },
      body: {
        padding: '16px 0 6px 16px'
      },
      clear: {
        clear: 'both'
      }
    }
  }, passedStyles));
  var handleChange = function handleChange(data, e) {
    return onChange({
      hex: data,
      source: 'hex'
    }, e);
  };
  return /*#__PURE__*/React.createElement('div', {
    style: styles.picker,
    className: 'swatches-picker ' + className
  }, /*#__PURE__*/React.createElement(Raised, null, /*#__PURE__*/React.createElement('div', {
    style: styles.overflow
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.body
  }, map(colors, function (group) {
    return /*#__PURE__*/React.createElement(SwatchesGroup, {
      key: group.toString(),
      group: group,
      active: hex,
      onClick: handleChange,
      onSwatchHover: onSwatchHover
    });
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.clear
  })))));
};
Swatches.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  styles: PropTypes.object

  /* eslint-disable max-len */
};
Swatches.defaultProps = {
  width: 320,
  height: 240,
  colors: [[red['900'], red['700'], red['500'], red['300'], red['100']], [pink['900'], pink['700'], pink['500'], pink['300'], pink['100']], [purple['900'], purple['700'], purple['500'], purple['300'], purple['100']], [deepPurple['900'], deepPurple['700'], deepPurple['500'], deepPurple['300'], deepPurple['100']], [indigo['900'], indigo['700'], indigo['500'], indigo['300'], indigo['100']], [blue['900'], blue['700'], blue['500'], blue['300'], blue['100']], [lightBlue['900'], lightBlue['700'], lightBlue['500'], lightBlue['300'], lightBlue['100']], [cyan['900'], cyan['700'], cyan['500'], cyan['300'], cyan['100']], [teal['900'], teal['700'], teal['500'], teal['300'], teal['100']], ['#194D33', green['700'], green['500'], green['300'], green['100']], [lightGreen['900'], lightGreen['700'], lightGreen['500'], lightGreen['300'], lightGreen['100']], [lime['900'], lime['700'], lime['500'], lime['300'], lime['100']], [yellow['900'], yellow['700'], yellow['500'], yellow['300'], yellow['100']], [amber['900'], amber['700'], amber['500'], amber['300'], amber['100']], [orange['900'], orange['700'], orange['500'], orange['300'], orange['100']], [deepOrange['900'], deepOrange['700'], deepOrange['500'], deepOrange['300'], deepOrange['100']], [brown['900'], brown['700'], brown['500'], brown['300'], brown['100']], [blueGrey['900'], blueGrey['700'], blueGrey['500'], blueGrey['300'], blueGrey['100']], ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF']],
  styles: {}
};
ColorWrap(Swatches);

var Twitter = function Twitter(_ref) {
  var onChange = _ref.onChange,
    onSwatchHover = _ref.onSwatchHover,
    hex = _ref.hex,
    colors = _ref.colors,
    width = _ref.width,
    triangle = _ref.triangle,
    _ref$styles = _ref.styles,
    passedStyles = _ref$styles === undefined ? {} : _ref$styles,
    _ref$className = _ref.className,
    className = _ref$className === undefined ? '' : _ref$className;
  var styles = _default$2(merge$1({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '0 solid rgba(0,0,0,0.25)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
        borderRadius: '4px',
        position: 'relative'
      },
      body: {
        padding: '15px 9px 9px 15px'
      },
      label: {
        fontSize: '18px',
        color: '#fff'
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent #fff transparent',
        position: 'absolute'
      },
      triangleShadow: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
        position: 'absolute'
      },
      hash: {
        background: '#F0F0F0',
        height: '30px',
        width: '30px',
        borderRadius: '4px 0 0 4px',
        "float": 'left',
        color: '#98A1A4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        width: '100px',
        fontSize: '14px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '28px',
        boxShadow: 'inset 0 0 0 1px #F0F0F0',
        boxSizing: 'content-box',
        borderRadius: '0 4px 4px 0',
        "float": 'left',
        paddingLeft: '8px'
      },
      swatch: {
        width: '30px',
        height: '30px',
        "float": 'left',
        borderRadius: '4px',
        margin: '0 6px 6px 0'
      },
      clear: {
        clear: 'both'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      },
      triangleShadow: {
        display: 'none'
      }
    },
    'top-left-triangle': {
      triangle: {
        top: '-10px',
        left: '12px'
      },
      triangleShadow: {
        top: '-11px',
        left: '12px'
      }
    },
    'top-right-triangle': {
      triangle: {
        top: '-10px',
        right: '12px'
      },
      triangleShadow: {
        top: '-11px',
        right: '12px'
      }
    }
  }, passedStyles), {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right'
  });
  var handleChange = function handleChange(hexcode, e) {
    isValidHex(hexcode) && onChange({
      hex: hexcode,
      source: 'hex'
    }, e);
  };
  return /*#__PURE__*/React.createElement('div', {
    style: styles.card,
    className: 'twitter-picker ' + className
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.triangleShadow
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.triangle
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.body
  }, map(colors, function (c, i) {
    return /*#__PURE__*/React.createElement(Swatch$1, {
      key: i,
      color: c,
      hex: c,
      style: styles.swatch,
      onClick: handleChange,
      onHover: onSwatchHover,
      focusStyle: {
        boxShadow: '0 0 4px ' + c
      }
    });
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.hash
  }, '#'), /*#__PURE__*/React.createElement(EditableInput, {
    label: null,
    style: {
      input: styles.input
    },
    value: hex.replace('#', ''),
    onChange: handleChange
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.clear
  })));
};
Twitter.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  triangle: PropTypes.oneOf(['hide', 'top-left', 'top-right']),
  colors: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.object
};
Twitter.defaultProps = {
  width: 276,
  colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
  triangle: 'top-left',
  styles: {}
};
ColorWrap(Twitter);

var GooglePointerCircle = function GooglePointerCircle(props) {
  var styles = _default$2({
    'default': {
      picker: {
        width: '20px',
        height: '20px',
        borderRadius: '22px',
        border: '2px #fff solid',
        transform: 'translate(-12px, -13px)',
        background: 'hsl(' + Math.round(props.hsl.h) + ', ' + Math.round(props.hsl.s * 100) + '%, ' + Math.round(props.hsl.l * 100) + '%)'
      }
    }
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.picker
  });
};
GooglePointerCircle.propTypes = {
  hsl: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    l: PropTypes.number,
    a: PropTypes.number
  })
};
GooglePointerCircle.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: 0.2,
    s: 0.50
  }
};

var GooglePointer = function GooglePointer(props) {
  var styles = _default$2({
    'default': {
      picker: {
        width: '20px',
        height: '20px',
        borderRadius: '22px',
        transform: 'translate(-10px, -7px)',
        background: 'hsl(' + Math.round(props.hsl.h) + ', 100%, 50%)',
        border: '2px white solid'
      }
    }
  });
  return /*#__PURE__*/React.createElement('div', {
    style: styles.picker
  });
};
GooglePointer.propTypes = {
  hsl: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    l: PropTypes.number,
    a: PropTypes.number
  })
};
GooglePointer.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: 0.2,
    s: 0.50
  }
};

var GoogleFields = function GoogleFields(_ref) {
  var onChange = _ref.onChange,
    rgb = _ref.rgb,
    hsl = _ref.hsl,
    hex = _ref.hex,
    hsv = _ref.hsv;
  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.rgb) {
      var values = data.rgb.split(',');
      isvalidColorString(data.rgb, 'rgb') && onChange({
        r: values[0],
        g: values[1],
        b: values[2],
        a: 1,
        source: 'rgb'
      }, e);
    } else if (data.hsv) {
      var _values = data.hsv.split(',');
      if (isvalidColorString(data.hsv, 'hsv')) {
        _values[2] = _values[2].replace('%', '');
        _values[1] = _values[1].replace('%', '');
        _values[0] = _values[0].replace('°', '');
        if (_values[1] == 1) {
          _values[1] = 0.01;
        } else if (_values[2] == 1) {
          _values[2] = 0.01;
        }
        onChange({
          h: Number(_values[0]),
          s: Number(_values[1]),
          v: Number(_values[2]),
          source: 'hsv'
        }, e);
      }
    } else if (data.hsl) {
      var _values2 = data.hsl.split(',');
      if (isvalidColorString(data.hsl, 'hsl')) {
        _values2[2] = _values2[2].replace('%', '');
        _values2[1] = _values2[1].replace('%', '');
        _values2[0] = _values2[0].replace('°', '');
        if (hsvValue[1] == 1) {
          hsvValue[1] = 0.01;
        } else if (hsvValue[2] == 1) {
          hsvValue[2] = 0.01;
        }
        onChange({
          h: Number(_values2[0]),
          s: Number(_values2[1]),
          v: Number(_values2[2]),
          source: 'hsl'
        }, e);
      }
    }
  };
  var styles = _default$2({
    'default': {
      wrap: {
        display: 'flex',
        height: '100px',
        marginTop: '4px'
      },
      fields: {
        width: '100%'
      },
      column: {
        paddingTop: '10px',
        display: 'flex',
        justifyContent: 'space-between'
      },
      "double": {
        padding: '0px 4.4px',
        boxSizing: 'border-box'
      },
      input: {
        width: '100%',
        height: '38px',
        boxSizing: 'border-box',
        padding: '4px 10% 3px',
        textAlign: 'center',
        border: '1px solid #dadce0',
        fontSize: '11px',
        textTransform: 'lowercase',
        borderRadius: '5px',
        outline: 'none',
        fontFamily: 'Roboto,Arial,sans-serif'
      },
      input2: {
        height: '38px',
        width: '100%',
        border: '1px solid #dadce0',
        boxSizing: 'border-box',
        fontSize: '11px',
        textTransform: 'lowercase',
        borderRadius: '5px',
        outline: 'none',
        paddingLeft: '10px',
        fontFamily: 'Roboto,Arial,sans-serif'
      },
      label: {
        textAlign: 'center',
        fontSize: '12px',
        background: '#fff',
        position: 'absolute',
        textTransform: 'uppercase',
        color: '#3c4043',
        width: '35px',
        top: '-6px',
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Roboto,Arial,sans-serif'
      },
      label2: {
        left: '10px',
        textAlign: 'center',
        fontSize: '12px',
        background: '#fff',
        position: 'absolute',
        textTransform: 'uppercase',
        color: '#3c4043',
        width: '32px',
        top: '-6px',
        fontFamily: 'Roboto,Arial,sans-serif'
      },
      single: {
        flexGrow: '1',
        margin: '0px 4.4px'
      }
    }
  });
  var rgbValue = rgb.r + ', ' + rgb.g + ', ' + rgb.b;
  var hslValue = Math.round(hsl.h) + '\xB0, ' + Math.round(hsl.s * 100) + '%, ' + Math.round(hsl.l * 100) + '%';
  var hsvValue = Math.round(hsv.h) + '\xB0, ' + Math.round(hsv.s * 100) + '%, ' + Math.round(hsv.v * 100) + '%';
  return /*#__PURE__*/React.createElement('div', {
    style: styles.wrap,
    className: 'flexbox-fix'
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.fields
  }, /*#__PURE__*/React.createElement('div', {
    style: styles["double"]
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input,
      label: styles.label
    },
    label: 'hex',
    value: hex,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.column
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.single
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input2,
      label: styles.label2
    },
    label: 'rgb',
    value: rgbValue,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.single
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input2,
      label: styles.label2
    },
    label: 'hsv',
    value: hsvValue,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.single
  }, /*#__PURE__*/React.createElement(EditableInput, {
    style: {
      input: styles.input2,
      label: styles.label2
    },
    label: 'hsl',
    value: hslValue,
    onChange: handleChange
  })))));
};

var Google = function Google(_ref) {
  var width = _ref.width,
    onChange = _ref.onChange,
    rgb = _ref.rgb,
    hsl = _ref.hsl,
    hsv = _ref.hsv,
    hex = _ref.hex,
    header = _ref.header,
    _ref$styles = _ref.styles,
    passedStyles = _ref$styles === undefined ? {} : _ref$styles,
    _ref$className = _ref.className,
    className = _ref$className === undefined ? '' : _ref$className;
  var styles = _default$2(merge$1({
    'default': {
      picker: {
        width: width,
        background: '#fff',
        border: '1px solid #dfe1e5',
        boxSizing: 'initial',
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: '8px 8px 0px 0px'
      },
      head: {
        height: '57px',
        width: '100%',
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingLeft: '16px',
        fontSize: '20px',
        boxSizing: 'border-box',
        fontFamily: 'Roboto-Regular,HelveticaNeue,Arial,sans-serif'
      },
      saturation: {
        width: '70%',
        padding: '0px',
        position: 'relative',
        overflow: 'hidden'
      },
      swatch: {
        width: '30%',
        height: '228px',
        padding: '0px',
        background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 1)',
        position: 'relative',
        overflow: 'hidden'
      },
      body: {
        margin: 'auto',
        width: '95%'
      },
      controls: {
        display: 'flex',
        boxSizing: 'border-box',
        height: '52px',
        paddingTop: '22px'
      },
      color: {
        width: '32px'
      },
      hue: {
        height: '8px',
        position: 'relative',
        margin: '0px 16px 0px 16px',
        width: '100%'
      },
      Hue: {
        radius: '2px'
      }
    }
  }, passedStyles));
  return /*#__PURE__*/React.createElement('div', {
    style: styles.picker,
    className: 'google-picker ' + className
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.head
  }, header), /*#__PURE__*/React.createElement('div', {
    style: styles.swatch
  }), /*#__PURE__*/React.createElement('div', {
    style: styles.saturation
  }, /*#__PURE__*/React.createElement(Saturation, {
    hsl: hsl,
    hsv: hsv,
    pointer: GooglePointerCircle,
    onChange: onChange
  })), /*#__PURE__*/React.createElement('div', {
    style: styles.body
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.controls,
    className: 'flexbox-fix'
  }, /*#__PURE__*/React.createElement('div', {
    style: styles.hue
  }, /*#__PURE__*/React.createElement(Hue, {
    style: styles.Hue,
    hsl: hsl,
    radius: '4px',
    pointer: GooglePointer,
    onChange: onChange
  }))), /*#__PURE__*/React.createElement(GoogleFields, {
    rgb: rgb,
    hsl: hsl,
    hex: hex,
    hsv: hsv,
    onChange: onChange
  })));
};
Google.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object,
  header: PropTypes.string
};
Google.defaultProps = {
  width: 652,
  styles: {},
  header: 'Color picker'
};
ColorWrap(Google);

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".formake-color-component-box {\n  width: 100%;\n  height: 30px;\n  position: relative;\n}\n.formake-color-component-box .color-view-box {\n  width: 100%;\n  max-width: 100px;\n  height: 100%;\n  border: 1px solid #333333;\n}\n.formake-color-component-box .color-view-box.color-view-box-disabled {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.react-color-panel-popover-wrap .ant-popover-inner {\n  padding: 0;\n}\n";
styleInject(css_248z);

function Color(props) {
  var _useState = useState('transparent'),
    _useState2 = _slicedToArray(_useState, 2),
    color = _useState2[0],
    setColor = _useState2[1];
  var value = props.value,
    onChange = props.onChange,
    disabled = props.disabled;
  useEffect(function () {
    setColor(value);
  }, []);
  var handleColorChange = useCallback(function (colorPanel) {
    var _ref = colorPanel.rgb || {},
      r = _ref.r,
      g = _ref.g,
      b = _ref.b,
      a = _ref.a;
    var formatColor = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
    setColor(formatColor);
    onChange(formatColor);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "formake-color-component-box"
  }, /*#__PURE__*/React.createElement(Popover, {
    content: function content() {
      return /*#__PURE__*/React.createElement(SketchPicker, {
        className: "react-color-panel",
        color: color,
        onChangeComplete: handleColorChange
      });
    },
    trigger: "click",
    overlayClassName: "react-color-panel-popover-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "color-view-box ".concat(disabled ? 'color-view-box-disabled' : ''),
    style: {
      background: color
    },
    disabled: disabled
  })));
}

var _excluded$2 = ["rowCol"];
function RowContainer$1(props) {
  var items = props.items,
    isEditor = props.isEditor,
    formItemPropsList = props.formItemPropsList,
    _props$column = props.column,
    column = _props$column === void 0 ? 1 : _props$column,
    className = props.className,
    listName = props.listName;
  var rowItemColSpan = 24 / column;
  return /*#__PURE__*/React.createElement(Row, {
    className: "form-row-container-item ".concat(className),
    gutter: [1, 0]
  }, items.map(function (formItemConfig, index) {
    var _formItemConfig$rowCo = formItemConfig.rowCol,
      rowCol = _formItemConfig$rowCo === void 0 ? {
        span: rowItemColSpan
      } : _formItemConfig$rowCo,
      rest = _objectWithoutProperties$2(formItemConfig, _excluded$2);
    return /*#__PURE__*/React.createElement(Col, _extends$f({
      className: "form-row-container-item-col",
      key: index
    }, rowCol), /*#__PURE__*/React.createElement(GenerateFormItem, {
      isEditor: isEditor,
      formItemConfig: rest,
      formItemPropsList: formItemPropsList,
      listName: listName
    }));
  }));
}

function ColContainer(props) {
  var items = props.items,
    isEditor = props.isEditor,
    formItemPropsList = props.formItemPropsList,
    className = props.className,
    _props$columnCol = props.columnCol,
    columnCol = _props$columnCol === void 0 ? {} : _props$columnCol,
    listName = props.listName;
  return /*#__PURE__*/React.createElement(Col, _extends$f({
    className: "form-row-container-item ".concat(className)
  }, columnCol), items.map(function (formItemConfig, index) {
    return /*#__PURE__*/React.createElement(GenerateFormItem, {
      key: index,
      isEditor: isEditor,
      formItemConfig: formItemConfig,
      formItemPropsList: formItemPropsList,
      listName: listName,
      isContainer: true
    });
  }));
}

var _excluded$1 = ["tabTitle"];
function TabContainer(props) {
  var items = props.items,
    isEditor = props.isEditor,
    formItemPropsList = props.formItemPropsList,
    className = props.className,
    listName = props.listName;
  var _useState = useState('0'),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    tabItems = _useState4[0],
    setTabItems = _useState4[1];
  var onTabChange = useCallback(function (type) {
    setActiveTab(type);
  }, []);
  useEffect(function () {
    var curTabItems = items.map(function (item, index) {
      return {
        key: "".concat(index),
        label: item.tabTitle
      };
    });
    setTabItems(_toConsumableArray(curTabItems));
  }, [items]);
  return /*#__PURE__*/React.createElement("div", {
    className: "form-tab-row-container ".concat(className)
  }, /*#__PURE__*/React.createElement(Tabs, {
    activeKey: activeTab,
    items: tabItems,
    onChange: onTabChange,
    type: "card",
    className: "formake-antd-tab-bar",
    size: "middle"
  }), items.map(function (formItemConfig, index) {
    formItemConfig.tabTitle;
      var rest = _objectWithoutProperties$2(formItemConfig, _excluded$1);
    var hidden = activeTab !== "".concat(index);
    return /*#__PURE__*/React.createElement(GenerateFormItem, {
      key: index,
      isEditor: isEditor,
      formItemConfig: rest,
      hidden: hidden,
      formItemPropsList: formItemPropsList,
      listName: listName
    });
  }));
}

function RowContainer(props) {
  var items = props.items,
    isEditor = props.isEditor,
    formItemPropsList = props.formItemPropsList,
    className = props.className,
    param = props.param;
  return /*#__PURE__*/React.createElement(Form.List, {
    name: param,
    className: "form-array-row-container ".concat(className)
  }, function (fields, _ref) {
    var add = _ref.add,
      remove = _ref.remove;
    return /*#__PURE__*/React.createElement(React.Fragment, null, fields.map(function (field) {
      return /*#__PURE__*/React.createElement(Space, {
        key: field.key,
        align: "baseline"
      }, items.map(function (formItemConfig, index) {
        return /*#__PURE__*/React.createElement(GenerateFormItem, {
          key: index,
          isEditor: isEditor,
          formItemConfig: formItemConfig,
          formItemPropsList: formItemPropsList,
          listName: field.name
        });
      }), /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick() {
          return remove(field.name);
        }
      }, "-"));
    }), /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Button, {
      type: "dashed",
      onClick: function onClick() {
        return add();
      },
      block: true
    }, "\u6DFB\u52A0")));
  });
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
}, {
  marktype: 'color',
  component: Color
}];
var containerFormItemList = [{
  marktype: 'rowContainer',
  component: RowContainer$1
}, {
  marktype: 'columnContainer',
  component: ColContainer
}, {
  marktype: 'tabContainer',
  component: TabContainer
}, {
  marktype: 'listContainer',
  component: RowContainer
}];
var allFormItemList = FormItemList.concat(containerFormItemList);
var ComponentMap = transformObjectToMap(allFormItemList, 'marktype', 'component');
var containerMarkTypes = containerFormItemList.map(function (item) {
  return item.marktype;
});
FormItemList.map(function (item) {
  return item.marktype;
});
var allMarkTypes = allFormItemList.map(function (item) {
  return item.marktype;
});

var FormItem = Form.Item;
function GenerateFormItem(props) {
  var formItemConfig = props.formItemConfig,
    _props$isEditor = props.isEditor,
    isEditor = _props$isEditor === void 0 ? true : _props$isEditor,
    formItemPropsList = props.formItemPropsList,
    hidden = props.hidden,
    listName = props.listName;
  var rules = formItemConfig.rules,
    marktype = formItemConfig.marktype;
  var DynamicFormItem = ComponentMap.get(formItemConfig.marktype) || null;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    disabled = _useState2[0],
    setDisabled = _useState2[1];
  useEffect(function () {
    var nextDisabled = isEditor ? formItemConfig.disabled : true;
    if (nextDisabled !== undefined) {
      setDisabled(nextDisabled);
    }
  }, [formItemConfig.disabled, isEditor]);
  rules = useMemo(function () {
    return rules && rules.length > 0 ? rules.map(function (item) {
      if (item.validator && typeof item.validator === 'string') {
        item.validator = new Function('rule', 'value', item.validator);
      }
      return item;
    }) : [];
  }, [rules]);
  var formItemCfg = generateObjFromKeys(formItemConfig, formItemPropsList);
  var comCfg = filterObj(formItemConfig, [].concat(_toConsumableArray(formItemPropsList), ['eventConfig']));
  if (listName !== undefined && marktype === 'listContainer') {
    throw new Error('listContainer类型不支持嵌套listContainer类型');
  }
  if (containerMarkTypes.includes(marktype)) {
    return /*#__PURE__*/React.createElement(FormItem, _extends$f({}, formItemCfg, {
      hidden: hidden,
      rules: rules,
      style: {
        marginBottom: 0
      }
    }), /*#__PURE__*/React.createElement(DynamicFormItem, _extends$f({}, comCfg, {
      isEditor: isEditor,
      formItemPropsList: formItemPropsList,
      disabled: disabled,
      listName: listName
    })));
  }
  return DynamicFormItem ? /*#__PURE__*/React.createElement(FormItem, _extends$f({}, formItemCfg, {
    name: listName !== undefined ? [listName, formItemConfig.param] : formItemConfig.param,
    hidden: hidden,
    rules: rules
  }), /*#__PURE__*/React.createElement(DynamicFormItem, _extends$f({}, comCfg, {
    disabled: disabled
  }))) : /*#__PURE__*/React.createElement(FormItem, _extends$f({}, formItemCfg, {
    style: {
      color: 'red'
    }
  }), "\u4E0D\u652F\u6301", formItemConfig.marktype, "\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E");
}

function GenerateFormItems(props) {
  var isEditor = props.isEditor,
    formData = props.formData,
    formItemPropsList = props.formItemPropsList;
  return formData.map(function (formItemConfig, index) {
    return /*#__PURE__*/React.createElement(GenerateFormItem, {
      formItemPropsList: formItemPropsList,
      formItemConfig: formItemConfig,
      key: index,
      isEditor: isEditor
    });
  });
}

var _excluded = ["isEditor", "children"];
var GenerateForm = /*#__PURE__*/function (_Component) {
  _inherits$a(GenerateForm, _Component);
  var _super = _createSuper(GenerateForm);
  function GenerateForm(props) {
    var _this;
    _classCallCheck$a(this, GenerateForm);
    _this = _super.call(this, props);
    _defineProperty$2(_assertThisInitialized(_this), "state", {
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
  _createClass$8(GenerateForm, [{
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
    value: function componentDidUpdate() {
      var form = this.props.form;
      if (form && form.isWatchForm) {
        var store = form.store;
        store.set('activeFormConfig', this.state.activeFormData);
      }
    }
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
      var activeFormData = dc(originFormData);
      var eventMap = {};
      changeParams.forEach(function (param) {
        var formItemConfig = getDeepFormItemConfig(originFormData, param) || {};
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
          var _ref = filter.find(function (item) {
              return item.triggerValue.includes(value);
            }) || {},
            _ref$hideFields = _ref.hideFields,
            hideFields = _ref$hideFields === void 0 ? [] : _ref$hideFields; // 找到当前规则
          filterFields(activeFormData, hideFields); // 在指定的表单项中，显示规则中包含的表单项
        }

        // 执行modify
        if (modify) {
          var actions = modify.filter(function (item) {
            return item.triggerValue.includes(value);
          }) || []; // 找到当前规则
          actions.forEach(function (item) {
            modifyFields(activeFormData, item);
          });
        }
      };
      for (var _i = 0, _Object$entries = Object.entries(eventMap); _i < _Object$entries.length; _i++) {
        _loop();
      }
      this.setState({
        activeFormData: activeFormData
      });
      function getDeepFormItemConfig(originFormData, param) {
        var _iterator = _createForOfIteratorHelper(originFormData),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            if (item.param === param) {
              if (item.marktype.indexOf('Container') > -1 && item.marktype !== 'listContainer') {
                return null;
              }
              return item;
            }
            if (item.items && item.marktype !== 'listContainer') {
              // listContainer不进行遍历
              var formConfig = getDeepFormItemConfig(item.items, param);
              if (formConfig !== undefined) {
                return formConfig;
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      function filterFields(activeFormData, hideFields) {
        for (var i = 0; i < activeFormData.length; i++) {
          if (hideFields.includes(activeFormData[i].param)) {
            activeFormData.splice(i, 1);
          } else {
            if (activeFormData[i].items && activeFormData[i].items.length > 0) {
              filterFields(activeFormData[i].items, hideFields);
            }
          }
        }
      }
      function modifyFields(activeFormData, newItem) {
        for (var i = 0; i < activeFormData.length; i++) {
          if (newItem.modifyField === activeFormData[i].param && activeFormData[i].marktype.indexOf('Container') === -1) {
            // 校验规则更新，选项更新，是否禁用更新
            if (newItem.newFormItemConfig) {
              activeFormData[i] = _objectSpread2(_objectSpread2({}, activeFormData[i]), newItem.newFormItemConfig);
            }

            // 值更新
            if (newItem.newValue) {
              form.setFieldValue(newItem.modifyField, newItem.newValue);
            }
            return;
          }
          if (activeFormData[i].items && activeFormData[i].items.length > 0) {
            modifyFields(activeFormData[i].items, newItem);
          }
        }
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
        rest = _objectWithoutProperties$2(_this$props2, _excluded);
      var _this$state = this.state,
        formError = _this$state.formError,
        activeFormData = _this$state.activeFormData;
      var formProps = filterObj(rest, ['formData', 'useEvent', 'formItemPropsList']);
      return /*#__PURE__*/React.createElement("div", null, !formError ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form, _extends$f({
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
        formItemPropsList: this.props.formItemPropsList
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
_defineProperty$2(GenerateForm, "defaultProps", {
  formData: [],
  wrapperCol: {
    span: 6
  },
  labelCol: {
    span: 18
  },
  formItemPropsList: ['colon', 'extra', 'getValueFromEvent', 'getValueProps', 'hasFeedback', 'help', 'hidden', 'htmlFor', 'initialValue', 'label', 'labelAlign', 'labelCol', 'messageVariables', 'name', 'normalize', 'noStyle', 'preserve', 'required', 'rules', 'shouldUpdate', 'tooltip', 'triggervalidateFirst', 'validateStatus', 'validateTrigger', 'valuePropName', 'wrapperCol']
});

function getValueFromConfig() {
  var formItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var newObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  formItems.forEach(function (item) {
    if (allMarkTypes.includes(item.marktype)) {
      // 格式化容器
      if (containerMarkTypes.includes(item.marktype)) {
        if (item.marktype !== 'listContainer') {
          newObj[item.param] = {};
          newObj[item.param] = getValueFromConfig(item.items, values, newObj[item.param]);
        } else {
          newObj[item.param] = [];
          if (values[item.param] && values[item.param].length > 0) {
            values[item.param].forEach(function (valueItem, index) {
              newObj[item.param][index] = {};
              newObj[item.param][index] = getValueFromConfig(item.items, valueItem, newObj[item.param][index]);
            });
          }
        }
      } else {
        // 格式化非容器
        newObj[item.param] = values[item.param];
      }
    }
  });
  return newObj;
}

function flatFormValues(values) {
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Object.keys(values).forEach(function (key) {
    if (isArray$e(values[key])) {
      result[key] = [];
      if (values[key].length > 0) {
        values[key].forEach(function (item, index) {
          if (isObject$8(item)) {
            result[key][index] = {};
            flatFormValues(item, result[key][index]);
          }
        });
      }
    } else if (isObject$8(values[key])) {
      flatFormValues(values[key], result);
    } else {
      result[key] = values[key];
    }
  });
  return result;
}

function useWatchForm() {
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    formInstance = _Form$useForm2[0];
  var newForm = useMemo(function () {
    var eventCenter = new EventCenter();
    var store = new Map();
    var composeForm = new Proxy(formInstance, {
      get: function get(target, propKey, receiver) {
        if (propKey === 'setFieldValue') {
          var fn = Reflect.get(target, propKey, receiver);
          return function (field, value) {
            fn(field, value); // form.getFieldsValue()已经可以获取到值
            eventCenter.emit(_defineProperty$2({}, field, value));
          };
        }
        if (propKey === 'setFieldsValue') {
          var _fn = Reflect.get(target, propKey, receiver);
          return function (values) {
            _fn(values); // form.getFieldsValue()已经可以获取到值
            eventCenter.emit(values);
          };
        }
        if (propKey === 'setFormatFieldsValue') {
          return function () {
            var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var flatValue = flatFormValues(values);
            composeForm.setFieldsValue(flatValue);
          };
        }
        if (propKey === 'getFormatFieldsValue') {
          return function () {
            var data = composeForm.getFieldsValue();
            var activeFormConfig = composeForm.store.get('activeFormConfig');
            if (activeFormConfig) {
              var formatData = getValueFromConfig(activeFormConfig, data);
              return formatData;
            }
            return data;
          };
        }
        return Reflect.get(target, propKey, receiver);
      }
    });

    // 将事件中心赋值给form实例 组合成抽象的form实例导出 用户是无感知
    composeForm.formInstanceEventCenter = eventCenter;
    composeForm.isWatchForm = true;
    composeForm.store = store;
    return composeForm;
  }, [formInstance]);
  return [newForm];
}

export { GenerateForm, GenerateFormItems, GenerateForm as default, useWatchForm };
