(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{506:function(a,e,t){"use strict";t.r(e);var s=t(0),n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("有时候一些机器在前期规划的时候，磁盘并没有合理规划，可能根分区分配了很小的空间，或者某个当前业务正在占用的分区很小，服务还并不太允许停机调整，而且磁盘前期也没有做成lvm可扩容的格式。")]),a._v(" "),e("p",[a._v("这个时候，使用如下步骤，可以非常快捷方便地将当前目录磁盘压力释放掉。")]),a._v(" "),e("p",[e("a",{attrs:{href:"http://t.eryajf.net/imgs/2021/09/31a4e0cc9827ce7c.jpg",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/31a4e0cc9827ce7c.jpg",alt:"img"}}),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("比如我现在在根目录下存了一些代码编译的缓存，这个缓存日益壮大，直到现在快要逼破根分区的整个磁盘，而同时本机还有一个分区，这个分区有相当大的空闲，可用如下方式操作。")]),a._v(" "),e("p",[a._v("比如我发布的中心机上有很多依赖包的缓存，这个包又不便于直接删除，就可以通过下方的操作解决。")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /data/build/cache/yarn/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rsync")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-avl")]),a._v(" /home/www/.cache/yarn/ /data/build/cache/yarn/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" /home/www/.cache/yarn/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-snf")]),a._v(" /data/build/cache/yarn /home/www/.cache/yarn\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("这个时候，只要手快，趁程序不注意，是完全可以无缝将数据切走的！！")])])}),[],!1,null,null,null);e.default=n.exports}}]);