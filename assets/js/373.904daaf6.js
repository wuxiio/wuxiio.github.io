(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{714:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[s._v("#")]),s._v(" 1，前言")]),s._v(" "),t("p",[s._v("有时候一些开源工具使用都是比较浅的，并没有深入研究过相关配置参数的含义，以至于有时候出了问题也不知道该如何解决，本文来整理一下filebeat再配置日志采集项时的一些参数及含义。")]),s._v(" "),t("p",[s._v("本文讲解的配置文件时基于"),t("code",[s._v("filebeat-5.4.0")]),s._v("进行的。")]),s._v(" "),t("h2",{attrs:{id:"_2-详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-详解"}},[s._v("#")]),s._v(" 2，详解")]),s._v(" "),t("h3",{attrs:{id:"_1-非标日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-非标日志"}},[s._v("#")]),s._v(" 1，非标日志")]),s._v(" "),t("p",[s._v("这里先举一个不太常规的日志采集的例子：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("filebeat.prospectors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /data/log/uc"),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("*.log")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("document_type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" uc\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("multiline.pattern")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^\\[[0-9]{4}-[0-9]{2}-[0-9]{2}'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("multiline.negate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("multiline.match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" after\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scan_frequency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("document_type\n来自prospector配置的document_type设置已被删除，因为_type概念正在从Elasticsearch中移除。 而不是document_type设置，可以使用自定义字段。此处作为一个topic的标识，用于上层配置的抓取，但是注意这种方式可能会有坑，在下边会说明。")])]),s._v(" "),t("li",[t("p",[s._v("multiline")]),s._v(" "),t("p",[s._v("控制Filebeat如何处理跨越多行的日志消息的选项。 多行消息在包含Java堆栈跟踪的文件中很常见。以下示例显示如何配置Filebeat来处理消息的第一行以括号（[）开头的多行消息。")]),s._v(" "),t("ul",[t("li",[s._v("pattern\n指定要匹配的正则表达式模式")]),s._v(" "),t("li",[s._v("negate\n定义模式是否被否定。 默认值是false。")]),s._v(" "),t("li",[s._v("match\n指定Filebeat如何将匹配行组合到事件中。 该设置是after或before。 这些设置的行为取决于为negate指定的内容")])])]),s._v(" "),t("li",[t("p",[s._v("scan_frequency\nprospector在指定采集的路径中检查新文件的频率。 例如，如果指定一个像/var/log/*的glob，则将使用scan_frequency指定的频率扫描目录中的文件。 指定1s以尽可能频繁地扫描目录。而不需要Filebeat过于频繁地扫描，我们不建议将此值设置为<1秒。默认设置是10秒。\n如果需要近实时发送日志行，请不要使用非常低的scan_frequency，而是调整close_inactive，以便文件处理程序保持打开状态并持续轮询文件。")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a8530db9a1aeead1.jpg",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"_2-标准日志。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-标准日志。"}},[s._v("#")]),s._v(" 2，标准日志。")]),s._v(" "),t("p",[s._v("这里再引入常规json化之后的NGINX日志采集配置来进行讲解。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("filebeat.prospectors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /data/log/tmp.log\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("document_type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx_access\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fields")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("filebeatservice")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx_access\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exclude_lines")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^127.0.0.1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("json.keys_under_root")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("json.overwrite_keys")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("json.message_key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" message\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ignore_older")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 24h\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scan_frequency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10s\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("clean_inactive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 25h\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("close_inactive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 24h\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("clean_removed")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("close_removed")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("close_renamed")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tail_files")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("fields\n一个自定义的字段，可以任意添加自己需要的字段进行传参。")])]),s._v(" "),t("li",[t("p",[s._v("exclude_lines\n表示符合规则的日志行将会被排除掉，此处支持正则，如果有多个条件可用英文逗号分割。")])]),s._v(" "),t("li",[t("p",[s._v("json")]),s._v(" "),t("p",[s._v("这些选项使得Filebeat能够解码构造为JSON消息的日志。 Filebeat逐行处理日志，所以JSON解码只在每行有一个JSON对象时才起作用。")]),s._v(" "),t("ul",[t("li",[s._v("keys_under_root\n默认情况下，解码后的JSON放在输出文档中的“json”键下。 如果启用此设置，则会将键复制到输出文档的顶层。 默认值是false。")]),s._v(" "),t("li",[s._v("overwrite_keys\n如果启用了keys_under_root和此设置，那么来自解码的JSON对象的值将覆盖Filebeat通常添加的字段（type, source, offset,等）以防冲突。")]),s._v(" "),t("li",[s._v("add_error_key\n如果启用此设置，则在出现JSON解组错误或配置中定义了message_key但无法使用的情况下，Filebeat将添加“error.message”和“error.type：json”键。")]),s._v(" "),t("li",[s._v("message_key\n一个可选的配置设置，用于指定应用行筛选和多行设置的JSON密钥。 如果指定，键必须位于JSON对象的顶层，且与键关联的值必须是字符串，否则不会发生过滤或多行聚合。")])])]),s._v(" "),t("li",[t("p",[s._v("ignore_older")]),s._v(" "),t("ul",[t("li",[s._v("可以指定Filebeat忽略指定时间段以外修改的日志内容")]),s._v(" "),t("li",[s._v("文件被忽略之前，确保文件不在被读取，必须设置ignore older时间范围大于close_inactive")]),s._v(" "),t("li",[s._v("如果一个文件正在读取时候被设置忽略，它会取得到close_inactive后关闭文件，然后文件被忽略")])])]),s._v(" "),t("li",[t("p",[s._v("clean_inactive\n启用此选项后，Filebeat会在指定的非活动时间段过去后移除文件的状态。 如果文件已被Filebeat忽略（该文件比ignore_older早），则只能删除状态。 clean_inactive设置必须大于ignore_older + scan_frequency，以确保在收集文件时不会删除状态。 否则，该设置可能会导致Filebeat不断重新发送全部内容，因为clean_inactive将删除探测器仍然检测到的文件的状态。 如果文件更新或再次出现，则从头开始读取文件。\nclean_inactive配置选项对于减少注册表文件的大小非常有用，尤其是在每天生成大量新文件的情况下。此配置选项对于防止Linux上的inode重用导致的Filebeat问题也很有用。每次文件被重命名时，文件状态都会更新，clean_inactive的计数器将再次从0开始。")])]),s._v(" "),t("li",[t("p",[s._v("close_inactive\n启用此选项时，Filebeat将关闭文件句柄（如果文件尚未在指定的时间内收获）。定义期间的计数器从harvester读取最后一个日志行开始。它不是基于文件的修改时间。如果关闭的文件再次发生变化，则会启动一个新的采集器，并在scan_frequency过去后采集最新的更改。建议将close_inactive设置为大于最不频繁的日志文件更新的值。例如，如果日志文件每隔几秒更新一次，则可以安全地将close_inactive设置为1m。如果存在具有完全不同更新速率的日志文件，则可以使用具有不同值的多个prospector配置。\n将close_inactive设置为较低的值意味着文件句柄更快关闭。然而，这具有副作用，即如果从harvester关闭，则不近实时地发送新的日志行。关闭文件的时间戳不取决于文件的修改时间。相反，Filebeat使用内部时间戳来反映文件最后一次收获的时间。例如，如果将close_inactive设置为5分钟，则在harvester读取文件的最后一行之后，开始倒计时5分钟。可以使用 2h (2 hours) 和5m (5 minutes)的时间字符串。默认值是5m。")])]),s._v(" "),t("li",[t("p",[s._v("clean_removed\n当启用此选项时，Filebeat将从注册表中清理文件，如果在最后一个已知名称下无法在磁盘上找到它们。这也意味着在收割机完成后重新命名的文件将被删除。默认情况下启用此选项。\n如果共享驱动器在短时间内消失并再次出现，那么所有文件将从开始重新读取，因为这些状态是从注册表文件中删除的。在这种情况下，我们建议禁用clean_removed选项。")])]),s._v(" "),t("li",[t("p",[s._v("close_removed\n启用此选项后，Filebeat会在删除文件时关闭harvester。 正常情况下，文件只能在close_inactive指定的时间内处于非活动状态之后才能被删除。 但是，如果文件被提前删除，而没有启用close_removed，Filebeat会保持文件打开以确保harvester已经完成。 如果此设置导致未完全读取的文件，因为它们过早地从磁盘上删除，则禁用此选项。该选项默认启用。 如果禁用此选项，则还必须disable clean_removed。")])]),s._v(" "),t("li",[t("p",[s._v("close_renamed\n启用此选项时，文件重命名时Filebeat会关闭文件处理程序。 例如，在旋转文件时发生这种情况。 默认情况下，采集器保持打开状态并持续读取文件，因为文件处理程序不依赖于文件名。 如果启用了close_renamed选项，并且文件被重命名或移动的方式不再与为prospector指定的文件模式匹配，则文件将不会被再次读取。Filebeat不会完成读取文件。")])])]),s._v(" "),t("h2",{attrs:{id:"_3-一些实践经验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-一些实践经验"}},[s._v("#")]),s._v(" 3，一些实践经验")]),s._v(" "),t("h3",{attrs:{id:"_1-type字段冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-type字段冲突"}},[s._v("#")]),s._v(" 1，type字段冲突")]),s._v(" "),t("p",[s._v("上边讲解第一个示例配置时，提到过我们可以通过 "),t("code",[s._v("document_type")]),s._v("参数来作为filebeat输出到kafka的topic名称，一般filebeat的主配置文件会是如下样子：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("filebeat.config_dir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /etc/filebeat/conf.d/\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("filebeat.shutdown_timeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5s\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fields_under_root")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fields")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ip")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.0.0.1"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("groups")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" testapi\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("output.kafka")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hosts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testkafka.com:9092"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("topic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%{[type]}'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("worker")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("max_retries")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bulk_max_size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 30s\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("broker_timeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10s\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("channel_buffer_size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("keep_alive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("compression")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gzip\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("max_message_bytes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000000")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("required_acks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logging.level")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" warning\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("在主配置文件中使用 "),t("code",[s._v("%{[type]}")]),s._v("可以取到每个日志采集项中 "),t("code",[s._v("document_type")]),s._v("的值来作为对应日志的topic，注意，这里之所以能够用"),t("code",[s._v("%{[type]}")]),s._v("这个简写来匹配对应的字段，依赖配置第三行的 "),t("code",[s._v("fields_under_root: true")]),s._v("内容，如果没有这行配置，那么topic的字段应该更改为 "),t("code",[s._v("%{[document_type]}")]),s._v("。")]),s._v(" "),t("p",[s._v("这种配置用起来没有什么问题，但是某一天，一位开发同学上了自己的服务，我也很愉快地将配置给他加上去了，然而后来他反馈说日志只采集了一部分，某些日志文件中的日志并没有采集上去，我一脸疑惑，按理说我配置中去的是 "),t("code",[s._v("*.log")]),s._v("，没有道理只采集了部分日志啊~~~~")]),s._v(" "),t("p",[s._v("后来又仔细看了他的日志，没有采集上来的日志大概如下，日志内容已做脱敏处理，只取了部分字段。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v('\\"@timestamp\\"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v('\\"'),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-06")]),s._v("-05T14"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v('\\"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('\\"fields\\"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v('\\"req_id\\"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v('\\"'),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1591340399916239083")]),s._v('\\"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('\\"source\\"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v('\\"cache\\"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('\\"flag\\"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v('\\"usetime\\"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('\\"funcName\\"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v('\\"func1\\"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('\\"level\\"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v('\\"info\\"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('\\"line\\"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("132")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('\\"msg\\"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v('\\"'),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.767")]),s._v('µs\\"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('\\"stack\\"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v('\\"\\"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('\\"time\\"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v('\\"'),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-06")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-05")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("59.916262")]),s._v('\\"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('\\"trace_id\\"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v('\\"\\"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('\\"type\\"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v('\\"api\\"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('\\"union_id\\"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v('\\"\\"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("最后定位到原因是：他日志里也有 "),t("code",[s._v("type")]),s._v("这个字段，以至于filebeat再取日志往kafka输送的时候发生错乱，当我把取topic的方式更改之后，问题得到解决，因此这里并不再推荐使用"),t("code",[s._v("%{[type]}")]),s._v("来作为取topic的方式。")]),s._v(" "),t("p",[s._v("改后的配置中添加了如下内容：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fields")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("      \n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("filebeatservice")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx_access\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("filebeat的主配置文件中topic的字段也变更了：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("topic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%{[fields.filebeatservice]}'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-cpu占用高"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-cpu占用高"}},[s._v("#")]),s._v(" 2，CPU占用高")]),s._v(" "),t("p",[s._v("CPU占用高主要还是与如上一系列配置文件参数设置相关，事实上我这篇整理文章，也是因为想要探究一波集群CPU占用高的根因而来的，一路探究着，就来到了这里。")]),s._v(" "),t("p",[s._v("CPU高的场景分两种，一种是因为参数配置的问题，因为配置的轮询时间过长，以至于记录处理的仓库文件过大，从而给filebeat应用造成更大的压力，放到系统中就看到filebeatCPU占用较高了。")]),s._v(" "),t("p",[s._v("因此我曾这样对filebeat进行过一波优化，原来用的采集配置内容如下：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ignore_older")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 56h\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scan_frequency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10s\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("clean_inactive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 72h\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("close_inactive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 52h\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("然后把配置更改为如下内容：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ignore_older")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 24h\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scan_frequency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10s\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("clean_inactive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 25h\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("close_inactive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 24h\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("后经观察发现CPU有明显下降。")]),s._v(" "),t("p",[s._v("还有一种情况是发生在重启之后，因为上边参数将监控时间缩短，而对应监控的日志目录中的日志可能保留的更久，因此重启之后，会发生重新注册，重新采集的情况，此时一般使用清理历史日志的再重启的方式来解决，如果日志较多较大，还是很有必要这么做的，不然CPU持续很高的时间可能会很长。")])])}),[],!1,null,null,null);t.default=n.exports}}]);