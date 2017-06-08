# Hexo

# Hexo转移
## install Git
[Git](https://git-scm.com/)
 
## install node.js

[node.js国内站点](http://nodejs.cn/download/)

[node.js v6.0版本](https://nodejs.org/en/)
  
## install hexo
  
``` bash
$ npm install -g hexo-cli
```

# clone to local

``` bash
$ npm install -g hexo-cli
```

## clone to local
克隆到本地文件

## chcange_branch.sh
运行`chcange_branch.sh`，转换`branch`为`develop`。

## install npm
进入本地克隆文件运行以下代码

```bash
$ npm install
```
或者运行`dthemesandsuser.sh`，自动进行`npm的安装`、`themes的加载`、以及`user的添加`。

## issue.sh
本地发布

## update-deploy.sh
上传本地hexo配置并发布本地生成的hexo静态网页

## themes-update.sh
主题更新

## yilie-lostblock.sh
yilie主题缺失的模块,运行后在根目录_config.yml里添加配置：
  
```yaml
jsonContent:
   meta: false
   pages: false
   posts:
   title: true
   date: true
   path: true
   text: false
   raw: false
   content: false
   slug: false
   updated: false
   comments: false
   link: false
   permalink: false
   excerpt: false
   categories: false
   tags: true
```