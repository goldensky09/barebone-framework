import onChange from "./Watch";
import { get } from "lodash"

const subscriptions = {}
const obj = {
  watch(propPath, callback){
    if (subscriptions[propPath]) {
      subscriptions[propPath].push(callback)
    } else {
      subscriptions[propPath] = [callback];
    }
    if (get(this, propPath)) {
      callback(get(this, propPath), undefined, this);
    }
    console.log(subscriptions);
  }
};
let i = 0;
const Store = onChange(obj, function (path, value, previousValue) {
	console.log('Object changed:', ++i);
	console.log('this:', this);
	console.log('path:', path);
	console.log('value:', value);
  console.log('previousValue:', previousValue);
  subscriptions[path] && subscriptions[path].forEach(callback => {
    callback(value, previousValue, this);
  });
});

// const handler = {
//   set(target, key, value) {
//     console.log(arguments)
//     console.log(`Setting value ${key} as ${JSON.stringify(value)} on ${JSON.stringify(target)}`)
//     target[key] = value;
//   },
//   get(target, key) {
//     console.log(arguments)
//     console.log(`Getting value of ${key} on ${JSON.stringify(target)}`);
//     return target[key];
//   },
//   deleteProperty(target, key) {
//     console.log(`Deleting ${key}`);
//     delete target[key];
//   }
// };

// const Store = new Proxy(objex, handler);

// export default class Store extends p {
//     constructor() {
//         console.log("Model Initialized");
//     }
//     subscribe(prop, callback) {
//         console.log("subscribed to prop", prop)
//     }
// }\

export default Store;