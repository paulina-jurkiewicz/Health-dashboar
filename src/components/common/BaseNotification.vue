<template>
    <div class="notification" v-bind:class="variant">
        <span>{{ notification.value }}</span>

        <BaseDataWithIcon variant="small" v-if="variantError()">
            <template v-slot:icon><IconCalendar /></template>

            <template v-slot:value>{{ notification.date }}</template>
        </BaseDataWithIcon>

        <BaseDropdown v-if="optionsShown" @click-dropdown-option="handleClickDropdownOption" variant="only-icon" :options="options">
            <template v-slot:icon>
                <IconArrowRight/>
            </template>
        </BaseDropdown>
    </div>
</template>

<script lang="ts">
import IconCalendar             from '@/components/icons/IconCalendar';
import BaseDataWithIcon         from '@/components/common/BaseDataWithIcon';
import BaseDropdown             from '@/components/common/BaseDropdown';
import IconArrowRight           from '@/components/icons/IconArrowRight';
import { getCurrentInstance }   from 'vue';

export default {
    name: 'BaseNotification',
    components: { IconArrowRight, BaseDropdown, IconCalendar, BaseDataWithIcon },
    props: {
        notification: {
            type: Object,
            default: () => ({
                id: null,
                value: null,
                status: null,
                date: null
            })
        },
        options: {
          type: Array,
          default: null
        },
        variant: {
            type: String,
            default: ''
        },
        optionsShown: {
            type: Boolean,
            default: false
        }
    },
    setup( props: any ) {
        const { emit } = getCurrentInstance();

        function variantError(): boolean {
            return props.variant === 'danger';
        }

        function handleClickDropdownOption( value: string ): void {
            emit( 'click-notification-dropdown-option', value, props.notification.id )
        }

        return { variantError, handleClickDropdownOption }
    }
}
</script>

<style lang="scss">
.notification {
    text-align: left;
    margin-bottom: rem(10);
    font-size: rem(14);
    position: relative;
    padding-right: rem(100);

    span {
        margin-bottom: rem(5);
        font-size: rem(16);
        display: block;
    }

    &.danger {
        span {
            color: $color-danger-font-color;
        }

        svg,
        .data {
            color: #fff;
        }
    }

    .button-with-icon {
        position: absolute;
        right: 0;
        top: 0;
    }

    .dropdown {
        position: absolute;
        right: 0;
        z-index: 9;
        top: 0;
    }
}
</style>
