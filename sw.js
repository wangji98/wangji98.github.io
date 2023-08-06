/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1f6bb37327177cd76329c74b88f67238"],["/archives/2023/08/index.html","edcc23817d325b18302486d199290707"],["/archives/2023/index.html","5cf287a7dbe35b784607d399a5f671f6"],["/archives/index.html","a763da426a2e7fabe52ce43beeb23112"],["/css/index.css","b45e73c32813b6936900770344509f59"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/hangzhou/1.jpg","4331f64750f9c248b7bf4899b8cadfa1"],["/gallery/hangzhou/10.jpg","9b71de424784581f1c4397fe0daca1b8"],["/gallery/hangzhou/11.jpg","10eb8dc8de0b7f4ea6410267f826f762"],["/gallery/hangzhou/12.jpg","7452d64a2c5fdbf9e412bee6338b5fee"],["/gallery/hangzhou/13.jpg","75e62eb363266b418b28ef1d3b6728f3"],["/gallery/hangzhou/14.jpg","839595d7e3eb139773f6ddaac8e22d51"],["/gallery/hangzhou/15.jpg","b2d68deb7cb21e55d67edba1178fb568"],["/gallery/hangzhou/16.jpg","8f67cfd1153420a18bd93eeea610c5d4"],["/gallery/hangzhou/17.jpg","202136c0e79441cde406135d23f2f7de"],["/gallery/hangzhou/18.jpg","4bfb7e43687b16d4466876af998aae0b"],["/gallery/hangzhou/19.jpg","eb6c53a6f5dfb5d0e0b4148b0d39246d"],["/gallery/hangzhou/2.jpg","f923b7a74e222c2eb41f41e0009eb587"],["/gallery/hangzhou/20.jpg","7450284099563a064dc69c4c6024bca1"],["/gallery/hangzhou/21.jpg","bc57bb1a2b36ae376fcb57eabcef0601"],["/gallery/hangzhou/22.jpg","b7f8522b1b3ffa02313ad454dfd0824f"],["/gallery/hangzhou/23.jpg","abe0d8d28ce2681c98bdc467afcb2707"],["/gallery/hangzhou/24.jpg","39a4d1410a25b464f6b0fec85fd24b63"],["/gallery/hangzhou/25.jpg","201901ba8e9157cbf8d8ae6fe656e297"],["/gallery/hangzhou/26.jpg","131f31f949bbc321c48932f289e13844"],["/gallery/hangzhou/27.jpg","6432a5dc262bbd860dae4395e0f2993f"],["/gallery/hangzhou/28.jpg","3694843e41d72b1decf88b8ee0dacaf5"],["/gallery/hangzhou/29.jpg","1c74b5cdcadcf5e0b11c701a702eab3a"],["/gallery/hangzhou/3.jpg","b94d3d3b09e3ecf36fc47b6bdf11e10b"],["/gallery/hangzhou/30.jpg","7bcdc1cedfb8fa49ea431a45111ebfc9"],["/gallery/hangzhou/31.jpg","fb974987898ada3f29cc108684b3c726"],["/gallery/hangzhou/32.jpg","641d89da41539745207643f0ec4c9b7b"],["/gallery/hangzhou/33.jpg","57daf5d4b24800e311ff701d7955281d"],["/gallery/hangzhou/34.jpg","df380e429edd8684b04cdabf3e710349"],["/gallery/hangzhou/35.jpg","523c7191cfeb4879fdd05dee8c7f81c6"],["/gallery/hangzhou/36.jpg","7f6914a044742865ffb78f0bbc293549"],["/gallery/hangzhou/37.jpg","c9373f987bdb35ca929b06472342d89f"],["/gallery/hangzhou/4.jpg","07ea9afa419139b2c751bc0fe42da0cc"],["/gallery/hangzhou/5.jpg","26e135efa40c442fc8e4ee04ef6ee573"],["/gallery/hangzhou/6.jpg","28858c754375833883d59c677a733687"],["/gallery/hangzhou/7.jpg","45d74b422772ccc6690d3f4af063a9a8"],["/gallery/hangzhou/8.jpg","fe4440f901538f3498ebb0874e9a93c2"],["/gallery/hangzhou/9.jpg","98a8c6d323597e663da554e953c28b60"],["/gallery/hangzhou/index.html","4d8ad3682544b380f48cb23bdc784568"],["/gallery/index.html","6b012fb38e76ed6cb7e74711ff258634"],["/gallery/plant/1.jpg","9b71de424784581f1c4397fe0daca1b8"],["/gallery/plant/10.jpg","e1e6d7129581f2d96685374e0616264e"],["/gallery/plant/11.jpg","0da5c44427583382e22d092dde3f6efd"],["/gallery/plant/12.jpg","d15cf61996800146526a7eada4243a6b"],["/gallery/plant/2.jpg","10eb8dc8de0b7f4ea6410267f826f762"],["/gallery/plant/3.jpg","7452d64a2c5fdbf9e412bee6338b5fee"],["/gallery/plant/4.jpg","13192fb1d24e2604043b5627db4295df"],["/gallery/plant/5.jpg","3fa0d7dfc7faa8825bea5fcc967d8bc5"],["/gallery/plant/6.jpg","1587cfc096b88dee4f6ce7ce64bfb7d2"],["/gallery/plant/7.jpg","1ad71864e6f8984e0e1d47f27d9a0253"],["/gallery/plant/8.jpg","6704176dbac6d8b559771ceb1652179e"],["/gallery/plant/9.jpg","43506a1b2b1429dec625c62827df88c1"],["/gallery/plant/index.html","75711226a54b2634ec0db75d8df532f0"],["/gallery/shanghai/1.jpg","7d1ba88a03e0d33a44e783d084354fb0"],["/gallery/shanghai/10.jpg","cadfb48f09d733ceecd2b504bbee3ef3"],["/gallery/shanghai/2.jpg","6d403cf3800c3f5e4f0707eece6a6a44"],["/gallery/shanghai/3.jpg","5d43f6212d769ad69e609fd4e988eec8"],["/gallery/shanghai/4.jpg","6ffcfed0f864380c66e08576f2bfe786"],["/gallery/shanghai/5.jpg","ab8b2ce978bdc65adacb2027dc3b9834"],["/gallery/shanghai/6.jpg","71e003a21c3e9ef65a4f6d984682ffe9"],["/gallery/shanghai/7.jpg","fb84b577dcdab47a6f440eb99b7c605d"],["/gallery/shanghai/8.jpg","7807da70b5cda213f3430fb8b7f63b23"],["/gallery/shanghai/9.jpg","b162be325b4d94b5093f9646cfc5002f"],["/gallery/shanghai/index.html","702e8476093171bb44fc9d882290fa26"],["/img/1691244075754.jpg","8411e42697e8770da9dcf698d4c50094"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/homepage.jpg","82c96aa5c80042512682d1ac08e6f9b6"],["/index.html","2d624f2d1a2c41eed3660faec8c6bdd2"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/posts/2aaff2cb.html","a5fc6561c45d5d0e244dacfdd0e0b947"],["/posts/2aaff2cb/1.jpg","325fb0a35f34ed013e6b21b0d5351a19"],["/sw-register.js","e84ff1601528590e1c2fda3b77c66380"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
