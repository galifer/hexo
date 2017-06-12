---
title: hexo+github心得
date: 2017-06-06 12:02:57
tags:
	blog
	hexo
categories:
	技术总结
	Git
	hexo+github
---
# 搭建心得

## deploy错误
1. hexo更新到3.0之后，部署前`_config.yaml里deploy`下`type`需要写`git`而不是`github`（.yaml文件中，各项目后要`加空格`，如`type: git`）。
2. 若操作失败，安装一个扩展试一试，代码：`npm install hexo-deployer-git --save`

## hexo new "title" 错误
`post.md`默认文件的tags和categories后面不可添加分类目录，否则生成不了title.md（或许修改一下可以实现）。
```markdown
---
title: {{ title }}
date: {{ date }}
tags:
categories:
---
```
看到网上说的，`hexo n title`时标题里有空格时必须要加`""`，其他都可以不加，试了一下果然可以。

## 绑定域名后，CNAME文件在下次deploy时消失
该问题推测是因为被本地.deploy_git仓库全部替换了
将CNAME文件添加到source文件下（有人说更改_config.yaml里的`skip_render: CNAME`参数，试过不修改也可以，只要放到source文件夹下）,防止hexo部署到Github上被覆盖消失。网上还有其他方法，安装插件什么的。