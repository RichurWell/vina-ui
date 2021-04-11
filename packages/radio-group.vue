<template>
    <div class="hm-radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'VnRadioGroup',
  props: {
    //   vn-radio-group  接收到了value值，将来还需要去触发我们当前组件的input事件
    // 我们现在是给vn-radio-group双向绑定了， 但是我们没有给radio双向绑定，radio组件怎么去操作radiogroup
    //  我们可以在radio中的created中获取this.$praent获取radio-group中的信息，但是这么做的风险是我们不能确定radio外面还有没有包裹其他组件，
    // 所以涉及到新的语法，  provide 与inject  祖孙之间的组件通信

    // 首先我们在父组件提供provide，任意的孙组件都可以接收相当于加强版的props
    value: null
  },
  provide () {
    return {
      RadioGroup: this
    }
  }
}
</script>
<style scoped>

</style>
