module.exports = {
  title: "阿不的博客",
  logo: "https://vuejs.org/images/logo.png",
  base: "/blogs/",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "我的",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/263471893067037" },
          { text: "Github", link: "https://github.com/aaa-Bu" },
        ],
      },
    ],
    sidebar: [
      {
        title: "主页",
        path: "/",
        collapsable: false, // 是否折叠
        children: [{ title: "博客简介", path: "/" }],
      },
      {
        title: "基础篇",
        collapsable: false,
        children: [{ title: "第一篇", path: "/blogs/basic/重绘与回流" }],
      },
    ],
  },
};
