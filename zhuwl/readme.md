# 如何能产生冲突？

我告诉你，兄弟，告诉我啥压？

- 得搞点事出来\*\*\*\*07182114
  矫正 this
  fn.call(this,args1,args2,...)
  fn.apply(this,[args1,args2,...])
  fn.bind()
  aggfvafdg

## vue 脚手架搭建项目结构

1.  建立一个空文件夹作为 git 仓库，并在此打开 git bash
2.  在 git bash 中开始项目的起点准备（对于需要的项目，现在为 0 的状态）
3.  继续在 git bash 中操作

```
# 全局安装 vue-cli
$ npm install --global  vue-cli

# 创建一个基于webpack模板的项目，项目的名字为my_project_name
$ vue init webpack my_project_name

# 按提示信息选择(需要路由。需要代码校验工具，不需要p2p,不需要单元测试，其余的直接按enter继续)

$ cd my_project_name
$ npm run dev
```
