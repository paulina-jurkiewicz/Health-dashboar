<template>
    <div class="user">
        <BaseImage :src="user.photo" :alt="user.name" variant="rounded"/>

        <span>{{ user.name }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent }    from 'vue';
import BaseImage              from './common/BaseImage.vue';
import useUser                from '../modules/user';

export default defineComponent({
    name: 'User',
    components: {
        BaseImage
    },
    async setup( ) {
        const { user, error, load } = useUser();

        await load();

        return { user, error }
    }
})
</script>

<style scoped lang="scss">
.user {
    position: relative;
    display: none;
    align-items: center;

    @include media-small-up() {
        display: flex;
    }

    span {
        padding-left: rem(15);
    }
}
</style>
