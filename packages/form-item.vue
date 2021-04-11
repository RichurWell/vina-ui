<template>
    <div class="vn-form-item">
       <label class="vn-from-item_label" :style="{width:this.Form.labelWidth}">{{label}}</label>
       <div class="vn-form-item_content">
           <slot></slot>
       </div>
    </div>
</template>

<script>
export default {
  name: 'VnFormItem',
  props: {
    label: String
  },
  inject: ['Form']

}
</script>

<style lang="scss">
.vn-form-item{
    margin-bottom: 25px;
    .vn-from-item_label{
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
    }
    .vn-form-item_content{
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidden;
    }
}
</style>
