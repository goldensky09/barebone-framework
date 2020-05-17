import { registerDomMethods } from "./dom";

export function promisify(callback) {
  return new Promise(function(resolve, reject) {
    callback(resolve, reject);
  });
}

export function domainResolve(url) {
  return url.replace('http://', '//').replace('https://', '//');
}

export function createSearchParams(obj) {
  const data = new URLSearchParams();
  Object.keys(obj).forEach((key) => {
    data.append(key, obj[key]);
  });
  return data;
}

registerDomMethods();