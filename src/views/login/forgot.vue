<template>
  <div class="login" clearfix>
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form
          ref="forgotForm"
          :model="forgotForm"
          :rules="rules"
          status-icon
          label-width="100px"
        >
          <h3>忘记密码</h3>
          <hr />
          <el-form-item prop="username" label="用户名">
            <el-input
              v-model="forgotForm.username"
              placeholder="请输入用户名"
              prefix-icon
            ></el-input>
          </el-form-item>
          <el-form-item prop="email" label="邮箱">
            <el-input
              v-model="forgotForm.email"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>
          <router-link to="/login">登录</router-link>
          <router-link to="/register">注册账号</router-link>
          <el-form-item>
            <el-button type="primary" icon="el-icon-upload" @click="submitForm('forgotForm')"
              >找回密码</el-button
            >
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>


<script>
export default {
  name: "VueTestForgot",

  data() {
    let email_pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

    var validatename = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var validateemail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("邮箱不能为空"));
      } else if (!email_pattern.test(value)) {
        callback(new Error("请输入正确的邮箱格式"));
      } else {
        callback();
      }
    };
    return {
      forgotForm: {
        username: "",
        email: "",
      },
      rules: {
        username: [{ validator: validatename, trigger: "blur" }],
        email: [{ validator: validateemail, trigger: "blur" }],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post("/forgot/", {
              name: this.forgotForm.username,
              email: this.forgotForm.email,
            })
            .then((res) => {
              if (res.data.status === 200) {
                this.$router.push({ path: "/login" });
              } else {
                alert("用户名与邮箱不符");
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: url("../assets/images/background.jpg") no-repeat center center; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  /* background: url("../assets/images/login_bg.png") no-repeat; */
  background-size: cover;
  width: 600px;
  height: auto;
  margin: 215px auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 40px;
}
#password {
  margin-bottom: 5px;
}
h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}
a {
  text-decoration: none;
  color: #aaa;
  font-size: 15px;
}
a:hover {
  color: coral;
}
.el-button {
  width: 80%;
  margin-left: -50px;
}
</style>