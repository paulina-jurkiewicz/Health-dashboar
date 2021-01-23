<template>
    <div id="app" class="app">
        <AppNav class="app__nav"></AppNav>

        <main class="app__main">
            <router-view class="app__router-view"/>
        </main>
    </div>
</template>

<script>
import {defineComponent} from 'vue';

import AppNav from '@/components/AppNav.vue';

export default defineComponent({
    name: 'App',
    components: {
        AppNav
    }
});
</script>

<style lang="scss" scoped>
.app {
    width: 100vw;
    background: $color-primary-background--light;

    @include media-small-up() {
        display: flex;
    }

    &__nav {
        display: none;
        box-shadow: 0 rem(8) rem(22) 0 rgba(132, 137, 155, 0.09);

        @include media-small-up() {
            width: 100px;
            display: flex;
        }
    }

    &__main {
        background: $color-primary-background;

        @include media-small-up() {
            width: calc(100vw - 100px);
        }
    }

    &__router-view {
        width: 100%;
    }
}
</style>
