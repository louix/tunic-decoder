// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"qAHqx":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7c8ebcd8757cf6d9";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
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
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"fHHNE":[function(require,module,exports) {
var _jsxDevRuntime = require("preact/jsx-dev-runtime");
var _preact = require("preact");
var _devtools = require("preact/devtools");
var _app = require("./App");
var _indexCss = require("./index.css");
const root = document.getElementById('root');
if (root) _preact.render(/*#__PURE__*/ _jsxDevRuntime.jsxDEV(_app.App, {
}, void 0, false, {
    fileName: "tunic/src/index.tsx",
    lineNumber: 9,
    columnNumber: 10
}, undefined), root);

},{"preact/jsx-dev-runtime":"l5NhS","preact":"8VZZK","preact/devtools":"ghBwt","./App":"azLqD","./index.css":"iEDE3"}],"l5NhS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Fragment", ()=>_preact.Fragment
);
parcelHelpers.export(exports, "jsx", ()=>e
);
parcelHelpers.export(exports, "jsxs", ()=>e
);
parcelHelpers.export(exports, "jsxDEV", ()=>e
);
var _preact = require("preact");
var o = 0;
function e(_, e1, n, t, f) {
    var l, s, u = {
    };
    for(s in e1)"ref" == s ? l = e1[s] : u[s] = e1[s];
    var a = {
        type: _,
        props: u,
        key: n,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --o,
        __source: t,
        __self: f
    };
    if ("function" == typeof _ && (l = _.defaultProps)) for(s in l)void 0 === u[s] && (u[s] = l[s]);
    return _preact.options.vnode && _preact.options.vnode(a), a;
}

},{"preact":"8VZZK","@parcel/transformer-js/src/esmodule-helpers.js":"hTZQA"}],"8VZZK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>S
);
parcelHelpers.export(exports, "hydrate", ()=>q
);
parcelHelpers.export(exports, "createElement", ()=>v
);
parcelHelpers.export(exports, "h", ()=>v
);
parcelHelpers.export(exports, "Fragment", ()=>d
);
parcelHelpers.export(exports, "createRef", ()=>p
);
parcelHelpers.export(exports, "isValidElement", ()=>i
);
parcelHelpers.export(exports, "Component", ()=>_
);
parcelHelpers.export(exports, "cloneElement", ()=>B
);
parcelHelpers.export(exports, "createContext", ()=>D
);
parcelHelpers.export(exports, "toChildArray", ()=>A
);
parcelHelpers.export(exports, "options", ()=>l
);
var n, l, u, i, t, o, r, f, e = {
}, c = [], s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a(n1, l1) {
    for(var u in l1)n1[u] = l1[u];
    return n1;
}
function h(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
}
function v(l3, u1, i1) {
    var t1, o1, r1, f1 = {
    };
    for(r1 in u1)"key" == r1 ? t1 = u1[r1] : "ref" == r1 ? o1 = u1[r1] : f1[r1] = u1[r1];
    if (arguments.length > 2 && (f1.children = arguments.length > 3 ? n.call(arguments, 2) : i1), "function" == typeof l3 && null != l3.defaultProps) for(r1 in l3.defaultProps)void 0 === f1[r1] && (f1[r1] = l3.defaultProps[r1]);
    return y(l3, f1, t1, o1, null);
}
function y(n3, i2, t2, o2, r2) {
    var f2 = {
        type: n3,
        props: i2,
        key: t2,
        ref: o2,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == r2 ? ++u : r2
    };
    return null == r2 && null != l.vnode && l.vnode(f2), f2;
}
function p() {
    return {
        current: null
    };
}
function d(n4) {
    return n4.children;
}
function _(n5, l4) {
    this.props = n5, this.context = l4;
}
function k(n6, l5) {
    if (null == l5) return n6.__ ? k(n6.__, n6.__.__k.indexOf(n6) + 1) : null;
    for(var u2; l5 < n6.__k.length; l5++)if (null != (u2 = n6.__k[l5]) && null != u2.__e) return u2.__e;
    return "function" == typeof n6.type ? k(n6) : null;
}
function b(n7) {
    var l6, u3;
    if (null != (n7 = n7.__) && null != n7.__c) {
        for(n7.__e = n7.__c.base = null, l6 = 0; l6 < n7.__k.length; l6++)if (null != (u3 = n7.__k[l6]) && null != u3.__e) {
            n7.__e = n7.__c.base = u3.__e;
            break;
        }
        return b(n7);
    }
}
function m(n8) {
    (!n8.__d && (n8.__d = !0) && t.push(n8) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
}
function g() {
    for(var n9; g.__r = t.length;)n9 = t.sort(function(n10, l7) {
        return n10.__v.__b - l7.__v.__b;
    }), t = [], n9.some(function(n11) {
        var l8, u4, i3, t3, o3, r3;
        n11.__d && (o3 = (t3 = (l8 = n11).__v).__e, (r3 = l8.__P) && (u4 = [], (i3 = a({
        }, t3)).__v = t3.__v + 1, j(r3, t3, i3, l8.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [
            o3
        ] : null, u4, null == o3 ? k(t3) : o3, t3.__h), z(u4, t3), t3.__e != o3 && b(t3)));
    });
}
function w(n12, l9, u5, i4, t4, o4, r4, f3, s1, a1) {
    var h1, v1, p1, _1, b1, m1, g1, w1 = i4 && i4.__k || c, A1 = w1.length;
    for(u5.__k = [], h1 = 0; h1 < l9.length; h1++)if (null != (_1 = u5.__k[h1] = null == (_1 = l9[h1]) || "boolean" == typeof _1 ? null : "string" == typeof _1 || "number" == typeof _1 || "bigint" == typeof _1 ? y(null, _1, null, null, _1) : Array.isArray(_1) ? y(d, {
        children: _1
    }, null, null, null) : _1.__b > 0 ? y(_1.type, _1.props, _1.key, null, _1.__v) : _1)) {
        if (_1.__ = u5, _1.__b = u5.__b + 1, null === (p1 = w1[h1]) || p1 && _1.key == p1.key && _1.type === p1.type) w1[h1] = void 0;
        else for(v1 = 0; v1 < A1; v1++){
            if ((p1 = w1[v1]) && _1.key == p1.key && _1.type === p1.type) {
                w1[v1] = void 0;
                break;
            }
            p1 = null;
        }
        j(n12, _1, p1 = p1 || e, t4, o4, r4, f3, s1, a1), b1 = _1.__e, (v1 = _1.ref) && p1.ref != v1 && (g1 || (g1 = []), p1.ref && g1.push(p1.ref, null, _1), g1.push(v1, _1.__c || b1, _1)), null != b1 ? (null == m1 && (m1 = b1), "function" == typeof _1.type && _1.__k === p1.__k ? _1.__d = s1 = x(_1, s1, n12) : s1 = P(n12, _1, p1, w1, b1, s1), "function" == typeof u5.type && (u5.__d = s1)) : s1 && p1.__e == s1 && s1.parentNode != n12 && (s1 = k(p1));
    }
    for(u5.__e = m1, h1 = A1; h1--;)null != w1[h1] && ("function" == typeof u5.type && null != w1[h1].__e && w1[h1].__e == u5.__d && (u5.__d = k(i4, h1 + 1)), N(w1[h1], w1[h1]));
    if (g1) for(h1 = 0; h1 < g1.length; h1++)M(g1[h1], g1[++h1], g1[++h1]);
}
function x(n13, l10, u6) {
    for(var i5, t5 = n13.__k, o5 = 0; t5 && o5 < t5.length; o5++)(i5 = t5[o5]) && (i5.__ = n13, l10 = "function" == typeof i5.type ? x(i5, l10, u6) : P(u6, i5, i5, t5, i5.__e, l10));
    return l10;
}
function A(n14, l11) {
    return l11 = l11 || [], null == n14 || "boolean" == typeof n14 || (Array.isArray(n14) ? n14.some(function(n15) {
        A(n15, l11);
    }) : l11.push(n14)), l11;
}
function P(n16, l12, u7, i6, t6, o6) {
    var r5, f4, e1;
    if (void 0 !== l12.__d) r5 = l12.__d, l12.__d = void 0;
    else if (null == u7 || t6 != o6 || null == t6.parentNode) n: if (null == o6 || o6.parentNode !== n16) n16.appendChild(t6), r5 = null;
    else {
        for(f4 = o6, e1 = 0; (f4 = f4.nextSibling) && e1 < i6.length; e1 += 2)if (f4 == t6) break n;
        n16.insertBefore(t6, o6), r5 = o6;
    }
    return void 0 !== r5 ? r5 : t6.nextSibling;
}
function C(n17, l13, u8, i7, t7) {
    var o7;
    for(o7 in u8)"children" === o7 || "key" === o7 || o7 in l13 || H(n17, o7, null, u8[o7], i7);
    for(o7 in l13)t7 && "function" != typeof l13[o7] || "children" === o7 || "key" === o7 || "value" === o7 || "checked" === o7 || u8[o7] === l13[o7] || H(n17, o7, l13[o7], u8[o7], i7);
}
function $(n18, l14, u9) {
    "-" === l14[0] ? n18.setProperty(l14, u9) : n18[l14] = null == u9 ? "" : "number" != typeof u9 || s.test(l14) ? u9 : u9 + "px";
}
function H(n19, l15, u10, i8, t8) {
    var o8;
    n: if ("style" === l15) {
        if ("string" == typeof u10) n19.style.cssText = u10;
        else {
            if ("string" == typeof i8 && (n19.style.cssText = i8 = ""), i8) for(l15 in i8)u10 && l15 in u10 || $(n19.style, l15, "");
            if (u10) for(l15 in u10)i8 && u10[l15] === i8[l15] || $(n19.style, l15, u10[l15]);
        }
    } else if ("o" === l15[0] && "n" === l15[1]) o8 = l15 !== (l15 = l15.replace(/Capture$/, "")), l15 = l15.toLowerCase() in n19 ? l15.toLowerCase().slice(2) : l15.slice(2), n19.l || (n19.l = {
    }), n19.l[l15 + o8] = u10, u10 ? i8 || n19.addEventListener(l15, o8 ? T : I, o8) : n19.removeEventListener(l15, o8 ? T : I, o8);
    else if ("dangerouslySetInnerHTML" !== l15) {
        if (t8) l15 = l15.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== l15 && "list" !== l15 && "form" !== l15 && "tabIndex" !== l15 && "download" !== l15 && l15 in n19) try {
            n19[l15] = null == u10 ? "" : u10;
            break n;
        } catch (n) {
        }
        "function" == typeof u10 || (null != u10 && (!1 !== u10 || "a" === l15[0] && "r" === l15[1]) ? n19.setAttribute(l15, u10) : n19.removeAttribute(l15));
    }
}
function I(n20) {
    this.l[n20.type + !1](l.event ? l.event(n20) : n20);
}
function T(n21) {
    this.l[n21.type + !0](l.event ? l.event(n21) : n21);
}
function j(n22, u11, i9, t9, o9, r6, f5, e2, c1) {
    var s2, h2, v2, y1, p2, k1, b2, m2, g2, x1, A2, P1 = u11.type;
    if (void 0 !== u11.constructor) return null;
    null != i9.__h && (c1 = i9.__h, e2 = u11.__e = i9.__e, u11.__h = null, r6 = [
        e2
    ]), (s2 = l.__b) && s2(u11);
    try {
        n: if ("function" == typeof P1) {
            if (m2 = u11.props, g2 = (s2 = P1.contextType) && t9[s2.__c], x1 = s2 ? g2 ? g2.props.value : s2.__ : t9, i9.__c ? b2 = (h2 = u11.__c = i9.__c).__ = h2.__E : ("prototype" in P1 && P1.prototype.render ? u11.__c = h2 = new P1(m2, x1) : (u11.__c = h2 = new _(m2, x1), h2.constructor = P1, h2.render = O), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {
            }), h2.context = x1, h2.__n = t9, v2 = h2.__d = !0, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != P1.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = a({
            }, h2.__s)), a(h2.__s, P1.getDerivedStateFromProps(m2, h2.__s))), y1 = h2.props, p2 = h2.state, v2) null == P1.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
            else {
                if (null == P1.getDerivedStateFromProps && m2 !== y1 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m2, x1), !h2.__e && null != h2.shouldComponentUpdate && !1 === h2.shouldComponentUpdate(m2, h2.__s, x1) || u11.__v === i9.__v) {
                    h2.props = m2, h2.state = h2.__s, u11.__v !== i9.__v && (h2.__d = !1), h2.__v = u11, u11.__e = i9.__e, u11.__k = i9.__k, u11.__k.forEach(function(n23) {
                        n23 && (n23.__ = u11);
                    }), h2.__h.length && f5.push(h2);
                    break n;
                }
                null != h2.componentWillUpdate && h2.componentWillUpdate(m2, h2.__s, x1), null != h2.componentDidUpdate && h2.__h.push(function() {
                    h2.componentDidUpdate(y1, p2, k1);
                });
            }
            h2.context = x1, h2.props = m2, h2.state = h2.__s, (s2 = l.__r) && s2(u11), h2.__d = !1, h2.__v = u11, h2.__P = n22, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, null != h2.getChildContext && (t9 = a(a({
            }, t9), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k1 = h2.getSnapshotBeforeUpdate(y1, p2)), A2 = null != s2 && s2.type === d && null == s2.key ? s2.props.children : s2, w(n22, Array.isArray(A2) ? A2 : [
                A2
            ], u11, i9, t9, o9, r6, f5, e2, c1), h2.base = u11.__e, u11.__h = null, h2.__h.length && f5.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = !1;
        } else null == r6 && u11.__v === i9.__v ? (u11.__k = i9.__k, u11.__e = i9.__e) : u11.__e = L(i9.__e, u11, i9, t9, o9, r6, f5, c1);
        (s2 = l.diffed) && s2(u11);
    } catch (n24) {
        u11.__v = null, (c1 || null != r6) && (u11.__e = e2, u11.__h = !!c1, r6[r6.indexOf(e2)] = null), l.__e(n24, u11, i9);
    }
}
function z(n25, u12) {
    l.__c && l.__c(u12, n25), n25.some(function(u13) {
        try {
            n25 = u13.__h, u13.__h = [], n25.some(function(n26) {
                n26.call(u13);
            });
        } catch (n27) {
            l.__e(n27, u13.__v);
        }
    });
}
function L(l16, u14, i10, t10, o10, r7, f6, c2) {
    var s3, a2, v3, y2 = i10.props, p3 = u14.props, d1 = u14.type, _2 = 0;
    if ("svg" === d1 && (o10 = !0), null != r7) {
        for(; _2 < r7.length; _2++)if ((s3 = r7[_2]) && "setAttribute" in s3 == !!d1 && (d1 ? s3.localName === d1 : 3 === s3.nodeType)) {
            l16 = s3, r7[_2] = null;
            break;
        }
    }
    if (null == l16) {
        if (null === d1) return document.createTextNode(p3);
        l16 = o10 ? document.createElementNS("http://www.w3.org/2000/svg", d1) : document.createElement(d1, p3.is && p3), r7 = null, c2 = !1;
    }
    if (null === d1) y2 === p3 || c2 && l16.data === p3 || (l16.data = p3);
    else {
        if (r7 = r7 && n.call(l16.childNodes), a2 = (y2 = i10.props || e).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c2) {
            if (null != r7) for(y2 = {
            }, _2 = 0; _2 < l16.attributes.length; _2++)y2[l16.attributes[_2].name] = l16.attributes[_2].value;
            (v3 || a2) && (v3 && (a2 && v3.__html == a2.__html || v3.__html === l16.innerHTML) || (l16.innerHTML = v3 && v3.__html || ""));
        }
        if (C(l16, p3, y2, o10, c2), v3) u14.__k = [];
        else if (_2 = u14.props.children, w(l16, Array.isArray(_2) ? _2 : [
            _2
        ], u14, i10, t10, o10 && "foreignObject" !== d1, r7, f6, r7 ? r7[0] : i10.__k && k(i10, 0), c2), null != r7) for(_2 = r7.length; _2--;)null != r7[_2] && h(r7[_2]);
        c2 || ("value" in p3 && void 0 !== (_2 = p3.value) && (_2 !== l16.value || "progress" === d1 && !_2 || "option" === d1 && _2 !== y2.value) && H(l16, "value", _2, y2.value, !1), "checked" in p3 && void 0 !== (_2 = p3.checked) && _2 !== l16.checked && H(l16, "checked", _2, y2.checked, !1));
    }
    return l16;
}
function M(n28, u15, i11) {
    try {
        "function" == typeof n28 ? n28(u15) : n28.current = u15;
    } catch (n29) {
        l.__e(n29, i11);
    }
}
function N(n30, u16, i12) {
    var t11, o11;
    if (l.unmount && l.unmount(n30), (t11 = n30.ref) && (t11.current && t11.current !== n30.__e || M(t11, null, u16)), null != (t11 = n30.__c)) {
        if (t11.componentWillUnmount) try {
            t11.componentWillUnmount();
        } catch (n31) {
            l.__e(n31, u16);
        }
        t11.base = t11.__P = null;
    }
    if (t11 = n30.__k) for(o11 = 0; o11 < t11.length; o11++)t11[o11] && N(t11[o11], u16, "function" != typeof n30.type);
    i12 || null == n30.__e || h(n30.__e), n30.__e = n30.__d = void 0;
}
function O(n32, l, u17) {
    return this.constructor(n32, u17);
}
function S(u18, i13, t12) {
    var o12, r8, f7;
    l.__ && l.__(u18, i13), r8 = (o12 = "function" == typeof t12) ? null : t12 && t12.__k || i13.__k, f7 = [], j(i13, u18 = (!o12 && t12 || i13).__k = v(d, null, [
        u18
    ]), r8 || e, e, void 0 !== i13.ownerSVGElement, !o12 && t12 ? [
        t12
    ] : r8 ? null : i13.firstChild ? n.call(i13.childNodes) : null, f7, !o12 && t12 ? t12 : r8 ? r8.__e : i13.firstChild, o12), z(f7, u18);
}
function q(n33, l17) {
    S(n33, l17, q);
}
function B(l18, u19, i14) {
    var t13, o13, r9, f8 = a({
    }, l18.props);
    for(r9 in u19)"key" == r9 ? t13 = u19[r9] : "ref" == r9 ? o13 = u19[r9] : f8[r9] = u19[r9];
    return arguments.length > 2 && (f8.children = arguments.length > 3 ? n.call(arguments, 2) : i14), y(l18.type, f8, t13 || l18.key, o13 || l18.ref, null);
}
function D(n34, l19) {
    var u20 = {
        __c: l19 = "__cC" + f++,
        __: n34,
        Consumer: function(n35, l20) {
            return n35.children(l20);
        },
        Provider: function(n36) {
            var u21, i15;
            return this.getChildContext || (u21 = [], (i15 = {
            })[l19] = this, this.getChildContext = function() {
                return i15;
            }, this.shouldComponentUpdate = function(n37) {
                this.props.value !== n37.value && u21.some(m);
            }, this.sub = function(n38) {
                u21.push(n38);
                var l21 = n38.componentWillUnmount;
                n38.componentWillUnmount = function() {
                    u21.splice(u21.indexOf(n38), 1), l21 && l21.call(n38);
                };
            }), n36.children;
        }
    };
    return u20.Provider.__ = u20.Consumer.contextType = u20;
}
n = c.slice, l = {
    __e: function(n39, l22) {
        for(var u22, i16, t14; l22 = l22.__;)if ((u22 = l22.__c) && !u22.__) try {
            if ((i16 = u22.constructor) && null != i16.getDerivedStateFromError && (u22.setState(i16.getDerivedStateFromError(n39)), t14 = u22.__d), null != u22.componentDidCatch && (u22.componentDidCatch(n39), t14 = u22.__d), t14) return u22.__E = u22;
        } catch (l23) {
            n39 = l23;
        }
        throw n39;
    }
}, u = 0, i = function(n40) {
    return null != n40 && void 0 === n40.constructor;
}, _.prototype.setState = function(n41, l24) {
    var u23;
    u23 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({
    }, this.state), "function" == typeof n41 && (n41 = n41(a({
    }, u23), this.props)), n41 && a(u23, n41), null != n41 && this.__v && (l24 && this.__h.push(l24), m(this));
}, _.prototype.forceUpdate = function(n42) {
    this.__v && (this.__e = !0, n42 && this.__h.push(n42), m(this));
}, _.prototype.render = d, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hTZQA"}],"hTZQA":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ghBwt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addHookName", ()=>t
);
var _preact = require("preact");
function t(o, e) {
    return _preact.options.__a && _preact.options.__a(e), o;
}
"undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.6.6", _preact.options, {
    Fragment: _preact.Fragment,
    Component: _preact.Component
});

},{"preact":"8VZZK","@parcel/transformer-js/src/esmodule-helpers.js":"hTZQA"}],"azLqD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App
);
var _jsxDevRuntime = require("preact/jsx-dev-runtime");
var _hooks = require("preact/hooks");
var _chars = require("./Chars");
const scale = 20;
const strokeWidth = 1;
const colours = {
    selected: "#FFFFFF",
    unselected: "#333333"
};
const getStyle = (selected)=>({
        strokeWidth,
        fill: "none",
        stroke: selected ? colours.selected : colours.unselected,
        strokeLinecap: "round",
        position: "fixed",
        zIndex: 100
    })
;
const unknown = /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
}, void 0, false, {
    fileName: "tunic/src/App.tsx",
    lineNumber: 29,
    columnNumber: 17
}, undefined);
const getSelectedVowel = (ids)=>{
    const charId = ids.filter(({ selected  })=>selected
    ).map(({ id  })=>id
    ).join("");
    return _chars.vowels[charId] ?? unknown;
};
const getSelectedConsonant = (ids)=>{
    const charId = ids.filter(({ selected  })=>selected
    ).map(({ id  })=>id
    ).join("");
    return _chars.consonants[charId] ?? unknown;
};
const toggle = (state, action)=>{
    console.log({
        action
    });
    switch(action.key){
        case "toggle":
            {
                const newState = [
                    ...state
                ];
                if (newState[action.value] !== undefined) newState[action.value].selected = !state[action.value].selected;
                return newState;
            }
        case "unselectAll":
            return state.map((x)=>({
                    ...x,
                    selected: false
                })
            );
        default:
            throw new Error("invalid action");
    }
};
const App = ()=>{
    const [selectedVowel, setSelectedVowel] = _hooks.useState(()=>unknown
    );
    const [vowelLines, dispatchVowelLines] = _hooks.useReducer(toggle, _chars.mkVowelSvgData());
    const [selectedConsonant, setSelectedConsonant] = _hooks.useState(()=>unknown
    );
    const [consonantLines, dispatchConsonantLines] = _hooks.useReducer(toggle, _chars.mkConsonantSvgData());
    const [switchChars, setSwitchChars] = _hooks.useState(()=>false
    );
    const [word, dispatchWord] = _hooks.useReducer((state, action)=>{
        switch(action.key){
            case "add":
                return state.concat(action.value);
            case "deleteLast":
                return state.slice(0, -1);
            case "clear":
                return [];
            default:
                throw new Error("invalid action");
        }
    }, []);
    const clearInput = ()=>{
        dispatchConsonantLines({
            key: "unselectAll"
        });
        dispatchVowelLines({
            key: "unselectAll"
        });
        setSelectedConsonant(unknown);
        setSelectedVowel(unknown);
    };
    const handleConsonantClick = (index)=>{
        dispatchConsonantLines({
            key: "toggle",
            value: index
        });
        setSelectedConsonant(getSelectedConsonant(consonantLines));
    };
    const handleVowelClick = (index)=>{
        dispatchVowelLines({
            key: "toggle",
            value: index
        });
        setSelectedVowel(getSelectedVowel(vowelLines));
    };
    const handleAddChar = ()=>{
        dispatchWord({
            key: "add",
            value: conjoinedChar
        });
        clearInput();
    };
    const handleDeleteLastChar = ()=>{
        dispatchWord({
            key: "deleteLast"
        });
    };
    const handleClearChars = ()=>{
        dispatchWord({
            key: "clear"
        });
        clearInput();
    };
    const shouldShowStem = ()=>consonantLines.some((x)=>x.id <= 3 && x.selected
        )
    ;
    const conjoinedChar = switchChars ? /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_jsxDevRuntime.Fragment, {
        children: [
            selectedVowel,
            selectedConsonant
        ]
    }, void 0, true) : /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_jsxDevRuntime.Fragment, {
        children: [
            selectedConsonant,
            selectedVowel
        ]
    }, void 0, true);
    return(/*#__PURE__*/ _jsxDevRuntime.jsxDEV("main", {
        children: [
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("svg", {
                width: 14 * scale,
                height: 23 * scale,
                children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("g", {
                    transform: `scale(${scale})`,
                    children: [
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("g", {
                            id: "vowel",
                            children: vowelLines.map((line, index)=>/*#__PURE__*/ _jsxDevRuntime.jsxDEV("path", {
                                    z: line.selected ? 0 : 10,
                                    onClick: ()=>handleVowelClick(index)
                                    ,
                                    style: getStyle(line.selected),
                                    d: line.d,
                                    id: `vowel${line.id}`
                                }, line.id, false, {
                                    fileName: "tunic/src/App.tsx",
                                    lineNumber: 136,
                                    columnNumber: 45
                                }, undefined)
                            )
                        }, void 0, false, {
                            fileName: "tunic/src/App.tsx",
                            lineNumber: 134,
                            columnNumber: 9
                        }, undefined),
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("g", {
                            id: "consonant",
                            children: [
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("path", {
                                    id: "stem",
                                    style: getStyle(shouldShowStem()),
                                    d: "M 6.8791668,10.583333 V 7.9375"
                                }, void 0, false, {
                                    fileName: "tunic/src/App.tsx",
                                    lineNumber: 146,
                                    columnNumber: 11
                                }, undefined),
                                consonantLines.map((line, index)=>/*#__PURE__*/ _jsxDevRuntime.jsxDEV("path", {
                                        onClick: ()=>handleConsonantClick(index)
                                        ,
                                        style: getStyle(line.selected),
                                        d: line.d,
                                        id: `consonant${line.id}`
                                    }, line.id, false, {
                                        fileName: "tunic/src/App.tsx",
                                        lineNumber: 148,
                                        columnNumber: 49
                                    }, undefined)
                                )
                            ]
                        }, void 0, true, {
                            fileName: "tunic/src/App.tsx",
                            lineNumber: 145,
                            columnNumber: 9
                        }, undefined),
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("g", {
                            id: "center",
                            children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("path", {
                                style: getStyle(true),
                                d: "M 1.5874999,10.583333 H 12.170838",
                                id: "center1"
                            }, void 0, false, {
                                fileName: "tunic/src/App.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, undefined)
                        }, void 0, false, {
                            fileName: "tunic/src/App.tsx",
                            lineNumber: 156,
                            columnNumber: 9
                        }, undefined),
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("g", {
                            children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("path", {
                                z: switchChars ? 0 : 10,
                                style: getStyle(switchChars),
                                onClick: ()=>setSwitchChars(!switchChars)
                                ,
                                d: "m 6.8791666,20.108333 c -0.2078033,0 -0.4143269,0.08555 -0.561266,0.232484 -0.1469391,0.146939 -0.232484,0.353463 -0.232484,0.561266 0,0.207803 0.085545,0.414327 0.232484,0.561266 0.1469391,0.146939 0.3534627,0.232484 0.561266,0.232484 0.2078033,0 0.4143269,-0.08554 0.561266,-0.232484 0.1469391,-0.146939 0.232484,-0.353463 0.232484,-0.561266 0,-0.207803 -0.085545,-0.414327 -0.232484,-0.561266 -0.1469391,-0.146939 -0.3534627,-0.232484 -0.561266,-0.232484 z",
                                id: "switchChars"
                            }, void 0, false, {
                                fileName: "tunic/src/App.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, undefined)
                        }, void 0, false, {
                            fileName: "tunic/src/App.tsx",
                            lineNumber: 162,
                            columnNumber: 9
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "tunic/src/App.tsx",
                    lineNumber: 133,
                    columnNumber: 7
                }, undefined)
            }, void 0, false, {
                fileName: "tunic/src/App.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                style: "font-size: 2em; text-align: center; min-height: 2em",
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        style: "color: grey",
                        children: word
                    }, void 0, false, {
                        fileName: "tunic/src/App.tsx",
                        lineNumber: 173,
                        columnNumber: 7
                    }, undefined),
                    conjoinedChar
                ]
            }, void 0, true, {
                fileName: "tunic/src/App.tsx",
                lineNumber: 172,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                style: "display: flex",
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("button", {
                        style: "flex: 1",
                        onClick: ()=>handleAddChar()
                        ,
                        children: "+"
                    }, void 0, false, {
                        fileName: "tunic/src/App.tsx",
                        lineNumber: 177,
                        columnNumber: 7
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("button", {
                        style: "flex: 1",
                        onClick: ()=>handleDeleteLastChar()
                        ,
                        children: "-"
                    }, void 0, false, {
                        fileName: "tunic/src/App.tsx",
                        lineNumber: 178,
                        columnNumber: 7
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("button", {
                        style: "flex: 1",
                        onClick: ()=>handleClearChars()
                        ,
                        children: "🗑️"
                    }, void 0, false, {
                        fileName: "tunic/src/App.tsx",
                        lineNumber: 179,
                        columnNumber: 7
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "tunic/src/App.tsx",
                lineNumber: 176,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "tunic/src/App.tsx",
        lineNumber: 131,
        columnNumber: 10
    }, undefined));
};

},{"preact/jsx-dev-runtime":"l5NhS","@parcel/transformer-js/src/esmodule-helpers.js":"hTZQA","preact/hooks":"iSt4E","./Chars":"xQyCW"}],"iSt4E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useState", ()=>l
);
parcelHelpers.export(exports, "useReducer", ()=>p
);
parcelHelpers.export(exports, "useEffect", ()=>y
);
parcelHelpers.export(exports, "useLayoutEffect", ()=>h
);
parcelHelpers.export(exports, "useRef", ()=>s
);
parcelHelpers.export(exports, "useImperativeHandle", ()=>_
);
parcelHelpers.export(exports, "useMemo", ()=>d
);
parcelHelpers.export(exports, "useCallback", ()=>A
);
parcelHelpers.export(exports, "useContext", ()=>F
);
parcelHelpers.export(exports, "useDebugValue", ()=>T
);
parcelHelpers.export(exports, "useErrorBoundary", ()=>q
);
var _preact = require("preact");
var t, u, r, o = 0, i = [], c = _preact.options.__b, f = _preact.options.__r, e = _preact.options.diffed, a = _preact.options.__c, v = _preact.options.unmount;
function m(t1, r1) {
    _preact.options.__h && _preact.options.__h(u, t1, o || r1), o = 0;
    var i1 = u.__H || (u.__H = {
        __: [],
        __h: []
    });
    return t1 >= i1.__.length && i1.__.push({
    }), i1.__[t1];
}
function l(n) {
    return o = 1, p(w, n);
}
function p(n1, r2, o1) {
    var i2 = m(t++, 2);
    return i2.t = n1, i2.__c || (i2.__ = [
        o1 ? o1(r2) : w(void 0, r2),
        function(n) {
            var t2 = i2.t(i2.__[0], n);
            i2.__[0] !== t2 && (i2.__ = [
                t2,
                i2.__[1]
            ], i2.__c.setState({
            }));
        }
    ], i2.__c = u), i2.__;
}
function y(r3, o2) {
    var i3 = m(t++, 3);
    !_preact.options.__s && k(i3.__H, o2) && (i3.__ = r3, i3.__H = o2, u.__H.__h.push(i3));
}
function h(r4, o3) {
    var i4 = m(t++, 4);
    !_preact.options.__s && k(i4.__H, o3) && (i4.__ = r4, i4.__H = o3, u.__h.push(i4));
}
function s(n) {
    return o = 5, d(function() {
        return {
            current: n
        };
    }, []);
}
function _(n, t3, u1) {
    o = 6, h(function() {
        "function" == typeof n ? n(t3()) : n && (n.current = t3());
    }, null == u1 ? u1 : u1.concat(n));
}
function d(n, u2) {
    var r5 = m(t++, 7);
    return k(r5.__H, u2) && (r5.__ = n(), r5.__H = u2, r5.__h = n), r5.__;
}
function A(n, t4) {
    return o = 8, d(function() {
        return n;
    }, t4);
}
function F(n) {
    var r6 = u.context[n.__c], o4 = m(t++, 9);
    return o4.c = n, r6 ? (null == o4.__ && (o4.__ = !0, r6.sub(u)), r6.props.value) : n.__;
}
function T(t5, u3) {
    _preact.options.useDebugValue && _preact.options.useDebugValue(u3 ? u3(t5) : t5);
}
function q(n2) {
    var r7 = m(t++, 10), o5 = l();
    return r7.__ = n2, u.componentDidCatch || (u.componentDidCatch = function(n) {
        r7.__ && r7.__(n), o5[1](n);
    }), [
        o5[0],
        function() {
            o5[1](void 0);
        }
    ];
}
function x() {
    for(var t6; t6 = i.shift();)if (t6.__P) try {
        t6.__H.__h.forEach(g), t6.__H.__h.forEach(j), t6.__H.__h = [];
    } catch (u4) {
        t6.__H.__h = [], _preact.options.__e(u4, t6.__v);
    }
}
_preact.options.__b = function(n) {
    u = null, c && c(n);
}, _preact.options.__r = function(n) {
    f && f(n), t = 0;
    var r8 = (u = n.__c).__H;
    r8 && (r8.__h.forEach(g), r8.__h.forEach(j), r8.__h = []);
}, _preact.options.diffed = function(t7) {
    e && e(t7);
    var o6 = t7.__c;
    o6 && o6.__H && o6.__H.__h.length && (1 !== i.push(o6) && r === _preact.options.requestAnimationFrame || ((r = _preact.options.requestAnimationFrame) || function(n) {
        var t8, u5 = function() {
            clearTimeout(r9), b && cancelAnimationFrame(t8), setTimeout(n);
        }, r9 = setTimeout(u5, 100);
        b && (t8 = requestAnimationFrame(u5));
    })(x)), u = null;
}, _preact.options.__c = function(t9, u6) {
    u6.some(function(t10) {
        try {
            t10.__h.forEach(g), t10.__h = t10.__h.filter(function(n) {
                return !n.__ || j(n);
            });
        } catch (r10) {
            u6.some(function(n) {
                n.__h && (n.__h = []);
            }), u6 = [], _preact.options.__e(r10, t10.__v);
        }
    }), a && a(t9, u6);
}, _preact.options.unmount = function(t11) {
    v && v(t11);
    var u7, r11 = t11.__c;
    r11 && r11.__H && (r11.__H.__.forEach(function(n) {
        try {
            g(n);
        } catch (n3) {
            u7 = n3;
        }
    }), u7 && _preact.options.__e(u7, r11.__v));
};
var b = "function" == typeof requestAnimationFrame;
function g(n) {
    var t12 = u, r12 = n.__c;
    "function" == typeof r12 && (n.__c = void 0, r12()), u = t12;
}
function j(n) {
    var t13 = u;
    n.__c = n.__(), u = t13;
}
function k(n, t14) {
    return !n || n.length !== t14.length || t14.some(function(t15, u) {
        return t15 !== n[u];
    });
}
function w(n, t16) {
    return "function" == typeof t16 ? t16(n) : t16;
}

},{"preact":"8VZZK","@parcel/transformer-js/src/esmodule-helpers.js":"hTZQA"}],"xQyCW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mkVowelSvgData", ()=>mkVowelSvgData
);
parcelHelpers.export(exports, "mkConsonantSvgData", ()=>mkConsonantSvgData
);
parcelHelpers.export(exports, "vowels", ()=>vowels
);
parcelHelpers.export(exports, "consonants", ()=>consonants
);
var _jsxDevRuntime = require("preact/jsx-dev-runtime");
const mkVowelSvgData = ()=>[
        {
            id: 1,
            d: "m 6.8791668,1.322917 5.2916712,3.96875",
            selected: false
        },
        {
            id: 2,
            d: "M 1.5874999,5.291667 6.8791668,1.322917",
            selected: false
        },
        {
            id: 3,
            d: "M 1.5874999,5.291667 V 15.874998",
            selected: false
        },
        {
            id: 4,
            d: "m 1.5874999,15.874998 5.2916669,3.96875",
            selected: false
        },
        {
            id: 5,
            d: "m 6.8791668,19.843748 5.2916712,-3.96875",
            selected: false
        }
    ]
;
const mkConsonantSvgData = ()=>[
        {
            id: 1,
            d: "M 2.9104168,5.291667 6.8791668,7.9375",
            selected: false
        },
        {
            id: 2,
            d: "M 6.8791668,2.645834 V 7.9375",
            selected: false
        },
        {
            id: 3,
            d: "M 10.847918,5.291667 6.8791668,7.9375",
            selected: false
        },
        {
            id: 4,
            d: "m 6.8791668,11.90625 -3.96875,2.645838",
            selected: false
        },
        {
            id: 5,
            d: "m 6.8791668,11.90625 v 5.291668",
            selected: false
        },
        {
            id: 6,
            d: "m 6.8791668,11.90625 3.9687512,2.645838",
            selected: false
        },
        {
            id: 0,
            d: "",
            selected: false
        }, 
    ]
;
const vowels = {
    "1": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"y\" in \"by\"",
        children: "ī"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 72,
        columnNumber: 10
    }, undefined),
    "2": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"a\" in \"fable\"",
        children: "ā"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 73,
        columnNumber: 10
    }, undefined),
    "4": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"oy\" in \"toy\"",
        children: "ȯi"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 74,
        columnNumber: 10
    }, undefined),
    "5": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"ou\" in \"found\"",
        children: "au"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 75,
        columnNumber: 10
    }, undefined),
    "12": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"u\" in \"run\"",
        children: "ə"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 76,
        columnNumber: 11
    }, undefined),
    "23": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"o\" in \"frog\"",
        children: "\xe4"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 77,
        columnNumber: 11
    }, undefined),
    "34": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"oo\" in \"book\"",
        children: "u"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 78,
        columnNumber: 11
    }, undefined),
    "45": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"i\" in \"forbidden\"",
        children: "i"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 79,
        columnNumber: 11
    }, undefined),
    "35": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"are\" in \"share\"",
        children: "er"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 80,
        columnNumber: 11
    }, undefined),
    "123": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"a\" in \"magic\"",
        children: "a"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 81,
        columnNumber: 12
    }, undefined),
    "345": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"e\" in \"bell\"",
        children: "e"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 82,
        columnNumber: 12
    }, undefined),
    "235": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"ear\" in \"nearby\"",
        children: "ir"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 83,
        columnNumber: 12
    }, undefined),
    "1345": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"er\" in \"understood\"",
        children: "ər"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 84,
        columnNumber: 13
    }, undefined),
    "1245": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"ar\" in \"dark\"",
        children: "\xe4r"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 85,
        columnNumber: 13
    }, undefined),
    "1234": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"ea\" in \"mean\"",
        children: "ē"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 86,
        columnNumber: 13
    }, undefined),
    "12345": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"o\" in \"no\"",
        children: "ō"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 87,
        columnNumber: 14
    }, undefined)
};
const consonants = {
    "13": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"w\" in \"wind",
        children: "w"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 91,
        columnNumber: 11
    }, undefined),
    "26": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"b\" in \"beach\"",
        children: "b"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 92,
        columnNumber: 11
    }, undefined),
    "46": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"m\" in \"mantle\"",
        children: "m"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 93,
        columnNumber: 11
    }, undefined),
    "24": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"j\" in \"just",
        children: "j"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 94,
        columnNumber: 11
    }, undefined),
    "25": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"l\" in \"look\"",
        children: "l"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 95,
        columnNumber: 11
    }, undefined),
    "35": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"p\" in \"prize\"",
        children: "p"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 96,
        columnNumber: 11
    }, undefined),
    "15": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"ch\" in \"chive",
        children: "ch"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 97,
        columnNumber: 11
    }, undefined),
    "135": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"t\" in \"table\"",
        children: "t"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 98,
        columnNumber: 12
    }, undefined),
    "126": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"v\" in \"viscous\"",
        children: "v"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 99,
        columnNumber: 12
    }, undefined),
    "246": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"d\" in \"drive\"",
        children: "d"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 100,
        columnNumber: 12
    }, undefined),
    "236": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"k\" in \"kale\"",
        children: "k"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 101,
        columnNumber: 12
    }, undefined),
    "235": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"r\" in \"rabbit\"",
        children: "r"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 102,
        columnNumber: 12
    }, undefined),
    "256": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"h\" in \"house\"",
        children: "h"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 103,
        columnNumber: 12
    }, undefined),
    "125": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"y\" in \"you\"",
        children: "y"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 104,
        columnNumber: 12
    }, undefined),
    "356": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"g\" in \"grave\"",
        children: "g"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 105,
        columnNumber: 12
    }, undefined),
    "146": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"n\" in \"found\"",
        children: "n"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 106,
        columnNumber: 12
    }, undefined),
    "345": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"f\" in \"face\"",
        children: "f"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 107,
        columnNumber: 12
    }, undefined),
    "1245": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"s\" in \"controls\"",
        children: "z"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 108,
        columnNumber: 13
    }, undefined),
    "2345": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"ss\" in \"press\"",
        children: "s"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 109,
        columnNumber: 13
    }, undefined),
    "1345": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"th\" in \"death\"",
        children: "th"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 110,
        columnNumber: 13
    }, undefined),
    "2456": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"th\" in \"there\"",
        children: "t͟h"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 111,
        columnNumber: 13
    }, undefined),
    "12346": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"s\" in \"visions\"",
        children: "zh"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 112,
        columnNumber: 14
    }, undefined),
    "12456": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"sh\" in \"wish\"",
        children: "sh"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 113,
        columnNumber: 14
    }, undefined),
    "123456": /*#__PURE__*/ _jsxDevRuntime.jsxDEV("abbr", {
        title: "\"ng\" in \"strength\"",
        children: "ng"
    }, void 0, false, {
        fileName: "tunic/src/Chars.tsx",
        lineNumber: 114,
        columnNumber: 15
    }, undefined)
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hTZQA","preact/jsx-dev-runtime":"l5NhS"}],"iEDE3":[function() {},{}]},["qAHqx","fHHNE"], "fHHNE", "parcelRequire94c2")

//# sourceMappingURL=index.757cf6d9.js.map
