<template>
  <div class="center con-selects">
    <vs-select
      filter
      placeholder="过滤搜索"
      v-model="value"
    >
      <vs-option label="Lucid" value="1">
        Lucid
      </vs-option>
      <vs-option label="Vue" value="2">
        Vue
      </vs-option>
      <vs-option label="Javascript" value="3">
        Javascript
      </vs-option>
      <vs-option label="Sass" value="4">
        Sass
      </vs-option>
      <vs-option label="Typescript" value="5">
        Typescript
      </vs-option>
      <vs-option label="Webpack" value="6">
        Webpack
      </vs-option>
      <vs-option label="Nodejs" value="7">
        Nodejs
      </vs-option>
    </vs-select>
    <vs-select
      filter
      multiple
      placeholder="过滤搜索 多选"
      v-model="value2"
    >
      <vs-option label="Lucid" value="1">
        Lucid
      </vs-option>
      <vs-option label="Vue" value="2">
        Vue
      </vs-option>
      <vs-option label="Javascript" value="3">
        Javascript
      </vs-option>
      <vs-option label="Sass" value="4">
        Sass
      </vs-option>
      <vs-option label="Typescript" value="5">
        Typescript
      </vs-option>
      <vs-option label="Webpack" value="6">
        Webpack
      </vs-option>
      <vs-option label="Nodejs" value="7">
        Nodejs
      </vs-option>
    </vs-select>
  </div>
</template>
<script>
export default {
  data:() => ({
    value: '',
    value2: ''
  })
}
</script>
<style scoped lang="stylus">
.con-selects
  .vs-select-content
    margin 10px
    max-width calc(40% - 20px)

@media ( max-width: 500px )
  .con-selects
    .vs-select-content
      max-width 100%
</style>
