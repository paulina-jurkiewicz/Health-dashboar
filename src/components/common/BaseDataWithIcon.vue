<template>
    <div class="data" v-bind:class="variant">
        <slot name="icon"></slot>

        <slot name="value"></slot>
    </div>
</template>

<script>
    export default {
        name: 'BaseDataWithIcon',
        props: {
            variant: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped lang="scss">
    .data {
        display: flex;
        align-items: center;
        margin-bottom: rem(10);
        color: $font-color-primary;
        text-transform: capitalize;

        &.small {
            font-size: rem(14);
            font-weight: 300;
        }

        svg {
            color: $color-primary;
            width: rem(20);
            margin-right: rem(5);
        }

        &.success {
            color: $color-success;

            svg {
                color: $color-success;
            }
        }

        &.large {
            svg {
                width: rem(50);
            }
        }
    }
</style>
