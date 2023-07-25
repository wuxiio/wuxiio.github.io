(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{610:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-前言少叙。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言少叙。"}},[s._v("#")]),s._v(" 1，前言少叙。")]),s._v(" "),a("p",[s._v("公司里边采用VMware虚拟化的方案对服务器进行管理。一般常用的方式都是先创建一台虚拟机，然后对其初始配置进行一些规划以及预定义，然后将之转换为模板，以后创建主机的时候，直接从模板进行创建即可，方便而又高效。")]),s._v(" "),a("p",[s._v("但是有时候对于磁盘的使用以及管理，可能会有一些其他的一些情况出现，基本上无外乎，用着用着发现磁盘不够用了，那么可以直接添加新硬盘进行扩容，这种扩容的方案又分出来两种，这两种我也都已经在博客里分享过了。")]),s._v(" "),a("p",[s._v("1，"),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/1130.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("服务器存储不够了之在原逻辑卷上扩容的操作"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("2，"),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/1117.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("服务器存储不够了之直接挂载一块儿新磁盘的操作"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_2-问题分析。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-问题分析。"}},[s._v("#")]),s._v(" 2，问题分析。")]),s._v(" "),a("p",[s._v("今天想要说的是另外一种情况，那就是当我们初始定义在模板里边的磁盘是50G，通过模板创建主机的时候感觉不够用，但是又不是通过添加一块新硬盘（"),a("code",[s._v("sdb")]),s._v("）的方式进行增加的，而是直接将模板定义的50G（在主机中映射为"),a("code",[s._v("sda")]),s._v("）给改成了200G，然后将主机开机了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/699f11ca1db44a5a.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("开机之后开始使用，会发现磁盘仍旧是"),a("code",[s._v("50G")]),s._v("的大小。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/263e520941c268b0.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("如果使用"),a("code",[s._v("fdisk -l")]),s._v("进行查看，会发现磁盘sda还剩下150G没有分配。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/631dedcc8c734c39.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("这种情况的话，主机应该是按原有的分配策略，在sda（200G）的存储里划出50G进行挂载，从而遵从最开始所制定好了的存储分配策略。")]),s._v(" "),a("p",[s._v("好在，我们看到他默认是做成了逻辑卷的方式，那么，我们这个时候就可以直接对磁盘（sda）进行重新分区，格式化，增加到挂载的根分区当中。")]),s._v(" "),a("h2",{attrs:{id:"_3-分区。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-分区。"}},[s._v("#")]),s._v(" 3，分区。")]),s._v(" "),a("p",[s._v("接下来是一波老生常谈了的操作了。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" /dev/sda    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入磁盘分区操作")]),s._v("\np                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新增一个分区")]),s._v("\nn                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#分区类型选择为主分区")]),s._v("\n回车                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可以填入3，也可以直接按其默认的直接回车")]),s._v("\n回车                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认（起始扇区）")]),s._v("\n回车                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认（结束扇区）这里因为只剩下100G了，所以就全部分配了")]),s._v("\np                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#再次查看分区划分之后的情况")]),s._v("\nt                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改分区类型")]),s._v("\n回车                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#也就是默认的刚刚创建分区标识3")]),s._v("\nL                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#列出所有分区类型")]),s._v("\n8e                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#填入8e，将刚创建的分区3修改为lvm")]),s._v("\nw                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#保存并退出")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("保存的时候会看到一个警告信息：")]),s._v(" "),a("blockquote",[a("p",[s._v("WARNING: Re-reading the partition table failed with error 16: Device or resource busy.\nThe kernel still uses the old table. The new table will be used at\nthe next reboot or after you run partprobe(8) or kpartx(8)\nSyncing disks.")])]),s._v(" "),a("p",[s._v("此时用ls查看sda3，发现还没有出现。使用partprobe命令进行加载。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("partprobe\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后就能看到sda3被读到了，如果还没有，情况允许的话，可以重启主机进行加载。")]),s._v(" "),a("h2",{attrs:{id:"_4-格式化。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-格式化。"}},[s._v("#")]),s._v(" 4，格式化。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mkfs.ext3 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /dev/sda3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("格式化之后就可以进行扩容的操作了。")]),s._v(" "),a("h2",{attrs:{id:"_5-扩容。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-扩容。"}},[s._v("#")]),s._v(" 5，扩容。")]),s._v(" "),a("p",[s._v("操作之前首先查看一下原来的情况。")]),s._v(" "),a("p",[s._v("直接添加。")]),s._v(" "),a("p",[s._v("查看一下。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eryajf ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pvscan")]),s._v("\n  PV /dev/sda2   VG centos          lvm2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.66")]),s._v(" GiB / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    free"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  Total: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.66")]),s._v(" GiB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" use: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.66")]),s._v(" GiB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" no VG: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eryajf ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vgscan")]),s._v("\n  Reading volume "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groups")]),s._v(" from cache.\n  Found volume group "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"centos"')]),s._v(" using metadata "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" lvm2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eryajf ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$lvscan")]),s._v("\n  ACTIVE            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/dev/centos/root'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.66")]),s._v(" GiB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" inherit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("扩容操作。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pvcreate /dev/sda3        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#把新加的分区创建为物理卷。")]),s._v("\nvgextend centos /dev/sda3        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将刚创建的物理卷添加到卷组centos中。（注意此处的centos是通过刚才vgscan得到的。）")]),s._v("\npvscan                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#再次查看物理卷情况。")]),s._v("\nvgscan                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#再次查看卷组情况。")]),s._v("\nvgdisplay "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#详细查看卷组。")]),s._v("\nlvextend "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" +38399 /dev/centos/root    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#直接在原有逻辑卷上进行扩容。38399是通过刚才详细查看卷组得到的free PE数。")]),s._v("\nxfs_growfs /dev/centos/root    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通过此命令让操作系统识别刚刚扩容的分区。这个命令适用在centos 7系统中。如果是6的，则用resize2fs -f /dev/centos/root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/344cbb8cfffa678e.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("ok。这样就实现了最开始的一种意外而导致的问题的解决。")])])}),[],!1,null,null,null);a.default=n.exports}}]);