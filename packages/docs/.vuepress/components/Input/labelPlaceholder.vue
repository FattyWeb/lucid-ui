<template>
  <div class="center content-inputs">
    <vs-input
      label-placeholder="输入国籍"
      v-model="value"
    />
  </div>
</template>
<script>
export default {
  data:() => ({
    value: ''
  })
}
</script>
