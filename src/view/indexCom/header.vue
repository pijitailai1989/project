<template>
  <div class="headers fx a-center j-between">
     <div class="logo fx a-center">
       <div >
          <i class="fold" :class="[fold?'el-icon-s-fold':'el-icon-s-unfold']" @click="toggleMenu(fold)"></i>
       </div>
       <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>后台管理系统</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in crumbList" :key="index">
          <span :class="[crumbList.length-1 == index ? 'active' : '']">{{item}}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
         
     </div>
     <div class="fx a-center">
         <p class="user">{{userInfo.userName}}</p>
     </div>
  </div>
</template>

<script> 
import { mapState,mapMutations } from 'vuex';
export default {
  name: "headers",
  components: {},
  props: {
  },
  data() {
    return {
        fold:true
    };
  },
  watch: {
    
  },
  computed: {
    ...mapState('global',['userInfo','crumbList'])
  },
  methods: {
      toggleMenu(fold){
          this.fold = !fold ;
          this.$emit('click',fold)
      }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.headers  
  width 100%
  height 100%
  color #333
  .active 
    color #669934
    font-weight bold
  .user 
    margin-left 10px
    font-size 14px
    padding 0 10px
  .logo 
    .fold
        font-size 20px
        cursor pointer
        margin-right 40px
    

</style>