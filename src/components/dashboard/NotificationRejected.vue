<template>
    <div class="dashboard-alerts">
        <p>{{ subtitleValue() }}</p>

        <BaseNotification variant="danger" v-for="( item, index ) in selectedNotification()" :key="index" :notification="item"
                          :options="notificationOption()" :optionsShown="true"
                          @click-notification-dropdown-option="handleClearAppointmentStatus"/>
    </div>
</template>

<script lang="ts">
import BaseNotification         from '@/components/common/BaseNotification';
import useNotifications         from '@/modules/notifications';
import { Notification }         from '@/interfaces/Notification';
import useAppointments          from '@/modules/appointments';
import { DropdownOption }       from '@/interfaces/DropdownOption';

export default {
    name: 'NotificationRejected',
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

        function selectedNotification(): Notification[] {
            return notifications.value.filter(( el: Notification ) => el.status === 'reject');
        }

        function selectedNotificationLength(): number {
            return selectedNotification().length;
        }

        function subtitleValue(): string {
            return props.subtitle.replace( '%size%', selectedNotificationLength() );
        }

        function notificationOption(): DropdownOption[] {
            return [ { value: 'Restore visit', id: 0 } ];
        }

        return { notifications, handleClearAppointmentStatus, selectedNotification, subtitleValue, notificationOption }
    }
}
</script>


<style lang="scss">
.dashboard-alerts {
    p {
        opacity: 0.7;
    }
}
</style>
