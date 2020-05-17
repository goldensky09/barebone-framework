NS.Components.Comp3 = class extends NS.Components.BaseComponent {
    constructor(cmpNode){
        super(cmpNode);
        console.log("comp3 initialized at", cmpNode.dataset);
        this.subscribe("comp1-click", (args)=>{
            console.log(arguments);
        })
    }
}