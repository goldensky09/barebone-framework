const NS = {};
window.NS = NS;
NS.Components = {};
import Controller from "./controller";
import BaseComponent from "./component"
import * as Utils from "./utils";
import Store from "./store"
NS.Components.BaseComponent = BaseComponent;
NS.Utils = Utils;
NS.store = new Store();

window.addEventListener("DOMContentLoaded", function () {
  // NS.Controller = new Controller(); // in case
    new Controller();
})  