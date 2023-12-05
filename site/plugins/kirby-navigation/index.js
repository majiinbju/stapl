!function(){"use strict";function t(t,e,n,o,i,r,s,a,l,u){"boolean"!=typeof s&&(l=a,a=s,s=!1);const c="function"==typeof n?n.options:n;let d;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),o&&(c._scopeId=o),r?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=d):e&&(d=s?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),d)if(c.functional){const t=c.render;c.render=function(e,n){return d.call(n),t(e,n)}}else{const t=c.beforeCreate;c.beforeCreate=t?[].concat(t,d):[d]}return n}function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n={exports:{}};!function(t,e){function n(t){return"object"!=typeof t||"toString"in t?t:Object.prototype.toString.call(t).slice(8,-1)}Object.defineProperty(e,"__esModule",{value:!0});var o="object"==typeof process&&!0;function i(t,e){if(!t){if(o)throw new Error("Invariant failed");throw new Error(e())}}e.invariant=i;var r=Object.prototype.hasOwnProperty,s=Array.prototype.splice,a=Object.prototype.toString;function l(t){return a.call(t).slice(8,-1)}var u=Object.assign||function(t,e){return c(e).forEach((function(n){r.call(e,n)&&(t[n]=e[n])})),t},c="function"==typeof Object.getOwnPropertySymbols?function(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.keys(t)};function d(t){return Array.isArray(t)?u(t.constructor(t.length),t):"Map"===l(t)?new Map(t):"Set"===l(t)?new Set(t):t&&"object"==typeof t?u(Object.create(Object.getPrototypeOf(t)),t):t}var p=function(){function t(){this.commands=u({},h),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(t,e){return t===e},this.update.newContext=function(){return(new t).update}}return Object.defineProperty(t.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(t){this.update.isEquals=t},enumerable:!0,configurable:!0}),t.prototype.extend=function(t,e){this.commands[t]=e},t.prototype.update=function(t,e){var n=this,o="function"==typeof e?{$apply:e}:e;Array.isArray(t)&&Array.isArray(o)||i(!Array.isArray(o),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),i("object"==typeof o&&null!==o,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(n.commands).join(", ")+"."}));var s=t;return c(o).forEach((function(e){if(r.call(n.commands,e)){var i=t===s;s=n.commands[e](o[e],s,o,t),i&&n.isEquals(s,t)&&(s=t)}else{var a="Map"===l(t)?n.update(t.get(e),o[e]):n.update(t[e],o[e]),u="Map"===l(s)?s.get(e):s[e];n.isEquals(a,u)&&(void 0!==a||r.call(t,e))||(s===t&&(s=d(t)),"Map"===l(s)?s.set(e,a):s[e]=a)}})),s},t}();e.Context=p;var h={$push:function(t,e,n){return m(e,n,"$push"),t.length?e.concat(t):e},$unshift:function(t,e,n){return m(e,n,"$unshift"),t.length?t.concat(e):e},$splice:function(t,e,o,r){return function(t,e){i(Array.isArray(t),(function(){return"Expected $splice target to be an array; got "+n(t)})),v(e.$splice)}(e,o),t.forEach((function(t){v(t),e===r&&t.length&&(e=d(r)),s.apply(e,t)})),e},$set:function(t,e,n){return function(t){i(1===Object.keys(t).length,(function(){return"Cannot have more than one key in an object with $set"}))}(n),t},$toggle:function(t,e){y(t,"$toggle");var n=t.length?d(e):e;return t.forEach((function(t){n[t]=!e[t]})),n},$unset:function(t,e,n,o){return y(t,"$unset"),t.forEach((function(t){Object.hasOwnProperty.call(e,t)&&(e===o&&(e=d(o)),delete e[t])})),e},$add:function(t,e,n,o){return g(e,"$add"),y(t,"$add"),"Map"===l(e)?t.forEach((function(t){var n=t[0],i=t[1];e===o&&e.get(n)!==i&&(e=d(o)),e.set(n,i)})):t.forEach((function(t){e!==o||e.has(t)||(e=d(o)),e.add(t)})),e},$remove:function(t,e,n,o){return g(e,"$remove"),y(t,"$remove"),t.forEach((function(t){e===o&&e.has(t)&&(e=d(o)),e.delete(t)})),e},$merge:function(t,e,o,r){var s,a;return s=e,i((a=t)&&"object"==typeof a,(function(){return"update(): $merge expects a spec of type 'object'; got "+n(a)})),i(s&&"object"==typeof s,(function(){return"update(): $merge expects a target of type 'object'; got "+n(s)})),c(t).forEach((function(n){t[n]!==e[n]&&(e===r&&(e=d(r)),e[n]=t[n])})),e},$apply:function(t,e){var o;return i("function"==typeof(o=t),(function(){return"update(): expected spec of $apply to be a function; got "+n(o)+"."})),t(e)}},f=new p;function m(t,e,o){i(Array.isArray(t),(function(){return"update(): expected target of "+n(o)+" to be an array; got "+n(t)+"."})),y(e[o],o)}function y(t,e){i(Array.isArray(t),(function(){return"update(): expected spec of "+n(e)+" to be an array; got "+n(t)+". Did you forget to wrap your parameter in an array?"}))}function v(t){i(Array.isArray(t),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+n(t)+". Did you forget to wrap your parameters in an array?"}))}function g(t,e){var o=l(t);i("Map"===o||"Set"===o,(function(){return"update(): "+n(e)+" expects a target of type Set or Map; got "+n(o)}))}e.isEquals=f.update.isEquals,e.extend=f.extend,e.default=f.update,e.default.default=t.exports=u(e.default,e)}(n,n.exports);var o=e(n.exports);
/*!
   * vue-nestable v2.6.0
   * (c) Ralph Huwiler <ralph@huwiler.rocks>
   * Released under the MIT License.
   */function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function p(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=c(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw r}}}}var h={},f={methods:{registerNestable:function(t){var e=this._getByGroup(t.group);e.onDragStartListeners.push(t.onDragStart),e.onMouseEnterListeners.push(t.onMouseEnter),e.onMouseMoveListeners.push(t.onMouseMove)},notifyDragStart:function(t,e,n){var o,i=p(this._getByGroup(t).onDragStartListeners);try{for(i.s();!(o=i.n()).done;){(0,o.value)(e,n)}}catch(r){i.e(r)}finally{i.f()}},notifyMouseEnter:function(t,e,n,o){var i,r=p(this._getByGroup(t).onMouseEnterListeners);try{for(r.s();!(i=r.n()).done;){(0,i.value)(e,n,o)}}catch(s){r.e(s)}finally{r.f()}},notifyMouseMove:function(t,e){var n,o=p(this._getByGroup(t).onMouseMoveListeners);try{for(o.s();!(n=o.n()).done;){(0,n.value)(e)}}catch(i){o.e(i)}finally{o.f()}},_getByGroup:function(t){return h[t]||(h[t]={onDragStartListeners:[],onMouseEnterListeners:[],onMouseMoveListeners:[],onDragStart:[],dragItem:null}),h[t]}}},m={name:"NestableItem",mixins:[f],props:{item:{type:Object,required:!0,default:function(){return{}}},index:{type:Number,required:!1,default:null},isChild:{type:Boolean,required:!1,default:!1},isCopy:{type:Boolean,required:!1,default:!1},options:{type:Object,required:!0,default:function(){return{}}}},inject:["listId","group","keyProp"],data:function(){return{breakPoint:null,moveDown:!1}},computed:{isDragging:function(){var t=this.options.dragItem;return!this.isCopy&&t&&t[this.options.keyProp]===this.item[this.options.keyProp]},hasChildren:function(){return this.item[this.options.childrenProp]&&this.item[this.options.childrenProp].length>0},hasHandle:function(){return!!this.$scopedSlots.handler},normalizedClassProp:function(){var t=this.item[this.options.classProp];return t?Array.isArray(t)?t:("undefined"==typeof a||i(a),[t]):[]},itemClasses:function(){var t=this.isDragging?["is-dragging"]:[];return["nestable-item".concat(this.isCopy?"-copy":""),"nestable-item".concat(this.isCopy?"-copy":"","-").concat(this.item[this.options.keyProp])].concat(t,u(this.normalizedClassProp))}},methods:{onMouseEnter:function(t){if(this.options.dragItem){if(!t.movementY)return this.sendNotification(t);this.moveDown=t.movementY>0,this.breakPoint=t.target.getBoundingClientRect().height/2}},onMouseLeave:function(){this.breakPoint=null},onMouseMove:function(t){if(this.breakPoint){var e=t.offsetY-this.breakPoint;this.moveDown&&e<this.breakPoint/4||!this.moveDown&&e>-this.breakPoint/4||this.sendNotification(t)}},sendNotification:function(t){this.breakPoint=null;var e=this.item||this.$parent.item;this.notifyMouseEnter(this.group,t,this.listId,e)}}},y={methods:{getPathById:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value,o=[];return n.every((function(n,i){if(n[e.keyProp]===t)o.push(i);else if(n[e.childrenProp]){var r=e.getPathById(t,n[e.childrenProp]);r.length&&(o=o.concat(i).concat(r))}return 0===o.length})),o},getItemByPath:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value,o=null;return t.forEach((function(t){var i=o&&o[e.childrenProp]?o[e.childrenProp]:n;o=i[t]})),o},getItemDepth:function(t){var e=1;if(t[this.childrenProp]&&t[this.childrenProp].length>0){var n=t[this.childrenProp].map(this.getItemDepth);e+=Math.max.apply(Math,u(n))}return e},getSplicePath:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={},o=e.numToRemove||0,i=e.itemsToInsert||[],s=t.length-1,a=n;return t.forEach((function(t,n){if(n===s)a.$splice=[[t,o].concat(u(i))];else{var l={};a[t]=r({},e.childrenProp,l),a=l}})),n},getRealNextPath:function(t,e){var n=t.length-1,o=e.length-1;if(t.length<e.length){var i=!1;return e.map((function(r,s){return i?s===o?r+1:r:"number"!=typeof t[s]?r:e[s]>t[s]&&s===n?(i=!0,r-1):r}))}if(t.length===e.length&&e[o]>t[o]){var r=this.getItemByPath(e);if(r[this.childrenProp]&&r[this.childrenProp].length&&!this.isCollapsed(r))return e.slice(0,-1).concat(e[o]-1).concat(0)}return e}}},v=function t(e,n){return e.map((function(e){return l(l({},e),{},r({},n,e[n]?t(e[n],n):[]))}))},g=t({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["nestable","nestable-"+t.group,t.rtl?"nestable-rtl":""]},[n("ol",{staticClass:"nestable-list nestable-group"},[t.listIsEmpty?n("Placeholder",{attrs:{options:t.itemOptions}},[t._t("placeholder",[t._v("\n        No content\n      ")])],2):t._e(),t._v(" "),t._l(t.value,(function(e,o){return[n("NestableItem",{key:e[t.keyProp],attrs:{index:o,item:e,options:t.itemOptions},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0)})]}))],2),t._v(" "),t.dragItem?[n("div",{staticClass:"nestable-drag-layer"},[n("ol",{staticClass:"nestable-list",style:t.listStyles},[n("NestableItem",{attrs:{item:t.dragItem,options:t.itemOptions,"is-copy":!0},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0)})],1)])]:t._e()],2)},staticRenderFns:[]},undefined,{name:"VueNestable",components:{NestableItem:t({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.itemClasses},[n("div",{staticClass:"nestable-item-content",on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave,mousemove:t.onMouseMove}},[t._t("default",null,{index:t.index,item:t.item,isChild:t.isChild})],2),t._v(" "),t.hasChildren?n("ol",{staticClass:"nestable-list"},[t._l(t.item[t.options.childrenProp],(function(e,o){return[n("NestableItem",{key:e[t.keyProp],attrs:{item:e,index:o,options:t.options,"is-copy":t.isCopy,"is-child":""},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}}))],null,!0)})]}))],2):t._e()])},staticRenderFns:[]},undefined,m,undefined,false,undefined,!1,void 0,void 0,void 0),Placeholder:t({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"nestable-list-empty",on:{mouseenter:t.onMouseEnter}},[t._t("default")],2)])},staticRenderFns:[]},undefined,{name:"Placeholder",mixins:[f],props:{index:{type:Number,required:!1,default:null},options:{type:Object,required:!1,default:function(){return{}}}},inject:["listId","group"],computed:{isDragging:function(){return this.options.dragItem}},methods:{onMouseEnter:function(t){this.options.dragItem&&this.notifyMouseEnter(this.group,t,this.listId,null)}}},undefined,false,undefined,!1,void 0,void 0,void 0)},mixins:[y,f,{methods:{hook:function(t,e){if(!this.hooks[t])return!0;var n=this.hooks[t](e);return n||void 0===n}}}],props:{value:{type:Array,required:!0,default:function(){return[]}},threshold:{type:Number,required:!1,default:30},maxDepth:{type:Number,required:!1,default:10},keyProp:{type:String,required:!1,default:"id"},classProp:{type:String,required:!1,default:null},group:{type:[String,Number],required:!1,default:function(){return Math.random().toString(36).slice(2)}},childrenProp:{type:String,required:!1,default:"children"},collapsed:{type:Boolean,required:!1,default:!1},hooks:{type:Object,required:!1,default:function(){return{}}},rtl:{type:Boolean,required:!1,default:!1}},provide:function(){return{listId:this.listId,group:this.group,keyProp:this.keyProp,onDragEnd:this.onDragEnd}},data:function(){return{itemsOld:null,dragItem:null,mouse:{last:{x:0},shift:{x:0}},el:null,elCopyStyles:null,isDirty:!1,collapsedGroups:[],listId:Math.random().toString(36).slice(2)}},computed:{listIsEmpty:function(){return 0===this.value.length},itemOptions:function(){return{dragItem:this.dragItem,keyProp:this.keyProp,classProp:this.classProp,childrenProp:this.childrenProp}},listStyles:function(){var t=document.querySelector(".nestable-"+this.group+" .nestable-item-"+this.dragItem[this.keyProp]),e={};return t&&(e.width="".concat(t.clientWidth,"px")),this.elCopyStyles&&(e=l(l({},e),this.elCopyStyles)),e}},created:function(){var t=v(this.value,this.childrenProp);this.$emit("input",t),this.isDirty=!1,this.registerNestable(this)},beforeDestroy:function(){this.stopTrackMouse()},methods:{startTrackMouse:function(){document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchend",this.onDragEnd),document.addEventListener("touchcancel",this.onDragEnd),document.addEventListener("keydown",this.onKeyDown)},stopTrackMouse:function(){document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchend",this.onDragEnd),document.removeEventListener("touchcancel",this.onDragEnd),document.removeEventListener("keydown",this.onKeyDown),this.elCopyStyles=null},onDragStart:function(t,e){var n,o,i=this;t&&(t.preventDefault(),t.stopPropagation()),this.el=(n=t.target,o=".nestable-item",n.closest(o)),this.startTrackMouse(),this.dragItem=e,this.itemsOld=this.value,this.$nextTick((function(){i.onMouseMove(t)}))},onDragEnd:function(t,e){t&&t.preventDefault(),this.stopTrackMouse(),this.el=null,e?this.dragRevert():this.dragApply()},onKeyDown:function(t){27===t.which&&this.onDragEnd(null,!0)},getXandYFromEvent:function(t){var e=t.clientX,n=t.clientY,o=t.targetTouches;if(o){var i=o[0];e=i.clientX,n=i.clientY;var r=new Event("mouseenter"),s=document.elementFromPoint(e,n),a=s&&(s.closest(".nestable-item-content")||s.closest(".nestable-list-empty"));a&&a.dispatchEvent(r)}return{clientX:e,clientY:n}},onMouseMove:function(t){t&&t.preventDefault();var e=this.getXandYFromEvent(t),n=e.clientX,o=e.clientY;0===this.mouse.last.x&&(this.mouse.last.x=n);var i={transform:"translate("+n+"px, "+o+"px)"},r=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer");if(r){var s,a,u=r.getBoundingClientRect(),c=u.top,d=u.left,p=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer > .nestable-list");if(this.elCopyStyles){if(this.elCopyStyles=l(l({},this.elCopyStyles),i),p)for(var h in i)Object.prototype.hasOwnProperty.call(i,h)&&(p.style[h]=i[h]);var f=this.rtl?this.mouse.last.x-n:n-this.mouse.last.x;f>=0&&this.mouse.shift.x>=0||f<=0&&this.mouse.shift.x<=0?this.mouse.shift.x+=f:this.mouse.shift.x=0,this.mouse.last.x=n,Math.abs(this.mouse.shift.x)>this.threshold&&(this.mouse.shift.x>0?this.tryIncreaseDepth(this.dragItem):this.tryDecreaseDepth(this.dragItem),this.mouse.shift.x=0)}else{var m=(s=this.el,a=s.getBoundingClientRect(),{top:Math.round(a.top),left:Math.round(a.left)});this.elCopyStyles=l({marginTop:"".concat(m.top-o-c,"px"),marginLeft:"".concat(m.left-n-d,"px")},i)}}},moveItem:function(t){var e=t.dragItem,n=t.pathFrom,i=t.pathTo,r=this.getRealNextPath(n,i),s=this.getSplicePath(n,{numToRemove:1,childrenProp:this.childrenProp}),a=this.getSplicePath(r,{numToRemove:0,itemsToInsert:[e],childrenProp:this.childrenProp});if(this.hook("beforeMove",{dragItem:e,pathFrom:n,pathTo:r})){var l=this.value;l=o(l,s),l=o(l,a),this.isDirty=!0,this.pathTo=r,this.$emit("input",l)}},tryIncreaseDepth:function(t){var e=this.getPathById(t[this.keyProp]),n=e[e.length-1],o=e.length+this.getItemDepth(t);if(n>0&&o<=this.maxDepth){var i=this.getItemByPath(e.slice(0,-1).concat(n-1));if(i[this.childrenProp]&&(!i[this.childrenProp].length||!this.isCollapsed(i))){var r=e.slice(0,-1).concat(n-1).concat(i[this.childrenProp].length);this.moveItem({dragItem:t,pathFrom:e,pathTo:r})}}},tryDecreaseDepth:function(t){var e=this.getPathById(t[this.keyProp]),n=e[e.length-1];if(e.length>1&&n+1===this.getItemByPath(e.slice(0,-1))[this.childrenProp].length){var o=e.slice(0,-1);o[o.length-1]+=1,this.moveItem({dragItem:t,pathFrom:e,pathTo:o})}},onMouseEnter:function(t,e,n){t&&(t.preventDefault(),t.stopPropagation());var o=this.dragItem;if(o&&(null===n||o[this.keyProp]!==n[this.keyProp])){var i,r=this.getPathById(o[this.keyProp]);if(e===this.listId||0!==r.length)if(i=null===n?r.length>0?[]:[0]:this.getPathById(n[this.keyProp]),!(this.getRealNextPath(r,i).length+(this.getItemDepth(o)-1)>this.maxDepth)){var s={};if(this.collapsed&&r.length>1){var a=this.getItemByPath(r.slice(0,-1));1===a[this.childrenProp].length&&(s=this.onToggleCollapse(a,!0))}this.moveItem({dragItem:o,pathFrom:r,pathTo:i},s)}}},isCollapsed:function(t){return!!(this.collapsedGroups.indexOf(t[this.keyProp])>-1^this.collapsed)},dragApply:function(){this.$emit("change",this.dragItem,{items:this.value,pathTo:this.pathTo}),this.pathTo=null,this.itemsOld=null,this.dragItem=null,this.isDirty=!1},dragRevert:function(){this.$emit("input",this.itemsOld),this.pathTo=null,this.itemsOld=null,this.dragItem=null,this.isDirty=!1}}},undefined,false,undefined,!1,void 0,void 0,void 0),b=t({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"nestable-handle",attrs:{draggable:""},on:{dragstart:t.dragstart,touchstart:t.dragstart,touchend:t.touchend,touchmove:t.touchmove}},[t._t("default")],2)},staticRenderFns:[]},undefined,{name:"VueNestableHandle",mixins:[f],props:{item:{type:Object,required:!1,default:function(){return{}}}},inject:["group","onDragEnd"],methods:{dragstart:function(t){var e=this.item||this.$parent.item;this.notifyDragStart(this.group,t,e)},touchend:function(t){this.onDragEnd(t)},touchmove:function(t){this.notifyMouseMove(this.group,t)}}},undefined,false,undefined,!1,void 0,void 0,void 0),_={install:function(t,e){t.component("VueNestable",g),t.component("VueNestableHandle",b)}};function k(t,e,n,o,i,r,s,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=l):i&&(l=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}const x={};var P=k({props:{item:Object}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"k-form-input"},[n("div",{staticClass:"k-form-inner"},[t._t("text"),n("div",{staticClass:"k-form-actions"},[t._t("fetch"),t._t("add")],2)],2)])}),[],!1,$,"10073c21",null,null);function $(t){for(let e in x)this[e]=x[e]}var E=function(){return P.exports}();const S={};var C=k({props:{item:Object,fields:Object,navigation:Array},data:()=>({active:!1}),methods:{item_action(t){"edit"===t.type&&(this.active=!this.active),"remove"===t.type&&this.$emit("action_remove",t),"duplicate"===t.type&&this.$emit("action_add",t.item)}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"k-form-input"},[n("div",{staticClass:"k-form-actions"},[t._t("handle")],2),n("div",{staticClass:"k-form-inner"},[n("k-item",{attrs:{text:t.item.text,options:[{icon:"add",text:t.active?t.$t("editor.menu.close"):t.$t("editor.menu.edit"),click:{type:"edit"}},{icon:"copy",text:t.$t("editor.menu.duplicate"),click:{type:"duplicate",item:t.item}},{icon:"trash",text:t.$t("editor.menu.remove"),click:{type:"remove",needle:t.item.uuid,haystack:t.navigation}}]},on:{action:t.item_action}}),t.active?n("div",{ref:"config",staticClass:"k-form-config"},[n("div",{ref:"config",staticClass:"k-form-group"},[t._t("dropdown_fields")],2),n("div",{staticClass:"k-form-footer"},[n("k-button",{attrs:{icon:"remove"},on:{click:function(e){return t.item_action({type:"edit"})}}},[t._v(" "+t._s(t.$t("editor.menu.close"))+" ")]),n("k-button",{attrs:{icon:"trash",theme:"negative"},on:{click:function(e){return t.item_action({type:"remove",haystack:t.navigation,needle:t.item.uuid})}}},[t._v(" "+t._s(t.$t("editor.menu.remove"))+" ")])],1)]):t._e()],1)])}),[],!1,O,"c464a1e2",null,null);function O(t){for(let e in S)this[e]=S[e]}var I=function(){return C.exports}();const M={};var D=k({props:{modal:Object},methods:{modal_close(){this.$emit("modal_close")},modal_submit(){this.$emit("modal_submit")}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("k-dialog",{staticClass:"k-pages-dialog",attrs:{size:"medium",visible:t.modal},on:{cancel:t.modal_close,submit:t.modal_submit}},[t._t("modal_header"),t._t("modal_body")],2)}),[],!1,j,"6e8fb2b8",null,null);function j(t){for(let e in M)this[e]=M[e]}const w={props:{help:String,value:Array,label:String,levels:Number,disabled:Boolean,required:Boolean,endpoints:Object},components:{ListModal:E,ListDefault:I,ModalDefault:function(){return D.exports}()},data(){return{navigation:this.value||[],modal:{type:"",status:!1},query:{content:[],breadcrumbs:[]},item:{url:"",text:"",popup:!1}}},watch:{navigation:{handler(){this.$emit("input",this.navigation)},deep:!0}},methods:{modal_close(){this.modal={type:"",status:!1}},modal_open(t){this.modal={type:t,status:!0}},modal_submit(){"custom"===this.modal.type&&(this.action_add(this.item),this.item={url:"",text:"",popup:!1}),this.modal={type:"",status:!1}},action_fetch(t){this.$api.get(this.endpoints.field+"/listings/"+t).then((t=>{this.query=t})).catch((t=>{console.log(t)}))},action_remove(t){return this.navigation=t.haystack.filter((e=>e.uuid!==t.needle)).map((e=>(e.children&&e.children.length&&(e.children=this.action_remove({haystack:e.children,needle:t.needle})),e)))},action_add(t){this.navigation.push({children:[],id:t.id,text:t.text,url:t.url,popup:t.popup,uuid:Math.random().toString(36).substring(2,15)})}},computed:{computed_navigation(){return this.navigation},computed_levels(){return this.levels?this.levels:10},computed_breadcrumbs(){return this.query.breadcrumbs.length>=2?this.query.breadcrumbs[this.query.breadcrumbs.length-2].id:"site"}},mounted(){this.action_fetch("site")}},q={};var T=k(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("k-field",{staticClass:"k-form-field navigation-field",attrs:{help:t.help,label:t.label,levels:t.levels,disabled:t.disabled,required:t.required},scopedSlots:t._u([{key:"options",fn:function(){return[n("k-dropdown",[n("k-button",{attrs:{icon:"add"},on:{click:function(e){return t.$refs.menu.toggle()}}},[t._v(" "+t._s(t.$t("menu.link.add"))+" ")]),n("k-dropdown-content",{ref:"menu",attrs:{align:"right"}},[n("k-dropdown-item",{on:{click:function(e){return t.modal_open("default")}}},[n("span",{staticClass:"k-menu-title"},[t._v(" "+t._s(t.$t("menu.link.title"))+" ")]),n("p",{staticClass:"k-menu-subtitle"},[t._v(" "+t._s(t.$t("menu.link.text"))+" ")])]),n("k-dropdown-item",{on:{click:function(e){return t.modal_open("custom")}}},[n("span",{staticClass:"k-menu-title"},[t._v(" "+t._s(t.$t("menu.custom.title"))+" ")]),n("p",{staticClass:"k-menu-subtitle"},[t._v(" "+t._s(t.$t("menu.custom.text"))+" ")])])],1)],1)]},proxy:!0},{key:"help",fn:function(){return[n("k-grid",[n("k-column",{attrs:{width:"1/2"}},[t.help?n("k-text",{staticClass:"k-field-help",attrs:{theme:"help"},domProps:{innerHTML:t._s(t.help)}}):t._e()],1),n("k-column",{attrs:{width:"1/2"}},[n("k-text",{staticClass:"k-field-help k-field-depth",attrs:{theme:"help"}},[t._v(" "+t._s(t.$t("help.depth.text"))+" "),n("strong",[t._v(t._s(t.computed_levels))])])],1)],1)]},proxy:!0}])},[t.navigation.length?n("vue-nestable",{attrs:{keyProp:"uuid",childrenProp:"children",maxDepth:t.computed_levels},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.item;return e.index,[n("listDefault",{attrs:{item:o,navigation:t.navigation},on:{action_add:t.action_add,action_remove:t.action_remove},scopedSlots:t._u([{key:"handle",fn:function(){return[n("VueNestableHandle",{attrs:{item:o}},[n("k-button",{staticClass:"input-handle",attrs:{icon:"sort",tooltip:t.$t("editor.menu.sort")}})],1)]},proxy:!0},{key:"dropdown_fields",fn:function(){return[n("k-grid",[n("k-column",{attrs:{width:"1/2"}},[n("k-text-field",{attrs:{label:t.$t("editor.label.text")},model:{value:o.text,callback:function(e){t.$set(o,"text",e)},expression:"item.text"}})],1),n("k-column",{attrs:{width:"1/2"}},[n("k-text-field",{attrs:{label:t.$t("editor.label.title")},model:{value:o.title,callback:function(e){t.$set(o,"title",e)},expression:"item.title"}})],1),n("k-column",{attrs:{width:"1/2"}},[n("k-text-field",{attrs:{label:t.$t("editor.label.id")},model:{value:o.id,callback:function(e){t.$set(o,"id",e)},expression:"item.id"}})],1),n("k-column",{attrs:{width:"1/2"}},[n("k-toggle-field",{attrs:{label:t.$t("editor.label.popup")},model:{value:o.popup,callback:function(e){t.$set(o,"popup",e)},expression:"item.popup"}})],1),n("k-column",{attrs:{width:"1/2"}},[n("k-text-field",{attrs:{label:t.$t("editor.label.url")},model:{value:o.url,callback:function(e){t.$set(o,"url",e)},expression:"item.url"}})],1)],1)]},proxy:!0}],null,!0)})]}}],null,!1,611205434),model:{value:t.navigation,callback:function(e){t.navigation=e},expression:"navigation"}}):n("k-empty",{attrs:{icon:"page"}},[t._v(" "+t._s(t.$t("help.empty.text"))+" ")]),t.modal.status?n("modalDefault",{attrs:{modal:t.modal.status},on:{modal_close:t.modal_close,modal_submit:t.modal_submit},scopedSlots:t._u([{key:"modal_header",fn:function(){return[n("header",{staticClass:"k-pages-dialog-navbar"},["default"===t.modal.type?[t.query.breadcrumbs.length>0?n("k-button",{attrs:{icon:"angle-left"},on:{click:function(e){return t.action_fetch(t.computed_breadcrumbs)}}},[t._v(" "+t._s(t.$t("modal.link.breadcrumb"))+" ")]):t._e(),n("k-headline",[t._v(" "+t._s(t.$t("modal.link.title"))+" ")])]:[n("k-headline",[t._v(" "+t._s(t.$t("modal.custom.title"))+" ")])]],2)]},proxy:!0},{key:"modal_body",fn:function(){return["default"===t.modal.type?t._l(t.query.content,(function(e,o){return n("listModal",{key:e.uuid,attrs:{item:e},scopedSlots:t._u([{key:"text",fn:function(){return[n("span",{staticClass:"k-menu-text"},[t._v(t._s(e.text))])]},proxy:!0},{key:"fetch",fn:function(){return[e.count>0?n("k-button",{attrs:{icon:"angle-right"},on:{click:function(n){return t.action_fetch(e.id)}}}):t._e()]},proxy:!0},{key:"add",fn:function(){return[n("k-button",{attrs:{icon:"add"},on:{click:function(n){return t.action_add(e)}}})]},proxy:!0}],null,!0)})})):[n("div",{staticClass:"k-fieldset"},[n("k-grid",[n("k-column",[n("k-text-field",{attrs:{label:t.$t("editor.label.text")},model:{value:t.item.text,callback:function(e){t.$set(t.item,"text",e)},expression:"item.text"}})],1),n("k-column",[n("k-text-field",{attrs:{label:t.$t("editor.label.url")},model:{value:t.item.url,callback:function(e){t.$set(t.item,"url",e)},expression:"item.url"}})],1),n("k-column",[n("k-toggle-field",{attrs:{label:t.$t("editor.label.popup")},model:{value:t.item.popup,callback:function(e){t.$set(t.item,"popup",e)},expression:"item.popup"}})],1)],1)],1)]]},proxy:!0}],null,!1,2887473472)}):t._e()],1)}),[],!1,A,null,null,null);function A(t){for(let e in q)this[e]=q[e]}var N=function(){return T.exports}();panel.plugin("beluga/navigation",{fields:{navigation:N},use:_})}();
