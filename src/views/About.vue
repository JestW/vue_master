<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="returnToEmail"> 跳转至email页面 </button>
    <p></p>
  </div>
</template>
<script>
  export default {
      methods: {
          returnToEmail () {
              this.$router.push('/email')
          }
      }
  }
</script>
