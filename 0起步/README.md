##### typeScript官方文档:https://www.tslang.cn/
浏览器默认不能解析.ts后缀的文件，需要用到解析器来将ts文件转为js文件，解析器为nodejs编写，需先下载nodejs
##### nodejs官网:http://nodejs.cn/
之后在使用nodejs自带的包管理工具npm下载ts文件解析器
`npm i -g typescript`
全局安装解析器之后，即可在终端中使用 tsc xx.ts命令，将ts转为js
`tsc xx.ts`