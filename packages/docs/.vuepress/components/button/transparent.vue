<template>
  <div class="center">
    <vs-button transparent :active="active == 0" @click="active = 0" >激活</vs-button>
    <vs-button transparent :active="active == 1" @click="active = 1" >默认</vs-button>
    <vs-button transparent disabled >禁用</vs-button>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: 0
  })
}
</script>
