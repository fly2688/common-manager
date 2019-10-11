<template>
  <section class="module-layout transaction-order-list">
    <section class="pd10" v-if="!isSignOut">
      <commonTitle :options='titleOptions'></commonTitle>
      <section class="pd10 bg-white clearfix">
        <section class="rel inline-block mg-r10 mg-b5">
          <span class="iconfont icon-search abs main-search-icon"></span>
          <input type="text" placeholder="商户名称/协议编号" v-model="searchKeys.keyword" class="form-control main-search" />
        </section>
        <section class="inline-block mg-r10 mg-b5">
          <span class="line-h">状态</span>
          <select class="form-control inline-block autowidth" v-model="searchKeys.status">
            <option value="">全部</option>
            <option value="0">待审核</option>
            <option value="1">使用中</option>
            <option value="2">禁用中</option>
            <option value="3">审核未通过</option>
          </select>
        </section>
        <button type="button" class="btn btn-blue mg-r10 mg-b5" @click="onSearch">搜索</button>
        <button type="button" class="btn btn-default mg-r10 mg-b5" @click="onReset">重置</button>
      </section>
      <section>
        <vTable :titles='tableTitles' :datas='dataList' :loadTxt='loadTxt'>
          <template slot-scope="tableItem">
            <td>{{tableItem.datas.userName | isEmpty}}</td>
            <td>{{tableItem.datas.comission | isNum}}</td>
            <td>{{tableItem.datas.adr | isEmpty}}</td>
            <td>{{tableItem.datas.content | isEmpty}}</td>
            <td>{{tableItem.datas.out | isNum}}</td>
            <td>{{tableItem.datas.in | isNum}}</td>
            <td>{{tableItem.datas.in | isNum}}</td>
            <td>{{tableItem.datas.in | isNum}}</td>
            <td>{{tableItem.datas.createAt | unixFormatDateTime}}</td>
            <td>
              <button type="button" @click="scanItem(tableItem.datas.id)" class="btn-short btn-mg btn-blue">详情</button>
            </td>
          </template>
        </vTable>
      </section>
      <section class="clearfix pd10 bg-lightgray" v-if="dataList.length>0">
        <Pagination :options='paginationOptions'></Pagination>
      </section>
    </section>
    <Warn></Warn>
    <Loader></Loader>
  </section>
</template>

<script>import m from './module.js';export default m;</script>
<style lang="scss">@import "./module.scss";</style>
