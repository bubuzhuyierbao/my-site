//user小仓库
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userName = ref('')

  const setUserName = (name: string) => {
    userName.value = name
  }

  const clearUserName = () => {
    userName.value = ''
  }

  return {
    userName,
    setUserName,
    clearUserName
  }
})
