<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#0099ff" fill-opacity="1"
      d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
    </path>
  </svg>
  <div class="container">
    <div class="box login" :style="loginStyle">
      <div class="form-content">
        <div class="avtar">
          <div class="pic"><img src="./img/1.jpg" alt=""></div>
        </div>
        <h1>Welcome back</h1>
        <form action="#" class="form">
          <div>
            <user-outlined class="icon" />
            <input type="text" placeholder="username">
          </div>
          <div>
            <lock-outlined />
            <input type="password" placeholder="password">
          </div>
          <div class="btn">
            <button>login</button>
          </div>
        </form>
        <p class="btn-something">
          Don't have an account ? <span class="signupbtn" @click="handleSigngup">signup</span>
        </p>
      </div>
    </div>
    <div class="box signup" :style="signupStyle">
      <div class="form-content">
        <div class="avtar">
          <div class="pic"><img src="./img/2.jpg" alt=""></div>
        </div>
        <h1>Let's get started</h1>
        <form action="#" class="form">
          <div>
            <i class="fa fa-user-o"></i>
            <input type="text" placeholder="username">
          </div>
          <div>
            <i class="fa fa-envelope-o"></i>
            <input type="email" placeholder="email">
          </div>
          <div>
            <i class="fa fa-key"></i>
            <input type="password" placeholder="password">
          </div>
          <div class="btn">
            <button>signup</button>
          </div>
        </form>
        <p class="btn-something">
          Already have an account ? <span class="loginbtn" @click="handleLogin">login</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import './style.less';
</style>

<script setup>
  import { ref, computed } from 'vue'
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

  const type = ref('login')
  const loginStyle = computed(() => {
    return `transform: ${type.value === 'login' ? 'rotateY(0deg)' : 'rotateY(180deg)' };`
  })
  const signupStyle = computed(() => {
    return `transform: ${type.value === 'signup' ? 'rotateY(0deg)' : 'rotateY(-180deg)' };`
  })

  function handleLogin() {
    type.value = 'login'
  }
  function handleSigngup() {
    type.value = 'signup'
  }
</script>