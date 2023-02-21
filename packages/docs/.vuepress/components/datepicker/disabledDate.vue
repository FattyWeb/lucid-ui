<template>
  <div class="center">
    <vs-date-picker placeholder="选择日期 每月1-3日禁止选择"
                    :disabledDate="disabledDate"
                    v-model="date">
    </vs-date-picker>
  </div>
</template>
<script>
export default {
  data:() => ({
    date: null,
    disabledDate: (time) => {
      return time.getDate() in [1,2,3,4];
    }
  })
}
</script>
<style lang="stylus" scoped>
.center
  max-width 400px
  margin auto
</style>

