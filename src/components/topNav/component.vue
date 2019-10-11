<template>
  <section class="component-layout top-nav fix lt0">
    <section class="left main-logo">
      <img class="img-responsive" src="../../../public/images/logo.png" />
    </section>
    <section class="left main-title text-white">{{baseConfig.TITLE}}</section>
    <span class="text-white pd-l10 left inline-block">v1.8</span>
    <section class="right clearfix">
      <section class="user-info text-black right text-white">
        <p class="fs-small pd-t10">{{ username }}</p>
      </section>
      <section class="user-img right">
        <img src="../../../public/images/defaultprotrait.jpg" class="img-responsive" />
      </section>
      <section class="sets right pointer right mg-r20">
        <img @click="onSet" src="../../../public/images/setting.png" class="img-responsive" title="修改密码" />
      </section>
      <section class="sets right pointer right mg-r20">
        <img @click="tuiChu" src="../../../public/images/out.png" class="img-responsive" title="退出" />
      </section>
    </section>
  </section>
</template>

<script>import c from './component.js';export default c;</script>
<style lang="scss" scoped="true">@import "./component.scss";</style>
