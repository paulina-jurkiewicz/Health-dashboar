import { Doctor } from './Doctor';

export interface Appointment {
    id: number;
    date: string;
    status: string;
    doctor: Doctor;
}
