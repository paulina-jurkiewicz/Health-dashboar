<template>
    <div class="filters">
        <BaseButton v-for="( filter, index ) in filters"
                    :key="index"
                    :className="className( filter.id )"
                    @click="handleChangeFilter( filter.id )">
            {{ filter.label }}
        </BaseButton>
    </div>
</template>

<script lang="ts">
import BaseButton                   from '@/components/common/BaseButton';
import { getCurrentInstance }       from 'vue';

export default {
    name: 'BaseFilters',
    components: { BaseButton },
    props: {
        filters: {
            type: Array,
            default: null
        },
        selectedClass: {
            type: String,
            default: 'primary'
        },
        activeFilter: {
            type: Number,
            default: 0
        }
    },
    setup( props: any ) {
        const { emit } = getCurrentInstance();

        function handleChangeFilter( value: number ): void {
            emit( 'change-filter-active', value );
        }

        function isActive( id: number ): boolean {
            return id === props.activeFilter;
        }

        function className( id: number ): string {
            return isActive( id ) ? props.selectedClass : 'success';
        }

        return { handleChangeFilter, isActive, className }

    }
}
</script>

<style lang="scss">
.filters {

}
</style>
