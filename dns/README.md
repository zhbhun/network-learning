# DNS

域名（Domain names）是互联网基础架构的关键部分，它们为互联网上任何可用的网页服务器提供了人类可读的地址。

## 域名

### 域名结构

一个域名是由几部分（有可能只是一部分，也许是两部分，三部分...）组成的简单结构，它被点分隔，并需要从右到左阅读。

![domain-structure.png](./assets/domain-structure.png)

- TLD：Top-Level Domain，顶级域名
- 标签：一个标签可以是任何东西，从一个字母到一个句子，刚好位于 TLD 前面的标签也被称为二级域名 (SLD)。一个域名可以有多个标签，没有强制规定必须要3个标签来构成域名。例如，www.inf.ed.ac.uk 是一个正确的域名。

### “购买域名”

你不能 “购买一个域名”，你只能花钱获得一个域名在一年或多年内的使用权。你可以延长你的使用权，同时你的续期将优先于其他人的使用申请。但你从来都没有拥有过域名。

1. 找个可用的域名

    使用 [whois](https://www.runoob.com/linux/linux-comm-whois.html) 命令查询域名描述信息，如果返回 Not Found 表示该域名还没有被注册。

2. 注册域名

    - godaddy
    - 阿里云

### 域名解析

域名解析就是域名到 IP 地址的转换过程，域名的解析工作由 DNS 服务器完成，让人们通过注册的域名可以访问到网站。DNS 服务器会把域名解析到一个 IP 地址，然后在此IP地址的主机上将一个子目录与域名绑定。

域名解析时会添加解析记录，这些记录有：A 记录、AAAA 记录、CNAME 记录、MX 记录、NS 记录、TXT 记录、SRV 记录、URL 转发。域名的解析工作由 DNS 服务器完成。

- A 记录： 将域名指向一个 IPv4 地址（例如：100.100.100.100），需要增加A记录
- CNAME 记录：如果将域名指向一个域名，实现与被指向域名相同的访问效果，需要增加 CNAME 记录。这个域名一般是主机服务商提供的一个域名
- MX 记录：建立电子邮箱服务，将指向邮件服务器地址，需要设置 MX 记录。建立邮箱时，一般会根据邮箱服务商提供的MX记录填写此记录
- NS 记录：域名解析服务器记录，如果要将子域名指定某个域名服务器来解析，需要设置 NS 记录
- TXT 记录：可任意填写，可为空。一般做一些验证记录时会使用此项，如：做 SPF（反垃圾邮件）记录
- AAAA 记录：将主机名（或域名）指向一个 IPv6 地址（例如：ff03:0:0:0:0:0:0:c1），需要添加 AAAA 记录
- SRV 记录：添加服务记录服务器服务记录时会添加此项，SRV 记录了哪台计算机提供了哪个服务。格式为：服务的名字.协议的类型（例如：_example-server._tcp）。
- SOA 记录：SOA 叫做起始授权机构记录，NS 用于标识多台域名解析服务器，SOA 记录用于在众多 NS 记录中那一台是主服务器
- PTR 记录：PTR 记录是A记录的逆向记录，又称做 IP 反查记录或指针记录，负责将 IP 反向解析为域名
- 显性 URL 转发记录：将域名指向一个 http(s) 协议地址，访问域名时，自动跳转至目标地址。例如：将 www.aaa.cn 显性转发到 www.bbb.com 后，访问 www.aaa.cn 时，地址栏显示的地址为：www.bbb.com。
- 隐性 URL 转发记录：将域名指向一个 http(s) 协议地址，访问域名时，自动跳转至目标地址，隐性转发会隐藏真实的目标地址。例如：将 www.aaa.cn 显性转发到 www.bbb.com 后，访问 www.aaa.cn 时，地址栏显示的地址仍然是：www.aaa.cn。

TTL 值

TTL－生存时间（Time To Live），表示解析记录在 DNS 服务器中的缓存时间，TTL 的时间长度单位是秒，一般为 3600 秒。比如：在访问 www.abc.com 时，如果在 DNS 服务器的缓存中没有该记录，就会向某个 NS 服务器发出请求，获得该记录后，该记录会在 DNS 服务器上保存 TTL 的时间长度，在 TTL 有效期内访问 www.abc.com，DNS 服务器会直接缓存中返回刚才的记录。

参考文献

- [DNS域名解析中A、AAAA、CNAME、MX、NS、TXT、SRV、SOA、PTR各项记录的作用](https://itbilu.com/other/relate/EyxzdVl3.html#contrast)

---

## 参考文献

- [根域名的知识](http://www.ruanyifeng.com/blog/2018/05/root-domain.html)
- [什么是域名？](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_is_a_domain_name)
