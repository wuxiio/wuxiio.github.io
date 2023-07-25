(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{482:function(s,a,e){"use strict";e.r(a);var r=e(0),t=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("prometheus 监控 redis 需要用到 redis_exporter。")]),s._v(" "),a("p",[s._v("redis_exporter 项目地址：https://github.com/oliver006/redis_exporter")]),s._v(" "),a("h2",{attrs:{id:"_1、安装部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装部署"}},[s._v("#")]),s._v(" 1、安装部署")]),s._v(" "),a("p",[s._v("我这里的 redis 部署在 192.168.111.11 之上，而 prometheus 服务端是在 192.168.111.3 上，这个时候，监控的工具 redis_exporter 可以部署在这两台主机任一一台上，只不过需要注意的是，在配置 prometheus.yaml 添加监控目标的时候，注意填写对应 ip 即可。")]),s._v(" "),a("p",[s._v("我这里则部署在了 Prometheus Server 之上。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/oliver006/redis_exporter/releases/download/v0.21.2/redis_exporter-v0.21.2.linux-amd64.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/redis_exporter\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf redis_exporter-v0.21.2.linux-amd64.tar.gz "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /usr/local/redis_exporter/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_2、redis-exporter-用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、redis-exporter-用法"}},[s._v("#")]),s._v(" 2、redis_exporter 用法")]),s._v(" "),a("p",[s._v("解压后只有一个二进制程序就叫 redis_exporter 通过 -h 可以获取到帮助信息，下面列出一些常用的选项：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("-redis.addr：指明一个或多个 Redis 节点的地址，多个节点使用逗号分隔，默认为 redis://localhost:6379\n-redis.password：验证 Redis 时使用的密码；\n-redis.file：包含一个或多个redis 节点的文件路径，每行一个节点，此选项与 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-redis.addr")]),s._v(" 互斥。\n-web.listen-address：监听的地址和端口，默认为 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:9121\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_3-运行-redis-exporter-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-运行-redis-exporter-服务"}},[s._v("#")]),s._v(" 3，运行 redis_exporter 服务")]),s._v(" "),a("h3",{attrs:{id:"_1-方式-a-直接启动。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-方式-a-直接启动。"}},[s._v("#")]),s._v(" 1，方式 A 直接启动。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 无密码")]),s._v("\n./redis_exporter redis//192.168.111.11:6379 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 有密码")]),s._v("\nredis_exporter  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-redis.addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".111.11:6379  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-redis.password")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_2-方式-b-通过-system-管理。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-方式-b-通过-system-管理。"}},[s._v("#")]),s._v(" 2，方式 B 通过 system 管理。")]),s._v(" "),a("p",[s._v("创建 redis_exporter.service 启动脚本")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/redis_exporter.service\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis_exporter\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://github.com/oliver006/redis_exporter\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("prometheus\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/redis_exporter/redis_exporter "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-redis.addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".111.11:6379  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-redis.password")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[a("code",[s._v("注意")]),s._v("：关于 redis 的相关信息，则在"),a("code",[s._v("ExecStart")]),s._v("配置项当中进行定义！")]),s._v(" "),a("p",[s._v("redis_exporter 使用 prometheus 用户运行，所以需要创建该用户：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" prometheus\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" prometheus "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" /var/lib/prometheus "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /sbin/nologin prometheus\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("启动服务：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ systemctl daemon-reload\n$ systemctl start redis_exporter\n$ systemctl status redis_exporter\n$ ss -tnl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9121")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_4、配置-prometheus-yml-添加监控目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、配置-prometheus-yml-添加监控目标"}},[s._v("#")]),s._v(" 4、配置 prometheus.yml 添加监控目标")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/prometheus/prometheus.yml\n  - job_name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redis'")]),s._v("\n    scrape_interval: 10s\n    static_configs:\n      - targets:\n        - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost:9121'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果是部署在192.168.111.11上，那么localhost需要改成192.168.111.11")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("重启服务。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ systemctl restart prometheus\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_5-配置-grafana-的模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置-grafana-的模板"}},[s._v("#")]),s._v(" 5，配置 Grafana 的模板")]),s._v(" "),a("p",[s._v("redis_exporter 在 Grafana 上为我们提供好了 Dashboard 模板：https://grafana.com/dashboards/763")]),s._v(" "),a("p",[s._v("下载后在 Grafana 中导入 json 模板就可以看到官方这样的示例截图啦：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9593ff5ea69b016b.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("参考：https://codegreen.cn/2018/09/29/prometheus-redis/")])])}),[],!1,null,null,null);a.default=t.exports}}]);