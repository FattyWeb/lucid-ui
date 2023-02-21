<template>
  <div class="center content-inputs">
    <vs-input
      label="姓名"
      v-model="value"
      placeholder="尤雨溪"
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
