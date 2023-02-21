<template>
  <div class="center content-inputs">
    <vs-input loading v-model="value" placeholder="姓名" />
  </div>
</template>
<script>
export default {
  data:() => ({
    value: ''
  })
}
</script>
