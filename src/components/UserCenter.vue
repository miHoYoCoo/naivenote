<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
  <n-dropdown :options="options">
    <n-button>用户资料</n-button>
  </n-dropdown>
</template>

<script lang="ts">
// import { Options,Vue} from 'vue-class-component'
import { RouterLink } from 'vue-router'
import { defineComponent, h, ref } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import type { Component } from 'vue'
import {
  BookOutline as BookIcon,
  BookOutline as PersonIcon,
  BookOutline as WineIcon,
  BookOutline as UserIcon,
  BookOutline as EditIcon,
  BookOutline as LogoutIcon
} from '@vicons/ionicons-v5'
function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const renderIcon2 = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/'
          }
        },
        { default: () => '首页' }
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/about'
          }
        },
        { default: () => '笔记中心' }
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: '更多>',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '笔记类型',
        key: 'people',
        children: [
          {
            label: 'Vue.js学习',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: 'NaiveUI学习',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: 'SpringBoot学习',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: 'MyBatis学习',
        key: 'food',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      }
    ]
  }
]
// @Options({
//
// }) // @component装饰器一个作用，用来标识这个Typescript类是一个vue组件,内有包含属性

export default defineComponent({
  setup () {
    return {
      activeKey: ref<string | null>(
        null),
      menuOptions,
      options: [
        {
          label: '用户中心',
          key: 'profile',
          icon: renderIcon2(UserIcon)
        },
        {
          label: '编辑用户资料',
          key: 'editProfile',
          icon: renderIcon2(EditIcon)
        },
        {
          label: '退出登录',
          key: 'logout',
          icon: renderIcon2(LogoutIcon)
        }
      ]
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
