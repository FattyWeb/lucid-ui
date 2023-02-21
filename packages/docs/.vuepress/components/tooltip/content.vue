<template>
  <div class="center">
    <vs-tooltip>
      <vs-button gradient>
        什么是Lucid?
      </vs-button>
      <template #tooltip>
        <div class="content-tooltip">
          <h4>
            什么是Lucid?
          </h4>
          <p>
            Lucid 是一个基于vue3的 ui组件库
          </p>
        </div>
      </template>
    </vs-tooltip>
    <vs-tooltip bottom shadow not-hover v-model="activeTooltip1">
      <vs-button danger @click="activeTooltip1=!activeTooltip1">
        点击删除用户
      </vs-button>
      <template #tooltip>
        <div class="content-tooltip">
          <h4 class="center">
            确认
          </h4>
          <p>
            确定要删除此用户吗? 删除后数据不可恢复
          </p>
          <footer>
            <vs-button @click="activeTooltip1=false" danger block>
              删除
            </vs-button>
            <vs-button @click="activeTooltip1=false" transparent dark block>
              取消
            </vs-button>
          </footer>
        </div>
      </template>
    </vs-tooltip>
    <vs-tooltip shadow interactivity>
      <vs-avatar>
        <img src="/avatars/avatar-5.png" alt="">
      </vs-avatar>
      <template #tooltip>
        <div class="content-tooltip">
          <div class="body">
            <div class="text">
                已完成任务
              <span>
              89
              </span>
            </div>
            <vs-avatar circle size="80" @click="activeTooltip1=!activeTooltip1">
              <img src="/avatars/avatar-5.png" alt="">
            </vs-avatar>
            <div class="text">
                未完成任务
              <span>
              8
              </span>
            </div>
          </div>
          <footer>
            <vs-button circle icon border>
              <i class='bx bxs-share-alt'></i>
            </vs-button>
            <vs-button circle>
              发送信息
            </vs-button>
            <vs-button circle icon border>
              <i class='bx bx-like' ></i>
            </vs-button>
          </footer>
        </div>
      </template>
    </vs-tooltip>
  </div>
</template>
<script>
export default {
  data:() => ({
    activeTooltip1: false
  })
}
</script>
<style lang="stylus">
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")

.content-tooltip
  .body
    display flex
    align-items flex-start
    justify-content center
    .vs-avatar-content
      margin-top -30px
      border 3px solid getVar('theme-layout')
      box-shadow 0px 4px 15px 0px rgba(0,0,0,.1)
    .text
      display flex
      align-items center
      justify-content center
      flex-direction column
      font-size .55rem
      padding 10px
      font-weight normal
      span
        font-weight bold
        font-size .7rem
  footer
    display flex
    align-items center
    justify-content center
  h4
    padding 8px
    margin 0px
    text-align left
  p
    text-align left
    padding 0px
    margin 0px
    line-height 1rem
    padding-bottom 5px
    padding-left 8px
</style>
