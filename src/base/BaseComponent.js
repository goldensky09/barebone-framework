import EventEmitter from "./utils/EventEmitter"
export default class BaseComponent extends EventEmitter {
  constructor($el, config) {
    super();
    this.$el = $el;
    this.config = config;
    if(this.bindEvents) {
      this.bindEvents();
    }
  }
}