import { get as _get, set as _set } from "lodash";

export default class Store {
  #__store = {};
  #__callbacks = {};
  constructor(obj = {}) {
    this.#__store = obj;
  }
  #onChange (key, value, oldValue) {
    const callbacks = _get(this.#__callbacks, key);
    if (callbacks && callbacks.length) {
      callbacks.forEach((callback)=>{
        if (typeof callback === "function") {
          callback(value, oldValue)
        }
      })
    }
  }
  subscribe(key, callback) {    
    if (this.#__callbacks[key]) {
      this.#__callbacks[key].push(callback)
    } else {
      this.#__callbacks[key] = [callback];
      
    }    
  }
  
  get(key) {
    return _get(this.#__store, "key")
  }
  set(key, value) {
    const tmpOldVal = _get(key);
    _set(this.#__store, key, value);
    this.#onChange(key, value, tmpOldVal);
  }
}
