<template>
  <section class="component-layout ui-enlarge-img clearfix">
    <section v-if="item" v-for="(item, index) in imgList" class="inner border-round border-line pd5 left rel mg-r10 mg-b5">
      <span v-if='isShow' @click="delImage(index)" class="text-white bg-red abs layer-close pointer border-round">&#10006 </span>
      <img class="img-responsive pointer" :src="item" @click="enLargeImg(item)" />
    </section>
  </section>
</template>

<script>import c from './component.js';export default c;</script>
<style lang="scss" scoped="true">@import "./component.scss";</style>
