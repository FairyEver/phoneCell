<template>
  <div id="detail">
    <div class="header">
      <img class="logo" src="static/logo/1.png">
      <div class="back" @click="$router.push({name:'index'})">返回首页</div>
    </div>
    <div class="image">
      <phone v-if="params.type === 'iPhone'" :data="params" :size="picSize" :quality="quality"></phone>
      <pad v-if="params.type === 'iPad'" :data="params" :size="picSize" :quality="quality"></pad>
    </div>

    <!-- 文字介绍 -->
    <article class="weui-article">
      <h1>{{params.title}} {{params.subtitle}}</h1>
      <section style="margin-bottom:0px;">
        <h2 class="title">官网报价: 人民币{{params.priceOffical}}</h2>
        <h2 class="title">一木报价: 人民币{{params.priceMe}}</h2>
        <section style="margin-bottom:0px;">
          <!-- <h3>{{updateDate}} 数据更新</h3> -->
          <p style="margin-bottom:0px;">如果您对此机型感兴趣，请将此页截图发送给一木客服</p>
        </section>
      </section>
    </article>

    <list v-if="params.type === 'iPhone'" :mode="'phone'" :title="`所有 ${params.type} ${$root.modelMaker(params.model)}`" :data="dataPhone"></list>
    <list v-if="params.type === 'iPad'" :mode="'pad'" :title="`所有 ${params.type} ${$root.modelMaker(params.model)}`" :data="dataPad"></list>
    
  </div>
</template>

<script>
import phone from '@/components/phone/phone.vue'
import pad from '@/components/pad/pad.vue'
import list from '@/components/list/1/list1.vue'

import dataMain from '@/data/main.js'
import updateDate from '@/data/date.js'

export default {
  components: {
    phone,
    pad,
    list
  },
  data () {
    return {
      picSize: {
        height: 200,
        width: 200
      },
      quality: 'big',
      dataMain: dataMain.map((e, index) => {
        e.id = index
        return e
      }),
      updateDate
    }
  },
  computed: {
    params () {
      return this.dataMain.find(e => e.id === this.$route.query.id)
    },
    dataPhone () {
      return this.dataMain.filter(e => (e.type === 'iPhone') && (e.model === this.params.model)).map(e => {
        e.title = 'iPhone ' + this.$root.modelMaker(e.model)
        e.subtitle = e.color + '色 ' + e.disk + 'GB'
        return e
      })
    },
    dataPad () {
      return this.dataMain.filter(e => (e.type === 'iPad') && (e.model === this.params.model)).map(e => {
        e.title = 'iPad ' + this.$root.modelMaker(e.model)
        e.subtitle = e.color + '色 ' + e.disk + 'GB'
        return e
      })
    }
  },
  mounted () {
    console.log(this.params)
  }
}
</script>

<style lang="scss" scoped>
#detail{
  .header{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #E5E5E5;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .logo{
      height: 40px;
    }
    .back{
      position: absolute;
      left: 0px;
      top: 0px;
      padding: 0px 15px;
    }
  }
  .image{
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>


