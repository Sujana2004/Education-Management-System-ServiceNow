import React, { useState, useEffect } from 'react';
import './Dashboard.css';

export default function Dashboard({ service, onNavigate }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);
      const dashboardStats = await service.getDashboardStats();
      setStats(dashboardStats);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h3>Error Loading Dashboard</h3>
        <p>{error}</p>
        <button className="btn btn-primary" onClick={loadDashboardData}>
          Retry
        </button>
      </div>
    );
  }

  const extractDisplayValue = (field) => {
    return typeof field === 'object' ? field.display_value : field;
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>📊 Dashboard Overview</h2>
        <p>Welcome to your Educational Management System dashboard</p>
      </div>

      <div className="stats-grid grid grid-4">
        <div className="stat-card card">
          <div className="stat-icon">👨‍🎓</div>
          <div className="stat-content">
            <h3>{stats.activeStudents}</h3>
            <p>Active Students</p>
            <span className="stat-total">of {stats.totalStudents} total</span>
          </div>
          <button className="stat-action btn btn-outline" onClick={() => onNavigate('students')}>
            View All
          </button>
        </div>

        <div className="stat-card card">
          <div className="stat-icon">👩‍🏫</div>
          <div className="stat-content">
            <h3>{stats.activeTeachers}</h3>
            <p>Active Teachers</p>
            <span className="stat-total">of {stats.totalTeachers} total</span>
          </div>
          <button className="stat-action btn btn-outline" onClick={() => onNavigate('teachers')}>
            View All
          </button>
        </div>

        <div className="stat-card card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <h3>{stats.activeCourses}</h3>
            <p>Active Courses</p>
            <span className="stat-total">of {stats.totalCourses} total</span>
          </div>
          <button className="stat-action btn btn-outline" onClick={() => onNavigate('courses')}>
            View All
          </button>
        </div>

        <div className="stat-card card">
          <div className="stat-icon">📝</div>
          <div className="stat-content">
            <h3>{stats.currentEnrollments}</h3>
            <p>Current Enrollments</p>
            <span className="stat-total">of {stats.totalEnrollments} total</span>
          </div>
          <button className="stat-action btn btn-outline" onClick={() => onNavigate('enrollments')}>
            View All
          </button>
        </div>
      </div>

      <div className="dashboard-content grid grid-2">
        <div className="card">
          <h3>🚀 Quick Actions</h3>
          <div className="quick-actions">
            <button className="action-btn btn btn-primary" onClick={() => onNavigate('students')}>
              <span>➕</span>
              Add New Student
            </button>
            <button className="action-btn btn btn-success" onClick={() => onNavigate('enrollments')}>
              <span>📋</span>
              Enroll Student
            </button>
            <button className="action-btn btn btn-warning" onClick={() => onNavigate('courses')}>
              <span>📚</span>
              Create Course
            </button>
            <button className="action-btn btn btn-secondary" onClick={() => onNavigate('teachers')}>
              <span>👩‍🏫</span>
              Add Teacher
            </button>
          </div>
        </div>

        <div className="card">
          <h3>📋 Recent Students</h3>
          <div className="recent-list">
            {stats.recentStudents.length > 0 ? (
              stats.recentStudents.map((student, index) => (
                <div key={index} className="recent-item">
                  <div className="recent-info">
                    <strong>
                      {extractDisplayValue(student.first_name)} {extractDisplayValue(student.last_name)}
                    </strong>
                    <span className="recent-detail">
                      Grade {extractDisplayValue(student.grade_level)} • {extractDisplayValue(student.status)}
                    </span>
                  </div>
                  <div className="recent-id">
                    {extractDisplayValue(student.student_id)}
                  </div>
                </div>
              ))
            ) : (
              <p className="no-data">No students found</p>
            )}
          </div>
        </div>

        <div className="card">
          <h3>📈 System Overview</h3>
          <div className="overview-stats">
            <div className="overview-item">
              <span className="overview-label">Student-Teacher Ratio</span>
              <span className="overview-value">
                {stats.activeTeachers > 0 ? Math.round(stats.activeStudents / stats.activeTeachers) : 0}:1
              </span>
            </div>
            <div className="overview-item">
              <span className="overview-label">Average Course Enrollment</span>
              <span className="overview-value">
                {stats.activeCourses > 0 ? Math.round(stats.currentEnrollments / stats.activeCourses) : 0}
              </span>
            </div>
            <div className="overview-item">
              <span className="overview-label">Enrollment Rate</span>
              <span className="overview-value">
                {stats.activeStudents > 0 ? Math.round((stats.currentEnrollments / stats.activeStudents) * 100) : 0}%
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>🔗 Direct Links</h3>
          <div className="direct-links">
            <a href="https://dev285953.service-now.com/x_1917234_educatio_student_list.do" 
               className="link-item" target="_blank" rel="noopener noreferrer">
              <span>📊</span>
              Student Records Table
            </a>
            <a href="https://dev285953.service-now.com/x_1917234_educatio_teacher_list.do" 
               className="link-item" target="_blank" rel="noopener noreferrer">
              <span>📊</span>
              Teacher Directory Table
            </a>
            <a href="https://dev285953.service-now.com/x_1917234_educatio_course_list.do" 
               className="link-item" target="_blank" rel="noopener noreferrer">
              <span>📊</span>
              Course Catalog Table
            </a>
            <a href="https://dev285953.service-now.com/x_1917234_educatio_enrollment_list.do" 
               className="link-item" target="_blank" rel="noopener noreferrer">
              <span>📊</span>
              Enrollment Management Table
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}