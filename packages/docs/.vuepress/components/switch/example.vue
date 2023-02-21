
<template>
  <div class="center con-switch">
    <ul>
      <li>
        <p>
          邮件信息
        </p>
        <vs-switch v-model="active1" />
      </li>
      <li>
        <p>
          切换主题
        </p>
        <vs-switch v-model="active2">
          <template #circle>
              <i v-if="!active2" class='bx bxs-moon' ></i>
              <i v-else class='bx bxs-sun' ></i>
          </template>
        </vs-switch>
      </li>
      <li>
        <p>
          桌面通知
        </p>
        <vs-switch v-model="active3">
          <i class='bx bxs-message' ></i>
        </vs-switch>
      </li>
      <li>
        <p>
          用户类型
        </p>
        <vs-switch v-model="active4">
          <template #on>
            管理员
          </template>
          <template #off>
            默认用户
          </template>
        </vs-switch>
      </li>
      <li>
        <p>
          是否允许
        </p>
        <vs-switch success v-model="active5">
          <template #off>
              <i class='bx bx-x' ></i>
          </template>
          <template #on>
              <i class='bx bx-check' ></i>
          </template>
        </vs-switch>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data:() => ({
    active1: true,
    active2: false,
    active3: false,
    active4: true,
    active5: true,
  }),
}
</script>
<style lang="stylus" scoped>
.con-switch
  display flex
  align-items center
  justify-content center
  ul
    width 100%
    padding 0px
    li
      width 100%
      display flex
      align-items center
      justify-content space-between
      padding 0px
      p
        margin 0px
        font-size .85rem
  >>>.vs-switch
    margin 5px
</style>
