<template>
    <img v-bind:class="variant" :src="src" :alt="alt"/>
</template>

<script>
    export default {
        name: 'BaseButton',
        props: {
            src: {
                type: String,
                default: ''
            },
            alt: {
                type: String,
                default: ''
            },
            variant: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped lang="scss">
    img {
        &.rounded {
            border-radius: 100%;
        }
    }
</style>
