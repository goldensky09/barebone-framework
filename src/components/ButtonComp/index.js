import EVENTS from "./events";
export default class ButtonComp extends NS.Components.BaseComponent {
    btnClick() {
        console.log("button clicked");
        this.emit(EVENTS.BTN_CLICK);
    }
    bindEvents() {
        this.$el.__el(".btn").__on("click", this.btnClick.bind(this));
        NS.store.subscribe("user-details", function(data) {
            console.log("new user details", data);
        })
    }
}