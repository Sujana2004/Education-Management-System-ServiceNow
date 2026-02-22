import React from 'react';
import './Header.css';

export default function Header({ currentView, onNavigate, loading }) {
  const navItems = [
    { id: 'dashboard', label: '📊 Dashboard', icon: '📊' },
    { id: 'students', label: '👨‍🎓 Students', icon: '👨‍🎓' },
    { id: 'teachers', label: '👩‍🏫 Teachers', icon: '👩‍🏫' },
    { id: 'courses', label: '📚 Courses', icon: '📚' },
    { id: 'enrollments', label: '📝 Enrollments', icon: '📝' }
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-brand">
          <h1>🎓 Educational Management System</h1>
          <p>Streamline your institution's administrative tasks</p>
        </div>
        
        <nav className="header-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${currentView === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
              disabled={loading}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label.replace(/^[^\s]+ /, '')}</span>
            </button>
          ))}
        </nav>
        
        {loading && (
          <div className="header-loading">
            <div className="loading-spinner"></div>
          </div>
        )}
      </div>
    </header>
  );
}