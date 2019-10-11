<template>
  <section class="component-layout transaction-pay-set global-layout" v-if="isShowSet">
      <section class="global-layout-inner bg-lightgray rel pd10 border-round">
        <span @click="isShowSet=false" class="global-layout-close layer-close border-round abs">&#10006 </span>
        <p class="f-bold fs-middle pd-b10 pd-t5 border-line mg-b10">申请渠道</p>
        <section class="pd-b10 over-scroll" :style="{'max-height': minHeight}" >
          <section class="form-inline mg-b5">
            <span class="form-label autowidth">商户名：</span>
            <select v-model="proIndex" class="form-control inline-block autowidth">
              <option value="">请选择</option>
              <option :value="i" v-for="(item, i) in proDatas">{{item.name}}</option>
            </select>
          </section>
          <section class="form-inline mg-b5">
            <span class="form-label autowidth">支付平台：</span>
            <select v-model="payway" class="form-control inline-block autowidth">
              <option value="ali">支付宝</option>
              <option value="wx">微信</option>
            </select>
          </section>
          <section class="form-inline mg-b5">
            <span class="form-label autowidth">通道模式：</span>
            <select v-model="wayModel" class="form-control inline-block autowidth">
              <option v-if="payway==='ali'" value="zft">直付通</option>
              <option value="mytg">秘钥托管</option>
              <option value="ysq">预授权</option>
            </select>
          </section>
          <section v-if="payway==='ali'">
            <section class="form-inline mg-b5">
              <span class="form-label autowidth">商品PID：</span>
              <input v-model="ali.pid" type="text" v-sliceStr='20' :disabled="wayModel==='zft'" class="form-control inline-block fixedwidth" />
            </section>
            <section class="form-inline mg-b5 rel clearfix" v-if="wayModel==='mytg'" >
              <span class="form-label autowidth left">商户私钥：</span>
              <textarea v-model="ali.siyao" rows="5" cols="40" class="form-control left"></textarea>
            </section>
            <section class="form-inline mg-b5 rel clearfix" v-if="wayModel==='mytg'">
              <span class="form-label autowidth left">支付宝公钥：</span>
              <textarea v-model="ali.gongyao" rows="5" cols="40" class="form-control left"></textarea>
            </section>
          </section>
          <section v-else>
            <section class="form-inline mg-b5">
              <span class="form-label autowidth">微信商户号：</span>
              <input type="text" v-model="wx.shh" v-sliceStr='20' class="form-control inline-block fixedwidth" />
            </section>
            <section class="form-inline mg-b5" v-if="wayModel==='ysq'">
              <span class="form-label autowidth">商户APPID：</span>
              <input type="text" v-model="wx.appId" v-sliceStr='20' class="form-control inline-block fixedwidth" />
            </section>
            <section class="form-inline mg-b5 rel clearfix" v-if="wayModel==='mytg'" >
              <span class="form-label autowidth left">商户API秘钥：</span>
              <textarea rows="5" cols="40" v-model="wx.api" class="form-control left"></textarea>
            </section>
            <section class="form-inline mg-b5 rel clearfix" v-if="wayModel==='mytg'">
              <span class="form-label autowidth left merch-si">商户私钥：</span>
              <textarea rows="5" cols="40" v-model="wx.siyao" class="form-control left"></textarea>
            </section>
          </section>
          <section class="form-inline mg-b5">
            <span class="form-label autowidth">交易渠道：</span>
            <select v-model="transway" class="form-control inline-block autowidth">
              <option v-for="(item, i) in payWays[payway]" :value="item.type">{{item.name}}</option>
            </select>
          </section>
        </section>
        <section class="text-center mg-b10">
          <button v-if="wayModel==='ysq' && payway==='wx'" type="button" @click="preCheck" class="btn-blue mg-r20">预检测</button>
          <button @click="save" type="button" class="btn-danger">保存</button>
        </section>
      </section>
  </section>
</template>

<script>import c from './component.js';export default c;</script>
<style lang="scss" scoped="true">@import "./component.scss";</style>
