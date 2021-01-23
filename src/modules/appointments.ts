import { reactive, toRefs }         from 'vue';
import { appointmentsMock }         from '@/mocks/mocks';
import { Appointment }              from '@/interfaces/Appointment';
import useNotifications             from '@/modules/notifications';

export default function useAppointments() {
    const state = reactive({
        appointments: [ { id: 1, date: '', status: '', doctor: { name: '', specialty: '', location: '', photo: '' } } ]
    })

    state.appointments = appointmentsMock;

    function handleChangeAppointmentStatus( id: number, status: string ) {
        const notifications = useNotifications();
        let newNotificationValue = '';
        let newNotificationDate = '';

        // @ts-ignore
        const items = state.appointments.map(( item: Appointment ) => {
            if ( item.id === id ) {
                item.status = status;

                newNotificationValue = `${ item.doctor.name } - ${ item.doctor.specialty }`
                newNotificationDate= item.date;

                return item;
            }

            return item;
        });

        notifications.addNotification( id, newNotificationValue, newNotificationDate, status );

        state.appointments = [...items]
    }

    function handleClearAppointmentStatus( type: number, id: number ): void {
        const notifications = useNotifications();

        notifications.handleClearNotificationStatus( type, id );

        // @ts-ignore
        state.appointments.map(( item: Appointment ) => {
            if ( item.id === id ) item.status = '';

            return item;
        })
    }

    function handleAddAppointment( data: Appointment ): void {
        data.id = state.appointments.length;

        state.appointments.push(data)
    }

    return {
        ...toRefs( state ),
        handleChangeAppointmentStatus,
        handleAddAppointment,
        handleClearAppointmentStatus
    }
}
