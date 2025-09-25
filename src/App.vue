<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- 路由出口：当前匹配到的页面组件会显示在这里 -->
    <router-view />

    <!-- 你也可以在这里加全局 footer 等 -->
  </div>
</template>

<script setup lang="ts">
// App.vue 本身一般不写逻辑，只写全局布局
</script>

<style scoped lang="scss"></style>
