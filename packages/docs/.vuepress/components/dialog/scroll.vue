<template>
  <div class="center">
    <vs-button shadow @click="active=!active">
      打开对话框
    </vs-button>
    <vs-dialog scroll overflow-hidden not-close auto-width v-model="active">
      <template #header>
        <h3>
          简介
        </h3>
      </template>
      <div class="con-content-scroll">
        <h4>
          什么是 Lucid?
        </h4>
        <p>
          Lucid是一个基于Vuejs3.x创建的UI组件框架，用于轻松的创建项目，具有独特而精美的风格。Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用

          我们致力于通过提供基于整体性创建的组件、独立定制的组件和易于实现的组件来简化开发者的工作，因此我们想使框架极具创造力，但我们不会忽视每个项目在视觉上和生态系统上的差异点

          Lucid没有基于物料风格(Material Design)，已经有很多使用类似设计的框架(quasar、vuetify)，我们不想再成为这些框架中的一员，除了我们喜欢创造和设计新的体验，并用新的元素或细节给您带来惊喜之外， 我们会通过提高视觉上的自由度来实现。
        </p>

        <h4>
          为什么选择 Lucid?
        </h4>

        <p>
          Lucid 是一个基于vuejs3.x的全新框架，这意味着我们与世界上最流行的javascript框架之一和一个巨大的社区携手并进，我们有清晰地文档来帮助您创建项目。
          <br>
          <br>
          - Lucid 与许多框架不同，它是从零开始设计的，我们没有遵循任何固定的设计思想，这是一件很棒的事情，因为你的项目将是独一无二的。

          <br>
          <br>
          - 我们专注于快速轻松地创建项目，提供一条美丽的视觉体验，但同时不忽略开发人员的个性化和独立性。

          <br>
          <br>
          - Lucid 使用本地css变量进行更好的定制和更改，例如更改为深色主题或使用少量的javascript代码更改整个应用程序的主颜色
          <br>
          <br>

          - Lucid 是一款具有强大视觉冲击力的框架，在设计方面一直追随主流趋势和理念。
          <br>
          <br>

          - 一个开源社区，用于创建、改进和更正任何组件或功能A
          <br>
          <br>

          - 完全的独立组件，避免导入不必要的代码。
          <br>

          <br>

          - 更多功能 敬请期待。
        </p>
      </div>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: false,
    input1: '',
    input2: '',
    checkbox1: false
  })
}
</script>
<style lang="stylus">
getColor(vsColor, alpha = 1)
    unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.con-content-scroll
  p
    margin 20px 0px
    position relative
    display block
    font-size .9rem
    width 100%

</style>
