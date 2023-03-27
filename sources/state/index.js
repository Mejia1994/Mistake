import useString from "./Use/useString";
import useObject from "./Use/useObject";
import useFunction from "./Use/useFunction";
import useBind from "./Use/useBind";

const isFunction = function (func) {
    return (typeof func === 'function')
}

const isString = function (value) {
    return (typeof value === 'string')
}

const Types = {
    bind: useBind,
    function: useFunction,
    string: useString,
    object: useObject,
}

const stateManager = function stateManager(use = {}) {

    let objectType = Object.prototype.toString.call(use);
    let type = Object.prototype.toString.call(use).slice(8, objectType.length - 1).toLowerCase();

    if (!Types.hasOwnProperty(type)) {
        console.log(`Invalid argument ${type}`);
        return false;
    }

    const fn = Types[type].bind(this);
    return fn(use);
}

const bindManager = function () {
    let [stateKey, idElementOrAttachedEvent, attachedEvent] = arguments;

    this.stateKey = stateKey;
    this.idElement = isString(idElementOrAttachedEvent) ? idElementOrAttachedEvent : null;
    this.attachedEvent = isFunction(idElementOrAttachedEvent) ? idElementOrAttachedEvent : attachedEvent;

    return {
        stateKey: this.stateKey,
        idElement: this.idElement,
        attachedEvent: this.attachedEvent,

        get [Symbol.toStringTag]() {
            return 'bind';
        }
    };
}

export {stateManager, bindManager};
