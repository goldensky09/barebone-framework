export default class EventEmitter {
  constructor() {
    this.handlers = [];
  }
  on(event, handler, context) {
    if (typeof context === 'undefined') { context = handler; }
    this.handlers.push({ event: event, handler: handler.bind(context) });
  }
  trigger(event, args) {
    this.handlers.forEach(topic => {
      if (topic.event === event) {
        topic.handler(args)
      }
    })
  }
}