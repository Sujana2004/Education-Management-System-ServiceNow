import '@servicenow/sdk/global'
import { Table, StringColumn, IntegerColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_1917234_educatio_course = Table({
    name: 'x_1917234_educatio_course',
    label: 'Course',
    schema: {
        course_code: StringColumn({ 
            label: 'Course Code', 
            maxLength: 20,
            mandatory: true
        }),
        course_name: StringColumn({ 
            label: 'Course Name', 
            maxLength: 100,
            mandatory: true
        }),
        description: StringColumn({ 
            label: 'Description', 
            maxLength: 500
        }),
        credits: IntegerColumn({ 
            label: 'Credits',
            min: 1,
            max: 10,
            default: '3'
        }),
        grade_level: IntegerColumn({ 
            label: 'Grade Level',
            min: 1,
            max: 12,
            mandatory: true
        }),
        subject_area: StringColumn({
            label: 'Subject Area',
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
            dropdown: 'dropdown_with_none',
            mandatory: true
        }),
        teacher: ReferenceColumn({
            label: 'Assigned Teacher',
            referenceTable: 'x_1917234_educatio_teacher'
        }),
        max_students: IntegerColumn({ 
            label: 'Maximum Students',
            min: 1,
            max: 50,
            default: '30'
        }),
        status: StringColumn({
            label: 'Status',
            choices: {
                active: { label: 'Active', sequence: 0 },
                inactive: { label: 'Inactive', sequence: 1 },
                archived: { label: 'Archived', sequence: 2 }
            },
            dropdown: 'dropdown_with_none',
            default: 'active'
        })
    },
    display: 'course_code',
    extensible: false,
    accessible_from: 'public',
    allow_web_service_access: true,
    actions: ['create', 'read', 'update', 'delete']
})