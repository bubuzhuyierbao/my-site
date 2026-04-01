<template>
    <div
        class="contact_panel fixed right-8 top-[90px] w-[300px] bg-white shadow-lg rounded-2xl p-5 border border-gray-200 z-[60]">
        <div class="arrow"></div>
        <h2 class="text-lg font-semibold text-blue-600 mb-2">联系我</h2>

        <!-- 邮箱 -->
        <div class="flex items-center justify-between group mb-1">
            <p class="text-gray-700">📧 邮箱：{{ email }}</p>
            <el-icon class="text-gray-500 cursor-pointer opacity-0 group-hover:opacity-100 transition"
                @click="copy(email)">
                <CopyDocument />
            </el-icon>
        </div>

        <!-- 微信公众号 -->
        <!-- 微信公众号（带 Popover） -->
        <el-popover placement="left" trigger="hover" width="200" :offset="22">
            <!-- Popover 内容：放你的公众号二维码 -->
            <div class="w-full flex flex-col items-center">
                <span class="mb-3">记账小程序</span>
                <img :src="qrCode" alt="小程序二维码" class="w-40 h-40 object-cover rounded-lg" />
            </div>

            <template #reference>
                <div class="flex items-center justify-between group mb-1 cursor-pointer">
                    <p class="text-gray-700">💬 微信公众号：{{ wechat }}</p>
                    <el-icon class="text-gray-500 cursor-pointer opacity-0 group-hover:opacity-100 transition"
                        @click.stop="copy(wechat)">
                        <CopyDocument />
                    </el-icon>
                </div>
            </template>
        </el-popover>

        <!-- 个人网站 -->
        <div class="flex items-center justify-between group mb-1">
            <a :href="`https://${website}`" target="_blank" class="text-gray-700 hover:text-blue-600 transition">
                🌐 个人网站：{{ website }}
            </a>

            <el-icon class="text-gray-500 cursor-pointer opacity-0 group-hover:opacity-100 transition"
                @click="copy(website)">
                <CopyDocument />
            </el-icon>
        </div>

        <!-- 坐标 -->
        <p class="text-gray-700 mt-1">📍 坐标：广州</p>
    </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue'
import qrCode from '@/assets/img/qrCode.jpg'
import { CopyDocument } from '@element-plus/icons-vue'

const email = ref('bubuzhu12@163.com')
const wechat = ref('bbz1288xe')
const website = ref('12bubu.xyz')

const panelRef = (ref < HTMLElement) | (null > null)

const copy = async text => {
    await navigator.clipboard.writeText(text)
    ElMessage.success('复制成功！')
}

defineExpose({
    panelRef
})
</script>

<style scoped lang="scss">
.contact_panel {
    .arrow {
        position: absolute;
        top: -10px;
        right: 25px;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 10px solid white;
        /* 与面板背景一致 */
        filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.1));
    }
}
</style>
