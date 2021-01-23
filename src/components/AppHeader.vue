<template>
    <header class="app-header">
        <BaseButton @click="handleOpenAppointmentModal" className="primary lg">
            Make an appointment
        </BaseButton>

        <AddAppointmentModal v-if="openAppointmentModal" @close-add-appointment-modal="handleOpenAppointmentModal"
                             @submit-add-appointment="handleOpenAppointmentModal" />

        <div class="app-header__user-data">
            <Suspense>
                <template #default>
                    <User />
                </template>

                <template #fallback>
                    User data is loading
                </template>
            </Suspense>
        </div>
    </header>
</template>

<script lang="ts">
import BaseButton                   from './common/BaseButton.vue';
import User                         from './User';
import AddAppointmentModal          from '@/components/AddAppointmentModal.vue';
import { reactive, toRefs }         from 'vue';

export default {
    name: 'AppHeader',
    components: {
        AddAppointmentModal, User, BaseButton
    },
    setup() {
        const state = reactive({
            openAppointmentModal: false
        })

        function handleOpenAppointmentModal(): void {
            state.openAppointmentModal = !state.openAppointmentModal;
        }

        return {...toRefs(state), handleOpenAppointmentModal}

    }
}
</script>

<style scoped lang="scss">
.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: rem(15);
    background-color: #fff;
    border-bottom: rem(1) solid #ebebeb;

    @include media-medium-up() {
        padding: rem(15) rem(30);
    }

    &__user-data {
        display: flex;
        align-items: center;
    }
}
</style>
