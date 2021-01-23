import { Appointment }      from '@/interfaces/Appointment';
import { Notification }     from '@/interfaces/Notification';
import { Doctor }           from '@/interfaces/Doctor';
import { Location }         from '@/interfaces/Location';
import { Specialty }        from '@/interfaces/Specialty';
import { Hour }             from '@/interfaces/Hour';

export const appointmentsMock: Appointment[] = [
    {
        id: 1,
        date: '2021-01-21 18:00',
        status: '',
        doctor: {
            photo: 'https://randomuser.me/api/portraits/med/men/34.jpg',
            name: 'dr Anthony Wagner',
            specialty: 'dermatologist',
            location: 'Kielce'
        }
    },
    {
        id: 2,
        date: '2021-01-23 16:30',
        status: '',
        doctor: {
            photo: 'https://randomuser.me/api/portraits/thumb/women/93.jpg',
            name: 'dr.Caroline Fileds',
            specialty: 'dentist',
            location: 'Warsaw'
        }
    },
    {
        id: 3,
        date: '2021-01-17 08:30',
        status: '',
        doctor: {
            photo: 'https://randomuser.me/api/portraits/thumb/women/92.jpg',
            name: 'dr.Barbara Nowak',
            specialty: 'dentist',
            location: 'Warsaw'
        }
    },
    {
        id: 4,
        date: '2021-05-17 08:30',
        status: '',
        doctor: {
            photo: 'https://randomuser.me/api/portraits/thumb/women/92.jpg',
            name: 'dr.Barbara Bryk',
            specialty: 'dentist',
            location: 'Warsaw'
        }
    },
    {
        id: 5,
        date: '2021-06-17 08:30',
        status: '',
        doctor: {
            photo: 'https://randomuser.me/api/portraits/thumb/women/92.jpg',
            name: 'dr.Barbara Bryk',
            specialty: 'dentist',
            location: 'Warsaw'
        }
    },
    {
        id: 323,
        status: 'accept',
        date: '2021-03-23 11:30',
        doctor: {
            photo: 'https://randomuser.me/api/portraits/thumb/women/93.jpg',
            name: 'dr.Caroline Hig',
            specialty: 'dentists',
            location: 'Warsaw'
        }
    },
    {
        id: 3245,
        status: 'reject',
        date: '2021-01-20 16:30',
        doctor: {
            photo: 'https://randomuser.me/api/portraits/med/men/34.jpg',
            name: 'dr Anthony Wagner',
            specialty: 'dermatologist',
            location: 'Kielce'
        }
    },
    {
        id: 3145,
        status: 'reject',
        doctor: {
            photo: 'https://randomuser.me/api/portraits/med/men/34.jpg',
            name: 'dr Anthony Wagner',
            specialty: 'dermatologist',
            location: 'Kielce'
        },
        date: '2021-01-17 12:30'
    },
    {
        id: 3445,
        status: 'accept',
        doctor: {
            photo: 'https://randomuser.me/api/portraits/med/men/34.jpg',
            name: 'dr.Adam Hig',
            specialty: 'dermatologist',
            location: 'Kielce'
        },
        date: '2021-03-23 10:30'
    }
]

export const notificationsMock: Notification[] = [
    {
        id: 323,
        status: 'accept',
        value: 'dr.Caroline Hig - dentists',
        date: '2021-03-23 10:30'
    },
    {
        id: 3245,
        status: 'reject',
        value: 'dr Anthony Wagner - dermatologist',
        date: '2021-01-23 13:30'
    },
    {
        id: 3145,
        status: 'reject',
        value: 'dr Anthony Wagner - dermatologist',
        date: '2021-02-23 10:30'
    },
    {
        id: 3445,
        status: 'accept',
        value: 'dr.Adam Hig - dermatologist',
        date: '2021-03-13 10:30'
    }
]

export const doctorsMock: Doctor[] = [
  { name: 'dr.Tomasz Hig', specialty: 'dermatologist', location: 'Warsaw', photo: 'https://randomuser.me/api/portraits/thumb/women/93.jpg' },
  { name: 'dr.Adam Hig', specialty: 'dermatologist', location: 'Wroclaw', photo: 'https://randomuser.me/api/portraits/thumb/women/93.jpg' },
  { name: 'dr.Bartosz Hig', specialty: 'dermatologist', location: 'Poznan', photo: 'https://randomuser.me/api/portraits/thumb/women/93.jpg'},
  { name: 'dr.Caroline Hig', specialty: 'dentist', location: 'Warsaw', photo: 'https://randomuser.me/api/portraits/thumb/women/93.jpg'},
  { name: 'dr.Barbara Nowak', specialty: 'dentist', location: 'Wroclaw', photo: 'https://randomuser.me/api/portraits/thumb/women/93.jpg'},
  { name: 'dr.Caroline Fileds', specialty: 'dentist', location: 'Warsaw', photo: 'https://randomuser.me/api/portraits/thumb/women/93.jpg'},
  { name: 'dr Anthony Wagner', specialty: 'dermatologist', location: 'Kielce', photo: 'https://randomuser.me/api/portraits/thumb/women/93.jpg'},
];

export const locationsMock: Location[] = [
    { value: 'Kielce' },
    { value: 'Warsaw' },
    { value: 'Poznan' }
];

export const specialtiesMock: Specialty[] = [
    { value: 'dermatologist' },
    { value: 'dentist' }
]

export const hoursMock: Hour[] = [
    { value: '8:00' },
    { value: '8:30' },
    { value: '9:00' },
    { value: '9:30' },
    { value: '10:00' },
    { value: '10:30' },
    { value: '11:00' },
    { value: '11:30' },
    { value: '12:00' },
    { value: '12:30' },
    { value: '01:00' },
    { value: '01:30' },
    { value: '02:00' },
    { value: '02:30' },
    { value: '03:00' },
    { value: '03:30' },
    { value: '04:00' },
    { value: '04:30' }
]
