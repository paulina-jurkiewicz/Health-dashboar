<template>
    <div class="base-user">
        <BaseImage :src="photo" :alt="name" variant="rounded"/>

        <span>{{ name }}</span>
    </div>
</template>

<script>
import BaseImage from './BaseImage.vue';

export default {
    name: 'BaseUserData',
    props: {
        photo: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },
    components: {
        BaseImage
    }
}
</script>

<style scoped lang="scss">
.base-user {
    position: relative;
    display: flex;
    align-items: center;

    span {
        padding-left: rem(15);
    }
}
</style>
