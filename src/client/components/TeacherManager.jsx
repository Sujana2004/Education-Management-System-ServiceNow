import React, { useState, useEffect } from 'react';

export default function TeacherManager({ service }) {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTeachers();
  }, []);

  const loadTeachers = async () => {
    try {
      setLoading(true);
      setError(null);
      const teacherList = await service.getTeachers();
      setTeachers(teacherList);
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
        <p>Loading teachers...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h3>Error Loading Teachers</h3>
        <p>{error}</p>
        <button className="btn btn-primary" onClick={loadTeachers}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="section-header">
        <h2>👩‍🏫 Teacher Management</h2>
        <p>Manage faculty records and assignments</p>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Faculty Directory ({teachers.length} teachers)</h3>
          <a 
            href="https://dev285953.service-now.com/x_1917234_educatio_teacher_list.do" 
            className="btn btn-primary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Open Full Table View
          </a>
        </div>

        {teachers.length > 0 ? (
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Teacher ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Experience</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher, index) => (
                  <tr key={index}>
                    <td>{extractDisplayValue(teacher.teacher_id)}</td>
                    <td>
                      {extractDisplayValue(teacher.first_name)} {extractDisplayValue(teacher.last_name)}
                    </td>
                    <td>{extractDisplayValue(teacher.email)}</td>
                    <td>{extractDisplayValue(teacher.department)}</td>
                    <td>
                      <span className={`status-badge status-${extractDisplayValue(teacher.status)}`}>
                        {extractDisplayValue(teacher.status)}
                      </span>
                    </td>
                    <td>{extractDisplayValue(teacher.experience_years)} years</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-data">
            <p>No teachers found in the system.</p>
            <a 
              href="https://dev285953.service-now.com/x_1917234_educatio_teacher.do" 
              className="btn btn-primary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Add First Teacher
            </a>
          </div>
        )}
      </div>
    </div>
  );
}