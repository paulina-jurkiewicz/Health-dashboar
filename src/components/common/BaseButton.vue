<template>
    <button class="button button-base" v-bind:class="className" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'BaseButton',
        props: {
            className: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .button-base {
        border-radius: rem(20);
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: rem(8) rem(16);
        border: 0;
        transition: all 0.3s ease;
        min-width: rem(120);

        svg {
            width: rem(20);
            margin-right: rem(5);
        }

        &.only-icon {
            width: rem(50);
            height: rem(50);
            background: transparent;
            padding: 0;
            margin: 0;
            min-width: auto;
            border-radius: 50%;

            &:hover {
                background-color: $color-white-transparent;
            }

            svg {
                margin-right: 0;
            }
        }

        &.success {
            background-color: lighten($color-primary, 22%);
            color: $color-primary;

            &:hover,
            &:focus,
            &:active {
                background-color: lighten($color-primary, 19%);
                color: darken($color-primary, 5%);
            }
        }

        &.danger {
            background-color: lighten($color-danger, 30%);
            color: $color-danger;

            &:hover,
            &:focus,
            &:active {
                background-color: lighten($color-danger, 25%);
                color: darken($color-danger, 5%);
            }
        }

        &.primary {
            background-image: linear-gradient($color-primary-light, $color-primary-darken);
            color: #fff;
            padding: rem(8) rem(16);

            &:hover,
            &:focus,
            &:active {

            }
        }
        &.lg {
            font-size: rem(16);
            border-radius: rem(10);
        }

        &:disabled,
        &[disabled]{
            opacity: 0.4;
            cursor: not-allowed;
        }
    }
</style>
