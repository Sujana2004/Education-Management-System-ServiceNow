import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header.jsx';
import Dashboard from './components/Dashboard.jsx';
import StudentManager from './components/StudentManager.jsx';
import TeacherManager from './components/TeacherManager.jsx';
import CourseManager from './components/CourseManager.jsx';
import EnrollmentManager from './components/EnrollmentManager.jsx';
import { EducationalService } from './services/EducationalService.js';
import './App.css';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [loading, setLoading] = useState(false);
  const service = useMemo(() => new EducationalService(), []);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'students':
        return <StudentManager service={service} />;
      case 'teachers':
        return <TeacherManager service={service} />;
      case 'courses':
        return <CourseManager service={service} />;
      case 'enrollments':
        return <EnrollmentManager service={service} />;
      default:
        return <Dashboard service={service} onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="app">
      <Header 
        currentView={currentView} 
        onNavigate={setCurrentView}
        loading={loading}
      />
      <main className="main-content">
        {renderCurrentView()}
      </main>
    </div>
  );
}