<template>
  <transition name='slidefade'>
    <section class="component-layout ui-warn fix text-white bg-red border-round" v-show="warnInfo.flag">
      {{warnInfo.content}}
    </section>
  </transition>
</template>

<script>import c from './component.js';export default c;</script>
<style lang="scss" scoped="true">@import "./component.scss";</style>
