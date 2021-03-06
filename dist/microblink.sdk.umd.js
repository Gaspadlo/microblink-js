(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.Microblink = {})));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    // TODO: including these in blob-util.ts causes typedoc to generate docs for them,
    /**
     * Convert a `Blob` to a binary string.
     *
     * Example:
     *
     * ```js
     * blobUtil.blobToBinaryString(blob).then(function (binaryString) {
     *   // success
     * }).catch(function (err) {
     *   // error
     * });
     * ```
     *
     * @param blob
     * @returns Promise that resolves with the binary string
     */
    function blobToBinaryString(blob) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            var hasBinaryString = typeof reader.readAsBinaryString === 'function';
            reader.onloadend = function () {
                var result = reader.result || '';
                if (hasBinaryString) {
                    return resolve(result);
                }
                resolve(arrayBufferToBinaryString(result));
            };
            reader.onerror = reject;
            if (hasBinaryString) {
                reader.readAsBinaryString(blob);
            }
            else {
                reader.readAsArrayBuffer(blob);
            }
        });
    }
    /**
     * Convert a `Blob` to a binary string.
     *
     * Example:
     *
     * ```js
     * blobUtil.blobToBase64String(blob).then(function (base64String) {
     *   // success
     * }).catch(function (err) {
     *   // error
     * });
     * ```
     *
     * @param blob
     * @returns Promise that resolves with the binary string
     */
    function blobToBase64String(blob) {
        return blobToBinaryString(blob).then(btoa);
    }
    /**
     * Convert an `ArrayBuffer` to a binary string.
     *
     * Example:
     *
     * ```js
     * var myString = blobUtil.arrayBufferToBinaryString(arrayBuff)
     * ```
     *
     * @param buffer - array buffer
     * @returns binary string
     */
    function arrayBufferToBinaryString(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var length = bytes.byteLength;
        var i = -1;
        while (++i < length) {
            binary += String.fromCharCode(bytes[i]);
        }
        return binary;
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var isFunction_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function isFunction(x) {
        return typeof x === 'function';
    }
    exports.isFunction = isFunction;

    });

    unwrapExports(isFunction_1);
    var isFunction_2 = isFunction_1.isFunction;

    var config = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
        Promise: undefined,
        set useDeprecatedSynchronousErrorHandling(value) {
            if (value) {
                var error = new Error();
                console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
            }
            else if (_enable_super_gross_mode_that_will_cause_bad_things) {
                console.log('RxJS: Back to a better error behavior. Thank you. <3');
            }
            _enable_super_gross_mode_that_will_cause_bad_things = value;
        },
        get useDeprecatedSynchronousErrorHandling() {
            return _enable_super_gross_mode_that_will_cause_bad_things;
        },
    };

    });

    unwrapExports(config);
    var config_1 = config.config;

    var hostReportError_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function hostReportError(err) {
        setTimeout(function () { throw err; }, 0);
    }
    exports.hostReportError = hostReportError;

    });

    unwrapExports(hostReportError_1);
    var hostReportError_2 = hostReportError_1.hostReportError;

    var Observer = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });


    exports.empty = {
        closed: true,
        next: function (value) { },
        error: function (err) {
            if (config.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        },
        complete: function () { }
    };

    });

    unwrapExports(Observer);
    var Observer_1 = Observer.empty;

    var isArray = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();

    });

    unwrapExports(isArray);
    var isArray_1 = isArray.isArray;

    var isObject_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function isObject(x) {
        return x !== null && typeof x === 'object';
    }
    exports.isObject = isObject;

    });

    unwrapExports(isObject_1);
    var isObject_2 = isObject_1.isObject;

    var UnsubscriptionError = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var UnsubscriptionErrorImpl = (function () {
        function UnsubscriptionErrorImpl(errors) {
            Error.call(this);
            this.message = errors ?
                errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
            this.name = 'UnsubscriptionError';
            this.errors = errors;
            return this;
        }
        UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
        return UnsubscriptionErrorImpl;
    })();
    exports.UnsubscriptionError = UnsubscriptionErrorImpl;

    });

    unwrapExports(UnsubscriptionError);
    var UnsubscriptionError_1 = UnsubscriptionError.UnsubscriptionError;

    var Subscription_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });




    var Subscription = (function () {
        function Subscription(unsubscribe) {
            this.closed = false;
            this._parentOrParents = null;
            this._subscriptions = null;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        Subscription.prototype.unsubscribe = function () {
            var errors;
            if (this.closed) {
                return;
            }
            var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
            this.closed = true;
            this._parentOrParents = null;
            this._subscriptions = null;
            if (_parentOrParents instanceof Subscription) {
                _parentOrParents.remove(this);
            }
            else if (_parentOrParents !== null) {
                for (var index = 0; index < _parentOrParents.length; ++index) {
                    var parent_1 = _parentOrParents[index];
                    parent_1.remove(this);
                }
            }
            if (isFunction_1.isFunction(_unsubscribe)) {
                try {
                    _unsubscribe.call(this);
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
                }
            }
            if (isArray.isArray(_subscriptions)) {
                var index = -1;
                var len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject_1.isObject(sub)) {
                        try {
                            sub.unsubscribe();
                        }
                        catch (e) {
                            errors = errors || [];
                            if (e instanceof UnsubscriptionError.UnsubscriptionError) {
                                errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                            }
                            else {
                                errors.push(e);
                            }
                        }
                    }
                }
            }
            if (errors) {
                throw new UnsubscriptionError.UnsubscriptionError(errors);
            }
        };
        Subscription.prototype.add = function (teardown) {
            var subscription = teardown;
            if (!teardown) {
                return Subscription.EMPTY;
            }
            switch (typeof teardown) {
                case 'function':
                    subscription = new Subscription(teardown);
                case 'object':
                    if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                        return subscription;
                    }
                    else if (this.closed) {
                        subscription.unsubscribe();
                        return subscription;
                    }
                    else if (!(subscription instanceof Subscription)) {
                        var tmp = subscription;
                        subscription = new Subscription();
                        subscription._subscriptions = [tmp];
                    }
                    break;
                default: {
                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
                }
            }
            var _parentOrParents = subscription._parentOrParents;
            if (_parentOrParents === null) {
                subscription._parentOrParents = this;
            }
            else if (_parentOrParents instanceof Subscription) {
                if (_parentOrParents === this) {
                    return subscription;
                }
                subscription._parentOrParents = [_parentOrParents, this];
            }
            else if (_parentOrParents.indexOf(this) === -1) {
                _parentOrParents.push(this);
            }
            else {
                return subscription;
            }
            var subscriptions = this._subscriptions;
            if (subscriptions === null) {
                this._subscriptions = [subscription];
            }
            else {
                subscriptions.push(subscription);
            }
            return subscription;
        };
        Subscription.prototype.remove = function (subscription) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        Subscription.EMPTY = (function (empty) {
            empty.closed = true;
            return empty;
        }(new Subscription()));
        return Subscription;
    }());
    exports.Subscription = Subscription;
    function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError.UnsubscriptionError) ? err.errors : err); }, []);
    }

    });

    unwrapExports(Subscription_1);
    var Subscription_2 = Subscription_1.Subscription;

    var rxSubscriber = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.rxSubscriber = (function () {
        return typeof Symbol === 'function'
            ? Symbol('rxSubscriber')
            : '@@rxSubscriber_' + Math.random();
    })();
    exports.$$rxSubscriber = exports.rxSubscriber;

    });

    unwrapExports(rxSubscriber);
    var rxSubscriber_1 = rxSubscriber.rxSubscriber;
    var rxSubscriber_2 = rxSubscriber.$$rxSubscriber;

    var Subscriber_1 = createCommonjsModule(function (module, exports) {
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });






    var Subscriber = (function (_super) {
        __extends(Subscriber, _super);
        function Subscriber(destinationOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this.syncErrorValue = null;
            _this.syncErrorThrown = false;
            _this.syncErrorThrowable = false;
            _this.isStopped = false;
            switch (arguments.length) {
                case 0:
                    _this.destination = Observer.empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        _this.destination = Observer.empty;
                        break;
                    }
                    if (typeof destinationOrNext === 'object') {
                        if (destinationOrNext instanceof Subscriber) {
                            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                            _this.destination = destinationOrNext;
                            destinationOrNext.add(_this);
                        }
                        else {
                            _this.syncErrorThrowable = true;
                            _this.destination = new SafeSubscriber(_this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    _this.syncErrorThrowable = true;
                    _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                    break;
            }
            return _this;
        }
        Subscriber.prototype[rxSubscriber.rxSubscriber] = function () { return this; };
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        Subscriber.prototype._unsubscribeAndRecycle = function () {
            var _parentOrParents = this._parentOrParents;
            this._parentOrParents = null;
            this.unsubscribe();
            this.closed = false;
            this.isStopped = false;
            this._parentOrParents = _parentOrParents;
            return this;
        };
        return Subscriber;
    }(Subscription_1.Subscription));
    exports.Subscriber = Subscriber;
    var SafeSubscriber = (function (_super) {
        __extends(SafeSubscriber, _super);
        function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this._parentSubscriber = _parentSubscriber;
            var next;
            var context = _this;
            if (isFunction_1.isFunction(observerOrNext)) {
                next = observerOrNext;
            }
            else if (observerOrNext) {
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (observerOrNext !== Observer.empty) {
                    context = Object.create(observerOrNext);
                    if (isFunction_1.isFunction(context.unsubscribe)) {
                        _this.add(context.unsubscribe.bind(context));
                    }
                    context.unsubscribe = _this.unsubscribe.bind(_this);
                }
            }
            _this._context = context;
            _this._next = next;
            _this._error = error;
            _this._complete = complete;
            return _this;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parentSubscriber = this._parentSubscriber;
                if (!config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                }
                else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                var useDeprecatedSynchronousErrorHandling = config.config.useDeprecatedSynchronousErrorHandling;
                if (this._error) {
                    if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, this._error, err);
                        this.unsubscribe();
                    }
                }
                else if (!_parentSubscriber.syncErrorThrowable) {
                    this.unsubscribe();
                    if (useDeprecatedSynchronousErrorHandling) {
                        throw err;
                    }
                    hostReportError_1.hostReportError(err);
                }
                else {
                    if (useDeprecatedSynchronousErrorHandling) {
                        _parentSubscriber.syncErrorValue = err;
                        _parentSubscriber.syncErrorThrown = true;
                    }
                    else {
                        hostReportError_1.hostReportError(err);
                    }
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            var _this = this;
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                if (this._complete) {
                    var wrappedComplete = function () { return _this._complete.call(_this._context); };
                    if (!config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(wrappedComplete);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                        this.unsubscribe();
                    }
                }
                else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                this.unsubscribe();
                if (config.config.useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            if (!config.config.useDeprecatedSynchronousErrorHandling) {
                throw new Error('bad call');
            }
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                if (config.config.useDeprecatedSynchronousErrorHandling) {
                    parent.syncErrorValue = err;
                    parent.syncErrorThrown = true;
                    return true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                    return true;
                }
            }
            return false;
        };
        SafeSubscriber.prototype._unsubscribe = function () {
            var _parentSubscriber = this._parentSubscriber;
            this._context = null;
            this._parentSubscriber = null;
            _parentSubscriber.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber));
    exports.SafeSubscriber = SafeSubscriber;

    });

    unwrapExports(Subscriber_1);
    var Subscriber_2 = Subscriber_1.Subscriber;
    var Subscriber_3 = Subscriber_1.SafeSubscriber;

    var canReportError_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    function canReportError(observer) {
        while (observer) {
            var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
            if (closed_1 || isStopped) {
                return false;
            }
            else if (destination && destination instanceof Subscriber_1.Subscriber) {
                observer = destination;
            }
            else {
                observer = null;
            }
        }
        return true;
    }
    exports.canReportError = canReportError;

    });

    unwrapExports(canReportError_1);
    var canReportError_2 = canReportError_1.canReportError;

    var toSubscriber_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });



    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
            if (nextOrObserver instanceof Subscriber_1.Subscriber) {
                return nextOrObserver;
            }
            if (nextOrObserver[rxSubscriber.rxSubscriber]) {
                return nextOrObserver[rxSubscriber.rxSubscriber]();
            }
        }
        if (!nextOrObserver && !error && !complete) {
            return new Subscriber_1.Subscriber(Observer.empty);
        }
        return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }
    exports.toSubscriber = toSubscriber;

    });

    unwrapExports(toSubscriber_1);
    var toSubscriber_2 = toSubscriber_1.toSubscriber;

    var observable = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();

    });

    unwrapExports(observable);
    var observable_1 = observable.observable;

    var noop_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function noop() { }
    exports.noop = noop;

    });

    unwrapExports(noop_1);
    var noop_2 = noop_1.noop;

    var pipe_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    function pipe() {
        var fns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fns[_i] = arguments[_i];
        }
        return pipeFromArray(fns);
    }
    exports.pipe = pipe;
    function pipeFromArray(fns) {
        if (!fns) {
            return noop_1.noop;
        }
        if (fns.length === 1) {
            return fns[0];
        }
        return function piped(input) {
            return fns.reduce(function (prev, fn) { return fn(prev); }, input);
        };
    }
    exports.pipeFromArray = pipeFromArray;

    });

    unwrapExports(pipe_1);
    var pipe_2 = pipe_1.pipe;
    var pipe_3 = pipe_1.pipeFromArray;

    var Observable_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });





    var Observable = (function () {
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        Observable.prototype.lift = function (operator) {
            var observable$$1 = new Observable();
            observable$$1.source = this;
            observable$$1.operator = operator;
            return observable$$1;
        };
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
            if (operator) {
                sink.add(operator.call(sink, this.source));
            }
            else {
                sink.add(this.source || (config.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                    this._subscribe(sink) :
                    this._trySubscribe(sink));
            }
            if (config.config.useDeprecatedSynchronousErrorHandling) {
                if (sink.syncErrorThrowable) {
                    sink.syncErrorThrowable = false;
                    if (sink.syncErrorThrown) {
                        throw sink.syncErrorValue;
                    }
                }
            }
            return sink;
        };
        Observable.prototype._trySubscribe = function (sink) {
            try {
                return this._subscribe(sink);
            }
            catch (err) {
                if (config.config.useDeprecatedSynchronousErrorHandling) {
                    sink.syncErrorThrown = true;
                    sink.syncErrorValue = err;
                }
                if (canReportError_1.canReportError(sink)) {
                    sink.error(err);
                }
                else {
                    console.warn(err);
                }
            }
        };
        Observable.prototype.forEach = function (next, promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
                var subscription;
                subscription = _this.subscribe(function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        if (subscription) {
                            subscription.unsubscribe();
                        }
                    }
                }, reject, resolve);
            });
        };
        Observable.prototype._subscribe = function (subscriber) {
            var source = this.source;
            return source && source.subscribe(subscriber);
        };
        Observable.prototype[observable.observable] = function () {
            return this;
        };
        Observable.prototype.pipe = function () {
            var operations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                operations[_i] = arguments[_i];
            }
            if (operations.length === 0) {
                return this;
            }
            return pipe_1.pipeFromArray(operations)(this);
        };
        Observable.prototype.toPromise = function (promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
                var value;
                _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
            });
        };
        Observable.create = function (subscribe) {
            return new Observable(subscribe);
        };
        return Observable;
    }());
    exports.Observable = Observable;
    function getPromiseCtor(promiseCtor) {
        if (!promiseCtor) {
            promiseCtor = config.config.Promise || Promise;
        }
        if (!promiseCtor) {
            throw new Error('no Promise impl found');
        }
        return promiseCtor;
    }

    });

    unwrapExports(Observable_1);
    var Observable_2 = Observable_1.Observable;

    /**
     * Library status codes
     */
    var StatusCodes;
    (function (StatusCodes) {
        StatusCodes["Ok"] = "OK";
        StatusCodes["ResultIsNotValidJSON"] = "RESULT_IS_NOT_VALID_JSON";
        StatusCodes["TimedOut"] = "CONNECTION_TIMED_OUT";
    })(StatusCodes || (StatusCodes = {}));
    /**
     * API boolean properties for extracting document images from document
     */
    var ExportImageTypes;
    (function (ExportImageTypes) {
        ExportImageTypes["Face"] = "exportFaceImage";
        ExportImageTypes["FullDocument"] = "exportFullDocumentImage";
        ExportImageTypes["Signature"] = "exportSignatureImage";
    })(ExportImageTypes || (ExportImageTypes = {}));
    var ScanExchangerCodes;
    (function (ScanExchangerCodes) {
        ScanExchangerCodes["Step01_RemoteCameraIsRequested"] = "STEP_1_REMOTE_CAMERA_IS_REQUESTED";
        ScanExchangerCodes["Step02_ExchangeLinkIsGenerated"] = "STEP_2_EXCHANGE_LINK_IS_GENERATED";
        ScanExchangerCodes["Step03_RemoteCameraIsPending"] = "STEP_3_REMOTE_CAMERA_IS_PENDING";
        ScanExchangerCodes["Step04_RemoteCameraIsOpen"] = "STEP_4_REMOTE_CAMERA_IS_OPEN";
        ScanExchangerCodes["Step05_ImageIsUploading"] = "STEP_5_IMAGE_IS_UPLOADING";
        ScanExchangerCodes["Step06_ImageIsProcessing"] = "STEP_6_IMAGE_IS_PROCESSING";
        ScanExchangerCodes["Step07_ResultIsAvailable"] = "STEP_7_RESULT_IS_AVAILABLE";
        ScanExchangerCodes["ErrorHappened"] = "ERROR_HAPPENED";
    })(ScanExchangerCodes || (ScanExchangerCodes = {}));

    var DEFAULT_ENDPOINT = 'https://api.microblink.com';
    /**
     * HTTP layer with Microblink API
     */
    var MicroblinkApi = /** @class */ (function () {
        function MicroblinkApi() {
            this.authorizationHeader = '';
            this.exportImages = false;
            this.exportFullDocumentImage = false;
            this.exportSignatureImage = false;
            this.exportFaceImage = false;
            this.detectGlare = false;
            this.anonymizeCardNumber = false;
            this.anonymizeIban = false;
            this.anonymizeCvv = false;
            this.anonymizeOwner = false;
            this.allowBlurFilter = false;
            this.anonymizeNetherlandsMrz = false;
            this.activeRequests = [];
            this.userId = '';
            this.isDataPersistingEnabled = true;
            this.endpoint = DEFAULT_ENDPOINT;
        }
        /**
         * Terminate request session with aborting all pending responses
         */
        MicroblinkApi.prototype.TerminateAll = function () {
            this.activeRequests.forEach(function (activeRequest) {
                activeRequest.abort();
            });
            // Clear array of all active requests when every request is terminated (aborted)
            this.activeRequests = [];
        };
        /**
         * Change authorization header value
         */
        MicroblinkApi.prototype.SetAuthorization = function (authorizationHeader) {
            this.authorizationHeader = authorizationHeader;
        };
        /**
         * Change which images to export for next request
         * @param exportImages is either a boolean flag which describes whether API should return extracted images in next response or an array of API properties
         */
        MicroblinkApi.prototype.SetExportImages = function (exportImages) {
            this.exportImages = exportImages;
        };
        /**
         * Change which images to export for next request
         * @param exportFullDocumentImage is a boolean flag which describes whether API should return extracted full document image in next response
         */
        MicroblinkApi.prototype.SetExportFullDocumentImage = function (exportFullDocumentImage) {
            this.exportFullDocumentImage = exportFullDocumentImage;
        };
        /**
         * Change which images to export for next request
         * @param exportSignatureImage is a boolean flag which describes whether API should return extracted signature image in next response
         */
        MicroblinkApi.prototype.SetExportSignatureImage = function (exportSignatureImage) {
            this.exportSignatureImage = exportSignatureImage;
        };
        /**
         * Change which images to export for next request
         * @param exportFaceImage is a boolean flag which describes whether API should return extracted face image in next response
         */
        MicroblinkApi.prototype.SetExportFaceImage = function (exportFaceImage) {
            this.exportFaceImage = exportFaceImage;
        };
        /**
         * Set detect glare option for next request
         * @param detectGlare is a boolean flag which describes whether API should return null for image segments where glare is detected
         */
        MicroblinkApi.prototype.SetDetectGlare = function (detectGlare) {
            this.detectGlare = detectGlare;
        };
        /**
         * Set allow blur filter option for next request
         * @param allowBlurFilter is a boolean flag which describes whether API should return null for image segments where blur is detected
         */
        MicroblinkApi.prototype.SetAllowBlurFilter = function (allowBlurFilter) {
            this.allowBlurFilter = allowBlurFilter;
        };
        /**
         * Change API endpoint
         * @param endpoint is API endpoint where Microblink API or Microblink API proxy is available
         */
        MicroblinkApi.prototype.SetEndpoint = function (endpoint) {
            this.endpoint = endpoint;
        };
        /**
         * Set anonymize card number (works on BLINK_CARD recognizer) for next request
         * @param anonymizeCardNumber is a boolean flag which describes whether API should return a base64 image of the scanned card with the card number anonymized
         */
        MicroblinkApi.prototype.SetAnonymizeCardNumber = function (anonymizeCardNumber) {
            this.anonymizeCardNumber = anonymizeCardNumber;
        };
        /**
         * Set anonymize card number (works on BLINK_CARD recognizer) for next request
         * @param anonymizeIbanNumber is a boolean flag which describes whether API should return a base64 image of the scanned card with the card number anonymized
         */
        MicroblinkApi.prototype.SetAnonymizeIban = function (anonymizeIban) {
            this.anonymizeIban = anonymizeIban;
        };
        /**
         * Set anonymize cvv (works on BLINK_CARD recognizer) for next request
         * @param anonymizeCvv is a boolean flag which describes whether API should return a base64 image of the scanned card with the cvv number anonymized
         */
        MicroblinkApi.prototype.SetAnonymizeCvv = function (anonymizeCvv) {
            this.anonymizeCvv = anonymizeCvv;
        };
        /**
         * Set anonymize owner (works on BLINK_CARD recognizer) for next request
         * @param anonymizeOwner is a boolean flag which describes whether API should return a base64 image of the scanned card with the owner name anonymized
         */
        MicroblinkApi.prototype.SetAnonymizeOwner = function (anonymizeOwner) {
            this.anonymizeOwner = anonymizeOwner;
        };
        /**
         * Set user identificator which will be stored with uploaded image
         * @param userId is any string which unique identifies user who use SDK and upload any image to API
         */
        MicroblinkApi.prototype.SetUserId = function (userId) {
            this.userId = userId;
        };
        /**
         * When Authorization is not set it is available to disable persisting of uploaded data, by default it is enabled
         * this should be disabled for every page where GDPR is not implemented and this is ability to disable data persisting
         * on some demo pages
         * @param isEnabled is flag which describes should or should not API persist uploaded data, be default it is enabled
         */
        MicroblinkApi.prototype.SetIsDataPersistingEnabled = function (isEnabled) {
            this.isDataPersistingEnabled = isEnabled;
        };
        /**
         * Set anonymize netherlandsMrz (works on BLINK_CARD recognizer) for next request
         * @param anonymizeNetherlandsMrz is a boolean flag which describes whether API should return a base64 image of the scanned card with the netherlands MRZ anonymized
         */
        MicroblinkApi.prototype.SetAnonymizeNetherlandsMrz = function (anonymizeNetherlandsMrz) {
            this.anonymizeNetherlandsMrz = anonymizeNetherlandsMrz;
        };
        /**
         * Execute remote recognition
         * @param recognizers is string or array of strings on which image will be processed
         * @param imageBase64 is Base64 encoded image which should contain document for processing
         * @param uploadProgress (optional) is XHR event listener for image upload to show upload progress bar on UI
         */
        MicroblinkApi.prototype.Recognize = function (recognizers, imageBase64, uploadProgress) {
            var _this = this;
            return new Observable_2(function (observer) {
                // Image should be as Base64 encoded file
                var body = {
                    imageBase64: imageBase64
                };
                // Recognizers could be one defined as string or multiple defined as string array
                if (typeof recognizers === 'string') {
                    body['recognizer'] = recognizers;
                }
                else {
                    body['recognizers'] = recognizers;
                }
                // Export images flag set if it is enabled
                if (_this.exportImages) {
                    body['exportImages'] = _this.exportImages;
                }
                // Export full document image flag set if it is enabled
                if (_this.exportFullDocumentImage) {
                    body['exportFullDocumentImage'] = true;
                }
                // Export signature image flag set if it is enabled
                if (_this.exportSignatureImage) {
                    body['exportSignatureImage'] = true;
                }
                // Export face image flag set if it is enabled
                if (_this.exportFaceImage) {
                    body['exportFaceImage'] = true;
                }
                // Detect glare flag set if it is enabled
                if (_this.detectGlare) {
                    body['detectGlare'] = true;
                }
                // Detect blur flag set if it is enabled
                if (_this.allowBlurFilter) {
                    body['allowBlurFilter'] = true;
                }
                // Anonymize card number flag set if it is enabled
                if (_this.anonymizeCardNumber) {
                    body['anonymizeCardNumber'] = true;
                }
                // Anonymize IBAN number flag set if it is enabled
                if (_this.anonymizeIban) {
                    body['anonymizeIban'] = true;
                }
                // Anonymize cvv flag set if it is enabled
                if (_this.anonymizeCvv) {
                    body['anonymizeCvv'] = true;
                }
                // Anonymize owner set if it is enabled
                if (_this.anonymizeOwner) {
                    body['anonymizeOwner'] = true;
                }
                // Set userId if it is defined
                if (_this.userId) {
                    body['userId'] = _this.userId;
                }
                // If it is set to FALSE then set disable data persisting flag
                if (_this.isDataPersistingEnabled === false) {
                    body['disableDataPersisting'] = true;
                }
                // If it is set to FALSE then set disable data persisting flag
                if (_this.anonymizeNetherlandsMrz) {
                    body['anonymizeNetherlandsMrz'] = true;
                }
                // Body data should be send as stringified JSON and as Content-type=application/json
                var data = JSON.stringify(body);
                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;
                if (uploadProgress) {
                    // FIX: timeout should not be set, because some client can have really slow uplink
                    // set timeout for file uploading
                    xhr.timeout = 40000;
                }
                xhr.open('POST', _this.endpoint + '/recognize/execute');
                xhr.setRequestHeader('Content-Type', 'application/json');
                // When Authorization header is not set results will be masked on server-side
                if (_this.isAuthorizationHeaderValid) {
                    xhr.setRequestHeader('Authorization', _this.authorizationHeader);
                }
                xhr.addEventListener('readystatechange', function () {
                    if (this.readyState === 4) {
                        var responseBody = null;
                        try {
                            // Return result as parsed JSON object
                            responseBody = JSON.parse(this.responseText);
                            // OCR result will be available ony on status 200 OK, otherwise some problem is with backend or api key
                            if (this.status === 200) {
                                observer.next(responseBody);
                                observer.complete();
                            }
                            else {
                                observer.error(responseBody);
                            }
                        }
                        catch (err) {
                            if (uploadProgress && this.status === 0) {
                                responseBody = {
                                    code: StatusCodes.TimedOut,
                                    message: 'Connection timed out. Please try again.'
                                };
                            }
                            else {
                                responseBody = {
                                    error: 'Result is not valid JSON',
                                    code: StatusCodes.ResultIsNotValidJSON,
                                    responseText: this.responseText
                                };
                            }
                            observer.error(responseBody);
                        }
                    }
                });
                xhr.onerror = function (error) {
                    observer.error(error);
                };
                if (uploadProgress) {
                    xhr.upload.addEventListener('progress', uploadProgress, false);
                    xhr.upload.addEventListener('load', uploadProgress, false);
                }
                xhr.send(data);
                // append the request to active stack
                _this.activeRequests.push(xhr);
            });
        };
        Object.defineProperty(MicroblinkApi.prototype, "isAuthorizationHeaderValid", {
            /**
             * Authorization header offline validator, just check for Authorization header format before sending it to the API
             */
            get: function () {
                if (this.authorizationHeader.startsWith('Bearer ') ||
                    this.authorizationHeader.startsWith('bearer ') ||
                    this.authorizationHeader.startsWith('Basic ') ||
                    this.authorizationHeader.startsWith('basic ')) {
                    return true;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        return MicroblinkApi;
    }());

    /**
     * Helper for get detailed information from the frame of the image as RAW pixels array, with defined width and height
     */
    var FrameHelper = /** @class */ (function () {
        function FrameHelper() {
        }
        /**
         * Get frame quality
         * @param pixelData is ImageData from `canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height)`
         */
        FrameHelper.getFrameQuality = function (pixelData) {
            return this.calculateFrameQuality(pixelData.data, pixelData.width, pixelData.height);
        };
        /**
         * Calculate frame quality
         * @param rgbaImgData is an RGB array (3n)=>RED, (3n+1)=>GREEN, (3n+2)=>BLUE, where n is pixel index in 2D grid
         * @param width is the frame horizontal dimension in pixels
         * @param height is the frame vertical dimension in pixels
         */
        FrameHelper.calculateFrameQuality = function (rgbaImgData, width, height) {
            var vertScanLineNum = 28;
            var horizScanLineNum = 20;
            var totalStrength = 0;
            var sampleNum = 0;
            for (var i = 0; i < vertScanLineNum; i++) {
                var distance = parseInt((width / (vertScanLineNum + 1)).toString(), 10);
                var col = parseInt((distance * i + distance / 2).toString(), 10);
                for (var row = 1; row < height - 1; row++) {
                    var curPixel = this.getIntensity(rgbaImgData, row, col, width);
                    var prevPixel = this.getIntensity(rgbaImgData, row - 1, col, width);
                    var nextPixel = this.getIntensity(rgbaImgData, row + 1, col, width);
                    var lastDiff = prevPixel - curPixel;
                    var currDiff = curPixel - nextPixel;
                    var secondDiff = currDiff - lastDiff;
                    sampleNum += 1;
                    totalStrength += secondDiff * secondDiff;
                }
            }
            for (var i = 0; i < horizScanLineNum; i++) {
                var distance = parseInt((height / (horizScanLineNum + 1)).toString(), 10);
                var row = parseInt((distance * i + distance / 2).toString(), 10);
                for (var col = 1; col < width - 1; col++) {
                    var curPixel = this.getIntensity(rgbaImgData, row, col, width);
                    var prevPixel = this.getIntensity(rgbaImgData, row, col - 1, width);
                    var nextPixel = this.getIntensity(rgbaImgData, row, col + 1, width);
                    var lastDiff = prevPixel - curPixel;
                    var currDiff = curPixel - nextPixel;
                    var secondDiff = currDiff - lastDiff;
                    sampleNum += 1;
                    totalStrength += secondDiff * secondDiff;
                }
            }
            var res = totalStrength / sampleNum;
            var qratio = parseFloat((width * height).toString()) / (640.0 * 480.0);
            if (qratio > 1.0) {
                if (qratio > 10.0)
                    qratio = 10.0;
                res /= qratio;
            }
            else {
                res *= qratio;
            }
            return res;
        };
        /**
         * Get pixel intensity
         * @param rgbaImgData is an RGB array (3n)=>RED, (3n+1)=>GREEN, (3n+2)=>BLUE, where n is pixel index in 2D grid
         * @param row is an row of the pixel in the frame
         * @param col is na column of the pixel in the frame
         * @param width is the frame horizontal dimension in pixels
         */
        FrameHelper.getIntensity = function (rgbaImgData, row, col, width) {
            var baseIdx = (row * width + col) * 4;
            var r = rgbaImgData[baseIdx];
            var g = rgbaImgData[baseIdx + 1];
            var b = rgbaImgData[baseIdx + 2];
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        };
        return FrameHelper;
    }());

    var FIRESTORE_COLLECTION_ID = 'scans';
    // This should be in try/catch block because firebase could not be configured
    // this is helper only for optional feature "Desktop to mobile"
    try {
        // NOTE: avoid use of shortcut `firestore` instead of `firebase.firestore()` beacause this produce error in
        // Codepen and jsFiddle environment!
        // const settings = { timestampsInSnapshots: true } // deprecated, new firebase version released
        firebase.firestore().settings({});
    }
    catch (e) {
        /* tslint:disable:no-empty */
    }
    var ScanExchangeHelper = /** @class */ (function () {
        function ScanExchangeHelper() {
        }
        /**
         * Create Firestore object for scan data exchanging
         * @param data is optional object with data which will be added to the created Firestore object
         */
        ScanExchangeHelper.createScanExchanger = function (data) {
            if (data === void 0) { data = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var scan;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            scan = firebase
                                .firestore()
                                .collection(FIRESTORE_COLLECTION_ID)
                                .doc();
                            // Define default status STEP_01...
                            data.status = ScanExchangerCodes.Step01_RemoteCameraIsRequested;
                            // For easier scanId fetching append it to the document
                            data.scanId = scan.id;
                            // Wait until data is set
                            return [4 /*yield*/, scan.set(data)
                                // Return promise
                            ];
                        case 1:
                            // Wait until data is set
                            _a.sent();
                            // Return promise
                            return [2 /*return*/, scan];
                    }
                });
            });
        };
        /**
         * Generate QR code as base64 image for specific URL
         * @param url is string
         */
        ScanExchangeHelper.generateQRCode = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var qrCodeAsBase64, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            qrCodeAsBase64 = null;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, QRCode.toDataURL(url, {
                                    errorCorrectionLevel: 'H',
                                    type: 'image/png',
                                    width: 1024,
                                    margin: 4
                                })];
                        case 2:
                            qrCodeAsBase64 = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/, qrCodeAsBase64];
                    }
                });
            });
        };
        return ScanExchangeHelper;
    }());

    /**
     * @license crypto-ts
     * MIT license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Hex = /** @class */ (function () {
        function Hex() {
        }
        /**
         * Converts a word array to a hex string.
         *
         * \@example
         *
         *     let hexString = Hex.stringify(wordArray);
         * @param {?} wordArray The word array.
         *
         * @return {?} The hex string.
         *
         */
        Hex.stringify = /**
         * Converts a word array to a hex string.
         *
         * \@example
         *
         *     let hexString = Hex.stringify(wordArray);
         * @param {?} wordArray The word array.
         *
         * @return {?} The hex string.
         *
         */
        function (wordArray) {
            // Convert
            var /** @type {?} */ hexChars = [];
            for (var /** @type {?} */ i = 0; i < wordArray.sigBytes; i++) {
                var /** @type {?} */ bite = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((bite & 0x0f).toString(16));
            }
            return hexChars.join('');
        };
        /**
         * Converts a hex string to a word array.
         *
         * \@example
         *
         *     let wordArray = Hex.parse(hexString);
         * @param {?} hexStr The hex string.
         *
         * @return {?} The word array.
         *
         */
        Hex.parse = /**
         * Converts a hex string to a word array.
         *
         * \@example
         *
         *     let wordArray = Hex.parse(hexString);
         * @param {?} hexStr The hex string.
         *
         * @return {?} The word array.
         *
         */
        function (hexStr) {
            // Shortcut
            var /** @type {?} */ hexStrLength = hexStr.length;
            // Convert
            var /** @type {?} */ words = [];
            for (var /** @type {?} */ i = 0; i < hexStrLength; i += 2) {
                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
            }
            return new WordArray(words, hexStrLength / 2);
        };
        return Hex;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WordArray = /** @class */ (function () {
        /**
         * Initializes a newly created word array.
         *
         * @param words (Optional) An array of 32-bit words.
         * @param sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     let wordArray = new WordArray();
         *     let wordArray = new WordArray([0x00010203, 0x04050607]);
         *     let wordArray = new WordArray([0x00010203, 0x04050607], 6);
         */
        function WordArray(words, sigBytes) {
            this.words = words || [];
            if (sigBytes !== undefined) {
                this.sigBytes = sigBytes;
            }
            else {
                this.sigBytes = this.words.length * 4;
            }
        }
        /**
         * Creates a word array filled with random bytes.
         *
         * \@example
         *
         *     let wordArray = WordArray.random(16);
         * @param {?} nBytes The number of random bytes to generate.
         *
         * @return {?} The random word array.
         *
         */
        WordArray.random = /**
         * Creates a word array filled with random bytes.
         *
         * \@example
         *
         *     let wordArray = WordArray.random(16);
         * @param {?} nBytes The number of random bytes to generate.
         *
         * @return {?} The random word array.
         *
         */
        function (nBytes) {
            var /** @type {?} */ words = [];
            var /** @type {?} */ r = (function (m_w) {
                var /** @type {?} */ m_z = 0x3ade68b1;
                var /** @type {?} */ mask = 0xffffffff;
                return function () {
                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
                    var /** @type {?} */ result = ((m_z << 0x10) + m_w) & mask;
                    result /= 0x100000000;
                    result += 0.5;
                    return result * (Math.random() > .5 ? 1 : -1);
                };
            });
            for (var /** @type {?} */ i = 0, /** @type {?} */ rcache = void 0; i < nBytes; i += 4) {
                var /** @type {?} */ _r = r((rcache || Math.random()) * 0x100000000);
                rcache = _r() * 0x3ade67b7;
                words.push((_r() * 0x100000000) | 0);
            }
            return new WordArray(words, nBytes);
        };
        /**
         * Converts this word array to a string.
         *
         * @param encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
         *
         * @return The stringified word array.
         *
         * @example
         *
         *     let string = wordArray + '';
         *     let string = wordArray.toString();
         *     let string = wordArray.toString(CryptoJS.enc.Utf8);
         */
        /**
         * Converts this word array to a string.
         *
         * \@example
         *
         *     let string = wordArray + '';
         *     let string = wordArray.toString();
         *     let string = wordArray.toString(CryptoJS.enc.Utf8);
         * @param {?=} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
         *
         * @return {?} The stringified word array.
         *
         */
        WordArray.prototype.toString = /**
         * Converts this word array to a string.
         *
         * \@example
         *
         *     let string = wordArray + '';
         *     let string = wordArray.toString();
         *     let string = wordArray.toString(CryptoJS.enc.Utf8);
         * @param {?=} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
         *
         * @return {?} The stringified word array.
         *
         */
        function (encoder) {
            return (encoder || Hex).stringify(this);
        };
        /**
         * Concatenates a word array to this word array.
         *
         * @param wordArray The word array to append.
         *
         * @return This word array.
         *
         * @example
         *
         *     wordArray1.concat(wordArray2);
         */
        /**
         * Concatenates a word array to this word array.
         *
         * \@example
         *
         *     wordArray1.concat(wordArray2);
         * @param {?} wordArray The word array to append.
         *
         * @return {?} This word array.
         *
         */
        WordArray.prototype.concat = /**
         * Concatenates a word array to this word array.
         *
         * \@example
         *
         *     wordArray1.concat(wordArray2);
         * @param {?} wordArray The word array to append.
         *
         * @return {?} This word array.
         *
         */
        function (wordArray) {
            // Clamp excess bits
            this.clamp();
            // Concat
            if (this.sigBytes % 4) {
                // Copy one byte at a time
                for (var /** @type {?} */ i = 0; i < wordArray.sigBytes; i++) {
                    var /** @type {?} */ thatByte = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    this.words[(this.sigBytes + i) >>> 2] |= thatByte << (24 - ((this.sigBytes + i) % 4) * 8);
                }
            }
            else {
                // Copy one word at a time
                for (var /** @type {?} */ i = 0; i < wordArray.sigBytes; i += 4) {
                    this.words[(this.sigBytes + i) >>> 2] = wordArray.words[i >>> 2];
                }
            }
            this.sigBytes += wordArray.sigBytes;
            // Chainable
            return this;
        };
        /**
         * Removes insignificant bits.
         *
         * @example
         *
         *     wordArray.clamp();
         */
        /**
         * Removes insignificant bits.
         *
         * \@example
         *
         *     wordArray.clamp();
         * @return {?}
         */
        WordArray.prototype.clamp = /**
         * Removes insignificant bits.
         *
         * \@example
         *
         *     wordArray.clamp();
         * @return {?}
         */
        function () {
            // Clamp
            this.words[this.sigBytes >>> 2] &= 0xffffffff << (32 - (this.sigBytes % 4) * 8);
            this.words.length = Math.ceil(this.sigBytes / 4);
        };
        /**
         * Creates a copy of this word array.
         *
         * @return The clone.
         *
         * @example
         *
         *     let clone = wordArray.clone();
         */
        /**
         * Creates a copy of this word array.
         *
         * \@example
         *
         *     let clone = wordArray.clone();
         * @return {?} The clone.
         *
         */
        WordArray.prototype.clone = /**
         * Creates a copy of this word array.
         *
         * \@example
         *
         *     let clone = wordArray.clone();
         * @return {?} The clone.
         *
         */
        function () {
            return new WordArray(this.words.slice(0), this.sigBytes);
        };
        return WordArray;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Latin1 = /** @class */ (function () {
        function Latin1() {
        }
        /**
         * Converts a word array to a Latin1 string.
         *
         * \@example
         *
         *     let latin1String = Latin1.stringify(wordArray);
         * @param {?} wordArray The word array.
         *
         * @return {?} The Latin1 string.
         *
         */
        Latin1.stringify = /**
         * Converts a word array to a Latin1 string.
         *
         * \@example
         *
         *     let latin1String = Latin1.stringify(wordArray);
         * @param {?} wordArray The word array.
         *
         * @return {?} The Latin1 string.
         *
         */
        function (wordArray) {
            // Convert
            var /** @type {?} */ latin1Chars = [];
            for (var /** @type {?} */ i = 0; i < wordArray.sigBytes; i++) {
                var /** @type {?} */ bite = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                latin1Chars.push(String.fromCharCode(bite));
            }
            return latin1Chars.join('');
        };
        /**
         * Converts a Latin1 string to a word array.
         *
         * \@example
         *
         *     let wordArray = Latin1.parse(latin1String);
         * @param {?} latin1Str The Latin1 string.
         *
         * @return {?} The word array.
         *
         */
        Latin1.parse = /**
         * Converts a Latin1 string to a word array.
         *
         * \@example
         *
         *     let wordArray = Latin1.parse(latin1String);
         * @param {?} latin1Str The Latin1 string.
         *
         * @return {?} The word array.
         *
         */
        function (latin1Str) {
            // Shortcut
            var /** @type {?} */ latin1StrLength = latin1Str.length;
            // Convert
            var /** @type {?} */ words = [];
            for (var /** @type {?} */ i = 0; i < latin1StrLength; i++) {
                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
            }
            return new WordArray(words, latin1StrLength);
        };
        return Latin1;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Utf8 = /** @class */ (function () {
        function Utf8() {
        }
        /**
         * Converts a word array to a UTF-8 string.
         *
         * \@example
         *
         *     let utf8String = Utf8.stringify(wordArray);
         * @param {?} wordArray The word array.
         *
         * @return {?} The UTF-8 string.
         *
         */
        Utf8.stringify = /**
         * Converts a word array to a UTF-8 string.
         *
         * \@example
         *
         *     let utf8String = Utf8.stringify(wordArray);
         * @param {?} wordArray The word array.
         *
         * @return {?} The UTF-8 string.
         *
         */
        function (wordArray) {
            try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            }
            catch (/** @type {?} */ e) {
                throw new Error('Malformed UTF-8 data');
            }
        };
        /**
         * Converts a UTF-8 string to a word array.
         *
         * \@example
         *
         *     let wordArray = Utf8.parse(utf8String);
         * @param {?} utf8Str The UTF-8 string.
         *
         * @return {?} The word array.
         *
         */
        Utf8.parse = /**
         * Converts a UTF-8 string to a word array.
         *
         * \@example
         *
         *     let wordArray = Utf8.parse(utf8String);
         * @param {?} utf8Str The UTF-8 string.
         *
         * @return {?} The word array.
         *
         */
        function (utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
        };
        return Utf8;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var  /**
     * @abstract
     */
    BufferedBlockAlgorithm = /** @class */ (function () {
        function BufferedBlockAlgorithm(cfg) {
            this._minBufferSize = 0;
            this.cfg = Object.assign({
                blockSize: 1
            }, cfg);
            // Initial values
            this._data = new WordArray();
            this._nDataBytes = 0;
        }
        /**
         * Resets this block algorithm's data buffer to its initial state.
         *
         * @example
         *
         *     bufferedBlockAlgorithm.reset();
         */
        /**
         * Resets this block algorithm's data buffer to its initial state.
         *
         * \@example
         *
         *     bufferedBlockAlgorithm.reset();
         * @return {?}
         */
        BufferedBlockAlgorithm.prototype.reset = /**
         * Resets this block algorithm's data buffer to its initial state.
         *
         * \@example
         *
         *     bufferedBlockAlgorithm.reset();
         * @return {?}
         */
        function () {
            // Initial values
            this._data = new WordArray();
            this._nDataBytes = 0;
        };
        /**
         * Adds new data to this block algorithm's buffer.
         *
         * @param data The data to append. Strings are converted to a WordArray using UTF-8.
         *
         * @example
         *
         *     bufferedBlockAlgorithm._append('data');
         *     bufferedBlockAlgorithm._append(wordArray);
         */
        /**
         * Adds new data to this block algorithm's buffer.
         *
         * \@example
         *
         *     bufferedBlockAlgorithm._append('data');
         *     bufferedBlockAlgorithm._append(wordArray);
         * @param {?} data The data to append. Strings are converted to a WordArray using UTF-8.
         *
         * @return {?}
         */
        BufferedBlockAlgorithm.prototype._append = /**
         * Adds new data to this block algorithm's buffer.
         *
         * \@example
         *
         *     bufferedBlockAlgorithm._append('data');
         *     bufferedBlockAlgorithm._append(wordArray);
         * @param {?} data The data to append. Strings are converted to a WordArray using UTF-8.
         *
         * @return {?}
         */
        function (data) {
            // Convert string to WordArray, else assume WordArray already
            if (typeof data === 'string') {
                data = Utf8.parse(data);
            }
            // Append
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
        };
        /**
         * Processes available data blocks.
         *
         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
         *
         * @param doFlush Whether all blocks and partial blocks should be processed.
         *
         * @return The processed data.
         *
         * @example
         *
         *     let processedData = bufferedBlockAlgorithm._process();
         *     let processedData = bufferedBlockAlgorithm._process(!!'flush');
         */
        /**
         * Processes available data blocks.
         *
         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
         *
         * \@example
         *
         *     let processedData = bufferedBlockAlgorithm._process();
         *     let processedData = bufferedBlockAlgorithm._process(!!'flush');
         * @param {?=} doFlush Whether all blocks and partial blocks should be processed.
         *
         * @return {?} The processed data.
         *
         */
        BufferedBlockAlgorithm.prototype._process = /**
         * Processes available data blocks.
         *
         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
         *
         * \@example
         *
         *     let processedData = bufferedBlockAlgorithm._process();
         *     let processedData = bufferedBlockAlgorithm._process(!!'flush');
         * @param {?=} doFlush Whether all blocks and partial blocks should be processed.
         *
         * @return {?} The processed data.
         *
         */
        function (doFlush) {
            if (!this.cfg.blockSize) {
                throw new Error('missing blockSize in config');
            }
            // Shortcuts
            var /** @type {?} */ blockSizeBytes = this.cfg.blockSize * 4;
            // Count blocks ready
            var /** @type {?} */ nBlocksReady = this._data.sigBytes / blockSizeBytes;
            if (doFlush) {
                // Round up to include partial blocks
                nBlocksReady = Math.ceil(nBlocksReady);
            }
            else {
                // Round down to include only full blocks,
                // less the number of blocks that must remain in the buffer
                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }
            // Count words ready
            var /** @type {?} */ nWordsReady = nBlocksReady * this.cfg.blockSize;
            // Count bytes ready
            var /** @type {?} */ nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
            // Process blocks
            var /** @type {?} */ processedWords;
            if (nWordsReady) {
                for (var /** @type {?} */ offset = 0; offset < nWordsReady; offset += this.cfg.blockSize) {
                    // Perform concrete-algorithm logic
                    this._doProcessBlock(this._data.words, offset);
                }
                // Remove processed words
                processedWords = this._data.words.splice(0, nWordsReady);
                this._data.sigBytes -= nBytesReady;
            }
            // Return processed words
            return new WordArray(processedWords, nBytesReady);
        };
        /**
         * Creates a copy of this object.
         *
         * @return The clone.
         *
         * @example
         *
         *     let clone = bufferedBlockAlgorithm.clone();
         */
        /**
         * Creates a copy of this object.
         *
         * \@example
         *
         *     let clone = bufferedBlockAlgorithm.clone();
         * @return {?} The clone.
         *
         */
        BufferedBlockAlgorithm.prototype.clone = /**
         * Creates a copy of this object.
         *
         * \@example
         *
         *     let clone = bufferedBlockAlgorithm.clone();
         * @return {?} The clone.
         *
         */
        function () {
            var /** @type {?} */ clone = this.constructor();
            for (var /** @type {?} */ attr in this) {
                if (this.hasOwnProperty(attr)) {
                    clone[attr] = this[attr];
                }
            }
            clone._data = this._data.clone();
            return clone;
        };
        return BufferedBlockAlgorithm;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Base = /** @class */ (function () {
        function Base() {
        }
        return Base;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CipherParams = /** @class */ (function (_super) {
        __extends(CipherParams, _super);
        function CipherParams(cipherParams) {
            var _this = _super.call(this) || this;
            _this.ciphertext = cipherParams.ciphertext;
            _this.key = cipherParams.key;
            _this.iv = cipherParams.iv;
            _this.salt = cipherParams.salt;
            _this.algorithm = cipherParams.algorithm;
            _this.mode = cipherParams.mode;
            _this.padding = cipherParams.padding;
            _this.blockSize = cipherParams.blockSize;
            _this.formatter = cipherParams.formatter;
            return _this;
        }
        /**
         * @param {?} additionalParams
         * @return {?}
         */
        CipherParams.prototype.extend = /**
         * @param {?} additionalParams
         * @return {?}
         */
        function (additionalParams) {
            if (additionalParams.ciphertext !== undefined) {
                this.ciphertext = additionalParams.ciphertext;
            }
            if (additionalParams.key !== undefined) {
                this.key = additionalParams.key;
            }
            if (additionalParams.iv !== undefined) {
                this.iv = additionalParams.iv;
            }
            if (additionalParams.salt !== undefined) {
                this.salt = additionalParams.salt;
            }
            if (additionalParams.algorithm !== undefined) {
                this.algorithm = additionalParams.algorithm;
            }
            if (additionalParams.mode !== undefined) {
                this.mode = additionalParams.mode;
            }
            if (additionalParams.padding !== undefined) {
                this.padding = additionalParams.padding;
            }
            if (additionalParams.blockSize !== undefined) {
                this.blockSize = additionalParams.blockSize;
            }
            if (additionalParams.formatter !== undefined) {
                this.formatter = additionalParams.formatter;
            }
            return this;
        };
        /**
         * Converts this cipher params object to a string.
         *
         * @throws Error If neither the formatter nor the default formatter is set.
         *
         * \@example
         *
         *     let string = cipherParams + '';
         *     let string = cipherParams.toString();
         *     let string = cipherParams.toString(CryptoJS.format.OpenSSL);
         * @param {?=} formatter (Optional) The formatting strategy to use.
         *
         * @return {?} The stringified cipher params.
         *
         */
        CipherParams.prototype.toString = /**
         * Converts this cipher params object to a string.
         *
         * @throws Error If neither the formatter nor the default formatter is set.
         *
         * \@example
         *
         *     let string = cipherParams + '';
         *     let string = cipherParams.toString();
         *     let string = cipherParams.toString(CryptoJS.format.OpenSSL);
         * @param {?=} formatter (Optional) The formatting strategy to use.
         *
         * @return {?} The stringified cipher params.
         *
         */
        function (formatter) {
            if (formatter) {
                return formatter.stringify(this);
            }
            else if (this.formatter) {
                return this.formatter.stringify(this);
            }
            else {
                throw new Error('cipher needs a formatter to be able to convert the result into a string');
            }
        };
        return CipherParams;
    }(Base));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Base64 = /** @class */ (function () {
        function Base64() {
        }
        /**
         * Converts a word array to a Base64 string.
         *
         * \@example
         *
         *     let base64String = Base64.stringify(wordArray);
         * @param {?} wordArray The word array.
         *
         * @return {?} The Base64 string.
         *
         */
        Base64.stringify = /**
         * Converts a word array to a Base64 string.
         *
         * \@example
         *
         *     let base64String = Base64.stringify(wordArray);
         * @param {?} wordArray The word array.
         *
         * @return {?} The Base64 string.
         *
         */
        function (wordArray) {
            // Clamp excess bits
            wordArray.clamp();
            // Convert
            var /** @type {?} */ base64Chars = [];
            for (var /** @type {?} */ i = 0; i < wordArray.sigBytes; i += 3) {
                var /** @type {?} */ byte1 = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                var /** @type {?} */ byte2 = (wordArray.words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
                var /** @type {?} */ byte3 = (wordArray.words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;
                var /** @type {?} */ triplet = (byte1 << 16) | (byte2 << 8) | byte3;
                for (var /** @type {?} */ j = 0; (j < 4) && (i + j * 0.75 < wordArray.sigBytes); j++) {
                    base64Chars.push(this._map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
                }
            }
            // Add padding
            var /** @type {?} */ paddingChar = this._map.charAt(64);
            if (paddingChar) {
                while (base64Chars.length % 4) {
                    base64Chars.push(paddingChar);
                }
            }
            return base64Chars.join('');
        };
        /**
         * Converts a Base64 string to a word array.
         *
         * \@example
         *
         *     let wordArray = Base64.parse(base64String);
         * @param {?} base64Str The Base64 string.
         *
         * @return {?} The word array.
         *
         */
        Base64.parse = /**
         * Converts a Base64 string to a word array.
         *
         * \@example
         *
         *     let wordArray = Base64.parse(base64String);
         * @param {?} base64Str The Base64 string.
         *
         * @return {?} The word array.
         *
         */
        function (base64Str) {
            // Shortcuts
            var /** @type {?} */ base64StrLength = base64Str.length;
            if (this._reverseMap === undefined) {
                this._reverseMap = [];
                for (var /** @type {?} */ j = 0; j < this._map.length; j++) {
                    this._reverseMap[this._map.charCodeAt(j)] = j;
                }
            }
            // Ignore padding
            var /** @type {?} */ paddingChar = this._map.charAt(64);
            if (paddingChar) {
                var /** @type {?} */ paddingIndex = base64Str.indexOf(paddingChar);
                if (paddingIndex !== -1) {
                    base64StrLength = paddingIndex;
                }
            }
            // Convert
            return this.parseLoop(base64Str, base64StrLength, this._reverseMap);
        };
        /**
         * @param {?} base64Str
         * @param {?} base64StrLength
         * @param {?} reverseMap
         * @return {?}
         */
        Base64.parseLoop = /**
         * @param {?} base64Str
         * @param {?} base64StrLength
         * @param {?} reverseMap
         * @return {?}
         */
        function (base64Str, base64StrLength, reverseMap) {
            var /** @type {?} */ words = [];
            var /** @type {?} */ nBytes = 0;
            for (var /** @type {?} */ i = 0; i < base64StrLength; i++) {
                if (i % 4) {
                    var /** @type {?} */ bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
                    var /** @type {?} */ bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
                    words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
                    nBytes++;
                }
            }
            return new WordArray(words, nBytes);
        };
        Base64._map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        Base64._reverseMap = undefined;
        return Base64;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var OpenSSL = /** @class */ (function () {
        function OpenSSL() {
        }
        /**
         * Converts a cipher params object to an OpenSSL-compatible string.
         *
         * \@example
         *
         *     let openSSLString = OpenSSLFormatter.stringify(cipherParams);
         * @param {?} cipherParams The cipher params object.
         *
         * @return {?} The OpenSSL-compatible string.
         *
         */
        OpenSSL.stringify = /**
         * Converts a cipher params object to an OpenSSL-compatible string.
         *
         * \@example
         *
         *     let openSSLString = OpenSSLFormatter.stringify(cipherParams);
         * @param {?} cipherParams The cipher params object.
         *
         * @return {?} The OpenSSL-compatible string.
         *
         */
        function (cipherParams) {
            if (!cipherParams.ciphertext) {
                throw new Error('missing ciphertext in params');
            }
            // Shortcuts
            var /** @type {?} */ ciphertext = cipherParams.ciphertext;
            var /** @type {?} */ salt = cipherParams.salt;
            // Format
            var /** @type {?} */ wordArray;
            if (salt) {
                if (typeof salt === 'string') {
                    throw new Error('salt is expected to be a WordArray');
                }
                wordArray = (new WordArray([0x53616c74, 0x65645f5f])).concat(salt).concat(ciphertext);
            }
            else {
                wordArray = ciphertext;
            }
            return wordArray.toString(Base64);
        };
        /**
         * Converts an OpenSSL-compatible string to a cipher params object.
         *
         * \@example
         *
         *     let cipherParams = OpenSSLFormatter.parse(openSSLString);
         * @param {?} openSSLStr The OpenSSL-compatible string.
         *
         * @return {?} The cipher params object.
         *
         */
        OpenSSL.parse = /**
         * Converts an OpenSSL-compatible string to a cipher params object.
         *
         * \@example
         *
         *     let cipherParams = OpenSSLFormatter.parse(openSSLString);
         * @param {?} openSSLStr The OpenSSL-compatible string.
         *
         * @return {?} The cipher params object.
         *
         */
        function (openSSLStr) {
            // Parse base64
            var /** @type {?} */ ciphertext = Base64.parse(openSSLStr);
            // Test for salt
            var /** @type {?} */ salt;
            if (ciphertext.words[0] === 0x53616c74 && ciphertext.words[1] === 0x65645f5f) {
                // Extract salt
                salt = new WordArray(ciphertext.words.slice(2, 4));
                // Remove salt from ciphertext
                ciphertext.words.splice(0, 4);
                ciphertext.sigBytes -= 16;
            }
            return new CipherParams({ ciphertext: ciphertext, salt: salt });
        };
        return OpenSSL;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SerializableCipher = /** @class */ (function () {
        function SerializableCipher() {
        }
        /**
         * Encrypts a message.
         *
         * \@example
         *
         *     let ciphertextParams = SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
         *     let ciphertextParams = SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
         *     let ciphertextParams = SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, {
         *       iv: iv,
         *       format: CryptoJS.format.OpenSSL
         *     });
         * @param {?} cipher The cipher algorithm to use.
         * @param {?} message The message to encrypt.
         * @param {?} key The key.
         * @param {?=} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {?} A cipher params object.
         *
         */
        SerializableCipher.encrypt = /**
         * Encrypts a message.
         *
         * \@example
         *
         *     let ciphertextParams = SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
         *     let ciphertextParams = SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
         *     let ciphertextParams = SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, {
         *       iv: iv,
         *       format: CryptoJS.format.OpenSSL
         *     });
         * @param {?} cipher The cipher algorithm to use.
         * @param {?} message The message to encrypt.
         * @param {?} key The key.
         * @param {?=} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {?} A cipher params object.
         *
         */
        function (cipher, message, key, cfg) {
            // Apply config defaults
            var /** @type {?} */ config = Object.assign({}, this.cfg, cfg);
            // Encrypt
            var /** @type {?} */ encryptor = cipher.createEncryptor(key, config);
            var /** @type {?} */ ciphertext = encryptor.finalize(message);
            // Create and return serializable cipher params
            return new CipherParams({
                ciphertext: ciphertext,
                key: key,
                iv: encryptor.cfg.iv,
                algorithm: cipher,
                mode: (/** @type {?} */ (encryptor.cfg)).mode,
                padding: (/** @type {?} */ (encryptor.cfg)).padding,
                blockSize: encryptor.cfg.blockSize,
                formatter: config.format
            });
        };
        /**
         * Decrypts serialized ciphertext.
         *
         * \@example
         *
         *     let plaintext = SerializableCipher.decrypt(
         *         AESAlgorithm,
         *         formattedCiphertext,
         *         key, {
         *             iv: iv,
         *             format: CryptoJS.format.OpenSSL
         *         }
         *     );
         *
         *     let plaintext = SerializableCipher.decrypt(
         *         AESAlgorithm,
         *         ciphertextParams,
         *         key, {
         *             iv: iv,
         *             format: CryptoJS.format.OpenSSL
         *         }
         *     );
         * @param {?} cipher The cipher algorithm to use.
         * @param {?} ciphertext The ciphertext to decrypt.
         * @param {?} key The key.
         * @param {?=} optionalCfg
         * @return {?} The plaintext.
         *
         */
        SerializableCipher.decrypt = /**
         * Decrypts serialized ciphertext.
         *
         * \@example
         *
         *     let plaintext = SerializableCipher.decrypt(
         *         AESAlgorithm,
         *         formattedCiphertext,
         *         key, {
         *             iv: iv,
         *             format: CryptoJS.format.OpenSSL
         *         }
         *     );
         *
         *     let plaintext = SerializableCipher.decrypt(
         *         AESAlgorithm,
         *         ciphertextParams,
         *         key, {
         *             iv: iv,
         *             format: CryptoJS.format.OpenSSL
         *         }
         *     );
         * @param {?} cipher The cipher algorithm to use.
         * @param {?} ciphertext The ciphertext to decrypt.
         * @param {?} key The key.
         * @param {?=} optionalCfg
         * @return {?} The plaintext.
         *
         */
        function (cipher, ciphertext, key, optionalCfg) {
            // Apply config defaults
            var /** @type {?} */ cfg = Object.assign({}, this.cfg, optionalCfg);
            if (!cfg.format) {
                throw new Error('could not determine format');
            }
            // Convert string to CipherParams
            ciphertext = this._parse(ciphertext, cfg.format);
            if (!ciphertext.ciphertext) {
                throw new Error('could not determine ciphertext');
            }
            // Decrypt
            var /** @type {?} */ plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
            return plaintext;
        };
        /**
         * Converts serialized ciphertext to CipherParams,
         * else assumed CipherParams already and returns ciphertext unchanged.
         *
         * \@example
         *
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
         * @param {?} ciphertext The ciphertext.
         * @param {?} format The formatting strategy to use to parse serialized ciphertext.
         *
         * @return {?} The unserialized ciphertext.
         *
         */
        SerializableCipher._parse = /**
         * Converts serialized ciphertext to CipherParams,
         * else assumed CipherParams already and returns ciphertext unchanged.
         *
         * \@example
         *
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
         * @param {?} ciphertext The ciphertext.
         * @param {?} format The formatting strategy to use to parse serialized ciphertext.
         *
         * @return {?} The unserialized ciphertext.
         *
         */
        function (ciphertext, format) {
            if (typeof ciphertext === 'string') {
                return format.parse(ciphertext);
            }
            else {
                return ciphertext;
            }
        };
        SerializableCipher.cfg = {
            blockSize: 4,
            iv: new WordArray([]),
            format: OpenSSL
        };
        return SerializableCipher;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var  /**
     * @abstract
     */
    Hasher = /** @class */ (function (_super) {
        __extends(Hasher, _super);
        function Hasher(cfg) {
            var _this = 
            // Apply config defaults
            _super.call(this, Object.assign({
                blockSize: 512 / 32
            }, cfg)) || this;
            // Set initial values
            // Set initial values
            _this.reset();
            return _this;
        }
        /**
         * Creates a shortcut function to a hasher's object interface.
         *
         * \@example
         *
         *     let SHA256 = Hasher._createHelper(SHA256);
         * @param {?} hasher The hasher to create a helper for.
         *
         * @return {?} The shortcut function.
         *
         */
        Hasher._createHelper = /**
         * Creates a shortcut function to a hasher's object interface.
         *
         * \@example
         *
         *     let SHA256 = Hasher._createHelper(SHA256);
         * @param {?} hasher The hasher to create a helper for.
         *
         * @return {?} The shortcut function.
         *
         */
        function (hasher) {
            /**
             * @param {?} message
             * @param {?=} cfg
             * @return {?}
             */
            function helper(message, cfg) {
                var /** @type {?} */ hasherClass = hasher;
                var /** @type {?} */ hasherInstance = new hasherClass(cfg);
                return hasherInstance.finalize(message);
            }
            return helper;
        };
        /**
         * Updates this hasher with a message.
         *
         * @param messageUpdate The message to append.
         *
         * @return This hasher.
         *
         * @example
         *
         *     hasher.update('message');
         *     hasher.update(wordArray);
         */
        /**
         * Updates this hasher with a message.
         *
         * \@example
         *
         *     hasher.update('message');
         *     hasher.update(wordArray);
         * @param {?} messageUpdate The message to append.
         *
         * @return {?} This hasher.
         *
         */
        Hasher.prototype.update = /**
         * Updates this hasher with a message.
         *
         * \@example
         *
         *     hasher.update('message');
         *     hasher.update(wordArray);
         * @param {?} messageUpdate The message to append.
         *
         * @return {?} This hasher.
         *
         */
        function (messageUpdate) {
            // Append
            this._append(messageUpdate);
            // Update the hash
            this._process();
            // Chainable
            return this;
        };
        /**
         * Finalizes the hash computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * \@example
         *
         *     let hash = hasher.finalize();
         *     let hash = hasher.finalize('message');
         *     let hash = hasher.finalize(wordArray);
         * @param {?} messageUpdate (Optional) A final message update.
         *
         * @return {?} The hash.
         *
         */
        Hasher.prototype.finalize = /**
         * Finalizes the hash computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * \@example
         *
         *     let hash = hasher.finalize();
         *     let hash = hasher.finalize('message');
         *     let hash = hasher.finalize(wordArray);
         * @param {?} messageUpdate (Optional) A final message update.
         *
         * @return {?} The hash.
         *
         */
        function (messageUpdate) {
            // Final message update
            if (messageUpdate) {
                this._append(messageUpdate);
            }
            // Perform concrete-hasher logic
            var /** @type {?} */ hash = this._doFinalize();
            return hash;
        };
        return Hasher;
    }(BufferedBlockAlgorithm));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // Constants table
    var /** @type {?} */ T = [];
    // Compute constants
    for (var /** @type {?} */ i = 0; i < 64; i++) {
        T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
    }
    var MD5 = /** @class */ (function (_super) {
        __extends(MD5, _super);
        function MD5() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} x
         * @param {?} s
         * @param {?} t
         * @return {?}
         */
        MD5.FF = /**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} x
         * @param {?} s
         * @param {?} t
         * @return {?}
         */
        function (a, b, c, d, x, s, t) {
            var /** @type {?} */ n = a + ((b & c) | (~b & d)) + x + t;
            return ((n << s) | (n >>> (32 - s))) + b;
        };
        /**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} x
         * @param {?} s
         * @param {?} t
         * @return {?}
         */
        MD5.GG = /**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} x
         * @param {?} s
         * @param {?} t
         * @return {?}
         */
        function (a, b, c, d, x, s, t) {
            var /** @type {?} */ n = a + ((b & d) | (c & ~d)) + x + t;
            return ((n << s) | (n >>> (32 - s))) + b;
        };
        /**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} x
         * @param {?} s
         * @param {?} t
         * @return {?}
         */
        MD5.HH = /**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} x
         * @param {?} s
         * @param {?} t
         * @return {?}
         */
        function (a, b, c, d, x, s, t) {
            var /** @type {?} */ n = a + (b ^ c ^ d) + x + t;
            return ((n << s) | (n >>> (32 - s))) + b;
        };
        /**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} x
         * @param {?} s
         * @param {?} t
         * @return {?}
         */
        MD5.II = /**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} x
         * @param {?} s
         * @param {?} t
         * @return {?}
         */
        function (a, b, c, d, x, s, t) {
            var /** @type {?} */ n = a + (c ^ (b | ~d)) + x + t;
            return ((n << s) | (n >>> (32 - s))) + b;
        };
        /**
         * @return {?}
         */
        MD5.prototype.reset = /**
         * @return {?}
         */
        function () {
            // reset core values
            _super.prototype.reset.call(this);
            this._hash = new WordArray([
                0x67452301, 0xefcdab89,
                0x98badcfe, 0x10325476
            ]);
        };
        /**
         * @param {?} M
         * @param {?} offset
         * @return {?}
         */
        MD5.prototype._doProcessBlock = /**
         * @param {?} M
         * @param {?} offset
         * @return {?}
         */
        function (M, offset) {
            // Swap endian
            for (var /** @type {?} */ i = 0; i < 16; i++) {
                // Shortcuts
                var /** @type {?} */ offset_i = offset + i;
                var /** @type {?} */ M_offset_i = M[offset_i];
                M[offset_i] = ((((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) |
                    (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00));
            }
            // Shortcuts
            var /** @type {?} */ H = this._hash.words;
            var /** @type {?} */ M_offset_0 = M[offset + 0];
            var /** @type {?} */ M_offset_1 = M[offset + 1];
            var /** @type {?} */ M_offset_2 = M[offset + 2];
            var /** @type {?} */ M_offset_3 = M[offset + 3];
            var /** @type {?} */ M_offset_4 = M[offset + 4];
            var /** @type {?} */ M_offset_5 = M[offset + 5];
            var /** @type {?} */ M_offset_6 = M[offset + 6];
            var /** @type {?} */ M_offset_7 = M[offset + 7];
            var /** @type {?} */ M_offset_8 = M[offset + 8];
            var /** @type {?} */ M_offset_9 = M[offset + 9];
            var /** @type {?} */ M_offset_10 = M[offset + 10];
            var /** @type {?} */ M_offset_11 = M[offset + 11];
            var /** @type {?} */ M_offset_12 = M[offset + 12];
            var /** @type {?} */ M_offset_13 = M[offset + 13];
            var /** @type {?} */ M_offset_14 = M[offset + 14];
            var /** @type {?} */ M_offset_15 = M[offset + 15];
            // Working variables
            var /** @type {?} */ a = H[0];
            var /** @type {?} */ b = H[1];
            var /** @type {?} */ c = H[2];
            var /** @type {?} */ d = H[3];
            // Computation
            a = MD5.FF(a, b, c, d, M_offset_0, 7, T[0]);
            d = MD5.FF(d, a, b, c, M_offset_1, 12, T[1]);
            c = MD5.FF(c, d, a, b, M_offset_2, 17, T[2]);
            b = MD5.FF(b, c, d, a, M_offset_3, 22, T[3]);
            a = MD5.FF(a, b, c, d, M_offset_4, 7, T[4]);
            d = MD5.FF(d, a, b, c, M_offset_5, 12, T[5]);
            c = MD5.FF(c, d, a, b, M_offset_6, 17, T[6]);
            b = MD5.FF(b, c, d, a, M_offset_7, 22, T[7]);
            a = MD5.FF(a, b, c, d, M_offset_8, 7, T[8]);
            d = MD5.FF(d, a, b, c, M_offset_9, 12, T[9]);
            c = MD5.FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = MD5.FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = MD5.FF(a, b, c, d, M_offset_12, 7, T[12]);
            d = MD5.FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = MD5.FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = MD5.FF(b, c, d, a, M_offset_15, 22, T[15]);
            a = MD5.GG(a, b, c, d, M_offset_1, 5, T[16]);
            d = MD5.GG(d, a, b, c, M_offset_6, 9, T[17]);
            c = MD5.GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = MD5.GG(b, c, d, a, M_offset_0, 20, T[19]);
            a = MD5.GG(a, b, c, d, M_offset_5, 5, T[20]);
            d = MD5.GG(d, a, b, c, M_offset_10, 9, T[21]);
            c = MD5.GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = MD5.GG(b, c, d, a, M_offset_4, 20, T[23]);
            a = MD5.GG(a, b, c, d, M_offset_9, 5, T[24]);
            d = MD5.GG(d, a, b, c, M_offset_14, 9, T[25]);
            c = MD5.GG(c, d, a, b, M_offset_3, 14, T[26]);
            b = MD5.GG(b, c, d, a, M_offset_8, 20, T[27]);
            a = MD5.GG(a, b, c, d, M_offset_13, 5, T[28]);
            d = MD5.GG(d, a, b, c, M_offset_2, 9, T[29]);
            c = MD5.GG(c, d, a, b, M_offset_7, 14, T[30]);
            b = MD5.GG(b, c, d, a, M_offset_12, 20, T[31]);
            a = MD5.HH(a, b, c, d, M_offset_5, 4, T[32]);
            d = MD5.HH(d, a, b, c, M_offset_8, 11, T[33]);
            c = MD5.HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = MD5.HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = MD5.HH(a, b, c, d, M_offset_1, 4, T[36]);
            d = MD5.HH(d, a, b, c, M_offset_4, 11, T[37]);
            c = MD5.HH(c, d, a, b, M_offset_7, 16, T[38]);
            b = MD5.HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = MD5.HH(a, b, c, d, M_offset_13, 4, T[40]);
            d = MD5.HH(d, a, b, c, M_offset_0, 11, T[41]);
            c = MD5.HH(c, d, a, b, M_offset_3, 16, T[42]);
            b = MD5.HH(b, c, d, a, M_offset_6, 23, T[43]);
            a = MD5.HH(a, b, c, d, M_offset_9, 4, T[44]);
            d = MD5.HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = MD5.HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = MD5.HH(b, c, d, a, M_offset_2, 23, T[47]);
            a = MD5.II(a, b, c, d, M_offset_0, 6, T[48]);
            d = MD5.II(d, a, b, c, M_offset_7, 10, T[49]);
            c = MD5.II(c, d, a, b, M_offset_14, 15, T[50]);
            b = MD5.II(b, c, d, a, M_offset_5, 21, T[51]);
            a = MD5.II(a, b, c, d, M_offset_12, 6, T[52]);
            d = MD5.II(d, a, b, c, M_offset_3, 10, T[53]);
            c = MD5.II(c, d, a, b, M_offset_10, 15, T[54]);
            b = MD5.II(b, c, d, a, M_offset_1, 21, T[55]);
            a = MD5.II(a, b, c, d, M_offset_8, 6, T[56]);
            d = MD5.II(d, a, b, c, M_offset_15, 10, T[57]);
            c = MD5.II(c, d, a, b, M_offset_6, 15, T[58]);
            b = MD5.II(b, c, d, a, M_offset_13, 21, T[59]);
            a = MD5.II(a, b, c, d, M_offset_4, 6, T[60]);
            d = MD5.II(d, a, b, c, M_offset_11, 10, T[61]);
            c = MD5.II(c, d, a, b, M_offset_2, 15, T[62]);
            b = MD5.II(b, c, d, a, M_offset_9, 21, T[63]);
            // Intermediate hash value
            H[0] = (H[0] + a) | 0;
            H[1] = (H[1] + b) | 0;
            H[2] = (H[2] + c) | 0;
            H[3] = (H[3] + d) | 0;
        };
        /**
         * @return {?}
         */
        MD5.prototype._doFinalize = /**
         * @return {?}
         */
        function () {
            // Shortcuts
            var /** @type {?} */ data = this._data;
            var /** @type {?} */ dataWords = data.words;
            var /** @type {?} */ nBitsTotal = this._nDataBytes * 8;
            var /** @type {?} */ nBitsLeft = data.sigBytes * 8;
            // Add padding
            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
            var /** @type {?} */ nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
            var /** @type {?} */ nBitsTotalL = nBitsTotal;
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = ((((nBitsTotalH << 8) | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8)) & 0xff00ff00));
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = ((((nBitsTotalL << 8) | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8)) & 0xff00ff00));
            data.sigBytes = (dataWords.length + 1) * 4;
            // Hash final blocks
            this._process();
            // Shortcuts
            var /** @type {?} */ hash = this._hash;
            var /** @type {?} */ H = hash.words;
            // Swap endian
            for (var /** @type {?} */ i = 0; i < 4; i++) {
                // Shortcut
                var /** @type {?} */ H_i = H[i];
                H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) |
                    (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
            }
            // Return final computed hash
            return hash;
        };
        return MD5;
    }(Hasher));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EvpKDF = /** @class */ (function () {
        /**
         * Initializes a newly created key derivation function.
         *
         * @param cfg (Optional) The configuration options to use for the derivation.
         *
         * @example
         *
         *     let kdf = EvpKDF.create();
         *     let kdf = EvpKDF.create({ keySize: 8 });
         *     let kdf = EvpKDF.create({ keySize: 8, iterations: 1000 });
         */
        function EvpKDF(cfg) {
            this.cfg = Object.assign({
                keySize: 128 / 32,
                hasher: MD5,
                iterations: 1
            }, cfg);
        }
        /**
         * Derives a key from a password.
         *
         * @param password The password.
         * @param salt A salt.
         *
         * @return The derived key.
         *
         * @example
         *
         *     let key = kdf.compute(password, salt);
         */
        /**
         * Derives a key from a password.
         *
         * \@example
         *
         *     let key = kdf.compute(password, salt);
         * @param {?} password The password.
         * @param {?} salt A salt.
         *
         * @return {?} The derived key.
         *
         */
        EvpKDF.prototype.compute = /**
         * Derives a key from a password.
         *
         * \@example
         *
         *     let key = kdf.compute(password, salt);
         * @param {?} password The password.
         * @param {?} salt A salt.
         *
         * @return {?} The derived key.
         *
         */
        function (password, salt) {
            // Init hasher
            var /** @type {?} */ hasher = new (/** @type {?} */ (this.cfg.hasher))();
            // Initial values
            var /** @type {?} */ derivedKey = new WordArray();
            // Generate key
            var /** @type {?} */ block;
            while (derivedKey.words.length < this.cfg.keySize) {
                if (block) {
                    hasher.update(block);
                }
                block = hasher.update(password).finalize(salt);
                hasher.reset();
                // Iterations
                for (var /** @type {?} */ i = 1; i < this.cfg.iterations; i++) {
                    block = hasher.finalize(block);
                    hasher.reset();
                }
                derivedKey.concat(block);
            }
            derivedKey.sigBytes = this.cfg.keySize * 4;
            return derivedKey;
        };
        return EvpKDF;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var OpenSSLKdf = /** @class */ (function () {
        function OpenSSLKdf() {
        }
        /**
         * Derives a key and IV from a password.
         *
         * \@example
         *
         *     let derivedParams = OpenSSL.execute('Password', 256/32, 128/32);
         *     let derivedParams = OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
         * @param {?} password The password to derive from.
         * @param {?} keySize The size in words of the key to generate.
         * @param {?} ivSize The size in words of the IV to generate.
         * @param {?=} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
         *
         * @return {?} A cipher params object with the key, IV, and salt.
         *
         */
        OpenSSLKdf.execute = /**
         * Derives a key and IV from a password.
         *
         * \@example
         *
         *     let derivedParams = OpenSSL.execute('Password', 256/32, 128/32);
         *     let derivedParams = OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
         * @param {?} password The password to derive from.
         * @param {?} keySize The size in words of the key to generate.
         * @param {?} ivSize The size in words of the IV to generate.
         * @param {?=} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
         *
         * @return {?} A cipher params object with the key, IV, and salt.
         *
         */
        function (password, keySize, ivSize, salt) {
            // Generate random salt
            if (!salt) {
                salt = WordArray.random(64 / 8);
            }
            // Derive key and IV
            var /** @type {?} */ key = (new EvpKDF({ keySize: keySize + ivSize })).compute(password, salt);
            // Separate key and IV
            var /** @type {?} */ iv = new WordArray(key.words.slice(keySize), ivSize * 4);
            key.sigBytes = keySize * 4;
            // Return params
            return new CipherParams({ key: key, iv: iv, salt: salt });
        };
        return OpenSSLKdf;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PasswordBasedCipher = /** @class */ (function () {
        function PasswordBasedCipher() {
        }
        /**
         * Encrypts a message using a password.
         *
         * \@example
         *
         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(AES, message, 'password');
         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(AES, message, 'password', { format: OpenSSL });
         * @param {?} cipher The cipher algorithm to use.
         * @param {?} message The message to encrypt.
         * @param {?} password The password.
         * @param {?=} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {?} A cipher params object.
         *
         */
        PasswordBasedCipher.encrypt = /**
         * Encrypts a message using a password.
         *
         * \@example
         *
         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(AES, message, 'password');
         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(AES, message, 'password', { format: OpenSSL });
         * @param {?} cipher The cipher algorithm to use.
         * @param {?} message The message to encrypt.
         * @param {?} password The password.
         * @param {?=} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {?} A cipher params object.
         *
         */
        function (cipher, message, password, cfg) {
            // Apply config defaults
            var /** @type {?} */ config = Object.assign({}, this.cfg, cfg);
            // Check if we have a kdf
            if (config.kdf === undefined) {
                throw new Error('missing kdf in config');
            }
            // Derive key and other params
            var /** @type {?} */ derivedParams = config.kdf.execute(password, cipher.keySize, cipher.ivSize);
            // Check if we have an IV
            if (derivedParams.iv !== undefined) {
                // Add IV to config
                config.iv = derivedParams.iv;
            }
            // Encrypt
            var /** @type {?} */ ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, config);
            // Mix in derived params
            return ciphertext.extend(derivedParams);
        };
        /**
         * Decrypts serialized ciphertext using a password.
         *
         * \@example
         *
         *     var plaintext = PasswordBasedCipher.decrypt(AES, formattedCiphertext, 'password', { format: OpenSSL });
         *     var plaintext = PasswordBasedCipher.decrypt(AES, ciphertextParams, 'password', { format: OpenSSL });
         * @param {?} cipher The cipher algorithm to use.
         * @param {?} ciphertext The ciphertext to decrypt.
         * @param {?} password The password.
         * @param {?=} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {?} The plaintext.
         *
         */
        PasswordBasedCipher.decrypt = /**
         * Decrypts serialized ciphertext using a password.
         *
         * \@example
         *
         *     var plaintext = PasswordBasedCipher.decrypt(AES, formattedCiphertext, 'password', { format: OpenSSL });
         *     var plaintext = PasswordBasedCipher.decrypt(AES, ciphertextParams, 'password', { format: OpenSSL });
         * @param {?} cipher The cipher algorithm to use.
         * @param {?} ciphertext The ciphertext to decrypt.
         * @param {?} password The password.
         * @param {?=} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {?} The plaintext.
         *
         */
        function (cipher, ciphertext, password, cfg) {
            // Apply config defaults
            var /** @type {?} */ config = Object.assign({}, this.cfg, cfg);
            // Check if we have a kdf
            if (config.format === undefined) {
                throw new Error('missing format in config');
            }
            // Convert string to CipherParams
            ciphertext = this._parse(ciphertext, config.format);
            // Check if we have a kdf
            if (config.kdf === undefined) {
                throw new Error('the key derivation function must be set');
            }
            // Derive key and other params
            var /** @type {?} */ derivedParams = config.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);
            // Check if we have an IV
            if (derivedParams.iv !== undefined) {
                // Add IV to config
                config.iv = derivedParams.iv;
            }
            // Decrypt
            var /** @type {?} */ plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, config);
            return plaintext;
        };
        /**
         * Converts serialized ciphertext to CipherParams,
         * else assumed CipherParams already and returns ciphertext unchanged.
         *
         * \@example
         *
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
         * @param {?} ciphertext The ciphertext.
         * @param {?} format The formatting strategy to use to parse serialized ciphertext.
         *
         * @return {?} The unserialized ciphertext.
         *
         */
        PasswordBasedCipher._parse = /**
         * Converts serialized ciphertext to CipherParams,
         * else assumed CipherParams already and returns ciphertext unchanged.
         *
         * \@example
         *
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
         * @param {?} ciphertext The ciphertext.
         * @param {?} format The formatting strategy to use to parse serialized ciphertext.
         *
         * @return {?} The unserialized ciphertext.
         *
         */
        function (ciphertext, format) {
            if (typeof ciphertext === 'string') {
                return format.parse(ciphertext);
            }
            else {
                return ciphertext;
            }
        };
        PasswordBasedCipher.cfg = {
            blockSize: 4,
            iv: new WordArray([]),
            format: OpenSSL,
            kdf: OpenSSLKdf
        };
        return PasswordBasedCipher;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var Cipher = /** @class */ (function (_super) {
        __extends(Cipher, _super);
        function Cipher(xformMode, key, cfg) {
            var _this = 
            // Apply config defaults
            _super.call(this, Object.assign({
                blockSize: 1
            }, cfg)) || this;
            // Store transform mode and key
            // Store transform mode and key
            _this._xformMode = xformMode;
            _this._key = key;
            // Set initial values
            // Set initial values
            _this.reset();
            return _this;
        }
        /**
         * Creates this cipher in encryption mode.
         *
         * \@example
         *
         *     let cipher = AES.createEncryptor(keyWordArray, { iv: ivWordArray });
         * @param {?} key The key.
         * @param {?=} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {?} A cipher instance.
         *
         */
        Cipher.createEncryptor = /**
         * Creates this cipher in encryption mode.
         *
         * \@example
         *
         *     let cipher = AES.createEncryptor(keyWordArray, { iv: ivWordArray });
         * @param {?} key The key.
         * @param {?=} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {?} A cipher instance.
         *
         */
        function (key, cfg) {
            // workaround for typescript not being able to create a abstract creator function directly
            var /** @type {?} */ thisClass = this;
            return new thisClass(this._ENC_XFORM_MODE, key, cfg);
        };
        /**
         * Creates this cipher in decryption mode.
         *
         * \@example
         *
         *     let cipher = AES.createDecryptor(keyWordArray, { iv: ivWordArray });
         * @param {?} key The key.
         * @param {?=} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {?} A cipher instance.
         *
         */
        Cipher.createDecryptor = /**
         * Creates this cipher in decryption mode.
         *
         * \@example
         *
         *     let cipher = AES.createDecryptor(keyWordArray, { iv: ivWordArray });
         * @param {?} key The key.
         * @param {?=} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {?} A cipher instance.
         *
         */
        function (key, cfg) {
            // workaround for typescript not being able to create a abstract creator function directly
            var /** @type {?} */ thisClass = this;
            return new thisClass(this._DEC_XFORM_MODE, key, cfg);
        };
        /**
         * Creates shortcut functions to a cipher's object interface.
         *
         * \@example
         *
         *     let AES = Cipher._createHelper(AESAlgorithm);
         * @param {?} cipher The cipher to create a helper for.
         *
         * @return {?} An object with encrypt and decrypt shortcut functions.
         *
         */
        Cipher._createHelper = /**
         * Creates shortcut functions to a cipher's object interface.
         *
         * \@example
         *
         *     let AES = Cipher._createHelper(AESAlgorithm);
         * @param {?} cipher The cipher to create a helper for.
         *
         * @return {?} An object with encrypt and decrypt shortcut functions.
         *
         */
        function (cipher) {
            /**
             * @param {?} message
             * @param {?} key
             * @param {?=} cfg
             * @return {?}
             */
            function encrypt(message, key, cfg) {
                if (typeof key === 'string') {
                    return PasswordBasedCipher.encrypt(cipher, message, key, cfg);
                }
                else {
                    return SerializableCipher.encrypt(cipher, message, key, cfg);
                }
            }
            /**
             * @param {?} ciphertext
             * @param {?} key
             * @param {?=} cfg
             * @return {?}
             */
            function decrypt(ciphertext, key, cfg) {
                if (typeof key === 'string') {
                    return PasswordBasedCipher.decrypt(cipher, ciphertext, key, cfg);
                }
                else {
                    return SerializableCipher.decrypt(cipher, ciphertext, key, cfg);
                }
            }
            return {
                encrypt: encrypt,
                decrypt: decrypt
            };
        };
        /**
         * Adds data to be encrypted or decrypted.
         *
         * \@example
         *
         *     let encrypted = cipher.process('data');
         *     let encrypted = cipher.process(wordArray);
         * @param {?} dataUpdate The data to encrypt or decrypt.
         *
         * @return {?} The data after processing.
         *
         */
        Cipher.prototype.process = /**
         * Adds data to be encrypted or decrypted.
         *
         * \@example
         *
         *     let encrypted = cipher.process('data');
         *     let encrypted = cipher.process(wordArray);
         * @param {?} dataUpdate The data to encrypt or decrypt.
         *
         * @return {?} The data after processing.
         *
         */
        function (dataUpdate) {
            // Append
            this._append(dataUpdate);
            // Process available blocks
            return this._process();
        };
        /**
         * Finalizes the encryption or decryption process.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * \@example
         *
         *     var encrypted = cipher.finalize();
         *     var encrypted = cipher.finalize('data');
         *     var encrypted = cipher.finalize(wordArray);
         * @param {?=} dataUpdate The final data to encrypt or decrypt.
         *
         * @return {?} The data after final processing.
         *
         */
        Cipher.prototype.finalize = /**
         * Finalizes the encryption or decryption process.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * \@example
         *
         *     var encrypted = cipher.finalize();
         *     var encrypted = cipher.finalize('data');
         *     var encrypted = cipher.finalize(wordArray);
         * @param {?=} dataUpdate The final data to encrypt or decrypt.
         *
         * @return {?} The data after final processing.
         *
         */
        function (dataUpdate) {
            // Final data update
            if (dataUpdate) {
                this._append(dataUpdate);
            }
            // Perform concrete-cipher logic
            var /** @type {?} */ finalProcessedData = this._doFinalize();
            return finalProcessedData;
        };
        /**
         * A constant representing encryption mode.
         */
        Cipher._ENC_XFORM_MODE = 1;
        /**
         * A constant representing decryption mode.
         */
        Cipher._DEC_XFORM_MODE = 2;
        /**
         * This cipher's key size. Default: 4 (128 bits / 32 Bits)
         */
        Cipher.keySize = 4;
        /**
         * This cipher's IV size. Default: 4 (128 bits / 32 Bits)
         */
        Cipher.ivSize = 4;
        return Cipher;
    }(BufferedBlockAlgorithm));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */
    BlockCipherModeAlgorithm = /** @class */ (function () {
        function BlockCipherModeAlgorithm(cipher, iv) {
            this.init(cipher, iv);
        }
        /**
         * Initializes a newly created mode.
         *
         * \@example
         *
         *     var mode = CBC.Encryptor.create(cipher, iv.words);
         * @param {?} cipher A block cipher instance.
         * @param {?=} iv The IV words.
         *
         * @return {?}
         */
        BlockCipherModeAlgorithm.prototype.init = /**
         * Initializes a newly created mode.
         *
         * \@example
         *
         *     var mode = CBC.Encryptor.create(cipher, iv.words);
         * @param {?} cipher A block cipher instance.
         * @param {?=} iv The IV words.
         *
         * @return {?}
         */
        function (cipher, iv) {
            this._cipher = cipher;
            this._iv = iv;
        };
        return BlockCipherModeAlgorithm;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var BlockCipherMode = /** @class */ (function () {
        function BlockCipherMode() {
        }
        /**
         * Creates this mode for encryption.
         *
         * \@example
         *
         *     var mode = CBC.createEncryptor(cipher, iv.words);
         * @param {?} cipher A block cipher instance.
         * @param {?} iv The IV words.
         *
         * @return {?}
         */
        BlockCipherMode.createEncryptor = /**
         * Creates this mode for encryption.
         *
         * \@example
         *
         *     var mode = CBC.createEncryptor(cipher, iv.words);
         * @param {?} cipher A block cipher instance.
         * @param {?} iv The IV words.
         *
         * @return {?}
         */
        function (cipher, iv) {
            // workaround for typescript not being able to create a abstract creator function directly
            var /** @type {?} */ encryptorClass = this.Encryptor;
            return new encryptorClass(cipher, iv);
        };
        /**
         * Creates this mode for decryption.
         *
         * \@example
         *
         *     var mode = CBC.createDecryptor(cipher, iv.words);
         * @param {?} cipher A block cipher instance.
         * @param {?} iv The IV words.
         *
         * @return {?}
         */
        BlockCipherMode.createDecryptor = /**
         * Creates this mode for decryption.
         *
         * \@example
         *
         *     var mode = CBC.createDecryptor(cipher, iv.words);
         * @param {?} cipher A block cipher instance.
         * @param {?} iv The IV words.
         *
         * @return {?}
         */
        function (cipher, iv) {
            // workaround for typescript not being able to create a abstract creator function directly
            var /** @type {?} */ decryptorClass = this.Decryptor;
            return new decryptorClass(cipher, iv);
        };
        BlockCipherMode.Encryptor = BlockCipherModeAlgorithm;
        BlockCipherMode.Decryptor = BlockCipherModeAlgorithm;
        return BlockCipherMode;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CBCEncryptor = /** @class */ (function (_super) {
        __extends(CBCEncryptor, _super);
        function CBCEncryptor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Processes the data block at offset.
         *
         * \@example
         *
         *     mode.processBlock(data.words, offset);
         * @param {?} words The data words to operate on.
         * @param {?} offset The offset where the block starts.
         *
         * @return {?}
         */
        CBCEncryptor.prototype.processBlock = /**
         * Processes the data block at offset.
         *
         * \@example
         *
         *     mode.processBlock(data.words, offset);
         * @param {?} words The data words to operate on.
         * @param {?} offset The offset where the block starts.
         *
         * @return {?}
         */
        function (words, offset) {
            // Check if we have a blockSize
            if (this._cipher.cfg.blockSize === undefined) {
                throw new Error('missing blockSize in cipher config');
            }
            // XOR and encrypt
            this.xorBlock(words, offset, this._cipher.cfg.blockSize);
            this._cipher.encryptBlock(words, offset);
            // Remember this block to use with next block
            this._prevBlock = words.slice(offset, offset + this._cipher.cfg.blockSize);
        };
        /**
         * @param {?} words
         * @param {?} offset
         * @param {?} blockSize
         * @return {?}
         */
        CBCEncryptor.prototype.xorBlock = /**
         * @param {?} words
         * @param {?} offset
         * @param {?} blockSize
         * @return {?}
         */
        function (words, offset, blockSize) {
            // Choose mixing block
            var /** @type {?} */ block;
            if (this._iv) {
                block = this._iv;
                // Remove IV for subsequent blocks
                this._iv = undefined;
            }
            else {
                block = this._prevBlock;
            }
            // block should never be undefined but we want to make typescript happy
            if (block !== undefined) {
                // XOR blocks
                for (var /** @type {?} */ i = 0; i < blockSize; i++) {
                    words[offset + i] ^= block[i];
                }
            }
        };
        return CBCEncryptor;
    }(BlockCipherModeAlgorithm));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CBCDecryptor = /** @class */ (function (_super) {
        __extends(CBCDecryptor, _super);
        function CBCDecryptor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Processes the data block at offset.
         *
         * \@example
         *
         *     mode.processBlock(data.words, offset);
         * @param {?} words The data words to operate on.
         * @param {?} offset The offset where the block starts.
         *
         * @return {?}
         */
        CBCDecryptor.prototype.processBlock = /**
         * Processes the data block at offset.
         *
         * \@example
         *
         *     mode.processBlock(data.words, offset);
         * @param {?} words The data words to operate on.
         * @param {?} offset The offset where the block starts.
         *
         * @return {?}
         */
        function (words, offset) {
            // Check if we have a blockSize
            if (this._cipher.cfg.blockSize === undefined) {
                throw new Error('missing blockSize in cipher config');
            }
            // Remember this block to use with next block
            var /** @type {?} */ thisBlock = words.slice(offset, offset + this._cipher.cfg.blockSize);
            // Decrypt and XOR
            this._cipher.decryptBlock(words, offset);
            this.xorBlock(words, offset, this._cipher.cfg.blockSize);
            // This block becomes the previous block
            this._prevBlock = thisBlock;
        };
        /**
         * @param {?} words
         * @param {?} offset
         * @param {?} blockSize
         * @return {?}
         */
        CBCDecryptor.prototype.xorBlock = /**
         * @param {?} words
         * @param {?} offset
         * @param {?} blockSize
         * @return {?}
         */
        function (words, offset, blockSize) {
            // Choose mixing block
            var /** @type {?} */ block;
            if (this._iv) {
                block = this._iv;
                // Remove IV for subsequent blocks
                this._iv = undefined;
            }
            else {
                block = this._prevBlock;
            }
            // block should never be undefined but we want to make typescript happy
            if (block !== undefined) {
                // XOR blocks
                for (var /** @type {?} */ i = 0; i < blockSize; i++) {
                    words[offset + i] ^= block[i];
                }
            }
        };
        return CBCDecryptor;
    }(BlockCipherModeAlgorithm));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Cipher Block Chaining mode.
     * @abstract
     */
    var CBC = /** @class */ (function (_super) {
        __extends(CBC, _super);
        function CBC() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CBC.Encryptor = CBCEncryptor;
        CBC.Decryptor = CBCDecryptor;
        return CBC;
    }(BlockCipherMode));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PKCS7 = /** @class */ (function () {
        function PKCS7() {
        }
        /**
         * Pads data using the algorithm defined in PKCS #5/7.
         *
         * \@example
         *
         *     PKCS7.pad(wordArray, 4);
         * @param {?} data The data to pad.
         * @param {?} blockSize The multiple that the data should be padded to.
         *
         * @return {?}
         */
        PKCS7.pad = /**
         * Pads data using the algorithm defined in PKCS #5/7.
         *
         * \@example
         *
         *     PKCS7.pad(wordArray, 4);
         * @param {?} data The data to pad.
         * @param {?} blockSize The multiple that the data should be padded to.
         *
         * @return {?}
         */
        function (data, blockSize) {
            // Shortcut
            var /** @type {?} */ blockSizeBytes = blockSize * 4;
            // Count padding bytes
            var /** @type {?} */ nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
            // Create padding word
            var /** @type {?} */ paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;
            // Create padding
            var /** @type {?} */ paddingWords = [];
            for (var /** @type {?} */ i = 0; i < nPaddingBytes; i += 4) {
                paddingWords.push(paddingWord);
            }
            var /** @type {?} */ padding = new WordArray(paddingWords, nPaddingBytes);
            // Add padding
            data.concat(padding);
        };
        /**
         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
         *
         * \@example
         *
         *     PKCS7.unpad(wordArray);
         * @param {?} data The data to unpad.
         *
         * @return {?}
         */
        PKCS7.unpad = /**
         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
         *
         * \@example
         *
         *     PKCS7.unpad(wordArray);
         * @param {?} data The data to unpad.
         *
         * @return {?}
         */
        function (data) {
            // Get number of padding bytes from last byte
            var /** @type {?} */ nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
            // Remove padding
            data.sigBytes -= nPaddingBytes;
        };
        return PKCS7;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var  /**
     * @abstract
     */
    BlockCipher = /** @class */ (function (_super) {
        __extends(BlockCipher, _super);
        function BlockCipher(xformMode, key, cfg) {
            return _super.call(this, xformMode, key, Object.assign({
                // default: 128 / 32
                blockSize: 4,
                mode: CBC,
                padding: PKCS7
            }, cfg)) || this;
        }
        /**
         * @return {?}
         */
        BlockCipher.prototype.reset = /**
         * @return {?}
         */
        function () {
            // Reset cipher
            _super.prototype.reset.call(this);
            // Check if we have a blockSize
            if (this.cfg.mode === undefined) {
                throw new Error('missing mode in config');
            }
            // Reset block mode
            var /** @type {?} */ modeCreator;
            if (this._xformMode === (/** @type {?} */ (this.constructor))._ENC_XFORM_MODE) {
                modeCreator = this.cfg.mode.createEncryptor;
            }
            else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
                modeCreator = this.cfg.mode.createDecryptor;
                // Keep at least one block in the buffer for unpadding
                this._minBufferSize = 1;
            }
            if (this._mode && this._mode.__creator === modeCreator) {
                this._mode.init(this, this.cfg.iv && this.cfg.iv.words);
            }
            else {
                this._mode = modeCreator.call(this.cfg.mode, this, this.cfg.iv && this.cfg.iv.words);
                this._mode.__creator = modeCreator;
            }
        };
        /**
         * @param {?} words
         * @param {?} offset
         * @return {?}
         */
        BlockCipher.prototype._doProcessBlock = /**
         * @param {?} words
         * @param {?} offset
         * @return {?}
         */
        function (words, offset) {
            this._mode.processBlock(words, offset);
        };
        /**
         * @return {?}
         */
        BlockCipher.prototype._doFinalize = /**
         * @return {?}
         */
        function () {
            // Check if we have a padding strategy
            if (this.cfg.padding === undefined) {
                throw new Error('missing padding in config');
            }
            // Finalize
            var /** @type {?} */ finalProcessedBlocks;
            if (this._xformMode === (/** @type {?} */ (this.constructor))._ENC_XFORM_MODE) {
                // Check if we have a blockSize
                if (this.cfg.blockSize === undefined) {
                    throw new Error('missing blockSize in config');
                }
                // Pad data
                this.cfg.padding.pad(this._data, this.cfg.blockSize);
                // Process final blocks
                finalProcessedBlocks = this._process(!!'flush');
            }
            else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
                // Process final blocks
                finalProcessedBlocks = this._process(!!'flush');
                // Unpad data
                this.cfg.padding.unpad(finalProcessedBlocks);
            }
            return finalProcessedBlocks;
        };
        return BlockCipher;
    }(Cipher));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // Define lookup tables
    var /** @type {?} */ SBOX = [];
    var /** @type {?} */ INV_SBOX = [];
    var /** @type {?} */ SUB_MIX_0 = [];
    var /** @type {?} */ SUB_MIX_1 = [];
    var /** @type {?} */ SUB_MIX_2 = [];
    var /** @type {?} */ SUB_MIX_3 = [];
    var /** @type {?} */ INV_SUB_MIX_0 = [];
    var /** @type {?} */ INV_SUB_MIX_1 = [];
    var /** @type {?} */ INV_SUB_MIX_2 = [];
    var /** @type {?} */ INV_SUB_MIX_3 = [];
    // Compute lookup tables
    (function () {
        // Compute double table
        var /** @type {?} */ d = [];
        for (var /** @type {?} */ i = 0; i < 256; i++) {
            if (i < 128) {
                d[i] = i << 1;
            }
            else {
                d[i] = (i << 1) ^ 0x11b;
            }
        }
        // Walk GF(2^8)
        var /** @type {?} */ x = 0;
        var /** @type {?} */ xi = 0;
        for (var /** @type {?} */ i = 0; i < 256; i++) {
            // Compute sbox
            var /** @type {?} */ sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
            SBOX[x] = sx;
            INV_SBOX[sx] = x;
            // Compute multiplication
            var /** @type {?} */ x2 = d[x];
            var /** @type {?} */ x4 = d[x2];
            var /** @type {?} */ x8 = d[x4];
            // Compute sub bytes, mix columns tables
            var /** @type {?} */ t = (d[sx] * 0x101) ^ (sx * 0x1010100);
            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
            SUB_MIX_2[x] = (t << 8) | (t >>> 24);
            SUB_MIX_3[x] = t;
            // Compute inv sub bytes, inv mix columns tables
            t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
            INV_SUB_MIX_2[sx] = (t << 8) | (t >>> 24);
            INV_SUB_MIX_3[sx] = t;
            // Compute next counter
            if (!x) {
                x = xi = 1;
            }
            else {
                x = x2 ^ d[d[d[x8 ^ x2]]];
                xi ^= d[d[xi]];
            }
        }
    }());
    // Precomputed Rcon lookup
    var /** @type {?} */ RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
    var AES = /** @class */ (function (_super) {
        __extends(AES, _super);
        function AES(xformMode, key, cfg) {
            return _super.call(this, xformMode, key, cfg) || this;
        }
        /**
         * @return {?}
         */
        AES.prototype.reset = /**
         * @return {?}
         */
        function () {
            // reset core values
            _super.prototype.reset.call(this);
            // Skip reset of nRounds has been set before and key did not change
            if (this._nRounds && this._keyPriorReset === this._key) {
                return;
            }
            // Shortcuts
            var /** @type {?} */ key = this._keyPriorReset = this._key;
            var /** @type {?} */ keyWords = key.words;
            var /** @type {?} */ keySize = key.sigBytes / 4;
            // Compute number of rounds
            var /** @type {?} */ nRounds = this._nRounds = keySize + 6;
            // Compute number of key schedule rows
            var /** @type {?} */ ksRows = (nRounds + 1) * 4;
            // Compute key schedule
            var /** @type {?} */ keySchedule = this._keySchedule = [];
            for (var /** @type {?} */ ksRow = 0; ksRow < ksRows; ksRow++) {
                if (ksRow < keySize) {
                    keySchedule[ksRow] = keyWords[ksRow];
                }
                else {
                    var /** @type {?} */ t = keySchedule[ksRow - 1];
                    if (!(ksRow % keySize)) {
                        // Rot word
                        t = (t << 8) | (t >>> 24);
                        // Sub word
                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
                        // Mix Rcon
                        t ^= RCON[(ksRow / keySize) | 0] << 24;
                    }
                    else if (keySize > 6 && ksRow % keySize === 4) {
                        // Sub word
                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
                    }
                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
                }
            }
            // Compute inv key schedule
            var /** @type {?} */ invKeySchedule = this._invKeySchedule = [];
            for (var /** @type {?} */ invKsRow = 0; invKsRow < ksRows; invKsRow++) {
                var /** @type {?} */ ksRow = ksRows - invKsRow;
                var /** @type {?} */ t = void 0;
                if (invKsRow % 4) {
                    t = keySchedule[ksRow];
                }
                else {
                    t = keySchedule[ksRow - 4];
                }
                if (invKsRow < 4 || ksRow <= 4) {
                    invKeySchedule[invKsRow] = t;
                }
                else {
                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
                        INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
                }
            }
        };
        /**
         * @param {?} M
         * @param {?} offset
         * @return {?}
         */
        AES.prototype.encryptBlock = /**
         * @param {?} M
         * @param {?} offset
         * @return {?}
         */
        function (M, offset) {
            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
        };
        /**
         * @param {?} M
         * @param {?} offset
         * @return {?}
         */
        AES.prototype.decryptBlock = /**
         * @param {?} M
         * @param {?} offset
         * @return {?}
         */
        function (M, offset) {
            // Swap 2nd and 4th rows
            var /** @type {?} */ t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
            // Inv swap 2nd and 4th rows
            t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
        };
        /**
         * @param {?} M
         * @param {?} offset
         * @param {?} keySchedule
         * @param {?} sub_mix_0
         * @param {?} sub_mix_1
         * @param {?} sub_mix_2
         * @param {?} sub_mix_3
         * @param {?} sbox
         * @return {?}
         */
        AES.prototype._doCryptBlock = /**
         * @param {?} M
         * @param {?} offset
         * @param {?} keySchedule
         * @param {?} sub_mix_0
         * @param {?} sub_mix_1
         * @param {?} sub_mix_2
         * @param {?} sub_mix_3
         * @param {?} sbox
         * @return {?}
         */
        function (M, offset, keySchedule, sub_mix_0, sub_mix_1, sub_mix_2, sub_mix_3, sbox) {
            // Get input, add round key
            var /** @type {?} */ s0 = M[offset] ^ keySchedule[0];
            var /** @type {?} */ s1 = M[offset + 1] ^ keySchedule[1];
            var /** @type {?} */ s2 = M[offset + 2] ^ keySchedule[2];
            var /** @type {?} */ s3 = M[offset + 3] ^ keySchedule[3];
            // Key schedule row counter
            var /** @type {?} */ ksRow = 4;
            // Rounds
            for (var /** @type {?} */ round = 1; round < this._nRounds; round++) {
                // Shift rows, sub bytes, mix columns, add round key
                var /** @type {?} */ t0 = sub_mix_0[s0 >>> 24] ^ sub_mix_1[(s1 >>> 16) & 0xff] ^ sub_mix_2[(s2 >>> 8) & 0xff] ^ sub_mix_3[s3 & 0xff] ^
                    keySchedule[ksRow++];
                var /** @type {?} */ t1 = sub_mix_0[s1 >>> 24] ^ sub_mix_1[(s2 >>> 16) & 0xff] ^ sub_mix_2[(s3 >>> 8) & 0xff] ^ sub_mix_3[s0 & 0xff] ^
                    keySchedule[ksRow++];
                var /** @type {?} */ t2 = sub_mix_0[s2 >>> 24] ^ sub_mix_1[(s3 >>> 16) & 0xff] ^ sub_mix_2[(s0 >>> 8) & 0xff] ^ sub_mix_3[s1 & 0xff] ^
                    keySchedule[ksRow++];
                var /** @type {?} */ t3 = sub_mix_0[s3 >>> 24] ^ sub_mix_1[(s0 >>> 16) & 0xff] ^ sub_mix_2[(s1 >>> 8) & 0xff] ^ sub_mix_3[s2 & 0xff] ^
                    keySchedule[ksRow++];
                // Update state
                s0 = t0;
                s1 = t1;
                s2 = t2;
                s3 = t3;
            }
            // Shift rows, sub bytes, add round key
            var /** @type {?} */ t0g = ((sbox[s0 >>> 24] << 24) | (sbox[(s1 >>> 16) & 0xff] << 16) | (sbox[(s2 >>> 8) & 0xff] << 8) | sbox[s3 & 0xff]) ^
                keySchedule[ksRow++];
            var /** @type {?} */ t1g = ((sbox[s1 >>> 24] << 24) | (sbox[(s2 >>> 16) & 0xff] << 16) | (sbox[(s3 >>> 8) & 0xff] << 8) | sbox[s0 & 0xff]) ^
                keySchedule[ksRow++];
            var /** @type {?} */ t2g = ((sbox[s2 >>> 24] << 24) | (sbox[(s3 >>> 16) & 0xff] << 16) | (sbox[(s0 >>> 8) & 0xff] << 8) | sbox[s1 & 0xff]) ^
                keySchedule[ksRow++];
            var /** @type {?} */ t3g = ((sbox[s3 >>> 24] << 24) | (sbox[(s0 >>> 16) & 0xff] << 16) | (sbox[(s1 >>> 8) & 0xff] << 8) | sbox[s2 & 0xff]) ^
                keySchedule[ksRow++];
            // Set output
            M[offset] = t0g;
            M[offset + 1] = t1g;
            M[offset + 2] = t2g;
            M[offset + 3] = t3g;
        };
        AES.keySize = 8;
        return AES;
    }(BlockCipher));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // Initialization and round constants tables
    var /** @type {?} */ H = [];
    var /** @type {?} */ K = [];
    // Reusable object
    var /** @type {?} */ W = [];
    var SHA256 = /** @class */ (function (_super) {
        __extends(SHA256, _super);
        function SHA256() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        SHA256.prototype.reset = /**
         * @return {?}
         */
        function () {
            // reset core values
            _super.prototype.reset.call(this);
            this._hash = new WordArray(H.slice(0));
        };
        /**
         * @param {?} M
         * @param {?} offset
         * @return {?}
         */
        SHA256.prototype._doProcessBlock = /**
         * @param {?} M
         * @param {?} offset
         * @return {?}
         */
        function (M, offset) {
            // Shortcut
            var /** @type {?} */ Hl = this._hash.words;
            // Working variables
            var /** @type {?} */ a = Hl[0];
            var /** @type {?} */ b = Hl[1];
            var /** @type {?} */ c = Hl[2];
            var /** @type {?} */ d = Hl[3];
            var /** @type {?} */ e = Hl[4];
            var /** @type {?} */ f = Hl[5];
            var /** @type {?} */ g = Hl[6];
            var /** @type {?} */ h = Hl[7];
            // Computation
            for (var /** @type {?} */ i = 0; i < 64; i++) {
                if (i < 16) {
                    W[i] = M[offset + i] | 0;
                }
                else {
                    var /** @type {?} */ gamma0x = W[i - 15];
                    var /** @type {?} */ gamma0 = ((gamma0x << 25) | (gamma0x >>> 7)) ^
                        ((gamma0x << 14) | (gamma0x >>> 18)) ^
                        (gamma0x >>> 3);
                    var /** @type {?} */ gamma1x = W[i - 2];
                    var /** @type {?} */ gamma1 = ((gamma1x << 15) | (gamma1x >>> 17)) ^
                        ((gamma1x << 13) | (gamma1x >>> 19)) ^
                        (gamma1x >>> 10);
                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                }
                var /** @type {?} */ ch = (e & f) ^ (~e & g);
                var /** @type {?} */ maj = (a & b) ^ (a & c) ^ (b & c);
                var /** @type {?} */ sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
                var /** @type {?} */ sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25));
                var /** @type {?} */ t1 = h + sigma1 + ch + K[i] + W[i];
                var /** @type {?} */ t2 = sigma0 + maj;
                h = g;
                g = f;
                f = e;
                e = (d + t1) | 0;
                d = c;
                c = b;
                b = a;
                a = (t1 + t2) | 0;
            }
            // Intermediate hash value
            Hl[0] = (Hl[0] + a) | 0;
            Hl[1] = (Hl[1] + b) | 0;
            Hl[2] = (Hl[2] + c) | 0;
            Hl[3] = (Hl[3] + d) | 0;
            Hl[4] = (Hl[4] + e) | 0;
            Hl[5] = (Hl[5] + f) | 0;
            Hl[6] = (Hl[6] + g) | 0;
            Hl[7] = (Hl[7] + h) | 0;
        };
        /**
         * @return {?}
         */
        SHA256.prototype._doFinalize = /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ nBitsTotal = this._nDataBytes * 8;
            var /** @type {?} */ nBitsLeft = this._data.sigBytes * 8;
            // Add padding
            this._data.words[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
            this._data.words[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
            this._data.words[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
            this._data.sigBytes = this._data.words.length * 4;
            // Hash final blocks
            this._process();
            // Return final computed hash
            return this._hash;
        };
        return SHA256;
    }(Hasher));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ECBEncryptor = /** @class */ (function (_super) {
        __extends(ECBEncryptor, _super);
        function ECBEncryptor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Processes the data block at offset.
         *
         * \@example
         *
         *     mode.processBlock(data.words, offset);
         * @param {?} words The data words to operate on.
         * @param {?} offset The offset where the block starts.
         *
         * @return {?}
         */
        ECBEncryptor.prototype.processBlock = /**
         * Processes the data block at offset.
         *
         * \@example
         *
         *     mode.processBlock(data.words, offset);
         * @param {?} words The data words to operate on.
         * @param {?} offset The offset where the block starts.
         *
         * @return {?}
         */
        function (words, offset) {
            this._cipher.encryptBlock(words, offset);
        };
        return ECBEncryptor;
    }(BlockCipherModeAlgorithm));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ECBDecryptor = /** @class */ (function (_super) {
        __extends(ECBDecryptor, _super);
        function ECBDecryptor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Processes the data block at offset.
         *
         * \@example
         *
         *     mode.processBlock(data.words, offset);
         * @param {?} words The data words to operate on.
         * @param {?} offset The offset where the block starts.
         *
         * @return {?}
         */
        ECBDecryptor.prototype.processBlock = /**
         * Processes the data block at offset.
         *
         * \@example
         *
         *     mode.processBlock(data.words, offset);
         * @param {?} words The data words to operate on.
         * @param {?} offset The offset where the block starts.
         *
         * @return {?}
         */
        function (words, offset) {
            this._cipher.decryptBlock(words, offset);
        };
        return ECBDecryptor;
    }(BlockCipherModeAlgorithm));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Cipher Block Chaining mode.
     * @abstract
     */
    var ECB = /** @class */ (function (_super) {
        __extends(ECB, _super);
        function ECB() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ECB.Encryptor = ECBEncryptor;
        ECB.Decryptor = ECBDecryptor;
        return ECB;
    }(BlockCipherMode));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ lib = {
        BlockCipher: BlockCipher,
        WordArray: WordArray,
        CipherParams: CipherParams,
        Hasher: Hasher,
        SerializableCipher: SerializableCipher,
        PasswordBasedCipher: PasswordBasedCipher
    };
    var /** @type {?} */ algo = {
        AES: AES,
        SHA256: SHA256
    };
    var /** @type {?} */ enc = {
        Utf8: Utf8,
        Hex: Hex
    };
    // HELPERS /////////////////////////////////////////////////////////////////////////////////////////
    var /** @type {?} */ AES$1 = lib.BlockCipher._createHelper(algo.AES);
    var /** @type {?} */ SHA256$1 = lib.Hasher._createHelper(algo.SHA256);

    var CryptoHelper = /** @class */ (function () {
        function CryptoHelper() {
        }
        CryptoHelper.encrypt = function (data, secretKey) {
            var originalText = JSON.stringify(data);
            var cipherText = AES$1.encrypt(originalText, secretKey).toString();
            return cipherText;
        };
        CryptoHelper.decrypt = function (cipherText, secretKey) {
            var bytes = AES$1.decrypt(cipherText, secretKey);
            var originalText = bytes.toString(enc.Utf8);
            var data = JSON.parse(originalText);
            return data;
        };
        CryptoHelper.randomString = function (stringLength) {
            if (!stringLength) {
                stringLength = 128;
            }
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
            var randomString = '';
            for (var i = 0; i < stringLength; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                randomString += chars.substring(rnum, rnum + 1);
            }
            return randomString;
        };
        return CryptoHelper;
    }());

    // Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
    var Microblink = /** @class */ (function () {
        function Microblink() {
            this.recognizers = [];
            this.authorizationHeader = '';
            this.exportImages = false;
            this.exportFullDocumentImage = false;
            this.exportSignatureImage = false;
            this.exportFaceImage = false;
            this.detectGlare = false;
            this.allowBlurFilter = false;
            this.anonymizeNetherlandsMrz = false;
            this.anonymizeCardNumber = false;
            this.anonymizeIban = false;
            this.anonymizeCvv = false;
            this.anonymizeOwner = false;
            this.listeners = [];
            this.scanFrameQueue = [];
            this.endpoint = '';
            this.API = new MicroblinkApi();
        }
        /**
         * Terminate all active requests (pending responses)
         */
        Microblink.prototype.TerminateActiveRequests = function () {
            this.API.TerminateAll();
            // Clear scan frame queue if it is not empty
            this.scanFrameQueue = [];
        };
        /**
         * Register global success and/or error listener(s)
         */
        Microblink.prototype.RegisterListener = function (scanListener) {
            this.listeners.push(scanListener);
        };
        /**
         * Scan file and get result from subscribed observable
         */
        Microblink.prototype.ScanFile = function (scanInputFile, uploadProgress) {
            return this.scan(scanInputFile.blob, true);
        };
        /**
         * Push file to SCAN queue, global listener(s) will handle the result
         */
        Microblink.prototype.SendFile = function (scanInputFile, uploadProgress) {
            // Call observable with empty callback because global listener will handle result
            // NOTE: error callback should be defined to handle Uncaught exception
            // tslint:disable-next-line:no-empty
            this.scan(scanInputFile.blob, true, uploadProgress).subscribe(function () {
                /** */
            }, function () {
                /** */
            });
        };
        /**
         * Push video frame to SCAN queue, global listener(s) will handle the result
         */
        Microblink.prototype.SendFrame = function (scanInputFrame) {
            // Get frame quality estimatior
            var frameQuality = FrameHelper.getFrameQuality(scanInputFrame.pixelData);
            // Add the frame with quality to the scan queue
            this.scanFrameQueue.push({ frame: scanInputFrame, quality: frameQuality });
            // Skip finding of best frame if queue is not full with enough number of frames
            if (this.scanFrameQueue.length < Microblink.fromHowManyFramesQualityCalculateBestFrame) {
                return;
            }
            // Find video frame with best quality
            var bestQuality = 0;
            var bestFrame;
            this.scanFrameQueue.forEach(function (scanFrame) {
                if (scanFrame.quality > bestQuality) {
                    bestQuality = scanFrame.quality;
                    bestFrame = scanFrame.frame;
                }
            });
            // Clear scan frame queue
            this.scanFrameQueue = [];
            if (bestFrame !== undefined) {
                // Call observable with empty callback because global listener will handle result
                // NOTE: error callback should be defined to handle Uncaught exception
                // tslint:disable-next-line:no-empty
                this.scan(bestFrame.blob, false).subscribe(function () {
                    /** */
                }, function () {
                    /** */
                });
            }
        };
        /**
         * Set recognizers which will be used in next SCAN(s)
         */
        Microblink.prototype.SetRecognizers = function (recognizers) {
            this.recognizers = recognizers;
            var event = new CustomEvent('recognizersUpdated', {
                detail: { recognizers: this.recognizers },
                cancelable: true,
                bubbles: true
            });
            document.dispatchEvent(event);
        };
        /**
         * Get defined recognizers
         */
        Microblink.prototype.GetRecognizers = function () {
            return this.recognizers;
        };
        /**
         * Set authorization header value to authorize with https://api.microblink.com/recognize
         */
        Microblink.prototype.SetAuthorization = function (authorizationHeader) {
            this.authorizationHeader = authorizationHeader;
            this.API.SetAuthorization(authorizationHeader);
        };
        /**
         * Get defined authorization header
         */
        Microblink.prototype.GetAuthorization = function () {
            return this.authorizationHeader;
        };
        /**
         * Change which images to export for next request
         * @param exportImages is either a boolean flag which describes whether API should return extracted images in next response or an array of API properties
         */
        Microblink.prototype.SetExportImages = function (exportImages) {
            this.exportImages = exportImages;
            this.API.SetExportImages(exportImages);
        };
        /**
         * Change which images to export for next request
         * @param exportFullDocumentImage is a boolean flag which describes whether API should return extracted full document image in next response
         */
        Microblink.prototype.SetExportFullDocumentImage = function (exportFullDocumentImage) {
            this.exportFullDocumentImage = exportFullDocumentImage;
            this.API.SetExportFullDocumentImage(exportFullDocumentImage);
        };
        /**
         * Change which images to export for next request
         * @param exportSignatureImage is a boolean flag which describes whether API should return extracted signature image in next response
         */
        Microblink.prototype.SetExportSignatureImage = function (exportSignatureImage) {
            this.exportSignatureImage = exportSignatureImage;
            this.API.SetExportSignatureImage(exportSignatureImage);
        };
        /**
         * Change which images to export for next request
         * @param exportFaceImage is a boolean flag which describes whether API should return extracted face image in next response
         */
        Microblink.prototype.SetExportFaceImage = function (exportFaceImage) {
            this.exportFaceImage = exportFaceImage;
            this.API.SetExportFaceImage(exportFaceImage);
        };
        /**
         * Set detect glare option for next request
         * @param detectGlare is a boolean flag which describes whether API should return null for image segments where glare is detected
         */
        Microblink.prototype.SetDetectGlare = function (detectGlare) {
            this.detectGlare = detectGlare;
            this.API.SetDetectGlare(detectGlare);
        };
        /**
         * Set allow blur filter option for next request
         * @param allowBlurFilter is a boolean flag which describes whether API should return null for image segments where blur is detected
         */
        Microblink.prototype.SetAllowBlurFilter = function (allowBlurFilter) {
            this.allowBlurFilter = allowBlurFilter;
            this.API.SetAllowBlurFilter(allowBlurFilter);
        };
        /**
         * Set endpoint for next SCAN(s)
         * Default value is https://api.microblink.com/recognize
         * Endpoint should be changed when backend proxy which is credentials keeper is using as proxy between
         * Microblink SaaS API and frontend application which uses this library.
         */
        Microblink.prototype.SetEndpoint = function (endpoint) {
            this.endpoint = endpoint;
            this.API.SetEndpoint(endpoint);
        };
        /**
         * Set anonymize card number (works on BLINK_CARD recognizer) for next request
         * @param anonymizeCardNumber is a boolean flag which describes whether API should return a base64 image of the scanned card with the card number anonymized
         */
        Microblink.prototype.SetAnonymizeCardNumber = function (anonymizeCardNumber) {
            this.anonymizeCardNumber = anonymizeCardNumber;
            this.API.SetAnonymizeCardNumber(anonymizeCardNumber);
        };
        /**
         * Set anonymize IBAN (works on BLINK_CARD recognizer) for next request
         * @param anonymizeIbanNumber is a boolean flag which describes whether API should return a base64 image of the scanned card with the IBAN number anonymized
         */
        Microblink.prototype.SetAnonymizeIban = function (anonymizeIban) {
            this.anonymizeIban = anonymizeIban;
            this.API.SetAnonymizeIban(anonymizeIban);
        };
        /**
         * Set anonymize cvv (works on BLINK_CARD recognizer) for next request
         * @param anonymizeCvv is a boolean flag which describes whether API should return a base64 image of the scanned card with the cvv number anonymized
         */
        Microblink.prototype.SetAnonymizeCvv = function (anonymizeCvv) {
            this.anonymizeCvv = anonymizeCvv;
            this.API.SetAnonymizeCvv(anonymizeCvv);
        };
        /**
         * Set anonymize owner (works on BLINK_CARD recognizer) for next request
         * @param anonymizeOwner is a boolean flag which describes whether API should return a base64 image of the scanned card with the owner name anonymized
         */
        Microblink.prototype.SetAnonymizeOwner = function (anonymizeOwner) {
            this.anonymizeOwner = anonymizeOwner;
            this.API.SetAnonymizeOwner(anonymizeOwner);
        };
        /**
         * Set user identificator which will be stored with uploaded image
         * @param userId is any string which unique identifies user who use SDK and upload any image to API
         */
        Microblink.prototype.SetUserId = function (userId) {
            this.API.SetUserId(userId);
        };
        /**
         * When Authorization is not set it is available to disable persiting of uploaded data, by default it is enabled
         * this should be disabled for every page where GDPR is not implemented and this is ability to disable data persisting
         * on some demo pages
         * @param isEnabled is flag which describes should or should not API persist uploaded data, be default it is enabled
         */
        Microblink.prototype.SetIsDataPersistingEnabled = function (isEnabled) {
            this.API.SetIsDataPersistingEnabled(isEnabled);
        };
        /**
         * Set anonymize netherlandsMrz (works on BLINK_CARD recognizer) for next request
         * @param anonymizeNetherlandsMrz is a boolean flag which describes whether API should return a base64 image of the scanned card with the netherlands MRZ anonymized
         */
        Microblink.prototype.SetAnonymizeNetherlandsMrz = function (anonymizeNetherlandsMrz) {
            this.anonymizeNetherlandsMrz = anonymizeNetherlandsMrz;
            this.API.SetAnonymizeNetherlandsMrz(anonymizeNetherlandsMrz);
        };
        /**
         * Check is all requirement for desktop-to-mobile feature are available
         */
        Microblink.prototype.IsDesktopToMobileAvailable = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.isDesktopToMobileAvailable()];
                });
            });
        };
        /**
         * Check if any recognizer is set in the recognizers array
         */
        Microblink.prototype.IsRecognizerArraySet = function () {
            if (this.recognizers) {
                if (this.recognizers.constructor === Array) {
                    if (this.recognizers.length > 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                return true;
            }
            return false;
        };
        /**
         * Create object for exchange data for scan between devices
         * @param data is object with optional data which will be added to the ScanExchanger object
         */
        Microblink.prototype.CreateScanExchanger = function (data, onChange) {
            return __awaiter(this, void 0, void 0, function () {
                var secretKey, scanAsPromise, scan, unsubscribe;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Get recognizers, authorizationHeader, images to export, and glare detection option from remote request
                            data.recognizers = this.recognizers;
                            data.authorizationHeader = this.authorizationHeader; // it is encrypted
                            data.exportImages = this.exportImages;
                            data.exportFullDocumentImage = this.exportFullDocumentImage;
                            data.exportSignatureImage = this.exportSignatureImage;
                            data.exportFaceImage = this.exportFaceImage;
                            data.detectGlare = this.detectGlare;
                            data.allowBlurFilter = this.allowBlurFilter;
                            data.anonymizeCardNumber = this.anonymizeCardNumber;
                            data.anonymizeIban = this.anonymizeIban;
                            data.anonymizeCvv = this.anonymizeCvv;
                            data.anonymizeOwner = this.anonymizeOwner;
                            data.endpoint = this.endpoint;
                            data.anonymizeNetherlandsMrz = this.anonymizeNetherlandsMrz;
                            secretKey = CryptoHelper.randomString(32);
                            // Key should be part of object during creating shortUrl, Firebase Function will read key, generate link
                            // and delete key set in plain string
                            data.key = secretKey;
                            // Encrypt authorizationHeader
                            data.authorizationHeader = CryptoHelper.encrypt(data.authorizationHeader, secretKey);
                            scanAsPromise = ScanExchangeHelper.createScanExchanger(data);
                            return [4 /*yield*/, scanAsPromise
                                // Listen for data from Firestore
                            ];
                        case 1:
                            scan = _a.sent();
                            unsubscribe = scan.onSnapshot(function (scanDoc) { return __awaiter(_this, void 0, void 0, function () {
                                var scanDocData, qrCodeAsBase64, scanResultDec, resultUrl, response, blob, text;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            scanDocData = scanDoc.data();
                                            if (!(scanDocData.status === ScanExchangerCodes.Step02_ExchangeLinkIsGenerated &&
                                                scanDocData.shortLink)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, ScanExchangeHelper.generateQRCode(scanDocData.shortLink)];
                                        case 1:
                                            qrCodeAsBase64 = _a.sent();
                                            scanDocData.qrCodeAsBase64 = qrCodeAsBase64;
                                            _a.label = 2;
                                        case 2:
                                            if (!(scanDocData.status === ScanExchangerCodes.Step07_ResultIsAvailable &&
                                                (scanDocData.result || scanDocData.resultUrl))) return [3 /*break*/, 8];
                                            scanResultDec = void 0;
                                            if (!scanDocData.result) return [3 /*break*/, 3];
                                            scanResultDec = CryptoHelper.decrypt(scanDocData.result, secretKey);
                                            return [3 /*break*/, 7];
                                        case 3:
                                            if (!scanDocData.resultUrl) return [3 /*break*/, 7];
                                            resultUrl = CryptoHelper.decrypt(scanDocData.resultUrl, secretKey);
                                            return [4 /*yield*/, fetch(resultUrl)];
                                        case 4:
                                            response = _a.sent();
                                            return [4 /*yield*/, response.blob()];
                                        case 5:
                                            blob = _a.sent();
                                            return [4 /*yield*/, blobToBase64String(blob)];
                                        case 6:
                                            text = _a.sent();
                                            scanDocData.result = text;
                                            scanResultDec = CryptoHelper.decrypt(text, secretKey);
                                            firebase
                                                .storage()
                                                .refFromURL(resultUrl)
                                                .delete();
                                            _a.label = 7;
                                        case 7:
                                            // Notify success listeners
                                            this.notifyOnSuccessListeners({ result: scanResultDec, sourceBlob: null }, true);
                                            // After successfully read 'result', remove it from the Firestore
                                            scan.update({
                                                result: null,
                                                resultUrl: null
                                            });
                                            _a.label = 8;
                                        case 8:
                                            // Error handling
                                            if (scanDocData.status === ScanExchangerCodes.ErrorHappened && scanDocData.error) {
                                                // Notify error listeners
                                                this.notifyOnErrorListeners(scanDocData.error);
                                            }
                                            // Send onUpdate callback
                                            onChange(scanDocData);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            // Return scan object subscription to enable external unsubscribe
                            return [2 /*return*/, unsubscribe];
                    }
                });
            });
        };
        Microblink.prototype.isDesktopToMobileAvailable = function () {
            return __awaiter(this, void 0, void 0, function () {
                var err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            // Try to fetch any document
                            return [4 /*yield*/, firebase
                                    .app()
                                    .firestore()
                                    .doc('scans/any-document')
                                    .get()];
                        case 1:
                            // Try to fetch any document
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            // Only if Firestore is not available then desktop-to-mobile is not available
                            if (err_1.name === 'FirebaseError' && err_1.code === 'unavailable') {
                                /*
                                console.error(
                                  'Microblink.SDK: feature desktop-to-mobile is not available because connection to the Firebase.Firestore is not available!'
                                )
                                */
                                return [2 /*return*/, false];
                            }
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/, true];
                    }
                });
            });
        };
        /**
         * Notify all global listeners when success scan is complete
         */
        Microblink.prototype.notifyOnSuccessListeners = function (scanOutput, isFileScan) {
            var data = scanOutput.result.data;
            var isSuccessfulResponse = false;
            // check if it is fetched data array of results
            if (Array.isArray(data)) {
                data.forEach(function (resultItem) {
                    if (resultItem.result) {
                        isSuccessfulResponse = true;
                    }
                });
            }
            else {
                // otherwise it is returned result as object
                var result = data.result;
                if (result) {
                    isSuccessfulResponse = true;
                }
            }
            // when success response is received then terminate active requests and return results
            if (isSuccessfulResponse || isFileScan) {
                // Active requests can only exists if it is video frame scan
                if (!isFileScan) {
                    this.TerminateActiveRequests();
                }
                this.listeners.forEach(function (listener) {
                    if (listener.onScanSuccess) {
                        listener.onScanSuccess(scanOutput);
                    }
                });
            }
        };
        /**
         * Notify all global listeners when error happens, HTTP response status code is not equal to 200 or
         * base64 encode failed
         */
        Microblink.prototype.notifyOnErrorListeners = function (err) {
            this.TerminateActiveRequests();
            // Make silent if JSON is not prasable because this error will happen when request is aborted
            if (err.code === StatusCodes.ResultIsNotValidJSON) {
                return;
            }
            this.listeners.forEach(function (listener) {
                if (listener.onScanError) {
                    listener.onScanError(err);
                }
            });
        };
        /**
         * Execute scan on Microblink API service
         */
        Microblink.prototype.scan = function (blob, isFileScan, uploadProgress) {
            var _this = this;
            return new Observable_2(function (observer) {
                blobToBase64String(blob)
                    .then(function (blobAsBase64String) {
                    _this.API.Recognize(_this.recognizers, blobAsBase64String, uploadProgress).subscribe(function (result) {
                        var output = { sourceBlob: blob, result: result };
                        _this.notifyOnSuccessListeners(output, isFileScan);
                        observer.next(output);
                        observer.complete();
                    }, function (err) {
                        if (err) {
                            _this.notifyOnErrorListeners(err);
                            observer.error(err);
                        }
                    });
                })
                    .catch(function (err) {
                    _this.notifyOnErrorListeners(err);
                    observer.error(err);
                });
            });
        };
        Microblink.fromHowManyFramesQualityCalculateBestFrame = 5;
        return Microblink;
    }());

    /**
     * Helper for detecting ScanInputFrame type
     */
    function IsScanInputFrame(scanInput) {
        return !!scanInput.pixelData;
    }
    (function (SDK_1) {
        var SDK = new Microblink();
        /**
         * Scan image and get result from subscribed observable
         */
        function ScanImage(scanInput, uploadProgress) {
            return SDK.ScanFile(scanInput, uploadProgress);
        }
        SDK_1.ScanImage = ScanImage;
        /**
         * Register global listener success and/or error callback
         */
        function RegisterListener(scanListener) {
            SDK.RegisterListener(scanListener);
        }
        SDK_1.RegisterListener = RegisterListener;
        /**
         * Push image (file or video frame) to scanning queue, results will be handled by global listener(s)
         */
        function SendImage(scanInput, uploadProgress) {
            if (IsScanInputFrame(scanInput)) {
                return SDK.SendFrame(scanInput);
            }
            else {
                return SDK.SendFile(scanInput, uploadProgress);
            }
        }
        SDK_1.SendImage = SendImage;
        /**
         * Set recognizers which will be used in next request
         */
        function SetRecognizers(recognizers) {
            SDK.SetRecognizers(recognizers);
        }
        SDK_1.SetRecognizers = SetRecognizers;
        /**
         * Get recognizers which are defined in the SDK
         */
        // export function GetRecognizers(): string | string[] {
        //   return SDK.GetRecognizers()
        // }
        /**
         * Set authorization header which will be used in next request
         * @param authorizationHeader is authorization header with apiKey and apiSecret which should be generated
         * here: https://microblink.com/customer/api
         */
        function SetAuthorization(authorizationHeader) {
            SDK.SetAuthorization(authorizationHeader);
        }
        SDK_1.SetAuthorization = SetAuthorization;
        /**
         * Get authorization header which is defined in the SDK
         */
        // export function GetAuthorization(): string {
        //   return SDK.GetAuthorization()
        // }
        /**
         * Change which images to export for next request
         * @param exportImages is either a boolean flag which describes whether API should return extracted images in next response or an array of API properties
         */
        function SetExportImages(exportImages) {
            SDK.SetExportImages(exportImages);
        }
        SDK_1.SetExportImages = SetExportImages;
        /**
         * Change which images to export for next request
         * @param exportFullDocumentImage is a boolean flag which describes whether API should return extracted full document image in next response
         */
        function SetExportFullDocumentImage(exportFullDocumentImage) {
            SDK.SetExportFullDocumentImage(exportFullDocumentImage);
        }
        SDK_1.SetExportFullDocumentImage = SetExportFullDocumentImage;
        /**
         * Change which images to export for next request
         * @param exportSignatureImage is a boolean flag which describes whether API should return extracted signature image in next response
         */
        function SetExportSignatureImage(exportSignatureImage) {
            SDK.SetExportSignatureImage(exportSignatureImage);
        }
        SDK_1.SetExportSignatureImage = SetExportSignatureImage;
        /**
         * Change which images to export for next request
         * @param exportFaceImage is a boolean flag which describes whether API should return extracted face image in next response
         */
        function SetExportFaceImage(exportFaceImage) {
            SDK.SetExportFaceImage(exportFaceImage);
        }
        SDK_1.SetExportFaceImage = SetExportFaceImage;
        /**
         * Set detect glare option for next request
         * @param detectGlare is a boolean flag which describes whether API should return null for image segments where glare is detected
         */
        function SetDetectGlare(detectGlare) {
            SDK.SetDetectGlare(detectGlare);
        }
        SDK_1.SetDetectGlare = SetDetectGlare;
        /**
         * Set allow blur filter option for next request
         * @param allowBlurFilter is a boolean flag which describes whether API should return null for image segments where blur is detected
         */
        function SetAllowBlurFilter(allowBlurFilter) {
            SDK.SetAllowBlurFilter(allowBlurFilter);
        }
        SDK_1.SetAllowBlurFilter = SetAllowBlurFilter;
        /**
         * Set HTTP API endpoint for next request
         */
        function SetEndpoint(endpoint) {
            SDK.SetEndpoint(endpoint);
        }
        SDK_1.SetEndpoint = SetEndpoint;
        /**
         * Set anonymize card number (works on BLINK_CARD recognizer) for next request
         * @param anonymizeCardNumber is a boolean flag which describes whether API should return a base64 image of the scanned card with the card number anonymized
         */
        function SetAnonymizeCardNumber(anonymizeCardNumber) {
            SDK.SetAnonymizeCardNumber(anonymizeCardNumber);
        }
        SDK_1.SetAnonymizeCardNumber = SetAnonymizeCardNumber;
        /**
         * Set anonymize IBAN (works on BLINK_CARD recognizer) for next request
         * @param anonymizeIbanNumber is a boolean flag which describes whether API should return a base64 image of the scanned card with the card number anonymized
         */
        function SetAnonymizeIban(anonymizeIban) {
            SDK.SetAnonymizeIban(anonymizeIban);
        }
        SDK_1.SetAnonymizeIban = SetAnonymizeIban;
        /**
         * Set anonymize cvv (works on BLINK_CARD recognizer) for next request
         * @param anonymizeCvv is a boolean flag which describes whether API should return a base64 image of the scanned card with the cvv number anonymized
         */
        function SetAnonymizeCvv(anonymizeCvv) {
            SDK.SetAnonymizeCvv(anonymizeCvv);
        }
        SDK_1.SetAnonymizeCvv = SetAnonymizeCvv;
        /**
         * Set anonymize owner (works on BLINK_CARD recognizer) for next request
         * @param anonymizeOwner is a boolean flag which describes whether API should return a base64 image of the scanned card with the owner name anonymized
         */
        function SetAnonymizeOwner(anonymizeOwner) {
            SDK.SetAnonymizeOwner(anonymizeOwner);
        }
        SDK_1.SetAnonymizeOwner = SetAnonymizeOwner;
        /**
         * Set anonymize netherlandsMrz (works on BLINK_CARD recognizer) for next request
         * @param anonymizeNetherlandsMrz is a boolean flag which describes whether API should return a base64 image of the scanned card with the netherlands MRZ anonymized
         */
        function SetAnonymizeNetherlandsMrz(anonymizeNetherlandsMrz) {
            SDK.SetAnonymizeNetherlandsMrz(anonymizeNetherlandsMrz);
        }
        SDK_1.SetAnonymizeNetherlandsMrz = SetAnonymizeNetherlandsMrz;
        /**
         * Terminate all queued HTTP requests.
         * This is useful when images are sending from camera video stream in ms time periods and when successful
         * result is received then all pending requests could be terminated, this should be primary used for application
         * performance improvements, to break all HTTP connections which will return redundant results
         */
        function TerminateRequest() {
            SDK.TerminateActiveRequests();
        }
        SDK_1.TerminateRequest = TerminateRequest;
        /**
         * Set unique user ID which will be stored with uploaded image to associate image with user who uploaded the image
         * @param userId is string user identificator, recommended it to be an user's email because when delete request is sent by this email, all images associated with this email will be permanentally removed if it is stored on upload, not every image will be stored, this depends on other API key options
         */
        function SetUserId(userId) {
            SDK.SetUserId(userId);
        }
        SDK_1.SetUserId = SetUserId;
        /**
         * When Authorization is not set it is available to disable persiting of uploaded data, by default it is enabled
         * this should be disabled for every page where GDPR is not implemented and this is ability to disable data persisting
         * on some demo pages
         * @param isEnabled is flag which describes should or should not API persist uploaded data, be default it is enabled
         */
        function SetIsDataPersistingEnabled(isEnabled) {
            SDK.SetIsDataPersistingEnabled(isEnabled);
        }
        SDK_1.SetIsDataPersistingEnabled = SetIsDataPersistingEnabled;
        /**
         * Get all SDK status codes
         */
        SDK_1.StatusCodes = StatusCodes;
        /**
         * Create object to exchange data between devices
         * @param data is object with ScanExchanger structure
         */
        function CreateScanExchanger(data, onUpdate) {
            if (data === void 0) { data = {}; }
            return SDK.CreateScanExchanger(data, onUpdate);
        }
        SDK_1.CreateScanExchanger = CreateScanExchanger;
        /**
         * Get all Scan exchanger status codes
         */
        SDK_1.ScanExchangerCodes = ScanExchangerCodes;
        /**
         * Get all export image types
         */
        SDK_1.ExportImageTypes = ExportImageTypes;
        /**
         * Decrypt protected object
         * @param dataEncrypted is encrypted object as string
         * @param key is secret key with which data will be decrypted
         */
        function Decrypt(dataEncrypted, key) {
            return CryptoHelper.decrypt(dataEncrypted, key);
        }
        SDK_1.Decrypt = Decrypt;
        /**
         * Protect plain object
         * @param data is plain object
         * @param key us secret key with which data will be encrypted
         */
        function Encrypt(data, key) {
            return CryptoHelper.encrypt(data, key);
        }
        SDK_1.Encrypt = Encrypt;
        /**
         * Check if all requirements for desktop-to-mobile feature are available
         */
        function IsDesktopToMobileAvailable() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, SDK.IsDesktopToMobileAvailable()];
                });
            });
        }
        SDK_1.IsDesktopToMobileAvailable = IsDesktopToMobileAvailable;
        /**
         * Check if any recognizer is set in the recognizers array
         */
        function IsRecognizerArraySet() {
            return SDK.IsRecognizerArraySet();
        }
        SDK_1.IsRecognizerArraySet = IsRecognizerArraySet;
    })(exports.SDK || (exports.SDK = {}));

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=microblink.sdk.umd.js.map
