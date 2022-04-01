<template>
  <div class="home">
    <div class="menuTop">
      <img alt="Welcome To NaiveNote" src="../assets/logo1.png" style="height: 80px;width: 272.5px" >
      <UserCenter></UserCenter>
    </div>
    <n-carousel show-arrow autoplay>
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      >
    </n-carousel>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import UserCenter from '@/components/UserCenter.vue' // @ is an alias to /src

@Options({
  components: {
    UserCenter
  }
})
export default class AboutView extends Vue {}
</script>
<style scoped lang="scss">
div.home{
}
.menuTop{
  background-color: rgb(125, 231, 175);
  width: auto;
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content: space-between;
}
.n-carousel{
  margin: auto;
  width: 60%;
  height: 240px;
}
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
