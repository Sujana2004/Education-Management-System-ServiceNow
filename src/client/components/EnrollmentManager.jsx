import React, { useState, useEffect } from 'react';

export default function EnrollmentManager({ service }) {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadEnrollments();
  }, []);

  const loadEnrollments = async () => {
    try {
      setLoading(true);
      setError(null);
      const enrollmentList = await service.getEnrollments();
      setEnrollments(enrollmentList);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const extractDisplayValue = (field) => {
    return typeof field === 'object' ? field.display_value : field;
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading enrollments...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h3>Error Loading Enrollments</h3>
        <p>{error}</p>
        <button className="btn btn-primary" onClick={loadEnrollments}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="section-header">
        <h2>📝 Enrollment Management</h2>
        <p>Manage student course enrollments and grades</p>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Student Enrollments ({enrollments.length} enrollments)</h3>
          <a 
            href="https://dev285953.service-now.com/x_1917234_educatio_enrollment_list.do" 
            className="btn btn-primary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Open Full Table View
          </a>
        </div>

        {enrollments.length > 0 ? (
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Course</th>
                  <th>Semester</th>
                  <th>Academic Year</th>
                  <th>Status</th>
                  <th>Final Grade</th>
                  <th>GPA Points</th>
                </tr>
              </thead>
              <tbody>
                {enrollments.map((enrollment, index) => (
                  <tr key={index}>
                    <td>{extractDisplayValue(enrollment.student)}</td>
                    <td>{extractDisplayValue(enrollment.course)}</td>
                    <td>{extractDisplayValue(enrollment.semester)}</td>
                    <td>{extractDisplayValue(enrollment.academic_year)}</td>
                    <td>
                      <span className={`status-badge status-${extractDisplayValue(enrollment.status)}`}>
                        {extractDisplayValue(enrollment.status)}
                      </span>
                    </td>
                    <td>{extractDisplayValue(enrollment.final_grade) || '-'}</td>
                    <td>{extractDisplayValue(enrollment.gpa_points) || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-data">
            <p>No enrollments found in the system.</p>
            <a 
              href="https://dev285953.service-now.com/x_1917234_educatio_enrollment.do" 
              className="btn btn-primary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Create First Enrollment
            </a>
          </div>
        )}
      </div>
    </div>
  );
}