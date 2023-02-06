# HTTP2

## 新特性

- 二进制分帧：HTTP/2 中，同域名下所有通信都在单个连接上完成，该连接可以承载任意数量的双向数据流。每个数据流都以消息的形式发送，而消息又由一个或多个帧组成。多个帧之间可以乱序发送，根据帧首部的流标识可以重新组装。

    HTTP/2 采用二进制格式传输数据，而非 HTTP 1.x 的文本格式，二进制协议解析起来更高效。 HTTP/1 的请求和响应报文，都是由起始行，首部和实体正文（可选）组成，各部分之间以文本换行符分隔。HTTP/2 将请求和响应数据分割为更小的帧，并且它们采用二进制编码。

- 多路复用：在 HTTP/2 中，有了二进制分帧之后，HTTP /2 不再依赖 TCP 链接去实现多流并行了，在 HTTP/2 中：

    - 同域名下所有通信都在单个连接上完成。

        同个域名只需要占用一个 TCP 连接，消除了因多个 TCP 连接而带来的延时和内存消耗。

    - 单个连接可以承载任意数量的双向数据流。

        单个连接上可以并行交错的请求和响应，之间互不干扰。

    - 数据流以消息的形式发送，而消息又由一个或多个帧组成，多个帧之间可以乱序发送，因为根据帧首部的流标识可以重新组装。

        在 HTTP/2 中，每个请求都可以带一个 31bit 的优先值，0 表示最高优先级，数值越大优先级越低。有了这个优先值，客户端和服务器就可以在处理不同的流时采取不同的策略，以最优的方式发送流、消息和帧。

- 服务器推送

    服务端可以在发送页面 HTML 时主动推送其它资源，而不用等到浏览器解析到相应位置，发起请求再响应。例如服务端可以主动把JS和CSS文件推送给客户端，而不需要客户端解析HTML时再发送这些请求。

    服务端可以主动推送，客户端也有权利选择是否接收。如果服务端推送的资源已经被浏览器缓存过，浏览器可以通过发送 RST_STREAM 帧来拒收。主动推送也遵守同源策略，服务器不会随便推送第三方资源给客户端。

- 头部压缩：HTTP/2 对消息头采用 HPACK（专为 http/2 头部设计的压缩格式）进行压缩传输，能够节省消息头占用的网络的流量。而 HTTP/1.x 每次请求，都会携带大量冗余头信息，浪费了很多带宽资源。

    - HTTP/2 在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键－值对，对于相同的数据，不再通过每次请求和响应发送；
    - 首部表在 HTTP/2 的连接存续期内始终存在，由客户端和服务器共同渐进地更新;
    - 每个新的首部键－值对要么被追加到当前表的末尾，要么替换表中之前的值。

## Server Push

- [Removing HTTP/2 Server Push from Chrome](https://developer.chrome.com/blog/removing-push/?utm_source=pocket_mylist)
- [Chrome 将禁用 HTTP/2 服务器推送（Server Push）支持](https://www.oschina.net/news/207112/chrome-removing-server-push?utm_source=pocket_mylist)
- [Faster page loads using server think-time with Early Hints](https://developer.chrome.com/blog/early-hints/?utm_source=pocket_mylist)

---

- [一文读懂 HTTP/2 特性](https://zhuanlan.zhihu.com/p/26559480)
- [HTTP/2 服务器推送（Server Push）教程](http://www.ruanyifeng.com/blog/2018/03/http2_server_push.html)

---

- [HTTP/2之服务器推送(Server Push)最佳实践](https://cloud.tencent.com/developer/article/1159626)
- [一文了解阿里云CDN HTTP2.0](https://developer.aliyun.com/article/623185)
- [静态资源递送优化：HTTP/2 和 Server Push](https://blog.skk.moe/post/http2-server-push/)
- [再谈ServerPush，Push or Not Push](https://juejin.cn/post/6877063824861167623)
- [node.js搭建http2 server/http2 server Push](https://juejin.cn/post/7036564625436966926)
- [[译] 通过 Node.js, Express.js 实现 HTTP/2 Server Push](https://segmentfault.com/a/1190000009084692)
- [[译] Node.js, Express.js 搭建 HTTP/2 服务器](https://biaomingzhong.github.io/2017/http2-node-express/)
- [Node.js can HTTP/2 push!](https://medium.com/the-node-js-collection/node-js-can-http-2-push-b491894e1bb1)
- [HTTP2 Server Push的研究](https://www.open-open.com/lib/view/open1483537725037.html)
- [Node HTTP/2 Server Push 从了解到放弃](http://kmanong.top/kmn/qxw/form/article?id=7697&cate=0) / https://segmentfault.com/a/1190000014655562
- [HTTP/2 服务器推送（Server Push）教程](https://bbs.shuyu.link/topics/418)
- [浏览器允许的并发请求资源数是什么意思？](https://www.zhihu.com/question/20474326)
