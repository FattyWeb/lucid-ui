<script setup lang="ts">
 import TestComponent from './component/TestComponent.vue'
 import {ref} from "vue";
 const active = ref(false);
 function update(act){
   if (act){
     document.body.setAttribute('vs-theme','dark');
   }else {
     document.body.removeAttribute('vs-theme');
   }
   active.value = act;
 }

</script>

<template>
  <header>
    <h2 style="position: relative;display: inline-block">
      单组件测试环境
    </h2>
  </header>
  <main class="main">
    <div style="position: absolute; top:10px;left: 10px">
      <vs-switch :modelValue="active" @update:modelValue="update">
        <template #off>
          白天模式
        </template>
        <template #on>
          黑暗模式
        </template>
      </vs-switch>
    </div>

    <TestComponent></TestComponent>
  </main>
</template>


<style>
@font-face{
  font-family: "Poppins";
  src: url("./assets/HanYiZhongYuanJian-1.ttf");
  font-weight: 400;
  font-style: normal;
}

  body, html{

    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #f5f7f8;
    color: #2c3e50 ;
  }
  #app {
    height: 100%;
    width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }
  header h2{
    color: #FFFFFF;
    background-color: #2564ff;
    border-radius: 35px 0  35px 0;
    padding: 0 20px;
  }

  header h2::before{
    content: '';
    position: absolute;
    height: 2px ;
    width: 20px;
    left: -24px;
    top: 50%;
    background-color: #2564ff;
  }

  header h2::after{
    content: '';
    position: absolute;
    height: 2px ;
    width: 20px;
    right: -24px;
    top: calc(50% - 1px);
    background-color: #2564ff;
  }

  .main{
    width: 45%;
    min-width: 40%;
    height: calc(100vh - 200px);
    margin: auto;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 0px 0 #d8d8e0;
    background-color: #ffffff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
  }

  .main *{
    /*font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;*/
  }

  .main:hover{
    box-shadow: 0 0 15px 0 #d8d8e0;
  }

  .main::before{
    content: '';
    transition: all 0.3s ease-in-out;
    position: absolute;
    left: -15px;
    bottom: -15px;
    background-color: transparent;
    border-radius: 0 0 0 20px;
    height: 70px;
    width: 70px;
    border-bottom: solid 4px #2564ff;
    border-left: solid 4px #2564ff;
  }

  .main::after{
    content: '';
    transition: all 0.3s ease-in-out;
    position: absolute;
    right: -15px;
    top: -15px;
    background-color: transparent;
    border-radius: 0 20px 0 0;
    height: 70px;
    width: 70px;
    border-top: solid 4px #2564ff;
    border-right: solid 4px #2564ff;
  }

  .main:hover::after{
    right: -25px;
    top: -25px;
  }

  .main:hover::before{
    left: -25px;
    bottom: -25px;
  }
</style>
