// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\nbody {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 50vh;\n  background-color: #ffe600;\n}\n\n.skin {\n  width: 100%;\n  height: 100%;\n  font-size: 100px;\n  background-color: #ffe600;\n}\n\n.pikachu {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 5em;\n  height: 2.2em;\n  border: 1px solid transparent;\n}\n\n.pikachu .nose {\n  position: absolute;\n  width: 0;\n  height: 0;\n  /* centering trick */\n  margin: 0.5em calc(50% - 0.11em);\n  margin-top: 0.38em;\n  border-top: 0.09em solid #000;\n  border-left: 0.11em solid transparent;\n  border-right: 0.11em solid transparent;\n}\n\n.pikachu .nose::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0.09em;\n  left: -0.11em;\n  background-color: #000000;\n  border-top-left-radius: 0.11em 0.05em;\n  border-top-right-radius: 0.11em 0.05em;\n  display: block;\n  border: 1px solid #000;\n  width: 0.22em;\n  height: 0.05em;\n}\n\n.pikachu .eye {\n  position: absolute;\n  width: 0.64em;\n  height: 0.64em;\n  border-radius: 50%;\n  margin-left: 1em;\n  background: #000;\n}\n\n.pikachu .eye::before {\n  content: \"\";\n  position: absolute;\n  top: 0.05em;\n  right: 0.12em;\n  display: block;\n  width: 0.25em;\n  height: 0.25em;\n  border-radius: 50%;\n  background-color: #fff;\n  animation: eyeMove 3s infinite;\n}\n\n.pikachu .right {\n  right: 1em;\n}\n\n.pikachu .mouthBox {\n  position: absolute;\n  width: 2.28em;\n  height: 1.8em;\n  margin-top: 0.66em;\n  margin-left: calc(50% - 1.14em);\n  overflow: hidden;\n}\n\n.pikachu .mouthBox .lipLeft {\n  content: \"\";\n  width: 0.8em;\n  height: 0.25em;\n  border: 0.03em solid #000;\n  background-color: #ffe600;\n  border-right: none;\n  border-top: none;\n  display: block;\n  position: absolute;\n  top: -0.04em;\n  left: 0.34em;\n  transform: rotateZ(-22deg);\n  border-bottom-left-radius: 0.6em 0.3em;\n  box-shadow: 0 -0.1em 0 #ffe600;\n  z-index: 1;\n}\n\n.pikachu .mouthBox .lipLeft::after {\n  content: \"\";\n  width: 0.04em;\n  height: 0.21em;\n  display: block;\n  position: absolute;\n  right: -0.01em;\n  top: 0.01em;\n  background-color: #ffe600;\n}\n\n.pikachu .mouthBox .lipLeft::before {\n  content: \"\";\n  width: 0.3em;\n  height: 0.04em;\n  display: block;\n  position: absolute;\n  left: 0.01em;\n  top: 0;\n  background-color: #ffe600;\n}\n\n.pikachu .mouthBox .lipRight {\n  content: \"\";\n  width: 0.8em;\n  height: 0.25em;\n  border: 0.03em solid #000;\n  background-color: #ffe600;\n  border-left: none;\n  border-top: none;\n  display: block;\n  position: absolute;\n  right: 0.33em;\n  top: -0.04em;\n  transform: rotateZ(22deg);\n  border-bottom-right-radius: 0.6em 0.3em;\n  box-shadow: 0 -0.1em 0 #ffe600;\n  z-index: 1;\n}\n\n.pikachu .mouthBox .lipRight::after {\n  content: \"\";\n  width: 0.04em;\n  height: 0.21em;\n  display: block;\n  position: absolute;\n  left: -0.01em;\n  top: 0;\n  background-color: #ffe600;\n}\n\n.pikachu .mouthBox .lipRight::before {\n  content: \"\";\n  width: 0.3em;\n  height: 0.04em;\n  display: block;\n  position: absolute;\n  right: 0.01em;\n  top: 0;\n  background-color: #ffe600;\n}\n\n.pikachu .mouthBox .mouth {\n  position: absolute;\n  border: 0.03em solid #000;\n  width: 2.28em;\n  height: 8em;\n  margin-top: -6.42em;\n  border-bottom-left-radius: 1.18em 8em;\n  border-bottom-right-radius: 1.18em 8em;\n  background-color: #9b000a;\n  overflow: hidden;\n}\n\n.pikachu .mouthBox .mouth::after {\n  content: \"\";\n  position: absolute;\n  width: 1.3em;\n  height: 1em;\n  display: block;\n  background-color: #ff485f;\n  border-radius: 50%;\n  box-shadow: 0 0.7em 0 #ff485f;\n  bottom: 0.2em;\n  left: -0.03em;\n  margin-left: 0.49em;\n}\n\n.pikachu .cheek {\n  position: absolute;\n  width: 0.82em;\n  height: 0.82em;\n  border: 0.03em solid #000;\n  background-color: #ff0000;\n  border-radius: 50%;\n  margin-top: 1.11em;\n  margin-left: 0.4em;\n}\n\n.pikachu .cheek.right {\n  right: 0.4em;\n}\n\n@keyframes eyeMove {\n  0%,\n  100% {\n    top: 0.05em;\n    right: 0.12em;\n  }\n  30%, 40%, 50% {\n    top: 0.30em;\n  }\n  75% {\n    top: 0.05em;\n    right: 0.3em;\n  }\n}\n";
var _default = string;
exports.default = _default;
},{}],"scss.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n*::after {\n  box-sizing: border-box;\n}\n*::before {\n  box-sizing: border-box;\n}\nbody {\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: #ffe600;\n  font-size: 100px;\n}\n.pikachu {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 5em;\n  height: 3em;\n  border: 1px solid transparent;\n\n  .nose {\n    position: absolute;\n    width: 0;\n    height: 0;\n    /* centering trick */\n    margin: 0.5em calc(50% - 0.11em);\n    margin-top: 0.38em;\n    border-top: 0.09em solid #000;\n    border-left: 0.11em solid transparent;\n    border-right: 0.11em solid transparent;\n\n    &::before {\n      content: \"\";\n      position: absolute;\n      bottom: 0.09em;\n      left: -0.11em;\n      background-color: #000000;\n      border-top-left-radius: 0.11em 0.05em;\n      border-top-right-radius: 0.11em 0.05em;\n      display: block;\n      border: 1px solid #000;\n      width: 0.22em;\n      height: 0.05em;\n    }\n  }\n  .eye {\n    position: absolute;\n    width: 0.64em;\n    height: 0.64em;\n    border-radius: 50%;\n    margin-left: 1em;\n    background: #000;\n\n    &::before {\n      content: \"\";\n      position: absolute;\n      top: 0.05em;\n      right: 0.12em;\n      display: block;\n      width: 0.25em;\n      height: 0.25em;\n      border-radius: 50%;\n      background-color: #fff;\n      animation: eyeMove 3s infinite;\n    }\n  }\n  .right {\n    right: 1em;\n  }\n  .mouthBox {\n    position: absolute;\n    width: 2.28em;\n    height: 1.8em;\n    margin-top: 0.66em;\n    margin-left: calc(50% - 1.14em);\n    overflow: hidden;\n\n    .lipLeft {\n      content: \"\";\n      width: 0.8em;\n      height: 0.25em;\n      border: 0.03em solid #000;\n      background-color: #ffe600;\n      border-right: none;\n      border-top: none;\n      display: block;\n      position: absolute;\n      top: -0.04em;\n      left: 0.34em;\n      transform: rotateZ(-22deg);\n      border-bottom-left-radius: 0.6em 0.3em;\n      box-shadow: 0 -0.1em 0 #ffe600;\n      z-index: 1;\n\n      &::after {\n        content: \"\";\n        width: 0.04em;\n        height: 0.21em;\n        display: block;\n        position: absolute;\n        right: -0.01em;\n        top: 0.01em;\n        background-color: #ffe600;\n      }\n      &::before {\n        content: \"\";\n        width: 0.3em;\n        height: 0.04em;\n        display: block;\n        position: absolute;\n        left: 0.01em;\n        top: 0;\n        background-color: #ffe600;\n      }\n    }\n    .lipRight {\n      content: \"\";\n      width: 0.8em;\n      height: 0.25em;\n      border: 0.03em solid #000;\n      background-color: #ffe600;\n      border-left: none;\n      border-top: none;\n      display: block;\n      position: absolute;\n      right: 0.33em;\n      top: -0.04em;\n      transform: rotateZ(22deg);\n      border-bottom-right-radius: 0.6em 0.3em;\n      box-shadow: 0 -0.1em 0 #ffe600;\n      z-index: 1;\n\n      &::after {\n        content: \"\";\n        width: 0.04em;\n        height: 0.21em;\n        display: block;\n        position: absolute;\n        left: -0.01em;\n        top: 0;\n        background-color: #ffe600;\n      }\n      &::before {\n        content: \"\";\n        width: 0.3em;\n        height: 0.04em;\n        display: block;\n        position: absolute;\n        right: 0.01em;\n        top: 0;\n        background-color: #ffe600;\n      }\n    }\n    .mouth {\n      position: absolute;\n      border: 0.03em solid #000;\n      width: 2.28em;\n      height: 8em;\n      margin-top: -6.42em;\n      border-bottom-left-radius: 1.18em 8em;\n      border-bottom-right-radius: 1.18em 8em;\n      background-color: #9b000a;\n      overflow: hidden;\n\n      &::after {\n        content: \"\";\n        position: absolute;\n        width: 1.3em;\n        height: 1em;\n        display: block;\n        background-color: #ff485f;\n        border-radius: 50%;\n        box-shadow: 0 0.7em 0 #ff485f;\n        bottom: 0.2em;\n        left: -0.03em;\n        margin-left: 0.49em;\n      }\n    }\n  }\n  .cheek {\n    position: absolute;\n    width: 0.82em;\n    height: 0.82em;\n    border: 0.03em solid #000;\n    background-color: #ff0000;\n    border-radius: 50%;\n    margin-top: 1.11em;\n    margin-left: 0.4em;\n  }\n  .cheek.right {\n    right: 0.4em;\n  }\n}\n\n@keyframes eyeMove {\n  0%,\n  100% {\n    top: 0.05em;\n    right: 0.12em;\n  }\n  30%,40%,50% {\n    top: 0.30em;\n  }\n  75% {\n    top: 0.05em;\n    right: 0.3em;\n  }\n}\n";
var _default = string;
exports.default = _default;
},{}],"testV2.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

var _scss = _interopRequireDefault(require("./scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 第二次优化
// 次要
var beautify = function beautify(string) {
  return string.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;');
};

var textString = beautify(_scss.default);
var ratio = textString.length / _css.default.length; // main

var player = {
  timeout: 100,
  id: undefined,
  ui: {
    text: document.getElementById('text'),
    css: document.getElementById('css')
  },
  count: 0,
  events: {
    'btnPlay': 'play',
    'btnPause': 'pause',
    'btnSlow': 'slow',
    'btnNormal': 'normal',
    'btnFast': 'fast'
  },
  init: function init() {
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.getElementById(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.count += 1;

    if (player.count > textString.length) {
      clearInterval(player.id);
      return;
    }

    player.ui.text.innerHTML = textString.substr(0, ratio * player.count);
    player.ui.text.scrollTop = player.ui.text.scrollHeight;
    player.ui.css.innerHTML = _css.default.substr(0, player.count);
  },
  play: function play() {
    clearInterval(player.id);
    player.id = setInterval(player.run, player.timeout);
  },
  pause: function pause() {
    clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.timeout = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.timeout = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.timeout = 2;
    player.play();
  }
};
player.init();
},{"./css":"css.js","./scss":"scss.js"}],"../../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "5009" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","testV2.js"], null)
//# sourceMappingURL=/testV2.0dad71e7.js.map