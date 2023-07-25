(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{643:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-前言说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言说明"}},[s._v("#")]),s._v(" 1，前言说明")]),s._v(" "),a("p",[s._v("golang是近来非常火热的语言，但是处理其依赖包一直都是一个让人头疼的问题，尤其是在国内，开发者需要下载一些官方的包的时候，就会非常苦恼。尽管已经有了私服 "),a("code",[s._v("Athens")]),s._v("，公司也已经搭建了这个私服，但是小伙伴们使用下来，反馈仍旧不好，大多时候下载官方的包时还是要自己本地开小飞机进行下载。")]),s._v(" "),a("p",[s._v("今天就打算借助于nexus优秀且强大的代理能力，来解决一下这个痛点。")]),s._v(" "),a("p",[s._v("在nexus官方文档配置go代理的文章里，有如下一个拓扑说明了nexus当中go私服的用法：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2f1e58075227bb8c.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("这张图的意思很明了，也就是nexus私服的建立，同样需要依赖于 "),a("code",[s._v("Athens")]),s._v("，因为在对一些本地包下载的问题上，显然"),a("code",[s._v("Athens")]),s._v("解决的更好一些。于是乎，在目前nexus最新的版本(3.20)中我们看到，其也仅仅支持"),a("code",[s._v("proxy")]),s._v("和"),a("code",[s._v("group")]),s._v("两种类型，group是统一对外提供访问的，不必过多介绍，那么本篇文章，也就将是重点围绕着proxy类型的代理展开来讲的。")]),s._v(" "),a("p",[s._v("目前来看，纵然是nexus官方文档，谷歌百度，也没有比较完备的文档针对nexus当中配置golang项目私服的文章，我这里也算是结合之前配置其他代理的一些经验，分享一下自己配置整理的思路。至少目前公司小伙伴用起来，都是非常开心满意的，被这种简约高速的代理方式，纷纷赞不绝口的。")]),s._v(" "),a("p",[s._v("配置过程中，将添加三个proxy类型的，其中一个是套娃形式的，接下来一一介绍。")]),s._v(" "),a("h2",{attrs:{id:"_2-创建blob存储。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建blob存储。"}},[s._v("#")]),s._v(" 2，创建blob存储。")]),s._v(" "),a("p",[s._v("为其创建一个单独的存储空间。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8ad591715e94bb53.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_3-阿里代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-阿里代理"}},[s._v("#")]),s._v(" 3，阿里代理")]),s._v(" "),a("p",[s._v("首先将国内的阿里仓库添加进来，再一次口头表扬阿里，这造福广大开发者的举措。添加的方式非常简单，与其他项目的代理添加方式一致：")]),s._v(" "),a("ul",[a("li",[s._v("Name: proxy-go-ali")]),s._v(" "),a("li",[s._v("Proxy\n"),a("ul",[a("li",[s._v("Remote Storage: 远程仓库地址，这里填写: https://mirrors.aliyun.com/goproxy/")])])]),s._v(" "),a("li",[s._v("Storage: go-hub。")])]),s._v(" "),a("p",[s._v("其他的均是默认。")]),s._v(" "),a("p",[s._v("整体配置截图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b2df8d77b42736cb.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_4-官方代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-官方代理"}},[s._v("#")]),s._v(" 4，官方代理")]),s._v(" "),a("p",[s._v("首先将国内的阿里仓库添加进来，再一次口头表扬阿里，这造福广大开发者的举措。添加的方式非常简单，与其他项目的代理添加方式一致：")]),s._v(" "),a("ul",[a("li",[s._v("Name: proxy-go-gf")]),s._v(" "),a("li",[s._v("Proxy\n"),a("ul",[a("li",[s._v("Remote Storage: 远程仓库地址，这里填写: "),a("a",{attrs:{href:"https://goproxy.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://goproxy.io"),a("OutboundLink")],1)])])]),s._v(" "),a("li",[s._v("Storage: go-hub。")])]),s._v(" "),a("p",[s._v("其他的均是默认。")]),s._v(" "),a("p",[s._v("整体配置截图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2b835ea0b9ffabbe.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("如上两步都比较简单，直接配置现成的代理即可。接下来进入套娃代理的配置。")]),s._v(" "),a("h2",{attrs:{id:"_5-套娃代理。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-套娃代理。"}},[s._v("#")]),s._v(" 5，套娃代理。")]),s._v(" "),a("p",[s._v("这里套娃代理的思路非常简单，主要借助于go语言开源的私服工具"),a("code",[s._v("Athens")]),s._v("来实现。")]),s._v(" "),a("p",[s._v("有时候我们要下一些国外的包，或者GitHub上的包，这个时候可能仅仅配置如上两个代理是不够的，因为我们私服到达如上代理的网络可能会有问题，尤其是官方的代理，而阿里的代理又未必我们想要的全都有，于是，我们需要自建一个能够快速下载国外包的代理。")]),s._v(" "),a("p",[s._v("这个代理通过"),a("code",[s._v("Athens")]),s._v("服务进行部署，并且服务器节点放置在国外。为了方便，我们使用docker进行部署。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /data/athens/storage:/data/athens "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--net")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ATHENS_DISK_STORAGE_ROOT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/athens  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ATHENS_STORAGE_TYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("disk "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ATHENS_TIMEOUT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ATHENS_GOGET_WORKERS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ATHENS_PROTOCOL_WORKERS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" athens-proxy  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--restart")]),s._v(" always    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:3000:3000 gomods/athens\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("以上将在对外的主机上启动一个私服，主要用于下载外部的一些依赖包。通过如下规则配置一个可供访问的域名，注意需要添加证书认证。")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("cat")]),s._v(" athens-out.test.com.conf\n\nserver")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl http2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v("  124.156.98.252 athens-out.test.com")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v("     /etc/nginx/secure/test.cer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v(" /etc/nginx/secure/test.key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_session_timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5m")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_ciphers")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_protocols")]),s._v(" TLSv1 TLSv1.1 TLSv1.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_prefer_server_ciphers")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v(" /data/log/athens_access.log json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_log")]),s._v(" /data/log/athens_error.log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("allow")]),s._v(" 1.1.1.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里可以放开公司访问")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("deny")]),s._v(" all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://127.0.0.1:3000/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("现在，我将继续在内网创建一个"),a("code",[s._v("Athens")]),s._v("代理，这个代理主要用于代理内网"),a("code",[s._v("Gitlab")]),s._v("当中的包，并将上边对外的代理一并代理进来，前边所谓的套娃代理，就是从这儿而来。在本地的某台主机上，启动如下服务：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--net")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /data/athens/storage:/data/athens "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /data/athens/gitconfig/ssh-keys:/root/.ssh  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ATHENS_DISK_STORAGE_ROOT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/athens "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ATHENS_STORAGE_TYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("disk  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ATHENS_GLOBAL_ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://athens-out.test.com"')]),s._v(" --add-host  gitlab.test.com:10.3.0.42 --add-host athens-out.test.com:124.156.98.252 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" athens-proxy "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--restart")]),s._v(" always "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:3000:3000    gomods/athens\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("以上，依旧挂载了 "),a("code",[s._v("/data/athens/storage")]),s._v("作为包存储路径，接着又挂在了一个路径 "),a("code",[s._v("/data/athens/gitconfig/ssh-keys")]),s._v("，这里边存放着连接本地Gitlab的关键信息，大概如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /data/athens/gitconfig/ssh-keys/\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nconfig  id_rsa  id_rsa.pub  known_hosts\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" config\nHost gitlab.test.com\nHostname gitlab.test.com\nStrictHostKeyChecking no\nIdentityFile /root/.ssh/id_rsa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("其余三项内容都是一个常规密钥对的内容，这里的秘钥是在Gitlab当中创建的"),a("code",[s._v("deploy key")]),s._v("，我们的代理就是通过这个key来访问Gitlab项目的。")]),s._v(" "),a("p",[s._v("当本地的代理跑起来之后，同样需要配置一个域名用于访问：")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("cat")]),s._v(" athens.test.com.conf\n\nserver")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl http2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" 10.3.0.41 athens.test.com")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v("     /etc/nginx/secure/test.cer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v(" /etc/nginx/secure/test.key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_session_timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5m")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_ciphers")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_protocols")]),s._v(" TLSv1 TLSv1.1 TLSv1.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_prefer_server_ciphers")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v(" /data/log/athens_access.log json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_log")]),s._v(" /data/log/athens_error.log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://127.0.0.1:3000/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("配置完毕之后，就能投入使用了，现在直接将这个对外的地址，作为一个代理配置到nexus中。")]),s._v(" "),a("ul",[a("li",[s._v("Name: proxy-go-athens")]),s._v(" "),a("li",[s._v("Proxy\n"),a("ul",[a("li",[s._v("Remote Storage: 远程仓库地址，这里填写: "),a("a",{attrs:{href:"https://athens.test.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://athens.test.com"),a("OutboundLink")],1)])])]),s._v(" "),a("li",[s._v("Storage: go-hub。")])]),s._v(" "),a("p",[s._v("其他的均是默认。")]),s._v(" "),a("p",[s._v("整体配置截图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8616aef8e781957b.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_6-创建group类型的go仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-创建group类型的go仓库"}},[s._v("#")]),s._v(" 6，创建group类型的go仓库")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Name")]),s._v("：group-go")]),s._v(" "),a("li",[a("code",[s._v("Storage")]),s._v("：选择专用的blob存储go-hub。")]),s._v(" "),a("li",[a("code",[s._v("group")]),s._v(" : 将左边可选的4个仓库，添加到右边的members下。")])]),s._v(" "),a("p",[s._v("整体配置截图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/fe22d05d3cd3e843.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("注意如上三个代理的上下顺序，一定是最好用的越靠上，所有的group类型的代理都遵循这个规律。")]),s._v(" "),a("h2",{attrs:{id:"_7-简单验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-简单验证"}},[s._v("#")]),s._v(" 7，简单验证")]),s._v(" "),a("p",[s._v("没有使用私服之前，里边是空空如也。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ae49253d6385215b.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("通过设置GOPROXY将代理指向私服地址，然后进行项目的编译，可以看到对应的依赖的包已经缓存到私服当中了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a0e4ac1850854c11.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_8-使用私服"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-使用私服"}},[s._v("#")]),s._v(" 8，使用私服")]),s._v(" "),a("p",[s._v("私服配置完毕之后，日常使用当中还会有各种各样的情况，因此单独写了一篇文章来介绍一些使用上的经验。")])])}),[],!1,null,null,null);a.default=r.exports}}]);