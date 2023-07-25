(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{644:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"注意前置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意前置"}},[t._v("#")]),t._v(" 注意前置")]),t._v(" "),a("p",[t._v("注意，本文讲解的是针对我们原来所用的nexus2.14.5版本的升级配置流程，如果您的老私服版本并不是这个，那么请先参考这里："),a("a",{attrs:{href:"https://help.sonatype.com/repomanager3/installation-and-upgrades/upgrading-from-nexus-repository-manager-2/upgrade-compatibility---repository-manager-2-to-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("升级兼容性 – Repository Manager 2到3"),a("OutboundLink")],1),t._v("。选定对应可升级版本之后，再阅读本文获取经验。")]),t._v(" "),a("p",[t._v("另外，虽然本文介绍了两种可行的方案，但是，我仍旧推荐使用HTTP下载的方式进行升级，至于原因是什么，请往下看就知道了。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("那么书接上回。")]),t._v(" "),a("p",[t._v("可能大家还记得上篇最后发生了什么，就是"),a("code",[t._v("com.third:google.guava:jar:14.0.1")]),t._v("这个包下载失败，从而导致项目编译终止。我们也都知道，解决的办法就是手动下载对应的包，然后传到私服上去即可。")]),t._v(" "),a("p",[t._v("但是，总觉得很麻烦，因为在公司几年的项目积累下，可能会有不止1个，十个，甚至百个这样下载不下来的包。为了针对这个问题，我想过如下几个办法：")]),t._v(" "),a("h2",{attrs:{id:"_1-两种失败的尝试。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-两种失败的尝试。"}},[t._v("#")]),t._v(" 1，两种失败的尝试。")]),t._v(" "),a("h3",{attrs:{id:"_1-给服务配代理。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-给服务配代理。"}},[t._v("#")]),t._v(" 1，给服务配代理。")]),t._v(" "),a("p",[t._v("这种思路大概就是你不能下载某些包，无非就是这资源需要翻墙，那就让服务能上外网呗。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@nexus local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$curl")]),t._v(" cip.cc\nIP    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("47.91")]),t._v(".208.248\n地址    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" 中国  香港  阿里云\n运营商    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22.396428")]),t._v("\n \n数据二    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" 香港 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 阿里云\n \n数据三    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" 中国香港香港 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 阿里云\n \nURL    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" http://www.cip.cc/47.91.208.248\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("然后编译测试拉取，发现仍旧不行。")]),t._v(" "),a("h3",{attrs:{id:"_2-直接迁移。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-直接迁移。"}},[t._v("#")]),t._v(" 2，直接迁移。")]),t._v(" "),a("p",[t._v("网上有不少方案是讲直接更改nexus里边的配置，然后让新服加载老的数据的，但这种不优雅的方式，经过我的测试之后，发现可行性并不是很大，尤其是在nexus2.x到3.x之间的升级之上。故而不推荐这种方式。")]),t._v(" "),a("h2",{attrs:{id:"_2-成功方式1-代理旧私服。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-成功方式1-代理旧私服。"}},[t._v("#")]),t._v(" 2，成功方式1–代理旧私服。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("这个思路应该是最妙的。我想，既然我们可以添加一个远程的proxy，为什么不能把老的私服作为一个远程proxy呢，虽然这种方案需要新老两个私服同时运作，但作为一种新老交接的情况，似乎也可以容忍。")])]),t._v(" "),a("p",[t._v("说干就干，我又添加了一个proxy，将其中的地址定义为老私服的地址，配置如下：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Proxy")]),t._v("：改成老私服地址。")]),t._v(" "),a("li",[a("code",[t._v("Authentication")]),t._v("：添加用户名密码。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/33a6800a31ce7e29.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("这里配置完并保存之后，我们再去到group里边添加上：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8ed038231e604ecf.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("这里上下有一个优先级，所以我们给它调整为第一位：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/705692e4a969c12d.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("保存之后，回到项目中再次构建：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/32de2c9623e48be5.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("惊然发现，项目就此顺畅的构建成功了。去到私服里边看看：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8f7b7fac26436f8f.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("看到了，是他，老泪纵横的，看到了这种奇妙的思路也成功了。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("不过，这种方法的问题在于，我这里只测试了一个项目的构建，也就是仅仅将此项目对应的依赖从老项目当中拉了过来，如果此时还只能让两个私服共存，但你不知道什么时候才真正的完全拉完，因此有点尴尬。")])]),t._v(" "),a("h2",{attrs:{id:"_3-成功方式2-http下载。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-成功方式2-http下载。"}},[t._v("#")]),t._v(" 3，成功方式2–HTTP下载。")]),t._v(" "),a("p",[t._v("于是，这就引出了今天的第四种方案，那就是nexus内置的一种迁移方式："),a("a",{attrs:{href:"https://help.sonatype.com/repomanager3/upgrading/data-transfer-methods#DataTransferMethods-HTTPDownloading",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP下载"),a("OutboundLink")],1),t._v("。也就是，只需要对着nexus点点点，即可实现一劳永逸的搬迁，这个方案，着实令人欣喜。")]),t._v(" "),a("p",[t._v("接下来，不废话，直接进入正题。")]),t._v(" "),a("h3",{attrs:{id:"_1-老私服配置upgrade-agent。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-老私服配置upgrade-agent。"}},[t._v("#")]),t._v(" 1，老私服配置Upgrade:Agent。")]),t._v(" "),a("p",[t._v("如果想实现迁移，首先要配置 Upgrade:Agent ，这个配置比较简单，直接通过截图来展示：")]),t._v(" "),a("ul",[a("li",[t._v("1，点击Capabilities。")]),t._v(" "),a("li",[t._v("2，New一个新的。")]),t._v(" "),a("li",[t._v("3，选择Upgrade: Agent。")]),t._v(" "),a("li",[t._v("4，创建一个Access Token，用于远程连接。这里设为123456。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8b55b50047174538.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("创建之后查看一下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ce83c97c2aab9fd2.jpg",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"_2-新私服配置连接。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-新私服配置连接。"}},[t._v("#")]),t._v(" 2，新私服配置连接。")]),t._v(" "),a("p",[t._v("新服安装以及登陆，这且按下不表，可以参考前边的文章，这里直接进入配置环节。")]),t._v(" "),a("p",[t._v("1，点击Capabilities，New一个新的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/15bdd3a501faca95.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("2，选择Upgrade。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9c316f4ce81a1498.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("3，创建。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/43198130d88811fb.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("4，配置链接开始升级。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a59f9381ff3cce10.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("5，配置老私服地址。")]),t._v(" "),a("p",[t._v("将老私服地址填入，并将刚刚定义的token写入。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f1d1b4a681695f71.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("就在当我以为一切都是这么愉快欢乐得的时候，问题来了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/96192c61c00d7359.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("说升级时，与版本关系紧密。还给了个建议，说"),a("code",[t._v("2.14.8")]),t._v("版本的好像更容易升级。")]),t._v(" "),a("p",[t._v("ok，既此开始，我陷入了无尽的版本深渊当中，也正是自此开始，我开始关注升级过程中，版本的重要性。")]),t._v(" "),a("p",[t._v("首先我们老私服的版本是"),a("code",[t._v("2.14.5")]),t._v("，这个版本说实话在2.x界是并不低的，而我现在所用的新私服版本是"),a("code",[t._v("3.12.1")]),t._v("的，于是我首先尝试安装了"),a("code",[t._v("3.1.0")]),t._v("的进行升级，发现仍旧会有这样那样的报错。")]),t._v(" "),a("p",[t._v("直到，我在官方文档当中碰到了这么一篇文章："),a("a",{attrs:{href:"https://help.sonatype.com/repomanager3/installation-and-upgrades/upgrading-from-nexus-repository-manager-2/upgrade-compatibility---repository-manager-2-to-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("升级兼容性 – Repository Manager 2到3"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("就是遇到了这篇救命文章之后，这所有的问题，都不是问题了。")]),t._v(" "),a("p",[t._v("在文档当中有这样一个表格：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f8c61079fa2daa49.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("从表格当中，我看到了与公司老私服对应版本"),a("code",[t._v("2.14.5")]),t._v("可升级的"),a("code",[t._v("3.7.1")]),t._v("，也看到了如果想直接跳到3.12.1，则需要先将2.14.5升级为2.14.8，然后才能从2.14.8升级到3.12.1。")]),t._v(" "),a("p",[t._v("反正都是个升级，我最终选择了，在另一台测试机器上安装一个3.7.1版本的私服作为临时中转。")]),t._v(" "),a("p",[t._v("于是，安装，登陆，配置，说话间，就来到最关进的认证阶段：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c802b89dee5517bd.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("此时此刻，看到绿色的success，不得不说，我眼含泪水，终于等到你。")]),t._v(" "),a("p",[t._v("剩下的就好办了，一路next即可。")]),t._v(" "),a("p",[t._v("不过这里稍微可以配置一下。")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("Destination")]),t._v("：选择我们创建的blob：maven-use。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Method")]),t._v("：这里边有三种类型，Hard link(文件系统硬链接)，Filesystem copy（文件系统复制），Download（HTTP下载）。")])])]),t._v(" "),a("p",[t._v("此三种类型区别，可以参考官网介绍："),a("a",{attrs:{href:"https://help.sonatype.com/repomanager3/upgrading/data-transfer-methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据传输方法。"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("此处我们选择默认的，就是我们用的HTTP下载的方式。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c17e49cf1029dd7e.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("识别到了老私服里边的仓库，这里直接全选，吼吼。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2a17d0fe3fe83ba8.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("万事已毕，只等一声令下：Begin。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b5415cc3549a4ebb.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("历史瞬间，剪影留念。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/1cc6a15da5896f41.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("接着，就可以看到迁移前的体检阶段：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/06345509f4d6e0ae.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("检测已经结束，一共有59622项内容，点击继续即可同步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/4b986f63d08b6e95.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("看到这个界面，就是成功了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/406fb64befccc312.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("当同步完成，我们可以在public里边看到这些从老私服同步过来的包。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/49f4088d7fff11ca.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("然后把这个public加入到我们创建的group里边：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/00063e7e989f91c6.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("然后再将上回书中的项目进行构建，此时发现：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/809e2a0711f007e3.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("已经可以构建成功了，说明我们做的迁移工作，是生效了的。")]),t._v(" "),a("p",[t._v("当我看到成功的界面是，我止不住激动心情，去找到同事分享这种成就感以及喜悦！")]),t._v(" "),a("h2",{attrs:{id:"_4-两种成功的方式之总结。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-两种成功的方式之总结。"}},[t._v("#")]),t._v(" 4，两种成功的方式之总结。")]),t._v(" "),a("p",[t._v("上边列举了两种成功的方式，这两种方式的差别还是非常大的，我们来通过一个小小的数据来对比一下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/434b23ed1a95b088.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("看了两个"),a("code",[t._v("sonatype-work")]),t._v("大小的对比，就能清晰了解到，在前边我们所担忧的问题，果不其然的在这里出现了，一个"),a("code",[t._v("8G")]),t._v("多，一个"),a("code",[t._v("800多M")]),t._v("，这两者之间的差距，恐怕就是我们需要让新老私服共存的时间差吧，于是乎，"),a("code",[t._v("最终，我最推荐的方式还是HTTP下载的方式。")])]),t._v(" "),a("p",[t._v("如果你想要使用最新版本的私服，那么可以先通过HTTP下载的方式从2.x升级到3.x，然后再直接将对应的"),a("code",[t._v("sonatype-work")]),t._v("复制到最新版本的私服当中，直接启动即可。")]),t._v(" "),a("h2",{attrs:{id:"_5-研究感言。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-研究感言。"}},[t._v("#")]),t._v(" 5，研究感言。")]),t._v(" "),a("p",[t._v("这是一个没有老师的自学，网上或多或少也有不少教程，有一些教程是帮助你的，有一些教程是坑害你的，这与教程本身无关，而与你遇上这些教程的缘分以及个人的悟性有关，总而言之，只有认真学习，勤思多练，才能在荒漠当中，走踏处一条明路。")]),t._v(" "),a("h2",{attrs:{id:"_6-参考链接。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-参考链接。"}},[t._v("#")]),t._v(" 6，参考链接。")]),t._v(" "),a("ul",[a("li",[t._v("1，https://help.sonatype.com/repomanager3/upgrading/data-transfer-methods#DataTransferMethods-HTTPDownloading")]),t._v(" "),a("li",[t._v("2，"),a("a",{attrs:{href:"https://help.sonatype.com/repomanager3/upgrade-compatibility---repository-manager-2-to-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://help.sonatype.com/repomanager3/upgrade-compatibility—repository-manager-2-to-3"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("3，https://www.ilanni.com/?p=12366")])])])}),[],!1,null,null,null);a.default=r.exports}}]);