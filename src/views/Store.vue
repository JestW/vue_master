<template>
    <div>
        <!--<input type="text">-->
        <!--<a-input @onChange="handleInput"></a-input>-->
        <!--<p>{{ inputMessage }}</p>-->
    </div>
</template>
<script>
import AInput from '_c/AInput'
export default {
    name: "Store",
    data () {
        return {
            inputMessage: ''
        }
    },
    components: {
        AInput
    },
    methods: {
        handleInput (val) {
            // this.inputMessage = val;
        }
    }
}
</script>
<style scoped>
</style>
