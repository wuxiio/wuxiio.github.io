(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{550:function(e,_,v){"use strict";v.r(_);var t=v(0),r=Object(t.a)({},(function(){var e=this,_=e._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("关于部署，前边已经有文章，可参考前边快速部署的文档。")]),e._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),_("ul",[_("li",[e._v("openLDAP是个好东西。")]),e._v(" "),_("li",[e._v("openLDAP不是一个很容易学习透彻上手使用的东西。")]),e._v(" "),_("li",[e._v("openLDAP有星罗棋布的概念，你很容易迷失其中，找不到一条适合自己的出路。")]),e._v(" "),_("li",[e._v("openLDAP没有标准答案，在各种概念之下，有各种使用方法，追求一个标准答案，可能往往会迷失自己。")])]),e._v(" "),_("p",[e._v("本文将着力于将ldap中概念讲清道明，希望你看了就能懂，不再困厄烦恼。")]),e._v(" "),_("p",[e._v("但注意，这篇文章可能只是一个字典式的整理供你查阅，渴望通过这一篇文章直接把ldap入门，那就有点小瞧ldap的入门难度了，也就不会有那篇大名鼎鼎的："),_("a",{attrs:{href:"https://segmentfault.com/a/1190000014683418",target:"_blank",rel:"noopener noreferrer"}},[e._v("我花了一个五一终于搞懂了OpenLDAP"),_("OutboundLink")],1),e._v("（但事实上你现在看了这篇文章，仍旧无法搞懂OpenLDAP，看文章底下的评论区就是例证）。")]),e._v(" "),_("h2",{attrs:{id:"介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),_("p",[e._v("LDAP是轻量目录访问协议，英文全称是Lightweight Directory Access Protocol，一般都简称为LDAP。")]),e._v(" "),_("p",[e._v("OpenLDAP 默认以 Berkeley DB 作为后端数据库，Berkeley DB 数据库主要以散列的数据类型进行数据存储，如以键值对的方式进行存储。Berkeley DB 是一类特殊的数据库，主要作用于搜索、浏览、更新查询操作，一般用于一次写入数据、多次查询和搜索有很好的效果。Berkeley DB 数据库时面向查询进行优化，面向读取进行优化的数据库。Berkeley DB 不支持事务性数据库（MySQL、MariDB、Oracle 等）所支持的高并发的吞吐量以及复杂的事务操作。")]),e._v(" "),_("p",[e._v("通常我们在ldap中维护的数据大概会像如下目录树：")]),e._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/07/fac18341872b59e7.png",alt:""}})]),e._v(" "),_("p",[e._v("基于这张图，我们来展开相关的概念介绍。")]),e._v(" "),_("h2",{attrs:{id:"目录树概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目录树概念"}},[e._v("#")]),e._v(" 目录树概念")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("目录树")])]),e._v(" "),_("p",[e._v("在一个目录服务系统中，整个目录信息集可以表示为一个目录信息树，树中的每个节点是一个条目(Entry)。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("条目（Entry）")])]),e._v(" "),_("p",[e._v("条目，也叫记录项，是LDAP中最基本的颗粒，就像字典中的词条，或者是数据库中的记录。通常对LDAP的添加、删除、更改、检索都是以条目为基本对象的。")]),e._v(" "),_("blockquote",[_("p",[e._v("LDAP目录的条目（entry）由属性（attribute）的一个聚集组成，并由一个唯一性的名字引用，即"),_("strong",[e._v("专有名称")]),e._v("（"),_("strong",[e._v("distinguished name")]),e._v('，DN）。例如，DN能取这样的值："'),_("code",[e._v("cn=group,dc=eryajf,dc=net")]),e._v('"。')])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("对象类（ObjectClass）")])]),e._v(" "),_("p",[e._v("对象类是属性的集合，LDAP预想了很多人员组织机构中常见的对象，并将其封装成对象类。比如人员（"),_("code",[e._v("person")]),e._v("）含有姓（"),_("code",[e._v("sn")]),e._v("）、名（"),_("code",[e._v("cn")]),e._v("）、电话("),_("code",[e._v("telephoneNumber")]),e._v(")、密码("),_("code",[e._v("userPassword")]),e._v(")等属性，单位职工("),_("code",[e._v("organizationalPerson")]),e._v(")是人员("),_("code",[e._v("person")]),e._v(")的继承类，除了上述属性之外还含有职务（"),_("code",[e._v("title")]),e._v("）、邮政编码（"),_("code",[e._v("postalCode")]),e._v("）、通信地址("),_("code",[e._v("postalAddress")]),e._v(")等属性。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("属性 (Attribute)")])]),e._v(" "),_("p",[e._v("每个条目都可以有很多属性（Attribute），比如常见的人都有姓名、地址、电话等属性。每个属性都有名称及对应的值，属性值可以有单个、多个。")])])]),e._v(" "),_("h2",{attrs:{id:"属性详解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性详解"}},[e._v("#")]),e._v(" 属性详解")]),e._v(" "),_("p",[e._v("要注意，如下标识的字段，即ldap中可查询交互使用的字段，其中原有的大小写方式，需与之一致。")]),e._v(" "),_("h3",{attrs:{id:"基础字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基础字段"}},[e._v("#")]),e._v(" 基础字段")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("dc (Domain Component)")])]),e._v(" "),_("p",[e._v("域名的部分，其格式是将完整的域名分成几部分，如域名为"),_("code",[e._v("eryajf.net")]),e._v("变成"),_("code",[e._v("dc=eryajf,dc=net")]),e._v("。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("ou（Organization Unit）")])]),e._v(" "),_("p",[e._v("组织单位，组织单位可以包含其他各种对象(包括其他组织单元)。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("cn （Common Name）")])]),e._v(" "),_("p",[e._v("常用名称，可用作分组的名字，或者用户的全名。"),_("a",{attrs:{href:"https://datatracker.ietf.org/doc/html/rfc4519#section-2.3",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),_("OutboundLink")],1)])]),e._v(" "),_("li",[_("p",[_("code",[e._v("dn （Distinguished Name）")])]),e._v(" "),_("p",[e._v("每一个条目都有一个唯一的标识名，dn在ldap中全局唯一，相当于该条目的唯一ID，如上边示例中的："),_("code",[e._v("cn=group,dc=eryajf,dc=net")]),e._v("就是该条目的dn。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("rdn （Relative dn）")])]),e._v(" "),_("p",[e._v("一般指dn逗号最左边的部分，如"),_("code",[e._v("cn=group,dc=eryajf,dc=net")]),e._v("的rdn就是 "),_("code",[e._v("cn=group")]),e._v("。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("Base DN")])]),e._v(" "),_("p",[e._v("LDAP目录树的最顶部就是根，比如上边示例中的base dn为 "),_("code",[e._v("dc=eryajf,dc=net")]),e._v("。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("description")])]),e._v(" "),_("p",[e._v("在不同类别中，对应不同类别的说明信息，比如用户的说明信息，分组的说明信息。")])])]),e._v(" "),_("h3",{attrs:{id:"用户字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户字段"}},[e._v("#")]),e._v(" 用户字段")]),e._v(" "),_("p",[e._v("用户字段依然会用到基础字段，并不代表这部分内容与上边的内容是隔离的。")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("objectClass")]),e._v("："),_("code",[e._v("top")]),e._v("、"),_("code",[e._v("person")]),e._v("、"),_("code",[e._v("organizationalPerson")]),e._v("、"),_("code",[e._v("inetOrgPerson")]),e._v("、"),_("code",[e._v("posixAccount")])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("uid (User Id)")])]),e._v(" "),_("p",[e._v("用户的用户名，通常为中文拼音，或者用邮箱地址的用户名部分。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("sn （Surname）")])]),e._v(" "),_("p",[e._v("用户的姓氏，对于中文环境下，可以直接用姓名填充。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("givenName")])]),e._v(" "),_("p",[e._v("用户的名字，不包含姓，对于中文语境下，可灵活运用该字段。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("displayName")])]),e._v(" "),_("p",[e._v("用户的显示名字，全名。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("mail")])]),e._v(" "),_("p",[e._v("用户的邮箱。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("title")])]),e._v(" "),_("p",[e._v("用户的职位。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("employeeNumber")])]),e._v(" "),_("p",[e._v("用户的员工ID，也可以理解为工号。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("employeeType")])]),e._v(" "),_("p",[e._v("用户在单位中的角色。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("departmentNumber")])]),e._v(" "),_("p",[e._v("用户所在部门的名称，通常为部门名，而非部门号。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("businessCategory")])]),e._v(" "),_("p",[e._v("描述业务的种类，在中文语境中可灵活定义。"),_("a",{attrs:{href:"https://datatracker.ietf.org/doc/html/rfc4519#section-2.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),_("OutboundLink")],1)])]),e._v(" "),_("li",[_("p",[_("code",[e._v("userPassword")])]),e._v(" "),_("p",[e._v("用户密码。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("jpegPhoto")])]),e._v(" "),_("p",[e._v("用户的个人资料照片。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("photo")])]),e._v(" "),_("p",[e._v("用户的照片，如上这两个字段都可以用。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("postalAddress")])]),e._v(" "),_("p",[e._v("用户的邮政地址，也可以直接认为是用户地址。"),_("a",{attrs:{href:"https://datatracker.ietf.org/doc/html/rfc4519#section-2.23",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),_("OutboundLink")],1)])]),e._v(" "),_("li",[_("p",[_("code",[e._v("entryUuid")])]),e._v(" "),_("p",[e._v("此用户专属的固定通用标识符，类似union_id，通常用不到。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("objectSid")])]),e._v(" "),_("p",[e._v("此用户专属的通用标识符，与 Windows 安全标识符兼容。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("uidNumber")])]),e._v(" "),_("p",[e._v("用户的 POSIX UID 号码。如果为用户设置了 POSIX ID，这里则会显示此号码。否则，这里会显示专属的固定标识符。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("gidNumber")])]),e._v(" "),_("p",[e._v("用户主要群组的 POSIX GID 号码。如果为用户设置了 POSIX GID，这里则会显示此号码。否则，则会显示与用户的 UID 相同的号码。")]),e._v(" "),_("blockquote",[_("p",[_("strong",[e._v("注意")]),e._v("：您无法按 "),_("em",[e._v("uidNumber")]),e._v(" 或 "),_("em",[e._v("gidNumber")]),e._v(" 搜索用户，除非管理员使用 "),_("a",{attrs:{href:"https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/update",target:"_blank",rel:"noopener noreferrer"}},[e._v("Admin SDK API"),_("OutboundLink")],1),e._v("设置了用户的 posixAccounts 属性。")])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("homeDirectory")])]),e._v(" "),_("p",[e._v("用户的 POSIX 主目录。默认为"),_("code",[e._v("/home/<用户名>")]),e._v("。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("loginShell")])]),e._v(" "),_("p",[e._v("用户的 POSIX 登录 shell。默认为"),_("code",[e._v("/bin/bash")]),e._v("。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("carLicense")])]),e._v(" "),_("p",[e._v("车牌，通常用不上这个字段。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("homePhone")])]),e._v(" "),_("p",[e._v("家庭固定电话，通常用不上这个字段。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("homePostalAddress")])]),e._v(" "),_("p",[e._v("邮编，通常用不上这个字段。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("roomNumber")])]),e._v(" "),_("p",[e._v("房间号码，通常用不上这个字段。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("secretary")])]),e._v(" "),_("p",[e._v("秘书，通常用不上这个字段。")])])]),e._v(" "),_("h3",{attrs:{id:"分组字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分组字段"}},[e._v("#")]),e._v(" 分组字段")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("objectClass")]),e._v("："),_("code",[e._v("top")]),e._v("、"),_("code",[e._v("groupOfNames")]),e._v("、"),_("code",[e._v("posixGroup")])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("displayName")])]),e._v(" "),_("p",[e._v("用户可理解的群组显示名称。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("description")])]),e._v(" "),_("p",[e._v("用户可理解的群组详细说明。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("gidNumber")])]),e._v(" "),_("p",[e._v("群组的 POSIX GID 号码。这是固定的专属 ID，但无法通过此 ID 高效地查找群组。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("entryUuid")])]),e._v(" "),_("p",[e._v("此群组专属的固定通用标识符。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("member")])]),e._v(" "),_("p",[e._v("此群组中成员的完全符合条件的名称列表。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("memberUid")])]),e._v(" "),_("p",[e._v("此群组中成员的用户名列表。")])])]),e._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://support.google.com/cloudidentity/answer/9188164?hl=zh-Hans",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://support.google.com/cloudidentity/answer/9188164?hl=zh-Hans"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://datatracker.ietf.org/doc/html/rfc4519",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://datatracker.ietf.org/doc/html/rfc4519"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://xujiyou.work/DevOps/LDAP/LDAP%E5%85%A5%E9%97%A8.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://xujiyou.work/DevOps/LDAP/LDAP%E5%85%A5%E9%97%A8.html"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=r.exports}}]);