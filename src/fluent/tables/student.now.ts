import '@servicenow/sdk/global'
import { Table, StringColumn, DateColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_1917234_educatio_student = Table({
    name: 'x_1917234_educatio_student',
    label: 'Student',
    schema: {
        student_id: StringColumn({ 
            label: 'Student ID', 
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
            label: 'Date of Birth',
            mandatory: true
        }),
        admission_date: DateColumn({ 
            label: 'Admission Date',
            mandatory: true
        }),
        status: StringColumn({
            label: 'Status',
            choices: {
                active: { label: 'Active', sequence: 0 },
                inactive: { label: 'Inactive', sequence: 1 },
                graduated: { label: 'Graduated', sequence: 2 },
                suspended: { label: 'Suspended', sequence: 3 }
            },
            dropdown: 'dropdown_with_none',
            default: 'active'
        }),
        grade_level: IntegerColumn({ 
            label: 'Grade Level',
            min: 1,
            max: 12
        }),
        guardian_name: StringColumn({ 
            label: 'Guardian Name', 
            maxLength: 100
        }),
        guardian_contact: StringColumn({ 
            label: 'Guardian Contact', 
            maxLength: 100
        }),
        address: StringColumn({ 
            label: 'Address', 
            maxLength: 255
        }),
        emergency_contact: StringColumn({ 
            label: 'Emergency Contact', 
            maxLength: 255
        }),
        medical_info: StringColumn({ 
            label: 'Medical Information', 
            maxLength: 1000
        })
    },
    display: 'student_id',
    extensible: false,
    accessible_from: 'public',
    allow_web_service_access: true,
    actions: ['create', 'read', 'update', 'delete']
})