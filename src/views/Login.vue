<template>
    <div>
        <input class="marginBottom" type="text" v-model="corpCode" placeholder="请输入公司码"> <br>
        <input class="marginBottom" type="text" v-model="loginName" placeholder="请输入用户名"> <br>
        <input class="marginBottom" type="text" v-model="password" placeholder="请输入密码"> <br>
        <button class="submit-button" @click="getLoginIn" type="submit">登陆</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Login",
        data () {
            return {
                corpCode: '',
                loginName: '',
                password: ''
            }
        },
        methods: {
            getLoginIn () {
                const params = 'loginname=' + this.loginName + '&password=' + this.password + '&corpcode=' + this.corpCode;
                // const config = {
                //       headers: {
                //           'Content-Type': 'multipart/form-data'
                //       }
                //   }
                axios.post('http://121.43.96.190:8080/user/login', params).then((res) => {
                    if (res.status === 200) {
                        this.$store.commit('SET_TOCKEN', res.data.res);
                        this.$router.push('/');
                        console.log('跳转至home页面')
                    }
                })
            }
        }
    }
</script>

<style scoped>
.marginBottom{
    margin-bottom: 10px;
    height: 24px;
    line-height: 24px;
    padding: 2px 6px;
}
.submit-button{
    width: 185px;
    padding: 2px 10px;
    height: 30px;
    line-height: 25px;
}
</style>
