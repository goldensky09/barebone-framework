NS.Components.Comp2 = class extends NS.Components.BaseComponent {
    constructor(cmpNode){
        super(cmpNode);
        console.log("comp2 initialized at", cmpNode.dataset);
        this.subscribe("comp1-click", (args)=>{
            console.log(arguments);
        })
    }
}