import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

export const admin_role = Role({
    name: 'x_1917234_educatio.admin',
    description: 'Educational Management System Administrator - Full access to all educational data and system configuration'
})

export const teacher_role = Role({
    name: 'x_1917234_educatio.teacher', 
    description: 'Teachers can manage their courses, view student information, and update grades'
})

export const registrar_role = Role({
    name: 'x_1917234_educatio.registrar',
    description: 'Registrar can manage student enrollments, course schedules, and academic records'
})

export const student_role = Role({
    name: 'x_1917234_educatio.student',
    description: 'Students can view their own enrollment information and grades'
})