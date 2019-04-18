<template>
        <div class="loginBox move">
          <div class="picDiv">
            <img src="https://www.starbucks.com.cn/assets/images/sbux-rewards/header_cn.jpg" alt="">
          </div>
          <div class="loginDiv">
            <h1>登录</h1>
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号名:" prop="username">
                    <el-input type="text" v-model="ruleForm2.username" autocomplete="off" placeholder="请输入账号名"></el-input>
                </el-form-item>
                <el-form-item label="密码:" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="resetForm('ruleForm2')" type="info">重置</el-button>
                    <el-button type="success" @click="submitForm('ruleForm2')" >登录</el-button>
                </el-form-item>
            </el-form>
          </div>
          <!-- <div class="picDiv">
            <img src="https://www.starbucks.com.cn/assets/images/featured/2018xmas2/food.jpg" alt="">
          </div> -->
          <hr>
          <div class="foot">
            <p>English | 隐私政策 | 使用条款沪公网安备</p>
            <p>31010402000318号 | 沪ICP备17003747号</p>
          </div>
            <!-- <p>{{ruleForm2.username}}</p> -->
        </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validateUsername = (rule, value, callback) => {
      var reg = /^[a-zA-Z0-9_]{4,10}$/;
      if (value === "") {
        callback(new Error("请输入正确的账号名"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入正确的密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        username: "",
        pass: "",
        checkPass: "",
        age: ""
      },
      rules2: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  computed:{
    ...mapState(["user"])
  },
  methods: {
    ...mapActions(["login","getUser"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login({
            url: "/login",
            info: {
              username: this.ruleForm2.username,
              userpwd: this.ruleForm2.pass
            },
            callback: data=>{
              if(data.code == 200){
                sessionStorage.username = data.username; 
                this.getUser({info:data.username});
                // this.open();
                alert(data.msg);
                location.reload();
                this.$router.push("/app");
              }else{
                alert(data.msg);
                this.resetForm('ruleForm2');
              }
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    open() {
        this.$message({
          showClose: true,
          message: '登录成功！',
          type: 'success',
          duration:1500
        });
      },
  }
};
</script>

<style scoped>
.picDiv img {
  width: 886px;
  height: 367px;
}
.loginDiv {
  margin-top: 20px;
  width: 400px;
  height: 280px;
  margin-left: 22%;
  padding-bottom: 14px;
}
h1{
  color:#006440;
  line-height: 84px;
  font-size: 30px;
  text-align: center;
  letter-spacing: 14px;
  margin-left: 84px;
  font-weight: 700;
}
hr{
  border:0.5px dashed #006440;
}
.foot {
  margin-top: 16px;
  width: 100%;
  margin-bottom: 6px;
}
.foot p {
  line-height: 14px;
  text-align: center;
  font-size: 10px;
  color:#2c2825;
}
button{
  margin-left: 138px;
}
.move{
  animation:fadeInLeft 1s;
}
</style>
