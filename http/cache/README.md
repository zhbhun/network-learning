# HTTP 缓存

## 缓存指令

- 可缓存性：

    - public：共享缓存，支持 CDN 、代理服务器和本地缓存
    - private：私有缓存，只支持本地缓存
    - no-cache：禁用强缓存，支持协商缓存
    - no-store：禁用缓存

- 缓存时间：

    - max-age：缓存时间（秒）
    - s-maxage：单独配置共享缓存时间（秒）

- 验证加载

    - must-revalidate：部分浏览器在请求失败时会使用旧资源，但存在 must-revalidate 时就不能这么做了，直接返回 504
    - proxy-revalidate：与 must-revalidate 作用相同，但它仅适用于共享缓存

## 最佳实践

### 响应头设置

- `max-age=60`：强缓存时间为 60 秒，且支持协商缓存
- `max-age=0`：强缓存时间为 0（无效），但支持协商缓存
- `no-cache`：同上
- `no-store`：禁用强缓存和协商缓存

### 请求头设置

- `max-age=0`：告诉浏览器禁用强缓存，但支持协商缓存
- `no-cache`：告诉浏览器禁用强缓存和协商缓存

## 参考文献

- [Cache-Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)
- [HTTP缓存控制小结](http://imweb.io/topic/5795dcb6fb312541492eda8c)
- [H5 浏览器和 webview 后退缓存机制](https://juejin.im/entry/588b44a08fd9c544813ed5b3)
- [HTTP 缓存别再乱用了！推荐一个缓存设置的最佳姿势！](https://www.51cto.com/article/702232.html)
- [HTTP 缓存简析](https://ssshooter.com/2020-09-18-http-caching/)
- [图解Http缓存控制之max-age=0、no-cache、no-store区别](https://zhuanlan.zhihu.com/p/55623075)
