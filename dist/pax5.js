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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

module.exports = prop-types;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _row = __webpack_require__(4);

var _row2 = _interopRequireDefault(_row);

var _column = __webpack_require__(13);

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PAX5 = function PAX5(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === undefined ? 'PAX5' : _ref$name,
        columns = _ref.columns,
        props = _objectWithoutProperties(_ref, ['name', 'columns']);

    return _react2.default.createElement(
        PAX5.row,
        _extends({ name: name }, props),
        columns.map(function (column, index) {
            return _react2.default.createElement(
                PAX5.column,
                { width: props['column-width'], name: 'column', key: index },
                column
            );
        })
    );
};

Object.assign(PAX5, { row: _row2.default, column: _column2.default });

exports.default = PAX5;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymorph = __webpack_require__(5);

var _polymorph2 = _interopRequireDefault(_polymorph);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _config = __webpack_require__(8);

var _config2 = _interopRequireDefault(_config);

var _styles = __webpack_require__(9);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var row = function (_React$Component) {
    _inherits(row, _React$Component);

    function row(props, context) {
        _classCallCheck(this, row);

        var _this = _possibleConstructorReturn(this, (row.__proto__ || Object.getPrototypeOf(row)).call(this, props, context));

        _this.config = Object.assign(_config2.default, window.PAX5, props.custom);

        _this.ref = function (node) {
            if (node) {
                var timer = void 0;

                window.addEventListener('resize', function () {
                    clearTimeout(timer);

                    timer = setTimeout(node.repaint, 100);
                }, false);

                node.PAX5 = _extends({}, props);

                (0, _polymorph2.default)(node, _styles2.default, _this.config);
            }
        };
        return _this;
    }

    _createClass(row, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                block: this.props.name,
                config: this.config
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                this.props.tag,
                { className: this.props.name, ref: this.ref },
                this.props.children
            );
        }
    }]);

    return row;
}(_react2.default.Component);

exports.default = row;


row.defaultProps = {
    name: 'PAX5',
    tag: 'div'
};

row.childContextTypes = {
    block: _propTypes2.default.string,
    config: _propTypes2.default.object
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = polymorph;

var _hasModifier = __webpack_require__(6);

var _hasModifier2 = _interopRequireDefault(_hasModifier);

var _getComponents = __webpack_require__(7);

var _getComponents2 = _interopRequireDefault(_getComponents);

var _getModuleNamespace = __webpack_require__(1);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Set a module's styles on a DOM element instance
 * 
 * @param {*} element 
 * @param {*} styles 
 * @param {*} globals 
 * @param {*} config 
 * @param {*} parentElement 
 */
function polymorph(element, styles, config, globals, parentElement) {
    var values = (typeof styles === 'undefined' ? 'undefined' : _typeof(styles)) === 'object' ? styles : styles(element, config, globals);

    if (values.constructor === Array) {
        if (values.every(function (value) {
            return value.constructor == Object;
        })) {
            values.forEach(function (value) {
                return polymorph(element, value, false, globals);
            });
        }
    }

    var stylesDidMount = new Event('stylesdidmount');
    var moduleDidRepaint = new Event('moduledidrepaint');

    // initialise data interface
    element.data = element.data || { states: [] };

    // determine parent element
    parentElement = parentElement || element;

    // attach repaint methods to parent element
    if (element === parentElement && config !== false) {
        parentElement.repaint = function () {
            element.style.cssText = null;

            polymorph(parentElement, (typeof styles === 'undefined' ? 'undefined' : _typeof(styles)) === 'object' ? styles : styles(element, config, globals), false, globals);

            parentElement.dispatchEvent(moduleDidRepaint);
        };
    }

    var _loop = function _loop(key, value) {
        var subComponent = [].concat(_toConsumableArray(element.querySelectorAll('[class*="_' + key + '"]'))).filter(function (subComponent) {
            return [].concat(_toConsumableArray(subComponent.classList)).some(function (className) {
                return className.indexOf((0, _getModuleNamespace2.default)(parentElement)) === 0;
            });
        });

        if (typeof value === 'function' || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            if (key.indexOf('modifier(') > -1) {
                var modifier = key.replace('modifier(', '').replace(/\)/g, '');

                if ((0, _hasModifier2.default)({ element: element, modifier: modifier, modifierGlue: '-' })) {
                    polymorph(element, value, false, globals, parentElement);
                }
            } else if (key === 'group' || key === 'wrapper') {
                // @TODO this currently runs for each item in the group/wrapper,
                // should ideally run just once per group/wrapper
                element.parentNode.classList.forEach(function (className) {
                    if (className.indexOf('group') === 0 || className.indexOf('wrapper') === 0) {
                        // apply styles to wrapper/group element
                        polymorph(element.parentNode, (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value : value(element.parentNode), false, globals, parentElement);
                        // apply styles to child modules
                        polymorph(element, (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value : value(element)[element.getAttribute('data-module')], false, globals, parentElement);
                    }
                });

                return {
                    v: void 0
                };
            }

            // if target element contains child components matching `key`
            // @TODO be more transparent, don't depend upon the below logic
            // being indictative of the desired condition
            else if ((0, _getComponents2.default)({ element: element, componentName: key, componentGlue: '_' }).length) {
                    (0, _getComponents2.default)({ element: element, componentName: key, componentGlue: '_' }).forEach(function (_component) {
                        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                            polymorph(_component, value, false, globals, parentElement);
                        } else if (typeof value === 'function') {
                            // @TODO getParameterNames(value), pass to `value(...)`
                            polymorph(_component, value(_component), false, globals, parentElement);
                        }
                    });
                } else if (subComponent.length) {
                    [].concat(_toConsumableArray(subComponent)).forEach(function (query) {
                        return polymorph(query, value, false, globals, parentElement);
                    });
                } else if (key === ':hover') {
                    var hoverState = JSON.stringify(value);

                    if (!element.data.states.includes(hoverState)) {
                        element.data.states.push(hoverState);

                        element.addEventListener('mouseenter', function mouseEnter() {
                            polymorph(element, value, false, globals, parentElement);

                            element.removeEventListener('mouseenter', mouseEnter);
                        }, false);

                        element.addEventListener('mouseleave', function mouseLeave() {
                            element.removeEventListener('mouseleave', mouseLeave);

                            element.data.states = element.data.states.filter(function (item) {
                                return item !== hoverState;
                            });

                            parentElement.repaint();
                        }, false);
                    }
                } else if (value instanceof Array) {
                    if (value[0] instanceof HTMLElement) {
                        polymorph(value[0], value[1], false, globals, parentElement);
                    }
                } else if (typeof value === 'function') {
                    element.style[key] = value(element.style[key]);
                } else {}
        } else {
            element.style[key] = value;
        }
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.entries(values)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var key = _ref2[0];
            var value = _ref2[1];

            var _ret = _loop(key, value);

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
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

    if (element === parentElement && config !== false) {
        element.dispatchEvent(stylesDidMount);
    }
}

polymorph.modifier = _hasModifier2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hasModifier;

var _getModuleNamespace = __webpack_require__(1);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function hasModifier(_ref) {
    var element = _ref.element,
        namespace = _ref.namespace,
        modifier = _ref.modifier,
        modifierGlue = _ref.modifierGlue;

    var matches = [];

    matches.push.apply(matches, _toConsumableArray([].concat(_toConsumableArray(element.classList)).filter(function (className) {
        return className.indexOf(namespace || (0, _getModuleNamespace2.default)(element)) === 0;
    }).map(function (target) {
        return target.split(modifierGlue).slice(1);
    })[0]));

    return matches.includes(modifier);
}

// export default function hasModifier(element, modifier, modifierGlue, namespace) {
//     return [...element.classList].some(className => {
//         const namespaceMatch = className.indexOf(namespace || getModuleNamespace(element)) === 0;
//         // @TODO be more strict with modifierMatch so it only matches exact
//         // modifier and not any modifier that starts with `modifier`
//         const modifierMatch = className.indexOf(modifierGlue + modifier) > -1;

//         // console.log(className, modifier, modifierMatch);

//         return namespaceMatch && modifierMatch;
//     });
// }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getComponents;

var _getModuleNamespace = __webpack_require__(1);

var _getModuleNamespace2 = _interopRequireDefault(_getModuleNamespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {*} componentName 
 */
function getComponents(_ref) {
    var _ref2;

    var element = _ref.element,
        _ref$componentName = _ref.componentName,
        componentName = _ref$componentName === undefined ? '' : _ref$componentName,
        modifier = _ref.modifier,
        namespace = _ref.namespace,
        componentGlue = _ref.componentGlue;

    var query = (namespace || (0, _getModuleNamespace2.default)(element, 'strict')) + (componentName ? componentGlue + componentName : '');

    return (_ref2 = []).concat.apply(_ref2, _toConsumableArray([].concat(_toConsumableArray(element.querySelectorAll('[class*="' + query + '"]'))).filter(function (component) {
        return [].concat(_toConsumableArray(component.classList)).some(function (className) {
            var isComponent = className.split(componentGlue).length - 1 === 1;
            var isQueryMatch = className.indexOf(query) === 0;

            if (modifier) {
                return isQueryMatch && isComponent && className.indexOf(modifier) > -1;
            } else {
                return isQueryMatch && isComponent;
            }
        });
    })));
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    columns: 12,
    gutter: '3%',
    defaultStack: '720px',
    componentGlue: '_',
    breakpoints: {
        'breakpoint-0': '0px',
        'breakpoint-1': '460px',
        'breakpoint-2': '720px',
        'breakpoint-3': '940px',
        'breakpoint-4': '1200px'
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _columnWidth = __webpack_require__(10);

var _columnWidth2 = _interopRequireDefault(_columnWidth);

var _offsetWidth = __webpack_require__(11);

var _offsetWidth2 = _interopRequireDefault(_offsetWidth);

var _shouldBeStacked = __webpack_require__(12);

var _shouldBeStacked2 = _interopRequireDefault(_shouldBeStacked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (row, config) {
    var columns = config.columns;
    var gutter = config.gutter;

    return {
        'display': 'flex',
        'margin-bottom': '1em',
        'flex-flow': 'wrap',
        'flex-direction': row.PAX5.reverse ? 'row-reverse' : false,
        'margin-left': row.PAX5['no-gutter'] ? 0 : '-' + gutter,

        column: function column(_column) {
            _column.shouldBeStacked = (0, _shouldBeStacked2.default)(row, config);

            var requiredWidth = _column.PAX5.width || Object.keys(_column.PAX5).some(function (key) {
                return ~key.indexOf('breakpoint-');
            });

            return {
                'flex': !requiredWidth && !_column.shouldBeStacked ? 1 : 'none',
                'color': 'red',
                'padding': '1em',
                'background': 'rgba(0,0,0,0.2)',
                'position': 'relative',
                'margin-left': row.PAX5['no-gutter'] ? 0 : '' + gutter,
                'width': (0, _columnWidth2.default)(columns, row, _column, gutter, config),
                'left': _column.PAX5.push && !_column.shouldBeStacked ? (0, _offsetWidth2.default)(columns, _column, 'push') : 'initial',
                'right': _column.PAX5.pull && !_column.shouldBeStacked ? (0, _offsetWidth2.default)(columns, _column, 'pull') : 'initial'
            };
        }
    };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = columnWidth;
function columnWidth(columns, row, column, gutter, config) {
    if (!column.PAX5) {
        return;
    }

    var responsiveProps = Object.keys(column.PAX5).some(function (j) {
        return ~j.indexOf('breakpoint-');
    }) || _typeof(column.PAX5.width) === 'object';

    var width = '100%';

    if (responsiveProps) {
        var responsiveWidths = column.PAX5.width || Object.keys(column.PAX5).filter(function (key) {
            return key.indexOf('breakpoint-') === 0;
        }).reduce(function (acc, cur) {
            acc[cur] = column.PAX5[cur];

            return acc;
        }, {});

        Object.keys(responsiveWidths).forEach(function (rule, index) {
            if (window.matchMedia('(min-width: ' + config.breakpoints['breakpoint-' + (index + 1)] + ')').matches) {
                if (responsiveWidths['breakpoint-' + (index + 1)]) {
                    return width = 100 / responsiveWidths[rule][1] * responsiveWidths[rule][0] + '%';
                }
            }
        });
    } else for (var i = 0; i < columns; i++) {
        if (column.PAX5.width == i) {
            width = 100 / columns * i + '%';
        }
    }

    if (!row.PAX5['no-gutter']) {
        width = 'calc(' + width + ' - ' + gutter + ')';
    }

    if (column.shouldBeStacked && !responsiveProps) {
        width = 'calc(100% - ' + gutter + ')';
    }

    return width;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = offsetWidth;
function offsetWidth(columns, column, operator) {
    for (var i = 0; i < columns; i++) {
        if (column.PAX5[operator] == i) {
            return 100 / columns * i + "%";
        }
    }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = shouldBeStacked;
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

            var customStack = row.PAX5.stack == breakpoint && window.matchMedia("(max-width: " + width + ")").matches;

            if (customStack || window.matchMedia("(max-width: " + config.defaultStack + ")").matches) {
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = column;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function column(props, context) {
    var config = Object.assign(context.config, props.custom);
    var block = props.block || context.block || 'PAX5';

    var ref = function ref(node) {
        if (node) {
            node.PAX5 = _extends({}, props);
        }
    };

    return _react2.default.createElement(
        props.tag,
        { className: block + config.componentGlue + props.name, ref: ref },
        props.children
    );
}

column.defaultProps = {
    name: 'column',
    tag: 'div'
};

column.contextTypes = {
    block: _propTypes2.default.string,
    config: _propTypes2.default.object
};

/***/ })
/******/ ]);