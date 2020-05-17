// import _ from 'lodash';
// import NS from "./Ground";
import Bootstrapper from "./bootstrapper";
import BaseComponent from "./core/BaseComponent";

import Store from "./core/Store"


const NS = NS || {};
NS.Components = NS.Components || {};

NS.Components.BaseComponent = BaseComponent;
document.addEventListener("DOMContentLoaded", ()=>{
  NS.Store = Store;
  new Bootstrapper();
  
})

window.NS = NS;