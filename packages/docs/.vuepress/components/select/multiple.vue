<template>
  <div class="center con-selects">
    <vs-select
      label="多选"
      multiple
      danger
      placeholder="搜索过滤"
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
      label="多选 搜索过滤"
      filter
      multiple
      placeholder="多选 搜索过滤"
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

    <vs-select
      label="多选 折叠隐藏"
      filter
      multiple
      collapse-chips
      placeholder="多选 折叠隐藏"
      v-model="value3"
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
    value: ['1', '2', '3'],
    value2: ['4',],
    value3: ['1', '4', '5', '6'],
  })
}
</script>
<style scoped lang="stylus">
.con-selects
  .vs-select-content
    margin 20px 10px
    max-width calc(40% - 20px)

@media ( max-width: 500px )
  .con-selects
    .vs-select-content
      max-width 100%
</style>
