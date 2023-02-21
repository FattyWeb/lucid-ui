<template>
  <div class="center">
    <vs-alert v-model:page="page" >
      <template #title>
        Lucid 组件库
      </template>

      <template #page-1>
        分页 1 - 这个页面是一个插槽，在这里你可以添加文本，HTML元素或组件。
      </template>

      <template #page-2>
        分页 2 - 在另一个页面上，你也可以放任何你需要的东西，它是动态的，所以你可以添加你需要的页面。
      </template>

      <template #page-3>
        分页 3 - 这是例子的最后一页。
      </template>
    </vs-alert>
  </div>
</template>
<script>
export default {
  data:() => ({
    page: 1
  })
}
</script>
