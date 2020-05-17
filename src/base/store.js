import { get as _get, set as _set } from "lodash";
const __store = {};
const __callbacks = {};

const onChange = function (key, value, oldValue) {
  const callbacks = _get(__callbacks, key);
  if (callbacks && callbacks.length) {
    callbacks.forEach((callaback)=>{
      if (typeof callaback === "function") {
        callaback(value, oldValue)
      }
    })
  }
}
export default class Store {
  subscribe(key, callback) {    
    if (__callbacks[key]) {
      __callbacks[key].push(callback)
    } else {
      __callbacks[key] = [callback];
    }    
  }
  
  get(key) {
    return _get(__store, "key")
  }
  set(key, value) {
    const tmpOldVal = _get(key);
    _set(__store, key, value);
    onChange(key, value, tmpOldVal);
  }
}
