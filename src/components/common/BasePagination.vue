<template>
    <div class="pagination">
        <BaseButton className="success only-icon" @click="handleChangePage( 0 )" :disabled="page === 1">
            <IconArrowLeft />
        </BaseButton>

        <BaseButton className="success only-icon" @click="handleChangePage( 1 )" :disabled="page >= totalPagesNumber()">
            <IconArrowRight />
        </BaseButton>
    </div>
</template>

<script lang="ts">
    import { reactive, toRefs }         from 'vue';
    import IconArrowRight               from '@/components/icons/IconArrowRight';
    import IconArrowLeft                from '@/components/icons/IconArrowLeft';
    import BaseButton                   from '@/components/common/BaseButton';

    export default {
        name: 'BasePagination',
        components: {
            BaseButton, IconArrowRight, IconArrowLeft
        },
        props: {
            itemsLength: {
                type: Number,
                default: 0
            },
            itemsPerPage: {
                type: Number,
                default: 3
            },
            currentPage: {
                type: Number,
                default: 1
            }
        },
        setup( props: any, { emit } ) {
            const state = reactive({
                page: props.currentPage
            })

            function totalPagesNumber(): number {
                return Math.ceil( props.itemsLength / props.itemsPerPage );
            }

            function handleChangePage( value: number ): void {
                if ( value === 1 ) state.page = state.page + 1;

                if ( value === 0 ) state.page = state.page - 1;

                emit( 'change-page-number', state.page )
            }

            return { ...toRefs(state), totalPagesNumber, handleChangePage }
        }
    }
</script>

<style scoped lang="scss">
    .pagination {
        display: flex;
        justify-content: center;

        button.only-icon {
            margin: 0 rem(5);
        }
        svg {
            width: rem(20);
        }
    }
</style>
