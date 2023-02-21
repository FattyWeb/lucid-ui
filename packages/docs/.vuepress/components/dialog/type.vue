<template>
  <div class="center">
    <vs-button @click="active=!active">
      提示
    </vs-button>
    <vs-button flat @click="active2=!active2">
      确认
    </vs-button>
    <vs-button border @click="active3=!active3">
      提示输入
    </vs-button>

    <vs-dialog width="550px" not-center v-model="active">
      <template #header>
        <h4 class="not-margin">
          欢迎使用 <b>Lucid</b>
        </h4>
      </template>
      <div class="con-content">
        <p>
          Lucid 是一个基于vuejs3.x的全新框架，这意味着我们与世界上最流行的javascript框架之一和一个巨大的社区携手并进，我们有清晰地文档来帮助您创建项目。
        </p>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button @click="active=false" transparent>
            确认
          </vs-button>
        </div>
      </template>
    </vs-dialog>

    <vs-dialog width="550px" not-center v-model="active2">
      <template #header>
        <h4 class="not-margin">
          欢迎使用 <b>Lucid</b>
        </h4>
      </template>
      <div class="con-content">
        <p>
          Lucid 是一个基于vuejs3.x的全新框架，这意味着我们与世界上最流行的javascript框架之一和一个巨大的社区携手并进，我们有清晰地文档来帮助您创建项目。
        </p>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button @click="active2=false" transparent>
            确认
          </vs-button>
          <vs-button @click="active2=false" dark transparent>
            取消
          </vs-button>
        </div>
      </template>
    </vs-dialog>

    <vs-dialog width="300px" not-center v-model="active3">
      <template #header>
        <h4 class="not-margin">
          欢迎 请输入您的 <b>姓名</b>
        </h4>
      </template>
      <div class="con-content">
        <vs-input v-model="input1" placeholder="姓名"></vs-input>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button @click="active3 = false" transparent>
            确认
          </vs-button>
          <vs-button @click="active3 = false" dark transparent>
            取消
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: false,
    active2: false,
    active3: false,
    input1: '',
  })
}
</script>
<style lang="stylus">
getColor(vsColor, alpha = 1)
    unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.con-footer
  display flex
  align-items center
  justify-content flex-end
  .vs-button
    margin 0px
    .vs-button__content
      padding 10px 30px
    ~ .vs-button
      margin-left 10px
.not-margin
  margin 0px
  font-weight normal
  padding 10px
  padding-bottom 0px
.con-content
  width 100%
  p
    font-size .8rem
    padding 0px 10px
  .vs-checkbox-label
    font-size .8rem
  .vs-input-parent
    width 100%
  .vs-input-content
    margin 10px 0px
    width calc(100%)
    .vs-input
      width 100%
.footer-dialog
  display flex
  align-items center
  justify-content center
  flex-direction column
  width calc(100%)
  .new
    margin 0px
    margin-top 20px
    padding: 0px
    font-size .7rem
    a
      color getColor('primary') !important
      margin-left 6px
      &:hover
        text-decoration underline
  .vs-button
    margin 0px
</style>
