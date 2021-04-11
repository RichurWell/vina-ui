<template>
     <div class="vn-form">
         <slot></slot>
     </div>
</template>

<script>
export default {
  name: 'VnForm',
  props: {
    //  使用form必须传一个model
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }

}
</script>

<style>

</style>
