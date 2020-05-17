NS.Components.TitleComp = class extends NS.Components.BaseComponent {
    constructor($el, config, store, controller){
        console.log("comp1 initialized at", $el, config);
        super($el, config, store, controller);
        const that = this;
        $el.addEventListener("click", ()=>{
            console.log("clicked on comp1")
            that.publish("comp1-click", {msg:"hello from comp1"});
        })
    }
}