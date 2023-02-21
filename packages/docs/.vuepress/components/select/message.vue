<template>
  <div class="center con-selects">
    <vs-select
      placeholder="Success"
      v-model="value1"
    >
      <template #message-success>
        检验通过
      </template>
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
      placeholder="Warn"
      v-model="value2"
    >
      <template #message-danger>
        必填字段
      </template>
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
      placeholder="Danger"
      v-model="value3"
    >
      <template #message-warn>
        请选择技术选型
      </template>
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
    value1: '',
    value2: '',
    value3: '',
  })
}
</script>
<style scoped lang="stylus">
.con-selects
  align-items flex-start
  .vs-select-content
    margin 10px
</style>
