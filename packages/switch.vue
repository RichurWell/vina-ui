<template>
<!-- 用户在使用switch组件的时候 -->
  <label class="vn-switch" @click="handleClick" :class="{'is-checked':value}" for="name">
      <span class="vn-switch_core" ref="core">
          <span class="vn-switch_button">

          </span>
      </span>
        <!-- 我们需要有个checkbox来接收name -->
    <input class="vn-switch-input" type="checkbox" :name="name" ref="input">
  </label>
</template>

<script>
export default {
  name: 'VnSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    // 接受自定义颜色
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    // handleClick () {
    //   //
    //   this.$emit('input', !this.value)
    //   // 点击的时候还需要修改我们的颜色
    //   // 触发父组件的value值的时候，必须要等到父组件值修改完了在调用颜色设置，否则就出bug了
    //   this.$nextTick().then(function(){

    //   })

    // },

    async handleClick () {
      //
      this.$emit('input', !this.value)
      // 点击的时候还需要修改我们的颜色
      // 触发父组件的value值的时候，必须要等到父组件值修改完了在调用颜色设置，否则就出bug了
      await this.$nextTick() // 数据修改后等待DOM更新
      this.setColor()
      // 修改一下checked的值
      this.$refs.input.checked = this.value
    },
    // 自定义颜色的设置
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        console.log('color', color)
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    // 修改我们开关的颜色
    this.setColor()
    // 控制checkbox的的checkbox的值，让我们input和value同步
    this.$refs.input.checked = this.value
  }

}
</script>

<style lang="scss">
  .vn-switch{
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    .vn-switch-input{
       position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      margin: 0;
    }
    .vn-switch_core{
      margin: 0;
      display: inline-block;
      position: relative;
      width: 40px;
      height: 20px;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: #dcdfe6;
      cursor: pointer;
      transition:border-color .3s,background-color .3s;
      vertical-align: middle;
      .vn-switch_button{
        position: absolute;
        top:1px;
        left:1px;
        border-radius: 100%;
        transition: all .3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
      }
    }
  }
  .vn-switch.is-checked{
     .vn-switch_core{
       border-color: #409eff;
       background-color: #409eff;
       .vn-switch_button{
         transform: translateX(20px);
       }
     }
  }
</style>
