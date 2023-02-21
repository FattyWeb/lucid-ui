<template>
  <div class="center con-selects">
    <vs-select
      label="分组"
      placeholder="分组"
      v-model="value1"
    >
      <vs-option-group>
        <template v-slot:title>
          Vuejs
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
      </vs-option-group>
      <vs-option-group>
        <template v-slot:title>
          Others
        </template>
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
      </vs-option-group>
    </vs-select>

    <vs-select
      label="分组筛选"
      filter
      placeholder="筛选"
      v-model="value2"
    >
      <vs-option-group>
        <template v-slot:title>
          Vuejs
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
      </vs-option-group>
      <vs-option-group>
        <template v-slot:title>
          Others
        </template>
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
      </vs-option-group>
    </vs-select>

    <vs-select
      label="分组多选筛选"
      filter
      multiple
      placeholder="分组多选筛选"
      v-model="value3"
    >
      <vs-option-group>
        <template v-slot:title>
          Vuejs
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
      </vs-option-group>
      <vs-option-group>
        <template v-slot:title>
          Others
        </template>
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
      </vs-option-group>
    </vs-select>
  </div>
</template>
<script>
export default {
  data:() => ({
    value1: ['3'],
    value2: ['4'],
    value3: ['1'],
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
