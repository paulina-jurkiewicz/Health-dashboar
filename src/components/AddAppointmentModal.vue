<template>
    <div class="modal-add-appointment">
        <BaseButton @click="$emit('close-add-appointment-modal')" className="only-icon"><IconClose /></BaseButton>

        <form action="">
            <h2>Make an appointment</h2>

            <div class="form-group">
                <label>
                    <select name="appointment[location]" id="appointment_location"
                            v-model="location" @change="updateValue( $event.target.value, 'location' )">
                        <option value="" disabled selected="selected">Location</option>

                        <option v-for="( option, index ) in locations"
                                :key="index" :value="option.value">
                                {{ option.value }}
                        </option>
                    </select>
                </label>
            </div>

            <div class="form-group">
                <label>
                    <select name="appointment[specialty]" id="appointment_specialty"
                            v-model="specialty" @change="updateValue( $event.target.value, 'specialty' )">
                        <option value="" disabled selected="selected">Specialty</option>

                        <option v-for="( option, index ) in specialties"
                                :key="index" :value="option.value">
                            {{ option.value }}
                        </option>
                    </select>
                </label>
            </div>

            <div class="form-group">
                <label>
                    <select name="appointment[doctor]" id="appointment_doctor"
                            v-model="doctor" @change="updateValue( $event.target.value, 'doctor' )">
                        <option value="" disabled selected="selected">Doctor</option>

                        <option v-for="( option, index ) in doctors"
                                :key="index" :value="option.name">
                            {{ option.name }}
                        </option>
                    </select>
                </label>
            </div>

            <div class="form-group">
                <label>
                    <input type="date" v-model="date" name="appointment[date]" id="appointment_date"/>
                </label>
            </div>


            <div class="form-group">
                <label>
                    <select name="appointment[hour]" id="appointment_hour"
                            v-model="hour"
                            @change="updateValue( $event.target.value, 'hour' )">
                        <option value="" disabled selected="selected">Hour</option>

                        <option v-for="( option, index ) in hours"
                                :key="index" :value="option.value">
                            {{ option.value }}
                        </option>
                    </select>
                </label>
            </div>
        </form>

        <BaseButton @click="onSubmit" className="primary" :disabled="!location || !specialty || !date || !doctor || !hour">
            Submit
        </BaseButton>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs }    from 'vue';
import BaseButton                               from './common/BaseButton.vue';
import useDoctors                               from '@/modules/doctors';
import useLocations                             from '@/modules/locations';
import useSpecialties                           from '@/modules/specialty';
import IconClose                                from './icons/IconClose';
import useAppointments                          from '@/modules/appointments';
import { Doctor }                               from '@/interfaces/Doctor';
import useHours                                 from '@/modules/hours';
import moment from "moment";

export default defineComponent({
    name: 'AddAppointmentModal',
    components: {
        BaseButton, IconClose
    },
    data() {
        return {
             datepickerSetting: {
                id: "date",
                name: "date",
                class: "input-date",
                value: moment(),
                placeholder: "Date",
                fromDate: moment(),
                locale: {
                    format: "YYYY-MM-DD",
                    weekday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    startsWeeks: 0,
                    todayBtn: "Today",
                    clearBtn: "Clear",
                    closeBtn: "Close",
                },
                disableInput: false,
            }
        }
    },
    setup( props, {emit} ) {
        const state = reactive({
            doctor: '',
            specialty: '',
            location: '',
            date: '',
            hour: ''
        });

        const { doctors, updateDoctorList } = useDoctors();
        const { locations } = useLocations();
        const { specialties } = useSpecialties();
        const { hours } = useHours();
        const { handleAddAppointment } = useAppointments();

        function updateValue( value: string, key: string ) {
            emit( `update:${key}`, value );

            updateDoctorList( state.location, state.specialty )
        }

        function onSubmit() {
            const doctor: Doctor | undefined = doctors.value.find(( doctor: Doctor ) => doctor.name === state.doctor );

            if ( !doctor ) return;

            handleAddAppointment({ id: 1, doctor, date: `${ state.date } ${ state.hour }`, status: '' })

            emit('submit-add-appointment');
        }

        return { ...toRefs(state), doctors, locations, specialties, hours, updateValue, updateDoctorList, handleAddAppointment, onSubmit }
    }
})
</script>

<style lang="scss">
@import '~vue3-datepicker';

.modal-add-appointment {
    @include box-shadow(0 0 rem(50) rem(-30) rgba(0, 0, 0, 0.75));

    position: absolute;
    width: rem(340);
    background: #fff;
    z-index: 99;
    padding: rem(30);
    top: rem(60);
    border-radius: rem(10);

    label {
        width: 100%;
        display: inline-block;
        margin-bottom: rem(15);

        select,
        input {
            width: 100%;
            border-radius: rem(4);
            padding: rem(10) rem(15);
            border: rem(1) solid #ebebeb;
            outline: none;
        }

        input[type='date'] {
            width: 310px;
        }
    }

    button.only-icon {
        position: absolute;
        top: 0;
        right: 0;
    }

    button.primary {
        margin: 0 auto;
    }
}
</style>
