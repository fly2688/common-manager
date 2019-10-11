<template>
  <section v-if="isShowLoad" class="component-layout loader full-height full-width fix lt0">
    <section class="sipnnerinner rel">
        <section class="spinner"><i></i></section>
        <p class="text-white">请耐心等候...</p>
    </section>
  </section>
</template>

<script>import c from './component.js';export default c;</script>
<style lang="scss" scoped="true">@import "./component.scss";</style>
