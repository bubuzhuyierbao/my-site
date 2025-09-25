<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <div v-if="Component" style="display: contents">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
// 暂时不需要导入任何 Vue 函数
</script>

<script lang="ts">
export default {
  name: 'MainLayout'
}
</script>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
