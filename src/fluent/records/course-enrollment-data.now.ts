import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample Courses
export const course1 = Record({
    $id: Now.ID['course_001'],
    table: 'x_1917234_educatio_course',
    data: {
        course_code: 'MATH101',
        course_name: 'Algebra I',
        description: 'Introduction to algebraic concepts, linear equations, and problem-solving techniques',
        credits: 3,
        grade_level: 9,
        subject_area: 'mathematics',
        teacher: Now.ID['teacher_001'], // Reference to Dr. Jennifer Williams
        max_students: 25,
        status: 'active'
    }
})

export const course2 = Record({
    $id: Now.ID['course_002'],
    table: 'x_1917234_educatio_course',
    data: {
        course_code: 'CHEM201',
        course_name: 'General Chemistry',
        description: 'Fundamental principles of chemistry including atomic structure, chemical bonding, and reactions',
        credits: 4,
        grade_level: 10,
        subject_area: 'science',
        teacher: Now.ID['teacher_002'], // Reference to Mr. James Anderson
        max_students: 20,
        status: 'active'
    }
})

export const course3 = Record({
    $id: Now.ID['course_003'],
    table: 'x_1917234_educatio_course',
    data: {
        course_code: 'ENG301',
        course_name: 'American Literature',
        description: 'Study of major works in American literature from colonial times to present',
        credits: 3,
        grade_level: 11,
        subject_area: 'english',
        teacher: Now.ID['teacher_003'], // Reference to Ms. Sarah Thompson
        max_students: 30,
        status: 'active'
    }
})

// Sample Enrollments
export const enrollment1 = Record({
    $id: Now.ID['enrollment_001'],
    table: 'x_1917234_educatio_enrollment',
    data: {
        student: Now.ID['student_001'], // Reference to Emily Johnson
        course: Now.ID['course_001'], // Reference to Algebra I
        enrollment_date: '2023-09-01',
        semester: 'fall',
        academic_year: '2023-2024',
        status: 'enrolled'
    }
})

export const enrollment2 = Record({
    $id: Now.ID['enrollment_002'],
    table: 'x_1917234_educatio_enrollment',
    data: {
        student: Now.ID['student_002'], // Reference to Michael Chen
        course: Now.ID['course_002'], // Reference to General Chemistry
        enrollment_date: '2023-09-01',
        semester: 'fall',
        academic_year: '2023-2024',
        status: 'enrolled'
    }
})

export const enrollment3 = Record({
    $id: Now.ID['enrollment_003'],
    table: 'x_1917234_educatio_enrollment',
    data: {
        student: Now.ID['student_003'], // Reference to Sophia Martinez
        course: Now.ID['course_003'], // Reference to American Literature
        enrollment_date: '2023-09-01',
        semester: 'fall',
        academic_year: '2023-2024',
        status: 'enrolled',
        final_grade: 'b_plus',
        gpa_points: 3.3
    }
})