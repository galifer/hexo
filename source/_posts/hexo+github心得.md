---
title: hexo+github心得
date: 2017-06-06 12:02:57
tags:
	-blog
	-hexo
categories:
	-技术总结
	-Github
	-hexo+github
---
## 搭建心得
* 重点是hexo更新到3.0之后，部署前`_config.yaml里deploy`下`type`需要写`git`而不是`github`。
	*.yaml文件中，各项目后要`加空格`，如`type: git`。
* post.md默认文件tags和categories后面不可添加分类目录，否则生成不了title.md

```markdown
---
title: {{ title }}
date: {{ date }}
tags:
categories:
---
```

### 感觉比较好的教程
[Hexo在github上构建免费的Web应用](http://blog.fens.me/hexo-blog-github/)
主要在于点醒了：
* Github Page可以通过建立githubname.github.io这类的仓库来搭建博客，
* Github Page还可以建立其他名称的仓库example进行web的构建，
区别在于访问时显示的地址，尤其是绑定域名example.com后。

在已建立githubname.github.io仓库和example仓库且两者都建立的前提下，
* githubname.github.io仓库和example仓库都建立web应用
	* 前者访问路径会是githubname.github.io或example.com，
	* 后者访问路径会是githubname.github.io/example或example.com/example