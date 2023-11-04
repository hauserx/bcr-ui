(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17],{5268:function(e,t,n){"use strict";n.d(t,{YF:function(){return useFloating}});let o=Math.min,r=Math.max,i=Math.round,createCoords=e=>({x:e,y:e});function floating_ui_utils_getSide(e){return e.split("-")[0]}function floating_ui_utils_getSideAxis(e){return["top","bottom"].includes(floating_ui_utils_getSide(e))?"y":"x"}function floating_ui_utils_rectToClientRect(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function computeCoordsFromPlacement(e,t,n){let o,{reference:r,floating:i}=e,l=floating_ui_utils_getSideAxis(t),s="x"===floating_ui_utils_getSideAxis(t)?"y":"x",a="y"===s?"height":"width",c=floating_ui_utils_getSide(t),u="y"===l,f=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,p=r[a]/2-i[a]/2;switch(c){case"top":o={x:f,y:r.y-i.height};break;case"bottom":o={x:f,y:r.y+r.height};break;case"right":o={x:r.x+r.width,y:d};break;case"left":o={x:r.x-i.width,y:d};break;default:o={x:r.x,y:r.y}}switch(t.split("-")[1]){case"start":o[s]-=p*(n&&u?-1:1);break;case"end":o[s]+=p*(n&&u?-1:1)}return o}let computePosition=async(e,t,n)=>{let{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:l}=n,s=i.filter(Boolean),a=await (null==l.isRTL?void 0:l.isRTL(t)),c=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:f}=computeCoordsFromPlacement(c,o,a),d=o,p={},m=0;for(let n=0;n<s.length;n++){let{name:i,fn:g}=s[n],{x:y,y:h,data:b,reset:_}=await g({x:u,y:f,initialPlacement:o,placement:d,strategy:r,middlewareData:p,rects:c,platform:l,elements:{reference:e,floating:t}});if(u=null!=y?y:u,f=null!=h?h:f,p={...p,[i]:{...p[i],...b}},_&&m<=50){m++,"object"==typeof _&&(_.placement&&(d=_.placement),_.rects&&(c=!0===_.rects?await l.getElementRects({reference:e,floating:t,strategy:r}):_.rects),{x:u,y:f}=computeCoordsFromPlacement(c,d,a)),n=-1;continue}}return{x:u,y:f,placement:d,strategy:r,middlewareData:p}};function getNodeName(e){return isNode(e)?(e.nodeName||"").toLowerCase():"#document"}function getWindow(e){var t;return(null==e?void 0:null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function floating_ui_utils_dom_getDocumentElement(e){var t;return null==(t=(isNode(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function isNode(e){return e instanceof Node||e instanceof getWindow(e).Node}function isElement(e){return e instanceof Element||e instanceof getWindow(e).Element}function isHTMLElement(e){return e instanceof HTMLElement||e instanceof getWindow(e).HTMLElement}function isShadowRoot(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof getWindow(e).ShadowRoot)}function isOverflowElement(e){let{overflow:t,overflowX:n,overflowY:o,display:r}=getComputedStyle(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function isContainingBlock(e){let t=isWebKit(),n=getComputedStyle(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function isWebKit(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function isLastTraversableNode(e){return["html","body","#document"].includes(getNodeName(e))}function getComputedStyle(e){return getWindow(e).getComputedStyle(e)}function getNodeScroll(e){return isElement(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function getParentNode(e){if("html"===getNodeName(e))return e;let t=e.assignedSlot||e.parentNode||isShadowRoot(e)&&e.host||floating_ui_utils_dom_getDocumentElement(e);return isShadowRoot(t)?t.host:t}function getCssDimensions(e){let t=getComputedStyle(e),n=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=isHTMLElement(e),l=r?e.offsetWidth:n,s=r?e.offsetHeight:o,a=i(n)!==l||i(o)!==s;return a&&(n=l,o=s),{width:n,height:o,$:a}}function unwrapElement(e){return isElement(e)?e:e.contextElement}function getScale(e){let t=unwrapElement(e);if(!isHTMLElement(t))return createCoords(1);let n=t.getBoundingClientRect(),{width:o,height:r,$:l}=getCssDimensions(t),s=(l?i(n.width):n.width)/o,a=(l?i(n.height):n.height)/r;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}let l=createCoords(0);function getVisualOffsets(e){let t=getWindow(e);return isWebKit()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:l}function getBoundingClientRect(e,t,n,o){var r;void 0===t&&(t=!1),void 0===n&&(n=!1);let i=e.getBoundingClientRect(),l=unwrapElement(e),s=createCoords(1);t&&(o?isElement(o)&&(s=getScale(o)):s=getScale(e));let a=(void 0===(r=n)&&(r=!1),o&&(!r||o===getWindow(l))&&r)?getVisualOffsets(l):createCoords(0),c=(i.left+a.x)/s.x,u=(i.top+a.y)/s.y,f=i.width/s.x,d=i.height/s.y;if(l){let e=getWindow(l),t=o&&isElement(o)?getWindow(o):o,n=e.frameElement;for(;n&&o&&t!==e;){let e=getScale(n),t=n.getBoundingClientRect(),o=getComputedStyle(n),r=t.left+(n.clientLeft+parseFloat(o.paddingLeft))*e.x,i=t.top+(n.clientTop+parseFloat(o.paddingTop))*e.y;c*=e.x,u*=e.y,f*=e.x,d*=e.y,c+=r,u+=i,n=getWindow(n).frameElement}}return floating_ui_utils_rectToClientRect({width:f,height:d,x:c,y:u})}function getWindowScrollBarX(e){return getBoundingClientRect(floating_ui_utils_dom_getDocumentElement(e)).left+getNodeScroll(e).scrollLeft}function getClientRectFromClippingAncestor(e,t,n){let o;if("viewport"===t)o=function(e,t){let n=getWindow(e),o=floating_ui_utils_dom_getDocumentElement(e),r=n.visualViewport,i=o.clientWidth,l=o.clientHeight,s=0,a=0;if(r){i=r.width,l=r.height;let e=isWebKit();(!e||e&&"fixed"===t)&&(s=r.offsetLeft,a=r.offsetTop)}return{width:i,height:l,x:s,y:a}}(e,n);else if("document"===t)o=function(e){let t=floating_ui_utils_dom_getDocumentElement(e),n=getNodeScroll(e),o=e.ownerDocument.body,i=r(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),l=r(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),s=-n.scrollLeft+getWindowScrollBarX(e),a=-n.scrollTop;return"rtl"===getComputedStyle(o).direction&&(s+=r(t.clientWidth,o.clientWidth)-i),{width:i,height:l,x:s,y:a}}(floating_ui_utils_dom_getDocumentElement(e));else if(isElement(t))o=function(e,t){let n=getBoundingClientRect(e,!0,"fixed"===t),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=isHTMLElement(e)?getScale(e):createCoords(1),l=e.clientWidth*i.x,s=e.clientHeight*i.y,a=r*i.x,c=o*i.y;return{width:l,height:s,x:a,y:c}}(t,n);else{let n=getVisualOffsets(e);o={...t,x:t.x-n.x,y:t.y-n.y}}return floating_ui_utils_rectToClientRect(o)}function getTrueOffsetParent(e,t){return isHTMLElement(e)&&"fixed"!==getComputedStyle(e).position?t?t(e):e.offsetParent:null}function getOffsetParent(e,t){let n=getWindow(e);if(!isHTMLElement(e))return n;let o=getTrueOffsetParent(e,t);for(;o&&["table","td","th"].includes(getNodeName(o))&&"static"===getComputedStyle(o).position;)o=getTrueOffsetParent(o,t);return o&&("html"===getNodeName(o)||"body"===getNodeName(o)&&"static"===getComputedStyle(o).position&&!isContainingBlock(o))?n:o||function(e){let t=getParentNode(e);for(;isHTMLElement(t)&&!isLastTraversableNode(t);){if(isContainingBlock(t))return t;t=getParentNode(t)}return null}(e)||n}let getElementRects=async function(e){let{reference:t,floating:n,strategy:o}=e,r=this.getOffsetParent||getOffsetParent,i=this.getDimensions;return{reference:function(e,t,n){let o=isHTMLElement(t),r=floating_ui_utils_dom_getDocumentElement(t),i="fixed"===n,l=getBoundingClientRect(e,!0,i,t),s={scrollLeft:0,scrollTop:0},a=createCoords(0);if(o||!o&&!i){if(("body"!==getNodeName(t)||isOverflowElement(r))&&(s=getNodeScroll(t)),o){let e=getBoundingClientRect(t,!0,i,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else r&&(a.x=getWindowScrollBarX(r))}return{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}(t,await r(n),o),floating:{x:0,y:0,...await i(n)}}},s={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:o}=e,r=isHTMLElement(n),i=floating_ui_utils_dom_getDocumentElement(n);if(n===i)return t;let l={scrollLeft:0,scrollTop:0},s=createCoords(1),a=createCoords(0);if((r||!r&&"fixed"!==o)&&(("body"!==getNodeName(n)||isOverflowElement(i))&&(l=getNodeScroll(n)),isHTMLElement(n))){let e=getBoundingClientRect(n);s=getScale(n),a.x=e.x+n.clientLeft,a.y=e.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-l.scrollLeft*s.x+a.x,y:t.y*s.y-l.scrollTop*s.y+a.y}},getDocumentElement:floating_ui_utils_dom_getDocumentElement,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:i,strategy:l}=e,s="clippingAncestors"===n?function(e,t){let n=t.get(e);if(n)return n;let o=(function floating_ui_utils_dom_getOverflowAncestors(e,t){var n;void 0===t&&(t=[]);let o=function getNearestOverflowAncestor(e){let t=getParentNode(e);return isLastTraversableNode(t)?e.ownerDocument?e.ownerDocument.body:e.body:isHTMLElement(t)&&isOverflowElement(t)?t:getNearestOverflowAncestor(t)}(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=getWindow(o);return r?t.concat(i,i.visualViewport||[],isOverflowElement(o)?o:[]):t.concat(o,floating_ui_utils_dom_getOverflowAncestors(o))})(e).filter(e=>isElement(e)&&"body"!==getNodeName(e)),r=null,i="fixed"===getComputedStyle(e).position,l=i?getParentNode(e):e;for(;isElement(l)&&!isLastTraversableNode(l);){let t=getComputedStyle(l),n=isContainingBlock(l);n||"fixed"!==t.position||(r=null);let s=i?!n&&!r:!n&&"static"===t.position&&!!r&&["absolute","fixed"].includes(r.position)||isOverflowElement(l)&&!n&&function hasFixedPositionAncestor(e,t){let n=getParentNode(e);return!(n===t||!isElement(n)||isLastTraversableNode(n))&&("fixed"===getComputedStyle(n).position||hasFixedPositionAncestor(n,t))}(e,l);s?o=o.filter(e=>e!==l):r=t,l=getParentNode(l)}return t.set(e,o),o}(t,this._c):[].concat(n),a=[...s,i],c=a[0],u=a.reduce((e,n)=>{let i=getClientRectFromClippingAncestor(t,n,l);return e.top=r(i.top,e.top),e.right=o(i.right,e.right),e.bottom=o(i.bottom,e.bottom),e.left=r(i.left,e.left),e},getClientRectFromClippingAncestor(t,c,l));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},getOffsetParent,getElementRects,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return getCssDimensions(e)},getScale,isElement:isElement,isRTL:function(e){return"rtl"===getComputedStyle(e).direction}},floating_ui_dom_computePosition=(e,t,n)=>{let o=new Map,r={platform:s,...n},i={...r.platform,_c:o};return computePosition(e,t,{...r,platform:i})};var a=n(959),c=n(422),u="undefined"!=typeof document?a.useLayoutEffect:a.useEffect;function deepEqual(e,t){let n,o,r;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(o=n;0!=o--;)if(!deepEqual(e[o],t[o]))return!1;return!0}if((n=(r=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(o=n;0!=o--;)if(!({}).hasOwnProperty.call(t,r[o]))return!1;for(o=n;0!=o--;){let n=r[o];if(("_owner"!==n||!e.$$typeof)&&!deepEqual(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function getDPR(e){if("undefined"==typeof window)return 1;let t=e.ownerDocument.defaultView||window;return t.devicePixelRatio||1}function roundByDPR(e,t){let n=getDPR(e);return Math.round(t*n)/n}function useLatestRef(e){let t=a.useRef(e);return u(()=>{t.current=e}),t}function useFloating(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:l}={},transform:s=!0,whileElementsMounted:f,open:d}=e,[p,m]=a.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[g,y]=a.useState(o);deepEqual(g,o)||y(o);let[h,b]=a.useState(null),[_,w]=a.useState(null),x=a.useCallback(e=>{e!=C.current&&(C.current=e,b(e))},[b]),v=a.useCallback(e=>{e!==E.current&&(E.current=e,w(e))},[w]),S=i||h,O=l||_,C=a.useRef(null),E=a.useRef(null),P=a.useRef(p),T=useLatestRef(f),R=useLatestRef(r),N=a.useCallback(()=>{if(!C.current||!E.current)return;let e={placement:t,strategy:n,middleware:g};R.current&&(e.platform=R.current),floating_ui_dom_computePosition(C.current,E.current,e).then(e=>{let t={...e,isPositioned:!0};L.current&&!deepEqual(P.current,t)&&(P.current=t,c.flushSync(()=>{m(t)}))})},[g,t,n,R]);u(()=>{!1===d&&P.current.isPositioned&&(P.current.isPositioned=!1,m(e=>({...e,isPositioned:!1})))},[d]);let L=a.useRef(!1);u(()=>(L.current=!0,()=>{L.current=!1}),[]),u(()=>{if(S&&(C.current=S),O&&(E.current=O),S&&O){if(T.current)return T.current(S,O,N);N()}},[S,O,N,T]);let k=a.useMemo(()=>({reference:C,floating:E,setReference:x,setFloating:v}),[x,v]),j=a.useMemo(()=>({reference:S,floating:O}),[S,O]),W=a.useMemo(()=>{let e={position:n,left:0,top:0};if(!j.floating)return e;let t=roundByDPR(j.floating,p.x),o=roundByDPR(j.floating,p.y);return s?{...e,transform:"translate("+t+"px, "+o+"px)",...getDPR(j.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:o}},[n,s,j.floating,p.x,p.y]);return a.useMemo(()=>({...p,update:N,refs:k,elements:j,floatingStyles:W}),[p,N,k,j,W])}},3395:function(e,t,n){"use strict";n.d(t,{G:function(){return c}});var o=n(6034),r=n(507),i=n.n(r),l=n(959);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _toConsumableArray(e){return function(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function camelize(e){var t;return(t=e-0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var s=["style"],a=!1;try{a=!0}catch(e){}function normalizeIconArgs(e){return e&&"object"===_typeof(e)&&e.prefix&&e.iconName&&e.icon?e:o.Qc.icon?o.Qc.icon(e):null===e?null:e&&"object"===_typeof(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function objectWithKey(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_defineProperty({},e,t):{}}var c=l.forwardRef(function(e,t){var n,r,i,l,s,f,d,p,m,g,y,h,b,_,w,x,v,S,O,C=e.icon,E=e.mask,P=e.symbol,T=e.className,R=e.title,N=e.titleId,L=e.maskId,k=normalizeIconArgs(C),j=objectWithKey("classes",[].concat(_toConsumableArray((r=e.beat,i=e.fade,l=e.beatFade,s=e.bounce,f=e.shake,d=e.flash,p=e.spin,m=e.spinPulse,g=e.spinReverse,y=e.pulse,h=e.fixedWidth,b=e.inverse,_=e.border,w=e.listItem,x=e.flip,v=e.size,S=e.rotation,O=e.pull,Object.keys((_defineProperty(n={"fa-beat":r,"fa-fade":i,"fa-beat-fade":l,"fa-bounce":s,"fa-shake":f,"fa-flash":d,"fa-spin":p,"fa-spin-reverse":g,"fa-spin-pulse":m,"fa-pulse":y,"fa-fw":h,"fa-inverse":b,"fa-border":_,"fa-li":w,"fa-flip":!0===x,"fa-flip-horizontal":"horizontal"===x||"both"===x,"fa-flip-vertical":"vertical"===x||"both"===x},"fa-".concat(v),null!=v),_defineProperty(n,"fa-rotate-".concat(S),null!=S&&0!==S),_defineProperty(n,"fa-pull-".concat(O),null!=O),_defineProperty(n,"fa-swap-opacity",e.swapOpacity),n)).map(function(e){return n[e]?e:null}).filter(function(e){return e}))),_toConsumableArray(T.split(" ")))),W=objectWithKey("transform","string"==typeof e.transform?o.Qc.transform(e.transform):e.transform),A=objectWithKey("mask",normalizeIconArgs(E)),D=(0,o.qv)(k,_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},j),W),A),{},{symbol:P,title:R,titleId:N,maskId:L}));if(!D)return!function(){if(!a&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",k),null;var H=D.abstract,F={ref:t};return Object.keys(e).forEach(function(t){c.defaultProps.hasOwnProperty(t)||(F[t]=e[t])}),u(H[0],F)});c.displayName="FontAwesomeIcon",c.propTypes={beat:i().bool,border:i().bool,beatFade:i().bool,bounce:i().bool,className:i().string,fade:i().bool,flash:i().bool,mask:i().oneOfType([i().object,i().array,i().string]),maskId:i().string,fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf([!0,!1,"horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),shake:i().bool,size:i().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,spinPulse:i().bool,spinReverse:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,titleId:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},c.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var u=(function convert(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof t)return t;var o=(t.children||[]).map(function(t){return convert(e,t)}),r=Object.keys(t.attributes||{}).reduce(function(e,n){var o=t.attributes[n];switch(n){case"class":e.attrs.className=o,delete t.attributes.class;break;case"style":e.attrs.style=o.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(":"),o=camelize(t.slice(0,n)),r=t.slice(n+1).trim();return o.startsWith("webkit")?e[o.charAt(0).toUpperCase()+o.slice(1)]=r:e[o]=r,e},{});break;default:0===n.indexOf("aria-")||0===n.indexOf("data-")?e.attrs[n.toLowerCase()]=o:e.attrs[camelize(n)]=o}return e},{attrs:{}}),i=n.style,l=void 0===i?{}:i,a=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(n,s);return r.attrs.style=_objectSpread2(_objectSpread2({},r.attrs.style),l),e.apply(void 0,[t.tag,_objectSpread2(_objectSpread2({},r.attrs),a)].concat(_toConsumableArray(o)))}).bind(null,l.createElement)},4049:function(e,t,n){"use strict";var o=n(6257);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,r,i,l){if(l!==o){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},507:function(e,t,n){e.exports=n(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6351:function(e,t,n){"use strict";n.d(t,{FU$:function(){return o},kZ_:function(){return r}});var o={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},r={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"]}}}]);