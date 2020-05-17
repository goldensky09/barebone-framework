import { get as _get, set as _set } from "lodash";
const store = {};
const callbacks = {};

export default class Store {
  subscribe(key, callback) {
    // callback signature (newValue, oldValue)
    if (callbacks[key]) {
      callbacks[key].push(callback)
    } else {
      callbacks[key] = [callback];
    }
    if (_get(this, key)) {
      callback(_get(this, key), undefined);
    }
  }
  onChange(key, value, oldValue) {
    callbacks = _get(callbacks, key);
    if (callbacks && callbacks.length) {
      callbacks.forEach((callaback)=>{
        if (typeof callaback === "function") {
          callaback(value, oldValue)
        }
      })
    }
  }
  get(key) {
    _get(store, "key")
  }
  set(key, value) {
    const tmpOldVal = _get(key);
    _set(store, key, value);
    this.onChange(key, value, tmpOldVal);
  }
}