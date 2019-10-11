<template>
  <section class="module-index">
    <leftNav></leftNav>
    <topNav :options='topOptions'></topNav>
    <Loader></Loader>
    <Dialog :options="dialogOptions"></Dialog>
    <section class="bg-lightgray home-inner rel">
      <section class="w100 full-height abs lt0" :style="{'height': minHeight,'right':'0','bottom':'2px'}">
        <iframe :src='iframeUrl' height="100%" width="100%" style="border: none;"></iframe>
      </section>
    </section>
  </section>
</template>

<script>
  import m from './module.js';

  export default m;
</script>
<style lang="scss">@import "./module.scss";</style>
