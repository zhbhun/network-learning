REST，即 (Resource)Representational State Transfer 的缩写，译为“(资源)表述性状态传递”，是 Roy Fielding 博士在 2000 年他的博士论文中提出来的一种软件架构风格（**使用 URL 定位资源，用 HTTP 动词描述操作**）。如果一个架构符合 REST 原则，就称它为 RESTful 架构。目前，RESTful 架构是最流行的一种互联网软件架构，它结构清晰、符合标准、易于理解、扩展方便，所以正得到越来越多网站的采用。

REST 定义了一组体系架构原则，我们可以根据这些原则设计以系统资源为中心的 Web 服务，包括使用不同语言编写的客户端如何通过 HTTP 处理和传输资源状态。 

- URL 中只使用名词来指定资源，不使用动词；

    Resources 是网络上的一个实体，或者说是网络上的一个具体信息。它可以是一段文本、一张图片、一首歌曲、一种服务，总之就是一个具体的实在。你可以用一个 URI （统一资源定位符）指向它，每种资源对应一个特定的 URI。要获取这个资源，访问它的 URI 就可以，因此 URI 就成了每一个资源的地址或独一无二的识别符。

    误区：
    
    - 最常见的一种设计错误，就是 URI 包含动词。因为"资源"表示一种实体，所以应该是名词，URI 不应该有动词，动词应该放在 HTTP 协议中。
    - 客户端和服务器之间，传递这种资源的某种表现层。URI 只代表资源的实体，不代表它的形式。严格地说，有些网址最后的 ".html" 后缀名是不必要的，因为这个后缀名表示格式，属于"表现层"范畴，而 URI 应该只代表"资源"的位置。它的具体表现形式，应该在 HTTP 请求的头信息中用 Accept 和 Content-Type 字段指定，这两个字段才是对"表现层"的描述。
    - 按照 REST 规则，不同的版本也可以理解成同一种资源的不同表现形式，所以应该采用同一个 URI。版本号可以在 HTTP 请求头信息的Accept字段中进行区分（参见 [Versioning REST Services](http://www.informit.com/articles/article.aspx?p=1566460)）。但是，这不如将版本信息放入 URL 方便和直观。

- 用 HTTP 协议里的动词来实现资源的添加，修改，删除等操作；
- Server 和 Client 之间传递某资源的一个表现形式，例如：JSON，XML 等；

    Representational 表示 Resources 可以有多种外在表现形式，比如，文本可以用 txt 格式表现，也可以用 HTML 格式、XML 格式、JSON 格式表现，甚至可以采用二进制格式；图片可以用 JPG 格式表现，也可以用 PNG 格式表现。

- 用 HTTP Status Code 传递 Server 的状态信息；

    在 HTTP 协议里面，有四个表示操作方式的动词：GET、POST、PUT、DELETE。它们分别对应四种基本操作：GET 用来获取资源，POST 用来新建资源（也可以用于更新资源），PUT 用来更新资源，DELETE 用来删除资源。

参考文献

- [理解 RESTful 架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)
- [怎样用通俗的语言解释什么叫 REST，以及什么是 RESTful？](https://www.zhihu.com/question/28557115)
- [REST API Tutorial ](http://www.restapitutorial.com/)
- [架构风格与基于网络应用软件的架构设计](http://yuedu.baidu.com/ebook/780324fbf121dd36a32d8269)

# 对比
REST VS SOAP VS XML-RPC

- [Web 服务编程，REST 与 SOAP](https://www.ibm.com/developerworks/cn/webservices/0907_rest_soap/)

# 实践

- [RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)
- [HTTP API Design Guide](https://github.com/interagent/http-api-design) / [HTTP API 设计指南](https://github.com/cocoajin/http-api-design-ZH_CN)
- [Principles of good RESTful API Design](http://codeplanet.io/principles-good-restful-api-design/) / [RESTful API 的设计原则 ](http://www.cnblogs.com/moonz-wu/p/4211626.html)
- [REST best practices](https://bourgeois.me/rest/)
- [Some REST best practices](https://bourgeois.me/rest/)
- [Restful API 的设计规范](http://novoland.github.io/%E8%AE%BE%E8%AE%A1/2015/08/17/Restful%20API%20%E7%9A%84%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83.html)
- [撰写安全合格的REST API ](http://zhuanlan.zhihu.com/prattle/20034107)
- [最佳实践：更好的设计你的 REST API ](http://www.ibm.com/developerworks/cn/web/1103_chenyan_restapi/)
- [Thoughts on RESTful API Design](https://restful-api-design.readthedocs.org/en/latest/)
- [HTTP 接口设计指北](https://github.com/bolasblack/http-api-guide)
- [Web API Design](https://pages.apigee.com/web-api-design-website-h-ebook-registration.html)

# 案例
- 增删查改
- 登录注册
- ...

- [Heroku 平台 API 指引](https://devcenter.heroku.com/articles/platform-api-reference)
# 争议
- 某些动作是 HTTP 动词表示不了的？

    可以将动作做成一种资源，例如：网上汇款，从账户 1 向账户 2 汇款 500 元，错误的 URI 是：`POST /accounts/1/transfer/500/to/2`，正确的写法是把动词 `transfer` 改成名词 `transaction`，资源不能是动词，但是可以是一种服务：

    ```
    POST /transaction HTTP/1.1
    Host: 127.0.0.1

    from=1&to=2&amount=500.00
    ```

- 用 ".html", ".json", ".xml" 来表示表述类型, 以及在 URI 上加入版本号, 在实际使用中会更简单直观一些？

    > 因为网站管理员检查 HTTP 日志时, 大多数(一般为 GET)情况下直接看 URI 就可以了解问题所在。而这对于 RESTful 接口的应用开发者, 也会更方便一些。

    > 除了 XHR 以外的浏览器发起 HTTP 无法指定 Request Header。

    > 考虑到 URI 的使用者很大一部分都是浏览器，而在浏览器向服务器提交提求的时候是不能任意增加HTTP 头的（除非把浏览器的浏览功能全部用 JavaScript 实现，XHR 可以指定，但这不太现实），许多信息都得放在 URI地址中。所以 URI 中出现动作、版本等内容都是正常的。


- 没有谁敢保证浏览器可以发出真的 PUT，也没有谁敢保证 WEB 服务器可以理解真正的 PUT

    > HTTP标准没有真正得到落实。现在其实处于一个“尴尬”的状况，一方面REST已经从理论上提供了解决方向，另外一方面是实际环境其实还没有提供足够多的REST支持。比如通过ajax，大多数(?)浏览器可以发出原生的PUT/DELETE方法，不使用ajax，就只能GET/POST。实际开发中，没有谁敢保证浏览器可以发出真的PUT，也没有谁敢保证web服务器可以理解真正的PUT，即使web服务器可以理解，也不能保证服务器端开发语言能够理解（比如php有$_GET，$_POST，但是没有$_PUT）。所以PUT/DELETE方法好些时候其实是通过POST模拟的，或者request message包括自定义的http header，一般是X-HTTP-METHOD-OVERRIDE: PUT。POST/PUT是否幂等，只能由你的程序来保证，并没有实际的支撑，具体选择POST还是PUT，其实就是一种约定或者规范。

参考

- [RESTful 有用吗？ HTTP 有 GET POST 就足够了？](https://www.v2ex.com/t/340607)
- [没有人真正理解REST or HTTP](http://www.jdon.com/41716)
- [How to version REST URIs](http://stackoverflow.com/questions/972226/how-to-version-rest-uris)

# 书籍
- [REST CookBook](http://restcookbook.com/)

# TODO
- [restful-api-design-references](https://github.com/aisuhua/restful-api-design-references)

