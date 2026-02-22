import '@servicenow/sdk/global'
import { Table, StringColumn, DateColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_1917234_educatio_teacher = Table({
    name: 'x_1917234_educatio_teacher',
    label: 'Teacher',
    schema: {
        teacher_id: StringColumn({ 
            label: 'Teacher ID', 
            maxLength: 20,
            mandatory: true
        }),
        first_name: StringColumn({ 
            label: 'First Name', 
            maxLength: 50,
            mandatory: true
        }),
        last_name: StringColumn({ 
            label: 'Last Name', 
            maxLength: 50,
            mandatory: true
        }),
        email: StringColumn({ 
            label: 'Email', 
            maxLength: 100,
            mandatory: true
        }),
        phone: StringColumn({ 
            label: 'Phone Number', 
            maxLength: 20
        }),
        date_of_birth: DateColumn({ 
            label: 'Date of Birth'
        }),
        hire_date: DateColumn({ 
            label: 'Hire Date',
            mandatory: true
        }),
        status: StringColumn({
            label: 'Status',
            choices: {
                active: { label: 'Active', sequence: 0 },
                inactive: { label: 'Inactive', sequence: 1 },
                terminated: { label: 'Terminated', sequence: 2 },
                retired: { label: 'Retired', sequence: 3 }
            },
            dropdown: 'dropdown_with_none',
            default: 'active'
        }),
        department: StringColumn({
            label: 'Department',
            choices: {
                mathematics: { label: 'Mathematics', sequence: 0 },
                science: { label: 'Science', sequence: 1 },
                english: { label: 'English', sequence: 2 },
                history: { label: 'History', sequence: 3 },
                physical_education: { label: 'Physical Education', sequence: 4 },
                art: { label: 'Art', sequence: 5 },
                music: { label: 'Music', sequence: 6 },
                computer_science: { label: 'Computer Science', sequence: 7 },
                foreign_language: { label: 'Foreign Language', sequence: 8 }
            },
            dropdown: 'dropdown_with_none'
        }),
        qualification: StringColumn({ 
            label: 'Qualification', 
            maxLength: 255
        }),
        experience_years: DecimalColumn({ 
            label: 'Years of Experience'
        }),
        subjects: StringColumn({ 
            label: 'Subjects Taught', 
            maxLength: 255
        }),
        address: StringColumn({ 
            label: 'Address', 
            maxLength: 255
        }),
        emergency_contact: StringColumn({ 
            label: 'Emergency Contact', 
            maxLength: 255
        }),
        salary: DecimalColumn({ 
            label: 'Salary'
        })
    },
    display: 'teacher_id',
    extensible: false,
    accessible_from: 'public',
    allow_web_service_access: true,
    actions: ['create', 'read', 'update', 'delete']
})