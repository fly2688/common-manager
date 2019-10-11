<template>
  <section class="component-layout left-nav fix lt0" :style="{height: windowHeight+'px'}">
    <scrollBar scrollColor="rgba(255,255,255,.6)">
      <menuLayout v-if='treeData !== ""' v-model="vm"  @nodeClick='nodeClick' :node="treeData.root"></menuLayout>
    </scrollBar>
  </section>
</template>

<script>import c from './component.js';export default c;</script>
<style lang="scss" scoped="true">@import "./component.scss";</style>
