(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["app"] = factory();
	else
		root["app"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/app/interface/userInterface.js":
/*!********************************************!*\
  !*** ./lib/app/interface/userInterface.js ***!
  \********************************************/
/*! exports provided: userInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInterface", function() { return userInterface; });
/* harmony import */ var _websocket_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/client */ "./lib/app/websocket/client.js");




let UserInterface = function () {
  this.button = {
    login: document.getElementById('login'),
    post: document.getElementById('post')
  };
};

let userInterface = new UserInterface();
window.userInterface = userInterface;

UserInterface.prototype.setupUserInterface = function setupUserInterface() {
  userInterface = new UserInterface();
  window.userInterface = userInterface;
  userInterface.setupButtons();
};

UserInterface.prototype.setupButtons = function setupButtons() {
  userInterface.button.login.onclick = function () {
    _websocket_client__WEBPACK_IMPORTED_MODULE_0__["client"].socket.emit('login');
  };

  userInterface.button.post.onclick = function () {
    _websocket_client__WEBPACK_IMPORTED_MODULE_0__["client"].socket.emit('post');
  };
};

/***/ }),

/***/ "./lib/app/main.js":
/*!*************************!*\
  !*** ./lib/app/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _websocket_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websocket/client */ "./lib/app/websocket/client.js");
/* harmony import */ var _interface_userInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface/userInterface */ "./lib/app/interface/userInterface.js");





function setupApplication() {
  runSetup();
}

window.setupApplication = setupApplication;

function runSetup() {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    // page loaded.
    // Begin Interface setup.
    _interface_userInterface__WEBPACK_IMPORTED_MODULE_1__["userInterface"].setupUserInterface(); // Websocket setup.

    _websocket_client__WEBPACK_IMPORTED_MODULE_0__["client"].authentication(function (error, websocket) {
      if (error) throw error;
      _websocket_client__WEBPACK_IMPORTED_MODULE_0__["client"].socket = websocket;
      _websocket_client__WEBPACK_IMPORTED_MODULE_0__["client"].setupSocketListeners();
    });
    console.log('setup complete');
  });
}

/***/ }),

/***/ "./lib/app/websocket/client.js":
/*!*************************************!*\
  !*** ./lib/app/websocket/client.js ***!
  \*************************************/
/*! exports provided: client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);




let Client = function () {
  this.status = {
    online: false
  };
  this.socket = null;
};

let client = new Client();

Client.prototype.setupSocketListeners = function setupSocketListeners() {};

Client.prototype.authentication = function authentication(config, cb) {
  if (!cb && typeof config === 'function') {
    cb = config;
    config = {};
  } // Create websocket and connect.


  let websocket = null;
  console.log(window.origin);

  if (window.origin.includes('chrome-extension')) {
    // Development
    websocket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default.a.connect('http://127.0.0.1:7779', {
      transports: ['websocket', 'polling']
    });
  } else {
    // Production
    websocket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default.a.connect('https://psychedelices.com', {
      secure: true,
      port: 80
    });
  }

  websocket.on('connect', function () {
    websocket.on('ready', function (data) {
      console.log('Websocket connected to server...\n');
      return cb(null, websocket);
    });
    websocket.on('client_error', function (data) {
      console.log('[client_error]\n');
      cb(new Error('Authentication Error'));
    });
  });
};

/***/ }),

/***/ "./node_modules/after/index.js":
/*!*************************************!*\
  !*** ./node_modules/after/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = after;

function after(count, callback, err_cb) {
  var bail = false;
  err_cb = err_cb || noop;
  proxy.count = count;
  return count === 0 ? callback() : proxy;

  function proxy(err, result) {
    if (proxy.count <= 0) {
      throw new Error('after called too many times');
    }

    --proxy.count; // after first error, rest are passed to err_cb

    if (err) {
      bail = true;
      callback(err); // future error callbacks will go to error handler

      callback = err_cb;
    } else if (proxy.count === 0 && !bail) {
      callback(null, result);
    }
  }
}

function noop() {}

/***/ }),

/***/ "./node_modules/arraybuffer.slice/index.js":
/*!*************************************************!*\
  !*** ./node_modules/arraybuffer.slice/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */
module.exports = function (arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) {
    return arraybuffer.slice(start, end);
  }

  if (start < 0) {
    start += bytes;
  }

  if (end < 0) {
    end += bytes;
  }

  if (end > bytes) {
    end = bytes;
  }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);

  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }

  return result.buffer;
};

/***/ }),

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Expose `Backoff`.
 */
module.exports = Backoff;
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */


Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);

  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }

  return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */


Backoff.prototype.reset = function () {
  this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */


Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */


Backoff.prototype.setMax = function (max) {
  this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */


Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

/***/ }),

/***/ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function () {
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; // Use a lookup table to find the index.

  var lookup = new Uint8Array(256);

  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode = function (base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;

      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i + 1)];
      encoded3 = lookup[base64.charCodeAt(i + 2)];
      encoded4 = lookup[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };
})();

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;

  for (var i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),

/***/ "./node_modules/blob/index.js":
/*!************************************!*\
  !*** ./node_modules/blob/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Create a blob builder even when vendor prefixes exist
 */
var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : false;
/**
 * Check if Blob constructor is supported
 */

var blobSupported = function () {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch (e) {
    return false;
  }
}();
/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */


var blobSupportsArrayBufferView = blobSupported && function () {
  try {
    var b = new Blob([new Uint8Array([1, 2])]);
    return b.size === 2;
  } catch (e) {
    return false;
  }
}();
/**
 * Check if BlobBuilder is supported
 */


var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map(function (chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer; // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer

      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  });
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};
  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach(function (part) {
    bb.append(part);
  });
  return options.type ? bb.getBlob(options.type) : bb.getBlob();
}

;

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
}

;

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

module.exports = function () {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
}();

/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");

var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js");

var isArray = __webpack_require__(/*! isarray */ "./node_modules/buffer/node_modules/isarray/index.js");

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function () {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/buffer/node_modules/isarray/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/buffer/node_modules/isarray/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "./node_modules/component-bind/index.js":
/*!**********************************************!*\
  !*** ./node_modules/component-bind/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Slice reference.
 */
var slice = [].slice;
/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function (obj, fn) {
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function () {
    return fn.apply(obj, args.concat(slice.call(arguments)));
  };
};

/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Expose `Emitter`.
 */
if (true) {
  module.exports = Emitter;
}
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */


function Emitter(obj) {
  if (obj) return mixin(obj);
}

;
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }

  return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {}; // all

  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  } // specific event


  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this; // remove all handlers

  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  } // remove specific handler


  var cb;

  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];

    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */


Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */


Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */


Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),

/***/ "./node_modules/component-inherit/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-inherit/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (a, b) {
  var fn = function () {};

  fn.prototype = b.prototype;
  a.prototype = new fn();
  a.prototype.constructor = a;
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./socket */ "./node_modules/engine.io-client/lib/socket.js");
/**
 * Exports parser
 *
 * @api public
 *
 */

module.exports.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

/***/ }),

/***/ "./node_modules/engine.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:socket');

var index = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
/**
 * Module exports.
 */


module.exports = Socket;
/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);
  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure : typeof location !== 'undefined' && 'https:' === location.protocol;

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname || (typeof location !== 'undefined' ? location.hostname : 'localhost');
  this.port = opts.port || (typeof location !== 'undefined' && location.port ? location.port : this.secure ? 443 : 80);
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;
  if (true === this.perMessageDeflate) this.perMessageDeflate = {};

  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  } // SSL options for Node.js client


  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode; // detect ReactNative environment

  this.isReactNative = typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative'; // other options for Node.js or ReactNative client

  if (typeof self === 'undefined' || this.isReactNative) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  } // set on handshake


  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null; // set on heartbeat

  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;
  this.open();
}

Socket.priorWebsocketSuccess = false;
/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);
/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(/*! ./transport */ "./node_modules/engine.io-client/lib/transport.js");
Socket.transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
Socket.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query); // append engine.io protocol identifier

  query.EIO = parser.protocol; // transport name

  query.transport = name; // per-transport options

  var options = this.transportOptions[name] || {}; // session id if we already have one

  if (this.id) query.sid = this.id;
  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void 0,
    isReactNative: this.isReactNative
  });
  return transport;
};

function clone(obj) {
  var o = {};

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }

  return o;
}
/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */


Socket.prototype.open = function () {
  var transport;

  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }

  this.readyState = 'opening'; // Retry with the next transport if the transport is disabled (jsonp: false)

  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};
/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */


Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  } // set up transport


  this.transport = transport; // set up transport listeners

  transport.on('drain', function () {
    self.onDrain();
  }).on('packet', function (packet) {
    self.onPacket(packet);
  }).on('error', function (e) {
    self.onError(e);
  }).on('close', function () {
    self.onClose('transport close');
  });
};
/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */


Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, {
    probe: 1
  });
  var failed = false;
  var self = this;
  Socket.priorWebsocketSuccess = false;

  function onTransportOpen() {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }

    if (failed) return;
    debug('probe transport "%s" opened', name);
    transport.send([{
      type: 'ping',
      data: 'probe'
    }]);
    transport.once('packet', function (msg) {
      if (failed) return;

      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;
        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');
          cleanup();
          self.setTransport(transport);
          transport.send([{
            type: 'upgrade'
          }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport() {
    if (failed) return; // Any callback called by transport should be ignored since now

    failed = true;
    cleanup();
    transport.close();
    transport = null;
  } // Handle any error that happens while probing


  function onerror(err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;
    freezeTransport();
    debug('probe transport "%s" failed because of error: %s', name, err);
    self.emit('upgradeError', error);
  }

  function onTransportClose() {
    onerror('transport closed');
  } // When the socket is closed while we're probing


  function onclose() {
    onerror('socket closed');
  } // When the socket is upgraded while we're probing


  function onupgrade(to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  } // Remove all listeners on the transport and on self


  function cleanup() {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);
  this.once('close', onclose);
  this.once('upgrading', onupgrade);
  transport.open();
};
/**
 * Called when connection is deemed open.
 *
 * @api public
 */


Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush(); // we check for `readyState` in case an `open`
  // listener already closed the socket

  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');

    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};
/**
 * Handles a packet.
 *
 * @api private
 */


Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
    this.emit('packet', packet); // Socket is live - any packet counts

    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};
/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */


Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen(); // In case open handler closes socket

  if ('closed' === this.readyState) return;
  this.setPing(); // Prolong liveness of socket on heartbeat

  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};
/**
 * Resets ping timeout.
 *
 * @api private
 */


Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || self.pingInterval + self.pingTimeout);
};
/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */


Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};
/**
* Sends a ping packet.
*
* @api private
*/


Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};
/**
 * Called on `drain` event
 *
 * @api private
 */


Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`

  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};
/**
 * Flush write buffers.
 *
 * @api private
 */


Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer); // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`

    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};
/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */


Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};
/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */


Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;
  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};
/**
 * Closes the connection.
 *
 * @api private
 */


Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';
    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close() {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose() {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade() {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};
/**
 * Called upon transport error
 *
 * @api private
 */


Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};
/**
 * Called upon transport close.
 *
 * @api private
 */


Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this; // clear timers

    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer); // stop event from firing again for transport

    this.transport.removeAllListeners('close'); // ensure transport won't stay open

    this.transport.close(); // ignore further transport communication

    this.transport.removeAllListeners(); // set ready state

    this.readyState = 'closed'; // clear session id

    this.id = null; // emit close event

    this.emit('close', reason, desc); // clean buffers after, so users can still
    // grab the buffers on `close` event

    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};
/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */


Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];

  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }

  return filteredUpgrades;
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transport.js":
/*!********************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transport.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
/**
 * Module exports.
 */


module.exports = Transport;
/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport(opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR; // SSL options for Node.js client

  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode; // results of ReactNative environment detection

  this.isReactNative = opts.isReactNative; // other options for Node.js client

  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}
/**
 * Mix in `Emitter`.
 */


Emitter(Transport.prototype);
/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};
/**
 * Opens the transport.
 *
 * @api public
 */


Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};
/**
 * Closes the transport.
 *
 * @api private
 */


Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};
/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */


Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};
/**
 * Called upon open
 *
 * @api private
 */


Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};
/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */


Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};
/**
 * Called with a decoded packet.
 */


Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};
/**
 * Called upon close.
 *
 * @api private
 */


Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */
var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");

var XHR = __webpack_require__(/*! ./polling-xhr */ "./node_modules/engine.io-client/lib/transports/polling-xhr.js");

var JSONP = __webpack_require__(/*! ./polling-jsonp */ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js");

var websocket = __webpack_require__(/*! ./websocket */ "./node_modules/engine.io-client/lib/transports/websocket.js");
/**
 * Export transports.
 */


exports.polling = polling;
exports.websocket = websocket;
/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port; // some user agents have empty `location.port`

    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module requirements.
 */
var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");

var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
/**
 * Module exports.
 */


module.exports = JSONPPolling;
/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;
/**
 * Global JSONP callbacks.
 */

var callbacks;
/**
 * Noop.
 */

function empty() {}
/**
 * Until https://github.com/tc39/proposal-global is shipped.
 */


function glob() {
  return typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
}
/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */


function JSONPPolling(opts) {
  Polling.call(this, opts);
  this.query = this.query || {}; // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution

  if (!callbacks) {
    // we need to consider multiple engines in the same page
    var global = glob();
    callbacks = global.___eio = global.___eio || [];
  } // callback identifier


  this.index = callbacks.length; // add callback to jsonp global

  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  }); // append to query string

  this.query.j = this.index; // prevent spurious errors from being emitted when the window is unloaded

  if (typeof addEventListener === 'function') {
    addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}
/**
 * Inherits from Polling.
 */


inherit(JSONPPolling, Polling);
/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;
/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};
/**
 * Starts a poll cycle.
 *
 * @api private
 */


JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();

  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];

  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }

  this.script = script;
  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};
/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */


JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;
    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);
    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete() {
    initIframe();
    fn();
  }

  function initIframe() {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;
    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe(); // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side

  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-xhr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global attachEvent */

/**
 * Module requirements.
 */
var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");

var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:polling-xhr');
/**
 * Module exports.
 */


module.exports = XHR;
module.exports.Request = Request;
/**
 * Empty function
 */

function empty() {}
/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */


function XHR(opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port; // some user agents have empty `location.port`

    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = typeof location !== 'undefined' && opts.hostname !== location.hostname || port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}
/**
 * Inherits from Polling.
 */


inherit(XHR, Polling);
/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;
/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout; // other options for Node.js client

  opts.extraHeaders = this.extraHeaders;
  return new Request(opts);
};
/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */


XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({
    method: 'POST',
    data: data,
    isBinary: isBinary
  });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};
/**
 * Starts a poll cycle.
 *
 * @api private
 */


XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};
/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */


function Request(opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout; // SSL options for Node.js client

  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized; // other options for Node.js client

  this.extraHeaders = opts.extraHeaders;
  this.create();
}
/**
 * Mix in `Emitter`.
 */


Emitter(Request.prototype);
/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = {
    agent: this.agent,
    xdomain: this.xd,
    xscheme: this.xs,
    enablesXDR: this.enablesXDR
  }; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);

    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {} // ie6 check


    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };

      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');

            if (self.supportsBinary && contentType === 'application/octet-stream') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }

        if (4 !== xhr.readyState) return;

        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (typeof document !== 'undefined') {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};
/**
 * Called upon successful response.
 *
 * @api private
 */


Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};
/**
 * Called if we have data.
 *
 * @api private
 */


Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};
/**
 * Called upon error.
 *
 * @api private
 */


Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};
/**
 * Cleans up house.
 *
 * @api private
 */


Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  } // xmlhttprequest


  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (typeof document !== 'undefined') {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};
/**
 * Called upon load.
 *
 * @api private
 */


Request.prototype.onLoad = function () {
  var data;

  try {
    var contentType;

    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}

    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }

  if (null != data) {
    this.onData(data);
  }
};
/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */


Request.prototype.hasXDR = function () {
  return typeof XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR;
};
/**
 * Aborts the request.
 *
 * @api public
 */


Request.prototype.abort = function () {
  this.cleanup();
};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */


Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== 'undefined') {
  if (typeof attachEvent === 'function') {
    attachEvent('onunload', unloadHandler);
  } else if (typeof addEventListener === 'function') {
    var terminationEvent = 'onpagehide' in self ? 'pagehide' : 'unload';
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:polling');
/**
 * Module exports.
 */


module.exports = Polling;
/**
 * Is XHR2 supported?
 */

var hasXHR2 = function () {
  var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");

  var xhr = new XMLHttpRequest({
    xdomain: false
  });
  return null != xhr.responseType;
}();
/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */


function Polling(opts) {
  var forceBase64 = opts && opts.forceBase64;

  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }

  Transport.call(this, opts);
}
/**
 * Inherits from Transport.
 */


inherit(Polling, Transport);
/**
 * Transport name.
 */

Polling.prototype.name = 'polling';
/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};
/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */


Polling.prototype.pause = function (onPause) {
  var self = this;
  this.readyState = 'pausing';

  function pause() {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};
/**
 * Starts polling cycle.
 *
 * @api public
 */


Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};
/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */


Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);

  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    } // if its a close packet, we close the ongoing requests


    if ('close' === packet.type) {
      self.onClose();
      return false;
    } // otherwise bypass onData and handle the message


    self.onPacket(packet);
  }; // decode payload


  parser.decodePayload(data, this.socket.binaryType, callback); // if an event did not trigger closing

  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};
/**
 * For polling, send a close packet.
 *
 * @api private
 */


Polling.prototype.doClose = function () {
  var self = this;

  function close() {
    debug('writing close packet');
    self.write([{
      type: 'close'
    }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};
/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */


Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};
/**
 * Generates uri for connection.
 *
 * @api private
 */


Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = ''; // cache busting is forced

  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query); // avoid port if default for schema

  if (this.port && ('https' === schema && Number(this.port) !== 443 || 'http' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  } // prepend ? to query


  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Module dependencies.
 */
var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/engine.io-client/node_modules/debug/src/browser.js")('engine.io-client:websocket');

var BrowserWebSocket, NodeWebSocket;

if (typeof WebSocket !== 'undefined') {
  BrowserWebSocket = WebSocket;
} else if (typeof self !== 'undefined') {
  BrowserWebSocket = self.WebSocket || self.MozWebSocket;
} else {
  try {
    NodeWebSocket = __webpack_require__(/*! ws */ 1);
  } catch (e) {}
}
/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */


var WebSocketImpl = BrowserWebSocket || NodeWebSocket;
/**
 * Module exports.
 */

module.exports = WS;
/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts) {
  var forceBase64 = opts && opts.forceBase64;

  if (forceBase64) {
    this.supportsBinary = false;
  }

  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;

  if (!this.usingBrowserWebSocket) {
    WebSocketImpl = NodeWebSocket;
  }

  Transport.call(this, opts);
}
/**
 * Inherits from Transport.
 */


inherit(WS, Transport);
/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';
/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;
/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  }; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }

  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket && !this.isReactNative ? protocols ? new WebSocketImpl(uri, protocols) : new WebSocketImpl(uri) : new WebSocketImpl(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};
/**
 * Adds event listeners to the socket
 *
 * @api private
 */


WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };

  this.ws.onclose = function () {
    self.onClose();
  };

  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };

  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};
/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */


WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false; // encodePacket efficient as it uses WS framing
  // no need for encodePayload

  var total = packets.length;

  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};

          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? Buffer.byteLength(data) : data.length;

            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        } // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error


        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done() {
    self.emit('flush'); // fake drain
    // defer to next tick to allow Socket to clear writeBuffer

    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};
/**
 * Called upon close
 *
 * @api private
 */


WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};
/**
 * Closes socket.
 *
 * @api private
 */


WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};
/**
 * Generates uri for connection.
 *
 * @api private
 */


WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = ''; // avoid port if default for schema

  if (this.port && ('wss' === schema && Number(this.port) !== 443 || 'ws' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  } // append timestamp to URI


  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  } // communicate binary support capabilities


  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query); // prepend ? to query

  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};
/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */


WS.prototype.check = function () {
  return !!WebSocketImpl && !('__initialize' in WebSocketImpl && this.name === WS.prototype.name);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/engine.io-client/lib/xmlhttprequest.js":
/*!*************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/xmlhttprequest.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// browser shim for xmlhttprequest module
var hasCORS = __webpack_require__(/*! has-cors */ "./node_modules/has-cors/index.js");

module.exports = function (opts) {
  var xdomain = opts.xdomain; // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx

  var xscheme = opts.xscheme; // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217

  var enablesXDR = opts.enablesXDR; // XMLHttpRequest can be disabled on IE

  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {} // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example


  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new self[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) {}
  }
};

/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/engine.io-client/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/engine.io-client/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
/**
 * Active `debug` instances.
 */

exports.instances = [];
/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];
/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};
/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}
/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */


function createDebug(namespace) {
  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;
    var self = debug; // set `diff` timestamp

    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr; // turn the `arguments` into a proper Array

    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    } // apply any `formatters` transformations


    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];

      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

        args.splice(index, 1);
        index--;
      }

      return match;
    }); // apply env-specific formatting (colors, etc.)

    exports.formatArgs.call(self, args);
    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy; // env-specific initialization logic for debug instances

  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);
  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);

  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}
/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */


function enable(namespaces) {
  exports.save(namespaces);
  exports.names = [];
  exports.skips = [];
  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings

    namespaces = split[i].replace(/\*/g, '.*?');

    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}
/**
 * Disable debug output.
 *
 * @api public
 */


function disable() {
  exports.enable('');
}
/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */


function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }

  var i, len;

  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }

  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }

  return false;
}
/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */


function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/browser.js":
/*!******************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/browser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var keys = __webpack_require__(/*! ./keys */ "./node_modules/engine.io-parser/lib/keys.js");

var hasBinary = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");

var sliceBuffer = __webpack_require__(/*! arraybuffer.slice */ "./node_modules/arraybuffer.slice/index.js");

var after = __webpack_require__(/*! after */ "./node_modules/after/index.js");

var utf8 = __webpack_require__(/*! ./utf8 */ "./node_modules/engine.io-parser/lib/utf8.js");

var base64encoder;

if (typeof ArrayBuffer !== 'undefined') {
  base64encoder = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
}
/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */


var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */

var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);
/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */

var dontSendBlobs = isAndroid || isPhantomJS;
/**
 * Current protocol version.
 */

exports.protocol = 3;
/**
 * Packet types.
 */

var packets = exports.packets = {
  open: 0 // non-ws
  ,
  close: 1 // non-ws
  ,
  ping: 2,
  pong: 3,
  message: 4,
  upgrade: 5,
  noop: 6
};
var packetslist = keys(packets);
/**
 * Premade error packet.
 */

var err = {
  type: 'error',
  data: 'parser error'
};
/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(/*! blob */ "./node_modules/blob/index.js");
/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */


exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;

  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  } // might be an object with { base64: true, data: dataAsBase64String }


  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  } // Sending data as a utf-8 string


  var encoded = packets[packet.type]; // data fragment is optional

  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), {
      strict: false
    }) : String(packet.data);
  }

  return callback('' + encoded);
};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}
/**
 * Encode packet helpers for binary types
 */


function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);
  resultBuffer[0] = packets[packet.type];

  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i + 1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();

  fr.onload = function () {
    exports.encodePacket({
      type: packet.type,
      data: fr.result
    }, supportsBinary, true, callback);
  };

  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);
  return callback(blob);
}
/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */


exports.encodeBase64Packet = function (packet, callback) {
  var message = 'b' + exports.packets[packet.type];

  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
    var fr = new FileReader();

    fr.onload = function () {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };

    return fr.readAsDataURL(packet.data);
  }

  var b64data;

  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);

    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }

    b64data = String.fromCharCode.apply(null, basic);
  }

  message += btoa(b64data);
  return callback(message);
};
/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */


exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  } // String data


  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);

      if (data === false) {
        return err;
      }
    }

    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return {
        type: packetslist[type],
        data: data.substring(1)
      };
    } else {
      return {
        type: packetslist[type]
      };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);

  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }

  return {
    type: packetslist[type],
    data: rest
  };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, {
      strict: false
    });
  } catch (e) {
    return false;
  }

  return data;
}
/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */


exports.decodeBase64Packet = function (msg, binaryType) {
  var type = packetslist[msg.charAt(0)];

  if (!base64encoder) {
    return {
      type: type,
      data: {
        base64: true,
        data: msg.substr(1)
      }
    };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return {
    type: type,
    data: data
  };
};
/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */


exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function (message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function (err, results) {
    return callback(results.join(''));
  });
};
/**
 * Async array map using after
 */


function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function (i, el, cb) {
    each(el, function (error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}
/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */


exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;

  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '',
      n,
      msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || length != (n = Number(length))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    } // advance cursor


    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }
};
/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */


exports.encodePayloadAsArrayBuffer = function (packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function (data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function (err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function (acc, p) {
      var len;

      if (typeof p === 'string') {
        len = p.length;
      } else {
        len = p.byteLength;
      }

      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);
    var resultArray = new Uint8Array(totalLength);
    var bufferIndex = 0;
    encodedPackets.forEach(function (p) {
      var isString = typeof p === 'string';
      var ab = p;

      if (isString) {
        var view = new Uint8Array(p.length);

        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }

        ab = view.buffer;
      }

      if (isString) {
        // not true binary
        resultArray[bufferIndex++] = 0;
      } else {
        // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();

      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }

      resultArray[bufferIndex++] = 255;
      var view = new Uint8Array(ab);

      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });
    return callback(resultArray.buffer);
  });
};
/**
 * Encode as Blob
 */


exports.encodePayloadAsBlob = function (packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function (encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;

      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);

        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }

        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;
      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);

      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }

      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function (err, results) {
    return callback(new Blob(results));
  });
};
/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */


exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1;; i++) {
      if (tailArray[i] === 255) break; // 310 = char length of Number.MAX_VALUE

      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);
    var msg = sliceBuffer(bufferTail, 0, msgLength);

    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';

        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function (buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/keys.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */
module.exports = Object.keys || function keys(obj) {
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }

  return arr;
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/utf8.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/utf8.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! https://mths.be/utf8js v2.1.2 by @mathias */
var stringFromCharCode = String.fromCharCode; // Taken from https://mths.be/punycode

function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  var value;
  var extra;

  while (counter < length) {
    value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // high surrogate, and there is a next character
      extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // low surrogate
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // unmatched surrogate; only append this code unit, in case the next
        // code unit is the high surrogate of a surrogate pair
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
} // Taken from https://mths.be/punycode


function ucs2encode(array) {
  var length = array.length;
  var index = -1;
  var value;
  var output = '';

  while (++index < length) {
    value = array[index];

    if (value > 0xFFFF) {
      value -= 0x10000;
      output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
      value = 0xDC00 | value & 0x3FF;
    }

    output += stringFromCharCode(value);
  }

  return output;
}

function checkScalarValue(codePoint, strict) {
  if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
    if (strict) {
      throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
    }

    return false;
  }

  return true;
}
/*--------------------------------------------------------------------------*/


function createByte(codePoint, shift) {
  return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
}

function encodeCodePoint(codePoint, strict) {
  if ((codePoint & 0xFFFFFF80) == 0) {
    // 1-byte sequence
    return stringFromCharCode(codePoint);
  }

  var symbol = '';

  if ((codePoint & 0xFFFFF800) == 0) {
    // 2-byte sequence
    symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
  } else if ((codePoint & 0xFFFF0000) == 0) {
    // 3-byte sequence
    if (!checkScalarValue(codePoint, strict)) {
      codePoint = 0xFFFD;
    }

    symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
    symbol += createByte(codePoint, 6);
  } else if ((codePoint & 0xFFE00000) == 0) {
    // 4-byte sequence
    symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
    symbol += createByte(codePoint, 12);
    symbol += createByte(codePoint, 6);
  }

  symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
  return symbol;
}

function utf8encode(string, opts) {
  opts = opts || {};
  var strict = false !== opts.strict;
  var codePoints = ucs2decode(string);
  var length = codePoints.length;
  var index = -1;
  var codePoint;
  var byteString = '';

  while (++index < length) {
    codePoint = codePoints[index];
    byteString += encodeCodePoint(codePoint, strict);
  }

  return byteString;
}
/*--------------------------------------------------------------------------*/


function readContinuationByte() {
  if (byteIndex >= byteCount) {
    throw Error('Invalid byte index');
  }

  var continuationByte = byteArray[byteIndex] & 0xFF;
  byteIndex++;

  if ((continuationByte & 0xC0) == 0x80) {
    return continuationByte & 0x3F;
  } // If we end up here, it’s not a continuation byte


  throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
  var byte1;
  var byte2;
  var byte3;
  var byte4;
  var codePoint;

  if (byteIndex > byteCount) {
    throw Error('Invalid byte index');
  }

  if (byteIndex == byteCount) {
    return false;
  } // Read first byte


  byte1 = byteArray[byteIndex] & 0xFF;
  byteIndex++; // 1-byte sequence (no continuation bytes)

  if ((byte1 & 0x80) == 0) {
    return byte1;
  } // 2-byte sequence


  if ((byte1 & 0xE0) == 0xC0) {
    byte2 = readContinuationByte();
    codePoint = (byte1 & 0x1F) << 6 | byte2;

    if (codePoint >= 0x80) {
      return codePoint;
    } else {
      throw Error('Invalid continuation byte');
    }
  } // 3-byte sequence (may include unpaired surrogates)


  if ((byte1 & 0xF0) == 0xE0) {
    byte2 = readContinuationByte();
    byte3 = readContinuationByte();
    codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;

    if (codePoint >= 0x0800) {
      return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
    } else {
      throw Error('Invalid continuation byte');
    }
  } // 4-byte sequence


  if ((byte1 & 0xF8) == 0xF0) {
    byte2 = readContinuationByte();
    byte3 = readContinuationByte();
    byte4 = readContinuationByte();
    codePoint = (byte1 & 0x07) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;

    if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
      return codePoint;
    }
  }

  throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;

function utf8decode(byteString, opts) {
  opts = opts || {};
  var strict = false !== opts.strict;
  byteArray = ucs2decode(byteString);
  byteCount = byteArray.length;
  byteIndex = 0;
  var codePoints = [];
  var tmp;

  while ((tmp = decodeSymbol(strict)) !== false) {
    codePoints.push(tmp);
  }

  return ucs2encode(codePoints);
}

module.exports = {
  version: '2.1.2',
  encode: utf8encode,
  decode: utf8decode
};

/***/ }),

/***/ "./node_modules/has-binary2/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-binary2/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/* global Blob File */

/*
 * Module requirements.
 */
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';
/**
 * Module exports.
 */

module.exports = hasBinary;
/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }

    return false;
  }

  if (typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj) || typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
    return true;
  } // see: https://github.com/Automattic/has-binary/pull/4


  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/has-cors/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-cors/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */
try {
  module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),

/***/ "./node_modules/indexof/index.js":
/*!***************************************!*\
  !*** ./node_modules/indexof/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var indexOf = [].indexOf;

module.exports = function (arr, obj) {
  if (indexOf) return arr.indexOf(obj);

  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }

  return -1;
};

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, n, name) {
  if (ms < n) {
    return;
  }

  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }

  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),

/***/ "./node_modules/parseqs/index.js":
/*!***************************************!*\
  !*** ./node_modules/parseqs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */


exports.decode = function (qs) {
  var qry = {};
  var pairs = qs.split('&');

  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return qry;
};

/***/ }),

/***/ "./node_modules/parseuri/index.js":
/*!****************************************!*\
  !*** ./node_modules/parseuri/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

module.exports = function parseuri(str) {
  var src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');

  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
  }

  var m = re.exec(str || ''),
      uri = {},
      i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }

  return uri;
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/socket.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var url = __webpack_require__(/*! ./url */ "./node_modules/socket.io-client/lib/url.js");

var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");

var Manager = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client');
/**
 * Module exports.
 */


module.exports = exports = lookup;
/**
 * Managers cache.
 */

var cache = exports.managers = {};
/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup(uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;
  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }

    io = cache[id];
  }

  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }

  return io.socket(parsed.path, opts);
}
/**
 * Protocol version.
 *
 * @api public
 */


exports.protocol = parser.protocol;
/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;
/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");
exports.Socket = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");

/***/ }),

/***/ "./node_modules/socket.io-client/lib/manager.js":
/*!******************************************************!*\
  !*** ./node_modules/socket.io-client/lib/manager.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var eio = __webpack_require__(/*! engine.io-client */ "./node_modules/engine.io-client/lib/index.js");

var Socket = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");

var on = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");

var bind = __webpack_require__(/*! component-bind */ "./node_modules/component-bind/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:manager');

var indexOf = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");

var Backoff = __webpack_require__(/*! backo2 */ "./node_modules/backo2/index.js");
/**
 * IE6+ hasOwnProperty
 */


var has = Object.prototype.hasOwnProperty;
/**
 * Module exports
 */

module.exports = Manager;
/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];

  var _parser = opts.parser || parser;

  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}
/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */


Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);

  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};
/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */


Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};
/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */


Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : nsp + '#') + this.engine.id;
};
/**
 * Mix in `Emitter`.
 */


Emitter(Manager.prototype);
/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};
/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};
/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};
/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};
/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};
/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */


Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};
/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */


Manager.prototype.open = Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;
  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false; // emit `open`

  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  }); // emit `connect_error`

  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);

    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  }); // emit `connect_timeout`

  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout); // set timer

    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);
    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);
  return this;
};
/**
 * Called upon transport open.
 *
 * @api private
 */


Manager.prototype.onopen = function () {
  debug('open'); // clear old subs

  this.cleanup(); // mark as open

  this.readyState = 'open';
  this.emit('open'); // add new subs

  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};
/**
 * Called upon a ping.
 *
 * @api private
 */


Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};
/**
 * Called upon a packet.
 *
 * @api private
 */


Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};
/**
 * Called with data.
 *
 * @api private
 */


Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};
/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */


Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};
/**
 * Called upon socket error.
 *
 * @api private
 */


Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};
/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */


Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];

  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting() {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};
/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */


Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;
  this.close();
};
/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */


Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }

      self.encoding = false;
      self.processPacketQueue();
    });
  } else {
    // add packet to the queue
    self.packetBuffer.push(packet);
  }
};
/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */


Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};
/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */


Manager.prototype.cleanup = function () {
  debug('cleanup');
  var subsLength = this.subs.length;

  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;
  this.decoder.destroy();
};
/**
 * Close the current socket.
 *
 * @api private
 */


Manager.prototype.close = Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;

  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }

  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};
/**
 * Called upon engine close.
 *
 * @api private
 */


Manager.prototype.onclose = function (reason) {
  debug('onclose');
  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};
/**
 * Attempt a reconnection.
 *
 * @api private
 */


Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;
  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);
    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;
      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts); // check again for the case socket closed in above events

      if (self.skipReconnect) return;
      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);
    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};
/**
 * Called upon successful reconnect.
 *
 * @api private
 */


Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

/***/ }),

/***/ "./node_modules/socket.io-client/lib/on.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-client/lib/on.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Module exports.
 */
module.exports = on;
/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}

/***/ }),

/***/ "./node_modules/socket.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var toArray = __webpack_require__(/*! to-array */ "./node_modules/to-array/index.js");

var on = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");

var bind = __webpack_require__(/*! component-bind */ "./node_modules/component-bind/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:socket');

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var hasBin = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");
/**
 * Module exports.
 */


module.exports = exports = Socket;
/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};
/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;
/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket(io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat

  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  this.flags = {};

  if (opts && opts.query) {
    this.query = opts.query;
  }

  if (this.io.autoConnect) this.open();
}
/**
 * Mix in `Emitter`.
 */


Emitter(Socket.prototype);
/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;
  var io = this.io;
  this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
};
/**
 * "Opens" the socket.
 *
 * @api public
 */


Socket.prototype.open = Socket.prototype.connect = function () {
  if (this.connected) return this;
  this.subEvents();
  this.io.open(); // ensure open

  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};
/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */


Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};
/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */


Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = {
    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
    data: args
  };
  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress; // event ack callback

  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  this.flags = {};
  return this;
};
/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};
/**
 * Called upon engine `open`.
 *
 * @api private
 */


Socket.prototype.onopen = function () {
  debug('transport is open - connecting'); // write connect packet if necessary

  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({
        type: parser.CONNECT,
        query: query
      });
    } else {
      this.packet({
        type: parser.CONNECT
      });
    }
  }
};
/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */


Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};
/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onpacket = function (packet) {
  var sameNamespace = packet.nsp === this.nsp;
  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';
  if (!sameNamespace && !rootNamespaceError) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};
/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};
/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */


Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);
    self.packet({
      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
      id: id,
      data: args
    });
  };
};
/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];

  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};
/**
 * Called upon server connect.
 *
 * @api private
 */


Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};
/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */


Socket.prototype.emitBuffered = function () {
  var i;

  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }

  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }

  this.sendBuffer = [];
};
/**
 * Called upon server disconnect.
 *
 * @api private
 */


Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};
/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */


Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }

    this.subs = null;
  }

  this.io.destroy(this);
};
/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */


Socket.prototype.close = Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({
      type: parser.DISCONNECT
    });
  } // remove socket from pool


  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }

  return this;
};
/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */


Socket.prototype.compress = function (compress) {
  this.flags.compress = compress;
  return this;
};
/**
 * Sets the binary flag
 *
 * @param {Boolean} whether the emitted data contains binary
 * @return {Socket} self
 * @api public
 */


Socket.prototype.binary = function (binary) {
  this.flags.binary = binary;
  return this;
};

/***/ }),

/***/ "./node_modules/socket.io-client/lib/url.js":
/*!**************************************************!*\
  !*** ./node_modules/socket.io-client/lib/url.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js")('socket.io-client:url');
/**
 * Module exports.
 */


module.exports = url;
/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc) {
  var obj = uri; // default to window.location

  loc = loc || typeof location !== 'undefined' && location;
  if (null == uri) uri = loc.protocol + '//' + loc.host; // relative path support

  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);

      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    } // parse


    debug('parse %s', uri);
    obj = parseuri(uri);
  } // make sure we treat `localhost:80` and `localhost` equally


  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';
  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host; // define unique id

  obj.id = obj.protocol + '://' + host + ':' + obj.port; // define href

  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : ':' + obj.port);
  return obj;
}

/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/socket.io-client/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
/**
 * Active `debug` instances.
 */

exports.instances = [];
/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];
/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};
/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}
/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */


function createDebug(namespace) {
  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;
    var self = debug; // set `diff` timestamp

    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr; // turn the `arguments` into a proper Array

    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    } // apply any `formatters` transformations


    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];

      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

        args.splice(index, 1);
        index--;
      }

      return match;
    }); // apply env-specific formatting (colors, etc.)

    exports.formatArgs.call(self, args);
    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy; // env-specific initialization logic for debug instances

  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);
  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);

  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}
/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */


function enable(namespaces) {
  exports.save(namespaces);
  exports.names = [];
  exports.skips = [];
  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings

    namespaces = split[i].replace(/\*/g, '.*?');

    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}
/**
 * Disable debug output.
 *
 * @api public
 */


function disable() {
  exports.enable('');
}
/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */


function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }

  var i, len;

  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }

  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }

  return false;
}
/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */


function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),

/***/ "./node_modules/socket.io-parser/binary.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-parser/binary.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global Blob,File*/

/**
 * Module requirements
 */
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';
/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function (packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'

  return {
    packet: pack,
    buffers: buffers
  };
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);

    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }

    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};

    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }

    return newData;
  }

  return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */


exports.reconstructPacket = function (packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful

  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}
/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */


exports.removeBlobs = function (data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj; // convert any blob

    if (withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
      pendingBlobs++; // async filereader

      var fileReader = new FileReader();

      fileReader.onload = function () {
        // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        } else {
          bloblessData = this.result;
        } // if nothing pending its callback time


        if (! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) {
      // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) {
      // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;

  _removeBlobs(bloblessData);

  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

/***/ }),

/***/ "./node_modules/socket.io-parser/index.js":
/*!************************************************!*\
  !*** ./node_modules/socket.io-parser/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-parser/node_modules/debug/src/browser.js")('socket.io-parser');

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var binary = __webpack_require__(/*! ./binary */ "./node_modules/socket.io-parser/binary.js");

var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");
/**
 * Protocol version.
 *
 * @api public
 */


exports.protocol = 4;
/**
 * Packet types.
 *
 * @api public
 */

exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'];
/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;
/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;
/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;
/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;
/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;
/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;
/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;
/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;
/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;
/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';
/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function (obj, callback) {
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};
/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */


function encodeAsString(obj) {
  // first is type
  var str = '' + obj.type; // attachments if we have them

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  } // if we have a namespace other than `/`
  // we append it followed by a comma `,`


  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  } // immediately followed by the id


  if (null != obj.id) {
    str += obj.id;
  } // json data


  if (null != obj.data) {
    var payload = tryStringify(obj.data);

    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch (e) {
    return false;
  }
}
/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */


function encodeAsBinary(obj, callback) {
  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;
    buffers.unshift(pack); // add packet info to beginning of data list

    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */


function Decoder() {
  this.reconstructor = null;
}
/**
 * Mix in `Emitter` with Decoder.
 */


Emitter(Decoder.prototype);
/**
 * Decodes an encoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function (obj) {
  var packet;

  if (typeof obj === 'string') {
    packet = decodeString(obj);

    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) {
      // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else {
      // non-binary full packet
      this.emit('decoded', packet);
    }
  } else if (isBuf(obj) || obj.base64) {
    // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);

      if (packet) {
        // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  } else {
    throw new Error('Unknown type: ' + obj);
  }
};
/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */


function decodeString(str) {
  var i = 0; // look up type

  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  } // look up attachments if type binary


  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';

    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }

    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }

    p.attachments = Number(buf);
  } // look up namespace (if any)


  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';

    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  } // look up id


  var next = str.charAt(i + 1);

  if ('' !== next && Number(next) == next) {
    p.id = '';

    while (++i) {
      var c = str.charAt(i);

      if (null == c || Number(c) != c) {
        --i;
        break;
      }

      p.id += str.charAt(i);
      if (i === str.length) break;
    }

    p.id = Number(p.id);
  } // look up json data


  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));

    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}
/**
 * Deallocates a parser's resources
 *
 * @api public
 */


Decoder.prototype.destroy = function () {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */


function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}
/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */


BinaryReconstructor.prototype.takeBinaryData = function (binData) {
  this.buffers.push(binData);

  if (this.buffers.length === this.reconPack.attachments) {
    // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }

  return null;
};
/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */


BinaryReconstructor.prototype.finishedReconstruction = function () {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}

/***/ }),

/***/ "./node_modules/socket.io-parser/is-buffer.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-parser/is-buffer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = isBuf;
var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof ArrayBuffer === 'function';

var isView = function (obj) {
  return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */


function isBuf(obj) {
  return withNativeBuffer && Buffer.isBuffer(obj) || withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/socket.io-parser/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/socket.io-parser/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/socket.io-parser/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/socket.io-parser/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/socket.io-parser/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
/**
 * Active `debug` instances.
 */

exports.instances = [];
/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];
/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};
/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}
/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */


function createDebug(namespace) {
  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;
    var self = debug; // set `diff` timestamp

    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr; // turn the `arguments` into a proper Array

    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    } // apply any `formatters` transformations


    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];

      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

        args.splice(index, 1);
        index--;
      }

      return match;
    }); // apply env-specific formatting (colors, etc.)

    exports.formatArgs.call(self, args);
    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy; // env-specific initialization logic for debug instances

  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);
  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);

  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}
/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */


function enable(namespaces) {
  exports.save(namespaces);
  exports.names = [];
  exports.skips = [];
  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings

    namespaces = split[i].replace(/\*/g, '.*?');

    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}
/**
 * Disable debug output.
 *
 * @api public
 */


function disable() {
  exports.enable('');
}
/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */


function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }

  var i, len;

  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }

  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }

  return false;
}
/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */


function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),

/***/ "./node_modules/to-array/index.js":
/*!****************************************!*\
  !*** ./node_modules/to-array/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = toArray;

function toArray(list, index) {
  var array = [];
  index = index || 0;

  for (var i = index || 0; i < list.length; i++) {
    array[i - index] = list[i];
  }

  return array;
}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
    length = 64,
    map = {},
    seed = 0,
    i = 0,
    prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */

function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */


function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */


function yeast() {
  var now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + '.' + encode(seed++);
} //
// Map each character to its index.
//


for (; i < length; i++) map[alphabet[i]] = i; //
// Expose the `yeast`, `encode` and `decode` functions.
//


yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

/***/ }),

/***/ 0:
/*!**************************************************************************************************!*\
  !*** multi ./lib/app/main.js ./lib/app/websocket/client.js ./lib/app/interface/userInterface.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./lib/app/main.js */"./lib/app/main.js");
__webpack_require__(/*! ./lib/app/websocket/client.js */"./lib/app/websocket/client.js");
module.exports = __webpack_require__(/*! ./lib/app/interface/userInterface.js */"./lib/app/interface/userInterface.js");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcHAvLi9saWIvYXBwL2ludGVyZmFjZS91c2VySW50ZXJmYWNlLmpzIiwid2VicGFjazovL2FwcC8uL2xpYi9hcHAvbWFpbi5qcyIsIndlYnBhY2s6Ly9hcHAvLi9saWIvYXBwL3dlYnNvY2tldC9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2FmdGVyL2luZGV4LmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9hcnJheWJ1ZmZlci5zbGljZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvYmFja28yL2luZGV4LmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9iYXNlNjQtYXJyYXlidWZmZXIvbGliL2Jhc2U2NC1hcnJheWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9ibG9iL2luZGV4LmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWJpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9jb21wb25lbnQtaW5oZXJpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3NvY2tldC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0LmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL2luZGV4LmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmctanNvbnAuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy14aHIuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy93ZWJzb2NrZXQuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3htbGh0dHByZXF1ZXN0LmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9icm93c2VyLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9rZXlzLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi91dGY4LmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9oYXMtYmluYXJ5Mi9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvaGFzLWNvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2luZGV4b2YvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9wYXJzZXFzL2luZGV4LmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9wYXJzZXVyaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9saWIvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9saWIvb24uanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL3NvY2tldC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9saWIvdXJsLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9pcy1idWZmZXIuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL3RvLWFycmF5L2luZGV4LmpzIiwid2VicGFjazovL2FwcC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vbm9kZV9tb2R1bGVzL3llYXN0L2luZGV4LmpzIiwid2VicGFjazovL2FwcC93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsiVXNlckludGVyZmFjZSIsImJ1dHRvbiIsImxvZ2luIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBvc3QiLCJ1c2VySW50ZXJmYWNlIiwid2luZG93IiwicHJvdG90eXBlIiwic2V0dXBVc2VySW50ZXJmYWNlIiwic2V0dXBCdXR0b25zIiwib25jbGljayIsImNsaWVudCIsInNvY2tldCIsImVtaXQiLCJzZXR1cEFwcGxpY2F0aW9uIiwicnVuU2V0dXAiLCJyZWFkeSIsImZuIiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdXRoZW50aWNhdGlvbiIsImVycm9yIiwid2Vic29ja2V0Iiwic2V0dXBTb2NrZXRMaXN0ZW5lcnMiLCJjb25zb2xlIiwibG9nIiwiQ2xpZW50Iiwic3RhdHVzIiwib25saW5lIiwiY29uZmlnIiwiY2IiLCJvcmlnaW4iLCJpbmNsdWRlcyIsImlvIiwiY29ubmVjdCIsInRyYW5zcG9ydHMiLCJzZWN1cmUiLCJwb3J0Iiwib24iLCJkYXRhIiwiRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWZ0ZXIiLCJjb3VudCIsImNhbGxiYWNrIiwiZXJyX2NiIiwiYmFpbCIsIm5vb3AiLCJwcm94eSIsImVyciIsInJlc3VsdCIsImFycmF5YnVmZmVyIiwic3RhcnQiLCJlbmQiLCJieXRlcyIsImJ5dGVMZW5ndGgiLCJzbGljZSIsIkFycmF5QnVmZmVyIiwiYWJ2IiwiVWludDhBcnJheSIsImkiLCJpaSIsImJ1ZmZlciIsIkJhY2tvZmYiLCJvcHRzIiwibXMiLCJtaW4iLCJtYXgiLCJmYWN0b3IiLCJqaXR0ZXIiLCJhdHRlbXB0cyIsImR1cmF0aW9uIiwiTWF0aCIsInBvdyIsInJhbmQiLCJyYW5kb20iLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiY2hhcnMiLCJsb29rdXAiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwiZW5jb2RlIiwibGVuIiwiYmFzZTY0Iiwic3Vic3RyaW5nIiwiZGVjb2RlIiwiYnVmZmVyTGVuZ3RoIiwicCIsImVuY29kZWQxIiwiZW5jb2RlZDIiLCJlbmNvZGVkMyIsImVuY29kZWQ0IiwidG9CeXRlQXJyYXkiLCJmcm9tQnl0ZUFycmF5IiwicmV2TG9va3VwIiwiQXJyIiwiQXJyYXkiLCJjb2RlIiwiZ2V0TGVucyIsImI2NCIsInZhbGlkTGVuIiwiaW5kZXhPZiIsInBsYWNlSG9sZGVyc0xlbiIsImxlbnMiLCJfYnl0ZUxlbmd0aCIsInRtcCIsImFyciIsImN1ckJ5dGUiLCJ0cmlwbGV0VG9CYXNlNjQiLCJudW0iLCJlbmNvZGVDaHVuayIsInVpbnQ4Iiwib3V0cHV0IiwicHVzaCIsImpvaW4iLCJleHRyYUJ5dGVzIiwicGFydHMiLCJtYXhDaHVua0xlbmd0aCIsImxlbjIiLCJCbG9iQnVpbGRlciIsIldlYktpdEJsb2JCdWlsZGVyIiwiTVNCbG9iQnVpbGRlciIsIk1vekJsb2JCdWlsZGVyIiwiYmxvYlN1cHBvcnRlZCIsImEiLCJCbG9iIiwic2l6ZSIsImUiLCJibG9iU3VwcG9ydHNBcnJheUJ1ZmZlclZpZXciLCJiIiwiYmxvYkJ1aWxkZXJTdXBwb3J0ZWQiLCJhcHBlbmQiLCJnZXRCbG9iIiwibWFwQXJyYXlCdWZmZXJWaWV3cyIsImFyeSIsIm1hcCIsImNodW5rIiwiYnVmIiwiY29weSIsInNldCIsImJ5dGVPZmZzZXQiLCJCbG9iQnVpbGRlckNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImJiIiwiZm9yRWFjaCIsInBhcnQiLCJ0eXBlIiwiQmxvYkNvbnN0cnVjdG9yIiwidW5kZWZpbmVkIiwicmVxdWlyZSIsImllZWU3NTQiLCJpc0FycmF5IiwiQnVmZmVyIiwiU2xvd0J1ZmZlciIsIklOU1BFQ1RfTUFYX0JZVEVTIiwiVFlQRURfQVJSQVlfU1VQUE9SVCIsImdsb2JhbCIsInR5cGVkQXJyYXlTdXBwb3J0Iiwia01heExlbmd0aCIsIl9fcHJvdG9fXyIsImZvbyIsInN1YmFycmF5IiwiY3JlYXRlQnVmZmVyIiwidGhhdCIsIlJhbmdlRXJyb3IiLCJhcmciLCJlbmNvZGluZ09yT2Zmc2V0IiwiYWxsb2NVbnNhZmUiLCJmcm9tIiwicG9vbFNpemUiLCJfYXVnbWVudCIsInZhbHVlIiwiVHlwZUVycm9yIiwiZnJvbUFycmF5QnVmZmVyIiwiZnJvbVN0cmluZyIsImZyb21PYmplY3QiLCJTeW1ib2wiLCJzcGVjaWVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJhc3NlcnRTaXplIiwiYWxsb2MiLCJmaWxsIiwiZW5jb2RpbmciLCJjaGVja2VkIiwiYWxsb2NVbnNhZmVTbG93Iiwic3RyaW5nIiwiaXNFbmNvZGluZyIsImFjdHVhbCIsIndyaXRlIiwiZnJvbUFycmF5TGlrZSIsImFycmF5Iiwib2JqIiwiaXNCdWZmZXIiLCJpc25hbiIsInRvU3RyaW5nIiwiX2lzQnVmZmVyIiwiY29tcGFyZSIsIngiLCJ5IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJjb25jYXQiLCJsaXN0IiwicG9zIiwiaXNWaWV3IiwibG93ZXJlZENhc2UiLCJ1dGY4VG9CeXRlcyIsImJhc2U2NFRvQnl0ZXMiLCJzbG93VG9TdHJpbmciLCJoZXhTbGljZSIsInV0ZjhTbGljZSIsImFzY2lpU2xpY2UiLCJsYXRpbjFTbGljZSIsImJhc2U2NFNsaWNlIiwidXRmMTZsZVNsaWNlIiwic3dhcCIsIm4iLCJtIiwic3dhcDE2Iiwic3dhcDMyIiwic3dhcDY0IiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcXVhbHMiLCJpbnNwZWN0Iiwic3RyIiwibWF0Y2giLCJ0YXJnZXQiLCJ0aGlzU3RhcnQiLCJ0aGlzRW5kIiwidGhpc0NvcHkiLCJ0YXJnZXRDb3B5IiwiYmlkaXJlY3Rpb25hbEluZGV4T2YiLCJ2YWwiLCJkaXIiLCJpc05hTiIsImFycmF5SW5kZXhPZiIsImNhbGwiLCJsYXN0SW5kZXhPZiIsImluZGV4U2l6ZSIsImFyckxlbmd0aCIsInZhbExlbmd0aCIsInJlYWQiLCJyZWFkVUludDE2QkUiLCJmb3VuZEluZGV4IiwiZm91bmQiLCJqIiwiaGV4V3JpdGUiLCJvZmZzZXQiLCJOdW1iZXIiLCJyZW1haW5pbmciLCJzdHJMZW4iLCJwYXJzZWQiLCJwYXJzZUludCIsInN1YnN0ciIsInV0ZjhXcml0ZSIsImJsaXRCdWZmZXIiLCJhc2NpaVdyaXRlIiwiYXNjaWlUb0J5dGVzIiwibGF0aW4xV3JpdGUiLCJiYXNlNjRXcml0ZSIsInVjczJXcml0ZSIsInV0ZjE2bGVUb0J5dGVzIiwiaXNGaW5pdGUiLCJ0b0pTT04iLCJfYXJyIiwicmVzIiwiZmlyc3RCeXRlIiwiY29kZVBvaW50IiwiYnl0ZXNQZXJTZXF1ZW5jZSIsInNlY29uZEJ5dGUiLCJ0aGlyZEJ5dGUiLCJmb3VydGhCeXRlIiwidGVtcENvZGVQb2ludCIsImRlY29kZUNvZGVQb2ludHNBcnJheSIsIk1BWF9BUkdVTUVOVFNfTEVOR1RIIiwiY29kZVBvaW50cyIsImZyb21DaGFyQ29kZSIsInJldCIsIm91dCIsInRvSGV4IiwibmV3QnVmIiwic2xpY2VMZW4iLCJjaGVja09mZnNldCIsImV4dCIsInJlYWRVSW50TEUiLCJub0Fzc2VydCIsIm11bCIsInJlYWRVSW50QkUiLCJyZWFkVUludDgiLCJyZWFkVUludDE2TEUiLCJyZWFkVUludDMyTEUiLCJyZWFkVUludDMyQkUiLCJyZWFkSW50TEUiLCJyZWFkSW50QkUiLCJyZWFkSW50OCIsInJlYWRJbnQxNkxFIiwicmVhZEludDE2QkUiLCJyZWFkSW50MzJMRSIsInJlYWRJbnQzMkJFIiwicmVhZEZsb2F0TEUiLCJyZWFkRmxvYXRCRSIsInJlYWREb3VibGVMRSIsInJlYWREb3VibGVCRSIsImNoZWNrSW50Iiwid3JpdGVVSW50TEUiLCJtYXhCeXRlcyIsIndyaXRlVUludEJFIiwid3JpdGVVSW50OCIsIm9iamVjdFdyaXRlVUludDE2IiwibGl0dGxlRW5kaWFuIiwid3JpdGVVSW50MTZMRSIsIndyaXRlVUludDE2QkUiLCJvYmplY3RXcml0ZVVJbnQzMiIsIndyaXRlVUludDMyTEUiLCJ3cml0ZVVJbnQzMkJFIiwid3JpdGVJbnRMRSIsImxpbWl0Iiwic3ViIiwid3JpdGVJbnRCRSIsIndyaXRlSW50OCIsIndyaXRlSW50MTZMRSIsIndyaXRlSW50MTZCRSIsIndyaXRlSW50MzJMRSIsIndyaXRlSW50MzJCRSIsImNoZWNrSUVFRTc1NCIsIndyaXRlRmxvYXQiLCJ3cml0ZUZsb2F0TEUiLCJ3cml0ZUZsb2F0QkUiLCJ3cml0ZURvdWJsZSIsIndyaXRlRG91YmxlTEUiLCJ3cml0ZURvdWJsZUJFIiwidGFyZ2V0U3RhcnQiLCJJTlZBTElEX0JBU0U2NF9SRSIsImJhc2U2NGNsZWFuIiwic3RyaW5ndHJpbSIsInJlcGxhY2UiLCJ0cmltIiwidW5pdHMiLCJJbmZpbml0eSIsImxlYWRTdXJyb2dhdGUiLCJieXRlQXJyYXkiLCJjIiwiaGkiLCJsbyIsInNyYyIsImRzdCIsImFyZ3MiLCJFbWl0dGVyIiwibWl4aW4iLCJrZXkiLCJldmVudCIsIl9jYWxsYmFja3MiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbGJhY2tzIiwic3BsaWNlIiwibGlzdGVuZXJzIiwiaGFzTGlzdGVuZXJzIiwiY29uc3RydWN0b3IiLCJwYXJzZXIiLCJkZWJ1ZyIsImluZGV4IiwicGFyc2V1cmkiLCJwYXJzZXFzIiwiU29ja2V0IiwidXJpIiwiaG9zdG5hbWUiLCJob3N0IiwicHJvdG9jb2wiLCJxdWVyeSIsImxvY2F0aW9uIiwiYWdlbnQiLCJ1cGdyYWRlIiwicGF0aCIsImZvcmNlSlNPTlAiLCJqc29ucCIsImZvcmNlQmFzZTY0IiwiZW5hYmxlc1hEUiIsInRpbWVzdGFtcFBhcmFtIiwidGltZXN0YW1wUmVxdWVzdHMiLCJ0cmFuc3BvcnRPcHRpb25zIiwid3JpdGVCdWZmZXIiLCJwcmV2QnVmZmVyTGVuIiwicG9saWN5UG9ydCIsInJlbWVtYmVyVXBncmFkZSIsImJpbmFyeVR5cGUiLCJvbmx5QmluYXJ5VXBncmFkZXMiLCJwZXJNZXNzYWdlRGVmbGF0ZSIsInRocmVzaG9sZCIsInBmeCIsInBhc3NwaHJhc2UiLCJjZXJ0IiwiY2EiLCJjaXBoZXJzIiwicmVqZWN0VW5hdXRob3JpemVkIiwiZm9yY2VOb2RlIiwiaXNSZWFjdE5hdGl2ZSIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJzZWxmIiwiZXh0cmFIZWFkZXJzIiwia2V5cyIsImxvY2FsQWRkcmVzcyIsImlkIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdJbnRlcnZhbFRpbWVyIiwicGluZ1RpbWVvdXRUaW1lciIsIm9wZW4iLCJwcmlvcldlYnNvY2tldFN1Y2Nlc3MiLCJUcmFuc3BvcnQiLCJjcmVhdGVUcmFuc3BvcnQiLCJuYW1lIiwiY2xvbmUiLCJFSU8iLCJ0cmFuc3BvcnQiLCJzaWQiLCJyZXF1ZXN0VGltZW91dCIsInByb3RvY29scyIsIm8iLCJoYXNPd25Qcm9wZXJ0eSIsInNldFRpbWVvdXQiLCJzaGlmdCIsInNldFRyYW5zcG9ydCIsIm9uRHJhaW4iLCJwYWNrZXQiLCJvblBhY2tldCIsIm9uRXJyb3IiLCJvbkNsb3NlIiwicHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJ1cGdyYWRlTG9zZXNCaW5hcnkiLCJzdXBwb3J0c0JpbmFyeSIsInNlbmQiLCJtc2ciLCJ1cGdyYWRpbmciLCJwYXVzZSIsImNsZWFudXAiLCJmbHVzaCIsImZyZWV6ZVRyYW5zcG9ydCIsImNsb3NlIiwib25lcnJvciIsIm9uVHJhbnNwb3J0Q2xvc2UiLCJvbmNsb3NlIiwib251cGdyYWRlIiwidG8iLCJvbk9wZW4iLCJsIiwib25IYW5kc2hha2UiLCJKU09OIiwicGFyc2UiLCJzZXRQaW5nIiwiZmlsdGVyVXBncmFkZXMiLCJvbkhlYXJ0YmVhdCIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJwaW5nIiwic2VuZFBhY2tldCIsIndyaXRhYmxlIiwiY29tcHJlc3MiLCJ3YWl0Rm9yVXBncmFkZSIsImNsZWFudXBBbmRDbG9zZSIsInJlYXNvbiIsImRlc2MiLCJmaWx0ZXJlZFVwZ3JhZGVzIiwiZGVzY3JpcHRpb24iLCJkb09wZW4iLCJkb0Nsb3NlIiwicGFja2V0cyIsIm9uRGF0YSIsImRlY29kZVBhY2tldCIsIlhNTEh0dHBSZXF1ZXN0IiwiWEhSIiwiSlNPTlAiLCJwb2xsaW5nIiwieGhyIiwieGQiLCJ4cyIsImlzU1NMIiwieGRvbWFpbiIsInhzY2hlbWUiLCJQb2xsaW5nIiwiaW5oZXJpdCIsIkpTT05QUG9sbGluZyIsInJOZXdsaW5lIiwickVzY2FwZWROZXdsaW5lIiwiZW1wdHkiLCJnbG9iIiwiX19fZWlvIiwic2NyaXB0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZm9ybSIsImlmcmFtZSIsImRvUG9sbCIsImNyZWF0ZUVsZW1lbnQiLCJhc3luYyIsImluc2VydEF0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbnNlcnRCZWZvcmUiLCJoZWFkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiaXNVQWdlY2tvIiwidGVzdCIsInVzZXJBZ2VudCIsImRvV3JpdGUiLCJhcmVhIiwiaWZyYW1lSWQiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIm1ldGhvZCIsInNldEF0dHJpYnV0ZSIsImFjdGlvbiIsImNvbXBsZXRlIiwiaW5pdElmcmFtZSIsImh0bWwiLCJzdWJtaXQiLCJhdHRhY2hFdmVudCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIm9ubG9hZCIsIlJlcXVlc3QiLCJyZXF1ZXN0IiwiaXNCaW5hcnkiLCJyZXEiLCJzZW5kWGhyIiwicG9sbFhociIsImNyZWF0ZSIsInNldERpc2FibGVIZWFkZXJDaGVjayIsInNldFJlcXVlc3RIZWFkZXIiLCJ3aXRoQ3JlZGVudGlhbHMiLCJoYXNYRFIiLCJvbkxvYWQiLCJyZXNwb25zZVRleHQiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwicmVzcG9uc2VUeXBlIiwicmVxdWVzdHNDb3VudCIsInJlcXVlc3RzIiwib25TdWNjZXNzIiwiZnJvbUVycm9yIiwiYWJvcnQiLCJyZXNwb25zZSIsIlhEb21haW5SZXF1ZXN0IiwidW5sb2FkSGFuZGxlciIsInRlcm1pbmF0aW9uRXZlbnQiLCJ5ZWFzdCIsImhhc1hIUjIiLCJwb2xsIiwib25QYXVzZSIsInRvdGFsIiwiZGVjb2RlUGF5bG9hZCIsImNhbGxiYWNrZm4iLCJlbmNvZGVQYXlsb2FkIiwic2NoZW1hIiwiaXB2NiIsIkJyb3dzZXJXZWJTb2NrZXQiLCJOb2RlV2ViU29ja2V0IiwiV2ViU29ja2V0IiwiTW96V2ViU29ja2V0IiwiV2ViU29ja2V0SW1wbCIsIldTIiwidXNpbmdCcm93c2VyV2ViU29ja2V0IiwiY2hlY2siLCJoZWFkZXJzIiwid3MiLCJzdXBwb3J0cyIsImJpbmFyeSIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25vcGVuIiwib25tZXNzYWdlIiwiZXYiLCJlbmNvZGVQYWNrZXQiLCJkb25lIiwiaGFzQ09SUyIsImZvcm1hdEFyZ3MiLCJzYXZlIiwibG9hZCIsInVzZUNvbG9ycyIsInN0b3JhZ2UiLCJjaHJvbWUiLCJsb2NhbCIsImxvY2Fsc3RvcmFnZSIsImNvbG9ycyIsInByb2Nlc3MiLCJkb2N1bWVudEVsZW1lbnQiLCJXZWJraXRBcHBlYXJhbmNlIiwiZmlyZWJ1ZyIsImV4Y2VwdGlvbiIsInRhYmxlIiwiUmVnRXhwIiwiJDEiLCJmb3JtYXR0ZXJzIiwidiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJuYW1lc3BhY2UiLCJodW1hbml6ZSIsImRpZmYiLCJjb2xvciIsImxhc3RDIiwiRnVuY3Rpb24iLCJuYW1lc3BhY2VzIiwicmVtb3ZlSXRlbSIsInIiLCJlbnYiLCJERUJVRyIsImVuYWJsZSIsImxvY2FsU3RvcmFnZSIsImNyZWF0ZURlYnVnIiwiY29lcmNlIiwiZGlzYWJsZSIsImVuYWJsZWQiLCJpbnN0YW5jZXMiLCJuYW1lcyIsInNraXBzIiwic2VsZWN0Q29sb3IiLCJoYXNoIiwiYWJzIiwicHJldlRpbWUiLCJjdXJyIiwiRGF0ZSIsInByZXYiLCJ1bnNoaWZ0IiwiZm9ybWF0IiwiZm9ybWF0dGVyIiwibG9nRm4iLCJiaW5kIiwiZGVzdHJveSIsImluaXQiLCJzcGxpdCIsImluc3RhbmNlIiwic3RhY2siLCJoYXNCaW5hcnkiLCJzbGljZUJ1ZmZlciIsInV0ZjgiLCJiYXNlNjRlbmNvZGVyIiwiaXNBbmRyb2lkIiwiaXNQaGFudG9tSlMiLCJkb250U2VuZEJsb2JzIiwicG9uZyIsInBhY2tldHNsaXN0IiwidXRmOGVuY29kZSIsImVuY29kZUFycmF5QnVmZmVyIiwiZW5jb2RlQmxvYiIsImVuY29kZUJhc2U2NE9iamVjdCIsImVuY29kZWQiLCJzdHJpY3QiLCJlbmNvZGVCYXNlNjRQYWNrZXQiLCJjb250ZW50QXJyYXkiLCJyZXN1bHRCdWZmZXIiLCJlbmNvZGVCbG9iQXNBcnJheUJ1ZmZlciIsImZyIiwiRmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwiYmxvYiIsInJlYWRBc0RhdGFVUkwiLCJiNjRkYXRhIiwidHlwZWQiLCJiYXNpYyIsImJ0b2EiLCJ1dGY4ZGVjb2RlIiwiY2hhckF0IiwiZGVjb2RlQmFzZTY0UGFja2V0IiwidHJ5RGVjb2RlIiwiYXNBcnJheSIsInJlc3QiLCJlbmNvZGVQYXlsb2FkQXNCbG9iIiwiZW5jb2RlUGF5bG9hZEFzQXJyYXlCdWZmZXIiLCJzZXRMZW5ndGhIZWFkZXIiLCJlbmNvZGVPbmUiLCJkb25lQ2FsbGJhY2siLCJyZXN1bHRzIiwiZWFjaCIsIm5leHQiLCJlYWNoV2l0aEluZGV4IiwiZWwiLCJkZWNvZGVQYXlsb2FkQXNCaW5hcnkiLCJjaHIiLCJlbmNvZGVkUGFja2V0cyIsInRvdGFsTGVuZ3RoIiwicmVkdWNlIiwiYWNjIiwicmVzdWx0QXJyYXkiLCJidWZmZXJJbmRleCIsImlzU3RyaW5nIiwiYWIiLCJ2aWV3IiwibGVuU3RyIiwiYmluYXJ5SWRlbnRpZmllciIsImxlbmd0aEFyeSIsImJ1ZmZlclRhaWwiLCJidWZmZXJzIiwidGFpbEFycmF5IiwibXNnTGVuZ3RoIiwiaGFzIiwic3RyaW5nRnJvbUNoYXJDb2RlIiwidWNzMmRlY29kZSIsImNvdW50ZXIiLCJleHRyYSIsInVjczJlbmNvZGUiLCJjaGVja1NjYWxhclZhbHVlIiwidG9VcHBlckNhc2UiLCJjcmVhdGVCeXRlIiwiZW5jb2RlQ29kZVBvaW50Iiwic3ltYm9sIiwiYnl0ZVN0cmluZyIsInJlYWRDb250aW51YXRpb25CeXRlIiwiYnl0ZUluZGV4IiwiYnl0ZUNvdW50IiwiY29udGludWF0aW9uQnl0ZSIsImRlY29kZVN5bWJvbCIsImJ5dGUxIiwiYnl0ZTIiLCJieXRlMyIsImJ5dGU0IiwidmVyc2lvbiIsIndpdGhOYXRpdmVCbG9iIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwiaXNMRSIsIm1MZW4iLCJuQnl0ZXMiLCJlTGVuIiwiZU1heCIsImVCaWFzIiwibkJpdHMiLCJkIiwicyIsIk5hTiIsInJ0IiwiTE4yIiwiaCIsImxvbmciLCJmbXRMb25nIiwiZm10U2hvcnQiLCJleGVjIiwicGFyc2VGbG9hdCIsInJvdW5kIiwicGx1cmFsIiwiY2VpbCIsImVuY29kZVVSSUNvbXBvbmVudCIsInFzIiwicXJ5IiwicGFpcnMiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmUiLCJzb3VyY2UiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiZHJhaW5RdWV1ZSIsInJ1biIsIm5leHRUaWNrIiwiSXRlbSIsInRpdGxlIiwiYnJvd3NlciIsImFyZ3YiLCJ2ZXJzaW9ucyIsImFkZExpc3RlbmVyIiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsInVtYXNrIiwidXJsIiwiTWFuYWdlciIsImNhY2hlIiwibWFuYWdlcnMiLCJzYW1lTmFtZXNwYWNlIiwibnNwcyIsIm5ld0Nvbm5lY3Rpb24iLCJmb3JjZU5ldyIsIm11bHRpcGxleCIsImVpbyIsInN1YnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsInJlY29ubmVjdGlvbkRlbGF5IiwicmVjb25uZWN0aW9uRGVsYXlNYXgiLCJyYW5kb21pemF0aW9uRmFjdG9yIiwiYmFja29mZiIsImNvbm5lY3RpbmciLCJsYXN0UGluZyIsInBhY2tldEJ1ZmZlciIsIl9wYXJzZXIiLCJlbmNvZGVyIiwiRW5jb2RlciIsImRlY29kZXIiLCJEZWNvZGVyIiwiYXV0b0Nvbm5lY3QiLCJlbWl0QWxsIiwibnNwIiwidXBkYXRlU29ja2V0SWRzIiwiZ2VuZXJhdGVJZCIsImVuZ2luZSIsIl9yZWNvbm5lY3Rpb24iLCJfcmVjb25uZWN0aW9uQXR0ZW1wdHMiLCJfcmVjb25uZWN0aW9uRGVsYXkiLCJfcmFuZG9taXphdGlvbkZhY3RvciIsIl9yZWNvbm5lY3Rpb25EZWxheU1heCIsIl90aW1lb3V0IiwibWF5YmVSZWNvbm5lY3RPbk9wZW4iLCJyZWNvbm5lY3RpbmciLCJyZWNvbm5lY3QiLCJza2lwUmVjb25uZWN0Iiwib3BlblN1YiIsImVycm9yU3ViIiwidGltZXIiLCJvbnBpbmciLCJvbnBvbmciLCJvbmRhdGEiLCJhZGQiLCJvbmRlY29kZWQiLCJvbkNvbm5lY3RpbmciLCJwcm9jZXNzUGFja2V0UXVldWUiLCJwYWNrIiwic3Vic0xlbmd0aCIsImRpc2Nvbm5lY3QiLCJkZWxheSIsIm9ucmVjb25uZWN0IiwiYXR0ZW1wdCIsInRvQXJyYXkiLCJoYXNCaW4iLCJldmVudHMiLCJjb25uZWN0X2Vycm9yIiwiY29ubmVjdF90aW1lb3V0IiwicmVjb25uZWN0X2F0dGVtcHQiLCJyZWNvbm5lY3RfZmFpbGVkIiwicmVjb25uZWN0X2Vycm9yIiwianNvbiIsImlkcyIsImFja3MiLCJyZWNlaXZlQnVmZmVyIiwic2VuZEJ1ZmZlciIsImNvbm5lY3RlZCIsImRpc2Nvbm5lY3RlZCIsImZsYWdzIiwic3ViRXZlbnRzIiwiQklOQVJZX0VWRU5UIiwiRVZFTlQiLCJwb3AiLCJDT05ORUNUIiwib25wYWNrZXQiLCJyb290TmFtZXNwYWNlRXJyb3IiLCJFUlJPUiIsIm9uY29ubmVjdCIsIm9uZXZlbnQiLCJBQ0siLCJvbmFjayIsIkJJTkFSWV9BQ0siLCJESVNDT05ORUNUIiwib25kaXNjb25uZWN0IiwiYWNrIiwic2VudCIsImVtaXRCdWZmZXJlZCIsImxvYyIsImhyZWYiLCJpc0J1ZiIsImRlY29uc3RydWN0UGFja2V0IiwicGFja2V0RGF0YSIsIl9kZWNvbnN0cnVjdFBhY2tldCIsImF0dGFjaG1lbnRzIiwicGxhY2Vob2xkZXIiLCJfcGxhY2Vob2xkZXIiLCJuZXdEYXRhIiwicmVjb25zdHJ1Y3RQYWNrZXQiLCJfcmVjb25zdHJ1Y3RQYWNrZXQiLCJyZW1vdmVCbG9icyIsIl9yZW1vdmVCbG9icyIsImN1cktleSIsImNvbnRhaW5pbmdPYmplY3QiLCJwZW5kaW5nQmxvYnMiLCJmaWxlUmVhZGVyIiwiYmxvYmxlc3NEYXRhIiwidHlwZXMiLCJFUlJPUl9QQUNLRVQiLCJlbmNvZGVBc0JpbmFyeSIsImVuY29kZUFzU3RyaW5nIiwicGF5bG9hZCIsInRyeVN0cmluZ2lmeSIsIndyaXRlRW5jb2RpbmciLCJkZWNvbnN0cnVjdGlvbiIsInJlY29uc3RydWN0b3IiLCJkZWNvZGVTdHJpbmciLCJCaW5hcnlSZWNvbnN0cnVjdG9yIiwicmVjb25QYWNrIiwidGFrZUJpbmFyeURhdGEiLCJ0cnlQYXJzZSIsImlzUGF5bG9hZFZhbGlkIiwiZmluaXNoZWRSZWNvbnN0cnVjdGlvbiIsImJpbkRhdGEiLCJ3aXRoTmF0aXZlQnVmZmVyIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiZyIsImFscGhhYmV0Iiwic2VlZCIsImRlY29kZWQiLCJub3ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUE3QixFQUFpQztBQUMvQm0yQixXQUFPLEdBQUdBLE9BQU8sR0FBRzMwQixNQUFWLEdBQW1Cd0QsR0FBRyxDQUFDNEYsR0FBRyxDQUFDOGIsTUFBSixDQUFXMW1CLENBQVgsQ0FBRCxDQUFoQztBQUNEOztBQUVELFNBQU9tMkIsT0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTUEsU0FBUzdXLEtBQVQsR0FBaUI7QUFDZixNQUFJOFcsR0FBRyxHQUFHMTBCLE1BQU0sQ0FBQyxDQUFDLElBQUl1aUIsSUFBSixFQUFGLENBQWhCO0FBRUEsTUFBSW1TLEdBQUcsS0FBS2xTLElBQVosRUFBa0IsT0FBT2dTLElBQUksR0FBRyxDQUFQLEVBQVVoUyxJQUFJLEdBQUdrUyxHQUF4QjtBQUNsQixTQUFPQSxHQUFHLEdBQUUsR0FBTCxHQUFVMTBCLE1BQU0sQ0FBQ3cwQixJQUFJLEVBQUwsQ0FBdkI7QUFDRCxDLENBRUQ7QUFDQTtBQUNBOzs7QUFDQSxPQUFPbDJCLENBQUMsR0FBR3dCLE1BQVgsRUFBbUJ4QixDQUFDLEVBQXBCLEVBQXdCZ0YsR0FBRyxDQUFDaXhCLFFBQVEsQ0FBQ2oyQixDQUFELENBQVQsQ0FBSCxHQUFtQkEsQ0FBbkIsQyxDQUV4QjtBQUNBO0FBQ0E7OztBQUNBc2YsS0FBSyxDQUFDNWQsTUFBTixHQUFlQSxNQUFmO0FBQ0E0ZCxLQUFLLENBQUN4ZCxNQUFOLEdBQWVBLE1BQWY7QUFDQWxELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnlnQixLQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBLGUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImFwcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhcHBcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2NsaWVudH0gZnJvbSAnLi4vd2Vic29ja2V0L2NsaWVudCc7XG5cbmxldCBVc2VySW50ZXJmYWNlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5idXR0b24gPSB7XG4gICAgICAgIGxvZ2luOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKSxcbiAgICAgICAgcG9zdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bvc3QnKVxuICAgIH1cbn07XG5cbmV4cG9ydCBsZXQgdXNlckludGVyZmFjZSA9IG5ldyBVc2VySW50ZXJmYWNlKCk7XG53aW5kb3cudXNlckludGVyZmFjZSA9IHVzZXJJbnRlcmZhY2U7XG5cblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLnNldHVwVXNlckludGVyZmFjZSA9IGZ1bmN0aW9uIHNldHVwVXNlckludGVyZmFjZSgpIHtcbiAgICB1c2VySW50ZXJmYWNlID0gbmV3IFVzZXJJbnRlcmZhY2UoKTtcbiAgICB3aW5kb3cudXNlckludGVyZmFjZSA9IHVzZXJJbnRlcmZhY2U7XG4gICAgdXNlckludGVyZmFjZS5zZXR1cEJ1dHRvbnMoKTtcbn07XG5cblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLnNldHVwQnV0dG9ucyA9IGZ1bmN0aW9uIHNldHVwQnV0dG9ucygpIHtcbiAgICB1c2VySW50ZXJmYWNlLmJ1dHRvbi5sb2dpbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsaWVudC5zb2NrZXQuZW1pdCgnbG9naW4nKTtcbiAgICB9O1xuICAgIHVzZXJJbnRlcmZhY2UuYnV0dG9uLnBvc3Qub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjbGllbnQuc29ja2V0LmVtaXQoJ3Bvc3QnKTtcbiAgICB9O1xufTsiLCJcbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtjbGllbnR9IGZyb20gJy4vd2Vic29ja2V0L2NsaWVudCc7XG5pbXBvcnQge3VzZXJJbnRlcmZhY2V9IGZyb20gJy4vaW50ZXJmYWNlL3VzZXJJbnRlcmZhY2UnO1xuXG5mdW5jdGlvbiBzZXR1cEFwcGxpY2F0aW9uKCkge1xuICAgIHJ1blNldHVwKCk7XG59XG53aW5kb3cuc2V0dXBBcHBsaWNhdGlvbiA9IHNldHVwQXBwbGljYXRpb247XG5cbmZ1bmN0aW9uIHJ1blNldHVwKCkge1xuICAgIGZ1bmN0aW9uIHJlYWR5KGZuKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIGZuKCk7XG4gICAgICAgIGVsc2UgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcbiAgICB9XG4gICAgcmVhZHkoZnVuY3Rpb24oKSB7IC8vIHBhZ2UgbG9hZGVkLlxuICAgICAgICAvLyBCZWdpbiBJbnRlcmZhY2Ugc2V0dXAuXG4gICAgICAgIHVzZXJJbnRlcmZhY2Uuc2V0dXBVc2VySW50ZXJmYWNlKCk7XG5cbiAgICAgICAgLy8gV2Vic29ja2V0IHNldHVwLlxuICAgICAgICBjbGllbnQuYXV0aGVudGljYXRpb24oZnVuY3Rpb24oZXJyb3IsIHdlYnNvY2tldCkge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIGNsaWVudC5zb2NrZXQgPSB3ZWJzb2NrZXQ7XG4gICAgICAgICAgICBjbGllbnQuc2V0dXBTb2NrZXRMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3NldHVwIGNvbXBsZXRlJyk7XG4gICAgfSk7XG59XG4iLCJcbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5sZXQgQ2xpZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0dXMgPSB7XG4gICAgICAgIG9ubGluZSA6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLnNvY2tldCA9IG51bGw7XG59O1xuXG5leHBvcnQgbGV0IGNsaWVudCA9IG5ldyBDbGllbnQoKTtcblxuQ2xpZW50LnByb3RvdHlwZS5zZXR1cFNvY2tldExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldHVwU29ja2V0TGlzdGVuZXJzKCkge1xuXG59O1xuXG5DbGllbnQucHJvdG90eXBlLmF1dGhlbnRpY2F0aW9uID0gZnVuY3Rpb24gYXV0aGVudGljYXRpb24oY29uZmlnLCBjYikge1xuICAgIGlmICghY2IgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYiA9IGNvbmZpZztcbiAgICAgICAgY29uZmlnID0ge307XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHdlYnNvY2tldCBhbmQgY29ubmVjdC5cbiAgICBsZXQgd2Vic29ja2V0ID0gbnVsbDtcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cub3JpZ2luKTtcbiAgICBpZiAod2luZG93Lm9yaWdpbi5pbmNsdWRlcygnY2hyb21lLWV4dGVuc2lvbicpKSB7XG4gICAgICAgIC8vIERldmVsb3BtZW50XG4gICAgICAgIHdlYnNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHA6Ly8xMjcuMC4wLjE6Nzc3OScsIHtcbiAgICAgICAgICAgIHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0JywgJ3BvbGxpbmcnXVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQcm9kdWN0aW9uXG4gICAgICAgIHdlYnNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHBzOi8vcHN5Y2hlZGVsaWNlcy5jb20nLCB7XG4gICAgICAgICAgICBzZWN1cmU6IHRydWUsXG4gICAgICAgICAgICBwb3J0OiA4MFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB3ZWJzb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICB3ZWJzb2NrZXQub24oJ3JlYWR5JywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0ZWQgdG8gc2VydmVyLi4uXFxuJyk7XG4gICAgICAgICAgICByZXR1cm4gY2IobnVsbCwgd2Vic29ja2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2Vic29ja2V0Lm9uKCdjbGllbnRfZXJyb3InLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW2NsaWVudF9lcnJvcl1cXG4nKTtcbiAgICAgICAgICAgIGNiKG5ldyBFcnJvcignQXV0aGVudGljYXRpb24gRXJyb3InKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhZnRlclxuXG5mdW5jdGlvbiBhZnRlcihjb3VudCwgY2FsbGJhY2ssIGVycl9jYikge1xuICAgIHZhciBiYWlsID0gZmFsc2VcbiAgICBlcnJfY2IgPSBlcnJfY2IgfHwgbm9vcFxuICAgIHByb3h5LmNvdW50ID0gY291bnRcblxuICAgIHJldHVybiAoY291bnQgPT09IDApID8gY2FsbGJhY2soKSA6IHByb3h5XG5cbiAgICBmdW5jdGlvbiBwcm94eShlcnIsIHJlc3VsdCkge1xuICAgICAgICBpZiAocHJveHkuY291bnQgPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhZnRlciBjYWxsZWQgdG9vIG1hbnkgdGltZXMnKVxuICAgICAgICB9XG4gICAgICAgIC0tcHJveHkuY291bnRcblxuICAgICAgICAvLyBhZnRlciBmaXJzdCBlcnJvciwgcmVzdCBhcmUgcGFzc2VkIHRvIGVycl9jYlxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBiYWlsID0gdHJ1ZVxuICAgICAgICAgICAgY2FsbGJhY2soZXJyKVxuICAgICAgICAgICAgLy8gZnV0dXJlIGVycm9yIGNhbGxiYWNrcyB3aWxsIGdvIHRvIGVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZXJyX2NiXG4gICAgICAgIH0gZWxzZSBpZiAocHJveHkuY291bnQgPT09IDAgJiYgIWJhaWwpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG4iLCIvKipcbiAqIEFuIGFic3RyYWN0aW9uIGZvciBzbGljaW5nIGFuIGFycmF5YnVmZmVyIGV2ZW4gd2hlblxuICogQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlIGlzIG5vdCBzdXBwb3J0ZWRcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyYXlidWZmZXIsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYXJyYXlidWZmZXIuYnl0ZUxlbmd0aDtcbiAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICBlbmQgPSBlbmQgfHwgYnl0ZXM7XG5cbiAgaWYgKGFycmF5YnVmZmVyLnNsaWNlKSB7IHJldHVybiBhcnJheWJ1ZmZlci5zbGljZShzdGFydCwgZW5kKTsgfVxuXG4gIGlmIChzdGFydCA8IDApIHsgc3RhcnQgKz0gYnl0ZXM7IH1cbiAgaWYgKGVuZCA8IDApIHsgZW5kICs9IGJ5dGVzOyB9XG4gIGlmIChlbmQgPiBieXRlcykgeyBlbmQgPSBieXRlczsgfVxuXG4gIGlmIChzdGFydCA+PSBieXRlcyB8fCBzdGFydCA+PSBlbmQgfHwgYnl0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICB9XG5cbiAgdmFyIGFidiA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKTtcbiAgdmFyIHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGVuZCAtIHN0YXJ0KTtcbiAgZm9yICh2YXIgaSA9IHN0YXJ0LCBpaSA9IDA7IGkgPCBlbmQ7IGkrKywgaWkrKykge1xuICAgIHJlc3VsdFtpaV0gPSBhYnZbaV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5idWZmZXI7XG59O1xuIiwiXG4vKipcbiAqIEV4cG9zZSBgQmFja29mZmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrb2ZmO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYmFja29mZiB0aW1lciB3aXRoIGBvcHRzYC5cbiAqXG4gKiAtIGBtaW5gIGluaXRpYWwgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgWzEwMF1cbiAqIC0gYG1heGAgbWF4IHRpbWVvdXQgWzEwMDAwXVxuICogLSBgaml0dGVyYCBbMF1cbiAqIC0gYGZhY3RvcmAgWzJdXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gQmFja29mZihvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICB0aGlzLm1zID0gb3B0cy5taW4gfHwgMTAwO1xuICB0aGlzLm1heCA9IG9wdHMubWF4IHx8IDEwMDAwO1xuICB0aGlzLmZhY3RvciA9IG9wdHMuZmFjdG9yIHx8IDI7XG4gIHRoaXMuaml0dGVyID0gb3B0cy5qaXR0ZXIgPiAwICYmIG9wdHMuaml0dGVyIDw9IDEgPyBvcHRzLmppdHRlciA6IDA7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgYmFja29mZiBkdXJhdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24oKXtcbiAgdmFyIG1zID0gdGhpcy5tcyAqIE1hdGgucG93KHRoaXMuZmFjdG9yLCB0aGlzLmF0dGVtcHRzKyspO1xuICBpZiAodGhpcy5qaXR0ZXIpIHtcbiAgICB2YXIgcmFuZCA9ICBNYXRoLnJhbmRvbSgpO1xuICAgIHZhciBkZXZpYXRpb24gPSBNYXRoLmZsb29yKHJhbmQgKiB0aGlzLmppdHRlciAqIG1zKTtcbiAgICBtcyA9IChNYXRoLmZsb29yKHJhbmQgKiAxMCkgJiAxKSA9PSAwICA/IG1zIC0gZGV2aWF0aW9uIDogbXMgKyBkZXZpYXRpb247XG4gIH1cbiAgcmV0dXJuIE1hdGgubWluKG1zLCB0aGlzLm1heCkgfCAwO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgbnVtYmVyIG9mIGF0dGVtcHRzLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpe1xuICB0aGlzLmF0dGVtcHRzID0gMDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtaW5pbXVtIGR1cmF0aW9uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRNaW4gPSBmdW5jdGlvbihtaW4pe1xuICB0aGlzLm1zID0gbWluO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1heGltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1heCA9IGZ1bmN0aW9uKG1heCl7XG4gIHRoaXMubWF4ID0gbWF4O1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIGppdHRlclxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0Sml0dGVyID0gZnVuY3Rpb24oaml0dGVyKXtcbiAgdGhpcy5qaXR0ZXIgPSBqaXR0ZXI7XG59O1xuXG4iLCIvKlxuICogYmFzZTY0LWFycmF5YnVmZmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG4oZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGNoYXJzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XG5cbiAgLy8gVXNlIGEgbG9va3VwIHRhYmxlIHRvIGZpbmQgdGhlIGluZGV4LlxuICB2YXIgbG9va3VwID0gbmV3IFVpbnQ4QXJyYXkoMjU2KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykge1xuICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7XG4gIH1cblxuICBleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLFxuICAgIGksIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gXCJcIjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTMpIHtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpXSA+PiAyXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyKSB8IChieXRlc1tpICsgMl0gPj4gNildO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAoKGxlbiAlIDMpID09PSAyKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArIFwiPVwiO1xuICAgIH0gZWxzZSBpZiAobGVuICUgMyA9PT0gMSkge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyBcIj09XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NDtcbiAgfTtcblxuICBleHBvcnRzLmRlY29kZSA9ICBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYmFzZTY0Lmxlbmd0aCAqIDAuNzUsXG4gICAgbGVuID0gYmFzZTY0Lmxlbmd0aCwgaSwgcCA9IDAsXG4gICAgZW5jb2RlZDEsIGVuY29kZWQyLCBlbmNvZGVkMywgZW5jb2RlZDQ7XG5cbiAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09IFwiPVwiKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcnJheWJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpLFxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9NCkge1xuICAgICAgZW5jb2RlZDEgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSldO1xuICAgICAgZW5jb2RlZDIgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSsxKV07XG4gICAgICBlbmNvZGVkMyA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKzIpXTtcbiAgICAgIGVuY29kZWQ0ID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkrMyldO1xuXG4gICAgICBieXRlc1twKytdID0gKGVuY29kZWQxIDw8IDIpIHwgKGVuY29kZWQyID4+IDQpO1xuICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDIgJiAxNSkgPDwgNCkgfCAoZW5jb2RlZDMgPj4gMik7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMyAmIDMpIDw8IDYpIHwgKGVuY29kZWQ0ICYgNjMpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheWJ1ZmZlcjtcbiAgfTtcbn0pKCk7XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIi8qKlxyXG4gKiBDcmVhdGUgYSBibG9iIGJ1aWxkZXIgZXZlbiB3aGVuIHZlbmRvciBwcmVmaXhlcyBleGlzdFxyXG4gKi9cclxuXHJcbnZhciBCbG9iQnVpbGRlciA9IHR5cGVvZiBCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBCbG9iQnVpbGRlciA6XHJcbiAgdHlwZW9mIFdlYktpdEJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IFdlYktpdEJsb2JCdWlsZGVyIDpcclxuICB0eXBlb2YgTVNCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBNU0Jsb2JCdWlsZGVyIDpcclxuICB0eXBlb2YgTW96QmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTW96QmxvYkJ1aWxkZXIgOiBcclxuICBmYWxzZTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBCbG9iIGNvbnN0cnVjdG9yIGlzIHN1cHBvcnRlZFxyXG4gKi9cclxuXHJcbnZhciBibG9iU3VwcG9ydGVkID0gKGZ1bmN0aW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgYSA9IG5ldyBCbG9iKFsnaGknXSk7XHJcbiAgICByZXR1cm4gYS5zaXplID09PSAyO1xyXG4gIH0gY2F0Y2goZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufSkoKTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBCbG9iIGNvbnN0cnVjdG9yIHN1cHBvcnRzIEFycmF5QnVmZmVyVmlld3NcclxuICogRmFpbHMgaW4gU2FmYXJpIDYsIHNvIHdlIG5lZWQgdG8gbWFwIHRvIEFycmF5QnVmZmVycyB0aGVyZS5cclxuICovXHJcblxyXG52YXIgYmxvYlN1cHBvcnRzQXJyYXlCdWZmZXJWaWV3ID0gYmxvYlN1cHBvcnRlZCAmJiAoZnVuY3Rpb24oKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBiID0gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KFsxLDJdKV0pO1xyXG4gICAgcmV0dXJuIGIuc2l6ZSA9PT0gMjtcclxuICB9IGNhdGNoKGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn0pKCk7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgQmxvYkJ1aWxkZXIgaXMgc3VwcG9ydGVkXHJcbiAqL1xyXG5cclxudmFyIGJsb2JCdWlsZGVyU3VwcG9ydGVkID0gQmxvYkJ1aWxkZXJcclxuICAmJiBCbG9iQnVpbGRlci5wcm90b3R5cGUuYXBwZW5kXHJcbiAgJiYgQmxvYkJ1aWxkZXIucHJvdG90eXBlLmdldEJsb2I7XHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgbWFwcyBBcnJheUJ1ZmZlclZpZXdzIHRvIEFycmF5QnVmZmVyc1xyXG4gKiBVc2VkIGJ5IEJsb2JCdWlsZGVyIGNvbnN0cnVjdG9yIGFuZCBvbGQgYnJvd3NlcnMgdGhhdCBkaWRuJ3RcclxuICogc3VwcG9ydCBpdCBpbiB0aGUgQmxvYiBjb25zdHJ1Y3Rvci5cclxuICovXHJcblxyXG5mdW5jdGlvbiBtYXBBcnJheUJ1ZmZlclZpZXdzKGFyeSkge1xyXG4gIHJldHVybiBhcnkubWFwKGZ1bmN0aW9uKGNodW5rKSB7XHJcbiAgICBpZiAoY2h1bmsuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgdmFyIGJ1ZiA9IGNodW5rLmJ1ZmZlcjtcclxuXHJcbiAgICAgIC8vIGlmIHRoaXMgaXMgYSBzdWJhcnJheSwgbWFrZSBhIGNvcHkgc28gd2Ugb25seVxyXG4gICAgICAvLyBpbmNsdWRlIHRoZSBzdWJhcnJheSByZWdpb24gZnJvbSB0aGUgdW5kZXJseWluZyBidWZmZXJcclxuICAgICAgaWYgKGNodW5rLmJ5dGVMZW5ndGggIT09IGJ1Zi5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNvcHkgPSBuZXcgVWludDhBcnJheShjaHVuay5ieXRlTGVuZ3RoKTtcclxuICAgICAgICBjb3B5LnNldChuZXcgVWludDhBcnJheShidWYsIGNodW5rLmJ5dGVPZmZzZXQsIGNodW5rLmJ5dGVMZW5ndGgpKTtcclxuICAgICAgICBidWYgPSBjb3B5LmJ1ZmZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGJ1ZjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2h1bms7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJsb2JCdWlsZGVyQ29uc3RydWN0b3IoYXJ5LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gIHZhciBiYiA9IG5ldyBCbG9iQnVpbGRlcigpO1xyXG4gIG1hcEFycmF5QnVmZmVyVmlld3MoYXJ5KS5mb3JFYWNoKGZ1bmN0aW9uKHBhcnQpIHtcclxuICAgIGJiLmFwcGVuZChwYXJ0KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChvcHRpb25zLnR5cGUpID8gYmIuZ2V0QmxvYihvcHRpb25zLnR5cGUpIDogYmIuZ2V0QmxvYigpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gQmxvYkNvbnN0cnVjdG9yKGFyeSwgb3B0aW9ucykge1xyXG4gIHJldHVybiBuZXcgQmxvYihtYXBBcnJheUJ1ZmZlclZpZXdzKGFyeSksIG9wdGlvbnMgfHwge30pO1xyXG59O1xyXG5cclxuaWYgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJykge1xyXG4gIEJsb2JCdWlsZGVyQ29uc3RydWN0b3IucHJvdG90eXBlID0gQmxvYi5wcm90b3R5cGU7XHJcbiAgQmxvYkNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IEJsb2IucHJvdG90eXBlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcclxuICBpZiAoYmxvYlN1cHBvcnRlZCkge1xyXG4gICAgcmV0dXJuIGJsb2JTdXBwb3J0c0FycmF5QnVmZmVyVmlldyA/IEJsb2IgOiBCbG9iQ29uc3RydWN0b3I7XHJcbiAgfSBlbHNlIGlmIChibG9iQnVpbGRlclN1cHBvcnRlZCkge1xyXG4gICAgcmV0dXJuIEJsb2JCdWlsZGVyQ29uc3RydWN0b3I7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59KSgpO1xyXG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8qKlxuICogU2xpY2UgcmVmZXJlbmNlLlxuICovXG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xuXG4vKipcbiAqIEJpbmQgYG9iamAgdG8gYGZuYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFN0cmluZ30gZm4gb3Igc3RyaW5nXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIGZuKXtcbiAgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBmbikgZm4gPSBvYmpbZm5dO1xuICBpZiAoJ2Z1bmN0aW9uJyAhPSB0eXBlb2YgZm4pIHRocm93IG5ldyBFcnJvcignYmluZCgpIHJlcXVpcmVzIGEgZnVuY3Rpb24nKTtcbiAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmbi5hcHBseShvYmosIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICB9XG59O1xuIiwiXHJcbi8qKlxyXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxyXG4gKi9cclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxyXG4gKlxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XHJcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XHJcbn07XHJcblxyXG4vKipcclxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG1peGluKG9iaikge1xyXG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xyXG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub24gPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxyXG4gICAgLnB1c2goZm4pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxyXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICBmdW5jdGlvbiBvbigpIHtcclxuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XHJcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgb24uZm4gPSBmbjtcclxuICB0aGlzLm9uKGV2ZW50LCBvbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcclxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICAvLyBhbGxcclxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XHJcblxyXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcclxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcclxuICB2YXIgY2I7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcclxuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtNaXhlZH0gLi4uXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcclxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuXHJcbiAgaWYgKGNhbGxiYWNrcykge1xyXG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcclxufTtcclxuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGEsIGIpe1xuICB2YXIgZm4gPSBmdW5jdGlvbigpe307XG4gIGZuLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICBhLnByb3RvdHlwZSA9IG5ldyBmbjtcbiAgYS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBhO1xufTsiLCJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zb2NrZXQnKTtcblxuLyoqXG4gKiBFeHBvcnRzIHBhcnNlclxuICpcbiAqIEBhcGkgcHVibGljXG4gKlxuICovXG5tb2R1bGUuZXhwb3J0cy5wYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHRyYW5zcG9ydHMgPSByZXF1aXJlKCcuL3RyYW5zcG9ydHMvaW5kZXgnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2VuZ2luZS5pby1jbGllbnQ6c29ja2V0Jyk7XG52YXIgaW5kZXggPSByZXF1aXJlKCdpbmRleG9mJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xudmFyIHBhcnNldXJpID0gcmVxdWlyZSgncGFyc2V1cmknKTtcbnZhciBwYXJzZXFzID0gcmVxdWlyZSgncGFyc2VxcycpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gU29ja2V0O1xuXG4vKipcbiAqIFNvY2tldCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHVyaSBvciBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBTb2NrZXQgKHVyaSwgb3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU29ja2V0KSkgcmV0dXJuIG5ldyBTb2NrZXQodXJpLCBvcHRzKTtcblxuICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICBpZiAodXJpICYmICdvYmplY3QnID09PSB0eXBlb2YgdXJpKSB7XG4gICAgb3B0cyA9IHVyaTtcbiAgICB1cmkgPSBudWxsO1xuICB9XG5cbiAgaWYgKHVyaSkge1xuICAgIHVyaSA9IHBhcnNldXJpKHVyaSk7XG4gICAgb3B0cy5ob3N0bmFtZSA9IHVyaS5ob3N0O1xuICAgIG9wdHMuc2VjdXJlID0gdXJpLnByb3RvY29sID09PSAnaHR0cHMnIHx8IHVyaS5wcm90b2NvbCA9PT0gJ3dzcyc7XG4gICAgb3B0cy5wb3J0ID0gdXJpLnBvcnQ7XG4gICAgaWYgKHVyaS5xdWVyeSkgb3B0cy5xdWVyeSA9IHVyaS5xdWVyeTtcbiAgfSBlbHNlIGlmIChvcHRzLmhvc3QpIHtcbiAgICBvcHRzLmhvc3RuYW1lID0gcGFyc2V1cmkob3B0cy5ob3N0KS5ob3N0O1xuICB9XG5cbiAgdGhpcy5zZWN1cmUgPSBudWxsICE9IG9wdHMuc2VjdXJlID8gb3B0cy5zZWN1cmVcbiAgICA6ICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmICdodHRwczonID09PSBsb2NhdGlvbi5wcm90b2NvbCk7XG5cbiAgaWYgKG9wdHMuaG9zdG5hbWUgJiYgIW9wdHMucG9ydCkge1xuICAgIC8vIGlmIG5vIHBvcnQgaXMgc3BlY2lmaWVkIG1hbnVhbGx5LCB1c2UgdGhlIHByb3RvY29sIGRlZmF1bHRcbiAgICBvcHRzLnBvcnQgPSB0aGlzLnNlY3VyZSA/ICc0NDMnIDogJzgwJztcbiAgfVxuXG4gIHRoaXMuYWdlbnQgPSBvcHRzLmFnZW50IHx8IGZhbHNlO1xuICB0aGlzLmhvc3RuYW1lID0gb3B0cy5ob3N0bmFtZSB8fFxuICAgICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0Jyk7XG4gIHRoaXMucG9ydCA9IG9wdHMucG9ydCB8fCAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhdGlvbi5wb3J0XG4gICAgICA/IGxvY2F0aW9uLnBvcnRcbiAgICAgIDogKHRoaXMuc2VjdXJlID8gNDQzIDogODApKTtcbiAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnkgfHwge307XG4gIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIHRoaXMucXVlcnkpIHRoaXMucXVlcnkgPSBwYXJzZXFzLmRlY29kZSh0aGlzLnF1ZXJ5KTtcbiAgdGhpcy51cGdyYWRlID0gZmFsc2UgIT09IG9wdHMudXBncmFkZTtcbiAgdGhpcy5wYXRoID0gKG9wdHMucGF0aCB8fCAnL2VuZ2luZS5pbycpLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLyc7XG4gIHRoaXMuZm9yY2VKU09OUCA9ICEhb3B0cy5mb3JjZUpTT05QO1xuICB0aGlzLmpzb25wID0gZmFsc2UgIT09IG9wdHMuanNvbnA7XG4gIHRoaXMuZm9yY2VCYXNlNjQgPSAhIW9wdHMuZm9yY2VCYXNlNjQ7XG4gIHRoaXMuZW5hYmxlc1hEUiA9ICEhb3B0cy5lbmFibGVzWERSO1xuICB0aGlzLnRpbWVzdGFtcFBhcmFtID0gb3B0cy50aW1lc3RhbXBQYXJhbSB8fCAndCc7XG4gIHRoaXMudGltZXN0YW1wUmVxdWVzdHMgPSBvcHRzLnRpbWVzdGFtcFJlcXVlc3RzO1xuICB0aGlzLnRyYW5zcG9ydHMgPSBvcHRzLnRyYW5zcG9ydHMgfHwgWydwb2xsaW5nJywgJ3dlYnNvY2tldCddO1xuICB0aGlzLnRyYW5zcG9ydE9wdGlvbnMgPSBvcHRzLnRyYW5zcG9ydE9wdGlvbnMgfHwge307XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICcnO1xuICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG4gIHRoaXMucG9saWN5UG9ydCA9IG9wdHMucG9saWN5UG9ydCB8fCA4NDM7XG4gIHRoaXMucmVtZW1iZXJVcGdyYWRlID0gb3B0cy5yZW1lbWJlclVwZ3JhZGUgfHwgZmFsc2U7XG4gIHRoaXMuYmluYXJ5VHlwZSA9IG51bGw7XG4gIHRoaXMub25seUJpbmFyeVVwZ3JhZGVzID0gb3B0cy5vbmx5QmluYXJ5VXBncmFkZXM7XG4gIHRoaXMucGVyTWVzc2FnZURlZmxhdGUgPSBmYWxzZSAhPT0gb3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSA/IChvcHRzLnBlck1lc3NhZ2VEZWZsYXRlIHx8IHt9KSA6IGZhbHNlO1xuXG4gIGlmICh0cnVlID09PSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlKSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlID0ge307XG4gIGlmICh0aGlzLnBlck1lc3NhZ2VEZWZsYXRlICYmIG51bGwgPT0gdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZS50aHJlc2hvbGQpIHtcbiAgICB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCA9IDEwMjQ7XG4gIH1cblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5wZnggPSBvcHRzLnBmeCB8fCBudWxsO1xuICB0aGlzLmtleSA9IG9wdHMua2V5IHx8IG51bGw7XG4gIHRoaXMucGFzc3BocmFzZSA9IG9wdHMucGFzc3BocmFzZSB8fCBudWxsO1xuICB0aGlzLmNlcnQgPSBvcHRzLmNlcnQgfHwgbnVsbDtcbiAgdGhpcy5jYSA9IG9wdHMuY2EgfHwgbnVsbDtcbiAgdGhpcy5jaXBoZXJzID0gb3B0cy5jaXBoZXJzIHx8IG51bGw7XG4gIHRoaXMucmVqZWN0VW5hdXRob3JpemVkID0gb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRzLnJlamVjdFVuYXV0aG9yaXplZDtcbiAgdGhpcy5mb3JjZU5vZGUgPSAhIW9wdHMuZm9yY2VOb2RlO1xuXG4gIC8vIGRldGVjdCBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudFxuICB0aGlzLmlzUmVhY3ROYXRpdmUgPSAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnc3RyaW5nJyAmJiBuYXZpZ2F0b3IucHJvZHVjdC50b0xvd2VyQ2FzZSgpID09PSAncmVhY3RuYXRpdmUnKTtcblxuICAvLyBvdGhlciBvcHRpb25zIGZvciBOb2RlLmpzIG9yIFJlYWN0TmF0aXZlIGNsaWVudFxuICBpZiAodHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMuaXNSZWFjdE5hdGl2ZSkge1xuICAgIGlmIChvcHRzLmV4dHJhSGVhZGVycyAmJiBPYmplY3Qua2V5cyhvcHRzLmV4dHJhSGVhZGVycykubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5leHRyYUhlYWRlcnMgPSBvcHRzLmV4dHJhSGVhZGVycztcbiAgICB9XG5cbiAgICBpZiAob3B0cy5sb2NhbEFkZHJlc3MpIHtcbiAgICAgIHRoaXMubG9jYWxBZGRyZXNzID0gb3B0cy5sb2NhbEFkZHJlc3M7XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0IG9uIGhhbmRzaGFrZVxuICB0aGlzLmlkID0gbnVsbDtcbiAgdGhpcy51cGdyYWRlcyA9IG51bGw7XG4gIHRoaXMucGluZ0ludGVydmFsID0gbnVsbDtcbiAgdGhpcy5waW5nVGltZW91dCA9IG51bGw7XG5cbiAgLy8gc2V0IG9uIGhlYXJ0YmVhdFxuICB0aGlzLnBpbmdJbnRlcnZhbFRpbWVyID0gbnVsbDtcbiAgdGhpcy5waW5nVGltZW91dFRpbWVyID0gbnVsbDtcblxuICB0aGlzLm9wZW4oKTtcbn1cblxuU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihTb2NrZXQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvY29sID0gcGFyc2VyLnByb3RvY29sOyAvLyB0aGlzIGlzIGFuIGludFxuXG4vKipcbiAqIEV4cG9zZSBkZXBzIGZvciBsZWdhY3kgY29tcGF0aWJpbGl0eVxuICogYW5kIHN0YW5kYWxvbmUgYnJvd3NlciBhY2Nlc3MuXG4gKi9cblxuU29ja2V0LlNvY2tldCA9IFNvY2tldDtcblNvY2tldC5UcmFuc3BvcnQgPSByZXF1aXJlKCcuL3RyYW5zcG9ydCcpO1xuU29ja2V0LnRyYW5zcG9ydHMgPSByZXF1aXJlKCcuL3RyYW5zcG9ydHMvaW5kZXgnKTtcblNvY2tldC5wYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyB0cmFuc3BvcnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gKiBAcmV0dXJuIHtUcmFuc3BvcnR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmNyZWF0ZVRyYW5zcG9ydCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlYnVnKCdjcmVhdGluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gIHZhciBxdWVyeSA9IGNsb25lKHRoaXMucXVlcnkpO1xuXG4gIC8vIGFwcGVuZCBlbmdpbmUuaW8gcHJvdG9jb2wgaWRlbnRpZmllclxuICBxdWVyeS5FSU8gPSBwYXJzZXIucHJvdG9jb2w7XG5cbiAgLy8gdHJhbnNwb3J0IG5hbWVcbiAgcXVlcnkudHJhbnNwb3J0ID0gbmFtZTtcblxuICAvLyBwZXItdHJhbnNwb3J0IG9wdGlvbnNcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLnRyYW5zcG9ydE9wdGlvbnNbbmFtZV0gfHwge307XG5cbiAgLy8gc2Vzc2lvbiBpZCBpZiB3ZSBhbHJlYWR5IGhhdmUgb25lXG4gIGlmICh0aGlzLmlkKSBxdWVyeS5zaWQgPSB0aGlzLmlkO1xuXG4gIHZhciB0cmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0c1tuYW1lXSh7XG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIHNvY2tldDogdGhpcyxcbiAgICBhZ2VudDogb3B0aW9ucy5hZ2VudCB8fCB0aGlzLmFnZW50LFxuICAgIGhvc3RuYW1lOiBvcHRpb25zLmhvc3RuYW1lIHx8IHRoaXMuaG9zdG5hbWUsXG4gICAgcG9ydDogb3B0aW9ucy5wb3J0IHx8IHRoaXMucG9ydCxcbiAgICBzZWN1cmU6IG9wdGlvbnMuc2VjdXJlIHx8IHRoaXMuc2VjdXJlLFxuICAgIHBhdGg6IG9wdGlvbnMucGF0aCB8fCB0aGlzLnBhdGgsXG4gICAgZm9yY2VKU09OUDogb3B0aW9ucy5mb3JjZUpTT05QIHx8IHRoaXMuZm9yY2VKU09OUCxcbiAgICBqc29ucDogb3B0aW9ucy5qc29ucCB8fCB0aGlzLmpzb25wLFxuICAgIGZvcmNlQmFzZTY0OiBvcHRpb25zLmZvcmNlQmFzZTY0IHx8IHRoaXMuZm9yY2VCYXNlNjQsXG4gICAgZW5hYmxlc1hEUjogb3B0aW9ucy5lbmFibGVzWERSIHx8IHRoaXMuZW5hYmxlc1hEUixcbiAgICB0aW1lc3RhbXBSZXF1ZXN0czogb3B0aW9ucy50aW1lc3RhbXBSZXF1ZXN0cyB8fCB0aGlzLnRpbWVzdGFtcFJlcXVlc3RzLFxuICAgIHRpbWVzdGFtcFBhcmFtOiBvcHRpb25zLnRpbWVzdGFtcFBhcmFtIHx8IHRoaXMudGltZXN0YW1wUGFyYW0sXG4gICAgcG9saWN5UG9ydDogb3B0aW9ucy5wb2xpY3lQb3J0IHx8IHRoaXMucG9saWN5UG9ydCxcbiAgICBwZng6IG9wdGlvbnMucGZ4IHx8IHRoaXMucGZ4LFxuICAgIGtleTogb3B0aW9ucy5rZXkgfHwgdGhpcy5rZXksXG4gICAgcGFzc3BocmFzZTogb3B0aW9ucy5wYXNzcGhyYXNlIHx8IHRoaXMucGFzc3BocmFzZSxcbiAgICBjZXJ0OiBvcHRpb25zLmNlcnQgfHwgdGhpcy5jZXJ0LFxuICAgIGNhOiBvcHRpb25zLmNhIHx8IHRoaXMuY2EsXG4gICAgY2lwaGVyczogb3B0aW9ucy5jaXBoZXJzIHx8IHRoaXMuY2lwaGVycyxcbiAgICByZWplY3RVbmF1dGhvcml6ZWQ6IG9wdGlvbnMucmVqZWN0VW5hdXRob3JpemVkIHx8IHRoaXMucmVqZWN0VW5hdXRob3JpemVkLFxuICAgIHBlck1lc3NhZ2VEZWZsYXRlOiBvcHRpb25zLnBlck1lc3NhZ2VEZWZsYXRlIHx8IHRoaXMucGVyTWVzc2FnZURlZmxhdGUsXG4gICAgZXh0cmFIZWFkZXJzOiBvcHRpb25zLmV4dHJhSGVhZGVycyB8fCB0aGlzLmV4dHJhSGVhZGVycyxcbiAgICBmb3JjZU5vZGU6IG9wdGlvbnMuZm9yY2VOb2RlIHx8IHRoaXMuZm9yY2VOb2RlLFxuICAgIGxvY2FsQWRkcmVzczogb3B0aW9ucy5sb2NhbEFkZHJlc3MgfHwgdGhpcy5sb2NhbEFkZHJlc3MsXG4gICAgcmVxdWVzdFRpbWVvdXQ6IG9wdGlvbnMucmVxdWVzdFRpbWVvdXQgfHwgdGhpcy5yZXF1ZXN0VGltZW91dCxcbiAgICBwcm90b2NvbHM6IG9wdGlvbnMucHJvdG9jb2xzIHx8IHZvaWQgKDApLFxuICAgIGlzUmVhY3ROYXRpdmU6IHRoaXMuaXNSZWFjdE5hdGl2ZVxuICB9KTtcblxuICByZXR1cm4gdHJhbnNwb3J0O1xufTtcblxuZnVuY3Rpb24gY2xvbmUgKG9iaikge1xuICB2YXIgbyA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIG9baV0gPSBvYmpbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIHRyYW5zcG9ydCB0byB1c2UgYW5kIHN0YXJ0cyBwcm9iZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuU29ja2V0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdHJhbnNwb3J0O1xuICBpZiAodGhpcy5yZW1lbWJlclVwZ3JhZGUgJiYgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyAmJiB0aGlzLnRyYW5zcG9ydHMuaW5kZXhPZignd2Vic29ja2V0JykgIT09IC0xKSB7XG4gICAgdHJhbnNwb3J0ID0gJ3dlYnNvY2tldCc7XG4gIH0gZWxzZSBpZiAoMCA9PT0gdGhpcy50cmFuc3BvcnRzLmxlbmd0aCkge1xuICAgIC8vIEVtaXQgZXJyb3Igb24gbmV4dCB0aWNrIHNvIGl0IGNhbiBiZSBsaXN0ZW5lZCB0b1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuZW1pdCgnZXJyb3InLCAnTm8gdHJhbnNwb3J0cyBhdmFpbGFibGUnKTtcbiAgICB9LCAwKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnRzWzBdO1xuICB9XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuaW5nJztcblxuICAvLyBSZXRyeSB3aXRoIHRoZSBuZXh0IHRyYW5zcG9ydCBpZiB0aGUgdHJhbnNwb3J0IGlzIGRpc2FibGVkIChqc29ucDogZmFsc2UpXG4gIHRyeSB7XG4gICAgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRoaXMudHJhbnNwb3J0cy5zaGlmdCgpO1xuICAgIHRoaXMub3BlbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyYW5zcG9ydC5vcGVuKCk7XG4gIHRoaXMuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0LiBEaXNhYmxlcyB0aGUgZXhpc3Rpbmcgb25lIChpZiBhbnkpLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuc2V0VHJhbnNwb3J0ID0gZnVuY3Rpb24gKHRyYW5zcG9ydCkge1xuICBkZWJ1Zygnc2V0dGluZyB0cmFuc3BvcnQgJXMnLCB0cmFuc3BvcnQubmFtZSk7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAodGhpcy50cmFuc3BvcnQpIHtcbiAgICBkZWJ1ZygnY2xlYXJpbmcgZXhpc3RpbmcgdHJhbnNwb3J0ICVzJywgdGhpcy50cmFuc3BvcnQubmFtZSk7XG4gICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gIH1cblxuICAvLyBzZXQgdXAgdHJhbnNwb3J0XG4gIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuXG4gIC8vIHNldCB1cCB0cmFuc3BvcnQgbGlzdGVuZXJzXG4gIHRyYW5zcG9ydFxuICAub24oJ2RyYWluJywgZnVuY3Rpb24gKCkge1xuICAgIHNlbGYub25EcmFpbigpO1xuICB9KVxuICAub24oJ3BhY2tldCcsIGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICBzZWxmLm9uUGFja2V0KHBhY2tldCk7XG4gIH0pXG4gIC5vbignZXJyb3InLCBmdW5jdGlvbiAoZSkge1xuICAgIHNlbGYub25FcnJvcihlKTtcbiAgfSlcbiAgLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLm9uQ2xvc2UoJ3RyYW5zcG9ydCBjbG9zZScpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUHJvYmVzIGEgdHJhbnNwb3J0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5wcm9iZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlYnVnKCdwcm9iaW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgdmFyIHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KG5hbWUsIHsgcHJvYmU6IDEgfSk7XG4gIHZhciBmYWlsZWQgPSBmYWxzZTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBvblRyYW5zcG9ydE9wZW4gKCkge1xuICAgIGlmIChzZWxmLm9ubHlCaW5hcnlVcGdyYWRlcykge1xuICAgICAgdmFyIHVwZ3JhZGVMb3Nlc0JpbmFyeSA9ICF0aGlzLnN1cHBvcnRzQmluYXJ5ICYmIHNlbGYudHJhbnNwb3J0LnN1cHBvcnRzQmluYXJ5O1xuICAgICAgZmFpbGVkID0gZmFpbGVkIHx8IHVwZ3JhZGVMb3Nlc0JpbmFyeTtcbiAgICB9XG4gICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgb3BlbmVkJywgbmFtZSk7XG4gICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogJ3BpbmcnLCBkYXRhOiAncHJvYmUnIH1dKTtcbiAgICB0cmFuc3BvcnQub25jZSgncGFja2V0JywgZnVuY3Rpb24gKG1zZykge1xuICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuICAgICAgaWYgKCdwb25nJyA9PT0gbXNnLnR5cGUgJiYgJ3Byb2JlJyA9PT0gbXNnLmRhdGEpIHtcbiAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgcG9uZycsIG5hbWUpO1xuICAgICAgICBzZWxmLnVwZ3JhZGluZyA9IHRydWU7XG4gICAgICAgIHNlbGYuZW1pdCgndXBncmFkaW5nJywgdHJhbnNwb3J0KTtcbiAgICAgICAgaWYgKCF0cmFuc3BvcnQpIHJldHVybjtcbiAgICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9ICd3ZWJzb2NrZXQnID09PSB0cmFuc3BvcnQubmFtZTtcblxuICAgICAgICBkZWJ1ZygncGF1c2luZyBjdXJyZW50IHRyYW5zcG9ydCBcIiVzXCInLCBzZWxmLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgICAgc2VsZi50cmFuc3BvcnQucGF1c2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgICAgICBpZiAoJ2Nsb3NlZCcgPT09IHNlbGYucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgICAgICAgIGRlYnVnKCdjaGFuZ2luZyB0cmFuc3BvcnQgYW5kIHNlbmRpbmcgdXBncmFkZSBwYWNrZXQnKTtcblxuICAgICAgICAgIGNsZWFudXAoKTtcblxuICAgICAgICAgIHNlbGYuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gICAgICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogJ3VwZ3JhZGUnIH1dKTtcbiAgICAgICAgICBzZWxmLmVtaXQoJ3VwZ3JhZGUnLCB0cmFuc3BvcnQpO1xuICAgICAgICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gICAgICAgICAgc2VsZi51cGdyYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzZWxmLmZsdXNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkJywgbmFtZSk7XG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ3Byb2JlIGVycm9yJyk7XG4gICAgICAgIGVyci50cmFuc3BvcnQgPSB0cmFuc3BvcnQubmFtZTtcbiAgICAgICAgc2VsZi5lbWl0KCd1cGdyYWRlRXJyb3InLCBlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZnJlZXplVHJhbnNwb3J0ICgpIHtcbiAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICAvLyBBbnkgY2FsbGJhY2sgY2FsbGVkIGJ5IHRyYW5zcG9ydCBzaG91bGQgYmUgaWdub3JlZCBzaW5jZSBub3dcbiAgICBmYWlsZWQgPSB0cnVlO1xuXG4gICAgY2xlYW51cCgpO1xuXG4gICAgdHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgfVxuXG4gIC8vIEhhbmRsZSBhbnkgZXJyb3IgdGhhdCBoYXBwZW5zIHdoaWxlIHByb2JpbmdcbiAgZnVuY3Rpb24gb25lcnJvciAoZXJyKSB7XG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdwcm9iZSBlcnJvcjogJyArIGVycik7XG4gICAgZXJyb3IudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICBmcmVlemVUcmFuc3BvcnQoKTtcblxuICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCBiZWNhdXNlIG9mIGVycm9yOiAlcycsIG5hbWUsIGVycik7XG5cbiAgICBzZWxmLmVtaXQoJ3VwZ3JhZGVFcnJvcicsIGVycm9yKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNwb3J0Q2xvc2UgKCkge1xuICAgIG9uZXJyb3IoJ3RyYW5zcG9ydCBjbG9zZWQnKTtcbiAgfVxuXG4gIC8vIFdoZW4gdGhlIHNvY2tldCBpcyBjbG9zZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICBmdW5jdGlvbiBvbmNsb3NlICgpIHtcbiAgICBvbmVycm9yKCdzb2NrZXQgY2xvc2VkJyk7XG4gIH1cblxuICAvLyBXaGVuIHRoZSBzb2NrZXQgaXMgdXBncmFkZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICBmdW5jdGlvbiBvbnVwZ3JhZGUgKHRvKSB7XG4gICAgaWYgKHRyYW5zcG9ydCAmJiB0by5uYW1lICE9PSB0cmFuc3BvcnQubmFtZSkge1xuICAgICAgZGVidWcoJ1wiJXNcIiB3b3JrcyAtIGFib3J0aW5nIFwiJXNcIicsIHRvLm5hbWUsIHRyYW5zcG9ydC5uYW1lKTtcbiAgICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlbW92ZSBhbGwgbGlzdGVuZXJzIG9uIHRoZSB0cmFuc3BvcnQgYW5kIG9uIHNlbGZcbiAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKCdvcGVuJywgb25UcmFuc3BvcnRPcGVuKTtcbiAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9uVHJhbnNwb3J0Q2xvc2UpO1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25jbG9zZSk7XG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcigndXBncmFkaW5nJywgb251cGdyYWRlKTtcbiAgfVxuXG4gIHRyYW5zcG9ydC5vbmNlKCdvcGVuJywgb25UcmFuc3BvcnRPcGVuKTtcbiAgdHJhbnNwb3J0Lm9uY2UoJ2Vycm9yJywgb25lcnJvcik7XG4gIHRyYW5zcG9ydC5vbmNlKCdjbG9zZScsIG9uVHJhbnNwb3J0Q2xvc2UpO1xuXG4gIHRoaXMub25jZSgnY2xvc2UnLCBvbmNsb3NlKTtcbiAgdGhpcy5vbmNlKCd1cGdyYWRpbmcnLCBvbnVwZ3JhZGUpO1xuXG4gIHRyYW5zcG9ydC5vcGVuKCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aGVuIGNvbm5lY3Rpb24gaXMgZGVlbWVkIG9wZW4uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ3NvY2tldCBvcGVuJyk7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuJztcbiAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9ICd3ZWJzb2NrZXQnID09PSB0aGlzLnRyYW5zcG9ydC5uYW1lO1xuICB0aGlzLmVtaXQoJ29wZW4nKTtcbiAgdGhpcy5mbHVzaCgpO1xuXG4gIC8vIHdlIGNoZWNrIGZvciBgcmVhZHlTdGF0ZWAgaW4gY2FzZSBhbiBgb3BlbmBcbiAgLy8gbGlzdGVuZXIgYWxyZWFkeSBjbG9zZWQgdGhlIHNvY2tldFxuICBpZiAoJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUgJiYgdGhpcy51cGdyYWRlICYmIHRoaXMudHJhbnNwb3J0LnBhdXNlKSB7XG4gICAgZGVidWcoJ3N0YXJ0aW5nIHVwZ3JhZGUgcHJvYmVzJyk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLnVwZ3JhZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5wcm9iZSh0aGlzLnVwZ3JhZGVzW2ldKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogSGFuZGxlcyBhIHBhY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uUGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICBpZiAoJ29wZW5pbmcnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgICdjbG9zaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgZGVidWcoJ3NvY2tldCByZWNlaXZlOiB0eXBlIFwiJXNcIiwgZGF0YSBcIiVzXCInLCBwYWNrZXQudHlwZSwgcGFja2V0LmRhdGEpO1xuXG4gICAgdGhpcy5lbWl0KCdwYWNrZXQnLCBwYWNrZXQpO1xuXG4gICAgLy8gU29ja2V0IGlzIGxpdmUgLSBhbnkgcGFja2V0IGNvdW50c1xuICAgIHRoaXMuZW1pdCgnaGVhcnRiZWF0Jyk7XG5cbiAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICBjYXNlICdvcGVuJzpcbiAgICAgICAgdGhpcy5vbkhhbmRzaGFrZShKU09OLnBhcnNlKHBhY2tldC5kYXRhKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb25nJzpcbiAgICAgICAgdGhpcy5zZXRQaW5nKCk7XG4gICAgICAgIHRoaXMuZW1pdCgncG9uZycpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdzZXJ2ZXIgZXJyb3InKTtcbiAgICAgICAgZXJyLmNvZGUgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgdGhpcy5vbkVycm9yKGVycik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtZXNzYWdlJzpcbiAgICAgICAgdGhpcy5lbWl0KCdkYXRhJywgcGFja2V0LmRhdGEpO1xuICAgICAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkZWJ1ZygncGFja2V0IHJlY2VpdmVkIHdpdGggc29ja2V0IHJlYWR5U3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBoYW5kc2hha2UgY29tcGxldGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGFuZHNoYWtlIG9ialxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbkhhbmRzaGFrZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHRoaXMuZW1pdCgnaGFuZHNoYWtlJywgZGF0YSk7XG4gIHRoaXMuaWQgPSBkYXRhLnNpZDtcbiAgdGhpcy50cmFuc3BvcnQucXVlcnkuc2lkID0gZGF0YS5zaWQ7XG4gIHRoaXMudXBncmFkZXMgPSB0aGlzLmZpbHRlclVwZ3JhZGVzKGRhdGEudXBncmFkZXMpO1xuICB0aGlzLnBpbmdJbnRlcnZhbCA9IGRhdGEucGluZ0ludGVydmFsO1xuICB0aGlzLnBpbmdUaW1lb3V0ID0gZGF0YS5waW5nVGltZW91dDtcbiAgdGhpcy5vbk9wZW4oKTtcbiAgLy8gSW4gY2FzZSBvcGVuIGhhbmRsZXIgY2xvc2VzIHNvY2tldFxuICBpZiAoJ2Nsb3NlZCcgPT09IHRoaXMucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICB0aGlzLnNldFBpbmcoKTtcblxuICAvLyBQcm9sb25nIGxpdmVuZXNzIG9mIHNvY2tldCBvbiBoZWFydGJlYXRcbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignaGVhcnRiZWF0JywgdGhpcy5vbkhlYXJ0YmVhdCk7XG4gIHRoaXMub24oJ2hlYXJ0YmVhdCcsIHRoaXMub25IZWFydGJlYXQpO1xufTtcblxuLyoqXG4gKiBSZXNldHMgcGluZyB0aW1lb3V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25IZWFydGJlYXQgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dFRpbWVyKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLnBpbmdUaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJ2Nsb3NlZCcgPT09IHNlbGYucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgIHNlbGYub25DbG9zZSgncGluZyB0aW1lb3V0Jyk7XG4gIH0sIHRpbWVvdXQgfHwgKHNlbGYucGluZ0ludGVydmFsICsgc2VsZi5waW5nVGltZW91dCkpO1xufTtcblxuLyoqXG4gKiBQaW5ncyBzZXJ2ZXIgZXZlcnkgYHRoaXMucGluZ0ludGVydmFsYCBhbmQgZXhwZWN0cyByZXNwb25zZVxuICogd2l0aGluIGB0aGlzLnBpbmdUaW1lb3V0YCBvciBjbG9zZXMgY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnNldFBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgY2xlYXJUaW1lb3V0KHNlbGYucGluZ0ludGVydmFsVGltZXIpO1xuICBzZWxmLnBpbmdJbnRlcnZhbFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgZGVidWcoJ3dyaXRpbmcgcGluZyBwYWNrZXQgLSBleHBlY3RpbmcgcG9uZyB3aXRoaW4gJXNtcycsIHNlbGYucGluZ1RpbWVvdXQpO1xuICAgIHNlbGYucGluZygpO1xuICAgIHNlbGYub25IZWFydGJlYXQoc2VsZi5waW5nVGltZW91dCk7XG4gIH0sIHNlbGYucGluZ0ludGVydmFsKTtcbn07XG5cbi8qKlxuKiBTZW5kcyBhIHBpbmcgcGFja2V0LlxuKlxuKiBAYXBpIHByaXZhdGVcbiovXG5cblNvY2tldC5wcm90b3R5cGUucGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLnNlbmRQYWNrZXQoJ3BpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5lbWl0KCdwaW5nJyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgb24gYGRyYWluYCBldmVudFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25EcmFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy53cml0ZUJ1ZmZlci5zcGxpY2UoMCwgdGhpcy5wcmV2QnVmZmVyTGVuKTtcblxuICAvLyBzZXR0aW5nIHByZXZCdWZmZXJMZW4gPSAwIGlzIHZlcnkgaW1wb3J0YW50XG4gIC8vIGZvciBleGFtcGxlLCB3aGVuIHVwZ3JhZGluZywgdXBncmFkZSBwYWNrZXQgaXMgc2VudCBvdmVyLFxuICAvLyBhbmQgYSBub256ZXJvIHByZXZCdWZmZXJMZW4gY291bGQgY2F1c2UgcHJvYmxlbXMgb24gYGRyYWluYFxuICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuXG4gIGlmICgwID09PSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgIHRoaXMuZW1pdCgnZHJhaW4nKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmZsdXNoKCk7XG4gIH1cbn07XG5cbi8qKlxuICogRmx1c2ggd3JpdGUgYnVmZmVycy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKCkge1xuICBpZiAoJ2Nsb3NlZCcgIT09IHRoaXMucmVhZHlTdGF0ZSAmJiB0aGlzLnRyYW5zcG9ydC53cml0YWJsZSAmJlxuICAgICF0aGlzLnVwZ3JhZGluZyAmJiB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgIGRlYnVnKCdmbHVzaGluZyAlZCBwYWNrZXRzIGluIHNvY2tldCcsIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKTtcbiAgICB0aGlzLnRyYW5zcG9ydC5zZW5kKHRoaXMud3JpdGVCdWZmZXIpO1xuICAgIC8vIGtlZXAgdHJhY2sgb2YgY3VycmVudCBsZW5ndGggb2Ygd3JpdGVCdWZmZXJcbiAgICAvLyBzcGxpY2Ugd3JpdGVCdWZmZXIgYW5kIGNhbGxiYWNrQnVmZmVyIG9uIGBkcmFpbmBcbiAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aDtcbiAgICB0aGlzLmVtaXQoJ2ZsdXNoJyk7XG4gIH1cbn07XG5cbi8qKlxuICogU2VuZHMgYSBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAqIEByZXR1cm4ge1NvY2tldH0gZm9yIGNoYWluaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLndyaXRlID1cblNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChtc2csIG9wdGlvbnMsIGZuKSB7XG4gIHRoaXMuc2VuZFBhY2tldCgnbWVzc2FnZScsIG1zZywgb3B0aW9ucywgZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZHMgYSBwYWNrZXQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhY2tldCB0eXBlLlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zZW5kUGFja2V0ID0gZnVuY3Rpb24gKHR5cGUsIGRhdGEsIG9wdGlvbnMsIGZuKSB7XG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZGF0YSkge1xuICAgIGZuID0gZGF0YTtcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBvcHRpb25zKSB7XG4gICAgZm4gPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgaWYgKCdjbG9zaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdjbG9zZWQnID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5jb21wcmVzcyA9IGZhbHNlICE9PSBvcHRpb25zLmNvbXByZXNzO1xuXG4gIHZhciBwYWNrZXQgPSB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBkYXRhOiBkYXRhLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfTtcbiAgdGhpcy5lbWl0KCdwYWNrZXRDcmVhdGUnLCBwYWNrZXQpO1xuICB0aGlzLndyaXRlQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgaWYgKGZuKSB0aGlzLm9uY2UoJ2ZsdXNoJywgZm4pO1xuICB0aGlzLmZsdXNoKCk7XG59O1xuXG4vKipcbiAqIENsb3NlcyB0aGUgY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAoJ29wZW5pbmcnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2luZyc7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgIHRoaXMub25jZSgnZHJhaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZSAoKSB7XG4gICAgc2VsZi5vbkNsb3NlKCdmb3JjZWQgY2xvc2UnKTtcbiAgICBkZWJ1Zygnc29ja2V0IGNsb3NpbmcgLSB0ZWxsaW5nIHRyYW5zcG9ydCB0byBjbG9zZScpO1xuICAgIHNlbGYudHJhbnNwb3J0LmNsb3NlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwQW5kQ2xvc2UgKCkge1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ3VwZ3JhZGUnLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ3VwZ3JhZGVFcnJvcicsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgY2xvc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdhaXRGb3JVcGdyYWRlICgpIHtcbiAgICAvLyB3YWl0IGZvciB1cGdyYWRlIHRvIGZpbmlzaCBzaW5jZSB3ZSBjYW4ndCBzZW5kIHBhY2tldHMgd2hpbGUgcGF1c2luZyBhIHRyYW5zcG9ydFxuICAgIHNlbGYub25jZSgndXBncmFkZScsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgc2VsZi5vbmNlKCd1cGdyYWRlRXJyb3InLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBlcnJvclxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgZGVidWcoJ3NvY2tldCBlcnJvciAlaicsIGVycik7XG4gIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIHRoaXMub25DbG9zZSgndHJhbnNwb3J0IGVycm9yJywgZXJyKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGNsb3NlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uIChyZWFzb24sIGRlc2MpIHtcbiAgaWYgKCdvcGVuaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdjbG9zaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgZGVidWcoJ3NvY2tldCBjbG9zZSB3aXRoIHJlYXNvbjogXCIlc1wiJywgcmVhc29uKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBjbGVhciB0aW1lcnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nSW50ZXJ2YWxUaW1lcik7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG5cbiAgICAvLyBzdG9wIGV2ZW50IGZyb20gZmlyaW5nIGFnYWluIGZvciB0cmFuc3BvcnRcbiAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoJ2Nsb3NlJyk7XG5cbiAgICAvLyBlbnN1cmUgdHJhbnNwb3J0IHdvbid0IHN0YXkgb3BlblxuICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG5cbiAgICAvLyBpZ25vcmUgZnVydGhlciB0cmFuc3BvcnQgY29tbXVuaWNhdGlvblxuICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuXG4gICAgLy8gc2V0IHJlYWR5IHN0YXRlXG4gICAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG5cbiAgICAvLyBjbGVhciBzZXNzaW9uIGlkXG4gICAgdGhpcy5pZCA9IG51bGw7XG5cbiAgICAvLyBlbWl0IGNsb3NlIGV2ZW50XG4gICAgdGhpcy5lbWl0KCdjbG9zZScsIHJlYXNvbiwgZGVzYyk7XG5cbiAgICAvLyBjbGVhbiBidWZmZXJzIGFmdGVyLCBzbyB1c2VycyBjYW4gc3RpbGxcbiAgICAvLyBncmFiIHRoZSBidWZmZXJzIG9uIGBjbG9zZWAgZXZlbnRcbiAgICBzZWxmLndyaXRlQnVmZmVyID0gW107XG4gICAgc2VsZi5wcmV2QnVmZmVyTGVuID0gMDtcbiAgfVxufTtcblxuLyoqXG4gKiBGaWx0ZXJzIHVwZ3JhZGVzLCByZXR1cm5pbmcgb25seSB0aG9zZSBtYXRjaGluZyBjbGllbnQgdHJhbnNwb3J0cy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzZXJ2ZXIgdXBncmFkZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICpcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmZpbHRlclVwZ3JhZGVzID0gZnVuY3Rpb24gKHVwZ3JhZGVzKSB7XG4gIHZhciBmaWx0ZXJlZFVwZ3JhZGVzID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBqID0gdXBncmFkZXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgaWYgKH5pbmRleCh0aGlzLnRyYW5zcG9ydHMsIHVwZ3JhZGVzW2ldKSkgZmlsdGVyZWRVcGdyYWRlcy5wdXNoKHVwZ3JhZGVzW2ldKTtcbiAgfVxuICByZXR1cm4gZmlsdGVyZWRVcGdyYWRlcztcbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcG9ydDtcblxuLyoqXG4gKiBUcmFuc3BvcnQgYWJzdHJhY3QgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBUcmFuc3BvcnQgKG9wdHMpIHtcbiAgdGhpcy5wYXRoID0gb3B0cy5wYXRoO1xuICB0aGlzLmhvc3RuYW1lID0gb3B0cy5ob3N0bmFtZTtcbiAgdGhpcy5wb3J0ID0gb3B0cy5wb3J0O1xuICB0aGlzLnNlY3VyZSA9IG9wdHMuc2VjdXJlO1xuICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeTtcbiAgdGhpcy50aW1lc3RhbXBQYXJhbSA9IG9wdHMudGltZXN0YW1wUGFyYW07XG4gIHRoaXMudGltZXN0YW1wUmVxdWVzdHMgPSBvcHRzLnRpbWVzdGFtcFJlcXVlc3RzO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnJztcbiAgdGhpcy5hZ2VudCA9IG9wdHMuYWdlbnQgfHwgZmFsc2U7XG4gIHRoaXMuc29ja2V0ID0gb3B0cy5zb2NrZXQ7XG4gIHRoaXMuZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5wZnggPSBvcHRzLnBmeDtcbiAgdGhpcy5rZXkgPSBvcHRzLmtleTtcbiAgdGhpcy5wYXNzcGhyYXNlID0gb3B0cy5wYXNzcGhyYXNlO1xuICB0aGlzLmNlcnQgPSBvcHRzLmNlcnQ7XG4gIHRoaXMuY2EgPSBvcHRzLmNhO1xuICB0aGlzLmNpcGhlcnMgPSBvcHRzLmNpcGhlcnM7XG4gIHRoaXMucmVqZWN0VW5hdXRob3JpemVkID0gb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQ7XG4gIHRoaXMuZm9yY2VOb2RlID0gb3B0cy5mb3JjZU5vZGU7XG5cbiAgLy8gcmVzdWx0cyBvZiBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudCBkZXRlY3Rpb25cbiAgdGhpcy5pc1JlYWN0TmF0aXZlID0gb3B0cy5pc1JlYWN0TmF0aXZlO1xuXG4gIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIHRoaXMuZXh0cmFIZWFkZXJzID0gb3B0cy5leHRyYUhlYWRlcnM7XG4gIHRoaXMubG9jYWxBZGRyZXNzID0gb3B0cy5sb2NhbEFkZHJlc3M7XG59XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFRyYW5zcG9ydC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIEVtaXRzIGFuIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1RyYW5zcG9ydH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChtc2csIGRlc2MpIHtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICBlcnIudHlwZSA9ICdUcmFuc3BvcnRFcnJvcic7XG4gIGVyci5kZXNjcmlwdGlvbiA9IGRlc2M7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogT3BlbnMgdGhlIHRyYW5zcG9ydC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCdjbG9zZWQnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJycgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuaW5nJztcbiAgICB0aGlzLmRvT3BlbigpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENsb3NlcyB0aGUgdHJhbnNwb3J0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICgnb3BlbmluZycgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIHRoaXMuZG9DbG9zZSgpO1xuICAgIHRoaXMub25DbG9zZSgpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmRzIG11bHRpcGxlIHBhY2tldHMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHBhY2tldHMpIHtcbiAgaWYgKCdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgdGhpcy53cml0ZShwYWNrZXRzKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyYW5zcG9ydCBub3Qgb3BlbicpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIG9wZW5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW4nO1xuICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgdGhpcy5lbWl0KCdvcGVuJyk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aXRoIGRhdGEuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdmFyIHBhY2tldCA9IHBhcnNlci5kZWNvZGVQYWNrZXQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSk7XG4gIHRoaXMub25QYWNrZXQocGFja2V0KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggYSBkZWNvZGVkIHBhY2tldC5cbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uUGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICB0aGlzLmVtaXQoJ3BhY2tldCcsIHBhY2tldCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGNsb3NlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gIHRoaXMuZW1pdCgnY2xvc2UnKTtcbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKCd4bWxodHRwcmVxdWVzdC1zc2wnKTtcbnZhciBYSFIgPSByZXF1aXJlKCcuL3BvbGxpbmcteGhyJyk7XG52YXIgSlNPTlAgPSByZXF1aXJlKCcuL3BvbGxpbmctanNvbnAnKTtcbnZhciB3ZWJzb2NrZXQgPSByZXF1aXJlKCcuL3dlYnNvY2tldCcpO1xuXG4vKipcbiAqIEV4cG9ydCB0cmFuc3BvcnRzLlxuICovXG5cbmV4cG9ydHMucG9sbGluZyA9IHBvbGxpbmc7XG5leHBvcnRzLndlYnNvY2tldCA9IHdlYnNvY2tldDtcblxuLyoqXG4gKiBQb2xsaW5nIHRyYW5zcG9ydCBwb2x5bW9ycGhpYyBjb25zdHJ1Y3Rvci5cbiAqIERlY2lkZXMgb24geGhyIHZzIGpzb25wIGJhc2VkIG9uIGZlYXR1cmUgZGV0ZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBvbGxpbmcgKG9wdHMpIHtcbiAgdmFyIHhocjtcbiAgdmFyIHhkID0gZmFsc2U7XG4gIHZhciB4cyA9IGZhbHNlO1xuICB2YXIganNvbnAgPSBmYWxzZSAhPT0gb3B0cy5qc29ucDtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBpc1NTTCA9ICdodHRwczonID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICB2YXIgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgaWYgKCFwb3J0KSB7XG4gICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICB9XG5cbiAgICB4ZCA9IG9wdHMuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lIHx8IHBvcnQgIT09IG9wdHMucG9ydDtcbiAgICB4cyA9IG9wdHMuc2VjdXJlICE9PSBpc1NTTDtcbiAgfVxuXG4gIG9wdHMueGRvbWFpbiA9IHhkO1xuICBvcHRzLnhzY2hlbWUgPSB4cztcbiAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpO1xuXG4gIGlmICgnb3BlbicgaW4geGhyICYmICFvcHRzLmZvcmNlSlNPTlApIHtcbiAgICByZXR1cm4gbmV3IFhIUihvcHRzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWpzb25wKSB0aHJvdyBuZXcgRXJyb3IoJ0pTT05QIGRpc2FibGVkJyk7XG4gICAgcmV0dXJuIG5ldyBKU09OUChvcHRzKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBNb2R1bGUgcmVxdWlyZW1lbnRzLlxuICovXG5cbnZhciBQb2xsaW5nID0gcmVxdWlyZSgnLi9wb2xsaW5nJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBKU09OUFBvbGxpbmc7XG5cbi8qKlxuICogQ2FjaGVkIHJlZ3VsYXIgZXhwcmVzc2lvbnMuXG4gKi9cblxudmFyIHJOZXdsaW5lID0gL1xcbi9nO1xudmFyIHJFc2NhcGVkTmV3bGluZSA9IC9cXFxcbi9nO1xuXG4vKipcbiAqIEdsb2JhbCBKU09OUCBjYWxsYmFja3MuXG4gKi9cblxudmFyIGNhbGxiYWNrcztcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIGVtcHR5ICgpIHsgfVxuXG4vKipcbiAqIFVudGlsIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWdsb2JhbCBpcyBzaGlwcGVkLlxuICovXG5mdW5jdGlvbiBnbG9iICgpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGZcbiAgICAgIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3dcbiAgICAgIDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB7fTtcbn1cblxuLyoqXG4gKiBKU09OUCBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBKU09OUFBvbGxpbmcgKG9wdHMpIHtcbiAgUG9sbGluZy5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuXG4gIC8vIGRlZmluZSBnbG9iYWwgY2FsbGJhY2tzIGFycmF5IGlmIG5vdCBwcmVzZW50XG4gIC8vIHdlIGRvIHRoaXMgaGVyZSAobGF6aWx5KSB0byBhdm9pZCB1bm5lZWRlZCBnbG9iYWwgcG9sbHV0aW9uXG4gIGlmICghY2FsbGJhY2tzKSB7XG4gICAgLy8gd2UgbmVlZCB0byBjb25zaWRlciBtdWx0aXBsZSBlbmdpbmVzIGluIHRoZSBzYW1lIHBhZ2VcbiAgICB2YXIgZ2xvYmFsID0gZ2xvYigpO1xuICAgIGNhbGxiYWNrcyA9IGdsb2JhbC5fX19laW8gPSAoZ2xvYmFsLl9fX2VpbyB8fCBbXSk7XG4gIH1cblxuICAvLyBjYWxsYmFjayBpZGVudGlmaWVyXG4gIHRoaXMuaW5kZXggPSBjYWxsYmFja3MubGVuZ3RoO1xuXG4gIC8vIGFkZCBjYWxsYmFjayB0byBqc29ucCBnbG9iYWxcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiAobXNnKSB7XG4gICAgc2VsZi5vbkRhdGEobXNnKTtcbiAgfSk7XG5cbiAgLy8gYXBwZW5kIHRvIHF1ZXJ5IHN0cmluZ1xuICB0aGlzLnF1ZXJ5LmogPSB0aGlzLmluZGV4O1xuXG4gIC8vIHByZXZlbnQgc3B1cmlvdXMgZXJyb3JzIGZyb20gYmVpbmcgZW1pdHRlZCB3aGVuIHRoZSB3aW5kb3cgaXMgdW5sb2FkZWRcbiAgaWYgKHR5cGVvZiBhZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuc2NyaXB0KSBzZWxmLnNjcmlwdC5vbmVycm9yID0gZW1wdHk7XG4gICAgfSwgZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogSW5oZXJpdHMgZnJvbSBQb2xsaW5nLlxuICovXG5cbmluaGVyaXQoSlNPTlBQb2xsaW5nLCBQb2xsaW5nKTtcblxuLypcbiAqIEpTT05QIG9ubHkgc3VwcG9ydHMgYmluYXJ5IGFzIGJhc2U2NCBlbmNvZGVkIHN0cmluZ3NcbiAqL1xuXG5KU09OUFBvbGxpbmcucHJvdG90eXBlLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG5cbi8qKlxuICogQ2xvc2VzIHRoZSBzb2NrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuSlNPTlBQb2xsaW5nLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5mb3JtKSB7XG4gICAgdGhpcy5mb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mb3JtKTtcbiAgICB0aGlzLmZvcm0gPSBudWxsO1xuICAgIHRoaXMuaWZyYW1lID0gbnVsbDtcbiAgfVxuXG4gIFBvbGxpbmcucHJvdG90eXBlLmRvQ2xvc2UuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5KU09OUFBvbGxpbmcucHJvdG90eXBlLmRvUG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICB9XG5cbiAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgc2NyaXB0LnNyYyA9IHRoaXMudXJpKCk7XG4gIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICBzZWxmLm9uRXJyb3IoJ2pzb25wIHBvbGwgZXJyb3InLCBlKTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0QXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gIGlmIChpbnNlcnRBdCkge1xuICAgIGluc2VydEF0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaW5zZXJ0QXQpO1xuICB9IGVsc2Uge1xuICAgIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cbiAgdGhpcy5zY3JpcHQgPSBzY3JpcHQ7XG5cbiAgdmFyIGlzVUFnZWNrbyA9ICd1bmRlZmluZWQnICE9PSB0eXBlb2YgbmF2aWdhdG9yICYmIC9nZWNrby9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgaWYgKGlzVUFnZWNrbykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgIH0sIDEwMCk7XG4gIH1cbn07XG5cbi8qKlxuICogV3JpdGVzIHdpdGggYSBoaWRkZW4gaWZyYW1lLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuSlNPTlBQb2xsaW5nLnByb3RvdHlwZS5kb1dyaXRlID0gZnVuY3Rpb24gKGRhdGEsIGZuKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoIXRoaXMuZm9ybSkge1xuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHZhciBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB2YXIgaWQgPSB0aGlzLmlmcmFtZUlkID0gJ2Vpb19pZnJhbWVfJyArIHRoaXMuaW5kZXg7XG4gICAgdmFyIGlmcmFtZTtcblxuICAgIGZvcm0uY2xhc3NOYW1lID0gJ3NvY2tldGlvJztcbiAgICBmb3JtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBmb3JtLnN0eWxlLnRvcCA9ICctMTAwMHB4JztcbiAgICBmb3JtLnN0eWxlLmxlZnQgPSAnLTEwMDBweCc7XG4gICAgZm9ybS50YXJnZXQgPSBpZDtcbiAgICBmb3JtLm1ldGhvZCA9ICdQT1NUJztcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWNjZXB0LWNoYXJzZXQnLCAndXRmLTgnKTtcbiAgICBhcmVhLm5hbWUgPSAnZCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhcmVhKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICB0aGlzLmFyZWEgPSBhcmVhO1xuICB9XG5cbiAgdGhpcy5mb3JtLmFjdGlvbiA9IHRoaXMudXJpKCk7XG5cbiAgZnVuY3Rpb24gY29tcGxldGUgKCkge1xuICAgIGluaXRJZnJhbWUoKTtcbiAgICBmbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdElmcmFtZSAoKSB7XG4gICAgaWYgKHNlbGYuaWZyYW1lKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZWxmLmZvcm0ucmVtb3ZlQ2hpbGQoc2VsZi5pZnJhbWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZWxmLm9uRXJyb3IoJ2pzb25wIHBvbGxpbmcgaWZyYW1lIHJlbW92YWwgZXJyb3InLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gaWU2IGR5bmFtaWMgaWZyYW1lcyB3aXRoIHRhcmdldD1cIlwiIHN1cHBvcnQgKHRoYW5rcyBDaHJpcyBMYW1iYWNoZXIpXG4gICAgICB2YXIgaHRtbCA9ICc8aWZyYW1lIHNyYz1cImphdmFzY3JpcHQ6MFwiIG5hbWU9XCInICsgc2VsZi5pZnJhbWVJZCArICdcIj4nO1xuICAgICAgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChodG1sKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgIGlmcmFtZS5uYW1lID0gc2VsZi5pZnJhbWVJZDtcbiAgICAgIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDowJztcbiAgICB9XG5cbiAgICBpZnJhbWUuaWQgPSBzZWxmLmlmcmFtZUlkO1xuXG4gICAgc2VsZi5mb3JtLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgc2VsZi5pZnJhbWUgPSBpZnJhbWU7XG4gIH1cblxuICBpbml0SWZyYW1lKCk7XG5cbiAgLy8gZXNjYXBlIFxcbiB0byBwcmV2ZW50IGl0IGZyb20gYmVpbmcgY29udmVydGVkIGludG8gXFxyXFxuIGJ5IHNvbWUgVUFzXG4gIC8vIGRvdWJsZSBlc2NhcGluZyBpcyByZXF1aXJlZCBmb3IgZXNjYXBlZCBuZXcgbGluZXMgYmVjYXVzZSB1bmVzY2FwaW5nIG9mIG5ldyBsaW5lcyBjYW4gYmUgZG9uZSBzYWZlbHkgb24gc2VydmVyLXNpZGVcbiAgZGF0YSA9IGRhdGEucmVwbGFjZShyRXNjYXBlZE5ld2xpbmUsICdcXFxcXFxuJyk7XG4gIHRoaXMuYXJlYS52YWx1ZSA9IGRhdGEucmVwbGFjZShyTmV3bGluZSwgJ1xcXFxuJyk7XG5cbiAgdHJ5IHtcbiAgICB0aGlzLmZvcm0uc3VibWl0KCk7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgaWYgKHRoaXMuaWZyYW1lLmF0dGFjaEV2ZW50KSB7XG4gICAgdGhpcy5pZnJhbWUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuaWZyYW1lLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaWZyYW1lLm9ubG9hZCA9IGNvbXBsZXRlO1xuICB9XG59O1xuIiwiLyogZ2xvYmFsIGF0dGFjaEV2ZW50ICovXG5cbi8qKlxuICogTW9kdWxlIHJlcXVpcmVtZW50cy5cbiAqL1xuXG52YXIgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKCd4bWxodHRwcmVxdWVzdC1zc2wnKTtcbnZhciBQb2xsaW5nID0gcmVxdWlyZSgnLi9wb2xsaW5nJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmcteGhyJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBYSFI7XG5tb2R1bGUuZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuLyoqXG4gKiBFbXB0eSBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIGVtcHR5ICgpIHt9XG5cbi8qKlxuICogWEhSIFBvbGxpbmcgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gWEhSIChvcHRzKSB7XG4gIFBvbGxpbmcuY2FsbCh0aGlzLCBvcHRzKTtcbiAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IG9wdHMucmVxdWVzdFRpbWVvdXQ7XG4gIHRoaXMuZXh0cmFIZWFkZXJzID0gb3B0cy5leHRyYUhlYWRlcnM7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgaXNTU0wgPSAnaHR0cHM6JyA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgdmFyIHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuXG4gICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgIGlmICghcG9ydCkge1xuICAgICAgcG9ydCA9IGlzU1NMID8gNDQzIDogODA7XG4gICAgfVxuXG4gICAgdGhpcy54ZCA9ICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmIG9wdHMuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lKSB8fFxuICAgICAgcG9ydCAhPT0gb3B0cy5wb3J0O1xuICAgIHRoaXMueHMgPSBvcHRzLnNlY3VyZSAhPT0gaXNTU0w7XG4gIH1cbn1cblxuLyoqXG4gKiBJbmhlcml0cyBmcm9tIFBvbGxpbmcuXG4gKi9cblxuaW5oZXJpdChYSFIsIFBvbGxpbmcpO1xuXG4vKipcbiAqIFhIUiBzdXBwb3J0cyBiaW5hcnlcbiAqL1xuXG5YSFIucHJvdG90eXBlLnN1cHBvcnRzQmluYXJ5ID0gdHJ1ZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5YSFIucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiAob3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgb3B0cy51cmkgPSB0aGlzLnVyaSgpO1xuICBvcHRzLnhkID0gdGhpcy54ZDtcbiAgb3B0cy54cyA9IHRoaXMueHM7XG4gIG9wdHMuYWdlbnQgPSB0aGlzLmFnZW50IHx8IGZhbHNlO1xuICBvcHRzLnN1cHBvcnRzQmluYXJ5ID0gdGhpcy5zdXBwb3J0c0JpbmFyeTtcbiAgb3B0cy5lbmFibGVzWERSID0gdGhpcy5lbmFibGVzWERSO1xuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICBvcHRzLnBmeCA9IHRoaXMucGZ4O1xuICBvcHRzLmtleSA9IHRoaXMua2V5O1xuICBvcHRzLnBhc3NwaHJhc2UgPSB0aGlzLnBhc3NwaHJhc2U7XG4gIG9wdHMuY2VydCA9IHRoaXMuY2VydDtcbiAgb3B0cy5jYSA9IHRoaXMuY2E7XG4gIG9wdHMuY2lwaGVycyA9IHRoaXMuY2lwaGVycztcbiAgb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPSB0aGlzLnJlamVjdFVuYXV0aG9yaXplZDtcbiAgb3B0cy5yZXF1ZXN0VGltZW91dCA9IHRoaXMucmVxdWVzdFRpbWVvdXQ7XG5cbiAgLy8gb3RoZXIgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgb3B0cy5leHRyYUhlYWRlcnMgPSB0aGlzLmV4dHJhSGVhZGVycztcblxuICByZXR1cm4gbmV3IFJlcXVlc3Qob3B0cyk7XG59O1xuXG4vKipcbiAqIFNlbmRzIGRhdGEuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgdG8gc2VuZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuWEhSLnByb3RvdHlwZS5kb1dyaXRlID0gZnVuY3Rpb24gKGRhdGEsIGZuKSB7XG4gIHZhciBpc0JpbmFyeSA9IHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJyAmJiBkYXRhICE9PSB1bmRlZmluZWQ7XG4gIHZhciByZXEgPSB0aGlzLnJlcXVlc3QoeyBtZXRob2Q6ICdQT1NUJywgZGF0YTogZGF0YSwgaXNCaW5hcnk6IGlzQmluYXJ5IH0pO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJlcS5vbignc3VjY2VzcycsIGZuKTtcbiAgcmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBzZWxmLm9uRXJyb3IoJ3hociBwb3N0IGVycm9yJywgZXJyKTtcbiAgfSk7XG4gIHRoaXMuc2VuZFhociA9IHJlcTtcbn07XG5cbi8qKlxuICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5YSFIucHJvdG90eXBlLmRvUG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ3hociBwb2xsJyk7XG4gIHZhciByZXEgPSB0aGlzLnJlcXVlc3QoKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICByZXEub24oJ2RhdGEnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHNlbGYub25EYXRhKGRhdGEpO1xuICB9KTtcbiAgcmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBzZWxmLm9uRXJyb3IoJ3hociBwb2xsIGVycm9yJywgZXJyKTtcbiAgfSk7XG4gIHRoaXMucG9sbFhociA9IHJlcTtcbn07XG5cbi8qKlxuICogUmVxdWVzdCBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFJlcXVlc3QgKG9wdHMpIHtcbiAgdGhpcy5tZXRob2QgPSBvcHRzLm1ldGhvZCB8fCAnR0VUJztcbiAgdGhpcy51cmkgPSBvcHRzLnVyaTtcbiAgdGhpcy54ZCA9ICEhb3B0cy54ZDtcbiAgdGhpcy54cyA9ICEhb3B0cy54cztcbiAgdGhpcy5hc3luYyA9IGZhbHNlICE9PSBvcHRzLmFzeW5jO1xuICB0aGlzLmRhdGEgPSB1bmRlZmluZWQgIT09IG9wdHMuZGF0YSA/IG9wdHMuZGF0YSA6IG51bGw7XG4gIHRoaXMuYWdlbnQgPSBvcHRzLmFnZW50O1xuICB0aGlzLmlzQmluYXJ5ID0gb3B0cy5pc0JpbmFyeTtcbiAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IG9wdHMuc3VwcG9ydHNCaW5hcnk7XG4gIHRoaXMuZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcbiAgdGhpcy5yZXF1ZXN0VGltZW91dCA9IG9wdHMucmVxdWVzdFRpbWVvdXQ7XG5cbiAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIHRoaXMucGZ4ID0gb3B0cy5wZng7XG4gIHRoaXMua2V5ID0gb3B0cy5rZXk7XG4gIHRoaXMucGFzc3BocmFzZSA9IG9wdHMucGFzc3BocmFzZTtcbiAgdGhpcy5jZXJ0ID0gb3B0cy5jZXJ0O1xuICB0aGlzLmNhID0gb3B0cy5jYTtcbiAgdGhpcy5jaXBoZXJzID0gb3B0cy5jaXBoZXJzO1xuICB0aGlzLnJlamVjdFVuYXV0aG9yaXplZCA9IG9wdHMucmVqZWN0VW5hdXRob3JpemVkO1xuXG4gIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIHRoaXMuZXh0cmFIZWFkZXJzID0gb3B0cy5leHRyYUhlYWRlcnM7XG5cbiAgdGhpcy5jcmVhdGUoKTtcbn1cblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIFhIUiBvYmplY3QgYW5kIHNlbmRzIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG9wdHMgPSB7IGFnZW50OiB0aGlzLmFnZW50LCB4ZG9tYWluOiB0aGlzLnhkLCB4c2NoZW1lOiB0aGlzLnhzLCBlbmFibGVzWERSOiB0aGlzLmVuYWJsZXNYRFIgfTtcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgb3B0cy5wZnggPSB0aGlzLnBmeDtcbiAgb3B0cy5rZXkgPSB0aGlzLmtleTtcbiAgb3B0cy5wYXNzcGhyYXNlID0gdGhpcy5wYXNzcGhyYXNlO1xuICBvcHRzLmNlcnQgPSB0aGlzLmNlcnQ7XG4gIG9wdHMuY2EgPSB0aGlzLmNhO1xuICBvcHRzLmNpcGhlcnMgPSB0aGlzLmNpcGhlcnM7XG4gIG9wdHMucmVqZWN0VW5hdXRob3JpemVkID0gdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQ7XG5cbiAgdmFyIHhociA9IHRoaXMueGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdHJ5IHtcbiAgICBkZWJ1ZygneGhyIG9wZW4gJXM6ICVzJywgdGhpcy5tZXRob2QsIHRoaXMudXJpKTtcbiAgICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmksIHRoaXMuYXN5bmMpO1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayAmJiB4aHIuc2V0RGlzYWJsZUhlYWRlckNoZWNrKHRydWUpO1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZXh0cmFIZWFkZXJzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihpLCB0aGlzLmV4dHJhSGVhZGVyc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIGlmICgnUE9TVCcgPT09IHRoaXMubWV0aG9kKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5pc0JpbmFyeSkge1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICcqLyonKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgLy8gaWU2IGNoZWNrXG4gICAgaWYgKCd3aXRoQ3JlZGVudGlhbHMnIGluIHhocikge1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVxdWVzdFRpbWVvdXQpIHtcbiAgICAgIHhoci50aW1lb3V0ID0gdGhpcy5yZXF1ZXN0VGltZW91dDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNYRFIoKSkge1xuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5vbkxvYWQoKTtcbiAgICAgIH07XG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5vbkVycm9yKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgICAgICAgICBpZiAoc2VsZi5zdXBwb3J0c0JpbmFyeSAmJiBjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpIHtcbiAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgICAgICBpZiAoNCAhPT0geGhyLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgaWYgKDIwMCA9PT0geGhyLnN0YXR1cyB8fCAxMjIzID09PSB4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgc2VsZi5vbkxvYWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGBlcnJvcmAgZXZlbnQgaGFuZGxlciB0aGF0J3MgdXNlci1zZXRcbiAgICAgICAgICAvLyBkb2VzIG5vdCB0aHJvdyBpbiB0aGUgc2FtZSB0aWNrIGFuZCBnZXRzIGNhdWdodCBoZXJlXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IoeGhyLnN0YXR1cyk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVidWcoJ3hociBkYXRhICVzJywgdGhpcy5kYXRhKTtcbiAgICB4aHIuc2VuZCh0aGlzLmRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gTmVlZCB0byBkZWZlciBzaW5jZSAuY3JlYXRlKCkgaXMgY2FsbGVkIGRpcmVjdGx5IGZocm9tIHRoZSBjb25zdHJ1Y3RvclxuICAgIC8vIGFuZCB0aHVzIHRoZSAnZXJyb3InIGV2ZW50IGNhbiBvbmx5IGJlIG9ubHkgYm91bmQgKmFmdGVyKiB0aGlzIGV4Y2VwdGlvblxuICAgIC8vIG9jY3Vycy4gIFRoZXJlZm9yZSwgYWxzbywgd2UgY2Fubm90IHRocm93IGhlcmUgYXQgYWxsLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5vbkVycm9yKGUpO1xuICAgIH0sIDApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5pbmRleCA9IFJlcXVlc3QucmVxdWVzdHNDb3VudCsrO1xuICAgIFJlcXVlc3QucmVxdWVzdHNbdGhpcy5pbmRleF0gPSB0aGlzO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVzcG9uc2UuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUub25TdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVtaXQoJ3N1Y2Nlc3MnKTtcbiAgdGhpcy5jbGVhbnVwKCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCBpZiB3ZSBoYXZlIGRhdGEuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdGhpcy5lbWl0KCdkYXRhJywgZGF0YSk7XG4gIHRoaXMub25TdWNjZXNzKCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB0aGlzLmNsZWFudXAodHJ1ZSk7XG59O1xuXG4vKipcbiAqIENsZWFucyB1cCBob3VzZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKGZyb21FcnJvcikge1xuICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB0aGlzLnhociB8fCBudWxsID09PSB0aGlzLnhocikge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB4bWxodHRwcmVxdWVzdFxuICBpZiAodGhpcy5oYXNYRFIoKSkge1xuICAgIHRoaXMueGhyLm9ubG9hZCA9IHRoaXMueGhyLm9uZXJyb3IgPSBlbXB0eTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBlbXB0eTtcbiAgfVxuXG4gIGlmIChmcm9tRXJyb3IpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy54aHIuYWJvcnQoKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkZWxldGUgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XTtcbiAgfVxuXG4gIHRoaXMueGhyID0gbnVsbDtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gbG9hZC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBkYXRhO1xuICB0cnkge1xuICAgIHZhciBjb250ZW50VHlwZTtcbiAgICB0cnkge1xuICAgICAgY29udGVudFR5cGUgPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICBpZiAoY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nKSB7XG4gICAgICBkYXRhID0gdGhpcy54aHIucmVzcG9uc2UgfHwgdGhpcy54aHIucmVzcG9uc2VUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gdGhpcy54aHIucmVzcG9uc2VUZXh0O1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHRoaXMub25FcnJvcihlKTtcbiAgfVxuICBpZiAobnVsbCAhPSBkYXRhKSB7XG4gICAgdGhpcy5vbkRhdGEoZGF0YSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgaXQgaGFzIFhEb21haW5SZXF1ZXN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmhhc1hEUiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHR5cGVvZiBYRG9tYWluUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMueHMgJiYgdGhpcy5lbmFibGVzWERSO1xufTtcblxuLyoqXG4gKiBBYm9ydHMgdGhlIHJlcXVlc3QuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbGVhbnVwKCk7XG59O1xuXG4vKipcbiAqIEFib3J0cyBwZW5kaW5nIHJlcXVlc3RzIHdoZW4gdW5sb2FkaW5nIHRoZSB3aW5kb3cuIFRoaXMgaXMgbmVlZGVkIHRvIHByZXZlbnRcbiAqIG1lbW9yeSBsZWFrcyAoZS5nLiB3aGVuIHVzaW5nIElFKSBhbmQgdG8gZW5zdXJlIHRoYXQgbm8gc3B1cmlvdXMgZXJyb3IgaXNcbiAqIGVtaXR0ZWQuXG4gKi9cblxuUmVxdWVzdC5yZXF1ZXN0c0NvdW50ID0gMDtcblJlcXVlc3QucmVxdWVzdHMgPSB7fTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKHR5cGVvZiBhdHRhY2hFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIHVubG9hZEhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHRlcm1pbmF0aW9uRXZlbnQgPSAnb25wYWdlaGlkZScgaW4gc2VsZiA/ICdwYWdlaGlkZScgOiAndW5sb2FkJztcbiAgICBhZGRFdmVudExpc3RlbmVyKHRlcm1pbmF0aW9uRXZlbnQsIHVubG9hZEhhbmRsZXIsIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmxvYWRIYW5kbGVyICgpIHtcbiAgZm9yICh2YXIgaSBpbiBSZXF1ZXN0LnJlcXVlc3RzKSB7XG4gICAgaWYgKFJlcXVlc3QucmVxdWVzdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIFJlcXVlc3QucmVxdWVzdHNbaV0uYWJvcnQoKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgVHJhbnNwb3J0ID0gcmVxdWlyZSgnLi4vdHJhbnNwb3J0Jyk7XG52YXIgcGFyc2VxcyA9IHJlcXVpcmUoJ3BhcnNlcXMnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG52YXIgeWVhc3QgPSByZXF1aXJlKCd5ZWFzdCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBQb2xsaW5nO1xuXG4vKipcbiAqIElzIFhIUjIgc3VwcG9ydGVkP1xuICovXG5cbnZhciBoYXNYSFIyID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZSgneG1saHR0cHJlcXVlc3Qtc3NsJyk7XG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoeyB4ZG9tYWluOiBmYWxzZSB9KTtcbiAgcmV0dXJuIG51bGwgIT0geGhyLnJlc3BvbnNlVHlwZTtcbn0pKCk7XG5cbi8qKlxuICogUG9sbGluZyBpbnRlcmZhY2UuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFBvbGxpbmcgKG9wdHMpIHtcbiAgdmFyIGZvcmNlQmFzZTY0ID0gKG9wdHMgJiYgb3B0cy5mb3JjZUJhc2U2NCk7XG4gIGlmICghaGFzWEhSMiB8fCBmb3JjZUJhc2U2NCkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgfVxuICBUcmFuc3BvcnQuY2FsbCh0aGlzLCBvcHRzKTtcbn1cblxuLyoqXG4gKiBJbmhlcml0cyBmcm9tIFRyYW5zcG9ydC5cbiAqL1xuXG5pbmhlcml0KFBvbGxpbmcsIFRyYW5zcG9ydCk7XG5cbi8qKlxuICogVHJhbnNwb3J0IG5hbWUuXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUubmFtZSA9ICdwb2xsaW5nJztcblxuLyoqXG4gKiBPcGVucyB0aGUgc29ja2V0ICh0cmlnZ2VycyBwb2xsaW5nKS4gV2Ugd3JpdGUgYSBQSU5HIG1lc3NhZ2UgdG8gZGV0ZXJtaW5lXG4gKiB3aGVuIHRoZSB0cmFuc3BvcnQgaXMgb3Blbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5kb09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucG9sbCgpO1xufTtcblxuLyoqXG4gKiBQYXVzZXMgcG9sbGluZy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayB1cG9uIGJ1ZmZlcnMgYXJlIGZsdXNoZWQgYW5kIHRyYW5zcG9ydCBpcyBwYXVzZWRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKG9uUGF1c2UpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdwYXVzaW5nJztcblxuICBmdW5jdGlvbiBwYXVzZSAoKSB7XG4gICAgZGVidWcoJ3BhdXNlZCcpO1xuICAgIHNlbGYucmVhZHlTdGF0ZSA9ICdwYXVzZWQnO1xuICAgIG9uUGF1c2UoKTtcbiAgfVxuXG4gIGlmICh0aGlzLnBvbGxpbmcgfHwgIXRoaXMud3JpdGFibGUpIHtcbiAgICB2YXIgdG90YWwgPSAwO1xuXG4gICAgaWYgKHRoaXMucG9sbGluZykge1xuICAgICAgZGVidWcoJ3dlIGFyZSBjdXJyZW50bHkgcG9sbGluZyAtIHdhaXRpbmcgdG8gcGF1c2UnKTtcbiAgICAgIHRvdGFsKys7XG4gICAgICB0aGlzLm9uY2UoJ3BvbGxDb21wbGV0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVidWcoJ3ByZS1wYXVzZSBwb2xsaW5nIGNvbXBsZXRlJyk7XG4gICAgICAgIC0tdG90YWwgfHwgcGF1c2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy53cml0YWJsZSkge1xuICAgICAgZGVidWcoJ3dlIGFyZSBjdXJyZW50bHkgd3JpdGluZyAtIHdhaXRpbmcgdG8gcGF1c2UnKTtcbiAgICAgIHRvdGFsKys7XG4gICAgICB0aGlzLm9uY2UoJ2RyYWluJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWJ1ZygncHJlLXBhdXNlIHdyaXRpbmcgY29tcGxldGUnKTtcbiAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBhdXNlKCk7XG4gIH1cbn07XG5cbi8qKlxuICogU3RhcnRzIHBvbGxpbmcgY3ljbGUuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5wb2xsID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1ZygncG9sbGluZycpO1xuICB0aGlzLnBvbGxpbmcgPSB0cnVlO1xuICB0aGlzLmRvUG9sbCgpO1xuICB0aGlzLmVtaXQoJ3BvbGwnKTtcbn07XG5cbi8qKlxuICogT3ZlcmxvYWRzIG9uRGF0YSB0byBkZXRlY3QgcGF5bG9hZHMuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBkZWJ1ZygncG9sbGluZyBnb3QgZGF0YSAlcycsIGRhdGEpO1xuICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAocGFja2V0LCBpbmRleCwgdG90YWwpIHtcbiAgICAvLyBpZiBpdHMgdGhlIGZpcnN0IG1lc3NhZ2Ugd2UgY29uc2lkZXIgdGhlIHRyYW5zcG9ydCBvcGVuXG4gICAgaWYgKCdvcGVuaW5nJyA9PT0gc2VsZi5yZWFkeVN0YXRlKSB7XG4gICAgICBzZWxmLm9uT3BlbigpO1xuICAgIH1cblxuICAgIC8vIGlmIGl0cyBhIGNsb3NlIHBhY2tldCwgd2UgY2xvc2UgdGhlIG9uZ29pbmcgcmVxdWVzdHNcbiAgICBpZiAoJ2Nsb3NlJyA9PT0gcGFja2V0LnR5cGUpIHtcbiAgICAgIHNlbGYub25DbG9zZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIG90aGVyd2lzZSBieXBhc3Mgb25EYXRhIGFuZCBoYW5kbGUgdGhlIG1lc3NhZ2VcbiAgICBzZWxmLm9uUGFja2V0KHBhY2tldCk7XG4gIH07XG5cbiAgLy8gZGVjb2RlIHBheWxvYWRcbiAgcGFyc2VyLmRlY29kZVBheWxvYWQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSwgY2FsbGJhY2spO1xuXG4gIC8vIGlmIGFuIGV2ZW50IGRpZCBub3QgdHJpZ2dlciBjbG9zaW5nXG4gIGlmICgnY2xvc2VkJyAhPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgLy8gaWYgd2UgZ290IGRhdGEgd2UncmUgbm90IHBvbGxpbmdcbiAgICB0aGlzLnBvbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVtaXQoJ3BvbGxDb21wbGV0ZScpO1xuXG4gICAgaWYgKCdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLnBvbGwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ2lnbm9yaW5nIHBvbGwgLSB0cmFuc3BvcnQgc3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRm9yIHBvbGxpbmcsIHNlbmQgYSBjbG9zZSBwYWNrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUuZG9DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGZ1bmN0aW9uIGNsb3NlICgpIHtcbiAgICBkZWJ1Zygnd3JpdGluZyBjbG9zZSBwYWNrZXQnKTtcbiAgICBzZWxmLndyaXRlKFt7IHR5cGU6ICdjbG9zZScgfV0pO1xuICB9XG5cbiAgaWYgKCdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgZGVidWcoJ3RyYW5zcG9ydCBvcGVuIC0gY2xvc2luZycpO1xuICAgIGNsb3NlKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gaW4gY2FzZSB3ZSdyZSB0cnlpbmcgdG8gY2xvc2Ugd2hpbGVcbiAgICAvLyBoYW5kc2hha2luZyBpcyBpbiBwcm9ncmVzcyAoR0gtMTY0KVxuICAgIGRlYnVnKCd0cmFuc3BvcnQgbm90IG9wZW4gLSBkZWZlcnJpbmcgY2xvc2UnKTtcbiAgICB0aGlzLm9uY2UoJ29wZW4nLCBjbG9zZSk7XG4gIH1cbn07XG5cbi8qKlxuICogV3JpdGVzIGEgcGFja2V0cyBwYXlsb2FkLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgcGFja2V0c1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZHJhaW4gY2FsbGJhY2tcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHBhY2tldHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG4gIHZhciBjYWxsYmFja2ZuID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGYud3JpdGFibGUgPSB0cnVlO1xuICAgIHNlbGYuZW1pdCgnZHJhaW4nKTtcbiAgfTtcblxuICBwYXJzZXIuZW5jb2RlUGF5bG9hZChwYWNrZXRzLCB0aGlzLnN1cHBvcnRzQmluYXJ5LCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHNlbGYuZG9Xcml0ZShkYXRhLCBjYWxsYmFja2ZuKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUudXJpID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuICB2YXIgc2NoZW1hID0gdGhpcy5zZWN1cmUgPyAnaHR0cHMnIDogJ2h0dHAnO1xuICB2YXIgcG9ydCA9ICcnO1xuXG4gIC8vIGNhY2hlIGJ1c3RpbmcgaXMgZm9yY2VkXG4gIGlmIChmYWxzZSAhPT0gdGhpcy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgIHF1ZXJ5W3RoaXMudGltZXN0YW1wUGFyYW1dID0geWVhc3QoKTtcbiAgfVxuXG4gIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSAmJiAhcXVlcnkuc2lkKSB7XG4gICAgcXVlcnkuYjY0ID0gMTtcbiAgfVxuXG4gIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gIGlmICh0aGlzLnBvcnQgJiYgKCgnaHR0cHMnID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMucG9ydCkgIT09IDQ0MykgfHxcbiAgICAgKCdodHRwJyA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLnBvcnQpICE9PSA4MCkpKSB7XG4gICAgcG9ydCA9ICc6JyArIHRoaXMucG9ydDtcbiAgfVxuXG4gIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgcXVlcnkgPSAnPycgKyBxdWVyeTtcbiAgfVxuXG4gIHZhciBpcHY2ID0gdGhpcy5ob3N0bmFtZS5pbmRleE9mKCc6JykgIT09IC0xO1xuICByZXR1cm4gc2NoZW1hICsgJzovLycgKyAoaXB2NiA/ICdbJyArIHRoaXMuaG9zdG5hbWUgKyAnXScgOiB0aGlzLmhvc3RuYW1lKSArIHBvcnQgKyB0aGlzLnBhdGggKyBxdWVyeTtcbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIFRyYW5zcG9ydCA9IHJlcXVpcmUoJy4uL3RyYW5zcG9ydCcpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbnZhciBwYXJzZXFzID0gcmVxdWlyZSgncGFyc2VxcycpO1xudmFyIGluaGVyaXQgPSByZXF1aXJlKCdjb21wb25lbnQtaW5oZXJpdCcpO1xudmFyIHllYXN0ID0gcmVxdWlyZSgneWVhc3QnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2VuZ2luZS5pby1jbGllbnQ6d2Vic29ja2V0Jyk7XG5cbnZhciBCcm93c2VyV2ViU29ja2V0LCBOb2RlV2ViU29ja2V0O1xuXG5pZiAodHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgQnJvd3NlcldlYlNvY2tldCA9IFdlYlNvY2tldDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIEJyb3dzZXJXZWJTb2NrZXQgPSBzZWxmLldlYlNvY2tldCB8fCBzZWxmLk1veldlYlNvY2tldDtcbn0gZWxzZSB7XG4gIHRyeSB7XG4gICAgTm9kZVdlYlNvY2tldCA9IHJlcXVpcmUoJ3dzJyk7XG4gIH0gY2F0Y2ggKGUpIHsgfVxufVxuXG4vKipcbiAqIEdldCBlaXRoZXIgdGhlIGBXZWJTb2NrZXRgIG9yIGBNb3pXZWJTb2NrZXRgIGdsb2JhbHNcbiAqIGluIHRoZSBicm93c2VyIG9yIHRyeSB0byByZXNvbHZlIFdlYlNvY2tldC1jb21wYXRpYmxlXG4gKiBpbnRlcmZhY2UgZXhwb3NlZCBieSBgd3NgIGZvciBOb2RlLWxpa2UgZW52aXJvbm1lbnQuXG4gKi9cblxudmFyIFdlYlNvY2tldEltcGwgPSBCcm93c2VyV2ViU29ja2V0IHx8IE5vZGVXZWJTb2NrZXQ7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBXUztcblxuLyoqXG4gKiBXZWJTb2NrZXQgdHJhbnNwb3J0IGNvbnN0cnVjdG9yLlxuICpcbiAqIEBhcGkge09iamVjdH0gY29ubmVjdGlvbiBvcHRpb25zXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFdTIChvcHRzKSB7XG4gIHZhciBmb3JjZUJhc2U2NCA9IChvcHRzICYmIG9wdHMuZm9yY2VCYXNlNjQpO1xuICBpZiAoZm9yY2VCYXNlNjQpIHtcbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSA9IG9wdHMucGVyTWVzc2FnZURlZmxhdGU7XG4gIHRoaXMudXNpbmdCcm93c2VyV2ViU29ja2V0ID0gQnJvd3NlcldlYlNvY2tldCAmJiAhb3B0cy5mb3JjZU5vZGU7XG4gIHRoaXMucHJvdG9jb2xzID0gb3B0cy5wcm90b2NvbHM7XG4gIGlmICghdGhpcy51c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICBXZWJTb2NrZXRJbXBsID0gTm9kZVdlYlNvY2tldDtcbiAgfVxuICBUcmFuc3BvcnQuY2FsbCh0aGlzLCBvcHRzKTtcbn1cblxuLyoqXG4gKiBJbmhlcml0cyBmcm9tIFRyYW5zcG9ydC5cbiAqL1xuXG5pbmhlcml0KFdTLCBUcmFuc3BvcnQpO1xuXG4vKipcbiAqIFRyYW5zcG9ydCBuYW1lLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuV1MucHJvdG90eXBlLm5hbWUgPSAnd2Vic29ja2V0JztcblxuLypcbiAqIFdlYlNvY2tldHMgc3VwcG9ydCBiaW5hcnlcbiAqL1xuXG5XUy5wcm90b3R5cGUuc3VwcG9ydHNCaW5hcnkgPSB0cnVlO1xuXG4vKipcbiAqIE9wZW5zIHNvY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUuZG9PcGVuID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuY2hlY2soKSkge1xuICAgIC8vIGxldCBwcm9iZSB0aW1lb3V0XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHVyaSA9IHRoaXMudXJpKCk7XG4gIHZhciBwcm90b2NvbHMgPSB0aGlzLnByb3RvY29scztcbiAgdmFyIG9wdHMgPSB7XG4gICAgYWdlbnQ6IHRoaXMuYWdlbnQsXG4gICAgcGVyTWVzc2FnZURlZmxhdGU6IHRoaXMucGVyTWVzc2FnZURlZmxhdGVcbiAgfTtcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgb3B0cy5wZnggPSB0aGlzLnBmeDtcbiAgb3B0cy5rZXkgPSB0aGlzLmtleTtcbiAgb3B0cy5wYXNzcGhyYXNlID0gdGhpcy5wYXNzcGhyYXNlO1xuICBvcHRzLmNlcnQgPSB0aGlzLmNlcnQ7XG4gIG9wdHMuY2EgPSB0aGlzLmNhO1xuICBvcHRzLmNpcGhlcnMgPSB0aGlzLmNpcGhlcnM7XG4gIG9wdHMucmVqZWN0VW5hdXRob3JpemVkID0gdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQ7XG4gIGlmICh0aGlzLmV4dHJhSGVhZGVycykge1xuICAgIG9wdHMuaGVhZGVycyA9IHRoaXMuZXh0cmFIZWFkZXJzO1xuICB9XG4gIGlmICh0aGlzLmxvY2FsQWRkcmVzcykge1xuICAgIG9wdHMubG9jYWxBZGRyZXNzID0gdGhpcy5sb2NhbEFkZHJlc3M7XG4gIH1cblxuICB0cnkge1xuICAgIHRoaXMud3MgPVxuICAgICAgdGhpcy51c2luZ0Jyb3dzZXJXZWJTb2NrZXQgJiYgIXRoaXMuaXNSZWFjdE5hdGl2ZVxuICAgICAgICA/IHByb3RvY29sc1xuICAgICAgICAgID8gbmV3IFdlYlNvY2tldEltcGwodXJpLCBwcm90b2NvbHMpXG4gICAgICAgICAgOiBuZXcgV2ViU29ja2V0SW1wbCh1cmkpXG4gICAgICAgIDogbmV3IFdlYlNvY2tldEltcGwodXJpLCBwcm90b2NvbHMsIG9wdHMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIH1cblxuICBpZiAodGhpcy53cy5iaW5hcnlUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy53cy5zdXBwb3J0cyAmJiB0aGlzLndzLnN1cHBvcnRzLmJpbmFyeSkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSB0cnVlO1xuICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9ICdub2RlYnVmZmVyJztcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndzLmJpbmFyeVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICB9XG5cbiAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xufTtcblxuLyoqXG4gKiBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgc29ja2V0XG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdGhpcy53cy5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5vbk9wZW4oKTtcbiAgfTtcbiAgdGhpcy53cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGYub25DbG9zZSgpO1xuICB9O1xuICB0aGlzLndzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldikge1xuICAgIHNlbGYub25EYXRhKGV2LmRhdGEpO1xuICB9O1xuICB0aGlzLndzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIHNlbGYub25FcnJvcignd2Vic29ja2V0IGVycm9yJywgZSk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyaXRlcyBkYXRhIHRvIHNvY2tldC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBvZiBwYWNrZXRzLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHBhY2tldHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG5cbiAgLy8gZW5jb2RlUGFja2V0IGVmZmljaWVudCBhcyBpdCB1c2VzIFdTIGZyYW1pbmdcbiAgLy8gbm8gbmVlZCBmb3IgZW5jb2RlUGF5bG9hZFxuICB2YXIgdG90YWwgPSBwYWNrZXRzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB0b3RhbDsgaSA8IGw7IGkrKykge1xuICAgIChmdW5jdGlvbiAocGFja2V0KSB7XG4gICAgICBwYXJzZXIuZW5jb2RlUGFja2V0KHBhY2tldCwgc2VsZi5zdXBwb3J0c0JpbmFyeSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKCFzZWxmLnVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgIC8vIGFsd2F5cyBjcmVhdGUgYSBuZXcgb2JqZWN0IChHSC00MzcpXG4gICAgICAgICAgdmFyIG9wdHMgPSB7fTtcbiAgICAgICAgICBpZiAocGFja2V0Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdHMuY29tcHJlc3MgPSBwYWNrZXQub3B0aW9ucy5jb21wcmVzcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VsZi5wZXJNZXNzYWdlRGVmbGF0ZSkge1xuICAgICAgICAgICAgdmFyIGxlbiA9ICdzdHJpbmcnID09PSB0eXBlb2YgZGF0YSA/IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpIDogZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobGVuIDwgc2VsZi5wZXJNZXNzYWdlRGVmbGF0ZS50aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgb3B0cy5jb21wcmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNvbWV0aW1lcyB0aGUgd2Vic29ja2V0IGhhcyBhbHJlYWR5IGJlZW4gY2xvc2VkIGJ1dCB0aGUgYnJvd3NlciBkaWRuJ3RcbiAgICAgICAgLy8gaGF2ZSBhIGNoYW5jZSBvZiBpbmZvcm1pbmcgdXMgYWJvdXQgaXQgeWV0LCBpbiB0aGF0IGNhc2Ugc2VuZCB3aWxsXG4gICAgICAgIC8vIHRocm93IGFuIGVycm9yXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHNlbGYudXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgICAvLyBUeXBlRXJyb3IgaXMgdGhyb3duIHdoZW4gcGFzc2luZyB0aGUgc2Vjb25kIGFyZ3VtZW50IG9uIFNhZmFyaVxuICAgICAgICAgICAgc2VsZi53cy5zZW5kKGRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLndzLnNlbmQoZGF0YSwgb3B0cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgZGVidWcoJ3dlYnNvY2tldCBjbG9zZWQgYmVmb3JlIG9uY2xvc2UgZXZlbnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC0tdG90YWwgfHwgZG9uZSgpO1xuICAgICAgfSk7XG4gICAgfSkocGFja2V0c1tpXSk7XG4gIH1cblxuICBmdW5jdGlvbiBkb25lICgpIHtcbiAgICBzZWxmLmVtaXQoJ2ZsdXNoJyk7XG5cbiAgICAvLyBmYWtlIGRyYWluXG4gICAgLy8gZGVmZXIgdG8gbmV4dCB0aWNrIHRvIGFsbG93IFNvY2tldCB0byBjbGVhciB3cml0ZUJ1ZmZlclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi53cml0YWJsZSA9IHRydWU7XG4gICAgICBzZWxmLmVtaXQoJ2RyYWluJyk7XG4gICAgfSwgMCk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gY2xvc2VcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgVHJhbnNwb3J0LnByb3RvdHlwZS5vbkNsb3NlLmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIENsb3NlcyBzb2NrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLmRvQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgdGhpcy53cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLndzLmNsb3NlKCk7XG4gIH1cbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUudXJpID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuICB2YXIgc2NoZW1hID0gdGhpcy5zZWN1cmUgPyAnd3NzJyA6ICd3cyc7XG4gIHZhciBwb3J0ID0gJyc7XG5cbiAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgaWYgKHRoaXMucG9ydCAmJiAoKCd3c3MnID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMucG9ydCkgIT09IDQ0MykgfHxcbiAgICAoJ3dzJyA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLnBvcnQpICE9PSA4MCkpKSB7XG4gICAgcG9ydCA9ICc6JyArIHRoaXMucG9ydDtcbiAgfVxuXG4gIC8vIGFwcGVuZCB0aW1lc3RhbXAgdG8gVVJJXG4gIGlmICh0aGlzLnRpbWVzdGFtcFJlcXVlc3RzKSB7XG4gICAgcXVlcnlbdGhpcy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICB9XG5cbiAgLy8gY29tbXVuaWNhdGUgYmluYXJ5IHN1cHBvcnQgY2FwYWJpbGl0aWVzXG4gIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSkge1xuICAgIHF1ZXJ5LmI2NCA9IDE7XG4gIH1cblxuICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAvLyBwcmVwZW5kID8gdG8gcXVlcnlcbiAgaWYgKHF1ZXJ5Lmxlbmd0aCkge1xuICAgIHF1ZXJ5ID0gJz8nICsgcXVlcnk7XG4gIH1cblxuICB2YXIgaXB2NiA9IHRoaXMuaG9zdG5hbWUuaW5kZXhPZignOicpICE9PSAtMTtcbiAgcmV0dXJuIHNjaGVtYSArICc6Ly8nICsgKGlwdjYgPyAnWycgKyB0aGlzLmhvc3RuYW1lICsgJ10nIDogdGhpcy5ob3N0bmFtZSkgKyBwb3J0ICsgdGhpcy5wYXRoICsgcXVlcnk7XG59O1xuXG4vKipcbiAqIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBXZWJTb2NrZXQuXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn0gd2hldGhlciB0aGlzIHRyYW5zcG9ydCBpcyBhdmFpbGFibGUuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbldTLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhV2ViU29ja2V0SW1wbCAmJiAhKCdfX2luaXRpYWxpemUnIGluIFdlYlNvY2tldEltcGwgJiYgdGhpcy5uYW1lID09PSBXUy5wcm90b3R5cGUubmFtZSk7XG59O1xuIiwiLy8gYnJvd3NlciBzaGltIGZvciB4bWxodHRwcmVxdWVzdCBtb2R1bGVcblxudmFyIGhhc0NPUlMgPSByZXF1aXJlKCdoYXMtY29ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIHZhciB4ZG9tYWluID0gb3B0cy54ZG9tYWluO1xuXG4gIC8vIHNjaGVtZSBtdXN0IGJlIHNhbWUgd2hlbiB1c2lnbiBYRG9tYWluUmVxdWVzdFxuICAvLyBodHRwOi8vYmxvZ3MubXNkbi5jb20vYi9pZWludGVybmFscy9hcmNoaXZlLzIwMTAvMDUvMTMveGRvbWFpbnJlcXVlc3QtcmVzdHJpY3Rpb25zLWxpbWl0YXRpb25zLWFuZC13b3JrYXJvdW5kcy5hc3B4XG4gIHZhciB4c2NoZW1lID0gb3B0cy54c2NoZW1lO1xuXG4gIC8vIFhEb21haW5SZXF1ZXN0IGhhcyBhIGZsb3cgb2Ygbm90IHNlbmRpbmcgY29va2llLCB0aGVyZWZvcmUgaXQgc2hvdWxkIGJlIGRpc2FibGVkIGFzIGEgZGVmYXVsdC5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvZW5naW5lLmlvLWNsaWVudC9wdWxsLzIxN1xuICB2YXIgZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcblxuICAvLyBYTUxIdHRwUmVxdWVzdCBjYW4gYmUgZGlzYWJsZWQgb24gSUVcbiAgdHJ5IHtcbiAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAmJiAoIXhkb21haW4gfHwgaGFzQ09SUykpIHtcbiAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHsgfVxuXG4gIC8vIFVzZSBYRG9tYWluUmVxdWVzdCBmb3IgSUU4IGlmIGVuYWJsZXNYRFIgaXMgdHJ1ZVxuICAvLyBiZWNhdXNlIGxvYWRpbmcgYmFyIGtlZXBzIGZsYXNoaW5nIHdoZW4gdXNpbmcganNvbnAtcG9sbGluZ1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20veXVqaW9zYWthL3NvY2tlLmlvLWllOC1sb2FkaW5nLWV4YW1wbGVcbiAgdHJ5IHtcbiAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBYRG9tYWluUmVxdWVzdCAmJiAheHNjaGVtZSAmJiBlbmFibGVzWERSKSB7XG4gICAgICByZXR1cm4gbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7IH1cblxuICBpZiAoIXhkb21haW4pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG5ldyBzZWxmW1snQWN0aXZlJ10uY29uY2F0KCdPYmplY3QnKS5qb2luKCdYJyldKCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuICB9XG59O1xuIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lXG4gICAgICAgICAgICAgICAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgID8gY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgIDogbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuICAnIzAwMDBDQycsICcjMDAwMEZGJywgJyMwMDMzQ0MnLCAnIzAwMzNGRicsICcjMDA2NkNDJywgJyMwMDY2RkYnLCAnIzAwOTlDQycsXG4gICcjMDA5OUZGJywgJyMwMENDMDAnLCAnIzAwQ0MzMycsICcjMDBDQzY2JywgJyMwMENDOTknLCAnIzAwQ0NDQycsICcjMDBDQ0ZGJyxcbiAgJyMzMzAwQ0MnLCAnIzMzMDBGRicsICcjMzMzM0NDJywgJyMzMzMzRkYnLCAnIzMzNjZDQycsICcjMzM2NkZGJywgJyMzMzk5Q0MnLFxuICAnIzMzOTlGRicsICcjMzNDQzAwJywgJyMzM0NDMzMnLCAnIzMzQ0M2NicsICcjMzNDQzk5JywgJyMzM0NDQ0MnLCAnIzMzQ0NGRicsXG4gICcjNjYwMENDJywgJyM2NjAwRkYnLCAnIzY2MzNDQycsICcjNjYzM0ZGJywgJyM2NkNDMDAnLCAnIzY2Q0MzMycsICcjOTkwMENDJyxcbiAgJyM5OTAwRkYnLCAnIzk5MzNDQycsICcjOTkzM0ZGJywgJyM5OUNDMDAnLCAnIzk5Q0MzMycsICcjQ0MwMDAwJywgJyNDQzAwMzMnLFxuICAnI0NDMDA2NicsICcjQ0MwMDk5JywgJyNDQzAwQ0MnLCAnI0NDMDBGRicsICcjQ0MzMzAwJywgJyNDQzMzMzMnLCAnI0NDMzM2NicsXG4gICcjQ0MzMzk5JywgJyNDQzMzQ0MnLCAnI0NDMzNGRicsICcjQ0M2NjAwJywgJyNDQzY2MzMnLCAnI0NDOTkwMCcsICcjQ0M5OTMzJyxcbiAgJyNDQ0NDMDAnLCAnI0NDQ0MzMycsICcjRkYwMDAwJywgJyNGRjAwMzMnLCAnI0ZGMDA2NicsICcjRkYwMDk5JywgJyNGRjAwQ0MnLFxuICAnI0ZGMDBGRicsICcjRkYzMzAwJywgJyNGRjMzMzMnLCAnI0ZGMzM2NicsICcjRkYzMzk5JywgJyNGRjMzQ0MnLCAnI0ZGMzNGRicsXG4gICcjRkY2NjAwJywgJyNGRjY2MzMnLCAnI0ZGOTkwMCcsICcjRkY5OTMzJywgJyNGRkNDMDAnLCAnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG4gICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cbiAqL1xuZXhwb3J0cy5pbnN0YW5jZXMgPSBbXTtcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAqL1xuXG5leHBvcnRzLm5hbWVzID0gW107XG5leHBvcnRzLnNraXBzID0gW107XG5cbi8qKlxuICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICpcbiAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMgPSB7fTtcblxuLyoqXG4gKiBTZWxlY3QgYSBjb2xvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuICB2YXIgaGFzaCA9IDAsIGk7XG5cbiAgZm9yIChpIGluIG5hbWVzcGFjZSkge1xuICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuY29sb3JzW01hdGguYWJzKGhhc2gpICUgZXhwb3J0cy5jb2xvcnMubGVuZ3RoXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cbiAgdmFyIHByZXZUaW1lO1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuICBkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICBleHBvcnRzLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuICByZXR1cm4gZGVidWc7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICB2YXIgaW5kZXggPSBleHBvcnRzLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgZXhwb3J0cy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgaTtcbiAgdmFyIHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4cG9ydHMuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGluc3RhbmNlID0gZXhwb3J0cy5pbnN0YW5jZXNbaV07XG4gICAgaW5zdGFuY2UuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgaWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xudmFyIGhhc0JpbmFyeSA9IHJlcXVpcmUoJ2hhcy1iaW5hcnkyJyk7XG52YXIgc2xpY2VCdWZmZXIgPSByZXF1aXJlKCdhcnJheWJ1ZmZlci5zbGljZScpO1xudmFyIGFmdGVyID0gcmVxdWlyZSgnYWZ0ZXInKTtcbnZhciB1dGY4ID0gcmVxdWlyZSgnLi91dGY4Jyk7XG5cbnZhciBiYXNlNjRlbmNvZGVyO1xuaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgYmFzZTY0ZW5jb2RlciA9IHJlcXVpcmUoJ2Jhc2U2NC1hcnJheWJ1ZmZlcicpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHdlIGFyZSBydW5uaW5nIGFuIGFuZHJvaWQgYnJvd3Nlci4gVGhhdCByZXF1aXJlcyB1cyB0byB1c2VcbiAqIEFycmF5QnVmZmVyIHdpdGggcG9sbGluZyB0cmFuc3BvcnRzLi4uXG4gKlxuICogaHR0cDovL2doaW5kYS5uZXQvanBlZy1ibG9iLWFqYXgtYW5kcm9pZC9cbiAqL1xuXG52YXIgaXNBbmRyb2lkID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL0FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIENoZWNrIGlmIHdlIGFyZSBydW5uaW5nIGluIFBoYW50b21KUy5cbiAqIFVwbG9hZGluZyBhIEJsb2Igd2l0aCBQaGFudG9tSlMgZG9lcyBub3Qgd29yayBjb3JyZWN0bHksIGFzIHJlcG9ydGVkIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYXJpeWEvcGhhbnRvbWpzL2lzc3Vlcy8xMTM5NVxuICogQHR5cGUgYm9vbGVhblxuICovXG52YXIgaXNQaGFudG9tSlMgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvUGhhbnRvbUpTL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBXaGVuIHRydWUsIGF2b2lkcyB1c2luZyBCbG9icyB0byBlbmNvZGUgcGF5bG9hZHMuXG4gKiBAdHlwZSBib29sZWFuXG4gKi9cbnZhciBkb250U2VuZEJsb2JzID0gaXNBbmRyb2lkIHx8IGlzUGhhbnRvbUpTO1xuXG4vKipcbiAqIEN1cnJlbnQgcHJvdG9jb2wgdmVyc2lvbi5cbiAqL1xuXG5leHBvcnRzLnByb3RvY29sID0gMztcblxuLyoqXG4gKiBQYWNrZXQgdHlwZXMuXG4gKi9cblxudmFyIHBhY2tldHMgPSBleHBvcnRzLnBhY2tldHMgPSB7XG4gICAgb3BlbjogICAgIDAgICAgLy8gbm9uLXdzXG4gICwgY2xvc2U6ICAgIDEgICAgLy8gbm9uLXdzXG4gICwgcGluZzogICAgIDJcbiAgLCBwb25nOiAgICAgM1xuICAsIG1lc3NhZ2U6ICA0XG4gICwgdXBncmFkZTogIDVcbiAgLCBub29wOiAgICAgNlxufTtcblxudmFyIHBhY2tldHNsaXN0ID0ga2V5cyhwYWNrZXRzKTtcblxuLyoqXG4gKiBQcmVtYWRlIGVycm9yIHBhY2tldC5cbiAqL1xuXG52YXIgZXJyID0geyB0eXBlOiAnZXJyb3InLCBkYXRhOiAncGFyc2VyIGVycm9yJyB9O1xuXG4vKipcbiAqIENyZWF0ZSBhIGJsb2IgYXBpIGV2ZW4gZm9yIGJsb2IgYnVpbGRlciB3aGVuIHZlbmRvciBwcmVmaXhlcyBleGlzdFxuICovXG5cbnZhciBCbG9iID0gcmVxdWlyZSgnYmxvYicpO1xuXG4vKipcbiAqIEVuY29kZXMgYSBwYWNrZXQuXG4gKlxuICogICAgIDxwYWNrZXQgdHlwZSBpZD4gWyA8ZGF0YT4gXVxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIDVoZWxsbyB3b3JsZFxuICogICAgIDNcbiAqICAgICA0XG4gKlxuICogQmluYXJ5IGlzIGVuY29kZWQgaW4gYW4gaWRlbnRpY2FsIHByaW5jaXBsZVxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIHV0ZjhlbmNvZGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNCaW5hcnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IHN1cHBvcnRzQmluYXJ5O1xuICAgIHN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIHV0ZjhlbmNvZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IHV0ZjhlbmNvZGU7XG4gICAgdXRmOGVuY29kZSA9IG51bGw7XG4gIH1cblxuICB2YXIgZGF0YSA9IChwYWNrZXQuZGF0YSA9PT0gdW5kZWZpbmVkKVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiBwYWNrZXQuZGF0YS5idWZmZXIgfHwgcGFja2V0LmRhdGE7XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGVuY29kZUFycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICByZXR1cm4gZW5jb2RlQmxvYihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjayk7XG4gIH1cblxuICAvLyBtaWdodCBiZSBhbiBvYmplY3Qgd2l0aCB7IGJhc2U2NDogdHJ1ZSwgZGF0YTogZGF0YUFzQmFzZTY0U3RyaW5nIH1cbiAgaWYgKGRhdGEgJiYgZGF0YS5iYXNlNjQpIHtcbiAgICByZXR1cm4gZW5jb2RlQmFzZTY0T2JqZWN0KHBhY2tldCwgY2FsbGJhY2spO1xuICB9XG5cbiAgLy8gU2VuZGluZyBkYXRhIGFzIGEgdXRmLTggc3RyaW5nXG4gIHZhciBlbmNvZGVkID0gcGFja2V0c1twYWNrZXQudHlwZV07XG5cbiAgLy8gZGF0YSBmcmFnbWVudCBpcyBvcHRpb25hbFxuICBpZiAodW5kZWZpbmVkICE9PSBwYWNrZXQuZGF0YSkge1xuICAgIGVuY29kZWQgKz0gdXRmOGVuY29kZSA/IHV0ZjguZW5jb2RlKFN0cmluZyhwYWNrZXQuZGF0YSksIHsgc3RyaWN0OiBmYWxzZSB9KSA6IFN0cmluZyhwYWNrZXQuZGF0YSk7XG4gIH1cblxuICByZXR1cm4gY2FsbGJhY2soJycgKyBlbmNvZGVkKTtcblxufTtcblxuZnVuY3Rpb24gZW5jb2RlQmFzZTY0T2JqZWN0KHBhY2tldCwgY2FsbGJhY2spIHtcbiAgLy8gcGFja2V0IGRhdGEgaXMgYW4gb2JqZWN0IHsgYmFzZTY0OiB0cnVlLCBkYXRhOiBkYXRhQXNCYXNlNjRTdHJpbmcgfVxuICB2YXIgbWVzc2FnZSA9ICdiJyArIGV4cG9ydHMucGFja2V0c1twYWNrZXQudHlwZV0gKyBwYWNrZXQuZGF0YS5kYXRhO1xuICByZXR1cm4gY2FsbGJhY2sobWVzc2FnZSk7XG59XG5cbi8qKlxuICogRW5jb2RlIHBhY2tldCBoZWxwZXJzIGZvciBiaW5hcnkgdHlwZXNcbiAqL1xuXG5mdW5jdGlvbiBlbmNvZGVBcnJheUJ1ZmZlcihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICBpZiAoIXN1cHBvcnRzQmluYXJ5KSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlQmFzZTY0UGFja2V0KHBhY2tldCwgY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIGRhdGEgPSBwYWNrZXQuZGF0YTtcbiAgdmFyIGNvbnRlbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICB2YXIgcmVzdWx0QnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoMSArIGRhdGEuYnl0ZUxlbmd0aCk7XG5cbiAgcmVzdWx0QnVmZmVyWzBdID0gcGFja2V0c1twYWNrZXQudHlwZV07XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGVudEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0QnVmZmVyW2krMV0gPSBjb250ZW50QXJyYXlbaV07XG4gIH1cblxuICByZXR1cm4gY2FsbGJhY2socmVzdWx0QnVmZmVyLmJ1ZmZlcik7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUJsb2JBc0FycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSB7XG4gIGlmICghc3VwcG9ydHNCaW5hcnkpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQocGFja2V0LCBjYWxsYmFjayk7XG4gIH1cblxuICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICBmci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBleHBvcnRzLmVuY29kZVBhY2tldCh7IHR5cGU6IHBhY2tldC50eXBlLCBkYXRhOiBmci5yZXN1bHQgfSwgc3VwcG9ydHNCaW5hcnksIHRydWUsIGNhbGxiYWNrKTtcbiAgfTtcbiAgcmV0dXJuIGZyLnJlYWRBc0FycmF5QnVmZmVyKHBhY2tldC5kYXRhKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlQmxvYihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICBpZiAoIXN1cHBvcnRzQmluYXJ5KSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlQmFzZTY0UGFja2V0KHBhY2tldCwgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKGRvbnRTZW5kQmxvYnMpIHtcbiAgICByZXR1cm4gZW5jb2RlQmxvYkFzQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICBsZW5ndGhbMF0gPSBwYWNrZXRzW3BhY2tldC50eXBlXTtcbiAgdmFyIGJsb2IgPSBuZXcgQmxvYihbbGVuZ3RoLmJ1ZmZlciwgcGFja2V0LmRhdGFdKTtcblxuICByZXR1cm4gY2FsbGJhY2soYmxvYik7XG59XG5cbi8qKlxuICogRW5jb2RlcyBhIHBhY2tldCB3aXRoIGJpbmFyeSBkYXRhIGluIGEgYmFzZTY0IHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQsIGhhcyBgdHlwZWAgYW5kIGBkYXRhYFxuICogQHJldHVybiB7U3RyaW5nfSBiYXNlNjQgZW5jb2RlZCBtZXNzYWdlXG4gKi9cblxuZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQsIGNhbGxiYWNrKSB7XG4gIHZhciBtZXNzYWdlID0gJ2InICsgZXhwb3J0cy5wYWNrZXRzW3BhY2tldC50eXBlXTtcbiAgaWYgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBwYWNrZXQuZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGZyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGI2NCA9IGZyLnJlc3VsdC5zcGxpdCgnLCcpWzFdO1xuICAgICAgY2FsbGJhY2sobWVzc2FnZSArIGI2NCk7XG4gICAgfTtcbiAgICByZXR1cm4gZnIucmVhZEFzRGF0YVVSTChwYWNrZXQuZGF0YSk7XG4gIH1cblxuICB2YXIgYjY0ZGF0YTtcbiAgdHJ5IHtcbiAgICBiNjRkYXRhID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShwYWNrZXQuZGF0YSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gaVBob25lIFNhZmFyaSBkb2Vzbid0IGxldCB5b3UgYXBwbHkgd2l0aCB0eXBlZCBhcnJheXNcbiAgICB2YXIgdHlwZWQgPSBuZXcgVWludDhBcnJheShwYWNrZXQuZGF0YSk7XG4gICAgdmFyIGJhc2ljID0gbmV3IEFycmF5KHR5cGVkLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlZC5sZW5ndGg7IGkrKykge1xuICAgICAgYmFzaWNbaV0gPSB0eXBlZFtpXTtcbiAgICB9XG4gICAgYjY0ZGF0YSA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgYmFzaWMpO1xuICB9XG4gIG1lc3NhZ2UgKz0gYnRvYShiNjRkYXRhKTtcbiAgcmV0dXJuIGNhbGxiYWNrKG1lc3NhZ2UpO1xufTtcblxuLyoqXG4gKiBEZWNvZGVzIGEgcGFja2V0LiBDaGFuZ2VzIGZvcm1hdCB0byBCbG9iIGlmIHJlcXVlc3RlZC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHdpdGggYHR5cGVgIGFuZCBgZGF0YWAgKGlmIGFueSlcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZGVjb2RlUGFja2V0ID0gZnVuY3Rpb24gKGRhdGEsIGJpbmFyeVR5cGUsIHV0ZjhkZWNvZGUpIHtcbiAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBlcnI7XG4gIH1cbiAgLy8gU3RyaW5nIGRhdGFcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIGlmIChkYXRhLmNoYXJBdCgwKSA9PT0gJ2InKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZWNvZGVCYXNlNjRQYWNrZXQoZGF0YS5zdWJzdHIoMSksIGJpbmFyeVR5cGUpO1xuICAgIH1cblxuICAgIGlmICh1dGY4ZGVjb2RlKSB7XG4gICAgICBkYXRhID0gdHJ5RGVjb2RlKGRhdGEpO1xuICAgICAgaWYgKGRhdGEgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB0eXBlID0gZGF0YS5jaGFyQXQoMCk7XG5cbiAgICBpZiAoTnVtYmVyKHR5cGUpICE9IHR5cGUgfHwgIXBhY2tldHNsaXN0W3R5cGVdKSB7XG4gICAgICByZXR1cm4gZXJyO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IHBhY2tldHNsaXN0W3R5cGVdLCBkYXRhOiBkYXRhLnN1YnN0cmluZygxKSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBwYWNrZXRzbGlzdFt0eXBlXSB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBhc0FycmF5ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gIHZhciB0eXBlID0gYXNBcnJheVswXTtcbiAgdmFyIHJlc3QgPSBzbGljZUJ1ZmZlcihkYXRhLCAxKTtcbiAgaWYgKEJsb2IgJiYgYmluYXJ5VHlwZSA9PT0gJ2Jsb2InKSB7XG4gICAgcmVzdCA9IG5ldyBCbG9iKFtyZXN0XSk7XG4gIH1cbiAgcmV0dXJuIHsgdHlwZTogcGFja2V0c2xpc3RbdHlwZV0sIGRhdGE6IHJlc3QgfTtcbn07XG5cbmZ1bmN0aW9uIHRyeURlY29kZShkYXRhKSB7XG4gIHRyeSB7XG4gICAgZGF0YSA9IHV0ZjguZGVjb2RlKGRhdGEsIHsgc3RyaWN0OiBmYWxzZSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBEZWNvZGVzIGEgcGFja2V0IGVuY29kZWQgaW4gYSBiYXNlNjQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGJhc2U2NCBlbmNvZGVkIG1lc3NhZ2VcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBgdHlwZWAgYW5kIGBkYXRhYCAoaWYgYW55KVxuICovXG5cbmV4cG9ydHMuZGVjb2RlQmFzZTY0UGFja2V0ID0gZnVuY3Rpb24obXNnLCBiaW5hcnlUeXBlKSB7XG4gIHZhciB0eXBlID0gcGFja2V0c2xpc3RbbXNnLmNoYXJBdCgwKV07XG4gIGlmICghYmFzZTY0ZW5jb2Rlcikge1xuICAgIHJldHVybiB7IHR5cGU6IHR5cGUsIGRhdGE6IHsgYmFzZTY0OiB0cnVlLCBkYXRhOiBtc2cuc3Vic3RyKDEpIH0gfTtcbiAgfVxuXG4gIHZhciBkYXRhID0gYmFzZTY0ZW5jb2Rlci5kZWNvZGUobXNnLnN1YnN0cigxKSk7XG5cbiAgaWYgKGJpbmFyeVR5cGUgPT09ICdibG9iJyAmJiBCbG9iKSB7XG4gICAgZGF0YSA9IG5ldyBCbG9iKFtkYXRhXSk7XG4gIH1cblxuICByZXR1cm4geyB0eXBlOiB0eXBlLCBkYXRhOiBkYXRhIH07XG59O1xuXG4vKipcbiAqIEVuY29kZXMgbXVsdGlwbGUgbWVzc2FnZXMgKHBheWxvYWQpLlxuICpcbiAqICAgICA8bGVuZ3RoPjpkYXRhXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgMTE6aGVsbG8gd29ybGQyOmhpXG4gKlxuICogSWYgYW55IGNvbnRlbnRzIGFyZSBiaW5hcnksIHRoZXkgd2lsbCBiZSBlbmNvZGVkIGFzIGJhc2U2NCBzdHJpbmdzLiBCYXNlNjRcbiAqIGVuY29kZWQgc3RyaW5ncyBhcmUgbWFya2VkIHdpdGggYSBiIGJlZm9yZSB0aGUgbGVuZ3RoIHNwZWNpZmllclxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGF5bG9hZCA9IGZ1bmN0aW9uIChwYWNrZXRzLCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBzdXBwb3J0c0JpbmFyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gc3VwcG9ydHNCaW5hcnk7XG4gICAgc3VwcG9ydHNCaW5hcnkgPSBudWxsO1xuICB9XG5cbiAgdmFyIGlzQmluYXJ5ID0gaGFzQmluYXJ5KHBhY2tldHMpO1xuXG4gIGlmIChzdXBwb3J0c0JpbmFyeSAmJiBpc0JpbmFyeSkge1xuICAgIGlmIChCbG9iICYmICFkb250U2VuZEJsb2JzKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNCbG9iKHBhY2tldHMsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNBcnJheUJ1ZmZlcihwYWNrZXRzLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAoIXBhY2tldHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKCcwOicpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TGVuZ3RoSGVhZGVyKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gbWVzc2FnZS5sZW5ndGggKyAnOicgKyBtZXNzYWdlO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5jb2RlT25lKHBhY2tldCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCAhaXNCaW5hcnkgPyBmYWxzZSA6IHN1cHBvcnRzQmluYXJ5LCBmYWxzZSwgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgZG9uZUNhbGxiYWNrKG51bGwsIHNldExlbmd0aEhlYWRlcihtZXNzYWdlKSk7XG4gICAgfSk7XG4gIH1cblxuICBtYXAocGFja2V0cywgZW5jb2RlT25lLCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0cy5qb2luKCcnKSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBBc3luYyBhcnJheSBtYXAgdXNpbmcgYWZ0ZXJcbiAqL1xuXG5mdW5jdGlvbiBtYXAoYXJ5LCBlYWNoLCBkb25lKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoYXJ5Lmxlbmd0aCk7XG4gIHZhciBuZXh0ID0gYWZ0ZXIoYXJ5Lmxlbmd0aCwgZG9uZSk7XG5cbiAgdmFyIGVhY2hXaXRoSW5kZXggPSBmdW5jdGlvbihpLCBlbCwgY2IpIHtcbiAgICBlYWNoKGVsLCBmdW5jdGlvbihlcnJvciwgbXNnKSB7XG4gICAgICByZXN1bHRbaV0gPSBtc2c7XG4gICAgICBjYihlcnJvciwgcmVzdWx0KTtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyeS5sZW5ndGg7IGkrKykge1xuICAgIGVhY2hXaXRoSW5kZXgoaSwgYXJ5W2ldLCBuZXh0KTtcbiAgfVxufVxuXG4vKlxuICogRGVjb2RlcyBkYXRhIHdoZW4gYSBwYXlsb2FkIGlzIG1heWJlIGV4cGVjdGVkLiBQb3NzaWJsZSBiaW5hcnkgY29udGVudHMgYXJlXG4gKiBkZWNvZGVkIGZyb20gdGhlaXIgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGEsIGNhbGxiYWNrIG1ldGhvZFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmRlY29kZVBheWxvYWQgPSBmdW5jdGlvbiAoZGF0YSwgYmluYXJ5VHlwZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBleHBvcnRzLmRlY29kZVBheWxvYWRBc0JpbmFyeShkYXRhLCBiaW5hcnlUeXBlLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAodHlwZW9mIGJpbmFyeVR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGJpbmFyeVR5cGU7XG4gICAgYmluYXJ5VHlwZSA9IG51bGw7XG4gIH1cblxuICB2YXIgcGFja2V0O1xuICBpZiAoZGF0YSA9PT0gJycpIHtcbiAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gJycsIG4sIG1zZztcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNociA9IGRhdGEuY2hhckF0KGkpO1xuXG4gICAgaWYgKGNociAhPT0gJzonKSB7XG4gICAgICBsZW5ndGggKz0gY2hyO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGxlbmd0aCA9PT0gJycgfHwgKGxlbmd0aCAhPSAobiA9IE51bWJlcihsZW5ndGgpKSkpIHtcbiAgICAgIC8vIHBhcnNlciBlcnJvciAtIGlnbm9yaW5nIHBheWxvYWRcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgIH1cblxuICAgIG1zZyA9IGRhdGEuc3Vic3RyKGkgKyAxLCBuKTtcblxuICAgIGlmIChsZW5ndGggIT0gbXNnLmxlbmd0aCkge1xuICAgICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gICAgfVxuXG4gICAgaWYgKG1zZy5sZW5ndGgpIHtcbiAgICAgIHBhY2tldCA9IGV4cG9ydHMuZGVjb2RlUGFja2V0KG1zZywgYmluYXJ5VHlwZSwgZmFsc2UpO1xuXG4gICAgICBpZiAoZXJyLnR5cGUgPT09IHBhY2tldC50eXBlICYmIGVyci5kYXRhID09PSBwYWNrZXQuZGF0YSkge1xuICAgICAgICAvLyBwYXJzZXIgZXJyb3IgaW4gaW5kaXZpZHVhbCBwYWNrZXQgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmV0ID0gY2FsbGJhY2socGFja2V0LCBpICsgbiwgbCk7XG4gICAgICBpZiAoZmFsc2UgPT09IHJldCkgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFkdmFuY2UgY3Vyc29yXG4gICAgaSArPSBuO1xuICAgIGxlbmd0aCA9ICcnO1xuICB9XG5cbiAgaWYgKGxlbmd0aCAhPT0gJycpIHtcbiAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gIH1cblxufTtcblxuLyoqXG4gKiBFbmNvZGVzIG11bHRpcGxlIG1lc3NhZ2VzIChwYXlsb2FkKSBhcyBiaW5hcnkuXG4gKlxuICogPDEgPSBiaW5hcnksIDAgPSBzdHJpbmc+PG51bWJlciBmcm9tIDAtOT48bnVtYmVyIGZyb20gMC05PlsuLi5dPG51bWJlclxuICogMjU1PjxkYXRhPlxuICpcbiAqIEV4YW1wbGU6XG4gKiAxIDMgMjU1IDEgMiAzLCBpZiB0aGUgYmluYXJ5IGNvbnRlbnRzIGFyZSBpbnRlcnByZXRlZCBhcyA4IGJpdCBpbnRlZ2Vyc1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBlbmNvZGVkIHBheWxvYWRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGF5bG9hZEFzQXJyYXlCdWZmZXIgPSBmdW5jdGlvbihwYWNrZXRzLCBjYWxsYmFjaykge1xuICBpZiAoIXBhY2tldHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBBcnJheUJ1ZmZlcigwKSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmNvZGVPbmUocGFja2V0LCBkb25lQ2FsbGJhY2spIHtcbiAgICBleHBvcnRzLmVuY29kZVBhY2tldChwYWNrZXQsIHRydWUsIHRydWUsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiBkb25lQ2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBtYXAocGFja2V0cywgZW5jb2RlT25lLCBmdW5jdGlvbihlcnIsIGVuY29kZWRQYWNrZXRzKSB7XG4gICAgdmFyIHRvdGFsTGVuZ3RoID0gZW5jb2RlZFBhY2tldHMucmVkdWNlKGZ1bmN0aW9uKGFjYywgcCkge1xuICAgICAgdmFyIGxlbjtcbiAgICAgIGlmICh0eXBlb2YgcCA9PT0gJ3N0cmluZycpe1xuICAgICAgICBsZW4gPSBwLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IHAuYnl0ZUxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2MgKyBsZW4udG9TdHJpbmcoKS5sZW5ndGggKyBsZW4gKyAyOyAvLyBzdHJpbmcvYmluYXJ5IGlkZW50aWZpZXIgKyBzZXBhcmF0b3IgPSAyXG4gICAgfSwgMCk7XG5cbiAgICB2YXIgcmVzdWx0QXJyYXkgPSBuZXcgVWludDhBcnJheSh0b3RhbExlbmd0aCk7XG5cbiAgICB2YXIgYnVmZmVySW5kZXggPSAwO1xuICAgIGVuY29kZWRQYWNrZXRzLmZvckVhY2goZnVuY3Rpb24ocCkge1xuICAgICAgdmFyIGlzU3RyaW5nID0gdHlwZW9mIHAgPT09ICdzdHJpbmcnO1xuICAgICAgdmFyIGFiID0gcDtcbiAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KHAubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmlld1tpXSA9IHAuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBhYiA9IHZpZXcuYnVmZmVyO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdHJpbmcpIHsgLy8gbm90IHRydWUgYmluYXJ5XG4gICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMDtcbiAgICAgIH0gZWxzZSB7IC8vIHRydWUgYmluYXJ5XG4gICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlblN0ciA9IGFiLmJ5dGVMZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuU3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gcGFyc2VJbnQobGVuU3RyW2ldKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gMjU1O1xuXG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGFiKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IHZpZXdbaV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0QXJyYXkuYnVmZmVyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBhcyBCbG9iXG4gKi9cblxuZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNCbG9iID0gZnVuY3Rpb24ocGFja2V0cywgY2FsbGJhY2spIHtcbiAgZnVuY3Rpb24gZW5jb2RlT25lKHBhY2tldCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCB0cnVlLCB0cnVlLCBmdW5jdGlvbihlbmNvZGVkKSB7XG4gICAgICB2YXIgYmluYXJ5SWRlbnRpZmllciA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgICAgYmluYXJ5SWRlbnRpZmllclswXSA9IDE7XG4gICAgICBpZiAodHlwZW9mIGVuY29kZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoZW5jb2RlZC5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2aWV3W2ldID0gZW5jb2RlZC5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGVuY29kZWQgPSB2aWV3LmJ1ZmZlcjtcbiAgICAgICAgYmluYXJ5SWRlbnRpZmllclswXSA9IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW4gPSAoZW5jb2RlZCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKVxuICAgICAgICA/IGVuY29kZWQuYnl0ZUxlbmd0aFxuICAgICAgICA6IGVuY29kZWQuc2l6ZTtcblxuICAgICAgdmFyIGxlblN0ciA9IGxlbi50b1N0cmluZygpO1xuICAgICAgdmFyIGxlbmd0aEFyeSA9IG5ldyBVaW50OEFycmF5KGxlblN0ci5sZW5ndGggKyAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuU3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxlbmd0aEFyeVtpXSA9IHBhcnNlSW50KGxlblN0cltpXSk7XG4gICAgICB9XG4gICAgICBsZW5ndGhBcnlbbGVuU3RyLmxlbmd0aF0gPSAyNTU7XG5cbiAgICAgIGlmIChCbG9iKSB7XG4gICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoW2JpbmFyeUlkZW50aWZpZXIuYnVmZmVyLCBsZW5ndGhBcnkuYnVmZmVyLCBlbmNvZGVkXSk7XG4gICAgICAgIGRvbmVDYWxsYmFjayhudWxsLCBibG9iKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG1hcChwYWNrZXRzLCBlbmNvZGVPbmUsIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICAgIHJldHVybiBjYWxsYmFjayhuZXcgQmxvYihyZXN1bHRzKSk7XG4gIH0pO1xufTtcblxuLypcbiAqIERlY29kZXMgZGF0YSB3aGVuIGEgcGF5bG9hZCBpcyBtYXliZSBleHBlY3RlZC4gU3RyaW5ncyBhcmUgZGVjb2RlZCBieVxuICogaW50ZXJwcmV0aW5nIGVhY2ggYnl0ZSBhcyBhIGtleSBjb2RlIGZvciBlbnRyaWVzIG1hcmtlZCB0byBzdGFydCB3aXRoIDAuIFNlZVxuICogZGVzY3JpcHRpb24gb2YgZW5jb2RlUGF5bG9hZEFzQmluYXJ5XG4gKlxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gZGF0YSwgY2FsbGJhY2sgbWV0aG9kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuZGVjb2RlUGF5bG9hZEFzQmluYXJ5ID0gZnVuY3Rpb24gKGRhdGEsIGJpbmFyeVR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgYmluYXJ5VHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gYmluYXJ5VHlwZTtcbiAgICBiaW5hcnlUeXBlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBidWZmZXJUYWlsID0gZGF0YTtcbiAgdmFyIGJ1ZmZlcnMgPSBbXTtcblxuICB3aGlsZSAoYnVmZmVyVGFpbC5ieXRlTGVuZ3RoID4gMCkge1xuICAgIHZhciB0YWlsQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJUYWlsKTtcbiAgICB2YXIgaXNTdHJpbmcgPSB0YWlsQXJyYXlbMF0gPT09IDA7XG4gICAgdmFyIG1zZ0xlbmd0aCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IDsgaSsrKSB7XG4gICAgICBpZiAodGFpbEFycmF5W2ldID09PSAyNTUpIGJyZWFrO1xuXG4gICAgICAvLyAzMTAgPSBjaGFyIGxlbmd0aCBvZiBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICBpZiAobXNnTGVuZ3RoLmxlbmd0aCA+IDMxMCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICAgIH1cblxuICAgICAgbXNnTGVuZ3RoICs9IHRhaWxBcnJheVtpXTtcbiAgICB9XG5cbiAgICBidWZmZXJUYWlsID0gc2xpY2VCdWZmZXIoYnVmZmVyVGFpbCwgMiArIG1zZ0xlbmd0aC5sZW5ndGgpO1xuICAgIG1zZ0xlbmd0aCA9IHBhcnNlSW50KG1zZ0xlbmd0aCk7XG5cbiAgICB2YXIgbXNnID0gc2xpY2VCdWZmZXIoYnVmZmVyVGFpbCwgMCwgbXNnTGVuZ3RoKTtcbiAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1zZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkobXNnKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlQaG9uZSBTYWZhcmkgZG9lc24ndCBsZXQgeW91IGFwcGx5IHRvIHR5cGVkIGFycmF5c1xuICAgICAgICB2YXIgdHlwZWQgPSBuZXcgVWludDhBcnJheShtc2cpO1xuICAgICAgICBtc2cgPSAnJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG1zZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHR5cGVkW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGJ1ZmZlcnMucHVzaChtc2cpO1xuICAgIGJ1ZmZlclRhaWwgPSBzbGljZUJ1ZmZlcihidWZmZXJUYWlsLCBtc2dMZW5ndGgpO1xuICB9XG5cbiAgdmFyIHRvdGFsID0gYnVmZmVycy5sZW5ndGg7XG4gIGJ1ZmZlcnMuZm9yRWFjaChmdW5jdGlvbihidWZmZXIsIGkpIHtcbiAgICBjYWxsYmFjayhleHBvcnRzLmRlY29kZVBhY2tldChidWZmZXIsIGJpbmFyeVR5cGUsIHRydWUpLCBpLCB0b3RhbCk7XG4gIH0pO1xufTtcbiIsIlxuLyoqXG4gKiBHZXRzIHRoZSBrZXlzIGZvciBhbiBvYmplY3QuXG4gKlxuICogQHJldHVybiB7QXJyYXl9IGtleXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyAob2JqKXtcbiAgdmFyIGFyciA9IFtdO1xuICB2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChoYXMuY2FsbChvYmosIGkpKSB7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG4iLCIvKiEgaHR0cHM6Ly9tdGhzLmJlL3V0ZjhqcyB2Mi4xLjIgYnkgQG1hdGhpYXMgKi9cblxudmFyIHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbi8vIFRha2VuIGZyb20gaHR0cHM6Ly9tdGhzLmJlL3B1bnljb2RlXG5mdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuXHR2YXIgb3V0cHV0ID0gW107XG5cdHZhciBjb3VudGVyID0gMDtcblx0dmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cdHZhciB2YWx1ZTtcblx0dmFyIGV4dHJhO1xuXHR3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xuXHRcdHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRpZiAodmFsdWUgPj0gMHhEODAwICYmIHZhbHVlIDw9IDB4REJGRiAmJiBjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0XHQvLyBoaWdoIHN1cnJvZ2F0ZSwgYW5kIHRoZXJlIGlzIGEgbmV4dCBjaGFyYWN0ZXJcblx0XHRcdGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICgoZXh0cmEgJiAweEZDMDApID09IDB4REMwMCkgeyAvLyBsb3cgc3Vycm9nYXRlXG5cdFx0XHRcdG91dHB1dC5wdXNoKCgodmFsdWUgJiAweDNGRikgPDwgMTApICsgKGV4dHJhICYgMHgzRkYpICsgMHgxMDAwMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB1bm1hdGNoZWQgc3Vycm9nYXRlOyBvbmx5IGFwcGVuZCB0aGlzIGNvZGUgdW5pdCwgaW4gY2FzZSB0aGUgbmV4dFxuXHRcdFx0XHQvLyBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXJcblx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRjb3VudGVyLS07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG91dHB1dDtcbn1cblxuLy8gVGFrZW4gZnJvbSBodHRwczovL210aHMuYmUvcHVueWNvZGVcbmZ1bmN0aW9uIHVjczJlbmNvZGUoYXJyYXkpIHtcblx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0dmFyIGluZGV4ID0gLTE7XG5cdHZhciB2YWx1ZTtcblx0dmFyIG91dHB1dCA9ICcnO1xuXHR3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuXHRcdHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuXHRcdGlmICh2YWx1ZSA+IDB4RkZGRikge1xuXHRcdFx0dmFsdWUgLT0gMHgxMDAwMDtcblx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuXHRcdFx0dmFsdWUgPSAweERDMDAgfCB2YWx1ZSAmIDB4M0ZGO1xuXHRcdH1cblx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCwgc3RyaWN0KSB7XG5cdGlmIChjb2RlUG9pbnQgPj0gMHhEODAwICYmIGNvZGVQb2ludCA8PSAweERGRkYpIHtcblx0XHRpZiAoc3RyaWN0KSB7XG5cdFx0XHR0aHJvdyBFcnJvcihcblx0XHRcdFx0J0xvbmUgc3Vycm9nYXRlIFUrJyArIGNvZGVQb2ludC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSArXG5cdFx0XHRcdCcgaXMgbm90IGEgc2NhbGFyIHZhbHVlJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ5dGUoY29kZVBvaW50LCBzaGlmdCkge1xuXHRyZXR1cm4gc3RyaW5nRnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IHNoaWZ0KSAmIDB4M0YpIHwgMHg4MCk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUNvZGVQb2ludChjb2RlUG9pbnQsIHN0cmljdCkge1xuXHRpZiAoKGNvZGVQb2ludCAmIDB4RkZGRkZGODApID09IDApIHsgLy8gMS1ieXRlIHNlcXVlbmNlXG5cdFx0cmV0dXJuIHN0cmluZ0Zyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuXHR9XG5cdHZhciBzeW1ib2wgPSAnJztcblx0aWYgKChjb2RlUG9pbnQgJiAweEZGRkZGODAwKSA9PSAwKSB7IC8vIDItYnl0ZSBzZXF1ZW5jZVxuXHRcdHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiA2KSAmIDB4MUYpIHwgMHhDMCk7XG5cdH1cblx0ZWxzZSBpZiAoKGNvZGVQb2ludCAmIDB4RkZGRjAwMDApID09IDApIHsgLy8gMy1ieXRlIHNlcXVlbmNlXG5cdFx0aWYgKCFjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCwgc3RyaWN0KSkge1xuXHRcdFx0Y29kZVBvaW50ID0gMHhGRkZEO1xuXHRcdH1cblx0XHRzeW1ib2wgPSBzdHJpbmdGcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4gMTIpICYgMHgwRikgfCAweEUwKTtcblx0XHRzeW1ib2wgKz0gY3JlYXRlQnl0ZShjb2RlUG9pbnQsIDYpO1xuXHR9XG5cdGVsc2UgaWYgKChjb2RlUG9pbnQgJiAweEZGRTAwMDAwKSA9PSAwKSB7IC8vIDQtYnl0ZSBzZXF1ZW5jZVxuXHRcdHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiAxOCkgJiAweDA3KSB8IDB4RjApO1xuXHRcdHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgMTIpO1xuXHRcdHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgNik7XG5cdH1cblx0c3ltYm9sICs9IHN0cmluZ0Zyb21DaGFyQ29kZSgoY29kZVBvaW50ICYgMHgzRikgfCAweDgwKTtcblx0cmV0dXJuIHN5bWJvbDtcbn1cblxuZnVuY3Rpb24gdXRmOGVuY29kZShzdHJpbmcsIG9wdHMpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cdHZhciBzdHJpY3QgPSBmYWxzZSAhPT0gb3B0cy5zdHJpY3Q7XG5cblx0dmFyIGNvZGVQb2ludHMgPSB1Y3MyZGVjb2RlKHN0cmluZyk7XG5cdHZhciBsZW5ndGggPSBjb2RlUG9pbnRzLmxlbmd0aDtcblx0dmFyIGluZGV4ID0gLTE7XG5cdHZhciBjb2RlUG9pbnQ7XG5cdHZhciBieXRlU3RyaW5nID0gJyc7XG5cdHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG5cdFx0Y29kZVBvaW50ID0gY29kZVBvaW50c1tpbmRleF07XG5cdFx0Ynl0ZVN0cmluZyArPSBlbmNvZGVDb2RlUG9pbnQoY29kZVBvaW50LCBzdHJpY3QpO1xuXHR9XG5cdHJldHVybiBieXRlU3RyaW5nO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuZnVuY3Rpb24gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKSB7XG5cdGlmIChieXRlSW5kZXggPj0gYnl0ZUNvdW50KSB7XG5cdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgYnl0ZSBpbmRleCcpO1xuXHR9XG5cblx0dmFyIGNvbnRpbnVhdGlvbkJ5dGUgPSBieXRlQXJyYXlbYnl0ZUluZGV4XSAmIDB4RkY7XG5cdGJ5dGVJbmRleCsrO1xuXG5cdGlmICgoY29udGludWF0aW9uQnl0ZSAmIDB4QzApID09IDB4ODApIHtcblx0XHRyZXR1cm4gY29udGludWF0aW9uQnl0ZSAmIDB4M0Y7XG5cdH1cblxuXHQvLyBJZiB3ZSBlbmQgdXAgaGVyZSwgaXTigJlzIG5vdCBhIGNvbnRpbnVhdGlvbiBieXRlXG5cdHRocm93IEVycm9yKCdJbnZhbGlkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZVN5bWJvbChzdHJpY3QpIHtcblx0dmFyIGJ5dGUxO1xuXHR2YXIgYnl0ZTI7XG5cdHZhciBieXRlMztcblx0dmFyIGJ5dGU0O1xuXHR2YXIgY29kZVBvaW50O1xuXG5cdGlmIChieXRlSW5kZXggPiBieXRlQ291bnQpIHtcblx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBieXRlIGluZGV4Jyk7XG5cdH1cblxuXHRpZiAoYnl0ZUluZGV4ID09IGJ5dGVDb3VudCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIFJlYWQgZmlyc3QgYnl0ZVxuXHRieXRlMSA9IGJ5dGVBcnJheVtieXRlSW5kZXhdICYgMHhGRjtcblx0Ynl0ZUluZGV4Kys7XG5cblx0Ly8gMS1ieXRlIHNlcXVlbmNlIChubyBjb250aW51YXRpb24gYnl0ZXMpXG5cdGlmICgoYnl0ZTEgJiAweDgwKSA9PSAwKSB7XG5cdFx0cmV0dXJuIGJ5dGUxO1xuXHR9XG5cblx0Ly8gMi1ieXRlIHNlcXVlbmNlXG5cdGlmICgoYnl0ZTEgJiAweEUwKSA9PSAweEMwKSB7XG5cdFx0Ynl0ZTIgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGNvZGVQb2ludCA9ICgoYnl0ZTEgJiAweDFGKSA8PCA2KSB8IGJ5dGUyO1xuXHRcdGlmIChjb2RlUG9pbnQgPj0gMHg4MCkge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcblx0XHR9XG5cdH1cblxuXHQvLyAzLWJ5dGUgc2VxdWVuY2UgKG1heSBpbmNsdWRlIHVucGFpcmVkIHN1cnJvZ2F0ZXMpXG5cdGlmICgoYnl0ZTEgJiAweEYwKSA9PSAweEUwKSB7XG5cdFx0Ynl0ZTIgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGJ5dGUzID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRjb2RlUG9pbnQgPSAoKGJ5dGUxICYgMHgwRikgPDwgMTIpIHwgKGJ5dGUyIDw8IDYpIHwgYnl0ZTM7XG5cdFx0aWYgKGNvZGVQb2ludCA+PSAweDA4MDApIHtcblx0XHRcdHJldHVybiBjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCwgc3RyaWN0KSA/IGNvZGVQb2ludCA6IDB4RkZGRDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcblx0XHR9XG5cdH1cblxuXHQvLyA0LWJ5dGUgc2VxdWVuY2Vcblx0aWYgKChieXRlMSAmIDB4RjgpID09IDB4RjApIHtcblx0XHRieXRlMiA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG5cdFx0Ynl0ZTMgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGJ5dGU0ID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRjb2RlUG9pbnQgPSAoKGJ5dGUxICYgMHgwNykgPDwgMHgxMikgfCAoYnl0ZTIgPDwgMHgwQykgfFxuXHRcdFx0KGJ5dGUzIDw8IDB4MDYpIHwgYnl0ZTQ7XG5cdFx0aWYgKGNvZGVQb2ludCA+PSAweDAxMDAwMCAmJiBjb2RlUG9pbnQgPD0gMHgxMEZGRkYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQ7XG5cdFx0fVxuXHR9XG5cblx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgVVRGLTggZGV0ZWN0ZWQnKTtcbn1cblxudmFyIGJ5dGVBcnJheTtcbnZhciBieXRlQ291bnQ7XG52YXIgYnl0ZUluZGV4O1xuZnVuY3Rpb24gdXRmOGRlY29kZShieXRlU3RyaW5nLCBvcHRzKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHR2YXIgc3RyaWN0ID0gZmFsc2UgIT09IG9wdHMuc3RyaWN0O1xuXG5cdGJ5dGVBcnJheSA9IHVjczJkZWNvZGUoYnl0ZVN0cmluZyk7XG5cdGJ5dGVDb3VudCA9IGJ5dGVBcnJheS5sZW5ndGg7XG5cdGJ5dGVJbmRleCA9IDA7XG5cdHZhciBjb2RlUG9pbnRzID0gW107XG5cdHZhciB0bXA7XG5cdHdoaWxlICgodG1wID0gZGVjb2RlU3ltYm9sKHN0cmljdCkpICE9PSBmYWxzZSkge1xuXHRcdGNvZGVQb2ludHMucHVzaCh0bXApO1xuXHR9XG5cdHJldHVybiB1Y3MyZW5jb2RlKGNvZGVQb2ludHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0dmVyc2lvbjogJzIuMS4yJyxcblx0ZW5jb2RlOiB1dGY4ZW5jb2RlLFxuXHRkZWNvZGU6IHV0ZjhkZWNvZGVcbn07XG4iLCIvKiBnbG9iYWwgQmxvYiBGaWxlICovXG5cbi8qXG4gKiBNb2R1bGUgcmVxdWlyZW1lbnRzLlxuICovXG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHdpdGhOYXRpdmVCbG9iID0gdHlwZW9mIEJsb2IgPT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiB0b1N0cmluZy5jYWxsKEJsb2IpID09PSAnW29iamVjdCBCbG9iQ29uc3RydWN0b3JdJztcbnZhciB3aXRoTmF0aXZlRmlsZSA9IHR5cGVvZiBGaWxlID09PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgRmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdG9TdHJpbmcuY2FsbChGaWxlKSA9PT0gJ1tvYmplY3QgRmlsZUNvbnN0cnVjdG9yXSc7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNCaW5hcnk7XG5cbi8qKlxuICogQ2hlY2tzIGZvciBiaW5hcnkgZGF0YS5cbiAqXG4gKiBTdXBwb3J0cyBCdWZmZXIsIEFycmF5QnVmZmVyLCBCbG9iIGFuZCBGaWxlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbnl0aGluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBoYXNCaW5hcnkgKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChoYXNCaW5hcnkob2JqW2ldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCh0eXBlb2YgQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIEJ1ZmZlci5pc0J1ZmZlciAmJiBCdWZmZXIuaXNCdWZmZXIob2JqKSkgfHxcbiAgICAodHlwZW9mIEFycmF5QnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fFxuICAgICh3aXRoTmF0aXZlQmxvYiAmJiBvYmogaW5zdGFuY2VvZiBCbG9iKSB8fFxuICAgICh3aXRoTmF0aXZlRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvaGFzLWJpbmFyeS9wdWxsLzRcbiAgaWYgKG9iai50b0pTT04gJiYgdHlwZW9mIG9iai50b0pTT04gPT09ICdmdW5jdGlvbicgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBoYXNCaW5hcnkob2JqLnRvSlNPTigpLCB0cnVlKTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSAmJiBoYXNCaW5hcnkob2JqW2tleV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iLCJcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKlxuICogTG9naWMgYm9ycm93ZWQgZnJvbSBNb2Rlcm5penI6XG4gKlxuICogICAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9jb3JzLmpzXG4gKi9cblxudHJ5IHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnICYmXG4gICAgJ3dpdGhDcmVkZW50aWFscycgaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG59IGNhdGNoIChlcnIpIHtcbiAgLy8gaWYgWE1MSHR0cCBzdXBwb3J0IGlzIGRpc2FibGVkIGluIElFIHRoZW4gaXQgd2lsbCB0aHJvd1xuICAvLyB3aGVuIHRyeWluZyB0byBjcmVhdGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbn1cbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsIlxudmFyIGluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgb2JqKXtcbiAgaWYgKGluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihvYmopO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xuICAgIGlmIChhcnJbaV0gPT09IG9iaikgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIGlmIChtcyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtcyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICByZXR1cm4gcGx1cmFsKG1zLCBkLCAnZGF5JykgfHxcbiAgICBwbHVyYWwobXMsIGgsICdob3VyJykgfHxcbiAgICBwbHVyYWwobXMsIG0sICdtaW51dGUnKSB8fFxuICAgIHBsdXJhbChtcywgcywgJ3NlY29uZCcpIHx8XG4gICAgbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG4sIG5hbWUpIHtcbiAgaWYgKG1zIDwgbikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobXMgPCBuICogMS41KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobXMgLyBuKSArICcgJyArIG5hbWU7XG4gIH1cbiAgcmV0dXJuIE1hdGguY2VpbChtcyAvIG4pICsgJyAnICsgbmFtZSArICdzJztcbn1cbiIsIi8qKlxyXG4gKiBDb21waWxlcyBhIHF1ZXJ5c3RyaW5nXHJcbiAqIFJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3RcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gIHZhciBzdHIgPSAnJztcclxuXHJcbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcclxuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgaWYgKHN0ci5sZW5ndGgpIHN0ciArPSAnJic7XHJcbiAgICAgIHN0ciArPSBlbmNvZGVVUklDb21wb25lbnQoaSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzdHI7XHJcbn07XHJcblxyXG4vKipcclxuICogUGFyc2VzIGEgc2ltcGxlIHF1ZXJ5c3RyaW5nIGludG8gYW4gb2JqZWN0XHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBxc1xyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uKHFzKXtcclxuICB2YXIgcXJ5ID0ge307XHJcbiAgdmFyIHBhaXJzID0gcXMuc3BsaXQoJyYnKTtcclxuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhaXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xyXG4gICAgcXJ5W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSk7XHJcbiAgfVxyXG4gIHJldHVybiBxcnk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBQYXJzZXMgYW4gVVJJXHJcbiAqXHJcbiAqIEBhdXRob3IgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+IChNSVQgbGljZW5zZSlcclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxudmFyIHJlID0gL14oPzooPyFbXjpAXSs6W146QFxcL10qQCkoaHR0cHxodHRwc3x3c3x3c3MpOlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oKD86W2EtZjAtOV17MCw0fTopezIsN31bYS1mMC05XXswLDR9fFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XHJcblxyXG52YXIgcGFydHMgPSBbXHJcbiAgICAnc291cmNlJywgJ3Byb3RvY29sJywgJ2F1dGhvcml0eScsICd1c2VySW5mbycsICd1c2VyJywgJ3Bhc3N3b3JkJywgJ2hvc3QnLCAncG9ydCcsICdyZWxhdGl2ZScsICdwYXRoJywgJ2RpcmVjdG9yeScsICdmaWxlJywgJ3F1ZXJ5JywgJ2FuY2hvcidcclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2V1cmkoc3RyKSB7XHJcbiAgICB2YXIgc3JjID0gc3RyLFxyXG4gICAgICAgIGIgPSBzdHIuaW5kZXhPZignWycpLFxyXG4gICAgICAgIGUgPSBzdHIuaW5kZXhPZignXScpO1xyXG5cclxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcclxuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGIpICsgc3RyLnN1YnN0cmluZyhiLCBlKS5yZXBsYWNlKC86L2csICc7JykgKyBzdHIuc3Vic3RyaW5nKGUsIHN0ci5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtID0gcmUuZXhlYyhzdHIgfHwgJycpLFxyXG4gICAgICAgIHVyaSA9IHt9LFxyXG4gICAgICAgIGkgPSAxNDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgdXJpW3BhcnRzW2ldXSA9IG1baV0gfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xyXG4gICAgICAgIHVyaS5zb3VyY2UgPSBzcmM7XHJcbiAgICAgICAgdXJpLmhvc3QgPSB1cmkuaG9zdC5zdWJzdHJpbmcoMSwgdXJpLmhvc3QubGVuZ3RoIC0gMSkucmVwbGFjZSgvOy9nLCAnOicpO1xyXG4gICAgICAgIHVyaS5hdXRob3JpdHkgPSB1cmkuYXV0aG9yaXR5LnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKS5yZXBsYWNlKC87L2csICc6Jyk7XHJcbiAgICAgICAgdXJpLmlwdjZ1cmkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1cmk7XHJcbn07XHJcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgdXJsID0gcmVxdWlyZSgnLi91cmwnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdzb2NrZXQuaW8tcGFyc2VyJyk7XG52YXIgTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudCcpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGxvb2t1cDtcblxuLyoqXG4gKiBNYW5hZ2VycyBjYWNoZS5cbiAqL1xuXG52YXIgY2FjaGUgPSBleHBvcnRzLm1hbmFnZXJzID0ge307XG5cbi8qKlxuICogTG9va3MgdXAgYW4gZXhpc3RpbmcgYE1hbmFnZXJgIGZvciBtdWx0aXBsZXhpbmcuXG4gKiBJZiB0aGUgdXNlciBzdW1tb25zOlxuICpcbiAqICAgYGlvKCdodHRwOi8vbG9jYWxob3N0L2EnKTtgXG4gKiAgIGBpbygnaHR0cDovL2xvY2FsaG9zdC9iJyk7YFxuICpcbiAqIFdlIHJldXNlIHRoZSBleGlzdGluZyBpbnN0YW5jZSBiYXNlZCBvbiBzYW1lIHNjaGVtZS9wb3J0L2hvc3QsXG4gKiBhbmQgd2UgaW5pdGlhbGl6ZSBzb2NrZXRzIGZvciBlYWNoIG5hbWVzcGFjZS5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvb2t1cCAodXJpLCBvcHRzKSB7XG4gIGlmICh0eXBlb2YgdXJpID09PSAnb2JqZWN0Jykge1xuICAgIG9wdHMgPSB1cmk7XG4gICAgdXJpID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgdmFyIHBhcnNlZCA9IHVybCh1cmkpO1xuICB2YXIgc291cmNlID0gcGFyc2VkLnNvdXJjZTtcbiAgdmFyIGlkID0gcGFyc2VkLmlkO1xuICB2YXIgcGF0aCA9IHBhcnNlZC5wYXRoO1xuICB2YXIgc2FtZU5hbWVzcGFjZSA9IGNhY2hlW2lkXSAmJiBwYXRoIGluIGNhY2hlW2lkXS5uc3BzO1xuICB2YXIgbmV3Q29ubmVjdGlvbiA9IG9wdHMuZm9yY2VOZXcgfHwgb3B0c1snZm9yY2UgbmV3IGNvbm5lY3Rpb24nXSB8fFxuICAgICAgICAgICAgICAgICAgICAgIGZhbHNlID09PSBvcHRzLm11bHRpcGxleCB8fCBzYW1lTmFtZXNwYWNlO1xuXG4gIHZhciBpbztcblxuICBpZiAobmV3Q29ubmVjdGlvbikge1xuICAgIGRlYnVnKCdpZ25vcmluZyBzb2NrZXQgY2FjaGUgZm9yICVzJywgc291cmNlKTtcbiAgICBpbyA9IE1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWNhY2hlW2lkXSkge1xuICAgICAgZGVidWcoJ25ldyBpbyBpbnN0YW5jZSBmb3IgJXMnLCBzb3VyY2UpO1xuICAgICAgY2FjaGVbaWRdID0gTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgIH1cbiAgICBpbyA9IGNhY2hlW2lkXTtcbiAgfVxuICBpZiAocGFyc2VkLnF1ZXJ5ICYmICFvcHRzLnF1ZXJ5KSB7XG4gICAgb3B0cy5xdWVyeSA9IHBhcnNlZC5xdWVyeTtcbiAgfVxuICByZXR1cm4gaW8uc29ja2V0KHBhcnNlZC5wYXRoLCBvcHRzKTtcbn1cblxuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5wcm90b2NvbCA9IHBhcnNlci5wcm90b2NvbDtcblxuLyoqXG4gKiBgY29ubmVjdGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVyaVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmNvbm5lY3QgPSBsb29rdXA7XG5cbi8qKlxuICogRXhwb3NlIGNvbnN0cnVjdG9ycyBmb3Igc3RhbmRhbG9uZSBidWlsZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xuZXhwb3J0cy5Tb2NrZXQgPSByZXF1aXJlKCcuL3NvY2tldCcpO1xuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIGVpbyA9IHJlcXVpcmUoJ2VuZ2luZS5pby1jbGllbnQnKTtcbnZhciBTb2NrZXQgPSByZXF1aXJlKCcuL3NvY2tldCcpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJ3NvY2tldC5pby1wYXJzZXInKTtcbnZhciBvbiA9IHJlcXVpcmUoJy4vb24nKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnY29tcG9uZW50LWJpbmQnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQ6bWFuYWdlcicpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCdpbmRleG9mJyk7XG52YXIgQmFja29mZiA9IHJlcXVpcmUoJ2JhY2tvMicpO1xuXG4vKipcbiAqIElFNisgaGFzT3duUHJvcGVydHlcbiAqL1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0c1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gTWFuYWdlcjtcblxuLyoqXG4gKiBgTWFuYWdlcmAgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGVuZ2luZSBpbnN0YW5jZSBvciBlbmdpbmUgdXJpL29wdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIE1hbmFnZXIgKHVyaSwgb3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWFuYWdlcikpIHJldHVybiBuZXcgTWFuYWdlcih1cmksIG9wdHMpO1xuICBpZiAodXJpICYmICgnb2JqZWN0JyA9PT0gdHlwZW9mIHVyaSkpIHtcbiAgICBvcHRzID0gdXJpO1xuICAgIHVyaSA9IHVuZGVmaW5lZDtcbiAgfVxuICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICBvcHRzLnBhdGggPSBvcHRzLnBhdGggfHwgJy9zb2NrZXQuaW8nO1xuICB0aGlzLm5zcHMgPSB7fTtcbiAgdGhpcy5zdWJzID0gW107XG4gIHRoaXMub3B0cyA9IG9wdHM7XG4gIHRoaXMucmVjb25uZWN0aW9uKG9wdHMucmVjb25uZWN0aW9uICE9PSBmYWxzZSk7XG4gIHRoaXMucmVjb25uZWN0aW9uQXR0ZW1wdHMob3B0cy5yZWNvbm5lY3Rpb25BdHRlbXB0cyB8fCBJbmZpbml0eSk7XG4gIHRoaXMucmVjb25uZWN0aW9uRGVsYXkob3B0cy5yZWNvbm5lY3Rpb25EZWxheSB8fCAxMDAwKTtcbiAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heChvcHRzLnJlY29ubmVjdGlvbkRlbGF5TWF4IHx8IDUwMDApO1xuICB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3Iob3B0cy5yYW5kb21pemF0aW9uRmFjdG9yIHx8IDAuNSk7XG4gIHRoaXMuYmFja29mZiA9IG5ldyBCYWNrb2ZmKHtcbiAgICBtaW46IHRoaXMucmVjb25uZWN0aW9uRGVsYXkoKSxcbiAgICBtYXg6IHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgoKSxcbiAgICBqaXR0ZXI6IHRoaXMucmFuZG9taXphdGlvbkZhY3RvcigpXG4gIH0pO1xuICB0aGlzLnRpbWVvdXQobnVsbCA9PSBvcHRzLnRpbWVvdXQgPyAyMDAwMCA6IG9wdHMudGltZW91dCk7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICB0aGlzLnVyaSA9IHVyaTtcbiAgdGhpcy5jb25uZWN0aW5nID0gW107XG4gIHRoaXMubGFzdFBpbmcgPSBudWxsO1xuICB0aGlzLmVuY29kaW5nID0gZmFsc2U7XG4gIHRoaXMucGFja2V0QnVmZmVyID0gW107XG4gIHZhciBfcGFyc2VyID0gb3B0cy5wYXJzZXIgfHwgcGFyc2VyO1xuICB0aGlzLmVuY29kZXIgPSBuZXcgX3BhcnNlci5FbmNvZGVyKCk7XG4gIHRoaXMuZGVjb2RlciA9IG5ldyBfcGFyc2VyLkRlY29kZXIoKTtcbiAgdGhpcy5hdXRvQ29ubmVjdCA9IG9wdHMuYXV0b0Nvbm5lY3QgIT09IGZhbHNlO1xuICBpZiAodGhpcy5hdXRvQ29ubmVjdCkgdGhpcy5vcGVuKCk7XG59XG5cbi8qKlxuICogUHJvcGFnYXRlIGdpdmVuIGV2ZW50IHRvIHNvY2tldHMgYW5kIGVtaXQgb24gYHRoaXNgXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuZW1pdEFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIGZvciAodmFyIG5zcCBpbiB0aGlzLm5zcHMpIHtcbiAgICBpZiAoaGFzLmNhbGwodGhpcy5uc3BzLCBuc3ApKSB7XG4gICAgICB0aGlzLm5zcHNbbnNwXS5lbWl0LmFwcGx5KHRoaXMubnNwc1tuc3BdLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBVcGRhdGUgYHNvY2tldC5pZGAgb2YgYWxsIHNvY2tldHNcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVTb2NrZXRJZHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIG5zcCBpbiB0aGlzLm5zcHMpIHtcbiAgICBpZiAoaGFzLmNhbGwodGhpcy5uc3BzLCBuc3ApKSB7XG4gICAgICB0aGlzLm5zcHNbbnNwXS5pZCA9IHRoaXMuZ2VuZXJhdGVJZChuc3ApO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBnZW5lcmF0ZSBgc29ja2V0LmlkYCBmb3IgdGhlIGdpdmVuIGBuc3BgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5zcFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uIChuc3ApIHtcbiAgcmV0dXJuIChuc3AgPT09ICcvJyA/ICcnIDogKG5zcCArICcjJykpICsgdGhpcy5lbmdpbmUuaWQ7XG59O1xuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihNYW5hZ2VyLnByb3RvdHlwZSk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHJlY29ubmVjdGlvbmAgY29uZmlnLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdHJ1ZS9mYWxzZSBpZiBpdCBzaG91bGQgYXV0b21hdGljYWxseSByZWNvbm5lY3RcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uO1xuICB0aGlzLl9yZWNvbm5lY3Rpb24gPSAhIXY7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSByZWNvbm5lY3Rpb24gYXR0ZW1wdHMgY29uZmlnLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXggcmVjb25uZWN0aW9uIGF0dGVtcHRzIGJlZm9yZSBnaXZpbmcgdXBcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uQXR0ZW1wdHMgPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cztcbiAgdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMgPSB2O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgZGVsYXkgYmV0d2VlbiByZWNvbm5lY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheVxuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5yZWNvbm5lY3Rpb25EZWxheSA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5O1xuICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheSA9IHY7XG4gIHRoaXMuYmFja29mZiAmJiB0aGlzLmJhY2tvZmYuc2V0TWluKHYpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbk1hbmFnZXIucHJvdG90eXBlLnJhbmRvbWl6YXRpb25GYWN0b3IgPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yO1xuICB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yID0gdjtcbiAgdGhpcy5iYWNrb2ZmICYmIHRoaXMuYmFja29mZi5zZXRKaXR0ZXIodik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXhpbXVtIGRlbGF5IGJldHdlZW4gcmVjb25uZWN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXlcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uRGVsYXlNYXggPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heDtcbiAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXggPSB2O1xuICB0aGlzLmJhY2tvZmYgJiYgdGhpcy5iYWNrb2ZmLnNldE1heCh2KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGNvbm5lY3Rpb24gdGltZW91dC4gYGZhbHNlYCB0byBkaXNhYmxlXG4gKlxuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fdGltZW91dDtcbiAgdGhpcy5fdGltZW91dCA9IHY7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTdGFydHMgdHJ5aW5nIHRvIHJlY29ubmVjdCBpZiByZWNvbm5lY3Rpb24gaXMgZW5hYmxlZCBhbmQgd2UgaGF2ZSBub3RcbiAqIHN0YXJ0ZWQgcmVjb25uZWN0aW5nIHlldFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm1heWJlUmVjb25uZWN0T25PcGVuID0gZnVuY3Rpb24gKCkge1xuICAvLyBPbmx5IHRyeSB0byByZWNvbm5lY3QgaWYgaXQncyB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjb25uZWN0aW5nXG4gIGlmICghdGhpcy5yZWNvbm5lY3RpbmcgJiYgdGhpcy5fcmVjb25uZWN0aW9uICYmIHRoaXMuYmFja29mZi5hdHRlbXB0cyA9PT0gMCkge1xuICAgIC8vIGtlZXBzIHJlY29ubmVjdGlvbiBmcm9tIGZpcmluZyB0d2ljZSBmb3IgdGhlIHNhbWUgcmVjb25uZWN0aW9uIGxvb3BcbiAgICB0aGlzLnJlY29ubmVjdCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0IGBzb2NrZXRgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbmFsLCBjYWxsYmFja1xuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vcGVuID1cbk1hbmFnZXIucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoZm4sIG9wdHMpIHtcbiAgZGVidWcoJ3JlYWR5U3RhdGUgJXMnLCB0aGlzLnJlYWR5U3RhdGUpO1xuICBpZiAofnRoaXMucmVhZHlTdGF0ZS5pbmRleE9mKCdvcGVuJykpIHJldHVybiB0aGlzO1xuXG4gIGRlYnVnKCdvcGVuaW5nICVzJywgdGhpcy51cmkpO1xuICB0aGlzLmVuZ2luZSA9IGVpbyh0aGlzLnVyaSwgdGhpcy5vcHRzKTtcbiAgdmFyIHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuaW5nJztcbiAgdGhpcy5za2lwUmVjb25uZWN0ID0gZmFsc2U7XG5cbiAgLy8gZW1pdCBgb3BlbmBcbiAgdmFyIG9wZW5TdWIgPSBvbihzb2NrZXQsICdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgIHNlbGYub25vcGVuKCk7XG4gICAgZm4gJiYgZm4oKTtcbiAgfSk7XG5cbiAgLy8gZW1pdCBgY29ubmVjdF9lcnJvcmBcbiAgdmFyIGVycm9yU3ViID0gb24oc29ja2V0LCAnZXJyb3InLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRlYnVnKCdjb25uZWN0X2Vycm9yJyk7XG4gICAgc2VsZi5jbGVhbnVwKCk7XG4gICAgc2VsZi5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gICAgc2VsZi5lbWl0QWxsKCdjb25uZWN0X2Vycm9yJywgZGF0YSk7XG4gICAgaWYgKGZuKSB7XG4gICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdDb25uZWN0aW9uIGVycm9yJyk7XG4gICAgICBlcnIuZGF0YSA9IGRhdGE7XG4gICAgICBmbihlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPbmx5IGRvIHRoaXMgaWYgdGhlcmUgaXMgbm8gZm4gdG8gaGFuZGxlIHRoZSBlcnJvclxuICAgICAgc2VsZi5tYXliZVJlY29ubmVjdE9uT3BlbigpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gZW1pdCBgY29ubmVjdF90aW1lb3V0YFxuICBpZiAoZmFsc2UgIT09IHRoaXMuX3RpbWVvdXQpIHtcbiAgICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gICAgZGVidWcoJ2Nvbm5lY3QgYXR0ZW1wdCB3aWxsIHRpbWVvdXQgYWZ0ZXIgJWQnLCB0aW1lb3V0KTtcblxuICAgIC8vIHNldCB0aW1lclxuICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZGVidWcoJ2Nvbm5lY3QgYXR0ZW1wdCB0aW1lZCBvdXQgYWZ0ZXIgJWQnLCB0aW1lb3V0KTtcbiAgICAgIG9wZW5TdWIuZGVzdHJveSgpO1xuICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICBzb2NrZXQuZW1pdCgnZXJyb3InLCAndGltZW91dCcpO1xuICAgICAgc2VsZi5lbWl0QWxsKCdjb25uZWN0X3RpbWVvdXQnLCB0aW1lb3V0KTtcbiAgICB9LCB0aW1lb3V0KTtcblxuICAgIHRoaXMuc3Vicy5wdXNoKHtcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRoaXMuc3Vicy5wdXNoKG9wZW5TdWIpO1xuICB0aGlzLnN1YnMucHVzaChlcnJvclN1Yik7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBvcGVuLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ29wZW4nKTtcblxuICAvLyBjbGVhciBvbGQgc3Vic1xuICB0aGlzLmNsZWFudXAoKTtcblxuICAvLyBtYXJrIGFzIG9wZW5cbiAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW4nO1xuICB0aGlzLmVtaXQoJ29wZW4nKTtcblxuICAvLyBhZGQgbmV3IHN1YnNcbiAgdmFyIHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdkYXRhJywgYmluZCh0aGlzLCAnb25kYXRhJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAncGluZycsIGJpbmQodGhpcywgJ29ucGluZycpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ3BvbmcnLCBiaW5kKHRoaXMsICdvbnBvbmcnKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdlcnJvcicsIGJpbmQodGhpcywgJ29uZXJyb3InKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdjbG9zZScsIGJpbmQodGhpcywgJ29uY2xvc2UnKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbih0aGlzLmRlY29kZXIsICdkZWNvZGVkJywgYmluZCh0aGlzLCAnb25kZWNvZGVkJykpKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBwaW5nLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9ucGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5sYXN0UGluZyA9IG5ldyBEYXRlKCk7XG4gIHRoaXMuZW1pdEFsbCgncGluZycpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHBhY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbnBvbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW1pdEFsbCgncG9uZycsIG5ldyBEYXRlKCkgLSB0aGlzLmxhc3RQaW5nKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggZGF0YS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbmRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0aGlzLmRlY29kZXIuYWRkKGRhdGEpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2hlbiBwYXJzZXIgZnVsbHkgZGVjb2RlcyBhIHBhY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbmRlY29kZWQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHRoaXMuZW1pdCgncGFja2V0JywgcGFja2V0KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc29ja2V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gIGRlYnVnKCdlcnJvcicsIGVycik7XG4gIHRoaXMuZW1pdEFsbCgnZXJyb3InLCBlcnIpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHNvY2tldCBmb3IgdGhlIGdpdmVuIGBuc3BgLlxuICpcbiAqIEByZXR1cm4ge1NvY2tldH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuc29ja2V0ID0gZnVuY3Rpb24gKG5zcCwgb3B0cykge1xuICB2YXIgc29ja2V0ID0gdGhpcy5uc3BzW25zcF07XG4gIGlmICghc29ja2V0KSB7XG4gICAgc29ja2V0ID0gbmV3IFNvY2tldCh0aGlzLCBuc3AsIG9wdHMpO1xuICAgIHRoaXMubnNwc1tuc3BdID0gc29ja2V0O1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3RpbmcnLCBvbkNvbm5lY3RpbmcpO1xuICAgIHNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNvY2tldC5pZCA9IHNlbGYuZ2VuZXJhdGVJZChuc3ApO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuYXV0b0Nvbm5lY3QpIHtcbiAgICAgIC8vIG1hbnVhbGx5IGNhbGwgaGVyZSBzaW5jZSBjb25uZWN0aW5nIGV2ZW50IGlzIGZpcmVkIGJlZm9yZSBsaXN0ZW5pbmdcbiAgICAgIG9uQ29ubmVjdGluZygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdGluZyAoKSB7XG4gICAgaWYgKCF+aW5kZXhPZihzZWxmLmNvbm5lY3RpbmcsIHNvY2tldCkpIHtcbiAgICAgIHNlbGYuY29ubmVjdGluZy5wdXNoKHNvY2tldCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNvY2tldDtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBzb2NrZXQgY2xvc2UuXG4gKlxuICogQHBhcmFtIHtTb2NrZXR9IHNvY2tldFxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoc29ja2V0KSB7XG4gIHZhciBpbmRleCA9IGluZGV4T2YodGhpcy5jb25uZWN0aW5nLCBzb2NrZXQpO1xuICBpZiAofmluZGV4KSB0aGlzLmNvbm5lY3Rpbmcuc3BsaWNlKGluZGV4LCAxKTtcbiAgaWYgKHRoaXMuY29ubmVjdGluZy5sZW5ndGgpIHJldHVybjtcblxuICB0aGlzLmNsb3NlKCk7XG59O1xuXG4vKipcbiAqIFdyaXRlcyBhIHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5wYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIGRlYnVnKCd3cml0aW5nIHBhY2tldCAlaicsIHBhY2tldCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKHBhY2tldC5xdWVyeSAmJiBwYWNrZXQudHlwZSA9PT0gMCkgcGFja2V0Lm5zcCArPSAnPycgKyBwYWNrZXQucXVlcnk7XG5cbiAgaWYgKCFzZWxmLmVuY29kaW5nKSB7XG4gICAgLy8gZW5jb2RlLCB0aGVuIHdyaXRlIHRvIGVuZ2luZSB3aXRoIHJlc3VsdFxuICAgIHNlbGYuZW5jb2RpbmcgPSB0cnVlO1xuICAgIHRoaXMuZW5jb2Rlci5lbmNvZGUocGFja2V0LCBmdW5jdGlvbiAoZW5jb2RlZFBhY2tldHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2VsZi5lbmdpbmUud3JpdGUoZW5jb2RlZFBhY2tldHNbaV0sIHBhY2tldC5vcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHNlbGYuZW5jb2RpbmcgPSBmYWxzZTtcbiAgICAgIHNlbGYucHJvY2Vzc1BhY2tldFF1ZXVlKCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7IC8vIGFkZCBwYWNrZXQgdG8gdGhlIHF1ZXVlXG4gICAgc2VsZi5wYWNrZXRCdWZmZXIucHVzaChwYWNrZXQpO1xuICB9XG59O1xuXG4vKipcbiAqIElmIHBhY2tldCBidWZmZXIgaXMgbm9uLWVtcHR5LCBiZWdpbnMgZW5jb2RpbmcgdGhlXG4gKiBuZXh0IHBhY2tldCBpbiBsaW5lLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnByb2Nlc3NQYWNrZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMucGFja2V0QnVmZmVyLmxlbmd0aCA+IDAgJiYgIXRoaXMuZW5jb2RpbmcpIHtcbiAgICB2YXIgcGFjayA9IHRoaXMucGFja2V0QnVmZmVyLnNoaWZ0KCk7XG4gICAgdGhpcy5wYWNrZXQocGFjayk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2xlYW4gdXAgdHJhbnNwb3J0IHN1YnNjcmlwdGlvbnMgYW5kIHBhY2tldCBidWZmZXIuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ2NsZWFudXAnKTtcblxuICB2YXIgc3Vic0xlbmd0aCA9IHRoaXMuc3Vicy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHN1YiA9IHRoaXMuc3Vicy5zaGlmdCgpO1xuICAgIHN1Yi5kZXN0cm95KCk7XG4gIH1cblxuICB0aGlzLnBhY2tldEJ1ZmZlciA9IFtdO1xuICB0aGlzLmVuY29kaW5nID0gZmFsc2U7XG4gIHRoaXMubGFzdFBpbmcgPSBudWxsO1xuXG4gIHRoaXMuZGVjb2Rlci5kZXN0cm95KCk7XG59O1xuXG4vKipcbiAqIENsb3NlIHRoZSBjdXJyZW50IHNvY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5jbG9zZSA9XG5NYW5hZ2VyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1ZygnZGlzY29ubmVjdCcpO1xuICB0aGlzLnNraXBSZWNvbm5lY3QgPSB0cnVlO1xuICB0aGlzLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICBpZiAoJ29wZW5pbmcnID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAvLyBgb25jbG9zZWAgd2lsbCBub3QgZmlyZSBiZWNhdXNlXG4gICAgLy8gYW4gb3BlbiBldmVudCBuZXZlciBoYXBwZW5lZFxuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9XG4gIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgaWYgKHRoaXMuZW5naW5lKSB0aGlzLmVuZ2luZS5jbG9zZSgpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBlbmdpbmUgY2xvc2UuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25jbG9zZSA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgZGVidWcoJ29uY2xvc2UnKTtcblxuICB0aGlzLmNsZWFudXAoKTtcbiAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICB0aGlzLmVtaXQoJ2Nsb3NlJywgcmVhc29uKTtcblxuICBpZiAodGhpcy5fcmVjb25uZWN0aW9uICYmICF0aGlzLnNraXBSZWNvbm5lY3QpIHtcbiAgICB0aGlzLnJlY29ubmVjdCgpO1xuICB9XG59O1xuXG4vKipcbiAqIEF0dGVtcHQgYSByZWNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5yZWNvbm5lY3RpbmcgfHwgdGhpcy5za2lwUmVjb25uZWN0KSByZXR1cm4gdGhpcztcblxuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHRoaXMuYmFja29mZi5hdHRlbXB0cyA+PSB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cykge1xuICAgIGRlYnVnKCdyZWNvbm5lY3QgZmFpbGVkJyk7XG4gICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgdGhpcy5lbWl0QWxsKCdyZWNvbm5lY3RfZmFpbGVkJyk7XG4gICAgdGhpcy5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGVsYXkgPSB0aGlzLmJhY2tvZmYuZHVyYXRpb24oKTtcbiAgICBkZWJ1Zygnd2lsbCB3YWl0ICVkbXMgYmVmb3JlIHJlY29ubmVjdCBhdHRlbXB0JywgZGVsYXkpO1xuXG4gICAgdGhpcy5yZWNvbm5lY3RpbmcgPSB0cnVlO1xuICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdCkgcmV0dXJuO1xuXG4gICAgICBkZWJ1ZygnYXR0ZW1wdGluZyByZWNvbm5lY3QnKTtcbiAgICAgIHNlbGYuZW1pdEFsbCgncmVjb25uZWN0X2F0dGVtcHQnLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuICAgICAgc2VsZi5lbWl0QWxsKCdyZWNvbm5lY3RpbmcnLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuXG4gICAgICAvLyBjaGVjayBhZ2FpbiBmb3IgdGhlIGNhc2Ugc29ja2V0IGNsb3NlZCBpbiBhYm92ZSBldmVudHNcbiAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpIHJldHVybjtcblxuICAgICAgc2VsZi5vcGVuKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGRlYnVnKCdyZWNvbm5lY3QgYXR0ZW1wdCBlcnJvcicpO1xuICAgICAgICAgIHNlbGYucmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5yZWNvbm5lY3QoKTtcbiAgICAgICAgICBzZWxmLmVtaXRBbGwoJ3JlY29ubmVjdF9lcnJvcicsIGVyci5kYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWJ1ZygncmVjb25uZWN0IHN1Y2Nlc3MnKTtcbiAgICAgICAgICBzZWxmLm9ucmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGRlbGF5KTtcblxuICAgIHRoaXMuc3Vicy5wdXNoKHtcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzdWNjZXNzZnVsIHJlY29ubmVjdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbnJlY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGF0dGVtcHQgPSB0aGlzLmJhY2tvZmYuYXR0ZW1wdHM7XG4gIHRoaXMucmVjb25uZWN0aW5nID0gZmFsc2U7XG4gIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICB0aGlzLnVwZGF0ZVNvY2tldElkcygpO1xuICB0aGlzLmVtaXRBbGwoJ3JlY29ubmVjdCcsIGF0dGVtcHQpO1xufTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9uO1xuXG4vKipcbiAqIEhlbHBlciBmb3Igc3Vic2NyaXB0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxFdmVudEVtaXR0ZXJ9IG9iaiB3aXRoIGBFbWl0dGVyYCBtaXhpbiBvciBgRXZlbnRFbWl0dGVyYFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIG9uIChvYmosIGV2LCBmbikge1xuICBvYmoub24oZXYsIGZuKTtcbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICBvYmoucmVtb3ZlTGlzdGVuZXIoZXYsIGZuKTtcbiAgICB9XG4gIH07XG59XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgcGFyc2VyID0gcmVxdWlyZSgnc29ja2V0LmlvLXBhcnNlcicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIHRvQXJyYXkgPSByZXF1aXJlKCd0by1hcnJheScpO1xudmFyIG9uID0gcmVxdWlyZSgnLi9vbicpO1xudmFyIGJpbmQgPSByZXF1aXJlKCdjb21wb25lbnQtYmluZCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudDpzb2NrZXQnKTtcbnZhciBwYXJzZXFzID0gcmVxdWlyZSgncGFyc2VxcycpO1xudmFyIGhhc0JpbiA9IHJlcXVpcmUoJ2hhcy1iaW5hcnkyJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gU29ja2V0O1xuXG4vKipcbiAqIEludGVybmFsIGV2ZW50cyAoYmxhY2tsaXN0ZWQpLlxuICogVGhlc2UgZXZlbnRzIGNhbid0IGJlIGVtaXR0ZWQgYnkgdGhlIHVzZXIuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIGV2ZW50cyA9IHtcbiAgY29ubmVjdDogMSxcbiAgY29ubmVjdF9lcnJvcjogMSxcbiAgY29ubmVjdF90aW1lb3V0OiAxLFxuICBjb25uZWN0aW5nOiAxLFxuICBkaXNjb25uZWN0OiAxLFxuICBlcnJvcjogMSxcbiAgcmVjb25uZWN0OiAxLFxuICByZWNvbm5lY3RfYXR0ZW1wdDogMSxcbiAgcmVjb25uZWN0X2ZhaWxlZDogMSxcbiAgcmVjb25uZWN0X2Vycm9yOiAxLFxuICByZWNvbm5lY3Rpbmc6IDEsXG4gIHBpbmc6IDEsXG4gIHBvbmc6IDFcbn07XG5cbi8qKlxuICogU2hvcnRjdXQgdG8gYEVtaXR0ZXIjZW1pdGAuXG4gKi9cblxudmFyIGVtaXQgPSBFbWl0dGVyLnByb3RvdHlwZS5lbWl0O1xuXG4vKipcbiAqIGBTb2NrZXRgIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gU29ja2V0IChpbywgbnNwLCBvcHRzKSB7XG4gIHRoaXMuaW8gPSBpbztcbiAgdGhpcy5uc3AgPSBuc3A7XG4gIHRoaXMuanNvbiA9IHRoaXM7IC8vIGNvbXBhdFxuICB0aGlzLmlkcyA9IDA7XG4gIHRoaXMuYWNrcyA9IHt9O1xuICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgdGhpcy5mbGFncyA9IHt9O1xuICBpZiAob3B0cyAmJiBvcHRzLnF1ZXJ5KSB7XG4gICAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnk7XG4gIH1cbiAgaWYgKHRoaXMuaW8uYXV0b0Nvbm5lY3QpIHRoaXMub3BlbigpO1xufVxuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihTb2NrZXQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBTdWJzY3JpYmUgdG8gb3BlbiwgY2xvc2UgYW5kIHBhY2tldCBldmVudHNcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnN1YkV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuc3VicykgcmV0dXJuO1xuXG4gIHZhciBpbyA9IHRoaXMuaW87XG4gIHRoaXMuc3VicyA9IFtcbiAgICBvbihpbywgJ29wZW4nLCBiaW5kKHRoaXMsICdvbm9wZW4nKSksXG4gICAgb24oaW8sICdwYWNrZXQnLCBiaW5kKHRoaXMsICdvbnBhY2tldCcpKSxcbiAgICBvbihpbywgJ2Nsb3NlJywgYmluZCh0aGlzLCAnb25jbG9zZScpKVxuICBdO1xufTtcblxuLyoqXG4gKiBcIk9wZW5zXCIgdGhlIHNvY2tldC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUub3BlbiA9XG5Tb2NrZXQucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNvbm5lY3RlZCkgcmV0dXJuIHRoaXM7XG5cbiAgdGhpcy5zdWJFdmVudHMoKTtcbiAgdGhpcy5pby5vcGVuKCk7IC8vIGVuc3VyZSBvcGVuXG4gIGlmICgnb3BlbicgPT09IHRoaXMuaW8ucmVhZHlTdGF0ZSkgdGhpcy5vbm9wZW4oKTtcbiAgdGhpcy5lbWl0KCdjb25uZWN0aW5nJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kcyBhIGBtZXNzYWdlYCBldmVudC5cbiAqXG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgYXJncy51bnNoaWZ0KCdtZXNzYWdlJyk7XG4gIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE92ZXJyaWRlIGBlbWl0YC5cbiAqIElmIHRoZSBldmVudCBpcyBpbiBgZXZlbnRzYCwgaXQncyBlbWl0dGVkIG5vcm1hbGx5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBuYW1lXG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGV2KSB7XG4gIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkoZXYpKSB7XG4gICAgZW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cyk7XG4gIHZhciBwYWNrZXQgPSB7XG4gICAgdHlwZTogKHRoaXMuZmxhZ3MuYmluYXJ5ICE9PSB1bmRlZmluZWQgPyB0aGlzLmZsYWdzLmJpbmFyeSA6IGhhc0JpbihhcmdzKSkgPyBwYXJzZXIuQklOQVJZX0VWRU5UIDogcGFyc2VyLkVWRU5ULFxuICAgIGRhdGE6IGFyZ3NcbiAgfTtcblxuICBwYWNrZXQub3B0aW9ucyA9IHt9O1xuICBwYWNrZXQub3B0aW9ucy5jb21wcmVzcyA9ICF0aGlzLmZsYWdzIHx8IGZhbHNlICE9PSB0aGlzLmZsYWdzLmNvbXByZXNzO1xuXG4gIC8vIGV2ZW50IGFjayBjYWxsYmFja1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSkge1xuICAgIGRlYnVnKCdlbWl0dGluZyBwYWNrZXQgd2l0aCBhY2sgaWQgJWQnLCB0aGlzLmlkcyk7XG4gICAgdGhpcy5hY2tzW3RoaXMuaWRzXSA9IGFyZ3MucG9wKCk7XG4gICAgcGFja2V0LmlkID0gdGhpcy5pZHMrKztcbiAgfVxuXG4gIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgIHRoaXMucGFja2V0KHBhY2tldCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zZW5kQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgfVxuXG4gIHRoaXMuZmxhZ3MgPSB7fTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZHMgYSBwYWNrZXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5wYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHBhY2tldC5uc3AgPSB0aGlzLm5zcDtcbiAgdGhpcy5pby5wYWNrZXQocGFja2V0KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gZW5naW5lIGBvcGVuYC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ3RyYW5zcG9ydCBpcyBvcGVuIC0gY29ubmVjdGluZycpO1xuXG4gIC8vIHdyaXRlIGNvbm5lY3QgcGFja2V0IGlmIG5lY2Vzc2FyeVxuICBpZiAoJy8nICE9PSB0aGlzLm5zcCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5KSB7XG4gICAgICB2YXIgcXVlcnkgPSB0eXBlb2YgdGhpcy5xdWVyeSA9PT0gJ29iamVjdCcgPyBwYXJzZXFzLmVuY29kZSh0aGlzLnF1ZXJ5KSA6IHRoaXMucXVlcnk7XG4gICAgICBkZWJ1Zygnc2VuZGluZyBjb25uZWN0IHBhY2tldCB3aXRoIHF1ZXJ5ICVzJywgcXVlcnkpO1xuICAgICAgdGhpcy5wYWNrZXQoe3R5cGU6IHBhcnNlci5DT05ORUNULCBxdWVyeTogcXVlcnl9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYWNrZXQoe3R5cGU6IHBhcnNlci5DT05ORUNUfSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGVuZ2luZSBgY2xvc2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByZWFzb25cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25jbG9zZSA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgZGVidWcoJ2Nsb3NlICglcyknLCByZWFzb24pO1xuICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gIGRlbGV0ZSB0aGlzLmlkO1xuICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnLCByZWFzb24pO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2l0aCBzb2NrZXQgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25wYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHZhciBzYW1lTmFtZXNwYWNlID0gcGFja2V0Lm5zcCA9PT0gdGhpcy5uc3A7XG4gIHZhciByb290TmFtZXNwYWNlRXJyb3IgPSBwYWNrZXQudHlwZSA9PT0gcGFyc2VyLkVSUk9SICYmIHBhY2tldC5uc3AgPT09ICcvJztcblxuICBpZiAoIXNhbWVOYW1lc3BhY2UgJiYgIXJvb3ROYW1lc3BhY2VFcnJvcikgcmV0dXJuO1xuXG4gIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICBjYXNlIHBhcnNlci5DT05ORUNUOlxuICAgICAgdGhpcy5vbmNvbm5lY3QoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuRVZFTlQ6XG4gICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuQklOQVJZX0VWRU5UOlxuICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkFDSzpcbiAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuQklOQVJZX0FDSzpcbiAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuRElTQ09OTkVDVDpcbiAgICAgIHRoaXMub25kaXNjb25uZWN0KCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkVSUk9SOlxuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHBhY2tldC5kYXRhKTtcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25ldmVudCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgdmFyIGFyZ3MgPSBwYWNrZXQuZGF0YSB8fCBbXTtcbiAgZGVidWcoJ2VtaXR0aW5nIGV2ZW50ICVqJywgYXJncyk7XG5cbiAgaWYgKG51bGwgIT0gcGFja2V0LmlkKSB7XG4gICAgZGVidWcoJ2F0dGFjaGluZyBhY2sgY2FsbGJhY2sgdG8gZXZlbnQnKTtcbiAgICBhcmdzLnB1c2godGhpcy5hY2socGFja2V0LmlkKSk7XG4gIH1cblxuICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICBlbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucmVjZWl2ZUJ1ZmZlci5wdXNoKGFyZ3MpO1xuICB9XG59O1xuXG4vKipcbiAqIFByb2R1Y2VzIGFuIGFjayBjYWxsYmFjayB0byBlbWl0IHdpdGggYW4gZXZlbnQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5hY2sgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgc2VudCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIC8vIHByZXZlbnQgZG91YmxlIGNhbGxiYWNrc1xuICAgIGlmIChzZW50KSByZXR1cm47XG4gICAgc2VudCA9IHRydWU7XG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cyk7XG4gICAgZGVidWcoJ3NlbmRpbmcgYWNrICVqJywgYXJncyk7XG5cbiAgICBzZWxmLnBhY2tldCh7XG4gICAgICB0eXBlOiBoYXNCaW4oYXJncykgPyBwYXJzZXIuQklOQVJZX0FDSyA6IHBhcnNlci5BQ0ssXG4gICAgICBpZDogaWQsXG4gICAgICBkYXRhOiBhcmdzXG4gICAgfSk7XG4gIH07XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGFja25vd2xlZ2VtZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25hY2sgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHZhciBhY2sgPSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBhY2spIHtcbiAgICBkZWJ1ZygnY2FsbGluZyBhY2sgJXMgd2l0aCAlaicsIHBhY2tldC5pZCwgcGFja2V0LmRhdGEpO1xuICAgIGFjay5hcHBseSh0aGlzLCBwYWNrZXQuZGF0YSk7XG4gICAgZGVsZXRlIHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICB9IGVsc2Uge1xuICAgIGRlYnVnKCdiYWQgYWNrICVzJywgcGFja2V0LmlkKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgY29ubmVjdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb25uZWN0ZWQgPSB0cnVlO1xuICB0aGlzLmRpc2Nvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLmVtaXQoJ2Nvbm5lY3QnKTtcbiAgdGhpcy5lbWl0QnVmZmVyZWQoKTtcbn07XG5cbi8qKlxuICogRW1pdCBidWZmZXJlZCBldmVudHMgKHJlY2VpdmVkIGFuZCBlbWl0dGVkKS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmVtaXRCdWZmZXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLnJlY2VpdmVCdWZmZXIubGVuZ3RoOyBpKyspIHtcbiAgICBlbWl0LmFwcGx5KHRoaXMsIHRoaXMucmVjZWl2ZUJ1ZmZlcltpXSk7XG4gIH1cbiAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuc2VuZEJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMucGFja2V0KHRoaXMuc2VuZEJ1ZmZlcltpXSk7XG4gIH1cbiAgdGhpcy5zZW5kQnVmZmVyID0gW107XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHNlcnZlciBkaXNjb25uZWN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1Zygnc2VydmVyIGRpc2Nvbm5lY3QgKCVzKScsIHRoaXMubnNwKTtcbiAgdGhpcy5kZXN0cm95KCk7XG4gIHRoaXMub25jbG9zZSgnaW8gc2VydmVyIGRpc2Nvbm5lY3QnKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gZm9yY2VkIGNsaWVudC9zZXJ2ZXIgc2lkZSBkaXNjb25uZWN0aW9ucyxcbiAqIHRoaXMgbWV0aG9kIGVuc3VyZXMgdGhlIG1hbmFnZXIgc3RvcHMgdHJhY2tpbmcgdXMgYW5kXG4gKiB0aGF0IHJlY29ubmVjdGlvbnMgZG9uJ3QgZ2V0IHRyaWdnZXJlZCBmb3IgdGhpcy5cbiAqXG4gKiBAYXBpIHByaXZhdGUuXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zdWJzKSB7XG4gICAgLy8gY2xlYW4gc3Vic2NyaXB0aW9ucyB0byBhdm9pZCByZWNvbm5lY3Rpb25zXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc3Vic1tpXS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuc3VicyA9IG51bGw7XG4gIH1cblxuICB0aGlzLmlvLmRlc3Ryb3kodGhpcyk7XG59O1xuXG4vKipcbiAqIERpc2Nvbm5lY3RzIHRoZSBzb2NrZXQgbWFudWFsbHkuXG4gKlxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuY2xvc2UgPVxuU29ja2V0LnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICBkZWJ1ZygncGVyZm9ybWluZyBkaXNjb25uZWN0ICglcyknLCB0aGlzLm5zcCk7XG4gICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBwYXJzZXIuRElTQ09OTkVDVCB9KTtcbiAgfVxuXG4gIC8vIHJlbW92ZSBzb2NrZXQgZnJvbSBwb29sXG4gIHRoaXMuZGVzdHJveSgpO1xuXG4gIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgIC8vIGZpcmUgZXZlbnRzXG4gICAgdGhpcy5vbmNsb3NlKCdpbyBjbGllbnQgZGlzY29ubmVjdCcpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjb21wcmVzcyBmbGFnLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaWYgYHRydWVgLCBjb21wcmVzc2VzIHRoZSBzZW5kaW5nIGRhdGFcbiAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmNvbXByZXNzID0gZnVuY3Rpb24gKGNvbXByZXNzKSB7XG4gIHRoaXMuZmxhZ3MuY29tcHJlc3MgPSBjb21wcmVzcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGJpbmFyeSBmbGFnXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSB3aGV0aGVyIHRoZSBlbWl0dGVkIGRhdGEgY29udGFpbnMgYmluYXJ5XG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5iaW5hcnkgPSBmdW5jdGlvbiAoYmluYXJ5KSB7XG4gIHRoaXMuZmxhZ3MuYmluYXJ5ID0gYmluYXJ5O1xuICByZXR1cm4gdGhpcztcbn07XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgcGFyc2V1cmkgPSByZXF1aXJlKCdwYXJzZXVyaScpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudDp1cmwnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVybDtcblxuLyoqXG4gKiBVUkwgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBBbiBvYmplY3QgbWVhbnQgdG8gbWltaWMgd2luZG93LmxvY2F0aW9uLlxuICogICAgICAgICAgICAgICAgIERlZmF1bHRzIHRvIHdpbmRvdy5sb2NhdGlvbi5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gdXJsICh1cmksIGxvYykge1xuICB2YXIgb2JqID0gdXJpO1xuXG4gIC8vIGRlZmF1bHQgdG8gd2luZG93LmxvY2F0aW9uXG4gIGxvYyA9IGxvYyB8fCAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhdGlvbik7XG4gIGlmIChudWxsID09IHVyaSkgdXJpID0gbG9jLnByb3RvY29sICsgJy8vJyArIGxvYy5ob3N0O1xuXG4gIC8vIHJlbGF0aXZlIHBhdGggc3VwcG9ydFxuICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB1cmkpIHtcbiAgICBpZiAoJy8nID09PSB1cmkuY2hhckF0KDApKSB7XG4gICAgICBpZiAoJy8nID09PSB1cmkuY2hhckF0KDEpKSB7XG4gICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIHVyaTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVyaSA9IGxvYy5ob3N0ICsgdXJpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghL14oaHR0cHM/fHdzcz8pOlxcL1xcLy8udGVzdCh1cmkpKSB7XG4gICAgICBkZWJ1ZygncHJvdG9jb2wtbGVzcyB1cmwgJXMnLCB1cmkpO1xuICAgICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgbG9jKSB7XG4gICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArICcvLycgKyB1cmk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmkgPSAnaHR0cHM6Ly8nICsgdXJpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHBhcnNlXG4gICAgZGVidWcoJ3BhcnNlICVzJywgdXJpKTtcbiAgICBvYmogPSBwYXJzZXVyaSh1cmkpO1xuICB9XG5cbiAgLy8gbWFrZSBzdXJlIHdlIHRyZWF0IGBsb2NhbGhvc3Q6ODBgIGFuZCBgbG9jYWxob3N0YCBlcXVhbGx5XG4gIGlmICghb2JqLnBvcnQpIHtcbiAgICBpZiAoL14oaHR0cHx3cykkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgIG9iai5wb3J0ID0gJzgwJztcbiAgICB9IGVsc2UgaWYgKC9eKGh0dHB8d3MpcyQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgb2JqLnBvcnQgPSAnNDQzJztcbiAgICB9XG4gIH1cblxuICBvYmoucGF0aCA9IG9iai5wYXRoIHx8ICcvJztcblxuICB2YXIgaXB2NiA9IG9iai5ob3N0LmluZGV4T2YoJzonKSAhPT0gLTE7XG4gIHZhciBob3N0ID0gaXB2NiA/ICdbJyArIG9iai5ob3N0ICsgJ10nIDogb2JqLmhvc3Q7XG5cbiAgLy8gZGVmaW5lIHVuaXF1ZSBpZFxuICBvYmouaWQgPSBvYmoucHJvdG9jb2wgKyAnOi8vJyArIGhvc3QgKyAnOicgKyBvYmoucG9ydDtcbiAgLy8gZGVmaW5lIGhyZWZcbiAgb2JqLmhyZWYgPSBvYmoucHJvdG9jb2wgKyAnOi8vJyArIGhvc3QgKyAobG9jICYmIGxvYy5wb3J0ID09PSBvYmoucG9ydCA/ICcnIDogKCc6JyArIG9iai5wb3J0KSk7XG5cbiAgcmV0dXJuIG9iajtcbn1cbiIsIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJyMwMDAwQ0MnLCAnIzAwMDBGRicsICcjMDAzM0NDJywgJyMwMDMzRkYnLCAnIzAwNjZDQycsICcjMDA2NkZGJywgJyMwMDk5Q0MnLFxuICAnIzAwOTlGRicsICcjMDBDQzAwJywgJyMwMENDMzMnLCAnIzAwQ0M2NicsICcjMDBDQzk5JywgJyMwMENDQ0MnLCAnIzAwQ0NGRicsXG4gICcjMzMwMENDJywgJyMzMzAwRkYnLCAnIzMzMzNDQycsICcjMzMzM0ZGJywgJyMzMzY2Q0MnLCAnIzMzNjZGRicsICcjMzM5OUNDJyxcbiAgJyMzMzk5RkYnLCAnIzMzQ0MwMCcsICcjMzNDQzMzJywgJyMzM0NDNjYnLCAnIzMzQ0M5OScsICcjMzNDQ0NDJywgJyMzM0NDRkYnLFxuICAnIzY2MDBDQycsICcjNjYwMEZGJywgJyM2NjMzQ0MnLCAnIzY2MzNGRicsICcjNjZDQzAwJywgJyM2NkNDMzMnLCAnIzk5MDBDQycsXG4gICcjOTkwMEZGJywgJyM5OTMzQ0MnLCAnIzk5MzNGRicsICcjOTlDQzAwJywgJyM5OUNDMzMnLCAnI0NDMDAwMCcsICcjQ0MwMDMzJyxcbiAgJyNDQzAwNjYnLCAnI0NDMDA5OScsICcjQ0MwMENDJywgJyNDQzAwRkYnLCAnI0NDMzMwMCcsICcjQ0MzMzMzJywgJyNDQzMzNjYnLFxuICAnI0NDMzM5OScsICcjQ0MzM0NDJywgJyNDQzMzRkYnLCAnI0NDNjYwMCcsICcjQ0M2NjMzJywgJyNDQzk5MDAnLCAnI0NDOTkzMycsXG4gICcjQ0NDQzAwJywgJyNDQ0NDMzMnLCAnI0ZGMDAwMCcsICcjRkYwMDMzJywgJyNGRjAwNjYnLCAnI0ZGMDA5OScsICcjRkYwMENDJyxcbiAgJyNGRjAwRkYnLCAnI0ZGMzMwMCcsICcjRkYzMzMzJywgJyNGRjMzNjYnLCAnI0ZGMzM5OScsICcjRkYzM0NDJywgJyNGRjMzRkYnLFxuICAnI0ZGNjYwMCcsICcjRkY2NjMzJywgJyNGRjk5MDAnLCAnI0ZGOTkzMycsICcjRkZDQzAwJywgJyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuICAvLyBleHBsaWNpdGx5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Z1snZGVmYXVsdCddID0gY3JlYXRlRGVidWc7XG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZTtcbmV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuLyoqXG4gKiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKi9cbmV4cG9ydHMuaW5zdGFuY2VzID0gW107XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIHZhciBwcmV2VGltZTtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcbiAgZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cbiAgLy8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBleHBvcnRzLmluaXQpIHtcbiAgICBleHBvcnRzLmluaXQoZGVidWcpO1xuICB9XG5cbiAgZXhwb3J0cy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cbiAgcmV0dXJuIGRlYnVnO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdmFyIGluZGV4ID0gZXhwb3J0cy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGV4cG9ydHMuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIGk7XG4gIHZhciBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleHBvcnRzLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbnN0YW5jZSA9IGV4cG9ydHMuaW5zdGFuY2VzW2ldO1xuICAgIGluc3RhbmNlLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQoaW5zdGFuY2UubmFtZXNwYWNlKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgZXhwb3J0cy5lbmFibGUoJycpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gIGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG4iLCIvKmdsb2JhbCBCbG9iLEZpbGUqL1xuXG4vKipcbiAqIE1vZHVsZSByZXF1aXJlbWVudHNcbiAqL1xuXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcbnZhciBpc0J1ZiA9IHJlcXVpcmUoJy4vaXMtYnVmZmVyJyk7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHdpdGhOYXRpdmVCbG9iID0gdHlwZW9mIEJsb2IgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiB0b1N0cmluZy5jYWxsKEJsb2IpID09PSAnW29iamVjdCBCbG9iQ29uc3RydWN0b3JdJyk7XG52YXIgd2l0aE5hdGl2ZUZpbGUgPSB0eXBlb2YgRmlsZSA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIEZpbGUgIT09ICd1bmRlZmluZWQnICYmIHRvU3RyaW5nLmNhbGwoRmlsZSkgPT09ICdbb2JqZWN0IEZpbGVDb25zdHJ1Y3Rvcl0nKTtcblxuLyoqXG4gKiBSZXBsYWNlcyBldmVyeSBCdWZmZXIgfCBBcnJheUJ1ZmZlciBpbiBwYWNrZXQgd2l0aCBhIG51bWJlcmVkIHBsYWNlaG9sZGVyLlxuICogQW55dGhpbmcgd2l0aCBibG9icyBvciBmaWxlcyBzaG91bGQgYmUgZmVkIHRocm91Z2ggcmVtb3ZlQmxvYnMgYmVmb3JlIGNvbWluZ1xuICogaGVyZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gc29ja2V0LmlvIGV2ZW50IHBhY2tldFxuICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGRlY29uc3RydWN0ZWQgcGFja2V0IGFuZCBsaXN0IG9mIGJ1ZmZlcnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5kZWNvbnN0cnVjdFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCkge1xuICB2YXIgYnVmZmVycyA9IFtdO1xuICB2YXIgcGFja2V0RGF0YSA9IHBhY2tldC5kYXRhO1xuICB2YXIgcGFjayA9IHBhY2tldDtcbiAgcGFjay5kYXRhID0gX2RlY29uc3RydWN0UGFja2V0KHBhY2tldERhdGEsIGJ1ZmZlcnMpO1xuICBwYWNrLmF0dGFjaG1lbnRzID0gYnVmZmVycy5sZW5ndGg7IC8vIG51bWJlciBvZiBiaW5hcnkgJ2F0dGFjaG1lbnRzJ1xuICByZXR1cm4ge3BhY2tldDogcGFjaywgYnVmZmVyczogYnVmZmVyc307XG59O1xuXG5mdW5jdGlvbiBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YSwgYnVmZmVycykge1xuICBpZiAoIWRhdGEpIHJldHVybiBkYXRhO1xuXG4gIGlmIChpc0J1ZihkYXRhKSkge1xuICAgIHZhciBwbGFjZWhvbGRlciA9IHsgX3BsYWNlaG9sZGVyOiB0cnVlLCBudW06IGJ1ZmZlcnMubGVuZ3RoIH07XG4gICAgYnVmZmVycy5wdXNoKGRhdGEpO1xuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgfSBlbHNlIGlmIChpc0FycmF5KGRhdGEpKSB7XG4gICAgdmFyIG5ld0RhdGEgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbmV3RGF0YVtpXSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0RhdGE7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnICYmICEoZGF0YSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgdmFyIG5ld0RhdGEgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgbmV3RGF0YVtrZXldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSwgYnVmZmVycyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdEYXRhO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFJlY29uc3RydWN0cyBhIGJpbmFyeSBwYWNrZXQgZnJvbSBpdHMgcGxhY2Vob2xkZXIgcGFja2V0IGFuZCBidWZmZXJzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIGV2ZW50IHBhY2tldCB3aXRoIHBsYWNlaG9sZGVyc1xuICogQHBhcmFtIHtBcnJheX0gYnVmZmVycyAtIGJpbmFyeSBidWZmZXJzIHRvIHB1dCBpbiBwbGFjZWhvbGRlciBwb3NpdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH0gcmVjb25zdHJ1Y3RlZCBwYWNrZXRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5yZWNvbnN0cnVjdFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCwgYnVmZmVycykge1xuICBwYWNrZXQuZGF0YSA9IF9yZWNvbnN0cnVjdFBhY2tldChwYWNrZXQuZGF0YSwgYnVmZmVycyk7XG4gIHBhY2tldC5hdHRhY2htZW50cyA9IHVuZGVmaW5lZDsgLy8gbm8gbG9uZ2VyIHVzZWZ1bFxuICByZXR1cm4gcGFja2V0O1xufTtcblxuZnVuY3Rpb24gX3JlY29uc3RydWN0UGFja2V0KGRhdGEsIGJ1ZmZlcnMpIHtcbiAgaWYgKCFkYXRhKSByZXR1cm4gZGF0YTtcblxuICBpZiAoZGF0YSAmJiBkYXRhLl9wbGFjZWhvbGRlcikge1xuICAgIHJldHVybiBidWZmZXJzW2RhdGEubnVtXTsgLy8gYXBwcm9wcmlhdGUgYnVmZmVyIChzaG91bGQgYmUgbmF0dXJhbCBvcmRlciBhbnl3YXkpXG4gIH0gZWxzZSBpZiAoaXNBcnJheShkYXRhKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgZGF0YVtpXSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIGRhdGFba2V5XSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEFzeW5jaHJvbm91c2x5IHJlbW92ZXMgQmxvYnMgb3IgRmlsZXMgZnJvbSBkYXRhIHZpYVxuICogRmlsZVJlYWRlcidzIHJlYWRBc0FycmF5QnVmZmVyIG1ldGhvZC4gVXNlZCBiZWZvcmUgZW5jb2RpbmdcbiAqIGRhdGEgYXMgbXNncGFjay4gQ2FsbHMgY2FsbGJhY2sgd2l0aCB0aGUgYmxvYmxlc3MgZGF0YS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmVtb3ZlQmxvYnMgPSBmdW5jdGlvbihkYXRhLCBjYWxsYmFjaykge1xuICBmdW5jdGlvbiBfcmVtb3ZlQmxvYnMob2JqLCBjdXJLZXksIGNvbnRhaW5pbmdPYmplY3QpIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIG9iajtcblxuICAgIC8vIGNvbnZlcnQgYW55IGJsb2JcbiAgICBpZiAoKHdpdGhOYXRpdmVCbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgICAgICh3aXRoTmF0aXZlRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKSkge1xuICAgICAgcGVuZGluZ0Jsb2JzKys7XG5cbiAgICAgIC8vIGFzeW5jIGZpbGVyZWFkZXJcbiAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7IC8vIHRoaXMucmVzdWx0ID09IGFycmF5YnVmZmVyXG4gICAgICAgIGlmIChjb250YWluaW5nT2JqZWN0KSB7XG4gICAgICAgICAgY29udGFpbmluZ09iamVjdFtjdXJLZXldID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYmxvYmxlc3NEYXRhID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBub3RoaW5nIHBlbmRpbmcgaXRzIGNhbGxiYWNrIHRpbWVcbiAgICAgICAgaWYoISAtLXBlbmRpbmdCbG9icykge1xuICAgICAgICAgIGNhbGxiYWNrKGJsb2JsZXNzRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIob2JqKTsgLy8gYmxvYiAtPiBhcnJheWJ1ZmZlclxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmopKSB7IC8vIGhhbmRsZSBhcnJheVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX3JlbW92ZUJsb2JzKG9ialtpXSwgaSwgb2JqKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmICFpc0J1ZihvYmopKSB7IC8vIGFuZCBvYmplY3RcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgX3JlbW92ZUJsb2JzKG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHBlbmRpbmdCbG9icyA9IDA7XG4gIHZhciBibG9ibGVzc0RhdGEgPSBkYXRhO1xuICBfcmVtb3ZlQmxvYnMoYmxvYmxlc3NEYXRhKTtcbiAgaWYgKCFwZW5kaW5nQmxvYnMpIHtcbiAgICBjYWxsYmFjayhibG9ibGVzc0RhdGEpO1xuICB9XG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLXBhcnNlcicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIGJpbmFyeSA9IHJlcXVpcmUoJy4vYmluYXJ5Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcbnZhciBpc0J1ZiA9IHJlcXVpcmUoJy4vaXMtYnVmZmVyJyk7XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMucHJvdG9jb2wgPSA0O1xuXG4vKipcbiAqIFBhY2tldCB0eXBlcy5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMudHlwZXMgPSBbXG4gICdDT05ORUNUJyxcbiAgJ0RJU0NPTk5FQ1QnLFxuICAnRVZFTlQnLFxuICAnQUNLJyxcbiAgJ0VSUk9SJyxcbiAgJ0JJTkFSWV9FVkVOVCcsXG4gICdCSU5BUllfQUNLJ1xuXTtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgY29ubmVjdGAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkNPTk5FQ1QgPSAwO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBkaXNjb25uZWN0YC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRElTQ09OTkVDVCA9IDE7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGV2ZW50YC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRVZFTlQgPSAyO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBhY2tgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5BQ0sgPSAzO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBlcnJvcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkVSUk9SID0gNDtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSAnYmluYXJ5IGV2ZW50J1xuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5CSU5BUllfRVZFTlQgPSA1O1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBiaW5hcnkgYWNrYC4gRm9yIGFja3Mgd2l0aCBiaW5hcnkgYXJndW1lbnRzLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5CSU5BUllfQUNLID0gNjtcblxuLyoqXG4gKiBFbmNvZGVyIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5FbmNvZGVyID0gRW5jb2RlcjtcblxuLyoqXG4gKiBEZWNvZGVyIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5EZWNvZGVyID0gRGVjb2RlcjtcblxuLyoqXG4gKiBBIHNvY2tldC5pbyBFbmNvZGVyIGluc3RhbmNlXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbmNvZGVyKCkge31cblxudmFyIEVSUk9SX1BBQ0tFVCA9IGV4cG9ydHMuRVJST1IgKyAnXCJlbmNvZGUgZXJyb3JcIic7XG5cbi8qKlxuICogRW5jb2RlIGEgcGFja2V0IGFzIGEgc2luZ2xlIHN0cmluZyBpZiBub24tYmluYXJ5LCBvciBhcyBhXG4gKiBidWZmZXIgc2VxdWVuY2UsIGRlcGVuZGluZyBvbiBwYWNrZXQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gcGFja2V0IG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBmdW5jdGlvbiB0byBoYW5kbGUgZW5jb2RpbmdzIChsaWtlbHkgZW5naW5lLndyaXRlKVxuICogQHJldHVybiBDYWxscyBjYWxsYmFjayB3aXRoIEFycmF5IG9mIGVuY29kaW5nc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbmNvZGVyLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbihvYmosIGNhbGxiYWNrKXtcbiAgZGVidWcoJ2VuY29kaW5nIHBhY2tldCAlaicsIG9iaik7XG5cbiAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09PSBvYmoudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT09IG9iai50eXBlKSB7XG4gICAgZW5jb2RlQXNCaW5hcnkob2JqLCBjYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGVuY29kaW5nID0gZW5jb2RlQXNTdHJpbmcob2JqKTtcbiAgICBjYWxsYmFjayhbZW5jb2RpbmddKTtcbiAgfVxufTtcblxuLyoqXG4gKiBFbmNvZGUgcGFja2V0IGFzIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IGVuY29kZWRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGVuY29kZUFzU3RyaW5nKG9iaikge1xuXG4gIC8vIGZpcnN0IGlzIHR5cGVcbiAgdmFyIHN0ciA9ICcnICsgb2JqLnR5cGU7XG5cbiAgLy8gYXR0YWNobWVudHMgaWYgd2UgaGF2ZSB0aGVtXG4gIGlmIChleHBvcnRzLkJJTkFSWV9FVkVOVCA9PT0gb2JqLnR5cGUgfHwgZXhwb3J0cy5CSU5BUllfQUNLID09PSBvYmoudHlwZSkge1xuICAgIHN0ciArPSBvYmouYXR0YWNobWVudHMgKyAnLSc7XG4gIH1cblxuICAvLyBpZiB3ZSBoYXZlIGEgbmFtZXNwYWNlIG90aGVyIHRoYW4gYC9gXG4gIC8vIHdlIGFwcGVuZCBpdCBmb2xsb3dlZCBieSBhIGNvbW1hIGAsYFxuICBpZiAob2JqLm5zcCAmJiAnLycgIT09IG9iai5uc3ApIHtcbiAgICBzdHIgKz0gb2JqLm5zcCArICcsJztcbiAgfVxuXG4gIC8vIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IHRoZSBpZFxuICBpZiAobnVsbCAhPSBvYmouaWQpIHtcbiAgICBzdHIgKz0gb2JqLmlkO1xuICB9XG5cbiAgLy8ganNvbiBkYXRhXG4gIGlmIChudWxsICE9IG9iai5kYXRhKSB7XG4gICAgdmFyIHBheWxvYWQgPSB0cnlTdHJpbmdpZnkob2JqLmRhdGEpO1xuICAgIGlmIChwYXlsb2FkICE9PSBmYWxzZSkge1xuICAgICAgc3RyICs9IHBheWxvYWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBFUlJPUl9QQUNLRVQ7XG4gICAgfVxuICB9XG5cbiAgZGVidWcoJ2VuY29kZWQgJWogYXMgJXMnLCBvYmosIHN0cik7XG4gIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIHRyeVN0cmluZ2lmeShzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc3RyKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBFbmNvZGUgcGFja2V0IGFzICdidWZmZXIgc2VxdWVuY2UnIGJ5IHJlbW92aW5nIGJsb2JzLCBhbmRcbiAqIGRlY29uc3RydWN0aW5nIHBhY2tldCBpbnRvIG9iamVjdCB3aXRoIHBsYWNlaG9sZGVycyBhbmRcbiAqIGEgbGlzdCBvZiBidWZmZXJzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEByZXR1cm4ge0J1ZmZlcn0gZW5jb2RlZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZW5jb2RlQXNCaW5hcnkob2JqLCBjYWxsYmFjaykge1xuXG4gIGZ1bmN0aW9uIHdyaXRlRW5jb2RpbmcoYmxvYmxlc3NEYXRhKSB7XG4gICAgdmFyIGRlY29uc3RydWN0aW9uID0gYmluYXJ5LmRlY29uc3RydWN0UGFja2V0KGJsb2JsZXNzRGF0YSk7XG4gICAgdmFyIHBhY2sgPSBlbmNvZGVBc1N0cmluZyhkZWNvbnN0cnVjdGlvbi5wYWNrZXQpO1xuICAgIHZhciBidWZmZXJzID0gZGVjb25zdHJ1Y3Rpb24uYnVmZmVycztcblxuICAgIGJ1ZmZlcnMudW5zaGlmdChwYWNrKTsgLy8gYWRkIHBhY2tldCBpbmZvIHRvIGJlZ2lubmluZyBvZiBkYXRhIGxpc3RcbiAgICBjYWxsYmFjayhidWZmZXJzKTsgLy8gd3JpdGUgYWxsIHRoZSBidWZmZXJzXG4gIH1cblxuICBiaW5hcnkucmVtb3ZlQmxvYnMob2JqLCB3cml0ZUVuY29kaW5nKTtcbn1cblxuLyoqXG4gKiBBIHNvY2tldC5pbyBEZWNvZGVyIGluc3RhbmNlXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBkZWNvZGVyXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIERlY29kZXIoKSB7XG4gIHRoaXMucmVjb25zdHJ1Y3RvciA9IG51bGw7XG59XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYCB3aXRoIERlY29kZXIuXG4gKi9cblxuRW1pdHRlcihEZWNvZGVyLnByb3RvdHlwZSk7XG5cbi8qKlxuICogRGVjb2RlcyBhbiBlbmNvZGVkIHBhY2tldCBzdHJpbmcgaW50byBwYWNrZXQgSlNPTi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqIC0gZW5jb2RlZCBwYWNrZXRcbiAqIEByZXR1cm4ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkRlY29kZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG9iaikge1xuICB2YXIgcGFja2V0O1xuICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcbiAgICBwYWNrZXQgPSBkZWNvZGVTdHJpbmcob2JqKTtcbiAgICBpZiAoZXhwb3J0cy5CSU5BUllfRVZFTlQgPT09IHBhY2tldC50eXBlIHx8IGV4cG9ydHMuQklOQVJZX0FDSyA9PT0gcGFja2V0LnR5cGUpIHsgLy8gYmluYXJ5IHBhY2tldCdzIGpzb25cbiAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG5ldyBCaW5hcnlSZWNvbnN0cnVjdG9yKHBhY2tldCk7XG5cbiAgICAgIC8vIG5vIGF0dGFjaG1lbnRzLCBsYWJlbGVkIGJpbmFyeSBidXQgbm8gYmluYXJ5IGRhdGEgdG8gZm9sbG93XG4gICAgICBpZiAodGhpcy5yZWNvbnN0cnVjdG9yLnJlY29uUGFjay5hdHRhY2htZW50cyA9PT0gMCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2RlY29kZWQnLCBwYWNrZXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIG5vbi1iaW5hcnkgZnVsbCBwYWNrZXRcbiAgICAgIHRoaXMuZW1pdCgnZGVjb2RlZCcsIHBhY2tldCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzQnVmKG9iaikgfHwgb2JqLmJhc2U2NCkgeyAvLyByYXcgYmluYXJ5IGRhdGFcbiAgICBpZiAoIXRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnb3QgYmluYXJ5IGRhdGEgd2hlbiBub3QgcmVjb25zdHJ1Y3RpbmcgYSBwYWNrZXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFja2V0ID0gdGhpcy5yZWNvbnN0cnVjdG9yLnRha2VCaW5hcnlEYXRhKG9iaik7XG4gICAgICBpZiAocGFja2V0KSB7IC8vIHJlY2VpdmVkIGZpbmFsIGJ1ZmZlclxuICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBudWxsO1xuICAgICAgICB0aGlzLmVtaXQoJ2RlY29kZWQnLCBwYWNrZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdHlwZTogJyArIG9iaik7XG4gIH1cbn07XG5cbi8qKlxuICogRGVjb2RlIGEgcGFja2V0IFN0cmluZyAoSlNPTiBkYXRhKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBkZWNvZGVTdHJpbmcoc3RyKSB7XG4gIHZhciBpID0gMDtcbiAgLy8gbG9vayB1cCB0eXBlXG4gIHZhciBwID0ge1xuICAgIHR5cGU6IE51bWJlcihzdHIuY2hhckF0KDApKVxuICB9O1xuXG4gIGlmIChudWxsID09IGV4cG9ydHMudHlwZXNbcC50eXBlXSkge1xuICAgIHJldHVybiBlcnJvcigndW5rbm93biBwYWNrZXQgdHlwZSAnICsgcC50eXBlKTtcbiAgfVxuXG4gIC8vIGxvb2sgdXAgYXR0YWNobWVudHMgaWYgdHlwZSBiaW5hcnlcbiAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09PSBwLnR5cGUgfHwgZXhwb3J0cy5CSU5BUllfQUNLID09PSBwLnR5cGUpIHtcbiAgICB2YXIgYnVmID0gJyc7XG4gICAgd2hpbGUgKHN0ci5jaGFyQXQoKytpKSAhPT0gJy0nKSB7XG4gICAgICBidWYgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgIGlmIChpID09IHN0ci5sZW5ndGgpIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoYnVmICE9IE51bWJlcihidWYpIHx8IHN0ci5jaGFyQXQoaSkgIT09ICctJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGF0dGFjaG1lbnRzJyk7XG4gICAgfVxuICAgIHAuYXR0YWNobWVudHMgPSBOdW1iZXIoYnVmKTtcbiAgfVxuXG4gIC8vIGxvb2sgdXAgbmFtZXNwYWNlIChpZiBhbnkpXG4gIGlmICgnLycgPT09IHN0ci5jaGFyQXQoaSArIDEpKSB7XG4gICAgcC5uc3AgPSAnJztcbiAgICB3aGlsZSAoKytpKSB7XG4gICAgICB2YXIgYyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICBpZiAoJywnID09PSBjKSBicmVhaztcbiAgICAgIHAubnNwICs9IGM7XG4gICAgICBpZiAoaSA9PT0gc3RyLmxlbmd0aCkgYnJlYWs7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHAubnNwID0gJy8nO1xuICB9XG5cbiAgLy8gbG9vayB1cCBpZFxuICB2YXIgbmV4dCA9IHN0ci5jaGFyQXQoaSArIDEpO1xuICBpZiAoJycgIT09IG5leHQgJiYgTnVtYmVyKG5leHQpID09IG5leHQpIHtcbiAgICBwLmlkID0gJyc7XG4gICAgd2hpbGUgKCsraSkge1xuICAgICAgdmFyIGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgaWYgKG51bGwgPT0gYyB8fCBOdW1iZXIoYykgIT0gYykge1xuICAgICAgICAtLWk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcC5pZCArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgaWYgKGkgPT09IHN0ci5sZW5ndGgpIGJyZWFrO1xuICAgIH1cbiAgICBwLmlkID0gTnVtYmVyKHAuaWQpO1xuICB9XG5cbiAgLy8gbG9vayB1cCBqc29uIGRhdGFcbiAgaWYgKHN0ci5jaGFyQXQoKytpKSkge1xuICAgIHZhciBwYXlsb2FkID0gdHJ5UGFyc2Uoc3RyLnN1YnN0cihpKSk7XG4gICAgdmFyIGlzUGF5bG9hZFZhbGlkID0gcGF5bG9hZCAhPT0gZmFsc2UgJiYgKHAudHlwZSA9PT0gZXhwb3J0cy5FUlJPUiB8fCBpc0FycmF5KHBheWxvYWQpKTtcbiAgICBpZiAoaXNQYXlsb2FkVmFsaWQpIHtcbiAgICAgIHAuZGF0YSA9IHBheWxvYWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlcnJvcignaW52YWxpZCBwYXlsb2FkJyk7XG4gICAgfVxuICB9XG5cbiAgZGVidWcoJ2RlY29kZWQgJXMgYXMgJWonLCBzdHIsIHApO1xuICByZXR1cm4gcDtcbn1cblxuZnVuY3Rpb24gdHJ5UGFyc2Uoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWFsbG9jYXRlcyBhIHBhcnNlcidzIHJlc291cmNlc1xuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRGVjb2Rlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5yZWNvbnN0cnVjdG9yLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBIG1hbmFnZXIgb2YgYSBiaW5hcnkgZXZlbnQncyAnYnVmZmVyIHNlcXVlbmNlJy4gU2hvdWxkXG4gKiBiZSBjb25zdHJ1Y3RlZCB3aGVuZXZlciBhIHBhY2tldCBvZiB0eXBlIEJJTkFSWV9FVkVOVCBpc1xuICogZGVjb2RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtCaW5hcnlSZWNvbnN0cnVjdG9yfSBpbml0aWFsaXplZCByZWNvbnN0cnVjdG9yXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBCaW5hcnlSZWNvbnN0cnVjdG9yKHBhY2tldCkge1xuICB0aGlzLnJlY29uUGFjayA9IHBhY2tldDtcbiAgdGhpcy5idWZmZXJzID0gW107XG59XG5cbi8qKlxuICogTWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIGJpbmFyeSBkYXRhIHJlY2VpdmVkIGZyb20gY29ubmVjdGlvblxuICogYWZ0ZXIgYSBCSU5BUllfRVZFTlQgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyIHwgQXJyYXlCdWZmZXJ9IGJpbkRhdGEgLSB0aGUgcmF3IGJpbmFyeSBkYXRhIHJlY2VpdmVkXG4gKiBAcmV0dXJuIHtudWxsIHwgT2JqZWN0fSByZXR1cm5zIG51bGwgaWYgbW9yZSBiaW5hcnkgZGF0YSBpcyBleHBlY3RlZCBvclxuICogICBhIHJlY29uc3RydWN0ZWQgcGFja2V0IG9iamVjdCBpZiBhbGwgYnVmZmVycyBoYXZlIGJlZW4gcmVjZWl2ZWQuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5CaW5hcnlSZWNvbnN0cnVjdG9yLnByb3RvdHlwZS50YWtlQmluYXJ5RGF0YSA9IGZ1bmN0aW9uKGJpbkRhdGEpIHtcbiAgdGhpcy5idWZmZXJzLnB1c2goYmluRGF0YSk7XG4gIGlmICh0aGlzLmJ1ZmZlcnMubGVuZ3RoID09PSB0aGlzLnJlY29uUGFjay5hdHRhY2htZW50cykgeyAvLyBkb25lIHdpdGggYnVmZmVyIGxpc3RcbiAgICB2YXIgcGFja2V0ID0gYmluYXJ5LnJlY29uc3RydWN0UGFja2V0KHRoaXMucmVjb25QYWNrLCB0aGlzLmJ1ZmZlcnMpO1xuICAgIHRoaXMuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICAgIHJldHVybiBwYWNrZXQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIENsZWFucyB1cCBiaW5hcnkgcGFja2V0IHJlY29uc3RydWN0aW9uIHZhcmlhYmxlcy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5CaW5hcnlSZWNvbnN0cnVjdG9yLnByb3RvdHlwZS5maW5pc2hlZFJlY29uc3RydWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVjb25QYWNrID0gbnVsbDtcbiAgdGhpcy5idWZmZXJzID0gW107XG59O1xuXG5mdW5jdGlvbiBlcnJvcihtc2cpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBleHBvcnRzLkVSUk9SLFxuICAgIGRhdGE6ICdwYXJzZXIgZXJyb3I6ICcgKyBtc2dcbiAgfTtcbn1cbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZjtcblxudmFyIHdpdGhOYXRpdmVCdWZmZXIgPSB0eXBlb2YgQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBCdWZmZXIuaXNCdWZmZXIgPT09ICdmdW5jdGlvbic7XG52YXIgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSAnZnVuY3Rpb24nO1xuXG52YXIgaXNWaWV3ID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyA/IEFycmF5QnVmZmVyLmlzVmlldyhvYmopIDogKG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBvYmogaXMgYSBidWZmZXIgb3IgYW4gYXJyYXlidWZmZXIuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNCdWYob2JqKSB7XG4gIHJldHVybiAod2l0aE5hdGl2ZUJ1ZmZlciAmJiBCdWZmZXIuaXNCdWZmZXIob2JqKSkgfHxcbiAgICAgICAgICAod2l0aE5hdGl2ZUFycmF5QnVmZmVyICYmIChvYmogaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBpc1ZpZXcob2JqKSkpO1xufVxuIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lXG4gICAgICAgICAgICAgICAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgID8gY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgIDogbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuICAnIzAwMDBDQycsICcjMDAwMEZGJywgJyMwMDMzQ0MnLCAnIzAwMzNGRicsICcjMDA2NkNDJywgJyMwMDY2RkYnLCAnIzAwOTlDQycsXG4gICcjMDA5OUZGJywgJyMwMENDMDAnLCAnIzAwQ0MzMycsICcjMDBDQzY2JywgJyMwMENDOTknLCAnIzAwQ0NDQycsICcjMDBDQ0ZGJyxcbiAgJyMzMzAwQ0MnLCAnIzMzMDBGRicsICcjMzMzM0NDJywgJyMzMzMzRkYnLCAnIzMzNjZDQycsICcjMzM2NkZGJywgJyMzMzk5Q0MnLFxuICAnIzMzOTlGRicsICcjMzNDQzAwJywgJyMzM0NDMzMnLCAnIzMzQ0M2NicsICcjMzNDQzk5JywgJyMzM0NDQ0MnLCAnIzMzQ0NGRicsXG4gICcjNjYwMENDJywgJyM2NjAwRkYnLCAnIzY2MzNDQycsICcjNjYzM0ZGJywgJyM2NkNDMDAnLCAnIzY2Q0MzMycsICcjOTkwMENDJyxcbiAgJyM5OTAwRkYnLCAnIzk5MzNDQycsICcjOTkzM0ZGJywgJyM5OUNDMDAnLCAnIzk5Q0MzMycsICcjQ0MwMDAwJywgJyNDQzAwMzMnLFxuICAnI0NDMDA2NicsICcjQ0MwMDk5JywgJyNDQzAwQ0MnLCAnI0NDMDBGRicsICcjQ0MzMzAwJywgJyNDQzMzMzMnLCAnI0NDMzM2NicsXG4gICcjQ0MzMzk5JywgJyNDQzMzQ0MnLCAnI0NDMzNGRicsICcjQ0M2NjAwJywgJyNDQzY2MzMnLCAnI0NDOTkwMCcsICcjQ0M5OTMzJyxcbiAgJyNDQ0NDMDAnLCAnI0NDQ0MzMycsICcjRkYwMDAwJywgJyNGRjAwMzMnLCAnI0ZGMDA2NicsICcjRkYwMDk5JywgJyNGRjAwQ0MnLFxuICAnI0ZGMDBGRicsICcjRkYzMzAwJywgJyNGRjMzMzMnLCAnI0ZGMzM2NicsICcjRkYzMzk5JywgJyNGRjMzQ0MnLCAnI0ZGMzNGRicsXG4gICcjRkY2NjAwJywgJyNGRjY2MzMnLCAnI0ZGOTkwMCcsICcjRkY5OTMzJywgJyNGRkNDMDAnLCAnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG4gICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cbiAqL1xuZXhwb3J0cy5pbnN0YW5jZXMgPSBbXTtcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAqL1xuXG5leHBvcnRzLm5hbWVzID0gW107XG5leHBvcnRzLnNraXBzID0gW107XG5cbi8qKlxuICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICpcbiAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMgPSB7fTtcblxuLyoqXG4gKiBTZWxlY3QgYSBjb2xvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuICB2YXIgaGFzaCA9IDAsIGk7XG5cbiAgZm9yIChpIGluIG5hbWVzcGFjZSkge1xuICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuY29sb3JzW01hdGguYWJzKGhhc2gpICUgZXhwb3J0cy5jb2xvcnMubGVuZ3RoXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cbiAgdmFyIHByZXZUaW1lO1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuICBkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICBleHBvcnRzLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuICByZXR1cm4gZGVidWc7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICB2YXIgaW5kZXggPSBleHBvcnRzLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgZXhwb3J0cy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgaTtcbiAgdmFyIHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGV4cG9ydHMuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGluc3RhbmNlID0gZXhwb3J0cy5pbnN0YW5jZXNbaV07XG4gICAgaW5zdGFuY2UuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgaWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gdG9BcnJheVxuXG5mdW5jdGlvbiB0b0FycmF5KGxpc3QsIGluZGV4KSB7XG4gICAgdmFyIGFycmF5ID0gW11cblxuICAgIGluZGV4ID0gaW5kZXggfHwgMFxuXG4gICAgZm9yICh2YXIgaSA9IGluZGV4IHx8IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5W2kgLSBpbmRleF0gPSBsaXN0W2ldXG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5XG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ei1fJy5zcGxpdCgnJylcbiAgLCBsZW5ndGggPSA2NFxuICAsIG1hcCA9IHt9XG4gICwgc2VlZCA9IDBcbiAgLCBpID0gMFxuICAsIHByZXY7XG5cbi8qKlxuICogUmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgc3BlY2lmaWVkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbnVtIFRoZSBudW1iZXIgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlci5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShudW0pIHtcbiAgdmFyIGVuY29kZWQgPSAnJztcblxuICBkbyB7XG4gICAgZW5jb2RlZCA9IGFscGhhYmV0W251bSAlIGxlbmd0aF0gKyBlbmNvZGVkO1xuICAgIG51bSA9IE1hdGguZmxvb3IobnVtIC8gbGVuZ3RoKTtcbiAgfSB3aGlsZSAobnVtID4gMCk7XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbnRlZ2VyIHZhbHVlIHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge051bWJlcn0gVGhlIGludGVnZXIgdmFsdWUgcmVwcmVzZW50ZWQgYnkgdGhlIHN0cmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgdmFyIGRlY29kZWQgPSAwO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBkZWNvZGVkID0gZGVjb2RlZCAqIGxlbmd0aCArIG1hcFtzdHIuY2hhckF0KGkpXTtcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVkO1xufVxuXG4vKipcbiAqIFllYXN0OiBBIHRpbnkgZ3Jvd2luZyBpZCBnZW5lcmF0b3IuXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gQSB1bmlxdWUgaWQuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiB5ZWFzdCgpIHtcbiAgdmFyIG5vdyA9IGVuY29kZSgrbmV3IERhdGUoKSk7XG5cbiAgaWYgKG5vdyAhPT0gcHJldikgcmV0dXJuIHNlZWQgPSAwLCBwcmV2ID0gbm93O1xuICByZXR1cm4gbm93ICsnLicrIGVuY29kZShzZWVkKyspO1xufVxuXG4vL1xuLy8gTWFwIGVhY2ggY2hhcmFjdGVyIHRvIGl0cyBpbmRleC5cbi8vXG5mb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSBtYXBbYWxwaGFiZXRbaV1dID0gaTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgYHllYXN0YCwgYGVuY29kZWAgYW5kIGBkZWNvZGVgIGZ1bmN0aW9ucy5cbi8vXG55ZWFzdC5lbmNvZGUgPSBlbmNvZGU7XG55ZWFzdC5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cyA9IHllYXN0O1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==