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
})({"src/index.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
var url = "https://jsonplaceholder.typicode.com/todos/1";

var logTodo = function logTodo(id, title, completed) {
  console.log(id + " is " + title + " and is completed: " + completed);
};

var person = {
  age: 20
};
person.test = 40; //type annotations vs type inference?
//type annotation, explicitly telling ts what the type is
//type inference, ts figures out the type of a value

/* Annotations */

var apples = 4;
var nothingMuch = null;
var nothingAtAll = undefined;
var now = new Date(); //objects, arrays and functinos

var stringArray = [];

for (var i = 0; i < 5; i++) {
  stringArray.push("" + i);
}

console.log(stringArray); //object literal

var point = {
  x: 10,
  y: 20
}; //function

var logNumber = function logNumber(i) {
  console.log(i);
}; //type inference vs type annotation
//declaration vs initialization
// const declaration = initialization
// if we do declaration + initializiation, type inference happens


var test;
test = "whatever"; //when to use annotations
//when a function returns type any

var json = '{"x":10, "y":20}';
var coords = JSON.parse(json);
console.log(coords.x + coords.y); //when we initialize a variable later

var words = ['red', 'green', 'blue'];
var foundWord;

for (var i = 0; i < words.length; i++) {
  if (words[i] == "green") {
    foundWord = true;
  }
}

var numbers = [-3, -3, 10];
var numbersAboveZero;
numbersAboveZero = false;

for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
  var number = numbers_1[_i];

  if (number > 0) {
    numbersAboveZero = number;
  }
} //when type inference doesn't work
//type inference works for function return values, not for parameters


var add = function add(a, b) {
  return a + b;
}; //you should probably use type annotations for function return values
//if you don't you can return incorrect values and typescript will be cool with it


var subtract = function subtract(a, b) {
  return a - b;
};

function divide(x, y) {
  return x / y;
}

var multiply = function multiply(x, y) {
  return x * y;
}; //void and never? I vaguely remember it


var logger = function logger(message) {
  console.log(message);
};

logger("This is a test"); //never represents a function never properly returning, when you
//throw an error, you don't actually return from the function,
//the error simply  propogates up

var throwError = function throwError(message) {
  throw new Error(message);
};

try {
  throwError("this is a test");
} catch (e) {
  console.log(e.toString());
}

var foreCast = {
  date: new Date(),
  weather: "sunny"
};

var logWeather = function logWeather(foreCast) {
  console.log(foreCast.date + " " + foreCast.weather);
};

logWeather(foreCast);

var logWeatherDes = function logWeatherDes(_a) {
  var date = _a.date,
      weather = _a.weather;
  console.log(date + " " + weather);
};

logWeatherDes(foreCast);
var profile = {
  name: "alex",
  age: 20,
  coords: {
    x: 0,
    y: 0
  },
  setAge: function setAge(age) {
    this.age = age;
  }
};
profile.setAge(30);
console.log(profile.age);
var age = profile.age;
console.log(age); //const {coords: {x, y}}: {coords: {x: number, y: number}} = profile;

var _a = profile.coords,
    x = _a.x,
    y = _a.y;
console.log(x);
console.log(y); //typed arrays, lol

var strArray = ["one", "two", "three"];

for (var _b = 0, strArray_1 = strArray; _b < strArray_1.length; _b++) {
  var str = strArray_1[_b];
  console.log(str);
}

strArray.forEach(function (el) {
  console.log(el);
});
var variableType = [];
variableType.push(4);
variableType.push("asdf");
console.log(variableType[1]); //freaking tuples, just like in python

var myTuple = ["test", "test", true];
var drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};
var myDrink = ["test", false, 43];
var myDrinkObject = {
  color: "tester",
  carbonated: true,
  sugar: 10
};

var Dog =
/** @class */
function () {
  function Dog(legs, name) {
    this.legs = legs;
    this.name = name;
  }

  Dog.testThing = function () {
    console.log("All animals can do this!");
  };

  Dog.prototype.speak = function () {
    return this.name + " says speak";
  };

  return Dog;
}();

var GuardDog =
/** @class */
function (_super) {
  __extends(GuardDog, _super);

  function GuardDog(legs, name, bite) {
    var _this = _super.call(this, legs, name) || this;

    _this.bite = bite;
    return _this;
  }

  GuardDog.prototype.speak = function () {
    return _super.prototype.speak.call(this) + " says the guard dog";
  };

  return GuardDog;
}(Dog);

var nick = new Dog(4, "nick");
var mow = new Dog(5, "test");
var guard = new GuardDog(4, "doggy", 50);
console.log(guard.speak());

var Vehicle =
/** @class */
function () {
  function Vehicle() {}

  Vehicle.prototype.drive = function () {
    console.log("Chugga chugga arooga");
  };

  return Vehicle;
}();

var myCar = new Vehicle(); //learning to love programming again
//I am going to ignore the anxiety that is killing me, so this is my best attempt
//everything is going to be okay
//sweet inheritence

var Car =
/** @class */
function (_super) {
  __extends(Car, _super);

  function Car() {
    var _this = _super.call(this) || this;

    console.log("ok");
    return _this;
  }

  Car.prototype.helper = function () {
    console.log("This is a helper function");
  };

  Car.prototype.honk = function () {
    this.helper();
    this.drive();
    console.log("Arooga");
  };

  Car.prototype.drive = function () {
    console.log("Vroom fast car");
  };

  return Car;
}(Vehicle);

var car = new Car();
car.honk();
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44383" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map