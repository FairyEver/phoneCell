<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd">{{title}}</div>
    <div class="weui-panel__bd">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="weui-media-box weui-media-box_appmsg"
        @click="detail(item.id)">
        <div class="weui-media-box__hd">
          <phone v-if="mode === 'phone'" :data="item" :size="picSize"></phone>
          <pad v-if="mode === 'pad'" :data="item" :size="picSize"></pad>
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">{{item.title}}</h4>
          <p class="weui-media-box__desc" style="font-size:10px;">{{item.subtitle}}</p>
          <p class="weui-media-box__desc price-line">
            <span class="price-me">{{item.priceMe}}元</span>
            <span class="price-offical">官网{{item.priceOffical}}</span>
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="weui-panel__ft">
      <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">查看更多</div>
        <span class="weui-cell__ft"></span>
      </a>
    </div> -->
  </div>
</template>

<script>
import phone from '@/components/phone/phone.vue'
import pad from '@/components/pad/pad.vue'
export default {
  components: {
    phone,
    pad
  },
  props: {
    title: {
      default: '列表'
    },
    data: {
      default: () => []
    },
    mode: {
      default: 'phone'
    }
  },
  data () {
    return {
      picSize: {
        height: 60,
        width: 60
      }
    }
  },
  methods: {
    detail (id) {
      this.$router.push({
        name: 'detail',
        query: {
          id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.price-line{
  margin-top: 6px;
}
.price-me{
  color: #FF3000;
  font-weight: bold;
}
.price-offical{
  color: #DADADA;
}
</style>

