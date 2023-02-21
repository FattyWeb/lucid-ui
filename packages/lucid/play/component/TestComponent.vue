<template>
  <vs-tab v-model="active" style="width: 800px">
    <vs-tab-panel label="顾客详情" name="document">
      <h1>顾客详情</h1>
    </vs-tab-panel>
    <vs-tab-panel label="消费记录" name="guide">
      <h1>消费记录</h1>
    </vs-tab-panel>
    <vs-tab-panel label="客服回访记录" name="license">
      <h1>客服回访记录</h1>
    </vs-tab-panel>
    <vs-tab-panel label="业务员回访记录" name="record">
      <h1>业务员回访记录</h1>
    </vs-tab-panel>
  </vs-tab>
</template>

<script setup>

import {ref, reactive, getCurrentInstance, onMounted} from 'vue';

const active = ref('license');
</script>

<style scoped>

</style>
