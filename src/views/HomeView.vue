<template>
  <div class="home">
    <div class="menuTop">
      <img alt="Welcome To NaiveNote" src="../assets/logo1.png" style="height: 80px;width: 272.5px" >
      <div class="center-search-container">
        <div class="center-search_bar">
          <form id="nav-search_form" style="border-radius: 8px">
            <div class="nav-search-container" style="display: inline-block">
              <input style="border-radius: 8px">
            </div>
            <div class="nav-search-btn" style="display: inline-block">
                <button style="font-size: 12px ;box-sizing: border-box" >搜索</button>
            </div>

          </form>
        </div>

      </div>
      <HelloWorld></HelloWorld>
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
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class HomeView extends Vue {}
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
