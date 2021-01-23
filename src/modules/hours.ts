import { reactive, toRefs }         from 'vue';
import { hoursMock }                from '@/mocks/mocks';

export default function useHours() {
    const state = reactive({
        hours: [ {} ]
    })

    state.hours = hoursMock;

    return {
        ...toRefs( state )
    }
}
