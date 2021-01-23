<template>
    <div class="dashboard-notifications">
        <p>{{ subtitleValue() }}</p>

        <BaseNotification variant="success" v-for="( item, index ) in todayEvents()" :key="index" :notification="item"
                          :optionsShown="false" @click-notification-dropdown-option="handleClearAppointmentStatus"/>
    </div>
</template>

<script lang="ts">
import BaseNotification         from '@/components/common/BaseNotification';
import useNotifications         from '@/modules/notifications';
import { Notification }         from '@/interfaces/Notification';
import useAppointments          from '@/modules/appointments';
import moment                   from 'moment';

export default {
    name: 'NotificationsConfirm',
    components: {
        BaseNotification
    },
    props: {
        subtitle: {
            type: String,
            default: null
        }
    },
    setup( props: any ) {
        const { notifications } = useNotifications();
        const { handleClearAppointmentStatus } = useAppointments();

        function selectedNotification(): Notification[] | [] {
            return notifications.value.filter(( el: Notification ) => el.status === 'accept' );
        }

        function todayEvents(): Array<Notification> {
            return selectedNotification().filter(( el: Notification ) => moment().diff( el.date ) <= 0 && moment( el.date ).isSame( moment(), 'day' ) );
        }

        function todayEventsLength(): number {
            return todayEvents().length;
        }

        function subtitleValue(): string {
            if ( todayEventsLength() > 0 ) {
                return props.subtitle
                    .replace( '%size%', todayEventsLength() )
                    .replace( '%date%', 'today' );
            }

            return `You don't have any visits today`;
        }

        return { notifications, handleClearAppointmentStatus, todayEvents, subtitleValue }
    }
}
</script>


<style lang="scss">
.dashboard-notifications {
    p {
        opacity: 0.7;
    }
}
</style>
