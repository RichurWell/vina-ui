<template>
    <!-- 只要传了clearable||showPassword都算有小图标，我们要动态的控制这个样式 -->
    <div class="vn-input" :class="{'vn-input--suffix':showSuffex}">
        <!-- 如果传了showPassword我们需要判断我们是否需要切换我们密码的显示，如果不传我们就不判断 -->
        <input  class="vn-input_inner is-disabled'" :placeholder="placeholder"

        :type="showPassword?(passwordVisible?'text':'password'):type"
        :name="name" :disabled="disabled" :class="{'is-disabled':disabled}"
               :value="value"
               @input="handleInput"
        >
       <!-- span用来显示小图标的 -->
        <span class="vn-input_suffix" v-if="showSuffex" >
            <!-- 除了clearable的控制显示清空按钮，没有值的时候也不显示 -->
            <i class="vn-input_icon vn-icon-close" v-if="clearable&&value" @click="clear"></i>
            <i class="vn-input_icon vn-icon-dianyingpiao" v-if="showPassword" @click="handlePaddword" :class="{'vn-icon-dianyingpiao-active':passwordVisible}"></i>
        </span>
        <!-- 封装组件的时候，要在组件内部接收它的value值，同时要触发他的value事件 -->
    </div>
</template>
<script>
export default {
  name: 'VnInput',
  data () {
    return {
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: null
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      // 把内容清空
      this.$emit('input', '')
    //
    },
    handlePaddword () {
      // 父组件传的type是什么就是什么，我们是不能改的，我们要改只能改自己的，我们应该有个自己的属性显示密码还是文本
      this.passwordVisible = !this.passwordVisible
    }
  },
  computed: {
    showSuffex () {
      return this.clearable || this.showPassword
    }
  }

}
</script>
<style lang="scss">
.vn-input{
   width: 100%;
   position: relative;
   font-size: 14px;
   display: inline-block;
   .vn-input_inner{
       -webkit-appearance: none;
       background-color: #fff;
       background-image: none;
       border-radius: 4px;
       border: 1px solid #dcdfe6;
       box-sizing: border-box;
       color: #606266;
       display: inline-block;
       font-size: inherit;
       height: 40px;
       line-height: 40px;
       outline: none;
       padding: 0 15px;
       transition: border-color .2s cubic-bezier(.645,.0.45,.355,1);
       width: 100%;
       &:focus{
           outline: none;
           border-color: #409eff;
       }
       &.is-disabled{
           background-color: #f5f7fa;
           border-color: #e4e7ed;
           color: #c0c4cc;
           cursor: not-allowed;
       }
   }

}
  .vn-input--suffix{
       .vn-input_inner{
           padding-right:30px
       }
       .vn-input_suffix{
           position:absolute;
           height: 100%;
           right: 10px;
           top:0;
           line-height: 40px;
           text-align: center;
           color: #c0c4cc;
           transition: all .3s;
           z-index: 900;
           i{
               color:#c0c4cc;
               font-size: 14px;
               cursor: pointer;
               transition: color .2s cubic-bezier(.645,.045,.355,1);
           }
            .vn-icon-dianyingpiao-active{
           color: blue;
       }
       }

   }
</style>
