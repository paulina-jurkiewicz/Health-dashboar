<template>
    <div class="dashboard">
        <div class="row">
            <AppHeader/>
        </div>

        <div class="row content">
            <div class="column">
                <BaseBox title="Alerts" variant="primary">
                    <template v-slot:content>
                        <NotificationsConfirm subtitle="You have %size% visits today"/>
                    </template>
                </BaseBox>

                <BaseBox title="Cancel Visits" variant="danger">
                    <template v-slot:content>
                        <NotificationRejected subtitle="You have %size% canceled visits" />
                    </template>
                </BaseBox>
            </div>

            <div class="column">
                <BaseBox title="Appointments" variant="secondary">
                    <template v-slot:content>
                        <DashboardAppointments />
                    </template>
                </BaseBox>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardAppointments            from '@/components/dashboard/DashboardAppointments';
import BaseBox                          from '@/components/common/BaseBox';
import NotificationsConfirm             from '@/components/dashboard/NotificationsConfirm';
import NotificationRejected             from "@/components/dashboard/NotificationRejected";
import AppHeader                        from "@/components/AppHeader";

export default {
    name: 'Dashboard',
    components: { AppHeader, NotificationRejected, DashboardAppointments, BaseBox, NotificationsConfirm },

    setup() {}
}
</script>


<style lang="scss">
.dashboard {
    .content {
        padding: rem(30) rem(15);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;

        .column {
            display: flex;
            flex-direction: column;
            width: 100%;

            @include media-small-up() {
                &:first-child {
                    flex: 0 27%;
                }

                &:last-child {
                    flex: 0 69%;
                }
            }
        }
    }
}
</style>
