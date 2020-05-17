export default class BaseComponent {
  constructor(cmpNode) {
    this.cmpNode = cmpNode;
    this.handlers = [];
    console.log("Base Component initialized at", cmpNode.dataset);
    cmpNode.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.addHandler();
  }
  addHandler() {
    this.cmpNode.addEventListener("click", (e) => {
      console.log("clicked on" + JSON.stringify(this.cmpNode.dataset))
    })
  }
  subscribe(event, handler, context) {
    if (typeof context === 'undefined') { context = handler; }
    this.handlers.push({ event: event, handler: handler.bind(context) });
  }
  publish(event, args) {
    this.handlers.forEach(topic => {
      if (topic.event === event) {
        topic.handler(args)
      }
    })
  }
}