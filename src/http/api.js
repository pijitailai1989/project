import { http } from "./http";

export const postLogin = data => http({ methods:'post' ,url:`/api/user/login`,data}) 
export const postAddOrder = data => http({ methods:'post' ,url:`/api/order/addOrder`,data}) 
export const getOrderList = data => http({ methods:'get' ,url:`/api/order/orderList`,data}) 