<template>
  <vs-form ref="form" :rules="{name: {required: true,message:'必填'},age: {required: true,message:'必填年龄'}}">
    <vs-form-item prop="name" style="margin-bottom: 20px">
      <vs-input label-placeholder="姓名" v-model="input"></vs-input>
    </vs-form-item>

    <vs-form-item prop="age">
      <vs-input label-placeholder="年龄" v-model="age"></vs-input>
    </vs-form-item>
  </vs-form>
  <vs-button @click="validate"> 校验 </vs-button>

  <!--  <vs-button @click="validate"> 校验 </vs-button>-->
</template>

<script setup>
import VsForm from '../../src/components/vsForm/Base/vsForm'
import VsFormItem from '../../src/components/vsForm/Item/vsFormItem'
import {ref, reactive, getCurrentInstance, onMounted} from 'vue';

const input = ref('')
const age = ref()
const form = ref();
function validate(){
  form.value.validate((value)=>{
    if (value){
      // alert('通过')
    }

  })
  // this.$refs.form.validate()
}

</script>

<style scoped>
.con-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.con-content > div{
  display:flex;
  align-items:center;
  justify-content:center;
}

.con-content > div p{
  margin-left: 10px
}

.message{
  height: 100%;


  overflow: hidden;
  /*white-space: nowrap;*/
  display:flex;
  justify-content:center;
  align-items:center;

}

.message-wrap{
  /*text-align:center;*/
  width: 0;
  height: 35px;
  position: relative;
  background-color: #FFFFFF;
  border-radius: 12px;
  /*display: flex;*/
  /*justify-content: center;*/
  /*  align-items: center;*/
  /*transition: width .3s;*/
  /*transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);*/
  animation: appear .3s .4s forwards;
  animation-timing-function: cubic-bezier(.37,.84,.66,1)
}

.icon-box{
  box-shadow: 2px 2px 10px 2px rgb(255,70,80,0.2);
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:20px;
  width: 35px;
  height: 35px;
  color:white;
  position: absolute;
  background-color: #45C93A;
  border-radius: 12px;
  top: -8px;
  left: -8px;
  transform: scale(0);
  animation: elastic-appear .4s forwards;
  animation-timing-function:  cubic-bezier(0,1.22,.66,3)


}

@keyframes elastic-appear {
  0%{
    transform: scale(0);
  }

  100%{
    transform: scale(1);
  }
}

@keyframes appear {
  /*0%{*/
  /*  transform: scale(0);*/
  /*}*/


  100%{
    width: 300px;
    padding: 0 25px;
  }
}

</style>
