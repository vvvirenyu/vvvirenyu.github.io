"use strict";var precacheConfig=[["/index.html","a52a51468a5ec028e17a6a9e865d7fcf"],["/static/css/main.302952e9.css","21a987afafa452157e2f5cbef013aed3"],["/static/js/main.1525c833.js","5da62366b405e6deabe0ec0fc1f95164"],["/static/media/GitHub_Logo.cefc2023.png","cefc20232703e5e3c24efd5f50d75e26"],["/static/media/e1.d98afed7.png","d98afed777533813c223b69a83f71403"],["/static/media/e2.684c29d5.png","684c29d55db03ba68a1fccb49b4c5074"],["/static/media/e4.42e639c5.png","42e639c5c04bda35388df0f0717e50b9"],["/static/media/ganesh.117d32f1.png","117d32f166c1b439f467a10f2c741182"],["/static/media/hypno-timer.acb22425.png","acb224259ea6f86b30c53b7d05e80176"],["/static/media/png-cloud-skills.997cc1ad.png","997cc1ad9e54f561a099a4b03fdcf8dc"],["/static/media/png-language-skills.6db89201.png","6db89201137c5a0783bc3c3501cdee1f"],["/static/media/simon-joe.1a6f9802.png","1a6f9802f973dd47463429c00b42bbde"],["/static/media/ttt.ba7031c6.png","ba7031c6018db154b6f5acfe97177efa"],["/static/media/weather.4df1aa54.png","4df1aa54ebdd8c57b92830e6a94c575b"],["/static/media/wikisearch.cd7c2c83.png","cd7c2c8303cb5abdd92ce1b3cf6af121"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});