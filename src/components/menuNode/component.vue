<template>
  <section class="component-layout menu-node">
    <section class="text-left text-white" :key='i' v-for="(item, i) in node.children" >
        <section class="clearfix menu" :class="{'text-blue': (item.active && item.level !== 1), 'text-white bg-blue': (item.active && item.level === 1), 'pd10 mg-t10': item.level === 1, 'pd-l10 pd-t10': item.level !== 1}" >
          <p class="clearfix" :class="{'on': (item.active && item.level === 1)}">
            <span class="left pointer" @click.stop.prevent="nodeClick(item)">{{item.name}}</span>
            <span v-if="item.children.length !== 0" @click.stop.prevent="nodeClick(item)" class="arrow right pointer" :class="{'icon-rotate': item.active, 'on': (item.active && item.level === 1)}" ></span>
          </p>
        </section>
        <transition name='slide'>
            <section class="sub-menu pd-l15 pd-r10" v-if="item.children.length!=0 && item.active">
              <menuNode :key='item.id'  v-model="valueModel" @nodeClick='nodeClick' :node="item" :idx="i"></menuNode>
            </section>
        </transition>
    </section>
  </section>
</template>

<script>import c from './component.js';export default c;</script>
<style lang="scss" scoped="true">@import "./component.scss";</style>
