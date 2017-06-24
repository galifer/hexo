---
title: git使用心得
date: 2017-06-08 13:03:08
copyright: true
tags:
	- git
categories:
	- 技术总结
	- Git
---
# 暂存一个文件的部分改动
通常来讲，创建一个基于特性的提交是一个良好的做法，就是说，每次提交都必须代表一个新特性的产生或者是一个bug的修复。考虑一下，如果你修复了两个bug，或是添加了多个新特性但是却没有提交这些变化会怎样呢？在这种情况下，你可以把这些变化放在一次提交中。但是还有一个更好的方法：把文件分别暂存(Stage)然后分别提交。
<!-- more -->
比如说，你对一个文件进行了多次修改并且想把他们分别提交。这种情况下，你可以在添加命令(add)中加上-p选项
```bash
$ git add -p [file_name]
```
## 逐一添加修改信息
```bash
$ git commit –amend
```
# 分支
## 创建并切换新分支
```bash
$ git checkout -b [new_branch]
```
## 切换分支
```bash
$ git checkout [branch]
```
## 更新A分支到B分支
先切换B分支，再更新A分支到B分支
```bash
$ git checkout A_branch
$ git rebase B_branch
```