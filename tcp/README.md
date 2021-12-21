# TCP

- [TCP 的那些事儿（下）](https://coolshell.cn/articles/11609.html)

## 延迟

- [TCP对往返时延RTT的定义？](https://www.zhihu.com/question/39244840)
- [关于5G时延的深度解读，非常详尽！](https://cloud.tencent.com/developer/article/1491672)
- [MSL、TTL和RTT简介](https://www.cnblogs.com/tomato0906/articles/4696792.html)
- [计算机网络中往返时延RTT概念学习](https://blog.csdn.net/wangjianno2/article/details/50572351)

### 如何测试 RTT 值

运行 `ping www.baidu.com` 得到下面的结果，最后有对 rtt 值的统计。

```
PING www.a.shifen.com (183.232.231.174) 56(84) bytes of data.
64 bytes from 183.232.231.174 (183.232.231.174): icmp_seq=1 ttl=53 time=32.6 ms
64 bytes from 183.232.231.174 (183.232.231.174): icmp_seq=2 ttl=53 time=32.7 ms
64 bytes from 183.232.231.174 (183.232.231.174): icmp_seq=3 ttl=53 time=32.4 ms
64 bytes from 183.232.231.174 (183.232.231.174): icmp_seq=4 ttl=53 time=31.3 ms
64 bytes from 183.232.231.174 (183.232.231.174): icmp_seq=5 ttl=53 time=32.7 ms
^C
--- www.a.shifen.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4053ms
rtt min/avg/max/mdev = 31.361/32.404/32.775/0.533 ms
```

参考 [ping命令全解析（语法、过程、结果分析、网络故障诊断）](http://witmax.cn/ping.html#5)

## 常见问题

### TCP 连接数限制？

- [一台机器最多能撑多少个TCP连接? 今天掰扯清楚！](https://zhuanlan.zhihu.com/p/290651392)