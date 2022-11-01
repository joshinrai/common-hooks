function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useState, useCallback } from 'react';

var useDocCopy = function useDocCopy(message, text) {
  var _useState = useState(text !== null && text !== void 0 ? text : ''),
      _useState2 = _slicedToArray(_useState, 2),
      content = _useState2[0],
      setContent = _useState2[1];

  return {
    setContent: setContent,
    setCopy: useCallback(function () {
      var _textarea$select, _message$success, _textarea$remove;

      var textarea = document.createElement('textarea');
      document.body.appendChild(textarea);
      textarea.style.position = 'absolute';
      textarea.style.clip = 'rect(0 0 0 0)';
      textarea.value = content;
      textarea === null || textarea === void 0 ? void 0 : (_textarea$select = textarea.select) === null || _textarea$select === void 0 ? void 0 : _textarea$select.call(textarea);
      document.execCommand('copy');
      message === null || message === void 0 ? void 0 : (_message$success = message.success) === null || _message$success === void 0 ? void 0 : _message$success.call(message, '复制成功');
      textarea === null || textarea === void 0 ? void 0 : (_textarea$remove = textarea.remove) === null || _textarea$remove === void 0 ? void 0 : _textarea$remove.call(textarea);
    }, [content])
  };
};

export default useDocCopy;