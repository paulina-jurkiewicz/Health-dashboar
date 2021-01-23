import { reactive, toRefs }         from 'vue';
import { locationsMock }            from '@/mocks/mocks';

export default function useLocations() {
    const state = reactive({
        locations: [ {} ]
    })

    state.locations = locationsMock;

    return {
        ...toRefs( state )
    }
}
