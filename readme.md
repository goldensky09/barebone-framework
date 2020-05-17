1. Component: Ek basic daba hai jis pe kuch default methods and default props hongi. jo final kuch UI ko control or ui ko generate kar shakta hai.
2. Communication/Events: Component can talk to each other via some event or may be callback or may some other mechnisim.
3. Store: Ye ek global store ho shakta hai aur ya phir ye ek component ka base store ho shakta hai.
4. Controller: Base controller which will drive the whole page and each component.
5. Utils: basic kaam kuch bho shakta hai.
6. Namesapce: Sabko bandh ke rakhega. Naam of family
7. Single configuration of webpack which can generate any nested or root folder build output


#Tech Stack
1. Language: ES6
2. Build Tool: Webpack
3. Linting Tool: ES Lint
4. Testing: Jest
5. Beautiifer: Prettier
6. Package Manager: NPM
7. Output Dist: ES5


#node build.js --input ./component/comp1 --output ./component/comp1/dist --config ./component/comp1/config.json

Name Space: NS
base:
 -- controller.js (NS.Controller)
 -- store.js (NS.Store)
 -- component.js (NS.Components.BaseComponent) extends NS.Utils.EventEmitter
utils
 -- index.js (NS.Utils)
 -- event-emitter.js (NS.Utils.EventEmitter) (SingleTon Class)
 -- request.js (NS.Utils.request)
 -- logger.js (NS.Utils.logger)
components:
  comp1:
    -- index.js (NS.Components.Comp1) extend from NS.Components.BaseComponent
