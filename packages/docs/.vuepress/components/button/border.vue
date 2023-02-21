<template>
	<div class="center">
		<vs-button
      border
      :active="active == 0"
      @click="active = 0"
    >
			激活
		</vs-button>
		<vs-button
      border
      :active="active == 1"
      @click="active = 1"
    >
			默认
		</vs-button>
		<vs-button
      border
      disabled
    >
			禁用
		</vs-button>
	</div>
</template>
<script>
export default {
	data: () => ({
		active: 0,
	}),
}
</script>
<style lang="stylus">
  *
    box-sizing border-box !important
</style>
