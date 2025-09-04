# Websocket

## 事件

- 浏览器

  - open: 连接建立成功时触发。
  - message: 收到服务端发来的数据时触发。event.data 可能是字符串或 Blob/ArrayBuffer。
  - error: 出错时触发（例如网络错误）。
  - close: 连接关闭时触发（无论是正常关闭还是异常断开）。

- 服务端

  - server

    - connection: 有新的客户端连接时触发。
    - error: 服务器错误。
    - listening: 服务器开始监听端口。
    - close: 服务器关闭时触发。

  - socket

    - open: （仅客户端）连接建立成功时触发。
    - message: 收到数据时触发。
    - error: 出错时触发。
    - close: 连接关闭时触发。
    - ping: 收到对端的 ping。
    - pong: 收到对端的 pong。
    - upgrade: 升级 HTTP 协议时触发（一般用不到）。

## 常见问题

### 分包与黏包

- [Websocket消息帧粘包，拆包及处理方法](https://blog.csdn.net/yangzai187/article/details/93905594)
- [websocket协议，tcp分包与粘包解决](https://zhuanlan.zhihu.com/p/147374505)

### 掉线重连

- [细说websocket快速重连机制](https://zhuanlan.zhihu.com/p/162808604)
