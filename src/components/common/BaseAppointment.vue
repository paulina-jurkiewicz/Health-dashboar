<template>
    <div class="appointment" v-if="appointment.status !== 'reject'">
        <div class="appointment__top">
            <BaseImage :src="appointment.doctor.photo" :alt="appointment.doctor.name" variant="rounded"/>

            <h4>{{ appointment.doctor.name }}<span>{{ appointment.doctor.specialty }}</span></h4>
        </div>

        <div class="appointment__content">
            <BaseDataWithIcon variant="small">
                <template v-slot:icon><IconLocation /></template>
                <template v-slot:value>{{ appointment.doctor.location }}</template>
            </BaseDataWithIcon>

            <BaseDataWithIcon variant="small">
                <template v-slot:icon><IconCalendar /></template>
                <template v-slot:value>{{ appointment.date }}</template>
            </BaseDataWithIcon>
        </div>

        <div class="appointment__footer">
            <BaseButton className="success" @click="$emit( 'change-appointment-status', appointment.id, 'accept' )" v-if="isPast() && appointment.status !== 'accept'">
                <IconCheckmark /> <span>Confirm</span>
            </BaseButton>

            <BaseDataWithIcon class="appointment--confirm" variant="small success" v-if="appointment.status === 'accept'">
                <template v-slot:icon><IconCheckmark /></template>
                <template v-slot:value>Accepted</template>
            </BaseDataWithIcon>

            <BaseButton className="danger" @click="$emit( 'change-appointment-status', appointment.id, 'reject' )" v-if="isPast() && appointment.status !== 'reject'">
                <IconReject /> <span>Reject</span>
            </BaseButton>
        </div>
    </div>
</template>

<script lang="ts">

import BaseImage        from '@/components/common/BaseImage';
import BaseDataWithIcon from '@/components/common/BaseDataWithIcon';
import IconLocation     from '@/components/icons/IconLocation';
import IconCalendar     from '@/components/icons/IconCalendar';
import BaseButton       from '@/components/common/BaseButton';
import IconCheckmark    from '@/components/icons/IconCheckmark';
import IconReject       from '@/components/icons/IconReject';
import moment from "moment";

export default {
    name: 'BaseAppointment',
    components: { IconReject, BaseButton, IconCalendar, IconLocation, BaseDataWithIcon, BaseImage, IconCheckmark },
    props: {
        appointment: {
            type: Object,
            default: () => ({
                id: null,
                date: null,
                hour: null,
                status: '',
                doctor: {
                    photo: null,
                    name: null,
                    specialty: null,
                    location: null
                }
            })
        }
    },
    setup( props: any ) {
        function isPast(){
            return moment().diff( props.appointment.date ) <= 0;
        }

        return { isPast }
    }
}
</script>

<style lang="scss">
.appointment {
    min-width: rem(310);
    border-radius: $border-radius-lg;
    padding: rem(15);
    box-shadow: 0 0 rem(50) rem(-30) rgba(0, 0, 0, 0.75);
    position: relative;
    flex: 0 30%;
    box-sizing: border-box;
    background-color: $background-color-primary;
    z-index: 0;
    margin: rem(15) 0;

    &--confirm.data {
        padding: rem(8) rem(16);
        margin-bottom: 0;
    }

    &__top {
        display: flex;
        align-items: center;

        img {
            margin-right: rem(15);
            width: auto;
            height: rem(50);
        }

        span {
            display: block;
            font-weight: 300;
        }
    }

    &__content {
        display: inline-block;
        width: 100%;
        margin: rem(10) 0;
    }

    &__footer {
        display: flex;
        justify-content: space-evenly;
    }
}
</style>
