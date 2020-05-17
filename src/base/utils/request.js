import { promisify, domainResolve, createSearchParams } from './index';

export const xhrMap = {};

function checkStatus(response) {
  if (response instanceof Response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }
    return Promise.reject(response);
  }
  return Promise.resolve(response);
}

export function xhrGet(url, key, fullXhr) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', domainResolve(url));
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        if (fullXhr) resolve(xhr);
        else resolve(xhr.response);
      } else {
        reject(this.status);
      }
    };
    xhr.onerror = function(error) {
      console.error(error);
      reject();
    };
    xhr.send();
    if (key) {
      xhrMap[key] = xhr;
    }
  });
}

function parseResponse(response) {
  if (response instanceof Response) {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return Promise.resolve(response.json());
    }
    return Promise.resolve(response.text());
  }
  return Promise.resolve(response);
}

export function request(config) {
  return promisify(function(resolve, reject) {
    if (!config.url) {
      reject('Invalid URL');
      return;
    }
    const url = new URL(domainResolve(config.url), window.location.href);
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      ...config.options
    };
    if (options.payload) {
      if (config.isFormData) {
        options.body = createSearchParams(options.payload);
      } else {
        options.body = JSON.stringify(options.payload);
      }
      delete options.payload;
    }

    if (options.params && options.params !== null) {
      if (!url.searchParams) {
        url.searchParams = new URLSearchParams(url.search);
      }
      Object.keys(options.params).forEach((key) => url.searchParams.append(key, options.params[key]));
    }
    fetch(url, options)
      .then(checkStatus)
      .then(parseResponse)
      .then(function(response) {
        resolve(response);
      })
      .catch(function(err) {
        reject(err);
      });
  });
}

export let loadJs = function(url, options = {}) {
  return promisify(function(resolve, reject) {
    const scriptTag = document.createElement('script');
    const head = document.getElementsByTagName('head')[0];
    scriptTag.src = domainResolve(url);
    scriptTag.async = options.async || true;
    scriptTag.id = options.nodeId || '';
    scriptTag.addEventListener('load', function() {
      resolve();
    });
    scriptTag.addEventListener('error', function() {
      reject(new Error('JS load failed'));
    });
    head.appendChild(scriptTag);
  });
};

export function loadFile(url, options = {}) {
  switch (options.type) {
    case 'js':
      return loadJs(url, options);
    default:
      break;
  }
}
