<template>
    <nav
        class="fixed top-0 left-0 z-50 w-full flex justify-between items-center px-12 py-6 bg-white/60 backdrop-blur shadow-sm">
        <div class="flex items-center text-2xl font-bold text-blue-600 cursor-pointer" @click="$router.push('/')">
            <div class="w-10 h-10 rounded-full bg-gray-200 mr-2 overflow-hidden">
                <img :src="Avatar" alt="头像" class="w-full h-full object-cover" />
            </div>
            H.Jibo
        </div>

        <ul class="flex gap-10 text-gray-600 font-medium">
            <li v-for="item in navItems" :key="item.path" @click="go(item.path)" :class="[
            'cursor-pointer transition',
            route.path === item.path ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'
        ]">
                {{ item.label }}
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Avatar from '@/assets/img/avatar.jpg'

const emit = defineEmits(['toggleContact'])

const router = useRouter()
const route = useRoute()

const navItems = ref([
    { path: '/home', label: '首页' },
    { path: '/work', label: '作品' },
    { path: '/blog', label: '博客' },
    { path: '/contact', label: '联系' }
])

const go = (path: string) => {
    if (path == '/contact') {
        emit('toggleContact')
        return
    }
    if (route.path !== path) router.push(path)
}
</script>

<style scoped lang="scss">
@media (max-width: 768px) {
    nav {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 0;
    }

    ul {
        gap: 1.5rem;
    }
}
</style>
