import EVENTS from "./events";
export default class Login extends NS.Components.BaseComponent {
    login() {        
        NS.store.set("user-details", {
          name: this.config.name,
          uuid: this.config.uuid,
        });
        console.log("login success");
    }
    btnClick() {
      this.login();
    }
    bindEvents() {
      this.on("btn_click", this.btnClick.bind(this));        
    }
}