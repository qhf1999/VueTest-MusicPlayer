<template>
  <div class="login" clearfix>
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="auto"
          class="demo-ruleForm"
        >
          <h3>注册</h3>
          <hr />
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="email" label="邮箱">
            <el-input
              v-model="ruleForm.email"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <router-link to="/">登录账号</router-link>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >注册账号</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var name_pattern = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
    let pass_pattern =
      /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{6,12}$/;
    let email_pattern =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

    var validatename = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不能为空"));
      } else if (!name_pattern.test(value)) {
        callback(
          new Error("5-20个以字母开头、可带数字、“_”、“.”")
        );
      } else {
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else if (!pass_pattern.test(value)) {
        callback(new Error("密码应是6-12位数字、字母或字符！"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
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
      ruleForm: {
        username: "",
        email: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        username: [{ validator: validatename, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [{ validator: validateemail, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
          .post("/register/", {
            name: this.ruleForm.username,
            pass: this.ruleForm.pass,
            email:this.ruleForm.email,
          })
          .then((res) => {
            if (res.data.status === 200) {
              this.$router.push({ path: "/login" });
            } else {
              alert("注册失败，请您重新注册");
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
  },
};
</script>

<style scoped>
* {
    outline-width: 0;
    font-family: "Nunito" !important;
}

.login {
  position: absolute;
  width: 100%;
  height: 100%;
  
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  /* background: url("../assets/images/login_bg.png") no-repeat; */
  background-size: cover;
  width: 500px;
  height: auto;
  margin: 215px auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 20px;
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
  margin-left: 0px;
  margin: 10px;
}
</style>