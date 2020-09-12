<template>
  <div class="menu fx fx-column">
      <div class="logo fx a-center transitionWH" 
      :style="{background:bgColor}">
        <i><img :src="require('@/assets/image/logo.jpg')" alt=""></i>
        <span v-show="!isCollapse">后台管理系统</span>
      </div>
      <el-menu class="el-menu-vertical-demo" 
        :unique-opened="true"
        @select="handleSelect"
        :background-color="bgColor"
        :default-active="defaultActive"
        text-color="#fff"
        :active-text-color="atColor"
        :collapse="isCollapse">
        <template v-for="item in menuList">
            <template v-if="item.children">    
                <el-submenu :index="item.routePath+'-'+item.title" :key="item.routePath" >
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.title}}</span>
                    </template>
                    <el-menu-item 
                       v-for="todo of item.children"
                       :key="todo.routePath"
                       :index="todo.routePath+'-'+todo.title">
                        <template>
                            <i :class="todo.icon"></i>
                            <span slot="title">{{todo.title}}</span>
                        </template>
                    </el-menu-item>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :key="item.routePath"
                       :index="item.routePath+'-'+item.title">
                    <template>
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.title}}</span>
                    </template>
                </el-menu-item>
            </template>
        </template>
      </el-menu>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: "",
  components: {},
  props: {
      isCollapse:Boolean,
      bgColor:String,
      atColor:String
  },
  data() {
    return {
    };
  },
  watch: {
    
  },
  computed: {
    ...mapState('global',['menuList','recordList']),
    defaultActive(){
      let path = this.$route.path ;
      let obj = this.recordList.find( item => {
        return item.path == path ;
      })
      if(obj){
        let {path,title} = obj ;
        return path+'-'+title;
      }
    }
  },
  methods: {
      ...mapMutations('global',['addRecord','assignCrumb']),
      handleSelect(key,keyPath){
        let list = []
        keyPath.forEach(item => {
          let a = item.split('-')
          list.push(a[1])
        })
        let arr = key.split('-');
        key && this.routerLinkTo(arr[0],arr[1],list)
      },
      routerLinkTo(path,title,arr){
        let i = path.indexOf('/')
        if(i>=0){
          this.$router.push({path})
          this.addRecord({path,title,arr})
          this.assignCrumb(arr)
        }
      }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.menu 
   .el-menu-vertical-demo:not(.el-menu--collapse) 
    width 220px
   .el-menu
    border-right none
    flex 1
   .title  
     width 160px
     height 100%
   
     
   .logo 
     color #ffffff
     font-size 14px
     height 50px
     padding 0 20px
     width 100%
     span  
       margin-left 10px
     i 
       width 24px
       height 24px
       background #EAEAEA
       border-radius 50%
       img
         width 100%
         height 100%
         object-fit cover
         border-radius 50%
   .active
      width 64px
      overflow hidden
      span  
         display none
</style>