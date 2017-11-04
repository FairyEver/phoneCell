<template>
  <div :style="bodyStyle">
    <img :style="imgStyle" :src="urlMaker">
  </div>
</template>

<script>
export default {
  props: {
    // 数据
    data: {
      default: () => {}
    },
    // 外层尺寸
    size: {
      default: () => ({
        height: 60,
        width: 60
      })
    },
    // 内边距
    padding: {
      default: 0
    },
    // 下面是关于生成壁纸的一些参数
    // 基础路径
    quality: {
      default: 'small'
    },
    pathBase: {
      default: 'static/apple/pad/'
    },
    av: {
      default: '1'
    }
  },
  data () {
    return {
      color: [
        {ch: '深空灰', en: 'gray'},
        {ch: '银', en: 'silver'},
        {ch: '金', en: 'gold'},
        {ch: '玫瑰金', en: 'rosegold'}
      ]
    }
  },
  computed: {
    urlMaker () {
      // 生成图片壁纸
      // '/static/apple/pad/small/ipad-pro-10in-gold.png'
      let model = '-' + this.data.model
      if (this.data.model === 'ipad') {
        model = ''
      }
      return this.pathBase +
        this.quality +
        '/ipad' +
        model +
        '-' +
        this.color.find(e => e.ch === this.data.color).en +
        '.png'
    },
    bodyStyle () {
      // 外层容器样式
      return {
        height: this.size.height + 'px',
        width: this.size.width + 'px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    imgStyle () {
      // 图片样式
      return {
        height: this.size.height - this.padding + 'px'
      }
    }
  }
}
</script>

