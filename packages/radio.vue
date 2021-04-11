<template>
  <labe class="vn-radio" :class="{'is-checked':label==model}">
    <span class="vn-radio_input">
      <span class="vn-radio_inner"></span>
      <!--下面这个input是不想看到的，上面的是需要长得像radio-->
      <!-- 不能直接双向绑定value，value是父组件传递过来的，model取决于value，所以利用计算属性 -->
      <input type="radio" class="vn-radio_original" :value="label"  v-model="model"/>
    </span>
    <span class="vn-radio_label">
       <slot></slot>
       <!--如果不传内容，就把label当成内容 -->
       <template v-if="!$slots.default">{{label}}</template>
     </span>
  </labe>
</template>

<script>
export default {
  name: 'VnRadio',
  computed: {
    model: {
      get () {
        //   获取父组件的value
        // 我们也可能从radiogroup中拿值，
        // return this.value
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        //   触发父组件给当前组件组册的input事件
        // this.$emit('input', value)
        // 如果是group，触发的是父亲的input，自己没有input了，因为自己没有v-models
        return this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      // 用于判断我们的radio是否被我们的radio所包裹,两个感叹号改成布尔值
      return !!this.RadioGroup
    }
  },
  inject: {
    RadioGroup: {
      defalue: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      defalue: ''
    },
    value: null,
    name: {
      type: String,
      defalue: ''
    }

  }
}
</script>

<style lang="scss" scoped>
  .one-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    .one-radio_input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .one-radio_inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .one-radio_original{
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .one-radio_label{
      font-size: 14px;
      padding-left: 10px;;
    }
  }
  // 选中的样式
  .one-radio.is-checked{
    .one-radio_input{
      .one-radio_inner{
        border-color: #409eff;
        background-color: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .one-radio_label{
      color:#409eff;
    }
  }
</style>
