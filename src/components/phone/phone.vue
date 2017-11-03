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
    pathBase: {
      default: '/static/apple/'
    }
  },
  data () {
    return {
      // 注意 iPhone8的 深空灰 叫 spgray
      color: [
        {ch: '深空灰', en: 'gray'},
        {ch: '银', en: 'silver'},
        {ch: '金', en: 'gold'},
        {ch: '玫瑰金', en: 'rosegold'},
        {ch: '黑', en: 'black'},
        {ch: '亮黑', en: 'jetblack'}
      ],
      date: [
        {model: '-x', date: '2017'},
        {model: '6s', date: '2015'},
        {model: '6s-plus', date: '2015'},
        {model: '7', date: '2016'},
        {model: '7-plus', date: '2016'},
        {model: '8', date: '2017'},
        {model: '8-plus', date: '2017'},
        {model: 'se', date: '2016'}
      ]
    }
  },
  computed: {
    urlMaker () {
      // 生成图片壁纸
      let color = this.color.find(e => e.ch === this.data.color).en
      if (((this.data.model === '8') || (this.data.model === '8-plus')) && (this.data.color === '深空灰')) {
        color = 'spgray'
      }
      return this.pathBase +
        'iphone' +
        this.data.model +
        '-' +
        color +
        '-select' +
        '-' +
        this.date.find(e => e.model === this.data.model).date +
        '_AV1.png'
    },
    bodyStyle () {
      // 外层容器样式
      return {
        height: this.size.height + 'px',
        width: this.size.width + 'px'
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

