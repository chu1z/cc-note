<template >
  <div class="cc-calendar">
    <div class="cc-calendar-week d-flex justify-content-around mb-2">
      <div
        class="cc-calendar-week-item"
        v-for="(item, index) in weekArr"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
    <div class="cc-calendar-day d-flex flex-wrap justify-content-around">
      <div
        class="cc-calendar-day-item"
        v-for="(item, index) in dayArr"
        :key="index"
        :class="item.disabled ? `disabled` : ``"
      >
        <!-- {{ item.value }} -->
      </div>
    </div>
    <!-- <div class="cc-calendar-tip" v-show="isShow" :style="tipStyleObj">
      {{ tip }}
    </div> -->
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from '@vue/runtime-core'
import { ref } from 'vue'

export default defineComponent({
  name: 'cc-calendar',
  setup() {
    // 获取这个月有多少天
    const getDays = (year: number, month: number) =>
      new Date(year, month, 0).getDate()

    // 获取这个月1号是星期几
    const getWeek = (year: number, month: number): number => {
      const now = new Date()
      now.setFullYear(year)
      now.setMonth(month - 1)
      now.setDate(1)
      return now.getDay()
    }

    const weekArr = ['日', '一', '二', '三', '四', '五', '六']

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getUTCMonth() + 1 // 1月份是0

    const dayArr: { value: number; disabled: boolean }[] = []

    const days = getDays(year, month)
    const week = getWeek(year, month)

    const lastDays = getDays(year, month - 1)

    for (let i = 1; i < days; i++) {
      dayArr.push({ value: i, disabled: false })
    }

    /* 将上个月要显示的天数加入days */
    for (let i = 0; i < week; i++) {
      dayArr.unshift({ value: lastDays - i, disabled: true })
    }
    /* 将下个月要显示的天数加入days */
    for (let i = 1; i <= 42 - days - week; i++) {
      dayArr.push({ value: i, disabled: true })
    }

    const isShow = ref(false)
    const tip = ref('')
    const tipStyleObj = reactive({
      left: '0',
      top: '0'
    })

    // const enter = (e: Event) => {
    //   const ele = e.target as HTMLElement
    //   console.log(e.target)
    //   if (ele.className === 'cc-calendar-day-item') {
    //     tip.value = '1 note on '
    //     tipStyleObj.left = ele.offsetLeft + 'px'
    //     tipStyleObj.top = ele.offsetTop + 'px'
    //     isShow.value = true
    //   }
    // }
    // const leave = (e: Event) => {
    //   const ele = e.target as HTMLElement
    //   console.log(e.target)
    //   if (ele.className === 'cc-calendar-day-item') {
    //     isShow.value = false
    //   }
    // }

    return { weekArr, dayArr, /* enter, leave, */ isShow, tipStyleObj, tip }
  }
})
</script>

<style>
.cc-calendar {
  position: relative;
}
.cc-calendar-day-item {
  display: inline-block;
  width: 25px;
  height: 25px;
  margin: 2.5px;
  background-color: #e0f3f8;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 5px;
  /* cursor: pointer; */
}
.disabled {
  background-color: rgb(239, 244, 245, 0.5);
}

.cc-calendar-tip {
  position: absolute;
  user-select: none;
}
</style>
