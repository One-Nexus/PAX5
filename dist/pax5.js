/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hasModifier;

var _getModuleNamespace = __webpack_require__(5);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function hasModifier(element, modifier, modifierGlue, namespace) {
    return [].concat(_toConsumableArray(element.classList)).some(function (className) {
        var namespaceMatch = className.indexOf(namespace || (0, _getModuleNamespace2.default)(element)) === 0;
        // @TODO be more strict with modifierMatch so it only matches exact
        // modifier and not any modifier that starts with `modifier`
        var modifierMatch = className.indexOf(modifierGlue + modifier) > -1;

        return namespaceMatch && modifierMatch;
    });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _deepExtend = __webpack_require__(3);

var _deepExtend2 = _interopRequireDefault(_deepExtend);

var _column = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./api/column\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _column2 = _interopRequireDefault(_column);

var _row = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./api/row\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _row2 = _interopRequireDefault(_row);

var _styles = __webpack_require__(4);

var _styles2 = _interopRequireDefault(_styles);

var _config = __webpack_require__(9);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PAX5 = function PAX5(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === undefined ? 'PAX5' : _ref$name,
        columns = _ref.columns,
        config = _ref.config,
        props = _objectWithoutProperties(_ref, ['name', 'columns', 'config']);

    config = (0, _deepExtend2.default)(_config2.default, config);

    return _react2.default.createElement(
        PAX5.row,
        _extends({ name: name, config: config, styles: [_styles2.default, config] }, props),
        columns.map(function (column, index) {
            return _react2.default.createElement(
                PAX5.column,
                { width: props['column-width'], name: 'column', config: config, key: index },
                column
            );
        })
    );
};

PAX5.row = _row2.default;
PAX5.column = _column2.default;

exports.default = PAX5;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * @description Recursive object extending
 * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
 * @license MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2018 Viacheslav Lotsmanov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */



function isSpecificValue(val) {
	return (
		val instanceof Buffer
		|| val instanceof Date
		|| val instanceof RegExp
	) ? true : false;
}

function cloneSpecificValue(val) {
	if (val instanceof Buffer) {
		var x = Buffer.alloc
			? Buffer.alloc(val.length)
			: new Buffer(val.length);
		val.copy(x);
		return x;
	} else if (val instanceof Date) {
		return new Date(val.getTime());
	} else if (val instanceof RegExp) {
		return new RegExp(val);
	} else {
		throw new Error('Unexpected situation');
	}
}

/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
	var clone = [];
	arr.forEach(function (item, index) {
		if (typeof item === 'object' && item !== null) {
			if (Array.isArray(item)) {
				clone[index] = deepCloneArray(item);
			} else if (isSpecificValue(item)) {
				clone[index] = cloneSpecificValue(item);
			} else {
				clone[index] = deepExtend({}, item);
			}
		} else {
			clone[index] = item;
		}
	});
	return clone;
}

function safeGetProperty(object, property) {
	return property === '__proto__' ? undefined : object[property];
}

/**
 * Extening object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
var deepExtend = module.exports = function (/*obj_1, [obj_2], [obj_N]*/) {
	if (arguments.length < 1 || typeof arguments[0] !== 'object') {
		return false;
	}

	if (arguments.length < 2) {
		return arguments[0];
	}

	var target = arguments[0];

	// convert arguments to array and cut off target object
	var args = Array.prototype.slice.call(arguments, 1);

	var val, src, clone;

	args.forEach(function (obj) {
		// skip argument if isn't an object, is null, or is an array
		if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
			return;
		}

		Object.keys(obj).forEach(function (key) {
			src = safeGetProperty(target, key); // source value
			val = safeGetProperty(obj, key); // new value

			// recursion prevention
			if (val === target) {
				return;

			/**
			 * if new value isn't object then just overwrite by new value
			 * instead of extending.
			 */
			} else if (typeof val !== 'object' || val === null) {
				target[key] = val;
				return;

			// just clone arrays (and recursive clone objects inside)
			} else if (Array.isArray(val)) {
				target[key] = deepCloneArray(val);
				return;

			// custom cloning and overwrite for specific objects
			} else if (isSpecificValue(val)) {
				target[key] = cloneSpecificValue(val);
				return;

			// overwrite by new value if source isn't object or array
			} else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
				target[key] = deepExtend({}, val);
				return;

			// source value and new value is objects both, extending...
			} else {
				target[key] = deepExtend(src, val);
				return;
			}
		});
	});

	return target;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _hasModifier = __webpack_require__(0);

var _hasModifier2 = _interopRequireDefault(_hasModifier);

var _columnWidth = __webpack_require__(6);

var _columnWidth2 = _interopRequireDefault(_columnWidth);

var _offsetWidth = __webpack_require__(7);

var _offsetWidth2 = _interopRequireDefault(_offsetWidth);

var _shouldBeStacked = __webpack_require__(8);

var _shouldBeStacked2 = _interopRequireDefault(_shouldBeStacked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (row, config) {
    var columns = config.columns;
    var gutter = config.gutter;

    return {
        'display': 'flex',
        'margin-bottom': '1em',
        'flex-flow': 'wrap',
        'flex-direction': (0, _hasModifier2.default)(row, 'row-reverse', '-') ? 'row-reverse' : false,
        'margin-left': '-' + gutter,

        column: function column(_column) {
            _column.shouldBeStacked = (0, _shouldBeStacked2.default)(row, config);

            return {
                'flex': !(0, _hasModifier2.default)(_column, 'span', '-') && !(0, _hasModifier2.default)(_column, 'breakpoint', '-') && !_column.shouldBeStacked ? 1 : 'none',
                'color': 'red',
                'padding': '1em',
                'background': 'rgba(0,0,0,0.2)',
                'position': 'relative',
                'margin-left': '' + gutter,
                'width': (0, _columnWidth2.default)(columns, row, _column, gutter, config),
                'left': (0, _hasModifier2.default)(_column, 'push', '-') && !_column.shouldBeStacked ? (0, _offsetWidth2.default)(columns, _column, 'push') : 'initial',
                'right': (0, _hasModifier2.default)(_column, 'pull', '-') && !_column.shouldBeStacked ? (0, _offsetWidth2.default)(columns, _column, 'pull') : 'initial'
            };
        }
    };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getModuleNamespace;
/**
 * Get the Module name from a Synergy query/DOM element
 * 
 * @param {*} query 
 * @param {Bool} strict
 */
function getModuleNamespace(query) {
    var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (query instanceof HTMLElement) {
        if (query.closest('[data-module]')) {
            return query.closest('[data-module]').getAttribute('data-module');
        }

        if (query.classList.length) {
            if (strict) {
                return query.classList[0].split(/-(.+)/)[0].split(/_(.+)/)[0];
            }

            return query.classList[0].split(/-(.+)/)[0];
        }
    }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = columnWidth;

var _hasModifier = __webpack_require__(0);

var _hasModifier2 = _interopRequireDefault(_hasModifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function columnWidth(columns, row, column, gutter, config) {
    var width = '100%';

    var targetClass = [].concat(_toConsumableArray(column.classList)).filter(function (c) {
        return c.indexOf(row.getAttribute('data-module')) === 0;
    }).join();
    var responsiveInterface = targetClass.split('breakpoint').slice(1).map(function (breakpoint) {
        return breakpoint.split('-').filter(function (n) {
            return !!n;
        });
    });

    if (responsiveInterface.length) {
        responsiveInterface.forEach(function (rule) {
            if (window.matchMedia('(min-width: ' + config.breakpoints['breakpoint-' + rule[0]] + ')').matches) {
                if ((0, _hasModifier2.default)(column, 'breakpoint-' + rule[0], '-')) {
                    return width = 100 / rule[2] * rule[1] + '%';
                }
            }
        });
    } else {
        for (var i = 0; i < columns; i++) {
            if ((0, _hasModifier2.default)(column, 'span-' + i, '-')) {
                width = 100 / columns * i + '%';
            }
        }
    }

    if (!(0, _hasModifier2.default)(row, 'no-gutter', '-')) {
        width = 'calc(' + width + ' - ' + gutter + ')';
    }

    if (column.shouldBeStacked && !(0, _hasModifier2.default)(column, 'breakpoint', '-')) {
        width = 'calc(100% - ' + gutter + ')';
    }

    return width;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = offsetWidth;

var _hasModifier = __webpack_require__(0);

var _hasModifier2 = _interopRequireDefault(_hasModifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function offsetWidth(columns, column, operator) {
    for (var i = 0; i < columns; i++) {
        if ((0, _hasModifier2.default)(column, operator + '-' + i, '-')) {
            return 100 / columns * i + '%';
        }
    }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = shouldBeStacked;

var _hasModifier = __webpack_require__(0);

var _hasModifier2 = _interopRequireDefault(_hasModifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shouldBeStacked(row, config) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.entries(config.breakpoints)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var breakpoint = _ref2[0];
            var width = _ref2[1];

            var customStack = (0, _hasModifier2.default)(row, 'stack-' + breakpoint, '-') && window.matchMedia('(max-width: ' + width + ')').matches;

            if (customStack || window.matchMedia('(max-width: ' + config['default-stack'] + ')').matches) {
                return true;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return false;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    'columns': 12,
    'gutter': '3%',
    'default-stack': '720px',
    'breakpoints': {
        'breakpoint-0': '0px',
        'breakpoint-1': '460px',
        'breakpoint-2': '720px',
        'breakpoint-3': '940px',
        'breakpoint-4': '1200px'
    }
};

/***/ })
/******/ ]);