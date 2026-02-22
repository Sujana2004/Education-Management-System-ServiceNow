import React, { useState, useEffect } from 'react';

export default function StudentManager({ service }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      setLoading(true);
      setError(null);
      const studentList = await service.getStudents();
      setStudents(studentList);
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
        <p>Loading students...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h3>Error Loading Students</h3>
        <p>{error}</p>
        <button className="btn btn-primary" onClick={loadStudents}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="section-header">
        <h2>👨‍🎓 Student Management</h2>
        <p>Manage student records and information</p>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Student Directory ({students.length} students)</h3>
          <a 
            href="https://dev285953.service-now.com/x_1917234_educatio_student_list.do" 
            className="btn btn-primary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Open Full Table View
          </a>
        </div>

        {students.length > 0 ? (
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Grade Level</th>
                  <th>Status</th>
                  <th>Admission Date</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td>{extractDisplayValue(student.student_id)}</td>
                    <td>
                      {extractDisplayValue(student.first_name)} {extractDisplayValue(student.last_name)}
                    </td>
                    <td>{extractDisplayValue(student.email)}</td>
                    <td>{extractDisplayValue(student.grade_level)}</td>
                    <td>
                      <span className={`status-badge status-${extractDisplayValue(student.status)}`}>
                        {extractDisplayValue(student.status)}
                      </span>
                    </td>
                    <td>{extractDisplayValue(student.admission_date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-data">
            <p>No students found in the system.</p>
            <a 
              href="https://dev285953.service-now.com/x_1917234_educatio_student.do" 
              className="btn btn-primary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Add First Student
            </a>
          </div>
        )}
      </div>
    </div>
  );
}