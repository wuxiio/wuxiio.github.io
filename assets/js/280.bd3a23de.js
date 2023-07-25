(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{622:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("今天来玩个花的，不过这个花的其实在日常工作中既不被大众所熟知，却又相当重要实用的一个东东。")]),s._v(" "),a("p",[s._v("日常工作中可能会有这样一个需求，比如你需要往十台二十台主机上传输什么东西，或者直接说了吧，你要实现基于某台主机免密码登陆这些主机，有人可能会想到使用批量管理用 ansible 非常合适，请注意，这里说的正是实现免密码登陆的操作，也就是说，这是一个 ansible 之前的操作，或者换句话说，要想应用起来 ansible，那么首先就要把这个需求给满足了才行。")]),s._v(" "),a("p",[s._v("大家在往下看的时候，不妨也先想想，该如何实现这样一个需求。")]),s._v(" "),a("p",[s._v("我这里再描述一下需求:")]),s._v(" "),a("p",[s._v("那就是现在已经配置好主机 A 为 ansible 的 server 端，那么接下来需要配置 A 主机对网段内主机 IP 为 192.168.10.10–50 的主机实现免密码登陆。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/62f493101757bead.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("显而易见，要想免密码登陆，那就是将主机 A 生成的公钥传输到对应的各个主机上去，在我看来，似乎有三种办法。")]),s._v(" "),a("h2",{attrs:{id:"办法-1-传统法。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#办法-1-传统法。"}},[s._v("#")]),s._v(" 办法 1，传统法。")]),s._v(" "),a("p",[s._v("使用传统法，我们可以一台一台来进行"),a("code",[s._v("ssh-copy-id root@192.168.10.10--50")]),s._v("秘钥的传输，其中每执行一次都要输入一下对应主机的密码。这种方式耗时费力，自然不是今天的主角，也不是今天想要说的，因此就按下不表。")]),s._v(" "),a("h2",{attrs:{id:"办法-2-使用跳过密码法。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#办法-2-使用跳过密码法。"}},[s._v("#")]),s._v(" 办法 2，使用跳过密码法。")]),s._v(" "),a("p",[s._v("这就引出了今天的第一个神器："),a("code",[s._v("sshpass")]),s._v("。")]),s._v(" "),a("p",[s._v("事实上这款工具的操作应用也蛮广的，可在各大需要输入密码才能完成的事儿中。")]),s._v(" "),a("p",[s._v("关于他的用法，大概有如下几种（"),a("a",{attrs:{href:"https://www.cnblogs.com/vman/p/5530375.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考地址"),a("OutboundLink")],1),s._v("）：")]),s._v(" "),a("p",[a("code",[s._v("使用-p参数指定登录密码")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 免密码登录")]),s._v("\n$ sshpass "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" username@host\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程执行命令")]),s._v("\n$ sshpass "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" username@host "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("cmd"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过scp上传文件")]),s._v("\n$ sshpass "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" local_file root@host:remote_file \n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过scp下载文件")]),s._v("\n$ sshpass "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" root@host:remote_file local_file\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[a("strong",[s._v("忽略 RSA Key 检查信息")])]),s._v(" "),a("p",[s._v("第一次认证时，一般会有"),a("code",[s._v("RSA key")]),s._v("检查的提示：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("The authenticity of "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" ’10.x.x.x "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(".x.x.x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' can'")]),s._v("t be established.\nRSA key fingerprint is a4:eb:8c:7d:2a:ef:d6:1c:a3:0c:e8:e5:00:d2:eb:60.\nAre you sure you want to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("continue")]),s._v(" connecting "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("yes/no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("?\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("可以使用"),a("code",[s._v("-o StrictHostKeychecking=no")]),s._v("选项来忽略 key 检查信息。")]),s._v(" "),a("p",[s._v("如：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" sshpass "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SSH_PASSWD")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("StrictHostKeyChecking")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("OK，了解完这款神器之后，我们回到今天的主题。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/30222e30c20e6618.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("根据如上功能，大概可以用如下脚本来实现需求：")]),s._v(" "),a("p",[s._v("声明：本文当中介绍的两种方案，都是基于一个前提下才能够成立的，那就是所有的这些要操作的主机登陆密码都必须保持一致（如：123456），如果您觉得非要跟我拿这个来抬杠，那我只好 “恕不奉陪”！")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#author:eryajf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#time:2018-8")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("51")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    sshpass "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v(" ssh-copy-id  root@192.168.10."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("StrictHostKeyChecking")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("通过上边的脚本方式，则自动的就实现了主机 A 对远程各个主机的免密码功能。")]),s._v(" "),a("p",[s._v("注意：主机 A 要安装 sshpass 工具："),a("code",[s._v("yum -y install sshpass")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"办法-3-使用密码输入法。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#办法-3-使用密码输入法。"}},[s._v("#")]),s._v(" 办法 3，使用密码输入法。")]),s._v(" "),a("p",[s._v("密码输入法将引出今天的第二个神器："),a("code",[s._v("expect")]),s._v("。")]),s._v(" "),a("p",[s._v("事实上这个东东是一个非常深刻的，有厚度的，有温情的工具，以后将会有文章专门来介绍这个神器，今天只针对今天的需求来进行讲解。")]),s._v(" "),a("p",[s._v("于是乎，我们同样可以直接通过脚本来满足需求：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/expect -f")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#author:eryajf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#time:2018-8")]),s._v("\nforeach "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.2\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.3\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\nspawn ssh-copy-id root@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ip")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes/no"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("send "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password:"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("send "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("使用方式如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("我不知道别人在看到这些神器的时候是如何运用的，也不知道别人在遇到像今天这样一个需求的时候是如何来考虑以及实现的，总之通过自己了解过的学过的东西，来进行灵活的运用，所谓学以致用，触类旁通，真心是一件非常快乐的事儿！")]),s._v(" "),a("p",[s._v("当然，如果您还有更好的办法来满足这一需求，欢迎在下方留言区留下您的方案一起探讨哦！！！")])])}),[],!1,null,null,null);a.default=e.exports}}]);