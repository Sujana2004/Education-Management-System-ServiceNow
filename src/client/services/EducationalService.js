export class EducationalService {
  constructor() {
    this.tables = {
      students: 'x_1917234_educatio_student',
      teachers: 'x_1917234_educatio_teacher',
      courses: 'x_1917234_educatio_course',
      enrollments: 'x_1917234_educatio_enrollment'
    };
  }

  async makeRequest(url, options = {}) {
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-UserToken': window.g_ck,
          ...options.headers
        },
        ...options
      });

      if (!response.ok) {
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        try {
          const errorData = await response.json();
          if (errorData.error && errorData.error.message) {
            errorMessage = errorData.error.message;
          }
        } catch (e) {
          // If we can't parse the error JSON, use the default message
        }
        throw new Error(errorMessage);
      }

      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  async getList(table, filters = {}) {
    const params = new URLSearchParams();
    params.set('sysparm_display_value', 'all');
    params.set('sysparm_limit', '100');
    
    Object.entries(filters).forEach(([key, value]) => {
      params.set(key, value);
    });

    const data = await this.makeRequest(`/api/now/table/${table}?${params.toString()}`);
    return data.result || [];
  }

  async getRecord(table, sysId) {
    const params = new URLSearchParams();
    params.set('sysparm_display_value', 'all');
    
    const data = await this.makeRequest(`/api/now/table/${table}/${sysId}?${params.toString()}`);
    return data.result;
  }

  async createRecord(table, data) {
    const response = await this.makeRequest(`/api/now/table/${table}`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    return response.result;
  }

  async updateRecord(table, sysId, data) {
    const response = await this.makeRequest(`/api/now/table/${table}/${sysId}`, {
      method: 'PATCH',
      body: JSON.stringify(data)
    });
    return response.result;
  }

  async deleteRecord(table, sysId) {
    await this.makeRequest(`/api/now/table/${table}/${sysId}`, {
      method: 'DELETE'
    });
    return true;
  }

  // Students
  async getStudents(filters = {}) {
    return this.getList(this.tables.students, filters);
  }

  async getStudent(sysId) {
    return this.getRecord(this.tables.students, sysId);
  }

  async createStudent(data) {
    return this.createRecord(this.tables.students, data);
  }

  async updateStudent(sysId, data) {
    return this.updateRecord(this.tables.students, sysId, data);
  }

  async deleteStudent(sysId) {
    return this.deleteRecord(this.tables.students, sysId);
  }

  // Teachers
  async getTeachers(filters = {}) {
    return this.getList(this.tables.teachers, filters);
  }

  async getTeacher(sysId) {
    return this.getRecord(this.tables.teachers, sysId);
  }

  async createTeacher(data) {
    return this.createRecord(this.tables.teachers, data);
  }

  async updateTeacher(sysId, data) {
    return this.updateRecord(this.tables.teachers, sysId, data);
  }

  async deleteTeacher(sysId) {
    return this.deleteRecord(this.tables.teachers, sysId);
  }

  // Courses
  async getCourses(filters = {}) {
    return this.getList(this.tables.courses, filters);
  }

  async getCourse(sysId) {
    return this.getRecord(this.tables.courses, sysId);
  }

  async createCourse(data) {
    return this.createRecord(this.tables.courses, data);
  }

  async updateCourse(sysId, data) {
    return this.updateRecord(this.tables.courses, sysId, data);
  }

  async deleteCourse(sysId) {
    return this.deleteRecord(this.tables.courses, sysId);
  }

  // Enrollments
  async getEnrollments(filters = {}) {
    return this.getList(this.tables.enrollments, filters);
  }

  async getEnrollment(sysId) {
    return this.getRecord(this.tables.enrollments, sysId);
  }

  async createEnrollment(data) {
    return this.createRecord(this.tables.enrollments, data);
  }

  async updateEnrollment(sysId, data) {
    return this.updateRecord(this.tables.enrollments, sysId, data);
  }

  async deleteEnrollment(sysId) {
    return this.deleteRecord(this.tables.enrollments, sysId);
  }

  // Dashboard Statistics
  async getDashboardStats() {
    try {
      const [students, teachers, courses, enrollments] = await Promise.all([
        this.getStudents({ sysparm_limit: '1000' }),
        this.getTeachers({ sysparm_limit: '1000' }),
        this.getCourses({ sysparm_limit: '1000' }),
        this.getEnrollments({ sysparm_limit: '1000' })
      ]);

      const activeStudents = students.filter(s => {
        const status = typeof s.status === 'object' ? s.status.value : s.status;
        return status === 'active';
      });

      const activeTeachers = teachers.filter(t => {
        const status = typeof t.status === 'object' ? t.status.value : t.status;
        return status === 'active';
      });

      const activeCourses = courses.filter(c => {
        const status = typeof c.status === 'object' ? c.status.value : c.status;
        return status === 'active';
      });

      const currentEnrollments = enrollments.filter(e => {
        const status = typeof e.status === 'object' ? e.status.value : e.status;
        return status === 'enrolled';
      });

      return {
        totalStudents: students.length,
        activeStudents: activeStudents.length,
        totalTeachers: teachers.length,
        activeTeachers: activeTeachers.length,
        totalCourses: courses.length,
        activeCourses: activeCourses.length,
        totalEnrollments: enrollments.length,
        currentEnrollments: currentEnrollments.length,
        recentStudents: students.slice(0, 5),
        recentEnrollments: enrollments.slice(0, 5)
      };
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      throw error;
    }
  }
}