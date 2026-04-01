<template>
  <div class="layout_container">
    <!-- 顶部导航栏 -->
    <div class="layout_nav">
      <NavBar @toggleContact="showContact = !showContact"></NavBar>
    </div>
    <!-- 联系折叠板 -->
    <transition name="slide-down">
      <InfoPanel v-if="showContact" ref="infoPanelRef" @close="showContact = false" />
    </transition>
    <div class="layout_main">
      <Main></Main>
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from './navbar/index.vue'
import Main from './main/index.vue'
import Footer from './footer/index.vue'
import InfoPanel from '@/components/InfoPanel/index.vue'

const showContact = ref(false)
const infoPanelRef = ref<{ panelRef: HTMLElement | null } | null>(null)

const panel = infoPanelRef.value?.panelRef

// 点击外部关闭面板
const handleClickOutside = (event: MouseEvent) => {
  if (!showContact.value) return

  const target = event.target as HTMLElement

  const navBar = document.querySelector('.layout_nav')

  // 如果点击的不是面板内部，也不是导航栏，则关闭面板
  if (panel && !panel.contains(target) && navBar && !navBar.contains(target)) {
    showContact.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
<style scoped lang="scss">
@use '@/styles/variable.scss' as *;

.layout_container {
  width: 100%;
  height: 100vh;
  background-color: $base-layout-background;

  .layout_main {
    position: absolute;
    width: 100%;
    transition: all 0.3s;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom right, #eff6ff, #ffffff, #dbeafe);
    color: #1f2937;
    overflow-x: hidden;
  }
}

/* 折叠板下拉动画 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
