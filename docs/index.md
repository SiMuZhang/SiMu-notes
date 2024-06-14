---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 四木的小屋
  text: SiMu 成长提升简记
  tagline: 好运藏在努力里
  image:
    src: /logo.png
    alt: 四木的小屋
  actions:
    - text: 前端物语
      link: /front/html/
    - text: 前端导航
      link: /nav/
      theme: alt
features:
  - icon: 📖
    title: 前端知识
    details: 整理前端常用知识点<small>（面试八股文）</small><br />
    link: /front/html/
    linkText: 前端常用知识
  - icon: 🛠️
    title: 常用前端工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: /front/es6/
    linkText: 提效工具
  - icon: 💎
    title: 工作踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: /work/git/
    linkText: 踩坑记录
  - icon: 💡
    title: 懒惰等于将一个人活埋,劝君谨记
    details: '<small class="bottom-small">想中彩票头奖的小开发</small>'
    link: /about/simu
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
