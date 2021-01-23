<template>
    <div class="dropdown">
        <BaseButton @click="toggleDropdown" :className="variant">
            <slot name="icon"></slot>
        </BaseButton>

        <ul v-if="isOpen" class="dropdown__menu">
            <li  v-for="( option, index ) in options" :key="index"
                 :data-type="option.id" @click="handleClickOption( option.id )">
                {{ option.value }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import BaseButton                                   from '@/components/common/BaseButton';
import { reactive, toRefs, getCurrentInstance }     from 'vue';


export default {
    name: 'BaseDropdown',
    components: { BaseButton },
    props: {
        variant: {
            type: String,
            default: null
        },
        options: {
            type: Array,
            default: null
        }
    },
    setup() {
        const { emit } = getCurrentInstance();

        let state = reactive({
            isOpen: false
        });

        function toggleDropdown(): void {
            state.isOpen = !state.isOpen;
        }

        function handleClickOption( value: string ): void {
            this.toggleDropdown();

            emit( 'click-dropdown-option', value );
        }

        return { ...toRefs(state), toggleDropdown, handleClickOption };
    },
}
</script>

<style lang="scss">
    .dropdown {
        &__menu {
            background-color: #fff;
            color: #333;
            border-radius: rem(6);
            position: absolute;
            width: 200px;
            overflow: hidden;
            z-index: 99;
            padding: 0;
            right: 0;
            top: rem(30);

            @include media-small-up() {
                top: 0;
                left: rem(50);
            }

            li {
                list-style: none;
                padding: rem(15);
                border-bottom: rem(1) solid #ebebeb;
                cursor: pointer;

                &:hover {
                    background-color: $color-secondary-lightest;
                    color: $color-primary;
                }

                &:last-child {
                    border-bottom: 0;
                }
            }
        }
    }
</style>
