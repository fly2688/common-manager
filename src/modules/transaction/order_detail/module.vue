<template>
  <section class="module-layout transaction-order-detail">
    <section class="pd10" v-if="!isSignOut">
      <commonTitle :options='titleOptions'></commonTitle>
      <section class="rel clearfix">
        <section class="form-inline half left">
          <span class="form-label auto">商户名称：</span>
          <span class="inline-block line-h">{{detail.name}}</span>
        </section>
        <section class="form-inline half left">
          <span class="form-label auto">商户名称：</span>
          <span class="inline-block line-h">{{detail.name}}</span>
        </section>
        <section class="form-inline half left">
          <span class="form-label auto">商户名称：</span>
          <span class="inline-block line-h">{{detail.name}}</span>
        </section>
        <section class="form-inline half left">
          <span class="form-label auto">商户名称：</span>
          <span class="inline-block line-h">{{detail.name}}</span>
        </section>
        <section class="form-inline half left">
          <span class="form-label auto">商户名称：</span>
          <span class="inline-block line-h">{{detail.name}}</span>
        </section>
      </section>
    </section>
    <Warn></Warn>
    <Loader></Loader>
  </section>
</template>

<script>import m from './module.js';export default m;</script>
<style lang="scss">@import "./module.scss";</style>
