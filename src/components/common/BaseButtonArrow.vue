<template>
    <BaseButton class="button-with-icon" v-bind:class="variant">
        <IconArrowRight />
    </BaseButton>
</template>

<script>
import BaseButton           from '@/components/common/BaseButton';
import IconArrowRight       from '@/components/icons/IconArrowRight';

export default {
    name: 'BaseButtonArrow',
    components: { BaseButton, IconArrowRight },
    props: {
        variant: {
            type: String,
            default: null
        }
    }
}
</script>

<style lang="scss">
    .button-base.button-with-icon {
        width: rem(50);
        height: rem(50);

        &.default {
            background: transparent;
            padding: 0;
            margin: 0;
            min-width: auto;
            border-radius: 50%;

            &:hover {
                background-color: $color-white-transparent;
            }
        }

        svg {
            margin-right: 0;
        }
    }
</style>
