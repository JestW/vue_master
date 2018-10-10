<template>
    <div>
        <p>{{ tel }}</p>
    </div>
</template>
<script>
    import state from "../store/state";

    export default {
        name: "tel",
      /*  data () {
            return {
                tel: ''
            }
        },*/
        computed: {
            tel () {
                return this.$store.state.TEL
            }
        },
        mounted () {
            // const _this = this;
            // this.$bus.$on('on-click', mes => {
            //     debugger
            //     _this.message = mes;
            // })
        }
    }
</script>
<style scoped>
</style>
