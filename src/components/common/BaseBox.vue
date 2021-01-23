<template>
    <div class="base-box" v-bind:class="variant">
        <h2 class="box__heading">
            {{ title }}
        </h2>

        <div class="box__content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseBox',
    props: {
        title: {
            type: String,
            default: null
        },
        variant: {
            type: String,
            default: null
        }
    }
}
</script>

<style scoped lang="scss">
    .base-box {
        border-radius: $border-radius-lg;
        box-shadow: 0 rem(9) rem(27) 0 rgba(131, 142, 176, 0.08);
        padding: rem(15);
        margin-bottom: rem(15);
        position: relative;

        @include media-medium-up() {
            padding: rem(30);
            margin-bottom: rem(30);
        }

        h2 {
            margin: 0;
        }

        &.secondary {
            background-image: linear-gradient(#fff, $color-secondary-lighten);
        }

        &.primary {
            background-image: linear-gradient($color-primary-light, $color-primary-darken);
            color: #fff;
        }

        &.danger {
            color: #fff;
            background-image: linear-gradient($color-danger-lighten, $color-danger-light);
        }
    }
</style>
