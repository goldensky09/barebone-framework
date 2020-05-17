import EventEmitter from "./utils/EventEmitter"
export default class BaseComponent extends EventEmitter {
  constructor($el, config, store, controller) {
    super()
    this.$el = $el;
    this.controller = controller;
    this.store = store;
    this.config = config;
  }
}