const __events = {};

export default class EventEmitter {  
  on(event, listener) {
      if (typeof __events[event] !== 'object') {
          __events[event] = [];
      }
      __events[event].push(listener);
      return () => this.off(event, listener);
  }
  off(event, listener) {
      if (typeof __events[event] !== 'object') {
          return;
      }
      const idx = __events[event].indexOf(listener);
      if (idx > -1) {
          __events[event].splice(idx, 1);
      }
  }
  removeAllListeners() {
      Object.keys(__events).forEach((event) => __events[event].splice(0, __events[event].length));
  }
  emit(event, ...args) {
      if (typeof __events[event] !== 'object') {
          return;
      }
      [...__events[event]].forEach(listener => listener.apply(this, args));
  }
  once(event, listener) {
      const remove = this.on(event, (...args) => {
          remove();
          listener.apply(this, args);
      });
      return remove;
  }
}