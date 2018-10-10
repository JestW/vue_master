<template>
    <div>
        <input type="text" @input="inputValue" v-model="value">
        <p>{{ value }}</p>
    </div>
</template>

<script>
export default {
    name: "AInput",
    data () {
        return {
            value: ''
        }
    },
    methods: {
        inputValue (event) {
            this.$emit('onChange', event.target.value)
        }
    }
}
</script>

<style scoped>

</style>
