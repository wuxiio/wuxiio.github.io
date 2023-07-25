(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{486:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("prometheus 监控 es，同样采用 exporter 的方案。")]),s._v(" "),a("ul",[a("li",[s._v("项目地址：\n"),a("ul",[a("li",[s._v("elasticsearch_exporter：https://github.com/justwatchcom/elasticsearch_exporter")])])])]),s._v(" "),a("h2",{attrs:{id:"_1、安装部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装部署"}},[s._v("#")]),s._v(" 1、安装部署")]),s._v(" "),a("p",[s._v("现有 es 三节点的集群，环境大概如下：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("主机")]),s._v(" "),a("th",[s._v("组件")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("10.3.6.30–es-node1")]),s._v(" "),a("td",[s._v("es，nginx")])]),s._v(" "),a("tr",[a("td",[s._v("10.3.6.125–es-node2")]),s._v(" "),a("td",[s._v("es")])]),s._v(" "),a("tr",[a("td",[s._v("10.3.6.124–es-node3")]),s._v(" "),a("td",[s._v("es,kibana")])])])]),s._v(" "),a("p",[s._v("接着分别在如上三台主机上进行如下配置：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/justwatchcom/elasticsearch_exporter/releases/download/v1.1.0/elasticsearch_exporter-1.1.0.linux-amd64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf elasticsearch_exporter-1.1.0.linux-amd64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" elasticsearch_exporter-1.1.0.linux-amd64 /usr/local/elasticsearch_exporter\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("启动监控客户端：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./elasticsearch_exporter --web.listen-address "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":9109"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--es.uri")]),s._v(" http://10.3.6.30:9200 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用 systemd 管理：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /lib/systemd/system/es_exporter.service\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("The es_exporter\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("prometheus\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/elasticsearch_exporter/elasticsearch_exporter --web.listen-address "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":9308"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--es.uri")]),s._v(" http://127.0.0.1:9200\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("启动：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl daemon-reload\nsystemctl start es_exporter\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("查看 metrics：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9109/metrics\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-配置-prometheus-yml-添加监控目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-prometheus-yml-添加监控目标"}},[s._v("#")]),s._v(" 2，配置 prometheus.yml 添加监控目标")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/prometheus/prometheus.yml\n  - job_name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'elasticsearch'")]),s._v("\n    scrape_interval: 60s\n    scrape_timeout:  30s\n    metrics_path: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/metrics"')]),s._v("\n    static_configs:\n    - targets:\n      - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10.3.0.41:9109'")]),s._v("\n      labels:\n        service: elasticsearch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("重启服务。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ systemctl restart prometheus\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者通过命令热加载：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XPOST")]),s._v(" localhost:9090/-/reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_5-配置-grafana-的模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置-grafana-的模板"}},[s._v("#")]),s._v(" 5，配置 Grafana 的模板")]),s._v(" "),a("p",[s._v("模板通过 json 文件进行导入，文件就在解压的包内。")]),s._v(" "),a("p",[s._v("参考地址：https://shenshengkun.github.io/posts/550bdf86.html")]),s._v(" "),a("p",[s._v("或者通过如下 ID 进行导入："),a("code",[s._v("2322")]),s._v("以及其他。")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://t.eryajf.net/imgs/2021/09/15d9b303afb54a21.jpg",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/15d9b303afb54a21.jpg",alt:"img"}}),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_6-开启认证的启动方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-开启认证的启动方式"}},[s._v("#")]),s._v(" 6，开启认证的启动方式")]),s._v(" "),a("p",[s._v("如果 es 开启了认证，那么启动的时候需要将用户名密码加载进去：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("lasticsearch_exporter --web.listen-address "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":9308"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--es.uri")]),s._v(" http://username:password@192.168.10.3:9200 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中使用的是"),a("code",[s._v("monitoring")]),s._v("的用户密码。")]),s._v(" "),a("p",[s._v("当然，除去这种命令行的启动方式之外，还可以像上边一样，基于 systemd 进行管理，只需将认证的参数信息写入到如下内容当中：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/default/elasticsearch_exporter\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EXPORTER_ARGS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--es.uri=http://username:password@192.168.10.3:9200"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("接着将启动配置文件封装成如下脚本：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/init.d/elasticsearch_exporter\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chkconfig: 2345 60 20")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# description: elasticsearch_exporter")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("elasticsearch_exporter\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SCRIPT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/bin/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PIDFILE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/run/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v('.pid"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOGFILE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/log/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v('.log"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ENVFILE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/default/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://192.10.10.1'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EXPORTER_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NAME")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EXPORTER_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9114"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取本机ip")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPADDR"')]),s._v(" /etc/sysconfig/network-scripts/ifcfg-eth0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Eo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"([0-9]{1,3}\\.){3}[0-9]{1,3}"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("register_exporter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("json_data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"service_id":"\'')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${EXPORTER_NAME}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${IP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("}")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'","job":"\'')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${EXPORTER_NAME}")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'","ip":"\'')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${IP}")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'","port":"\'')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$EXPORTER_PORT")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'","tags":"","meta": {"hostname": "\'')]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"}}'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --connect-timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-X")]),s._v(" POST "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-type: application/json"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${json_data}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$URL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PIDFILE}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PIDFILE}")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v(" already running with PID "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("PIDFILE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&2")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Starting '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&2")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ENVFILE}")]),s._v('"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CMD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SCRIPT}")]),s._v(" --web.listen-address="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${IP}")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${EXPORTER_PORT}")]),s._v(" --log.level=error "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${EXPORTER_ARGS}")]),s._v('"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CMD}")]),s._v(" &> "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${LOGFILE}")]),s._v(" & echo \\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$!")]),s._v(" > "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PIDFILE}")]),s._v('"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "${NAME} started with PID $(cat ${PIDFILE})')]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n  sleep 1\n  if [ -f "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PIDFILE}")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ] && kill -0 '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PIDFILE}")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' &> /dev/null; then\n    echo "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v(" started successfully."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n    register_exporter\n  else\n    echo "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v(" was not started OK"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n    return 1\n  fi\n}\nstop() {\n  if [ ! -f "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDFILE")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ] || ! kill -0 '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDFILE")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' &> /dev/null; then\n    echo "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v(" not running"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n    return 1\n  fi\n  echo "')]),s._v("Stopping "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n  kill -15 '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDFILE")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('\n  rm -f "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDFILE")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  echo "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v(" stopped"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n}\nstatus() {\n  if [ ! -f "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDFILE")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ] || ! kill -0 '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDFILE")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' &> /dev/null; then\n    echo "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v(" is not running"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n  else\n    echo "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v(" is running"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n  fi\n}\nuninstall() {\n  echo -n "')]),s._v("Are you really sure you want to uninstall "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v("? That cannot be undone. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("yes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("No"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  local SURE\n  read SURE\n  if [ "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SURE")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" = "')]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ]; then\n    stop\n    rm -f "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDFILE")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n    echo "')]),s._v("Notice: log "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" is not be removed: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$LOGFILE'")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n    update-rc.d -f <NAME> remove\n    rm -fv "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  fi\n}\ncase "')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" in\n  start)\n    start\n    ;;\n  stop)\n    stop\n    ;;\n  uninstall)\n    uninstall\n    ;;\n  restart)\n    stop\n    start\n    ;;\n  status)\n  status\n  ;;\n  register)\n  register_exporter\n  ;;\n  *)\n    echo "')]),s._v("Usage: "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("start"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("stop"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("status"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("register"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("uninstall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('"\n'),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br")])]),a("p",[s._v("此处服务启动之后将会自动注册到统一的注册中心去，而不必再手动添加配置。")])])}),[],!1,null,null,null);a.default=e.exports}}]);