<template>
  <div class="center">
    <vs-button border icon @click="openNotificationUser">
      用户组
    </vs-button>
    <vs-button border icon @click="openNotificationCookie">
      Cookie
    </vs-button>
    <vs-button border icon @click="openNotificationCall">
       呼叫
    </vs-button>
  </div>
</template>
<script>
import user from './user.vue'
import cookie from './cookie.vue'
import call from './call.vue'
import color from './color.vue'
import {markRaw} from "vue";

export default {
  methods: {
    openNotificationCookie() {
      const noti = this.$vs.notification({
        duration: 'none',
        content: cookie,
      })
    },
    openNotificationUser() {
      const noti = this.$vs.notification({
        duration: 'none',
        width: 'auto',
        content: markRaw(color),
      })
    },
    openNotificationCall() {
      const noti = this.$vs.notification({
        duration: 'none',
        width: 'auto',
        content: call,
        notPadding: true,
      })
    }
  }
}
</script>
