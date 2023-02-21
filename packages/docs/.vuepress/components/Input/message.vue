<template>
  <div class="center content-inputs">
    <vs-input v-model="value1" placeholder="邮箱">
      <template #message-success>
        邮箱验证通过
      </template>
    </vs-input>

    <vs-input v-model="value2" placeholder="姓名">
      <template #message-danger>
        必填项
      </template>
    </vs-input>

    <vs-input type="password" v-model="value3" placeholder="密码">
      <template #message-warn>
        不安全的密码
      </template>
    </vs-input>

    <vs-input v-model="value4" label="邮箱校验示例" placeholder="dewenzhang012@gmail.com">
      <template v-if="validEmail" #message-success>
        邮箱验证通过
      </template>
      <template v-if="!validEmail && value4 !== ''" #message-danger>
        邮箱验证不通过
      </template>
    </vs-input>
  </div>
</template>
<script>
export default {
  data:() => ({
    value1: 'dewenzhang012@gmail.com',
    value2: '',
    value3: '123456',
    value4: ''
  }),
  computed: {
    validEmail() {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value4)
    }
  }

}
</script>
<style lang="stylus" scoped>
.content-inputs
  >>>.vs-input-parent
    margin 10px
</style>
