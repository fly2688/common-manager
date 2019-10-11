<template>
  <section class="component-layout common-title bg-lightgray commonTitle-layout pd-l15 pd-r15 pd-t10 pd-b10 border-line clearfix mg-b10">
    <section class="left inline-block">
      <span v-for="(item, index) in titles">
        <strong v-if="index!==0" class="pd-span">/</strong>{{item}}
      </span>
    </section>
    <section class="left mg-long">
      <slot></slot>
    </section>
    <button v-if="isShow" type="button" class="btn-primary right" @click="back">返回</button>
  </section>
</template>

<script>import c from './component.js';export default c;</script>
<style lang="scss" scoped="true">@import "./component.scss";</style>
