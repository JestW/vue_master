<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p></p>
    <button @click="getInfo">请求数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '../api/user'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
      getInfo () {
          getUserInfo().then((res) => {
              debugger
              let content = res.data;
              if (content.status === 200) {
                  debugger
              }
          })
      }
    }
}
</script>
