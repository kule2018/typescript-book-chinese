(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{189:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("正如我们在为什么使用 "),a("a",{attrs:{href:"https://basarat.gitbooks.io/typescript/content/docs/why-typescript.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),a("OutboundLink")],1),t._v(" 所说：")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("环境声明允许你安全的使用现有的 JavaScript 流行库，并且能让你的 JavaScript、CoffeeScript 或者其他需要编译成 JavaScript 的语言逐步迁移至 TypeScript。")]),t._v(" "),a("p",[t._v("学习为第三方 JavaScript 代码编写环境声明，是一种为 TypeScript 写注解比较好的实践方式。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),a("p",[t._v("和：")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("你并不需要为 "),a("code",[t._v("process")]),t._v(" 做这些，因为这已经存在于社区维护的 "),a("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/index.d.ts",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("node.d.ts")]),a("OutboundLink")],1)])]),t._v(" "),t._m(12),t._v(" "),t._m(13),a("p",[t._v("我们推荐尽可能的使用接口，例如：")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),a("p",[t._v("接下来，让我们更详细的了解接口。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"环境声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境声明","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境声明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("TypeScript 的设计目标之一是让你从现有的 JavaScript 库中安全、轻松的使用 TypeScript，你可以通过 TypeScript 声明文件来做到这一点。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"声明文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#声明文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 声明文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你可以通过 "),s("code",[this._v("declare")]),this._v(" 关键字，来告诉 TypeScript，你正在试图表述一个其他地方已经存在的代码（如：写在 JavaScript、CoffeeScript 或者是像浏览器和 Node.js 的其他运行环境），如：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Error: 'foo' is not defined")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("any")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// allow")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("你可以选择把这些声明放入 "),a("code",[t._v(".ts")]),t._v(" 或者 "),a("code",[t._v(".d.ts")]),t._v(" 里。在你实际的项目里，我们强烈建议你应该把声明放入 "),a("code",[t._v(".d.ts")]),t._v(" 里（可以从一个命名为 "),a("code",[t._v("globals.d.ts")]),t._v(" 或者 "),a("code",[t._v("vendor.d.ts")]),t._v(" 文件开始）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果一个文件有扩展名 "),s("code",[this._v(".d.ts")]),this._v("，这意味着每个顶级的声明都必须以 "),s("code",[this._v("declare")]),this._v(" 关键字作为前缀。这有利于向作者说明，在这里 TypeScript 将不会把它编译成任何代码，同时他需要确保这些在编译时存在。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("ul",[s("li",[this._v("环境声明就好像你与编译器之间的一个约定，如果这些没有在编译时存在，但是你却使用了他们，则事情将会在没有警告的情况下中断。")]),this._v(" "),s("li",[this._v("环境声明就好像是一个文档。如果源文件更新了，你应该同步更进。所以，当你使用源文件在运行时的新行为时，如果没有人更新环境声明，编译器将会报错。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 变量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("举个例子，当你想告诉 TypeScript 编辑器关于 "),s("code",[this._v("process")]),this._v(" 变量时，你可以这么做：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("any")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这允许你使用 "),s("code",[this._v("process")]),this._v("，并能成功通过 TypeScript 的编译：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[this._v("process"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{attrs:{class:"token function"}},[this._v("exit")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Process")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("exit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Process"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("因为这允许其他人扩充这些全局变量，并且会告诉 TypeScript 有关于这些的修改。例如：考虑到以下情况，我们添加一个 "),s("code",[this._v("exitWithLogging")]),this._v(" 函数至 "),s("code",[this._v("process")]),this._v("：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Process")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("exitWithLogging")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nprocess"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("exitWithLogging")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'exiting'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("apply")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);