<template>
  <div class="layout_container">
    <!-- 内容展示区 -->
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入内容路由组件
import Main from './main/index.vue'

//引入路由组件
// import { useRoute } from 'vue-router'
// let $route = useRoute()
</script>

<style scoped lang="scss">
@use '@/styles/variable.scss' as *;

.layout_container {
  width: 100%;
  height: 100vh;
  background-color: $base-layout-background;
  .layout_main {
    position: absolute;

    padding: 20px;
    transition: all 0.3s;
    // background-color: #aaa;
  }
}
</style>
