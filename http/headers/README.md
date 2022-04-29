# HTTP 头

## 基础

### 请求头

TODO

### 响应头

TODO

## 进阶

### host vs referer vs origin

- host：请求服务器的域名或 IP 地址和端口号

    同一个服务器可以设置多个不同的域名，通过不同域名访问服务器时，服务器可以根据 host 转发到对应到应用服务器。

- referer：包含了当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的

    有几种情况不会发送 referer：

    1. 来源页面采用的协议为表示本地文件的 "file" 或者 "data" URI；
    2. 当前请求页面采用的是非安全协议，而来源页面采用的是安全协议（HTTPS）；
    3. 直接输入网址或通过浏览器书签访问；
    4. 使用 html5 中 noreferrer

    用途：服务端一般使用 Referer 首部识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等，还有个常见的用途是图片防盗链。

- origin：表示请求来自于哪个站点，origin 只包含域名或 IP 地址，并不包含任何路径信息。

    origin 主要用于 CORS 请求或者 POST 请求

参考文献

- [HTTP headers 之 host, referer, origin](https://juejin.cn/post/6844903954455724045)


---

## Timing-Allow-Origin

- [Timing-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Timing-Allow-Origin)

## Keep-Alive

- [Keep-Alive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Keep-Alive)
