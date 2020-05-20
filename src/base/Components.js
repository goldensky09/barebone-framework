export default class Components {
    static register(Comps) {
        const _this = this;
        if(typeof Comps === "function") {
            _this[Comps.name] = Comps;
        } else {
            Object.keys(Comps).forEach((key)=>{
                _this[Comps.name]
            });
        }
    }
    static get(key) {
        return this[key];
    }
}