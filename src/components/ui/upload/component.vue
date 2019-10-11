<template>
  <section class="component-layout rel ui-upload btn-white pointer inline-block border-round" :class="typeClass ? typeClass: ''">
    <p class="pointer">{{ txt }}</p>
    <form class="upload-form full-width no-min abs lt0">
        <input v-if="type=='img'" v-on:change='onImgChange' id="upImg"  class="upload-form-input pointer no-min full-width" type="file" :multiple="isMultiple" accept="image/*" />
        <input v-else-if="type=='all'" v-on:change='onAllFileChange'  class="upload-form-input pointer no-min full-width" type="file" />
        <input v-else v-on:change='onFileChange'  class="upload-form-input pointer no-min full-width" type="file" accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
    </form>
  </section>
</template>

<script>import c from './component.js';export default c;</script>
<style lang="scss" scoped="true">@import "./component.scss";</style>
