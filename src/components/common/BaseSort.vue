<template>
    <div class="sort">
        <span>Sort by: </span> {{ value }}

        <BaseDropdown @click-dropdown-option="handleSelectOption" variant="only-icon" :options="sortByOptions">
            <template v-slot:icon>
                <IconSettings/>
            </template>
        </BaseDropdown>
    </div>
</template>

<script lang="ts">
import BaseDropdown                                     from '@/components/common/BaseDropdown';
import IconSettings                                     from '@/components/icons/IconSettings';
import { getCurrentInstance, reactive, toRefs }         from 'vue';
import { DropdownOption }                               from "@/interfaces/DropdownOption";

export default {
    name: 'BaseSort',
    components: { BaseDropdown, IconSettings },
    props: {
        sortByOptions: {
            type: Array,
            default: null
        }
    },
    setup( props: any ) {
        const { emit } = getCurrentInstance();

        let state = reactive({
            value: 'default'
        });

        function handleSelectOption( id: number ) {
            state.value = props.sortByOptions.find(( item: DropdownOption ) => item.id === id ).value;

            emit( 'click-sort-option', id );
        }

        return { ...toRefs(state), handleSelectOption };
    }
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
