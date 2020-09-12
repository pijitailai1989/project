<template>
  <el-container class="containerBox">
    <u-menu :isCollapse="isCollapse" :bg-color="themeColor.menuBg" :at-color="themeColor.footerBg"/>
    <el-container>
      <el-header>
        <u-header @click="showMenu" />
      </el-header>
      <el-main>
        <y-record />
        <div class="content">
           <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
import uMenu from './indexCom/menu.vue'
import uHeader from './indexCom/header.vue'
export default {
  name: 'home',
  data () {
    return {
      isCollapse:false
    }
  },
  components:{
    uMenu,
    uHeader
  },
  computed:{
    ...mapState('global',['themeColor'])
  },
  methods:{
    showMenu(flod){
       this.isCollapse = flod ;
    }
  }
}
</script>
<style lang="stylus" scoped>
  .el-header
    height 50px  !important
    padding 0 5px !important
    font-size 16px
    box-shadow:1px 2px 2px 0 #EAEAEA
  .el-footer 
    color #EDEDED
    height 40px  !important
    p
      font-size 12px
  .containerBox
    height 100vh
  .el-main 
    color #303133
    font-size 15px
    padding 0 !important
    .content  
       height calc(100vh - 90px)
       padding 5px
    
  

</style>
