<template>
  <div class="blog-container">
    <!-- 页头 -->
    <section class="pt-32 pb-16 px-6 text-center">
      <h1 class="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
        ✍️
        <span class="text-blue-600">我的博客</span>
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        这里记录了我在前端开发、可视化与项目实践中的思考与经验分享
      </p>
    </section>

    <!-- 博客文章列表 -->
    <section class="flex-1 w-full px-8 md:px-24 pb-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col overflow-hidden"
        >
          <img :src="post.cover" :alt="post.title" class="w-full h-48 object-cover" />
          <div class="p-6 flex flex-col flex-1">
            <h2 class="text-xl font-semibold mb-2 text-gray-900 line-clamp-2">
              {{ post.title }}
            </h2>
            <p class="text-gray-600 mb-4 text-sm line-clamp-3 flex-1">
              {{ post.description }}
            </p>
            <div class="mt-auto flex justify-between items-center text-sm text-gray-500">
              <span>{{ post.date }}</span>
              <a :href="post.link" class="text-blue-600 hover:text-blue-800 font-medium">
                阅读更多 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  const posts = [
    {
      title: '用 Vue 3 + TypeScript 构建现代化组件体系',
      description:
        '本文介绍了如何在 Vue 3 中使用 Composition API 与 TypeScript 构建高可维护的组件体系结构。',
      date: '2025-10-20',
      cover:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=60',
      link: '#'
    },
    {
      title: 'AntV G6 图谱实践：从概念到交互优化',
      description: '分享如何利用 G6 实现动态推理图谱，包括节点自适应布局、事件响应与性能优化技巧。',
      date: '2025-09-15',
      cover:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60',
      link: '#'
    },
    {
      title: 'Pinia 状态管理最佳实践',
      description: '探索如何通过 Pinia 构建更清晰的全局状态管理方案，支持 token 刷新与数据持久化。',
      date: '2025-08-30',
      cover:
        'https://images.unsplash.com/photo-1526378722325-38d0e4c22e9a?auto=format&fit=crop&w=900&q=60',
      link: '#'
    },
    {
      title: 'Nuxt 部署到 Vercel 全流程指南',
      description: '从项目初始化、构建优化到自动化部署，详解 Nuxt 个人博客的上线流程。',
      date: '2025-07-21',
      cover:
        'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=900&q=60',
      link: '#'
    },
    {
      title: 'uni-app 小程序记账功能设计',
      description: '结合腾讯云云开发，实现记账小程序的分类汇总、分页加载与数据缓存机制。',
      date: '2025-06-10',
      cover:
        'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=60',
      link: '#'
    },
    {
      title: '用 Tailwind 打造响应式前端布局',
      description: '介绍如何使用 Tailwind CSS 快速实现响应式排版与现代视觉效果。',
      date: '2025-05-12',
      cover:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=60',
      link: '#'
    }
  ]
</script>

<style scoped lang="scss">
  // 响应式与细节优化
  .blog-container {
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  @media (max-width: 768px) {
    section {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
</style>
