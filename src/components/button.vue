<template>
  <div class="buttons fx a-center" 
       :style="{fontSize:size?size+'px':'13px',height:hg,background:bg,color}" 
        @click="clickEvent(disabled)"
       :class="[text?'no-border':'',!bg?'':'bg',!color?'':'color',disabled?'disabled':'']">
      <i :class="[icon]" :style="{fontSize:size?(parseInt(size) + 3) +'px':'13px'}"></i>
      <span>
          <slot></slot>
      </span>
  </div>
</template>

<script>
export default {
  name: "y-button",
  components: {},
  props: {
      size:String,
      color:String,
      icon:String,
      hg:String,
      bg:String,
      text:Boolean,
      disabled:Boolean
  },
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
      clickEvent(e){
          if(e) return ;
          this.$emit('click',true)
      }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.buttons 
  border 1px solid #DCDFE6
  height 28px
  padding 0 15px
  border-radius 3px
  font-size 13px
  color #606266
  cursor pointer
  i 
    margin-right 3px
  &:hover 
     color #669934
     border 1px solid #669934
  &.no-border
     border none
     padding 0
     display inline-block
     &.color
        &:hover 
          -moz-opacity 0.6
          -khtml-opacity 0.6
          opacity 0.6
  &.bg
     color #FFF
     border none
     &:hover 
       -moz-opacity 0.6
       -khtml-opacity 0.6
       opacity 0.6
  &.disabled 
       -moz-opacity 0.6
       -khtml-opacity 0.6
       opacity 0.6
       cursor not-allowed
</style>