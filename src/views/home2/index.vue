<template>
  <div class="home-container">
    <!-- 主体内容 -->
    <section class="flex flex-col items-center justify-center flex-1 px-6 text-center pt-32">
      <img :src="Avatar" alt="avatar" class="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-white" />
      <h1 class="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
        👋 你好，我是
        <span class="text-blue-600">H.Jibo</span>
      </h1>
      <p class="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
        一名前端开发者，专注 Vue 前端、AI 应用与 Node.js 后端开发，致力于打造优雅、高性能的 Web 应用与可视化图谱设计。
      </p>

      <!-- <div class="flex flex-wrap justify-center gap-4">
        <span
          class="px-8 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          查看作品
        </span>
        <span
          class="px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
        >
          联系我
        </span>
      </div> -->
    </section>

    <!-- 技能模块 -->
    <section id="skills" class="w-full bg-white/70 py-10">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">💡 我的技能</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-10 md:px-24">
        <div v-for="(skill, index) in skills" :key="index"
          class="flex flex-col items-center justify-center bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <div class="text-4xl mb-3">{{ skill.icon }}</div>
          <div class="font-semibold text-gray-700">{{ skill.name }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from '@/assets/img/avatar.jpg'

const skills = ref([
  { name: 'Vue 3', icon: '🧩' },
  { name: 'TypeScript', icon: '🌀' },
  { name: 'Node.js', icon: '⚙️' },
  { name: 'Dify', icon: '🤖' },
  { name: 'G6 图谱', icon: '🌐' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'uni-app', icon: '📱' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Nuxt', icon: '🪄' },
  { name: 'Electron', icon: '🖥️' },
  // { name: 'Express', icon: '🚀' },
])
</script>

<style scoped lang="scss">
// 响应式调整
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }

  nav ul {
    gap: 1.5rem;
  }
}
</style>
