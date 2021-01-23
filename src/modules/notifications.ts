import { reactive, toRefs }             from 'vue';
import { notificationsMock }            from '@/mocks/mocks';
import { Notification }                 from '@/interfaces/Notification';

export default function useNotifications() {
    const state = reactive({
        notifications: [ { id: 1, status: '', value: '', date: '' } ]
    })

    // @ts-ignore
    state.notifications = notificationsMock;

    function addNotification( id: number, value: string, date: string, status: string ): void {
        state.notifications.push( { id, value, date, status } );
    }

    function handleClearNotificationStatus( type: number, id: number ) {
        state.notifications.map(( item: Notification ) => {
            if ( item.id === id && type === 0 ) {
                item.status = '';
            }

            return item;
        })
    }

    return {
        ...toRefs( state ), addNotification, handleClearNotificationStatus
    }
}
