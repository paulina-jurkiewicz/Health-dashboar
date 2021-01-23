import { reactive, toRefs }             from 'vue';
import { specialtiesMock }              from '@/mocks/mocks';

export default function useSpecialties() {
    const state = reactive({
        specialties: [ {} ]
    })

    state.specialties = specialtiesMock;

    return {
        ...toRefs( state )
    }
}
