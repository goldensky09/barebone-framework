import { __el } from "./utils/dom"

export default class Controller {  
  constructor() {
    this.components = {};    
    this.bootstrap();    
  }  
  bootstrap() {
    document.querySelectorAll("[data-comp-name]").forEach((el) => {
      const compName = el.getAttribute("data-comp-name");
      let compConfig = el.getAttribute("data-comp-conf");
      if(compConfig) {
        compConfig = JSON.parse(compConfig);
      }
      if(NS.Components[compName] && typeof NS.Components[compName] === 'function') {
        const instance = new NS.Components[compName](el, compConfig);
        el.self = instance;
        if(compName in this.components) {
          this.components[compName].push(instance);
        } else {
          this.components[compName] = [instance];
        }
      }
    })
  }
}