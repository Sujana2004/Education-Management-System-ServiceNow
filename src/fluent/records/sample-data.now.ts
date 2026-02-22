import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample Students
export const student1 = Record({
    $id: Now.ID['student_001'],
    table: 'x_1917234_educatio_student',
    data: {
        student_id: 'STU001',
        first_name: 'Emily',
        last_name: 'Johnson',
        email: 'emily.johnson@example.com',
        phone: '555-0101',
        date_of_birth: '2008-05-15',
        admission_date: '2023-09-01',
        status: 'active',
        grade_level: 9,
        guardian_name: 'Robert Johnson',
        guardian_contact: 'robert.johnson@example.com',
        address: '123 Oak Street, Springfield',
        emergency_contact: 'Sarah Johnson - 555-0102'
    }
})

export const student2 = Record({
    $id: Now.ID['student_002'],
    table: 'x_1917234_educatio_student',
    data: {
        student_id: 'STU002',
        first_name: 'Michael',
        last_name: 'Chen',
        email: 'michael.chen@example.com',
        phone: '555-0201',
        date_of_birth: '2007-11-22',
        admission_date: '2023-09-01',
        status: 'active',
        grade_level: 10,
        guardian_name: 'David Chen',
        guardian_contact: 'david.chen@example.com',
        address: '456 Pine Avenue, Springfield',
        emergency_contact: 'Lisa Chen - 555-0202'
    }
})

export const student3 = Record({
    $id: Now.ID['student_003'],
    table: 'x_1917234_educatio_student',
    data: {
        student_id: 'STU003',
        first_name: 'Sophia',
        last_name: 'Martinez',
        email: 'sophia.martinez@example.com',
        phone: '555-0301',
        date_of_birth: '2006-03-08',
        admission_date: '2022-09-01',
        status: 'active',
        grade_level: 11,
        guardian_name: 'Carlos Martinez',
        guardian_contact: 'carlos.martinez@example.com',
        address: '789 Elm Drive, Springfield',
        emergency_contact: 'Maria Martinez - 555-0302'
    }
})

// Sample Teachers
export const teacher1 = Record({
    $id: Now.ID['teacher_001'],
    table: 'x_1917234_educatio_teacher',
    data: {
        teacher_id: 'TCH001',
        first_name: 'Dr. Jennifer',
        last_name: 'Williams',
        email: 'jennifer.williams@school.edu',
        phone: '555-1001',
        date_of_birth: '1980-08-12',
        hire_date: '2015-08-15',
        status: 'active',
        department: 'mathematics',
        qualification: 'Ph.D. in Mathematics Education',
        experience_years: 8,
        subjects: 'Algebra, Geometry, Calculus',
        address: '321 Teacher Lane, Springfield',
        emergency_contact: 'Mark Williams - 555-1002',
        salary: 65000
    }
})

export const teacher2 = Record({
    $id: Now.ID['teacher_002'],
    table: 'x_1917234_educatio_teacher',
    data: {
        teacher_id: 'TCH002',
        first_name: 'Mr. James',
        last_name: 'Anderson',
        email: 'james.anderson@school.edu',
        phone: '555-2001',
        date_of_birth: '1975-04-25',
        hire_date: '2010-08-20',
        status: 'active',
        department: 'science',
        qualification: 'M.S. in Chemistry',
        experience_years: 13,
        subjects: 'Chemistry, Physics, Biology',
        address: '654 Faculty Road, Springfield',
        emergency_contact: 'Nancy Anderson - 555-2002',
        salary: 68000
    }
})

export const teacher3 = Record({
    $id: Now.ID['teacher_003'],
    table: 'x_1917234_educatio_teacher',
    data: {
        teacher_id: 'TCH003',
        first_name: 'Ms. Sarah',
        last_name: 'Thompson',
        email: 'sarah.thompson@school.edu',
        phone: '555-3001',
        date_of_birth: '1985-12-03',
        hire_date: '2018-08-25',
        status: 'active',
        department: 'english',
        qualification: 'M.A. in English Literature',
        experience_years: 5,
        subjects: 'English Literature, Creative Writing, Grammar',
        address: '987 Educator Street, Springfield',
        emergency_contact: 'Tom Thompson - 555-3002',
        salary: 58000
    }
})