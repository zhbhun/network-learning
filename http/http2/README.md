# HTTPS

## 介绍

所有信息明文传播，存在三大风险：

- 窃听风险（eavesdropping）：第三方可以获知通信内容。
- 篡改风险（tampering）：第三方可以修改通信内容。
- 冒充风险（pretending）：第三方可以冒充他人身份参与通信。

SSL/TLS 协议的目标：

- 防窃听：所有信息都是加密传播，第三方无法窃听。
- 防篡改：具有校验机制，一旦被篡改，通信双方会立刻发现。
- 防冒充：配备身份证书，防止身份被冒充。

## 安装配置

1. 获取证书：证书是一个二进制文件，里面包含经过认证的网站公钥和一些元数据，要从经销商购买。

    三种认证级别

    - 域名认证（Domain Validation）：最低级别认证，可以确认申请人拥有这个域名。对于这种证书，浏览器会在地址栏显示一把锁。
    - 公司认证（Company Validation）：确认域名所有人是哪一家公司，证书里面会包含公司信息。
    - 扩展认证（Extended Validation）：最高级别的认证，浏览器地址栏会显示公司名。

    三种覆盖范围

    - 单域名证书：只能用于单一域名，foo.com的证书不能用于www.foo.com
    - 通配符证书：可以用于某个域名及其所有一级子域名，比如*.foo.com的证书可以用于foo.com，也可以用于www.foo.com
    - 多域名证书：可以用于多个域名，比如foo.com和bar.com


    ps：认证级别越高、覆盖范围越广的证书，价格越贵。

2. 安装证书：证书可以放在/etc/ssl目录（Linux 系统），然后根据你使用的Web服务器进行配置。

    [Nginx 安装 SSL 配置 HTTPS 超详细完整全过程](https://www.ruanyifeng.com/blog/2016/08/migrate-from-http-to-https.html)

3. 访问配置：

    - 修改链接：

        ```html
        <link rel="canonical" href="https://foo.com/bar.html" />
        <script src="https://foo.com/jquery.js"></script>
        <script src="//foo.com/jquery.js"></script>
        ```
    
    - 301 重定向

        ```apache
        listen 80;
          server_name domain.com www.domain.com;
          return 301 https://domain.com$request_uri;
        }
        ```
    
    - HTTP Strict Transport Security (HSTS)：网站的响应头里面，加入一个强制性声明，强制浏览器只能发出HTTPS请求，并阻止用户接受不安全的证书。

        ```
        Strict-Transport-Security: max-age=31536000; includeSubDomains
        ```

    - Cookie：在网站响应头的 Set-Cookie 字段加上 Secure 标志，可以使浏览器只在使用 HTTPS 时，才发送Cookie。

        ```
        Set-Cookie: LSID=DQAAAK...Eaem_vYg; Secure
        ```

参考文献

- [HTTPS 升级指南](https://www.ruanyifeng.com/blog/2016/08/migrate-from-http-to-https.html)

## 工作原理

> SSL/TLS 协议的基本思路是采用公钥加密法，也就是说，客户端先向服务器端索要公钥，然后用公钥加密信息，服务器收到密文后，用自己的私钥解密。

ps：如何保证公钥不被篡改？ —— 将公钥放在数字证书中。只要证书是可信的，公钥就是可信的。

1. 客户端向服务器端索要并验证公钥。
2. 双方协商生成"对话密钥"。
3. 双方采用"对话密钥"进行加密通信。

- [SSL/TLS协议运行机制的概述](https://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)
- [《HTTPS 协议概述》](https://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)
- [《图解 HTTPS 协议》](https://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html)

## FAQ

- [《HTTPS 协议的七个误解》](https://www.ruanyifeng.com/blog/2011/02/seven_myths_about_https.html)

### HTTPS 链接比较慢？

```
HTTP耗时 = TCP握手

HTTPs耗时 = TCP握手 + SSL握手
```

- [《HTTPS 协议的延迟有多大？》](https://www.ruanyifeng.com/blog/2014/09/ssl-latency.html)

## 参考文献

- [HTTP 2：现实世界的性能测试和剖析](https://css-tricks.com/http2-real-world-performance-test-analysis/)
