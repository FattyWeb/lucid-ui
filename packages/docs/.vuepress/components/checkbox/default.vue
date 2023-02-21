<template>
  <div class="center">
    <vs-checkbox v-model="option">
      选项
    </vs-checkbox>
  </div>
</template>
<script>
export default {
  data:() => ({
    option: true,
  })
}
</script>
