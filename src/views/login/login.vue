<template>
  <div class="login" clearfix>
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form
          ref="user"
          :model="user"
          :rules="rules"
          status-icon
          label-width="100px"
        >
          <h3>登录</h3>
          <hr />
          <el-form-item prop="username" label="用户名">
            <el-input
              v-model="user.username"
              placeholder="请输入用户名"
              prefix-icon
            ></el-input>
          </el-form-item>
          <el-form-item id="password" prop="password" label="密码">
            <el-input
              v-model="user.password"
              show-password
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <router-link to="/forgot">忘记密码</router-link>
          <router-link to="/register">注册账号</router-link>
          <el-form-item>
            <el-button type="primary" icon="el-icon-upload" @click="login"
              >登 录</el-button
            >
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (!this.user.username) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.user.password) {
        this.$message.error("请输入密码！");
        return;
      } else {
        this.$axios
          .post("/login/", {
            name: this.user.username,
            password: this.user.password,
          })
          .then((res) => {
            if (res.data.status === 200) {
              this.$router.push({ path: "/index" });
            } else {
              alert("您输入的用户名或密码错误！");
            }
          });
      }
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