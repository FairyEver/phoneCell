<template>
  <layout-tab :tab="['iPhone', 'iPad', '其它']">
    <template slot="tab0">
      <list :title="`iPhone价目表 ${updateDate}更新`" :data="dataPhone"></list>
    </template>
    <template slot="tab1"></template>
    <template slot="tab2"></template>
  </layout-tab>
</template>

<script>
// 组件
import layoutTab from '@/components/layout/tab/layoutTab.vue'
import list from '@/components/list/1/list1.vue'
// 数据
import dataMain from '@/data/main.js'
import updateDate from '@/data/date.js'

export default {
  components: {
    layoutTab,
    list
  },
  data () {
    return {
      dataMain,
      updateDate
    }
  },
  computed: {
    dataPhone () {
      return this.dataMain.filter(e => e.type === 'iPhone').map(e => {
        let model = e.model
        if (model === 'se') {
          model = 'SE'
        }
        if (model === '-x') {
          model = 'X'
        }
        if (model.split('-').length === 2) {
          model = model.split('-').join(' ')
        }
        e.title = 'iPhone ' + model
        e.subtitle = e.color + '色 ' + e.disk + 'GB'
        e.subtitle2 = e.priceMe
        return e
      })
    }
  },
  mounted () {
    console.log(this.dataPhone)
  }
}
</script>
