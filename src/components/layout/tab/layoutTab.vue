<template>
  <div class="weui-tab">
    <div class="weui-navbar">
      <div
        v-for="(item, index) in tab"
        :key="index"
        class="weui-navbar__item"
        :class="{'weui-bar__item_on':classActive(index)}"
        @click="activeThis(index)">
        {{item}}
      </div>
    </div>
    <div class="weui-tab__panel">
      <div
        v-for="(item, index) in tab"
        :key="item.value"
        v-show="classActive(index)">
        <slot :name="'tab' + index">
          这是第{{index}}个tab的内容
        </slot>
      </div>
    </div>
    <img class="footerLogo" src="/static/logo/1.png">
  </div>
</template>

<script>
export default {
  props: {
    tab: {
      default: () => ['name1', 'name2', 'name3']
    }
  },
  data () {
    return {
      tabActive: 0
    }
  },
  methods: {
    classActive (value) {
      return value === this.tabActive
    },
    activeThis (value) {
      this.tabActive = value
    }
  }
}
</script>

<style lang="scss" scoped>
.footerLogo{
  display: block;
  max-width: 200px;
  margin: 40px auto;
}
</style>


