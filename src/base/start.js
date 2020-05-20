const NS = {};
window.NS = NS;
// NS.Components = {};
import Controller from "./controller";
import Components from  "./Components"
import BaseComponent from "./BaseComponent"
import * as Utils from "./utils";
import Store from "./store"
// NS.Components.BaseComponent = BaseComponent;

Components.register(BaseComponent);

NS.Components = Components
NS.Utils = Utils;
NS.store = new Store();

window.addEventListener("DOMContentLoaded", function () {
    new Controller();
})  