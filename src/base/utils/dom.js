export function register(name, fn) {
  Element.prototype[`__${name}`] = fn;
}

export function el(arg) {
  return this.querySelector(arg);
}

export function els(arg) {
  return this.querySelectorAll(arg);
}

function addClass(...args) {
  args.forEach((className) => {
    this.classList.add(className);
  });
  return this;
}

function removeClass(...args) {
  args.forEach((className) => {
    this.classList.remove(className);
  });
  return this;
}

function createElement(tag, classNames = [], id = '', content) {
  const el = document.createElement(tag);
  classNames.forEach((className) => {
    el.__addClass(className);
  });
  if (id) {
    el.id = id;
  }
  if (content) {
    el.innerHTML = content;
  }
  this.appendChild(el);
  return el;
}

function createDiv(classNames, id, content) {
  return this.__createElement('div', classNames, id, content);
}

function removeEl() {
  if (this.parentElement) {
    this.parentElement.removeChild(this);
  }
}

function addStyles(styles) {
  Object.keys(styles).forEach((key) => {
    this.style[key] = styles[key];
  });
}

function domLogger(content) {
  let $logCont = this.querySelector('.__logger');
  if (!$logCont) {
    $logCont = this.__createDiv(['__logger']);
  }
  const $logItem = $logCont.__createDiv(['__logger-itm']);
  $logItem.innerHTML = content;
  $logCont.appendChild($logItem);
}

function containElement(elem) {
  return this && elem && (this === elem || elem.parentElement === this || this.contains(elem));
}

function replaceContent(content) {
  this.innerHTML = content;
}
function hasClass(cls) {
  return this.classList.contains(cls);
}

function attr(key, val) {
  return this.setAttribute(key, val);
}

function addEventListener(event, callback, isCaptureMode = false) {
  this.addEventListener(event, callback, isCaptureMode);
}

function removeEventListener(event, callback, isCaptureMode = false) {
  this.removeEventListener(event, callback, isCaptureMode);
}

export function registerDomMethods() {
  register('addClass', addClass);
  register('removeClass', removeClass);
  register('createElement', createElement);
  register('createDiv', createDiv);
  register('removeEl', removeEl);
  register('addStyles', addStyles);
  register('log', domLogger);
  register('containElement', containElement);
  register('replaceContent', replaceContent);
  register('hasClass', hasClass);
  register('attr', attr);
  register('on', addEventListener);
  register('off', removeEventListener);
  register('el', el);
  register('els', els);
}
