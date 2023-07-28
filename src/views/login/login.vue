<template>
  <!-- <el-button>Default</el-button> -->
  <div class="login-page flex-center">
    <div class="login-box flex-center">
      <div class="left flex-center">
        <div class="title">员工座位信息系统</div>
        <div class="title eng">Seat Assignment System</div>
      </div>
      <div class="right flex-center">
        <div class="login-title">登录</div>
        <div class="login-form flex-center">
          <el-input class="m-t-20px" v-model="data.username" placeholder="用户名" style="width: 300px" />
          <el-input class="m-t-20px" v-model="data.password" show-password placeholder="密码" style="width: 300px" />
          <el-button class="m-t-20px" type="primary" @click="login" :loading="data.loading">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
// import { showMessage } from '@/utils/useMessage.ts';
// console.log('showMessage :>> ', showMessage);
const router = useRouter()
// import { debounce } from '@/utils/tools.ts'
const data = reactive({
  username: "admin",
  password: "password",
  loading: false
})

const login = () => {
  data.loading = true;
  if (data.username === 'admin' && data.password === 'password') {
      // 登录成功，根据用户身份跳转到相应页面
      ElMessage({
        type: 'success',
        message: '登录成功',
      })
      data.loading = false;
      router.replace({
        path: '/',
      })
    } else if (data.username && data.password) {
      // 普通用户登录
      ElMessage({
        type: 'success',
        message: '登录成功',
      })
      data.loading = false;

    } else {
      // errorMessage.value = 'Invalid username or password';
      ElMessage({
        type: 'error',
        message: '用户名或密码错误'
      })
      data.loading = false;

    }

}
</script>
  
<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/images/login/login_bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  .login-box {
    position: relative;
    width: 780px;
    height: 443px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    backdrop-filter: blur(40px);
    overflow: hidden;

    .left {
      flex: 1;
      flex-direction: column;
      height: 100%;
      background-image: linear-gradient(to right, #5973f5, #3759af);

      .title {
        font-size: 30px;
        color: #fff;

        &.eng {
          font-size: 18px;
        }
      }
    }


    .right {
      width: 61.8%;
      height: 100%;
      flex-direction: column;

      .login-title {
        font-size: 30px;
        color: #333;
      }

      .login-form {
        flex-direction: column;
      }
    }

    // box-shadow: 0 0 14px 3px #e5e5e5;

    // &::after {
    //   content: '';
    //   position: absolute;
    //   filter: blur(40px);
    //   width: 100%;
    //   height: 100%;
    //   background-color: transparent;
    // }
  }
}
</style>