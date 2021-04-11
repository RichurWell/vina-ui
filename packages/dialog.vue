<template>
   <!-- 对话框的遮罩 --><!--频繁隐藏显示就使用show-->
     <transition name="dialog-fade">
        <div class="vn-dialog_wrapper" v-show="visible" @click="handleClose">
       <!-- 真正的对话框 -->
       <div class="vn-dialog" :style="{width:width,marginTop:top}">
           <div class="vn-dialog_header">
               <slot name="title">
                    <span class="vn-dialog_title">{{title}}</span>
                </slot>
               <button class="vn-dialog_headerbtn"  @click="handleClose">
                   <i class="vn-icon-close"></i>
               </button>
           </div>

           <div class="vn-dialog_body">
                <slot></slot>
           </div>
           <div class="vn-dialog_footer" v-if="$slots.footer">
               <slot name="footer">

               </slot>
           </div>

       </div>

   </div>
     </transition>

</template>
<script>
export default {
  name: 'VnDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      // 我们不能在组件中关闭，不然所有的都会被关闭，我们应该利用冒泡思想通知父亲，你被点击了
      console.log('aaa')
      //   子传父, 然后父组件注册关闭事件,这么写的好处，在子组件里面没有更简单，但是使用组件的人很简单，使用的时候不需要注册@update:visible
      //  直接visible.aync
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style lang="scss">
// scope会给当前组件的模板中的所有的元素都添加一个随机的属性
// 组件中还是不要用scope，不然插槽传进来的不生效
.vn-dialog_wrapper{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: auto;
    margin: 0;
    z-index: 3003;
    background-color: rgba(0,0,0, 0.5);
    .vn-dialog{
        position: relative;
        margin: 15vh auto 50px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0,0,0, 0.3);
        box-sizing: border-box;
        width: 30%;

        &_header {
            padding: 20px 20px 10px;
            .vn-dialog_title{
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }
            .vn-dialog_headerbtn{
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background-color: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                .vn-icon-close{
                    color: #909399;
                }
            }
        }
        &_body{
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }
        &_footer{
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            // 组件中的央视覆盖不了的时候用深度选择器
            // 深度选择器    scss ::v-deep      less  /deep/
            .vn-button:first-child {
                margin-right: 20px;
            }

        }

    }
}
.dialog-fade-enter-active{
  animation: fade 1s

}
.dialog-fade-leave-active{
  animation: fade 1s  reverse

}

@keyframes fade {
    0%{
      opacity: 0;
      transform: translateY(-20px);

    }
    100%{
      opacity: 1;
      transform: translateY(0);

    }
}
</style>
