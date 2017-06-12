---
title: github上构建免费的Web应用
date: 2017-06-08 21:46:03
tags: 
	github
categories: 
	技术总结
	Git
	Github
---

# 引子
[Hexo在github上构建免费的Web应用](http://blog.fens.me/hexo-blog-github/)

看到这个教程想到以下几点：
* Github Page可以通过建立username.github.io这类的仓库来构建Web应用（下面用A代指）。
* Github Page还可以建立其他名称的仓库project进行web的构建Web应用（下面用B/C/D/.../代指）。
* 以上两者访问时显示的地址，尤其是绑定域名example.com后。

## 绑定域名
### 绑定
同时建立A和B/C/D/...，可以只建立A，或者建立A仓库但不构建web应用，但不可只建立B，即不管用到哪个应用,A是必须建立的（经过试验后，个人认为是这样）。
* 只绑定A
	* 前者访问地址是username.github.io或example.com。
	* 后者访问地址是username.github.io/B或example.com/B。
* A绑定examp.com，B绑定examp.com下的子域名b.example.com。
	* 两者访问地址将会分别显示examp.com和b.example.com,同时example.com/B也可访问到B。
* 经过不完全试验后，绑定不同的主域名可能会不成功，但没有实验跳过该主域名examp.com分别绑定该域名下的不同子域名如a.example.com和b.example.com。

### CNAME
添加CNAME文件到根目录，将想要绑定的域名example.com写入。

### 域名解析
找域名服务商进行解析，A的域名可解析为A类或CNAME类，B的域名则解析为CNAME类（试过解析为A类，Github提示不可以）。