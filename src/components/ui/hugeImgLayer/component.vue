<template>
  <section v-if="isShow" class="component-layout ui-huge-img-layer fix lt0 full-width full-height">
     <section class="inner-box rel dom-center" :style="{height: imgHeght}">
       <span @click="hide" class="text-white fs-middle bg-red abs layer-close pointer border-round">&#10006 </span>
       <section class="inner">
         <img :src="imgUrl" class="img-responsive" />
       </section>
     </section>
  </section>
</template>

<script>import c from './component.js';export default c;</script>
<style lang="scss" scoped="true">@import "./component.scss";</style>
