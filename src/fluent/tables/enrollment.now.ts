import '@servicenow/sdk/global'
import { Table, StringColumn, DateColumn, ReferenceColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_1917234_educatio_enrollment = Table({
    name: 'x_1917234_educatio_enrollment',
    label: 'Enrollment',
    schema: {
        student: ReferenceColumn({
            label: 'Student',
            referenceTable: 'x_1917234_educatio_student',
            mandatory: true
        }),
        course: ReferenceColumn({
            label: 'Course',
            referenceTable: 'x_1917234_educatio_course',
            mandatory: true
        }),
        enrollment_date: DateColumn({ 
            label: 'Enrollment Date',
            mandatory: true
        }),
        semester: StringColumn({
            label: 'Semester',
            choices: {
                fall: { label: 'Fall', sequence: 0 },
                spring: { label: 'Spring', sequence: 1 },
                summer: { label: 'Summer', sequence: 2 }
            },
            dropdown: 'dropdown_with_none',
            mandatory: true
        }),
        academic_year: StringColumn({ 
            label: 'Academic Year', 
            maxLength: 10,
            mandatory: true
        }),
        status: StringColumn({
            label: 'Status',
            choices: {
                enrolled: { label: 'Enrolled', sequence: 0 },
                dropped: { label: 'Dropped', sequence: 1 },
                completed: { label: 'Completed', sequence: 2 },
                failed: { label: 'Failed', sequence: 3 }
            },
            dropdown: 'dropdown_with_none',
            default: 'enrolled'
        }),
        final_grade: StringColumn({
            label: 'Final Grade',
            choices: {
                a_plus: { label: 'A+', sequence: 0 },
                a: { label: 'A', sequence: 1 },
                a_minus: { label: 'A-', sequence: 2 },
                b_plus: { label: 'B+', sequence: 3 },
                b: { label: 'B', sequence: 4 },
                b_minus: { label: 'B-', sequence: 5 },
                c_plus: { label: 'C+', sequence: 6 },
                c: { label: 'C', sequence: 7 },
                c_minus: { label: 'C-', sequence: 8 },
                d: { label: 'D', sequence: 9 },
                f: { label: 'F', sequence: 10 },
                incomplete: { label: 'Incomplete', sequence: 11 },
                withdrawal: { label: 'Withdrawal', sequence: 12 }
            },
            dropdown: 'dropdown_with_none'
        }),
        gpa_points: DecimalColumn({ 
            label: 'GPA Points'
        })
    },
    extensible: false,
    accessible_from: 'public',
    allow_web_service_access: true,
    actions: ['create', 'read', 'update', 'delete']
})