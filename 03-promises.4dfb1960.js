!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),a=document.querySelector(".form");function u(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}a.addEventListener("submit",(function(n){n.preventDefault();for(var t=parseInt(a.elements.delay.value),o=parseInt(a.elements.step.value),r=parseInt(a.elements.amount.value),l=1;l<=r;l++)u(l,t+(l-1)*o).then((function(n){return e(i).Notify.success("Promise ".concat(n.position," resolved after ").concat(n.delay,"ms"))})).catch((function(n){return e(i).Notify.warning("Promise ".concat(n.position," rejected after ").concat(n.delay,"ms"))}))}))}();
//# sourceMappingURL=03-promises.4dfb1960.js.map