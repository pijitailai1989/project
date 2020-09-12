<template>
  <div class="bgimage">
    <div class="login fx a-center j-center">
      <div class="box">
         <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" 
         label-width="70px" class="demo-ruleForm">
            
            <el-form-item label="角色" prop="userType">
                <el-select v-model="ruleForm.userType" placeholder="" size="small" style="width:100%">
                   <el-option label="管理员" :value="1"></el-option>
                   <el-option label="员工" :value="2"></el-option>
                   <el-option label="财务人员" :value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="账号" prop="userName">
                <el-input v-model.number="ruleForm.userName" size="small"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" size="small"></el-input>
            </el-form-item>
            
            <el-form-item>
              <div class="fx j-between btn">
                 <el-button type="primary" size="small" @click="submitForm('ruleForm',ruleForm)">登录</el-button>
                 <el-button @click="resetForm('ruleForm')" size="small">重置</el-button>
              </div>
            </el-form-item>
         </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: "login",
  components: {},
  props: {},
  data() {
    var userNames = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
           callback();
        }, 1000);
      };
      var passwords = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入密码'));
        }
        setTimeout(() => {
           callback();
        }, 1000);
      };
    return {
        ruleForm: {
          password: '',
          userName: '',
          userType: 1
        },
        rules: {
          userName: [
            { validator: userNames, trigger: 'blur' }
          ],
          password: [
            { validator: passwords, trigger: 'blur' }
          ]
        }
    };
  },
  watch: {},
  computed: {
      
  },
  methods: {
      ...mapActions('global',['loadPostLogin']),
      submitForm(formName,ruleForm) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loadPostLogin(ruleForm).then(success => {
              this.$router.push({path:'/visualManagement/index'})
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
  created() {},
  mounted() {
    localStorage.clear('vuex')
  }
};
</script>
<style lang="stylus" scoped>
.bgimage
    width 100vw
    height 100vh
    background-image url('../assets/image/login.jpg');
    background-repeat no-repeat;
    background-size cover
    -moz-background-size cover
.login
    position fixed 
    left 0
    top 0
    background rgba(0,0,0,.6)
    width 100vw
    height 100vh
    
    .box 
      width 300px
      padding 30px 40px 30px 0
      box-shadow 0 0 15px 0 #ccc
      border-radius 10px
      background #fff
      .btn 
        margin-top 10px


</style>