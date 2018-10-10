<template>
    <div>
        {{ home }}
    </div>
</template>

<script>
    export default {
        name: "argu",
        props: {
            home: {
                type: String,
                default: 'apple'
            }
        }
    }
</script>

<style scoped>

</style>
