import Store from "./Store";
import { __el } from "./utils/dom"

export default class Controller {  
  constructor() {
    this.components = {};    
    this.bootstrap();    
  }
  // bootstrap() {
  //   this.store = NS.store = new Store();
  //   document.__el("[data-class-name]").forEach((el) => {
  //     const className = this.getAttribte("data-class-name");
  //     const classConfig = this.getAttribte("data-class-conf") || {};
  //     if(NS.Components[className] && typeof NS.Components[className] === 'function') {
  //       const instance = new NS.Components[className](el, this, this.store, classConfig);
  //       if(className in this.components) {
  //         this.components[className].push(instance);
  //       } else {
  //         this.components[className] = [instance];
  //       }
  //     }
  //   })
  // }
  bootstrap() {
    this.store = NS.store = new Store();
    document.querySelectorAll("[data-comp-name]").forEach((el) => {
      const compName = el.getAttribute("data-comp-name");
      const compConfig = el.getAttribute("data-comp-conf") || {};
      console.log(el);
      if(NS.Components[compName] && typeof NS.Components[compName] === 'function') {
        const instance = new NS.Components[compName](el, compConfig, this.store, this);
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