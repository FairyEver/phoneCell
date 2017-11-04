<template>
  <layout-tab :tab="['iPhone', 'iPad', '其它']">
    <template slot="tab0">
      <list :mode="'phone'" :title="`iPhone价目表 ${updateDate}更新`" :data="dataPhone"></list>
    </template>
    <template slot="tab1">
      <list :mode="'pad'" :title="`iPad价目表 ${updateDate}更新`" :data="dataPad"></list>
    </template>
    <template slot="tab2">
      <div class="empty">
        <i class="weui-icon-info weui-icon_msg"></i>
        <p class="info">暂时主要经营 iPhone iPad 产品</p>
        <p class="info-sub">其它电子设备请单独咨询我们</p>
      </div>
    </template>
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
      dataMain: dataMain.map((e, index) => {
        e.id = index
        return e
      }),
      updateDate
    }
  },
  computed: {
    dataPhone () {
      return this.dataMain.filter(e => e.type === 'iPhone').map(e => {
        e.title = 'iPhone ' + this.$root.modelMaker(e.model)
        e.subtitle = e.color + '色 ' + e.disk + 'GB'
        return e
      })
    },
    dataPad () {
      return this.dataMain.filter(e => e.type === 'iPad').map(e => {
        e.title = 'iPad ' + this.$root.modelMaker(e.model)
        e.subtitle = e.color + '色 ' + e.disk + 'GB'
        return e
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.empty{
  height: 100vw;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .info{
    margin-top: 20px;
    font-size: 14px;
  }
  .info-sub{
    font-size: 10px;
  }
}
</style>

