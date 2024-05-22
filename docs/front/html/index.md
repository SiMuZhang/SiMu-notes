# HTML 知识点

## 什么是 HTML，与 HTML5 有什么区别

**HTML**：超文本标记语言（英语：HyperText Markup Language）是一种用来结构化 Web 网页及其内容的标记语言。

**HTML5**：是 HTML 的新标准，其主要目标是无需任何额外的插件如 Flash、Silverlight 等，就可以传输所有内容。它囊括了动画、视频、丰富的图形用户界面等。

HTML5 是由万维网联盟（W3C）和 `Web Hypertext Application Technology Working Group` 合作创建的 HTML 新版本。

## 块级元素与行内元素

块级元素（block-level elements）通常会独占一行或多整行，可以对其设置宽度，高度，对齐等属性。常见的块级元素有：

- `<div>`：用于将内容分组。
- `<p>`：用于段落。
- `<h1>`-`<h6>`：用于标题。
- `<ul>` 和 `<ol>`：用于无序和有序列表。
- `<li>`：用于列表项。
- `<table>`：用于创建表格。

HTML 中的行内元素（inline elements）通常用于在一行内显示，不占有独立的区域，仅仅靠自身的字体大小和图像尺寸来支撑结构，一般不可以设置宽度，高度，对齐等属性。常见的行内元素有：

- `<span>`：用于对文本或其他内联元素进行分组或添加样式。
- `<strong>`：表示强调的文本。
- `<em>`：表示斜体强调的文本。
- `<a>`：用于创建超链接。
- `<img>`：用于插入图像。
- `<input>`：用于创建用户输入字段。

空元素（void elements）是指没有闭合标签的元素。它们在 HTML 中没有内容，只有一个开启标签。常见的空元素有：

- `<br>`：用于插入换行符。
- `<img>`：用于插入图像。
- `<input>`：用于创建用户输入字段。
- `<meta>`：用于指定页面元数据。
- `<link>`：用于引入外部资源。
- `<hr>`：用于创建水平分隔线。

## title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？

- title 和 h1 的区别

1. 用途不同：title 标签用于定义 HTML 文档的标题，通常会显示在浏览器的标签页上或者窗口的标题栏上，对于搜索引擎优化（SEO）也非常重要。而 h1 标签用于表示文档的主标题，通常显示在页面内容区域的顶部。
2. 所在位置不同：title 标签应该放在 `<head>` 标签内，而 h1 标签则应该放在 `<body>` 标签内。
3. 格式和样式不同：title 标签中的文本通常比较短，并且不需要进行格式化、排版等操作；而 h1 标签中的文本通常比较长，并且需要进行合适的格式化、排版和样式设置，以便使其适应页面布局和设计风格。

- b 和 strong 的区别

b 标记用于指定文本加粗的外观效果，通常只是为了强调关键词或短语，没有特别强的语义化含义。而 strong 标记则表示文本的强调重点，具有更强的语义化含义，并且可以改变文本的语调和读音等方面。

- i 和 em 的区别

i 标记用于指定文本斜体的外观效果，通常只是为了强调关键词或短语，没有特别强的语义化含义。而 em 标记则表示文本的重要性，具有更强的语义化含义，并且可以改变文本的语调和读音等方面。

## HTML5 有哪些新特性？

- 新增语义化标签：nav、header、footer、aside、section、article
- 音频、视频标签：audio、video
- 数据存储：localStorage、sessionStorage
- canvas（画布）、Geolocation（地理定位）、websocket（通信协议）
- input 标签新增属性：placeholder、autocomplete、autofocus、required
- history API
  - go、forward、back、pushstate
