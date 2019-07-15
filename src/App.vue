<template>
<div>
  <router-view></router-view>
  <FooterGuide/>
</div>
</template>

<script>
// 引入FooterGuide.vue组件
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components: {
    // 注册组件
    FooterGuide
  }
}
</script>

<style scoped>

</style>
