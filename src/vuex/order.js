import api from '@/http'
import { getPromiseAction ,getPromiseActionNoMutations} from '@/utils/promiseUtils'

export default {
  name:'order',
  namespaced: true,
  state() {
    return {
       orderObj:{}
    }
  },
  getters: {
    
  },
  mutations: {
    ORDER(state,data){
       state.orderObj = data || {};
    }
  },
  actions: {
    loadGetOrderList({commit},payload){
      return getPromiseAction (api.getOrderList(payload),commit,'ORDER')
    },
    loadPostAddOrder({commit},payload){
      return getPromiseActionNoMutations (api.postAddOrder(payload))
    },
  }
}