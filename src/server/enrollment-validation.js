import { gs, GlideRecord } from '@servicenow/glide'

export function validateEnrollment(current, previous) {
    // Check if student is already enrolled in the course
    const enrollment = new GlideRecord('x_1917234_educatio_enrollment');
    enrollment.addQuery('student', current.getValue('student'));
    enrollment.addQuery('course', current.getValue('course'));
    enrollment.addQuery('status', 'enrolled');
    enrollment.addQuery('sys_id', '!=', current.getUniqueValue());
    enrollment.query();
    
    if (enrollment.hasNext()) {
        gs.addErrorMessage('Student is already enrolled in this course.');
        current.setAbortAction(true);
        return;
    }
    
    // Check course capacity
    const course = new GlideRecord('x_1917234_educatio_course');
    if (course.get(current.getValue('course'))) {
        const maxStudents = course.getValue('max_students');
        
        if (maxStudents) {
            const enrollmentCount = new GlideRecord('x_1917234_educatio_enrollment');
            enrollmentCount.addQuery('course', current.getValue('course'));
            enrollmentCount.addQuery('status', 'enrolled');
            enrollmentCount.query();
            
            if (enrollmentCount.getRowCount() >= parseInt(maxStudents)) {
                gs.addErrorMessage('Course has reached maximum capacity.');
                current.setAbortAction(true);
            }
        }
    }
}