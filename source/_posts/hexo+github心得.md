---
title: hexo+github心得
date: 2017-06-06 12:02:57
tags:
	-blog
	-hexo
categories:
	-技术总结
	-搭建博客
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