"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/dequal";
exports.ids = ["vendor-chunks/dequal"];
exports.modules = {

/***/ "(rsc)/./node_modules/dequal/dist/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/dequal/dist/index.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dequal: () => (/* binding */ dequal)\n/* harmony export */ });\nvar has = Object.prototype.hasOwnProperty;\n\nfunction find(iter, tar, key) {\n\tfor (key of iter.keys()) {\n\t\tif (dequal(key, tar)) return key;\n\t}\n}\n\nfunction dequal(foo, bar) {\n\tvar ctor, len, tmp;\n\tif (foo === bar) return true;\n\n\tif (foo && bar && (ctor=foo.constructor) === bar.constructor) {\n\t\tif (ctor === Date) return foo.getTime() === bar.getTime();\n\t\tif (ctor === RegExp) return foo.toString() === bar.toString();\n\n\t\tif (ctor === Array) {\n\t\t\tif ((len=foo.length) === bar.length) {\n\t\t\t\twhile (len-- && dequal(foo[len], bar[len]));\n\t\t\t}\n\t\t\treturn len === -1;\n\t\t}\n\n\t\tif (ctor === Set) {\n\t\t\tif (foo.size !== bar.size) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tfor (len of foo) {\n\t\t\t\ttmp = len;\n\t\t\t\tif (tmp && typeof tmp === 'object') {\n\t\t\t\t\ttmp = find(bar, tmp);\n\t\t\t\t\tif (!tmp) return false;\n\t\t\t\t}\n\t\t\t\tif (!bar.has(tmp)) return false;\n\t\t\t}\n\t\t\treturn true;\n\t\t}\n\n\t\tif (ctor === Map) {\n\t\t\tif (foo.size !== bar.size) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tfor (len of foo) {\n\t\t\t\ttmp = len[0];\n\t\t\t\tif (tmp && typeof tmp === 'object') {\n\t\t\t\t\ttmp = find(bar, tmp);\n\t\t\t\t\tif (!tmp) return false;\n\t\t\t\t}\n\t\t\t\tif (!dequal(len[1], bar.get(tmp))) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn true;\n\t\t}\n\n\t\tif (ctor === ArrayBuffer) {\n\t\t\tfoo = new Uint8Array(foo);\n\t\t\tbar = new Uint8Array(bar);\n\t\t} else if (ctor === DataView) {\n\t\t\tif ((len=foo.byteLength) === bar.byteLength) {\n\t\t\t\twhile (len-- && foo.getInt8(len) === bar.getInt8(len));\n\t\t\t}\n\t\t\treturn len === -1;\n\t\t}\n\n\t\tif (ArrayBuffer.isView(foo)) {\n\t\t\tif ((len=foo.byteLength) === bar.byteLength) {\n\t\t\t\twhile (len-- && foo[len] === bar[len]);\n\t\t\t}\n\t\t\treturn len === -1;\n\t\t}\n\n\t\tif (!ctor || typeof foo === 'object') {\n\t\t\tlen = 0;\n\t\t\tfor (ctor in foo) {\n\t\t\t\tif (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;\n\t\t\t\tif (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;\n\t\t\t}\n\t\t\treturn Object.keys(bar).length === len;\n\t\t}\n\t}\n\n\treturn foo !== foo && bar !== bar;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZGVxdWFsL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9yZm9saW8vLi9ub2RlX21vZHVsZXMvZGVxdWFsL2Rpc3QvaW5kZXgubWpzP2RlOWMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGZpbmQoaXRlciwgdGFyLCBrZXkpIHtcblx0Zm9yIChrZXkgb2YgaXRlci5rZXlzKCkpIHtcblx0XHRpZiAoZGVxdWFsKGtleSwgdGFyKSkgcmV0dXJuIGtleTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVxdWFsKGZvbywgYmFyKSB7XG5cdHZhciBjdG9yLCBsZW4sIHRtcDtcblx0aWYgKGZvbyA9PT0gYmFyKSByZXR1cm4gdHJ1ZTtcblxuXHRpZiAoZm9vICYmIGJhciAmJiAoY3Rvcj1mb28uY29uc3RydWN0b3IpID09PSBiYXIuY29uc3RydWN0b3IpIHtcblx0XHRpZiAoY3RvciA9PT0gRGF0ZSkgcmV0dXJuIGZvby5nZXRUaW1lKCkgPT09IGJhci5nZXRUaW1lKCk7XG5cdFx0aWYgKGN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGZvby50b1N0cmluZygpID09PSBiYXIudG9TdHJpbmcoKTtcblxuXHRcdGlmIChjdG9yID09PSBBcnJheSkge1xuXHRcdFx0aWYgKChsZW49Zm9vLmxlbmd0aCkgPT09IGJhci5sZW5ndGgpIHtcblx0XHRcdFx0d2hpbGUgKGxlbi0tICYmIGRlcXVhbChmb29bbGVuXSwgYmFyW2xlbl0pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmIChjdG9yID09PSBTZXQpIHtcblx0XHRcdGlmIChmb28uc2l6ZSAhPT0gYmFyLnNpemUpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZW4gb2YgZm9vKSB7XG5cdFx0XHRcdHRtcCA9IGxlbjtcblx0XHRcdFx0aWYgKHRtcCAmJiB0eXBlb2YgdG1wID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHRtcCA9IGZpbmQoYmFyLCB0bXApO1xuXHRcdFx0XHRcdGlmICghdG1wKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFiYXIuaGFzKHRtcCkpIHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChjdG9yID09PSBNYXApIHtcblx0XHRcdGlmIChmb28uc2l6ZSAhPT0gYmFyLnNpemUpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZW4gb2YgZm9vKSB7XG5cdFx0XHRcdHRtcCA9IGxlblswXTtcblx0XHRcdFx0aWYgKHRtcCAmJiB0eXBlb2YgdG1wID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHRtcCA9IGZpbmQoYmFyLCB0bXApO1xuXHRcdFx0XHRcdGlmICghdG1wKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFkZXF1YWwobGVuWzFdLCBiYXIuZ2V0KHRtcCkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gQXJyYXlCdWZmZXIpIHtcblx0XHRcdGZvbyA9IG5ldyBVaW50OEFycmF5KGZvbyk7XG5cdFx0XHRiYXIgPSBuZXcgVWludDhBcnJheShiYXIpO1xuXHRcdH0gZWxzZSBpZiAoY3RvciA9PT0gRGF0YVZpZXcpIHtcblx0XHRcdGlmICgobGVuPWZvby5ieXRlTGVuZ3RoKSA9PT0gYmFyLmJ5dGVMZW5ndGgpIHtcblx0XHRcdFx0d2hpbGUgKGxlbi0tICYmIGZvby5nZXRJbnQ4KGxlbikgPT09IGJhci5nZXRJbnQ4KGxlbikpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxlbiA9PT0gLTE7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5QnVmZmVyLmlzVmlldyhmb28pKSB7XG5cdFx0XHRpZiAoKGxlbj1mb28uYnl0ZUxlbmd0aCkgPT09IGJhci5ieXRlTGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBmb29bbGVuXSA9PT0gYmFyW2xlbl0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxlbiA9PT0gLTE7XG5cdFx0fVxuXG5cdFx0aWYgKCFjdG9yIHx8IHR5cGVvZiBmb28gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRsZW4gPSAwO1xuXHRcdFx0Zm9yIChjdG9yIGluIGZvbykge1xuXHRcdFx0XHRpZiAoaGFzLmNhbGwoZm9vLCBjdG9yKSAmJiArK2xlbiAmJiAhaGFzLmNhbGwoYmFyLCBjdG9yKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZiAoIShjdG9yIGluIGJhcikgfHwgIWRlcXVhbChmb29bY3Rvcl0sIGJhcltjdG9yXSkpIHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyhiYXIpLmxlbmd0aCA9PT0gbGVuO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmb28gIT09IGZvbyAmJiBiYXIgIT09IGJhcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/dequal/dist/index.mjs\n");

/***/ })

};
;