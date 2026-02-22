import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'

// Create the main Educational Management System application menu
export const educationalMenu = ApplicationMenu({
    $id: Now.ID['educational_menu'],
    title: 'Educational Management',
    hint: 'Comprehensive platform for managing educational institution data',
    description: 'Educational Management System - Streamline administrative tasks, manage student and teacher data, and monitor academic progress',
    active: true,
    order: 100
})

// Dashboard UI Page
export const dashboardModule = Record({
    $id: Now.ID['dashboard_module'],
    table: 'sys_app_module',
    data: {
        title: '🏠 Dashboard',
        application: educationalMenu.$id,
        link_type: 'DIRECT',
        query: 'x_1917234_educatio_dashboard.do',
        hint: 'Educational Management Dashboard - Modern interface for system overview',
        active: true,
        order: 50
    }
})

// Student Management Section
export const studentModule = Record({
    $id: Now.ID['student_module'],
    table: 'sys_app_module',
    data: {
        title: 'Students',
        application: educationalMenu.$id,
        link_type: 'LIST',
        name: 'x_1917234_educatio_student',
        hint: 'Manage student records and information',
        active: true,
        order: 100
    }
})

// Teacher Management Section  
export const teacherModule = Record({
    $id: Now.ID['teacher_module'],
    table: 'sys_app_module',
    data: {
        title: 'Teachers',
        application: educationalMenu.$id,
        link_type: 'LIST',
        name: 'x_1917234_educatio_teacher',
        hint: 'Manage teacher records and assignments',
        active: true,
        order: 200
    }
})

// Course Management Section
export const courseModule = Record({
    $id: Now.ID['course_module'],
    table: 'sys_app_module',
    data: {
        title: 'Courses',
        application: educationalMenu.$id,
        link_type: 'LIST',
        name: 'x_1917234_educatio_course',
        hint: 'Manage course catalog and schedules',
        active: true,
        order: 300
    }
})

// Enrollment Management Section
export const enrollmentModule = Record({
    $id: Now.ID['enrollment_module'],
    table: 'sys_app_module',
    data: {
        title: 'Enrollments',
        application: educationalMenu.$id,
        link_type: 'LIST',
        name: 'x_1917234_educatio_enrollment',
        hint: 'Manage student course enrollments and grades',
        active: true,
        order: 400
    }
})

// Separator for Reports/Analytics Section
export const reportsSeparator = Record({
    $id: Now.ID['reports_separator'],
    table: 'sys_app_module',
    data: {
        title: 'Reports & Analytics',
        application: educationalMenu.$id,
        link_type: 'SEPARATOR',
        active: true,
        order: 500
    }
})

// Quick Actions Separator
export const actionsSeparator = Record({
    $id: Now.ID['actions_separator'],
    table: 'sys_app_module',
    data: {
        title: 'Quick Actions',
        application: educationalMenu.$id,
        link_type: 'SEPARATOR',
        active: true,
        order: 600
    }
})

// New Student Enrollment
export const newStudentModule = Record({
    $id: Now.ID['new_student_module'],
    table: 'sys_app_module',
    data: {
        title: 'Add New Student',
        application: educationalMenu.$id,
        link_type: 'NEW',
        name: 'x_1917234_educatio_student',
        hint: 'Register a new student',
        active: true,
        order: 610
    }
})

// New Course Enrollment
export const newEnrollmentModule = Record({
    $id: Now.ID['new_enrollment_module'],
    table: 'sys_app_module',
    data: {
        title: 'Enroll Student in Course',
        application: educationalMenu.$id,
        link_type: 'NEW',
        name: 'x_1917234_educatio_enrollment',
        hint: 'Enroll a student in a course',
        active: true,
        order: 620
    }
})

// Active Students Filter
export const activeStudentsModule = Record({
    $id: Now.ID['active_students_module'],
    table: 'sys_app_module',
    data: {
        title: 'Active Students',
        application: educationalMenu.$id,
        link_type: 'LIST',
        name: 'x_1917234_educatio_student',
        filter: 'status=active',
        hint: 'View all currently active students',
        active: true,
        order: 700
    }
})

// Current Enrollments Filter
export const currentEnrollmentsModule = Record({
    $id: Now.ID['current_enrollments_module'],
    table: 'sys_app_module',
    data: {
        title: 'Current Enrollments',
        application: educationalMenu.$id,
        link_type: 'LIST',
        name: 'x_1917234_educatio_enrollment',
        filter: 'status=enrolled',
        hint: 'View all current student enrollments',
        active: true,
        order: 710
    }
})