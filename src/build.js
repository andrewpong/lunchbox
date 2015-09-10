System.registerDynamic("npm:babel-runtime@5.8.20/helpers/sliced-to-array", ["npm:babel-runtime@5.8.20/core-js/get-iterator", "npm:babel-runtime@5.8.20/core-js/is-iterable"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _getIterator = require("npm:babel-runtime@5.8.20/core-js/get-iterator")["default"];
  var _isIterable = require("npm:babel-runtime@5.8.20/core-js/is-iterable")["default"];
  exports["default"] = (function() {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;
      try {
        for (var _i = _getIterator(arr),
            _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"])
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    return function(arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (_isIterable(Object(arr))) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.20/core-js/get-iterator", ["npm:core-js@1.1.4/library/fn/get-iterator"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/get-iterator"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.20/core-js/promise", ["npm:core-js@1.1.4/library/fn/promise"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/promise"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.20/regenerator", ["npm:babel-runtime@5.8.20/regenerator/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:babel-runtime@5.8.20/regenerator/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.20/core-js/object/keys", ["npm:core-js@1.1.4/library/fn/object/keys"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/object/keys"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.20/core-js/map", ["npm:core-js@1.1.4/library/fn/map"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/map"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/get-iterator", ["npm:core-js@1.1.4/library/modules/web.dom.iterable", "npm:core-js@1.1.4/library/modules/es6.string.iterator", "npm:core-js@1.1.4/library/modules/core.get-iterator"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/web.dom.iterable");
  require("npm:core-js@1.1.4/library/modules/es6.string.iterator");
  module.exports = require("npm:core-js@1.1.4/library/modules/core.get-iterator");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.20/core-js/is-iterable", ["npm:core-js@1.1.4/library/fn/is-iterable"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/is-iterable"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/promise", ["npm:core-js@1.1.4/library/modules/es6.object.to-string", "npm:core-js@1.1.4/library/modules/es6.string.iterator", "npm:core-js@1.1.4/library/modules/web.dom.iterable", "npm:core-js@1.1.4/library/modules/es6.promise", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/es6.object.to-string");
  require("npm:core-js@1.1.4/library/modules/es6.string.iterator");
  require("npm:core-js@1.1.4/library/modules/web.dom.iterable");
  require("npm:core-js@1.1.4/library/modules/es6.promise");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.core").Promise;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.20/regenerator/index", ["npm:babel-runtime@5.8.20/regenerator/runtime"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var g = typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : this;
  var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
  var oldRuntime = hadRuntime && g.regeneratorRuntime;
  g.regeneratorRuntime = undefined;
  module.exports = require("npm:babel-runtime@5.8.20/regenerator/runtime");
  if (hadRuntime) {
    g.regeneratorRuntime = oldRuntime;
  } else {
    delete g.regeneratorRuntime;
  }
  module.exports = {
    "default": module.exports,
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/object/keys", ["npm:core-js@1.1.4/library/modules/es6.object.keys", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/es6.object.keys");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.core").Object.keys;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/map", ["npm:core-js@1.1.4/library/modules/es6.object.to-string", "npm:core-js@1.1.4/library/modules/es6.string.iterator", "npm:core-js@1.1.4/library/modules/web.dom.iterable", "npm:core-js@1.1.4/library/modules/es6.map", "npm:core-js@1.1.4/library/modules/es7.map.to-json", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/es6.object.to-string");
  require("npm:core-js@1.1.4/library/modules/es6.string.iterator");
  require("npm:core-js@1.1.4/library/modules/web.dom.iterable");
  require("npm:core-js@1.1.4/library/modules/es6.map");
  require("npm:core-js@1.1.4/library/modules/es7.map.to-json");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.core").Map;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/web.dom.iterable", ["npm:core-js@1.1.4/library/modules/es6.array.iterator", "npm:core-js@1.1.4/library/modules/$.iterators"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/es6.array.iterator");
  var Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators");
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/core.get-iterator", ["npm:core-js@1.1.4/library/modules/$.an-object", "npm:core-js@1.1.4/library/modules/core.get-iterator-method", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = require("npm:core-js@1.1.4/library/modules/$.an-object"),
      get = require("npm:core-js@1.1.4/library/modules/core.get-iterator-method");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.core").getIterator = function(it) {
    var iterFn = get(it);
    if (typeof iterFn != 'function')
      throw TypeError(it + ' is not iterable!');
    return anObject(iterFn.call(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/is-iterable", ["npm:core-js@1.1.4/library/modules/web.dom.iterable", "npm:core-js@1.1.4/library/modules/es6.string.iterator", "npm:core-js@1.1.4/library/modules/core.is-iterable"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/web.dom.iterable");
  require("npm:core-js@1.1.4/library/modules/es6.string.iterator");
  module.exports = require("npm:core-js@1.1.4/library/modules/core.is-iterable");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.object.to-string", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.core", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = module.exports = {};
  if (typeof __e == 'number')
    __e = core;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.20/regenerator/runtime", ["npm:babel-runtime@5.8.20/core-js/symbol", "npm:babel-runtime@5.8.20/core-js/symbol/iterator", "npm:babel-runtime@5.8.20/core-js/object/create", "npm:babel-runtime@5.8.20/core-js/promise", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    "use strict";
    var _Symbol = require("npm:babel-runtime@5.8.20/core-js/symbol")["default"];
    var _Symbol$iterator = require("npm:babel-runtime@5.8.20/core-js/symbol/iterator")["default"];
    var _Object$create = require("npm:babel-runtime@5.8.20/core-js/object/create")["default"];
    var _Promise = require("npm:babel-runtime@5.8.20/core-js/promise")["default"];
    !(function(global) {
      "use strict";
      var hasOwn = Object.prototype.hasOwnProperty;
      var undefined;
      var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";
      var inModule = typeof module === "object";
      var runtime = global.regeneratorRuntime;
      if (runtime) {
        if (inModule) {
          module.exports = runtime;
        }
        return;
      }
      runtime = global.regeneratorRuntime = inModule ? module.exports : {};
      function wrap(innerFn, outerFn, self, tryLocsList) {
        var generator = _Object$create((outerFn || Generator).prototype);
        generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));
        return generator;
      }
      runtime.wrap = wrap;
      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";
      var ContinueSentinel = {};
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunction.displayName = "GeneratorFunction";
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          prototype[method] = function(arg) {
            return this._invoke(method, arg);
          };
        });
      }
      runtime.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };
      runtime.mark = function(genFun) {
        genFun.__proto__ = GeneratorFunctionPrototype;
        genFun.prototype = _Object$create(Gp);
        return genFun;
      };
      runtime.awrap = function(arg) {
        return new AwaitArgument(arg);
      };
      function AwaitArgument(arg) {
        this.arg = arg;
      }
      function AsyncIterator(generator) {
        function invoke(method, arg) {
          var result = generator[method](arg);
          var value = result.value;
          return value instanceof AwaitArgument ? _Promise.resolve(value.arg).then(invokeNext, invokeThrow) : _Promise.resolve(value).then(function(unwrapped) {
            result.value = unwrapped;
            return result;
          });
        }
        if (typeof process === "object" && process.domain) {
          invoke = process.domain.bind(invoke);
        }
        var invokeNext = invoke.bind(generator, "next");
        var invokeThrow = invoke.bind(generator, "throw");
        var invokeReturn = invoke.bind(generator, "return");
        var previousPromise;
        function enqueue(method, arg) {
          var enqueueResult = previousPromise ? previousPromise.then(function() {
            return invoke(method, arg);
          }) : new _Promise(function(resolve) {
            resolve(invoke(method, arg));
          });
          previousPromise = enqueueResult["catch"](function(ignored) {});
          return enqueueResult;
        }
        this._invoke = enqueue;
      }
      defineIteratorMethods(AsyncIterator.prototype);
      runtime.async = function(innerFn, outerFn, self, tryLocsList) {
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
        return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
      };
      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }
          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            }
            return doneResult();
          }
          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
                context.delegate = null;
                var returnMethod = delegate.iterator["return"];
                if (returnMethod) {
                  var record = tryCatch(returnMethod, delegate.iterator, arg);
                  if (record.type === "throw") {
                    method = "throw";
                    arg = record.arg;
                    continue;
                  }
                }
                if (method === "return") {
                  continue;
                }
              }
              var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
              if (record.type === "throw") {
                context.delegate = null;
                method = "throw";
                arg = record.arg;
                continue;
              }
              method = "next";
              arg = undefined;
              var info = record.arg;
              if (info.done) {
                context[delegate.resultName] = info.value;
                context.next = delegate.nextLoc;
              } else {
                state = GenStateSuspendedYield;
                return info;
              }
              context.delegate = null;
            }
            if (method === "next") {
              if (state === GenStateSuspendedYield) {
                context.sent = arg;
              } else {
                context.sent = undefined;
              }
            } else if (method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw arg;
              }
              if (context.dispatchException(arg)) {
                method = "next";
                arg = undefined;
              }
            } else if (method === "return") {
              context.abrupt("return", arg);
            }
            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);
            if (record.type === "normal") {
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;
              var info = {
                value: record.arg,
                done: context.done
              };
              if (record.arg === ContinueSentinel) {
                if (context.delegate && method === "next") {
                  arg = undefined;
                }
              } else {
                return info;
              }
            } else if (record.type === "throw") {
              state = GenStateCompleted;
              method = "throw";
              arg = record.arg;
            }
          }
        };
      }
      defineIteratorMethods(Gp);
      Gp[iteratorSymbol] = function() {
        return this;
      };
      Gp.toString = function() {
        return "[object Generator]";
      };
      function pushTryEntry(locs) {
        var entry = {tryLoc: locs[0]};
        if (1 in locs) {
          entry.catchLoc = locs[1];
        }
        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
      }
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }
      function Context(tryLocsList) {
        this.tryEntries = [{tryLoc: "root"}];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
      runtime.keys = function(object) {
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse();
        return function next() {
          while (keys.length) {
            var key = keys.pop();
            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          }
          next.done = true;
          return next;
        };
      };
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }
          if (typeof iterable.next === "function") {
            return iterable;
          }
          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }
                  next.value = undefined;
                  next.done = true;
                  return next;
                };
            return next.next = next;
          }
        }
        return {next: doneResult};
      }
      runtime.values = values;
      function doneResult() {
        return {
          value: undefined,
          done: true
        };
      }
      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0;
          this.sent = undefined;
          this.done = false;
          this.delegate = null;
          this.tryEntries.forEach(resetTryEntry);
          if (!skipTempReset) {
            for (var name in this) {
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }
          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }
          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;
            return !!caught;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;
            if (entry.tryLoc === "root") {
              return handle("end");
            }
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            finallyEntry = null;
          }
          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;
          if (finallyEntry) {
            this.next = finallyEntry.finallyLoc;
          } else {
            this.complete(record);
          }
          return ContinueSentinel;
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }
          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = record.arg;
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };
          return ContinueSentinel;
        }
      };
    })(typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.promise", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.library", "npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.ctx", "npm:core-js@1.1.4/library/modules/$.classof", "npm:core-js@1.1.4/library/modules/$.def", "npm:core-js@1.1.4/library/modules/$.is-object", "npm:core-js@1.1.4/library/modules/$.an-object", "npm:core-js@1.1.4/library/modules/$.a-function", "npm:core-js@1.1.4/library/modules/$.strict-new", "npm:core-js@1.1.4/library/modules/$.for-of", "npm:core-js@1.1.4/library/modules/$.set-proto", "npm:core-js@1.1.4/library/modules/$.same", "npm:core-js@1.1.4/library/modules/$.species", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.uid", "npm:core-js@1.1.4/library/modules/$.microtask", "npm:core-js@1.1.4/library/modules/$.support-desc", "npm:core-js@1.1.4/library/modules/$.mix", "npm:core-js@1.1.4/library/modules/$.tag", "npm:core-js@1.1.4/library/modules/$.core", "npm:core-js@1.1.4/library/modules/$.iter-detect", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var $ = require("npm:core-js@1.1.4/library/modules/$"),
        LIBRARY = require("npm:core-js@1.1.4/library/modules/$.library"),
        global = require("npm:core-js@1.1.4/library/modules/$.global"),
        ctx = require("npm:core-js@1.1.4/library/modules/$.ctx"),
        classof = require("npm:core-js@1.1.4/library/modules/$.classof"),
        $def = require("npm:core-js@1.1.4/library/modules/$.def"),
        isObject = require("npm:core-js@1.1.4/library/modules/$.is-object"),
        anObject = require("npm:core-js@1.1.4/library/modules/$.an-object"),
        aFunction = require("npm:core-js@1.1.4/library/modules/$.a-function"),
        strictNew = require("npm:core-js@1.1.4/library/modules/$.strict-new"),
        forOf = require("npm:core-js@1.1.4/library/modules/$.for-of"),
        setProto = require("npm:core-js@1.1.4/library/modules/$.set-proto").set,
        same = require("npm:core-js@1.1.4/library/modules/$.same"),
        species = require("npm:core-js@1.1.4/library/modules/$.species"),
        SPECIES = require("npm:core-js@1.1.4/library/modules/$.wks")('species'),
        RECORD = require("npm:core-js@1.1.4/library/modules/$.uid")('record'),
        asap = require("npm:core-js@1.1.4/library/modules/$.microtask"),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    };
    var useNative = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && require("npm:core-js@1.1.4/library/modules/$.support-desc")) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var isPromise = function(it) {
      return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
    };
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(react) {
          var cb = ok ? react.ok : react.fail,
              ret,
              then;
          try {
            if (cb) {
              if (!ok)
                record.h = true;
              ret = cb === true ? value : cb(value);
              if (ret === react.P) {
                react.rej(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(ret)) {
                then.call(ret, react.res, react.rej);
              } else
                react.res(ret);
            } else
              react.rej(value);
          } catch (err) {
            react.rej(err);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            if (isUnhandled(record.p)) {
              if (isNode) {
                process.emit('unhandledRejection', value, record.p);
              } else if (global.console && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise[RECORD],
          chain = record.a || record.c,
          i = 0,
          react;
      if (record.h)
        return false;
      while (chain.length > i) {
        react = chain[i++];
        if (react.fail || !isUnhandled(react.P))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!useNative) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        this[RECORD] = record;
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      require("npm:core-js@1.1.4/library/modules/$.mix")(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var S = anObject(anObject(this).constructor)[SPECIES];
          var react = {
            ok: typeof onFulfilled == 'function' ? onFulfilled : true,
            fail: typeof onRejected == 'function' ? onRejected : false
          };
          var promise = react.P = new (S != undefined ? S : P)(function(res, rej) {
            react.res = aFunction(res);
            react.rej = aFunction(rej);
          });
          var record = this[RECORD];
          record.c.push(react);
          if (record.a)
            record.a.push(react);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $def($def.G + $def.W + $def.F * !useNative, {Promise: P});
    require("npm:core-js@1.1.4/library/modules/$.tag")(P, PROMISE);
    species(P);
    species(Wrapper = require("npm:core-js@1.1.4/library/modules/$.core")[PROMISE]);
    $def($def.S + $def.F * !useNative, PROMISE, {reject: function reject(r) {
        return new this(function(res, rej) {
          rej(r);
        });
      }});
    $def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        return isPromise(x) && sameConstructor(x.constructor, this) ? x : new this(function(res) {
          res(x);
        });
      }});
    $def($def.S + $def.F * !(useNative && require("npm:core-js@1.1.4/library/modules/$.iter-detect")(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            values = [];
        return new C(function(res, rej) {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              C.resolve(promise).then(function(value) {
                results[index] = value;
                --remaining || res(results);
              }, rej);
            });
          else
            res(results);
        });
      },
      race: function race(iterable) {
        var C = getConstructor(this);
        return new C(function(res, rej) {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(res, rej);
          });
        });
      }
    });
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.string.iterator", ["npm:core-js@1.1.4/library/modules/$.string-at", "npm:core-js@1.1.4/library/modules/$.iter-define"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var $at = require("npm:core-js@1.1.4/library/modules/$.string-at")(true);
  require("npm:core-js@1.1.4/library/modules/$.iter-define")(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.object.keys", ["npm:core-js@1.1.4/library/modules/$.to-object", "npm:core-js@1.1.4/library/modules/$.object-sap"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toObject = require("npm:core-js@1.1.4/library/modules/$.to-object");
  require("npm:core-js@1.1.4/library/modules/$.object-sap")('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.map", ["npm:core-js@1.1.4/library/modules/$.collection-strong", "npm:core-js@1.1.4/library/modules/$.collection"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var strong = require("npm:core-js@1.1.4/library/modules/$.collection-strong");
  require("npm:core-js@1.1.4/library/modules/$.collection")('Map', function(get) {
    return function Map() {
      return get(this, arguments[0]);
    };
  }, {
    get: function get(key) {
      var entry = strong.getEntry(this, key);
      return entry && entry.v;
    },
    set: function set(key, value) {
      return strong.def(this, key === 0 ? 0 : key, value);
    }
  }, strong, true);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es7.map.to-json", ["npm:core-js@1.1.4/library/modules/$.def", "npm:core-js@1.1.4/library/modules/$.collection-to-json"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $def = require("npm:core-js@1.1.4/library/modules/$.def");
  $def($def.P, 'Map', {toJSON: require("npm:core-js@1.1.4/library/modules/$.collection-to-json")('Map')});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.array.iterator", ["npm:core-js@1.1.4/library/modules/$.unscope", "npm:core-js@1.1.4/library/modules/$.iter-step", "npm:core-js@1.1.4/library/modules/$.iterators", "npm:core-js@1.1.4/library/modules/$.to-iobject", "npm:core-js@1.1.4/library/modules/$.iter-define"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var setUnscope = require("npm:core-js@1.1.4/library/modules/$.unscope"),
      step = require("npm:core-js@1.1.4/library/modules/$.iter-step"),
      Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators"),
      toIObject = require("npm:core-js@1.1.4/library/modules/$.to-iobject");
  require("npm:core-js@1.1.4/library/modules/$.iter-define")(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  setUnscope('keys');
  setUnscope('values');
  setUnscope('entries');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iterators", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/core.get-iterator-method", ["npm:core-js@1.1.4/library/modules/$.classof", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.iterators", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var classof = require("npm:core-js@1.1.4/library/modules/$.classof"),
      ITERATOR = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator'),
      Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.core").getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.an-object", ["npm:core-js@1.1.4/library/modules/$.is-object"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = require("npm:core-js@1.1.4/library/modules/$.is-object");
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/core.is-iterable", ["npm:core-js@1.1.4/library/modules/$.classof", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.iterators", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var classof = require("npm:core-js@1.1.4/library/modules/$.classof"),
      ITERATOR = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator'),
      Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.core").isIterable = function(it) {
    var O = Object(it);
    return ITERATOR in O || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.1", ["github:jspm/nodelibs-process@0.1.1/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-process@0.1.1/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.20/core-js/symbol", ["npm:core-js@1.1.4/library/fn/symbol"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/symbol"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.20/core-js/symbol/iterator", ["npm:core-js@1.1.4/library/fn/symbol/iterator"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/symbol/iterator"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.20/core-js/object/create", ["npm:core-js@1.1.4/library/fn/object/create"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@1.1.4/library/fn/object/create"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.library", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.global", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var UNDEFINED = 'undefined';
  var global = module.exports = typeof window != UNDEFINED && window.Math == Math ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.ctx", ["npm:core-js@1.1.4/library/modules/$.a-function"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var aFunction = require("npm:core-js@1.1.4/library/modules/$.a-function");
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.classof", ["npm:core-js@1.1.4/library/modules/$.cof", "npm:core-js@1.1.4/library/modules/$.wks"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = require("npm:core-js@1.1.4/library/modules/$.cof"),
      TAG = require("npm:core-js@1.1.4/library/modules/$.wks")('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.def", ["npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = require("npm:core-js@1.1.4/library/modules/$.global"),
      core = require("npm:core-js@1.1.4/library/modules/$.core"),
      PROTOTYPE = 'prototype';
  var ctx = function(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  };
  var $def = function(type, name, source) {
    var key,
        own,
        out,
        exp,
        isGlobal = type & $def.G,
        isProto = type & $def.P,
        target = isGlobal ? global : type & $def.S ? global[name] : (global[name] || {})[PROTOTYPE],
        exports = isGlobal ? core : core[name] || (core[name] = {});
    if (isGlobal)
      source = name;
    for (key in source) {
      own = !(type & $def.F) && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      if (isGlobal && typeof target[key] != 'function')
        exp = source[key];
      else if (type & $def.B && own)
        exp = ctx(out, global);
      else if (type & $def.W && target[key] == out)
        !function(C) {
          exp = function(param) {
            return this instanceof C ? new C(param) : C(param);
          };
          exp[PROTOTYPE] = C[PROTOTYPE];
        }(out);
      else
        exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
      exports[key] = exp;
      if (isProto)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $def.F = 1;
  $def.G = 2;
  $def.S = 4;
  $def.P = 8;
  $def.B = 16;
  $def.W = 32;
  module.exports = $def;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.is-object", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    return it !== null && (typeof it == 'object' || typeof it == 'function');
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.strict-new", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.a-function", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.for-of", ["npm:core-js@1.1.4/library/modules/$.ctx", "npm:core-js@1.1.4/library/modules/$.iter-call", "npm:core-js@1.1.4/library/modules/$.is-array-iter", "npm:core-js@1.1.4/library/modules/$.an-object", "npm:core-js@1.1.4/library/modules/$.to-length", "npm:core-js@1.1.4/library/modules/core.get-iterator-method"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = require("npm:core-js@1.1.4/library/modules/$.ctx"),
      call = require("npm:core-js@1.1.4/library/modules/$.iter-call"),
      isArrayIter = require("npm:core-js@1.1.4/library/modules/$.is-array-iter"),
      anObject = require("npm:core-js@1.1.4/library/modules/$.an-object"),
      toLength = require("npm:core-js@1.1.4/library/modules/$.to-length"),
      getIterFn = require("npm:core-js@1.1.4/library/modules/core.get-iterator-method");
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.set-proto", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.is-object", "npm:core-js@1.1.4/library/modules/$.an-object", "npm:core-js@1.1.4/library/modules/$.ctx"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getDesc = require("npm:core-js@1.1.4/library/modules/$").getDesc,
      isObject = require("npm:core-js@1.1.4/library/modules/$.is-object"),
      anObject = require("npm:core-js@1.1.4/library/modules/$.an-object");
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(buggy, set) {
      try {
        set = require("npm:core-js@1.1.4/library/modules/$.ctx")(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set({}, []);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }() : undefined),
    check: check
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.same", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.species", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.support-desc"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var $ = require("npm:core-js@1.1.4/library/modules/$"),
      SPECIES = require("npm:core-js@1.1.4/library/modules/$.wks")('species');
  module.exports = function(C) {
    if (require("npm:core-js@1.1.4/library/modules/$.support-desc") && !(SPECIES in C))
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.wks", ["npm:core-js@1.1.4/library/modules/$.shared", "npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.uid"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var store = require("npm:core-js@1.1.4/library/modules/$.shared")('wks'),
      Symbol = require("npm:core-js@1.1.4/library/modules/$.global").Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || require("npm:core-js@1.1.4/library/modules/$.uid"))('Symbol.' + name));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.uid", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.microtask", ["npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.task", "npm:core-js@1.1.4/library/modules/$.cof", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var global = require("npm:core-js@1.1.4/library/modules/$.global"),
        macrotask = require("npm:core-js@1.1.4/library/modules/$.task").set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        isNode = require("npm:core-js@1.1.4/library/modules/$.cof")(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        if (domain)
          domain.enter();
        head.fn.call();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.support-desc", ["npm:core-js@1.1.4/library/modules/$.fails"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = !require("npm:core-js@1.1.4/library/modules/$.fails")(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.mix", ["npm:core-js@1.1.4/library/modules/$.redef"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $redef = require("npm:core-js@1.1.4/library/modules/$.redef");
  module.exports = function(target, src) {
    for (var key in src)
      $redef(target, key, src[key]);
    return target;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.tag", ["npm:core-js@1.1.4/library/modules/$.has", "npm:core-js@1.1.4/library/modules/$.hide", "npm:core-js@1.1.4/library/modules/$.wks"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var has = require("npm:core-js@1.1.4/library/modules/$.has"),
      hide = require("npm:core-js@1.1.4/library/modules/$.hide"),
      TAG = require("npm:core-js@1.1.4/library/modules/$.wks")('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      hide(it, TAG, tag);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-detect", ["npm:core-js@1.1.4/library/modules/$.wks"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var SYMBOL_ITERATOR = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][SYMBOL_ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec) {
    if (!SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[SYMBOL_ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[SYMBOL_ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.string-at", ["npm:core-js@1.1.4/library/modules/$.to-integer", "npm:core-js@1.1.4/library/modules/$.defined"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = require("npm:core-js@1.1.4/library/modules/$.to-integer"),
      defined = require("npm:core-js@1.1.4/library/modules/$.defined");
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-define", ["npm:core-js@1.1.4/library/modules/$.library", "npm:core-js@1.1.4/library/modules/$.def", "npm:core-js@1.1.4/library/modules/$.redef", "npm:core-js@1.1.4/library/modules/$.hide", "npm:core-js@1.1.4/library/modules/$.has", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.iterators", "npm:core-js@1.1.4/library/modules/$.iter-create", "npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.tag"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var LIBRARY = require("npm:core-js@1.1.4/library/modules/$.library"),
      $def = require("npm:core-js@1.1.4/library/modules/$.def"),
      $redef = require("npm:core-js@1.1.4/library/modules/$.redef"),
      hide = require("npm:core-js@1.1.4/library/modules/$.hide"),
      has = require("npm:core-js@1.1.4/library/modules/$.has"),
      SYMBOL_ITERATOR = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator'),
      Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators"),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE) {
    require("npm:core-js@1.1.4/library/modules/$.iter-create")(Constructor, NAME, next);
    var createMethod = function(kind) {
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        proto = Base.prototype,
        _native = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        _default = _native || createMethod(DEFAULT),
        methods,
        key;
    if (_native) {
      var IteratorPrototype = require("npm:core-js@1.1.4/library/modules/$").getProto(_default.call(new Base));
      require("npm:core-js@1.1.4/library/modules/$.tag")(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
    }
    if (!LIBRARY || FORCE)
      hide(proto, SYMBOL_ITERATOR, _default);
    Iterators[NAME] = _default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        keys: IS_SET ? _default : createMethod(KEYS),
        values: DEFAULT == VALUES ? _default : createMethod(VALUES),
        entries: DEFAULT != VALUES ? _default : createMethod('entries')
      };
      if (FORCE)
        for (key in methods) {
          if (!(key in proto))
            $redef(proto, key, methods[key]);
        }
      else
        $def($def.P + $def.F * BUGGY, NAME, methods);
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.to-object", ["npm:core-js@1.1.4/library/modules/$.defined"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var defined = require("npm:core-js@1.1.4/library/modules/$.defined");
  module.exports = function(it) {
    return Object(defined(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.object-sap", ["npm:core-js@1.1.4/library/modules/$.def", "npm:core-js@1.1.4/library/modules/$.core", "npm:core-js@1.1.4/library/modules/$.fails"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(KEY, exec) {
    var $def = require("npm:core-js@1.1.4/library/modules/$.def"),
        fn = (require("npm:core-js@1.1.4/library/modules/$.core").Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $def($def.S + $def.F * require("npm:core-js@1.1.4/library/modules/$.fails")(function() {
      fn(1);
    }), 'Object', exp);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.collection-strong", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.hide", "npm:core-js@1.1.4/library/modules/$.ctx", "npm:core-js@1.1.4/library/modules/$.species", "npm:core-js@1.1.4/library/modules/$.strict-new", "npm:core-js@1.1.4/library/modules/$.defined", "npm:core-js@1.1.4/library/modules/$.for-of", "npm:core-js@1.1.4/library/modules/$.iter-step", "npm:core-js@1.1.4/library/modules/$.uid", "npm:core-js@1.1.4/library/modules/$.has", "npm:core-js@1.1.4/library/modules/$.is-object", "npm:core-js@1.1.4/library/modules/$.support-desc", "npm:core-js@1.1.4/library/modules/$.mix", "npm:core-js@1.1.4/library/modules/$.iter-define", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var $ = require("npm:core-js@1.1.4/library/modules/$"),
      hide = require("npm:core-js@1.1.4/library/modules/$.hide"),
      ctx = require("npm:core-js@1.1.4/library/modules/$.ctx"),
      species = require("npm:core-js@1.1.4/library/modules/$.species"),
      strictNew = require("npm:core-js@1.1.4/library/modules/$.strict-new"),
      defined = require("npm:core-js@1.1.4/library/modules/$.defined"),
      forOf = require("npm:core-js@1.1.4/library/modules/$.for-of"),
      step = require("npm:core-js@1.1.4/library/modules/$.iter-step"),
      ID = require("npm:core-js@1.1.4/library/modules/$.uid")('id'),
      $has = require("npm:core-js@1.1.4/library/modules/$.has"),
      isObject = require("npm:core-js@1.1.4/library/modules/$.is-object"),
      isExtensible = Object.isExtensible || isObject,
      SUPPORT_DESC = require("npm:core-js@1.1.4/library/modules/$.support-desc"),
      SIZE = SUPPORT_DESC ? '_s' : 'size',
      id = 0;
  var fastKey = function(it, create) {
    if (!isObject(it))
      return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!$has(it, ID)) {
      if (!isExtensible(it))
        return 'F';
      if (!create)
        return 'E';
      hide(it, ID, ++id);
    }
    return 'O' + it[ID];
  };
  var getEntry = function(that, key) {
    var index = fastKey(key),
        entry;
    if (index !== 'F')
      return that._i[index];
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key)
        return entry;
    }
  };
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function(that, iterable) {
        strictNew(that, C, NAME);
        that._i = $.create(null);
        that._f = undefined;
        that._l = undefined;
        that[SIZE] = 0;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, that[ADDER], that);
      });
      require("npm:core-js@1.1.4/library/modules/$.mix")(C.prototype, {
        clear: function clear() {
          for (var that = this,
              data = that._i,
              entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p)
              entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        'delete': function(key) {
          var that = this,
              entry = getEntry(that, key);
          if (entry) {
            var next = entry.n,
                prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev)
              prev.n = next;
            if (next)
              next.p = prev;
            if (that._f == entry)
              that._f = next;
            if (that._l == entry)
              that._l = prev;
            that[SIZE]--;
          }
          return !!entry;
        },
        forEach: function forEach(callbackfn) {
          var f = ctx(callbackfn, arguments[1], 3),
              entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            while (entry && entry.r)
              entry = entry.p;
          }
        },
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      if (SUPPORT_DESC)
        $.setDesc(C.prototype, 'size', {get: function() {
            return defined(this[SIZE]);
          }});
      return C;
    },
    def: function(that, key, value) {
      var entry = getEntry(that, key),
          prev,
          index;
      if (entry) {
        entry.v = value;
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          k: key,
          v: value,
          p: prev = that._l,
          n: undefined,
          r: false
        };
        if (!that._f)
          that._f = entry;
        if (prev)
          prev.n = entry;
        that[SIZE]++;
        if (index !== 'F')
          that._i[index] = entry;
      }
      return that;
    },
    getEntry: getEntry,
    setStrong: function(C, NAME, IS_MAP) {
      require("npm:core-js@1.1.4/library/modules/$.iter-define")(C, NAME, function(iterated, kind) {
        this._t = iterated;
        this._k = kind;
        this._l = undefined;
      }, function() {
        var that = this,
            kind = that._k,
            entry = that._l;
        while (entry && entry.r)
          entry = entry.p;
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          that._t = undefined;
          return step(1);
        }
        if (kind == 'keys')
          return step(0, entry.k);
        if (kind == 'values')
          return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
      species(C);
      species(require("npm:core-js@1.1.4/library/modules/$.core")[NAME]);
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.collection", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.def", "npm:core-js@1.1.4/library/modules/$.hide", "npm:core-js@1.1.4/library/modules/$.for-of", "npm:core-js@1.1.4/library/modules/$.strict-new", "npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.support-desc", "npm:core-js@1.1.4/library/modules/$.fails", "npm:core-js@1.1.4/library/modules/$.mix", "npm:core-js@1.1.4/library/modules/$.tag"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var $ = require("npm:core-js@1.1.4/library/modules/$"),
      $def = require("npm:core-js@1.1.4/library/modules/$.def"),
      hide = require("npm:core-js@1.1.4/library/modules/$.hide"),
      forOf = require("npm:core-js@1.1.4/library/modules/$.for-of"),
      strictNew = require("npm:core-js@1.1.4/library/modules/$.strict-new");
  module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = require("npm:core-js@1.1.4/library/modules/$.global")[NAME],
        C = Base,
        ADDER = IS_MAP ? 'set' : 'add',
        proto = C && C.prototype,
        O = {};
    if (!require("npm:core-js@1.1.4/library/modules/$.support-desc") || typeof C != 'function' || !(IS_WEAK || proto.forEach && !require("npm:core-js@1.1.4/library/modules/$.fails")(function() {
      new C().entries().next();
    }))) {
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      require("npm:core-js@1.1.4/library/modules/$.mix")(C.prototype, methods);
    } else {
      C = wrapper(function(target, iterable) {
        strictNew(target, C, NAME);
        target._c = new Base;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, target[ADDER], target);
      });
      $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','), function(KEY) {
        var chain = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear'))
          hide(C.prototype, KEY, function(a, b) {
            var result = this._c[KEY](a === 0 ? 0 : a, b);
            return chain ? this : result;
          });
      });
      if ('size' in proto)
        $.setDesc(C.prototype, 'size', {get: function() {
            return this._c.size;
          }});
    }
    require("npm:core-js@1.1.4/library/modules/$.tag")(C, NAME);
    O[NAME] = C;
    $def($def.G + $def.W + $def.F, O);
    if (!IS_WEAK)
      common.setStrong(C, NAME, IS_MAP);
    return C;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.collection-to-json", ["npm:core-js@1.1.4/library/modules/$.for-of", "npm:core-js@1.1.4/library/modules/$.classof"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var forOf = require("npm:core-js@1.1.4/library/modules/$.for-of"),
      classof = require("npm:core-js@1.1.4/library/modules/$.classof");
  module.exports = function(NAME) {
    return function toJSON() {
      if (classof(this) != NAME)
        throw TypeError(NAME + "#toJSON isn't generic");
      var arr = [];
      forOf(this, false, arr.push, arr);
      return arr;
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.unscope", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function() {};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-step", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.to-iobject", ["npm:core-js@1.1.4/library/modules/$.iobject", "npm:core-js@1.1.4/library/modules/$.defined"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var IObject = require("npm:core-js@1.1.4/library/modules/$.iobject"),
      defined = require("npm:core-js@1.1.4/library/modules/$.defined");
  module.exports = function(it) {
    return IObject(defined(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.1/index", ["npm:process@0.10.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? process : require("npm:process@0.10.1");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/symbol", ["npm:core-js@1.1.4/library/fn/symbol/index"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:core-js@1.1.4/library/fn/symbol/index");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/symbol/iterator", ["npm:core-js@1.1.4/library/modules/es6.string.iterator", "npm:core-js@1.1.4/library/modules/web.dom.iterable", "npm:core-js@1.1.4/library/modules/$.wks"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/es6.string.iterator");
  require("npm:core-js@1.1.4/library/modules/web.dom.iterable");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/object/create", ["npm:core-js@1.1.4/library/modules/$"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@1.1.4/library/modules/$");
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.cof", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-call", ["npm:core-js@1.1.4/library/modules/$.an-object"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = require("npm:core-js@1.1.4/library/modules/$.an-object");
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.is-array-iter", ["npm:core-js@1.1.4/library/modules/$.iterators", "npm:core-js@1.1.4/library/modules/$.wks"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Iterators = require("npm:core-js@1.1.4/library/modules/$.iterators"),
      ITERATOR = require("npm:core-js@1.1.4/library/modules/$.wks")('iterator');
  module.exports = function(it) {
    return (Iterators.Array || Array.prototype[ITERATOR]) === it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.to-length", ["npm:core-js@1.1.4/library/modules/$.to-integer"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = require("npm:core-js@1.1.4/library/modules/$.to-integer"),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.task", ["npm:core-js@1.1.4/library/modules/$.ctx", "npm:core-js@1.1.4/library/modules/$.invoke", "npm:core-js@1.1.4/library/modules/$.html", "npm:core-js@1.1.4/library/modules/$.dom-create", "npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.cof", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ctx = require("npm:core-js@1.1.4/library/modules/$.ctx"),
        invoke = require("npm:core-js@1.1.4/library/modules/$.invoke"),
        html = require("npm:core-js@1.1.4/library/modules/$.html"),
        cel = require("npm:core-js@1.1.4/library/modules/$.dom-create"),
        global = require("npm:core-js@1.1.4/library/modules/$.global"),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if (require("npm:core-js@1.1.4/library/modules/$.cof")(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScript) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.shared", ["npm:core-js@1.1.4/library/modules/$.global"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = require("npm:core-js@1.1.4/library/modules/$.global"),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.redef", ["npm:core-js@1.1.4/library/modules/$.hide"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:core-js@1.1.4/library/modules/$.hide");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.fails", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.has", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.hide", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.property-desc", "npm:core-js@1.1.4/library/modules/$.support-desc"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@1.1.4/library/modules/$"),
      createDesc = require("npm:core-js@1.1.4/library/modules/$.property-desc");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.support-desc") ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.to-integer", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.defined", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iter-create", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.hide", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.property-desc", "npm:core-js@1.1.4/library/modules/$.tag"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var $ = require("npm:core-js@1.1.4/library/modules/$"),
      IteratorPrototype = {};
  require("npm:core-js@1.1.4/library/modules/$.hide")(IteratorPrototype, require("npm:core-js@1.1.4/library/modules/$.wks")('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: require("npm:core-js@1.1.4/library/modules/$.property-desc")(1, next)});
    require("npm:core-js@1.1.4/library/modules/$.tag")(Constructor, NAME + ' Iterator');
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.iobject", ["npm:core-js@1.1.4/library/modules/$.cof"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = require("npm:core-js@1.1.4/library/modules/$.cof");
  module.exports = 0 in Object('z') ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:process@0.10.1", ["npm:process@0.10.1/browser"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:process@0.10.1/browser");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/fn/symbol/index", ["npm:core-js@1.1.4/library/modules/es6.symbol", "npm:core-js@1.1.4/library/modules/$.core"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@1.1.4/library/modules/es6.symbol");
  module.exports = require("npm:core-js@1.1.4/library/modules/$.core").Symbol;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.invoke", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.html", ["npm:core-js@1.1.4/library/modules/$.global"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:core-js@1.1.4/library/modules/$.global").document && document.documentElement;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.dom-create", ["npm:core-js@1.1.4/library/modules/$.is-object", "npm:core-js@1.1.4/library/modules/$.global"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = require("npm:core-js@1.1.4/library/modules/$.is-object"),
      document = require("npm:core-js@1.1.4/library/modules/$.global").document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.property-desc", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:process@0.10.1/browser", [], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  function drainQueue() {
    if (draining) {
      return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      var i = -1;
      while (++i < len) {
        currentQueue[i]();
      }
      len = queue.length;
    }
    draining = false;
  }
  process.nextTick = function(fun) {
    queue.push(fun);
    if (!draining) {
      setTimeout(drainQueue, 0);
    }
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/es6.symbol", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.global", "npm:core-js@1.1.4/library/modules/$.has", "npm:core-js@1.1.4/library/modules/$.support-desc", "npm:core-js@1.1.4/library/modules/$.def", "npm:core-js@1.1.4/library/modules/$.redef", "npm:core-js@1.1.4/library/modules/$.shared", "npm:core-js@1.1.4/library/modules/$.tag", "npm:core-js@1.1.4/library/modules/$.uid", "npm:core-js@1.1.4/library/modules/$.wks", "npm:core-js@1.1.4/library/modules/$.keyof", "npm:core-js@1.1.4/library/modules/$.get-names", "npm:core-js@1.1.4/library/modules/$.enum-keys", "npm:core-js@1.1.4/library/modules/$.is-object", "npm:core-js@1.1.4/library/modules/$.an-object", "npm:core-js@1.1.4/library/modules/$.to-iobject", "npm:core-js@1.1.4/library/modules/$.property-desc", "npm:core-js@1.1.4/library/modules/$.library", "npm:core-js@1.1.4/library/modules/$.fails"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var $ = require("npm:core-js@1.1.4/library/modules/$"),
      global = require("npm:core-js@1.1.4/library/modules/$.global"),
      has = require("npm:core-js@1.1.4/library/modules/$.has"),
      SUPPORT_DESC = require("npm:core-js@1.1.4/library/modules/$.support-desc"),
      $def = require("npm:core-js@1.1.4/library/modules/$.def"),
      $redef = require("npm:core-js@1.1.4/library/modules/$.redef"),
      shared = require("npm:core-js@1.1.4/library/modules/$.shared"),
      setTag = require("npm:core-js@1.1.4/library/modules/$.tag"),
      uid = require("npm:core-js@1.1.4/library/modules/$.uid"),
      wks = require("npm:core-js@1.1.4/library/modules/$.wks"),
      keyOf = require("npm:core-js@1.1.4/library/modules/$.keyof"),
      $names = require("npm:core-js@1.1.4/library/modules/$.get-names"),
      enumKeys = require("npm:core-js@1.1.4/library/modules/$.enum-keys"),
      isObject = require("npm:core-js@1.1.4/library/modules/$.is-object"),
      anObject = require("npm:core-js@1.1.4/library/modules/$.an-object"),
      toIObject = require("npm:core-js@1.1.4/library/modules/$.to-iobject"),
      createDesc = require("npm:core-js@1.1.4/library/modules/$.property-desc"),
      getDesc = $.getDesc,
      setDesc = $.setDesc,
      _create = $.create,
      getNames = $names.get,
      $Symbol = global.Symbol,
      setter = false,
      HIDDEN = wks('_hidden'),
      isEnum = $.isEnum,
      SymbolRegistry = shared('symbol-registry'),
      AllSymbols = shared('symbols'),
      useNative = typeof $Symbol == 'function',
      ObjectProto = Object.prototype;
  var setSymbolDesc = SUPPORT_DESC ? function() {
    try {
      return _create(setDesc({}, HIDDEN, {get: function() {
          return setDesc(this, HIDDEN, {value: false})[HIDDEN];
        }}))[HIDDEN] || setDesc;
    } catch (e) {
      return function(it, key, D) {
        var protoDesc = getDesc(ObjectProto, key);
        if (protoDesc)
          delete ObjectProto[key];
        setDesc(it, key, D);
        if (protoDesc && it !== ObjectProto)
          setDesc(ObjectProto, key, protoDesc);
      };
    }
  }() : setDesc;
  var wrap = function(tag) {
    var sym = AllSymbols[tag] = _create($Symbol.prototype);
    sym._k = tag;
    SUPPORT_DESC && setter && setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: function(value) {
        if (has(this, HIDDEN) && has(this[HIDDEN], tag))
          this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, createDesc(1, value));
      }
    });
    return sym;
  };
  var $defineProperty = function defineProperty(it, key, D) {
    if (D && has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!has(it, HIDDEN))
          setDesc(it, HIDDEN, createDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (has(it, HIDDEN) && it[HIDDEN][key])
          it[HIDDEN][key] = false;
        D = _create(D, {enumerable: createDesc(0, false)});
      }
      return setSymbolDesc(it, key, D);
    }
    return setDesc(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIObject(P)),
        i = 0,
        l = keys.length,
        key;
    while (l > i)
      $defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create(it, P) {
    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key);
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    var D = getDesc(it = toIObject(it), key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
      D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = getNames(toIObject(it)),
        result = [],
        i = 0,
        key;
    while (names.length > i)
      if (!has(AllSymbols, key = names[i++]) && key != HIDDEN)
        result.push(key);
    return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var names = getNames(toIObject(it)),
        result = [],
        i = 0,
        key;
    while (names.length > i)
      if (has(AllSymbols, key = names[i++]))
        result.push(AllSymbols[key]);
    return result;
  };
  if (!useNative) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol)
        throw TypeError('Symbol is not a constructor');
      return wrap(uid(arguments[0]));
    };
    $redef($Symbol.prototype, 'toString', function toString() {
      return this._k;
    });
    $.create = $create;
    $.isEnum = $propertyIsEnumerable;
    $.getDesc = $getOwnPropertyDescriptor;
    $.setDesc = $defineProperty;
    $.setDescs = $defineProperties;
    $.getNames = $names.get = $getOwnPropertyNames;
    $.getSymbols = $getOwnPropertySymbols;
    if (SUPPORT_DESC && !require("npm:core-js@1.1.4/library/modules/$.library")) {
      $redef(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }
  }
  if (!useNative || require("npm:core-js@1.1.4/library/modules/$.fails")(function() {
    return JSON.stringify([{a: $Symbol()}, [$Symbol()]]) != '[{},[null]]';
  }))
    $redef($Symbol.prototype, 'toJSON', function toJSON() {
      if (useNative && isObject(this))
        return this;
    });
  var symbolStatics = {
    'for': function(key) {
      return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    keyFor: function keyFor(key) {
      return keyOf(SymbolRegistry, key);
    },
    useSetter: function() {
      setter = true;
    },
    useSimple: function() {
      setter = false;
    }
  };
  $.each.call(('hasInstance,isConcatSpreadable,iterator,match,replace,search,' + 'species,split,toPrimitive,toStringTag,unscopables').split(','), function(it) {
    var sym = wks(it);
    symbolStatics[it] = useNative ? sym : wrap(sym);
  });
  setter = true;
  $def($def.G + $def.W, {Symbol: $Symbol});
  $def($def.S, 'Symbol', symbolStatics);
  $def($def.S + $def.F * !useNative, 'Object', {
    create: $create,
    defineProperty: $defineProperty,
    defineProperties: $defineProperties,
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    getOwnPropertyNames: $getOwnPropertyNames,
    getOwnPropertySymbols: $getOwnPropertySymbols
  });
  setTag($Symbol, 'Symbol');
  setTag(Math, 'Math', true);
  setTag(global.JSON, 'JSON', true);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.keyof", ["npm:core-js@1.1.4/library/modules/$", "npm:core-js@1.1.4/library/modules/$.to-iobject"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@1.1.4/library/modules/$"),
      toIObject = require("npm:core-js@1.1.4/library/modules/$.to-iobject");
  module.exports = function(object, el) {
    var O = toIObject(object),
        keys = $.getKeys(O),
        length = keys.length,
        index = 0,
        key;
    while (length > index)
      if (O[key = keys[index++]] === el)
        return key;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.get-names", ["npm:core-js@1.1.4/library/modules/$.to-iobject", "npm:core-js@1.1.4/library/modules/$"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toString = {}.toString,
      toIObject = require("npm:core-js@1.1.4/library/modules/$.to-iobject"),
      getNames = require("npm:core-js@1.1.4/library/modules/$").getNames;
  var windowNames = typeof window == 'object' && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  var getWindowNames = function(it) {
    try {
      return getNames(it);
    } catch (e) {
      return windowNames.slice();
    }
  };
  module.exports.get = function getOwnPropertyNames(it) {
    if (windowNames && toString.call(it) == '[object Window]')
      return getWindowNames(it);
    return getNames(toIObject(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.1.4/library/modules/$.enum-keys", ["npm:core-js@1.1.4/library/modules/$"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@1.1.4/library/modules/$");
  module.exports = function(it) {
    var keys = $.getKeys(it),
        getSymbols = $.getSymbols;
    if (getSymbols) {
      var symbols = getSymbols(it),
          isEnum = $.isEnum,
          i = 0,
          key;
      while (symbols.length > i)
        if (isEnum.call(it, key = symbols[i++]))
          keys.push(key);
    }
    return keys;
  };
  global.define = __define;
  return module.exports;
});

System.register('app.js', ['lib.js'], function (_export) {
  'use strict';

  var populateDropdown, incidentForm;
  return {
    setters: [function (_libJs) {
      populateDropdown = _libJs.populateDropdown;
    }],
    execute: function () {
      incidentForm = {};

      incidentForm.guid = 'abcdefg';

      populateDropdown(incidentForm.guid, 'id', 'cities.json');
    }
  };
});
System.register('lib.js', ['npm:babel-runtime@5.8.20/helpers/sliced-to-array', 'npm:babel-runtime@5.8.20/regenerator', 'npm:babel-runtime@5.8.20/core-js/promise', 'npm:babel-runtime@5.8.20/core-js/get-iterator', 'npm:babel-runtime@5.8.20/core-js/object/keys', 'npm:babel-runtime@5.8.20/core-js/map'], function (_export) {
  var _slicedToArray, _regeneratorRuntime, _Promise, _getIterator, _Object$keys, _Map, marked0$0, debug;

  function loadJson(file) {
    // Create new promise with the Promise() constructor;
    // This has as its argument a function
    // with two parameters, resolve and reject
    return new _Promise(function (resolve, reject) {
      // Standard XHR to load the JSON file
      // let path = '/director/SystemServices/main?system:getResource=plugins/indicators/com.pge.gasops.director.indicators.incident_form/assets/js/data/';
      var path = '/assets/data/';
      var xhr = new XMLHttpRequest();

      xhr.open('GET', path + file);
      xhr.responseType = 'json';

      // When the xhr loads, check whether it was successful
      xhr.onload = function () {
        if (xhr.status === 200) {
          // If successful, resolve the promise by passing back the xhr response
          resolve(xhr.response);
        } else {
          // If it fails, reject the promise with a error message
          reject(Error('JSON didn\'t load successfully; error code:' + xhr.statusText));
        }
      };

      xhr.onerror = function () {
        // Also deal with the case when the entire xhr fails to begin with
        // This is probably a network error, so reject the promise with an appropriate message
        reject(Error('There was a network error.'));
      };

      // Send the xhr
      xhr.send();
    });
  }

  function entries(obj) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

    return _regeneratorRuntime.wrap(function entries$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          context$1$0.prev = 3;
          _iterator = _getIterator(_Object$keys(obj));

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            context$1$0.next = 12;
            break;
          }

          key = _step.value;
          context$1$0.next = 9;
          return [key, obj[key]];

        case 9:
          _iteratorNormalCompletion = true;
          context$1$0.next = 5;
          break;

        case 12:
          context$1$0.next = 18;
          break;

        case 14:
          context$1$0.prev = 14;
          context$1$0.t0 = context$1$0['catch'](3);
          _didIteratorError = true;
          _iteratorError = context$1$0.t0;

        case 18:
          context$1$0.prev = 18;
          context$1$0.prev = 19;

          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }

        case 21:
          context$1$0.prev = 21;

          if (!_didIteratorError) {
            context$1$0.next = 24;
            break;
          }

          throw _iteratorError;

        case 24:
          return context$1$0.finish(21);

        case 25:
          return context$1$0.finish(18);

        case 26:
        case 'end':
          return context$1$0.stop();
      }
    }, marked0$0[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
  }

  function getFieldId(guid, field) {
    var elementId = 'ui-' + guid + '-' + field;
    return elementId;
  }

  function setSelectOptions(guid, field, options) {
    return new _Promise(function (resolve, reject) {
      var select = {};
      select.element = document.getElementById(getFieldId(guid, field));
      select.options = new _Map();

      while (select.element.firstChild) {
        select.element.removeChild(select.element.firstChild);
      }

      if (Array.isArray(options)) {
        Array.prototype.forEach.call(options, function (index, value) {
          var element = document.createElement('option');
          element.value = value;
          element.text = value;
          select.options.set(value, element);
        });
      } else {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _getIterator(entries(options)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = _slicedToArray(_step2.value, 2);

            var _key = _step2$value[0];
            var _value = _step2$value[1];

            var element = document.createElement('option');
            element.value = _value;
            element.text = _value;
            select.options.set(_value, element);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      logger(select.options);

      if (select.options.size > 0) {
        logger(select.count);
        logger(select.options);
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _getIterator(select.options), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _step3$value = _slicedToArray(_step3.value, 2);

            var key = _step3$value[0];
            var value = _step3$value[1];

            select.element.appendChild(value);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
              _iterator3['return']();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        resolve(select);
      } else {
        reject(Error('There was a network error.'));
      }
    });
  }

  function logger(message) {
    if (debug) {
      console.log(message);
    }
  }

  function populateDropdown(guid, field, file) {
    loadJson(file).then(function (response) {
      logger('lib.js loadJson OK: ' + response + '.');
      logger(response);
      // let json = JSON.parse(response);
      setSelectOptions(guid, field, response).then(function (response) {
        logger('lib.js setSelectOptions OK: ' + response.select + ' populated with ' + response.count + ' items.');
      }, function (Error) {

        logger('lib.js setSelectOptions ERROR: ' + Error);
      });
    }, function (Error) {

      logger('lib.js loadJson ERROR: ' + Error);
    });
  }

  return {
    setters: [function (_npmBabelRuntime5820HelpersSlicedToArray) {
      _slicedToArray = _npmBabelRuntime5820HelpersSlicedToArray['default'];
    }, function (_npmBabelRuntime5820Regenerator) {
      _regeneratorRuntime = _npmBabelRuntime5820Regenerator['default'];
    }, function (_npmBabelRuntime5820CoreJsPromise) {
      _Promise = _npmBabelRuntime5820CoreJsPromise['default'];
    }, function (_npmBabelRuntime5820CoreJsGetIterator) {
      _getIterator = _npmBabelRuntime5820CoreJsGetIterator['default'];
    }, function (_npmBabelRuntime5820CoreJsObjectKeys) {
      _Object$keys = _npmBabelRuntime5820CoreJsObjectKeys['default'];
    }, function (_npmBabelRuntime5820CoreJsMap) {
      _Map = _npmBabelRuntime5820CoreJsMap['default'];
    }],
    execute: function () {
      'use strict';

      _export('populateDropdown', populateDropdown);

      marked0$0 = [entries].map(_regeneratorRuntime.mark);
      debug = true;

      console.log('is this thing on?');
    }
  };
});
//# sourceMappingURL=build.js.map