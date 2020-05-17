const NS = {};
window.NS = NS;
NS.Components = {};
import Controller from "./controller";
import BaseComponent from "./component"
import * as Utils from "./utils";
import * as Service from "./utils/Service"
NS.Controller = Controller;
NS.Components.BaseComponent = BaseComponent;
NS.Utils = Utils;
NS.Service = Service;