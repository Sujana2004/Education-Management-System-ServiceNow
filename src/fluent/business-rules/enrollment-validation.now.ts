import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { validateEnrollment } from '../../server/enrollment-validation.js'

BusinessRule({
    $id: Now.ID['enrollment_validation'],
    name: 'Enrollment Validation',
    table: 'x_1917234_educatio_enrollment',
    when: 'before',
    action: ['insert', 'update'],
    script: validateEnrollment,
    order: 100,
    active: true,
    description: 'Validates student enrollment to prevent duplicate enrollments and check course capacity'
})