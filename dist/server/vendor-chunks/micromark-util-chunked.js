"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-chunked";
exports.ids = ["vendor-chunks/micromark-util-chunked"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-util-chunked/dev/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark-util-chunked/dev/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   push: () => (/* binding */ push),\n/* harmony export */   splice: () => (/* binding */ splice)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/constants.js\");\n\n\n/**\n * Like `Array#splice`, but smarter for giant arrays.\n *\n * `Array#splice` takes all items to be inserted as individual argument which\n * causes a stack overflow in V8 when trying to insert 100k items for instance.\n *\n * Otherwise, this does not return the removed items, and takes `items` as an\n * array instead of rest parameters.\n *\n * @template {unknown} T\n *   Item type.\n * @param {Array<T>} list\n *   List to operate on.\n * @param {number} start\n *   Index to remove/insert at (can be negative).\n * @param {number} remove\n *   Number of items to remove.\n * @param {Array<T>} items\n *   Items to inject into `list`.\n * @returns {undefined}\n *   Nothing.\n */\nfunction splice(list, start, remove, items) {\n  const end = list.length\n  let chunkStart = 0\n  /** @type {Array<unknown>} */\n  let parameters\n\n  // Make start between zero and `end` (included).\n  if (start < 0) {\n    start = -start > end ? 0 : end + start\n  } else {\n    start = start > end ? end : start\n  }\n\n  remove = remove > 0 ? remove : 0\n\n  // No need to chunk the items if there’s only a couple (10k) items.\n  if (items.length < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize) {\n    parameters = Array.from(items)\n    parameters.unshift(start, remove)\n    // @ts-expect-error Hush, it’s fine.\n    list.splice(...parameters)\n  } else {\n    // Delete `remove` items starting from `start`\n    if (remove) list.splice(start, remove)\n\n    // Insert the items in chunks to not cause stack overflows.\n    while (chunkStart < items.length) {\n      parameters = items.slice(\n        chunkStart,\n        chunkStart + micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize\n      )\n      parameters.unshift(start, 0)\n      // @ts-expect-error Hush, it’s fine.\n      list.splice(...parameters)\n\n      chunkStart += micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize\n      start += micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize\n    }\n  }\n}\n\n/**\n * Append `items` (an array) at the end of `list` (another array).\n * When `list` was empty, returns `items` instead.\n *\n * This prevents a potentially expensive operation when `list` is empty,\n * and adds items in batches to prevent V8 from hanging.\n *\n * @template {unknown} T\n *   Item type.\n * @param {Array<T>} list\n *   List to operate on.\n * @param {Array<T>} items\n *   Items to add to `list`.\n * @returns {Array<T>}\n *   Either `list` or `items`.\n */\nfunction push(list, items) {\n  if (list.length > 0) {\n    splice(list, list.length, 0, items)\n    return list\n  }\n\n  return items\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2h1bmtlZC9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLDREQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDREQUFTO0FBQzdCLGVBQWUsNERBQVM7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3Jmb2xpby8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1jaHVua2VkL2Rldi9pbmRleC5qcz83ZTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29uc3RhbnRzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wnXG5cbi8qKlxuICogTGlrZSBgQXJyYXkjc3BsaWNlYCwgYnV0IHNtYXJ0ZXIgZm9yIGdpYW50IGFycmF5cy5cbiAqXG4gKiBgQXJyYXkjc3BsaWNlYCB0YWtlcyBhbGwgaXRlbXMgdG8gYmUgaW5zZXJ0ZWQgYXMgaW5kaXZpZHVhbCBhcmd1bWVudCB3aGljaFxuICogY2F1c2VzIGEgc3RhY2sgb3ZlcmZsb3cgaW4gVjggd2hlbiB0cnlpbmcgdG8gaW5zZXJ0IDEwMGsgaXRlbXMgZm9yIGluc3RhbmNlLlxuICpcbiAqIE90aGVyd2lzZSwgdGhpcyBkb2VzIG5vdCByZXR1cm4gdGhlIHJlbW92ZWQgaXRlbXMsIGFuZCB0YWtlcyBgaXRlbXNgIGFzIGFuXG4gKiBhcnJheSBpbnN0ZWFkIG9mIHJlc3QgcGFyYW1ldGVycy5cbiAqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFRcbiAqICAgSXRlbSB0eXBlLlxuICogQHBhcmFtIHtBcnJheTxUPn0gbGlzdFxuICogICBMaXN0IHRvIG9wZXJhdGUgb24uXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnRcbiAqICAgSW5kZXggdG8gcmVtb3ZlL2luc2VydCBhdCAoY2FuIGJlIG5lZ2F0aXZlKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSByZW1vdmVcbiAqICAgTnVtYmVyIG9mIGl0ZW1zIHRvIHJlbW92ZS5cbiAqIEBwYXJhbSB7QXJyYXk8VD59IGl0ZW1zXG4gKiAgIEl0ZW1zIHRvIGluamVjdCBpbnRvIGBsaXN0YC5cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKiAgIE5vdGhpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UobGlzdCwgc3RhcnQsIHJlbW92ZSwgaXRlbXMpIHtcbiAgY29uc3QgZW5kID0gbGlzdC5sZW5ndGhcbiAgbGV0IGNodW5rU3RhcnQgPSAwXG4gIC8qKiBAdHlwZSB7QXJyYXk8dW5rbm93bj59ICovXG4gIGxldCBwYXJhbWV0ZXJzXG5cbiAgLy8gTWFrZSBzdGFydCBiZXR3ZWVuIHplcm8gYW5kIGBlbmRgIChpbmNsdWRlZCkuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGVuZCA/IDAgOiBlbmQgKyBzdGFydFxuICB9IGVsc2Uge1xuICAgIHN0YXJ0ID0gc3RhcnQgPiBlbmQgPyBlbmQgOiBzdGFydFxuICB9XG5cbiAgcmVtb3ZlID0gcmVtb3ZlID4gMCA/IHJlbW92ZSA6IDBcblxuICAvLyBObyBuZWVkIHRvIGNodW5rIHRoZSBpdGVtcyBpZiB0aGVyZeKAmXMgb25seSBhIGNvdXBsZSAoMTBrKSBpdGVtcy5cbiAgaWYgKGl0ZW1zLmxlbmd0aCA8IGNvbnN0YW50cy52OE1heFNhZmVDaHVua1NpemUpIHtcbiAgICBwYXJhbWV0ZXJzID0gQXJyYXkuZnJvbShpdGVtcylcbiAgICBwYXJhbWV0ZXJzLnVuc2hpZnQoc3RhcnQsIHJlbW92ZSlcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIEh1c2gsIGl04oCZcyBmaW5lLlxuICAgIGxpc3Quc3BsaWNlKC4uLnBhcmFtZXRlcnMpXG4gIH0gZWxzZSB7XG4gICAgLy8gRGVsZXRlIGByZW1vdmVgIGl0ZW1zIHN0YXJ0aW5nIGZyb20gYHN0YXJ0YFxuICAgIGlmIChyZW1vdmUpIGxpc3Quc3BsaWNlKHN0YXJ0LCByZW1vdmUpXG5cbiAgICAvLyBJbnNlcnQgdGhlIGl0ZW1zIGluIGNodW5rcyB0byBub3QgY2F1c2Ugc3RhY2sgb3ZlcmZsb3dzLlxuICAgIHdoaWxlIChjaHVua1N0YXJ0IDwgaXRlbXMubGVuZ3RoKSB7XG4gICAgICBwYXJhbWV0ZXJzID0gaXRlbXMuc2xpY2UoXG4gICAgICAgIGNodW5rU3RhcnQsXG4gICAgICAgIGNodW5rU3RhcnQgKyBjb25zdGFudHMudjhNYXhTYWZlQ2h1bmtTaXplXG4gICAgICApXG4gICAgICBwYXJhbWV0ZXJzLnVuc2hpZnQoc3RhcnQsIDApXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIEh1c2gsIGl04oCZcyBmaW5lLlxuICAgICAgbGlzdC5zcGxpY2UoLi4ucGFyYW1ldGVycylcblxuICAgICAgY2h1bmtTdGFydCArPSBjb25zdGFudHMudjhNYXhTYWZlQ2h1bmtTaXplXG4gICAgICBzdGFydCArPSBjb25zdGFudHMudjhNYXhTYWZlQ2h1bmtTaXplXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQXBwZW5kIGBpdGVtc2AgKGFuIGFycmF5KSBhdCB0aGUgZW5kIG9mIGBsaXN0YCAoYW5vdGhlciBhcnJheSkuXG4gKiBXaGVuIGBsaXN0YCB3YXMgZW1wdHksIHJldHVybnMgYGl0ZW1zYCBpbnN0ZWFkLlxuICpcbiAqIFRoaXMgcHJldmVudHMgYSBwb3RlbnRpYWxseSBleHBlbnNpdmUgb3BlcmF0aW9uIHdoZW4gYGxpc3RgIGlzIGVtcHR5LFxuICogYW5kIGFkZHMgaXRlbXMgaW4gYmF0Y2hlcyB0byBwcmV2ZW50IFY4IGZyb20gaGFuZ2luZy5cbiAqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFRcbiAqICAgSXRlbSB0eXBlLlxuICogQHBhcmFtIHtBcnJheTxUPn0gbGlzdFxuICogICBMaXN0IHRvIG9wZXJhdGUgb24uXG4gKiBAcGFyYW0ge0FycmF5PFQ+fSBpdGVtc1xuICogICBJdGVtcyB0byBhZGQgdG8gYGxpc3RgLlxuICogQHJldHVybnMge0FycmF5PFQ+fVxuICogICBFaXRoZXIgYGxpc3RgIG9yIGBpdGVtc2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGxpc3QsIGl0ZW1zKSB7XG4gIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICBzcGxpY2UobGlzdCwgbGlzdC5sZW5ndGgsIDAsIGl0ZW1zKVxuICAgIHJldHVybiBsaXN0XG4gIH1cblxuICByZXR1cm4gaXRlbXNcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-util-chunked/dev/index.js\n");

/***/ })

};
;