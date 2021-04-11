<template>

    <button class="vn-button" :class="[`vn-button-${type}`,{'is-plain':plain,'is-round':round,'is-circle':circle}]"
       @click="handleClick"
    >
       <i :class="icon"></i>
       <!-- 当我们没有传入插槽的时候 -->
       <span v-if="$slots.default">
         <slot></slot>
       </span>
    </button>
</template>
<script>
export default {
  name: 'VnButton',
  // 封装一个通用的组件，会对props做一个约束，props进行校验
  props: {
    type: {
      type: String,
      default: 'defalut'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String

    }
  },
  methods: {
    handleClick (e) {
      // 我们组件点击事件不做任何事情，只负责通知父组件你点了
      this.$emit('click', e)
    }
  },
  created () {
    console.log(this.type)
    console.log('this.$slots', this.$slots)
  }
}
</script>
<style lang="scss" scoped>
.vn-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background-color: #fff;
  border:1px solid #dcdfe6;
  color:#606266;
  -webkit-appearance: none;
  text-align: center;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-size: 500;
  //禁止元素的文字被选择
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.vn-button-primary{
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    color: #66b1ff;
    border-color: #66b1ff;
    background-color: #fff;
 }
}

.vn-button-success{
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    color: #85ce61;
    border-color: #85ce61;
    background-color: #fff;
 }
}

.vn-button-info{
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    color: #a6a9ad;
    border-color: #a6a9ad;
    background-color: #fff;
 }
}

.vn-button-warning{
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    color: #ebb536;
    border-color: #ebb536;
    background-color: #fff;
 }
}

.vn-button-danger{
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    color: #f78989;
    border-color: #f78989;
    background-color: #fff;
 }
}
.vn-button-primary.is-plain{
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #409eff;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #66b1ff;
    background-color: #fff;
 }
}
.vn-button-success.is-plain{
  color: #67c23a;
  background-color: #f0f8eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    color: #85ce61;
    border-color: #85ce61;
    background-color: #fff;
 }
}

.vn-button-info.is-plain{
  color: #909399;
  background-color: #f4f4f5;
  border-color: #909399;
  &:hover,
  &:focus {
    color: #a6a9ad;
    border-color: #a6a9ad;
    background-color: #fff;
 }
}

.vn-button-warning.is-plain{
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    color: #ebb536;
    border-color: #ebb536;
    background-color: #fff;
 }
}

.vn-button-danger.is-plain{
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    color: #f78989;
    border-color: #f78989;
    background-color: #fff;
 }

}
.vn-button.is-round{
    border-radius: 20px;
    padding: 12px 23px;
}

.vn-button.is-circle{
    border-radius:50%;
}
.vn-button [class*=vn-icon-]+span{
  margin-left: 15px;
}
</style>
