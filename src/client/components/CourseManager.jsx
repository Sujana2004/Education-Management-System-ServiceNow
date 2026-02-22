import React, { useState, useEffect } from 'react';

export default function CourseManager({ service }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      const courseList = await service.getCourses();
      setCourses(courseList);
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
        <p>Loading courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h3>Error Loading Courses</h3>
        <p>{error}</p>
        <button className="btn btn-primary" onClick={loadCourses}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="section-header">
        <h2>📚 Course Management</h2>
        <p>Manage course catalog and schedules</p>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Course Catalog ({courses.length} courses)</h3>
          <a 
            href="https://dev285953.service-now.com/x_1917234_educatio_course_list.do" 
            className="btn btn-primary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Open Full Table View
          </a>
        </div>

        {courses.length > 0 ? (
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Subject Area</th>
                  <th>Grade Level</th>
                  <th>Credits</th>
                  <th>Teacher</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={index}>
                    <td>{extractDisplayValue(course.course_code)}</td>
                    <td>{extractDisplayValue(course.course_name)}</td>
                    <td>{extractDisplayValue(course.subject_area)}</td>
                    <td>{extractDisplayValue(course.grade_level)}</td>
                    <td>{extractDisplayValue(course.credits)}</td>
                    <td>{extractDisplayValue(course.teacher)}</td>
                    <td>
                      <span className={`status-badge status-${extractDisplayValue(course.status)}`}>
                        {extractDisplayValue(course.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-data">
            <p>No courses found in the system.</p>
            <a 
              href="https://dev285953.service-now.com/x_1917234_educatio_course.do" 
              className="btn btn-primary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Add First Course
            </a>
          </div>
        )}
      </div>
    </div>
  );
}