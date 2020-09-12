<template>
  <div class="allOrders">
      <el-row>
        <el-col :span="24">
            <div class="fx j-end operating-space">
                <el-button  type="primary" size="mini" @click="dialogVisible = true;titleDialog='添加订单'">添加订单</el-button>
            </div>
        </el-col>
        <el-col :span="24">
            <el-table
                :data="tableData"
                border
                :header-cell-style="{
                    background:'#669934',
                    borderRight:'1px solid #FFF',
                    fontWeight:'bold',
                    height:'38px',
                    color:'#fff',
                    padding:'0'
                }"
                :cell-style="{
                    borderRight:'1px solid #EBEEF5',
                    lineHeight:'16px',
                    padding:'6px 0',
                    color:'#606266'
                }"
                style="width: 100%">
                <el-table-column
                type="selection"
                width="45">
                </el-table-column>
                <el-table-column
                    prop="takeDate"
                    fixed
                    label="接单时间"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="orderImg"
                    label="订单图片">
                </el-table-column>
                <el-table-column
                    prop="position"
                    label="站点">
                </el-table-column>
                <el-table-column
                    prop="shopName"
                    label="店铺名称">
                </el-table-column>
                <el-table-column
                    prop="orderId"
                    label="订单号">
                </el-table-column>
                <el-table-column
                    prop="orderType"
                    label="订单类型">
                </el-table-column>
                <el-table-column
                    prop="takePrice"
                    label="接单金额">
                </el-table-column>
                <el-table-column
                    prop="employee"
                    label="员工信息">
                </el-table-column>
                <el-table-column
                    prop="hotWord"
                    label="	关键词">
                </el-table-column>
                <el-table-column
                    prop="backup"
                    label="备注">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="订单状态">
                    <template slot-scope="scope">
                        <span>{{scope.row.status?'待付款':'已付款'}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="needComment"
                    label="是否需要评论"
                    width="110">
                    <template slot-scope="scope">
                        <span>{{scope.row.needComment?'是':'否'}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop=""
                    fixed="right"
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                        <el-button type="text" @click="viewFun(scope.row)" size="small">查看</el-button>
                        <el-button type="text" disabled size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
        <el-col :span="24">
            <div class="fx j-end page">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="size"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
                </el-pagination>
            </div>
        </el-col>
      </el-row>
      <component :is="'addOrder'" :dialogVisible="dialogVisible" :text="titleDialog" @close="closeFun" :item="item"></component>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import {formDate} from '@/utils/methods.js'
import addOrder from './allOrders/addOrder'
export default {
  name: "allOrders",
  components: {
      addOrder
  },
  props: {},
  data() {
    return {
        currentPage:1,
        size:10,
        total:0,
        tableData:[],
        dialogVisible:false,
        item:{},
        titleDialog:''
        
    };
  },
  watch: {},
  computed: {
      ...mapState('order',['orderObj'])
  },
  methods: {
      ...mapActions('order',['loadGetOrderList']),
      handleSizeChange(size){
        this.saveOrderFun(1,size)
      },
      handleCurrentChange(currentPage){
        this.saveOrderFun(currentPage,this.size)
      },
      
      saveOrderFun(pageNum,pageSize){
          this.loadGetOrderList({pageNum,pageSize}).then( success => {
               let {record,count} = this.orderObj ;
               record.forEach(item => {
                   item.takeDate = formDate(item.takeDate)
               })
               this.tableData = record ;
               this.total = count ;
          })
      },
      closeFun(data){
          this.dialogVisible = false ;
          this.item = {}
          data && this.saveOrderFun(1,this.size) ;
      },
      viewFun(data){
          this.dialogVisible = true ;
          this.item = data ;
          this.titleDialog = '查看订单'
      }

  },
  created() {},
  mounted() {
      this.saveOrderFun(this.currentPage,this.size)
  }
};
</script>
<style lang="stylus" scoped>
.allOrders
  width 100%
  .operating-space,.page
    padding 5px 0
</style>