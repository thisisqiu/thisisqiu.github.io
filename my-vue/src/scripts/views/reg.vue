<template>
      <div id="regBox" class="move">
        <div class="picDiv">
              <img src="https://www.starbucks.com.cn/assets/images/sbux-rewards/header_cn.jpg" alt="">
        </div>
        <div class="regDiv">
          <h1>注册</h1>
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号名" prop="username">
                    <el-input type="text" v-model="ruleForm2.username" autocomplete="off" placeholder="请输入数字字母组成4-10位账号名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入数字字母组成6-12位密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="请再次输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="resetForm('ruleForm2')" type="info">重置</el-button>
                    <el-button type="success"  @click="submitForm('ruleForm2')">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
         <hr>
          <div class="foot">
            <p>English | 隐私政策 | 使用条款沪公网安备</p>
            <p>31010402000318号 | 沪ICP备17003747号</p>
          </div>
       </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Menu from "../components/menu.vue";
import Swiper from "../components/swiper.vue";

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
      var reg = /^[a-z0-9_]{4,10}$/ig;
      if (!reg.test(value)) {
        callback(new Error("请输入正确的账号名"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      var reg = /^[a-z0-9]{6,12}$/ig;
      if (!reg.test(value)) {
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
  methods: {
    ...mapActions(["regs"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.regs({
            url: "/regs",
            info: {
              username: this.ruleForm2.username,
              password: this.ruleForm2.pass
            },
            callback: data => {
              console.log(data);
              if(data.code == 200){
                this.open();
                this.$router.push("/app/login");
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
        message: '注册成功！请登录',
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
.regDiv {
  margin-top: 10px;
  width: 400px;
  height: 330px;
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
  animation:fadeInRight 1s;
}
</style>
