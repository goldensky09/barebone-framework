export default class Bootstrapper {
    constructor() {
        console.log("Bootstrapper init")
        this.initComponents();
    }
    initComponents() {
        document.querySelectorAll("[data-class-def]").forEach((cmp, idx, cmpNodeList) => {
            const classDef = cmp.getAttribute("data-class-def").split(".");
            var cmpInstance = classDef.reduce(function (a, b, c) {
                if (typeof a === "object") {
                    return a[b]
                } else {
                    return window[a][b]
                }
            });
            cmp.selfInstance = new cmpInstance(cmp);
        });
    }
}