import { reactive, toRefs }         from 'vue';
import { doctorsMock }              from '@/mocks/mocks';
import { Doctor }                     from '@/interfaces/Doctor';

export default function useDoctors() {
    const state = reactive({
        doctors: [ { name: '', specialty: '', location: '', photo: '' } ]
    })

    setDoctorsListDefault();

    function updateDoctorList( location: string, specialty: string ) {
        setDoctorsListDefault();

        if ( location.length ) {
            state.doctors = state.doctors.filter(( doctor: Doctor ) => {
                return doctor.location === location
            });
        }

        if ( specialty.length ) {
            state.doctors = state.doctors.filter(( doctor: Doctor ) => {
                return doctor.specialty === specialty
            });
        }
    }

    function setDoctorsListDefault() {
        state.doctors = doctorsMock;
    }

    return {
        ...toRefs( state ),
        updateDoctorList,
        setDoctorsListDefault
    }
}
