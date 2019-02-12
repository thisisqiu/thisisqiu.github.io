<template>
    <div id="loginBox">
        <Head title='登录/注册' :show1='true' :show2='false'></Head>
        <div class='loginDiv'>
            <el-tabs value='first' @tab-click="handleClick" type="card" stretch>
                <el-tab-pane label="登录" name="first" >
                 <v-form
                    ref="form"
                    v-model="login"
                    lazy-validation
                  >
                    <v-text-field
                      v-model="name"
                      :counter="10"
                      :rules="nameRules"
                      label="用户名"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="pwd"
                      :rules="pwdRules"
                      label="密码"
                      required
                    ></v-text-field>

                    <el-button type="success" :disabled="!login" @click="validate">登录</el-button>

                    <el-button type="info"  @click="reset">重置</el-button>
                  </v-form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="second">
                  <v-form
                    ref="form2"
                    v-model="reg"
                    lazy-validation
                  >
                    <v-text-field
                      v-model="regName"
                      :counter="10"
                      :rules="regRules"
                      label="请输入用户名"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="pwd1"
                      :rules="pwd1Rules"
                      label="请输入密码"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="pwd2"
                      :rules="pwd2Rules"
                      label="确认密码"
                      required
                    ></v-text-field>

                    <el-button type="success" :disabled="!reg" @click="validate2">注册</el-button>

                    <el-button type="info"  @click="reset2">重置</el-button>
                  </v-form>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import Head from "../components/Head.vue";

export default {
  data: () => ({
    login: true,
    name: '',
    nameRules: [
      v => !!v || '请输入用户名',
      v => (v && v.length <= 10) || '请输入正确用户名'
    ],
    pwd: '',
    pwdRules: [
      v => !!v || '请输入密码',
      v => /^[a-zA-Z0-9_]{6,12}$/.test(v) || '请输入正确密码'
    ],
    reg: true,
    regName:'',
    regRules: [
      v => !!v || '请输入6-10位数字字母下划线组成的用户名',
      v => /^[a-zA-Z0-9_]{6,10}$/.test(v) || '请输入6-10位数字字母下划线组成的用户名'
    ],
    pwd1:'',
    pwd1Rules: [
      v => !!v || '请输入6-12位数字字母组成的密码',
      v => /^[a-zA-Z0-9]{6,12}$/.test(v) || '请输入6-12位数字字母组成的密码'
    ],
    pwd2:'',
    pwd2Rules:[
      v => /^[a-zA-Z0-9]{6,12}$/.test(v) || '请再次输入密码'
    ]

  }),
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    validate () {
      if (this.$refs.form.validate()) {
        // this.snackbar = true
        console.log(this.name)
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    validate2 () {
      if (this.$refs.form2.validate()) {
        if(this.pwd1 == this.pwd2){
          
        }else{
          this.pwd1 = '';
          this.pwd2 = '';
          this.open();
        }
      }
    },
    reset2 () {
      this.$refs.form2.reset()
    },
    open() {
      this.$message({
        showClose: true,
        message: '两次密码输入不一致！',
        type: 'error',
        duration:1000
        });
    }
  },
  components: {
    Head
  }
};
</script>
<style lang="scss" scoped>
#loginBox {
  width: 100%;
  overflow: hidden;
  // background-color: #f7f7f7;
}
.loginDiv {
  margin-top: 56px;
  overflow: hidden;
  width: 100%;
}
</style>


