#!/usr/bin/env node

(()=>{"use strict";const e={n:o=>{const t=o&&o.__esModule?()=>o.default:()=>o;return e.d(t,{a:t}),t},d:(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)},o=require("express");var t=e.n(o);const n=t()();n.use(t().json()),n.get("/",(e,o)=>{o.status(200).send("Welcome to Reelfake API...")}),n.listen(8080,()=>{console.log("[Env: production] Reelfake api is running on port 8080")})})();
//# sourceMappingURL=server.js.map