(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{393:function(t,s,e){"use strict";e.r(s);var a=e(4),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"scrapy-spidermiddlewares-offsite-debug-filtered-offsite-request-to-xxx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrapy-spidermiddlewares-offsite-debug-filtered-offsite-request-to-xxx"}},[t._v("#")]),t._v(" [scrapy.spidermiddlewares.offsite] DEBUG: Filtered offsite request to ‘XXX‘")]),t._v(" "),s("p",[s("strong",[t._v("一、问题描述")])]),t._v(" "),s("p",[t._v("scrapy-redis中使用RedisCrawlSpider类爬虫，以Rule规则来匹配地址，运行爬虫时出现错误:")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("scrapy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spidermiddlewares"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" DEBUG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Filtered offsite request to "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XXX'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("二、解决")])]),t._v(" "),s("p",[t._v("在settings.py中添加\n"),s("code",[t._v("SPIDER_MIDDLEWARES = { 'scrapy.spidermiddlewares.offsite.OffsiteMiddleware': None, }")])]),t._v(" "),s("p",[t._v("原因:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/hwj0123/BlogPictureRepository/blog/20201025103729159.png",alt:""}})]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"对于同一个网址进行二次爬取时没有获取到数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对于同一个网址进行二次爬取时没有获取到数据"}},[t._v("#")]),t._v(" 对于同一个网址进行二次爬取时没有获取到数据")]),t._v(" "),s("p",[s("strong",[t._v("一、原因")]),t._v("\n可能是要进行二次解析的域名被过滤了")]),t._v(" "),s("p",[s("strong",[t._v("二、解决")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" scrapy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("detail_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'item'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parse_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dont_filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("通过使用dont_filter=True来避免被过滤。")])])}),[],!1,null,null,null);s.default=r.exports}}]);