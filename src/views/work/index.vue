<template>
  <div class="work-container">
    <!-- 页头 -->
    <section class="pt-32 pb-16 px-6 text-center">
      <h1 class="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
        🎨
        <span class="text-blue-600">我的作品</span>
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        这里展示了我的部分项目作品，涵盖 Web 应用、可视化、移动端等多个领域
      </p>
    </section>

    <!-- 分类筛选 -->
    <div class="flex justify-center gap-4 px-6 mb-12 flex-wrap">
      <button
        v-for="cat in categories"
        :key="cat.id"
        @click="activeCategory = cat.id"
        :class="[
          'px-6 py-2 rounded-full font-medium transition',
          activeCategory === cat.id
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-white text-gray-600 hover:bg-blue-50'
        ]"
      >
        {{ cat.name }}
      </button>
    </div>

    <!-- 项目网格 -->
    <section class="flex-1 px-6 md:px-12 lg:px-24 pb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <!-- 项目图片 -->
          <div class="relative h-48 overflow-hidden bg-gray-100">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <!-- 项目信息 -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- 技术标签 -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tag, idx) in project.tags"
                :key="idx"
                class="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
              >
                {{ tag }}
              </span>
            </div>

            <!-- 操作按钮 -->
            <div class="flex gap-3">
              <a
                :href="project.demo"
                class="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
              >
                在线预览
              </a>
              <a
                :href="project.github"
                class="flex-1 text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-sm font-medium"
              >
                源码
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'

  const activeCategory = ref('all')

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'web', name: 'Web 应用' },
    { id: 'visual', name: '可视化' },
    { id: 'mobile', name: '移动端' },
    { id: 'tool', name: '工具库' }
  ]

  const projects = [
    {
      id: 1,
      title: '知识图谱可视化平台',
      category: 'visual',
      description: '基于 G6 的企业级知识图谱可视化系统，支持大规模节点渲染与交互',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tags: ['Vue 3', 'G6', 'TypeScript'],
      demo: '#',
      github: '#'
    },
    {
      id: 2,
      title: '实时数据看板',
      category: 'web',
      description: '企业运营数据实时监控平台，支持自定义组件与数据源配置',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      tags: ['Vue 3', 'ECharts', 'WebSocket'],
      demo: '#',
      github: '#'
    },
    {
      id: 3,
      title: '智能表单生成器',
      category: 'tool',
      description: '低代码表单设计工具，拖拽即可生成复杂表单，支持多种验证规则',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
      tags: ['Vue 3', 'Element Plus', 'Vite'],
      demo: '#',
      github: '#'
    },
    {
      id: 4,
      title: '跨平台笔记应用',
      category: 'mobile',
      description: 'uni-app 开发的多端笔记工具，支持 Markdown 与富文本编辑',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop',
      tags: ['uni-app', 'Vue 3', 'Pinia'],
      demo: '#',
      github: '#'
    },
    {
      id: 5,
      title: '流程图编辑器',
      category: 'visual',
      description: '在线流程图绘制工具，支持导出 SVG/PNG，具备丰富的节点库',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
      tags: ['Vue 3', 'Canvas', 'TypeScript'],
      demo: '#',
      github: '#'
    },
    {
      id: 6,
      title: '组件库文档站',
      category: 'web',
      description: '基于 VitePress 的组件文档系统，支持代码高亮与在线预览',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
      tags: ['VitePress', 'Vue 3', 'Markdown'],
      demo: '#',
      github: '#'
    }
  ]

  const filteredProjects = computed(() => {
    if (activeCategory.value === 'all') {
      return projects
    }
    return projects.filter(p => p.category === activeCategory.value)
  })
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
