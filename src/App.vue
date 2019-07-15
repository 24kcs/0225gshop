<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter" />
  </div>
</template>

<script>
// 引入FooterGuide.vue组件
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
//引入api
import { reqAddress, reqCategory, reqShops } from "./api";
export default {
  name: "App",
  components: {
    // 注册组件
    FooterGuide
  },
  async mounted() {
    const result1 =await reqAddress("116.36867", "40.10038");
    const result2 =await reqCategory();
    const result3 =await reqShops("116.36867", "40.10038");
    console.log(result1)
    console.log(result2)
    console.log(result3)
  }
};
</script>

<style scoped>
</style>
