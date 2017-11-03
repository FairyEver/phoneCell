<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd">{{title}}</div>
    <div class="weui-panel__bd">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd">
          <phone :data="item" :size="phoneSize"></phone>
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">{{item.title}}</h4>
          <p class="weui-media-box__desc">{{item.subtitle}}</p>
          <p class="weui-media-box__desc">{{item.subtitle2}}</p>
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
export default {
  components: {
    phone
  },
  props: {
    title: {
      default: '列表'
    },
    data: {
      default: () => []
    }
  },
  data () {
    return {
      phoneSize: {
        height: 60,
        width: 60
      }
    }
  }
}
</script>

