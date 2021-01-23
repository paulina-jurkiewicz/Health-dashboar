<template>
    <div class="dashboard-appointments">
        <div class="dashboard__top">
            <BaseFilters :activeFilter="activeFilter" @change-filter-active="handleChangeActiveFilter" :filters="filtersOptions" selectedClass="primary"/>

            <BaseSort @click-sort-option="handleChangeSortOption" :sortByOptions="sortByOptions"/>
        </div>

        <BasePagination @change-page-number="handleChangePage" :itemsLength="filteredAppointment().length"
        :itemsPerPage="3" :currentPage="1"/>

        <div class="dashboard__content">
            <BaseAppointment v-for="(item, index) in eventsPerPage()" :key="index" :appointment="item"
                         @change-appointment-status="handleChangeAppointmentStatus"/>

            <template v-if="!eventsPerPage().length">You have no appointments!</template>
        </div>
    </div>
</template>

<script lang="ts">
import useAppointments              from '@/modules/appointments';
import BaseAppointment              from '@/components/common/BaseAppointment'
import { reactive, toRefs }         from 'vue';
import { Appointment }              from '@/interfaces/Appointment';
import moment                       from 'moment';
import BasePagination               from '@/components/common/BasePagination';
import BaseSort                     from '@/components/common/BaseSort';
import BaseFilters                  from '@/components/common/BaseFilters.vue';
import { DropdownOption }           from '@/interfaces/DropdownOption';
import { FilterOption }             from '@/interfaces/FilterOption';

export default {
    name: 'DashboardAppointments',
    components: {
        BaseFilters,
        BasePagination,
        BaseAppointment,
        BaseSort
    },
    setup() {
        const state = reactive({
            upcomingShown: false,
            pastShown: false,
            sortBy: 0,
            page: 1,
            totalPages: 0,
            total: 0,
            activeFilter: 0
        })

        const { appointments, handleChangeAppointmentStatus } = useAppointments();

        const sortByOptions: Array<DropdownOption> = [ { id: 0, value: 'default' }, { id: 1, value: 'date' } ]
        const filtersOptions: Array<FilterOption> = [ { label: 'All', id: 0 }, { label: 'Upcoming', id: 1 }, { label: 'Past', id: 2 } ]

        function filteredAppointment(): Array<Appointment> | [] {
            let events = appointments.value.filter(( item: Appointment ) => item.status !== 'reject');

            if ( state.activeFilter === 1 ) {
                events = events.filter(( item: Appointment ) => {
                    return moment().diff( item.date ) <= 0 ;
                })
            }

            if ( state.activeFilter === 2 ) {
                events = events.filter(( item: Appointment ) => {
                    return moment().diff( item.date ) > 0;
                })
            }

            if ( state.sortBy && state.sortBy === 1 ) {
                events = events.sort(( a: Appointment, b: Appointment ) => moment( a.date ).diff( moment( b.date ) ));
            }

            return events;
        }

        function handleChangePage( value: number ): void {
            state.page = value;
        }

        function eventsPerPage(): Array<Appointment> {
            return filteredAppointment().slice(( state.page - 1 ) * 3, state.page * 3 )
        }

        function handleChangeSortOption( id: number ): void {
            state.sortBy = id;
            state.page = 1;
        }

        function handleChangeActiveFilter( value: number): void {
            state.activeFilter = value;
            state.page = 1;
        }

        return { ...toRefs(state), appointments, handleChangeAppointmentStatus, filteredAppointment, sortByOptions, handleChangeSortOption, handleChangePage, eventsPerPage, handleChangeActiveFilter, filtersOptions }
    }
}
</script>


<style lang="scss">
.dashboard-appointments {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: rem(30) 0;
    flex-wrap: wrap;
    width: 100%;

    .dashboard {
        &__top {
            display: flex;
            flex-direction: column;

            @include media-small-up() {
                flex-direction: row;
                justify-content: space-between;
                align-items: baseline;
            }

            button {
                margin: rem(5);

                @include media-small-up() {
                    margin: 0 rem(5);

                    &:first-child {
                        margin-left: 0;
                    }
                }
            }

            .filters {
                display: flex;
                flex-direction: column;

                @include media-small-up() {
                    flex-direction: row;
                    margin-bottom: rem(15);
                }
            }

            .sort {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    color: $font-color-primary;
                }
            }
        }

        &__content {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
    }
}
</style>
