import api from '@/http'
import { getPromiseAction ,getPromiseActionNoMutations} from '@/utils/promiseUtils'

export default {
  name:'global',
  namespaced: true,
  state() {
    return {
       themeColor:{
         headerBg:"#EAEAEA",
         menuBg:"#4B5764",
         mainBg:"#DEECFC",
         footerBg:"#1074DC"
       },
       menuList:[
         {
           title:"首页",routePath:"/visualManagement/index",icon:"el-icon-menu"
         },
         {
           title:"接单管理",routePath:"/orderManagement",icon:"el-icon-menu",
           children:[
             {title:"所有订单",routePath:"/orderManagement/allOrders",icon:"el-icon-menu"},
             {title:"新增订单",routePath:"er",icon:"el-icon-menu"},
             {title:"待反馈（已下单）",routePath:"qer",icon:"el-icon-menu"},
             {title:"评论待填写",routePath:"erwq",icon:"el-icon-menu"},
             {title:"本金待收款",routePath:"rwe",icon:"el-icon-menu"},
             {title:"待反馈（已上评）",routePath:"erq",icon:"el-icon-menu"},
             {title:"待收款",routePath:"wqerwer",icon:"el-icon-menu"},
             {title:"已收款",routePath:"erw",icon:"el-icon-menu"},
             {title:"交付列表",routePath:"werwer",icon:"el-icon-menu"},
             {title:"接单统计图",routePath:"werwerrwq",icon:"el-icon-menu"},
           ]
          },
          {
            title:"其他订单",routePath:"other",icon:"el-icon-menu",
            children:[
              {title:"订单列表",routePath:"11",icon:"el-icon-menu"}
            ]
           }
       ],
       userInfo:{ },
       recordList:[
         {title:'首页',path:'/visualManagement/index',arr:['首页']}
       ],
       crumbList:[]
    }
  },
  getters: {
    
  },
  mutations: {
    LOGIN(state,data){
       state.userInfo = data || {};
    },
    assignCrumb(state,data){
       state.crumbList = data || []
    },
    deleteRecord(state,i){
       let {length} = state.recordList;
       if(length>=2){
        state.recordList.splice(i,1)
       }
    },
    addRecord(state,data){
      let list = state.recordList ;
      let {path} = data ;
      let obj = list.find( item => {
        return item.path == path
      })
      if(obj) return ;
      if(list.length>9){
        state.recordList.splice(0,1)
      }
      state.recordList.push(data)
    }
  },
  actions: {
    loadPostLogin({commit},payload){
      return getPromiseAction (api.postLogin(payload),commit,'LOGIN')
    },
    loadPostLogout({commit},payload){
      return getPromiseActionNoMutations (api.postLogout(payload))
    },
  }
}