<template>
  <div class="record">
      <ul class="fx a-center">
          <li :class="[$route.path==item.path?'active fx':'fx']" 
               v-for="(item,index) of recordList" 
               @click="linkTo(item.path,item.arr)"
              :key="item.path">
              <i class="el-icon-view view"></i>
              <span>{{item.title}}</span>
              <i class="el-icon-close close" @click="deleteItem(index)"></i>
          </li>
      </ul>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  name: "y-record",
  components: {},
  props: {
      
  },
  data() {
    return {
    };
  },
  watch: {},
  computed: {
      ...mapState('global',['recordList'])
  },
  methods: {
      ...mapMutations('global',['deleteRecord','assignCrumb']),
      deleteItem(index){
        this.deleteRecord(index);
        setTimeout( () => {
           let {path} = this.recordList[0];
           this.$router.push({path})
        },70)
      },
      linkTo(path,arr){
        this.$router.push(path);
        this.assignCrumb(arr)
      }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.record
  width 100%
  height 40px 
  box-shadow 0 2px 2px 0 #ccc 
  ul  
    height 40px  
    font-size 13px
    color #444
    padding 0 5px
    li  
      border 1px solid #EAEAEA
      padding 7px 10px
      position relative 
      cursor pointer
      background #FFF
      border-radius 3px
      .view  
        display none
        margin 1px 5px 0 0
        font-size 12px
      &.active 
        background #669934
        border-color #669934
        color #FFF
        font-weight bold
        .view 
          display inline
      .close  
        position absolute 
        right 5px 
        top 8px
        font-size 12px
        &:hover 
          top 7px 
          right 4px
          font-size 13px
      span  
        padding-right 15px
    li+li 
      margin-left 5px

</style>