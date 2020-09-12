<template>
  <y-dialog
      boxWidth="800px" client
      v-show="dialogVisible">
      <template v-slot:title>
        <span style="font-weight:bold;font-size:17px">{{text}}</span>
      </template>
      <template v-slot:btn>
        <div class="fx j-end">
            <el-button @click="$emit('close',false);clearFun()" size="mini">取 消</el-button>
            <el-button type="warning" @click="dialogForm(form)" size="mini" :disabled="view">确 定</el-button>
        
        </div>
      </template>
        <el-form :model="form">
            <el-row :gutter="20">
             <el-col :span="12">
                 <el-form-item label="接单时间" :label-width="formLabelWidth">
                    <el-date-picker
                    style="width:100%"
                    v-model="form.takeDate"
                     :disabled="view"
                      size="small"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
            </el-col>
             <el-col :span="12">
                 <el-form-item label="订单图片" :label-width="formLabelWidth">
                    <el-input v-model="form.orderImg" size="small" :disabled="view"></el-input>
                </el-form-item>
             </el-col>
             <el-col :span="12">
                 <el-form-item label="站点" :label-width="formLabelWidth">
                    <el-input v-model="form.position" size="small" :disabled="view"></el-input>
                </el-form-item>
            </el-col>
             <el-col :span="12">
                 <el-form-item label="店铺名称" :label-width="formLabelWidth">
                    <el-input v-model="form.shopName" size="small" :disabled="view"></el-input>
                </el-form-item>
             </el-col>
             <el-col :span="12">
                 <el-form-item label="订单号" :label-width="formLabelWidth">
                    <el-input v-model="form.orderId" size="small" :disabled="view"></el-input>
                </el-form-item>
            </el-col>
             <el-col :span="12">
                 <el-form-item label="订单类型" :label-width="formLabelWidth">
                    <el-input v-model="form.orderType" size="small" :disabled="view"></el-input>
                </el-form-item>
             </el-col>
             <el-col :span="12">
                 <el-form-item label="接单金额" :label-width="formLabelWidth">
                    <el-input v-model="form.takePrice" size="small" :disabled="view"></el-input>
                </el-form-item>
            </el-col>
             <el-col :span="12">
                 <el-form-item label="员工信息" :label-width="formLabelWidth">
                    <el-input v-model="form.employee" size="small" :disabled="view"></el-input>
                </el-form-item>
             </el-col>
             <el-col :span="12">
                 <el-form-item label="关键词" :label-width="formLabelWidth">
                    <el-input v-model="form.hotWord" size="small" :disabled="view"></el-input>
                </el-form-item>
            </el-col>
             <el-col :span="12">
                 <el-form-item label="备注" :label-width="formLabelWidth">
                    <el-input v-model="form.backup" size="small"  :disabled="view"></el-input>
                </el-form-item>
             </el-col>
              <el-col :span="12">
                 <el-form-item label="订单状态" :label-width="formLabelWidth">
                    <el-select v-model="form.status" placeholder="请选择" size="small" style="width:100%" :disabled="view">
                        <el-option label="待付款" :value="1" />
                        <el-option label="已付款" :value="2" />
                    </el-select>
                </el-form-item>
             </el-col>
             <el-col :span="12">
                 <el-form-item label="是否需要评论" :label-width="formLabelWidth">
                    <el-switch
                    v-model="form.needComment"
                    active-color="#669934"
                     :disabled="view"
                    inactive-color="#ccc">
                    </el-switch>
                </el-form-item>
             </el-col>
            </el-row>
        </el-form>
        
      </y-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import {formDate} from '@/utils/methods.js'
export default {
  name: "",
  components: {},
  props: {
      dialogVisible:{
          type:Boolean,
          required:true
      },
      text:{
          type:String,
          required:true
      },
      item:Object
  },
  data() {
    return {
        form:{
            takeDate:'',
            orderImg:'',
            position:'',
            shopName:'',
            orderId:'',
            orderType:'',
            takePrice:'',
            employee:'',
            hotWord:'',
            backup:'',
            status:'',
            needComment:false,
        },
        formLabelWidth:'100px',
    };
  },
  watch: {
      item:{
          handler:function(data){
             if(data && data._id){
                 this.form = data ;
             }
          },
          immediate:true
      }
  },
  computed: {
      view(){
          return this.form._id?true:false
      }
  },
  methods: {
      ...mapActions('order',['loadPostAddOrder']),
      clearFun(){
          this.form = {
            takeDate:'',
            orderImg:'',
            position:'',
            shopName:'',
            orderId:'',
            orderType:'',
            takePrice:'',
            employee:'',
            hotWord:'',
            backup:'',
            status:'',
            needComment:false
          }
      },
      dialogForm(data){
          data.takeDate = formDate(data.takeDate)
          this.loadPostAddOrder(data).then( success =>{
              this.$emit('close',true)
              this.clearFun()
              this.$message({
                message: '订单录入成功！',
                type: 'success'
              });
          }).catch(error => {
              this.$message.error('订单录入失败！');
          })
      },
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>

</style>