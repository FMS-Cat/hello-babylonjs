parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SZeO":[function(require,module,exports) {
var define;
var global = arguments[3];
},{}],"q1LP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createDynamicTexture=void 0;var e=require("babylonjs");function r(r,t){var a=new e.DynamicTexture(r,512,t,!1);return a.drawText("Grass",256,256,"500 48px Impact, sans-serif","#fff",null,!1),a}exports.createDynamicTexture=r;
},{"babylonjs":"SZeO"}],"M8m5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("babylonjs"),r=require("./createDynamicTexture"),t=document.getElementById("canvas"),n=new e.Engine(t),a=new e.Scene(n),i=new e.FreeCamera("camera1",new e.Vector3(0,5,-10),a);i.setTarget(e.Vector3.Zero()),i.attachControl(t,!0);var o=new e.HemisphericLight("light1",new e.Vector3(0,1,0),a);o.intensity=.7;var c=e.Mesh.CreateSphere("sphere1",16,2,a);c.position.y=1;var s=new e.StandardMaterial("materialSphere",a),u=r.createDynamicTexture("texture",a);s.diffuseTexture=u,c.material=s;var d=e.Mesh.CreateGround("ground1",6,6,2,a);n.runRenderLoop(function(){a.render()}),window.addEventListener("resize",function(){n.resize()});
},{"babylonjs":"SZeO","./createDynamicTexture":"q1LP"}]},{},["M8m5"], null)
//# sourceMappingURL=PUBLIC_URL/main.866aece2.js.map