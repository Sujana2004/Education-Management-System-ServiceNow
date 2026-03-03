# 🎓 Educational Organisation Management System
### Built on ServiceNow Platform

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/banner.png?raw=true" alt="Project Banner" width="100%"/>
</p>

![ServiceNow](https://img.shields.io/badge/Platform-ServiceNow-00C853?style=for-the-badge&logo=servicenow&logoColor=white)
![Cloud](https://img.shields.io/badge/Deployment-Cloud-2196F3?style=for-the-badge&logo=cloud&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)
![Team](https://img.shields.io/badge/Team_ID-LTVIP2026TMIDS75171-orange?style=for-the-badge)

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Project Demo Recording](#-project-demo-recording)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Modules Overview](#-modules-overview)
- [Database Design](#-database-design)
- [Screenshots](#-screenshots)
  - [Application Navigator](#1-application-navigator)
  - [Student Management](#2-student-management)
  - [Teacher Management](#3-teacher-management)
  - [Course Management](#4-course-management)
  - [Enrollment Management](#5-enrollment-management)
  - [Academic Progress Tracking](#6-academic-progress-tracking)
  - [Reports & Dashboards](#7-reports--dashboards)
  - [Frontend UI Pages](#8-frontend-ui-pages)
- [Workflow](#-workflow)
- [Installation & Setup](#-installation--setup)
- [Project Structure](#-project-structure)
- [Future Enhancements](#-future-enhancements)
- [Team](#-team)
- [License](#-license)

---

## 📖 About the Project

The **Educational Organisation Management System** is a cloud-based enterprise application developed using the **ServiceNow Platform** to automate and centralize core academic administrative processes within an educational institution.

The system manages:
- 🎒 **Student Records**
- 👨‍🏫 **Teacher Records**
- 📘 **Course Details**
- 📝 **Student Enrollment**
- 📊 **Academic Progress Tracking**

> In many institutions, academic data is still handled through manual record keeping, spreadsheet-based systems, or disconnected software tools — leading to data redundancy, human errors, and limited reporting. This system solves all of that.

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/about-overview.png?raw=true" alt="System Overview" width="85%"/>
</p>

---

## 🎥 Project Demo Recording

> **📹 A complete project walkthrough recording is available that explains:**
>
> - ✅ Overall **project structure** and architecture on ServiceNow
> - ✅ How **custom tables, forms, and modules** are created and configured
> - ✅ How **Frontend UI Pages** are added in ServiceNow for a **better user interface**
> - ✅ How **Service Portal** and **UI Pages (HTML/CSS/JS)** are used to build custom frontend experiences beyond default ServiceNow forms
> - ✅ The complete **end-to-end workflow** — from teacher creation to report generation
> - ✅ How **reference fields, related lists, and relational linking** work across modules
> - ✅ **Report generation** and data visualization walkthrough

### 🔗 [▶️ Watch the Full Project Recording Here](./recording/project-demo.mp4)

> 💡 *The recording is stored in the repository. If the file is too large for GitHub, an external link will be provided below:*
>
> 🔗 **External Link:** [Watch on Google Drive / YouTube (Unlisted)](YOUR_LINK_HERE)

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/recording-thumbnail.png?raw=true" alt="Recording Thumbnail" width="70%"/>
</p>

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🎒 Student Management | Full CRUD operations on student records |
| 👨‍🏫 Teacher Management | Manage faculty details and subject specializations |
| 📘 Course Management | Create courses and assign teachers via reference fields |
| 📝 Enrollment Handling | Link students to courses through a junction table |
| 📊 Progress Tracking | Record marks, grades, and remarks per student per course |
| 📈 Reports | Auto-generated list reports, filtered reports, and performance reports |
| ☁️ Cloud Hosted | Fully cloud-based on ServiceNow — no local infrastructure needed |
| 🔐 Secure Access | Platform-level authentication and session management |
| 🌐 Frontend UI Pages | Custom HTML/CSS/JS pages for enhanced user interface |

---

## 🏗 System Architecture

The system follows a **Three-Tier Enterprise Architecture Model:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/architecture-diagram.png?raw=true" alt="Architecture Diagram" width="80%"/>
</p>

| Layer | Components | Purpose |
|---|---|---|
| **Presentation** | Forms, List Views, UI Pages, Modules, Reports | User interaction & display |
| **Application Logic** | Business Rules, Reference Fields, Workflow Logic | Data processing & validation |
| **Data** | Custom Tables, sys_id, Reference Relationships | Persistent data storage |

---

## 🛠 Tech Stack

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/tech-stack.png?raw=true" alt="Tech Stack" width="70%"/>
</p>

| Technology | Usage |
|---|---|
| **ServiceNow** | Core development platform |
| **ServiceNow Table Designer** | Database table creation |
| **ServiceNow Form Designer** | UI form layout and configuration |
| **ServiceNow UI Pages** | Custom frontend HTML/CSS/JavaScript pages |
| **ServiceNow Service Portal** | Enhanced user-facing UI |
| **ServiceNow Reporting** | Report and dashboard generation |
| **ServiceNow Business Rules** | Server-side logic automation |
| **Cloud Infrastructure** | ServiceNow cloud hosting (PDI) |

---

## 📦 Modules Overview

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/modules-overview.png?raw=true" alt="Modules Overview" width="85%"/>
</p>

---

## 🗄 Database Design

### Entity Relationship Diagram

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/er-diagram.png?raw=true" alt="ER Diagram" width="85%"/>
</p>

### Relationships

### Table Summary

| Table | Key Fields | References |
|---|---|---|
| **Student** | Student ID, Name, DOB, Gender, Email, Phone, Address, Admission Date | — |
| **Teacher** | Teacher ID, Name, Subject, Email, Phone, Experience | — |
| **Course** | Course ID, Name, Duration, Credits, Assigned Teacher | → Teacher |
| **Enrollment** | Student, Course, Enrollment Date, Status | → Student, → Course |
| **Academic Progress** | Student, Course, Marks, Grade, Remarks | → Student, → Course |

---

## 📸 Screenshots

> 💡 All screenshots are stored in the **`image`** branch of this repository.

---

### 1. Application Navigator

The custom application navigator showing all modules organized under the Educational Organisation Management System.

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/app-navigator.png?raw=true" alt="Application Navigator" width="90%"/>
</p>

---

### 2. Student Management

**Student Form — Create / Edit Student Records:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/student-form.png?raw=true" alt="Student Form" width="90%"/>
</p>

**Student List View — All Student Records:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/student-list.png?raw=true" alt="Student List View" width="90%"/>
</p>

---

### 3. Teacher Management

**Teacher Form — Create / Edit Teacher Records:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/teacher-form.png?raw=true" alt="Teacher Form" width="90%"/>
</p>

**Teacher List View — All Teacher Records:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/teacher-list.png?raw=true" alt="Teacher List View" width="90%"/>
</p>

---

### 4. Course Management

**Course Form — Create Course with Teacher Reference:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/course-form.png?raw=true" alt="Course Form" width="90%"/>
</p>

**Course List View — All Course Records:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/course-list.png?raw=true" alt="Course List View" width="90%"/>
</p>

---

### 5. Enrollment Management

**Enrollment Form — Link Student to Course:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/enrollment-form.png?raw=true" alt="Enrollment Form" width="90%"/>
</p>

**Enrollment List View — All Enrollment Records:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/enrollment-list.png?raw=true" alt="Enrollment List View" width="90%"/>
</p>

---

### 6. Academic Progress Tracking

**Academic Progress Form — Enter Marks, Grade & Remarks:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/progress-form.png?raw=true" alt="Academic Progress Form" width="90%"/>
</p>

**Academic Progress List View:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/progress-list.png?raw=true" alt="Academic Progress List" width="90%"/>
</p>

---

### 7. Reports & Dashboards

**Student List Report:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/report-student-list.png?raw=true" alt="Student List Report" width="90%"/>
</p>

**Course Enrollment Report:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/report-enrollment.png?raw=true" alt="Enrollment Report" width="90%"/>
</p>

**Student Performance Report:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/report-performance.png?raw=true" alt="Performance Report" width="90%"/>
</p>

---

### 8. Frontend UI Pages

> 🌐 **Custom Frontend Pages** were created in ServiceNow using **UI Pages (HTML/CSS/JavaScript)** and **Service Portal Widgets** to provide an enhanced, modern user interface beyond the default ServiceNow form-based experience.

**Home Page — Custom Landing Page:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/frontend-homepage.png?raw=true" alt="Frontend Home Page" width="90%"/>
</p>

**Student Dashboard — Custom UI Page:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/frontend-student-dashboard.png?raw=true" alt="Student Dashboard" width="90%"/>
</p>

**Navigation Portal — Enhanced UI:**

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/frontend-navigation.png?raw=true" alt="Navigation Portal" width="90%"/>
</p>

> 📹 **The project recording explains in detail how these frontend UI Pages are created and added in ServiceNow.** It covers:
> - Creating **UI Pages** under `System UI > UI Pages`
> - Writing custom **HTML, CSS, and Client-Side JavaScript**
> - Using **Jelly scripting** for dynamic server-side content
> - Linking UI Pages to **Application Modules** for seamless navigation
> - Using **Service Portal** for building modern, widget-based frontend experiences
>
> 🔗 [Watch the Recording](#-project-demo-recording)

---

## 🔄 Workflow

### Complete Academic Workflow

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/workflow-diagram.png?raw=true" alt="Workflow Diagram" width="80%"/>
</p>

### Step-by-Step Flow

| Step | Action | Module | Output |
|---|---|---|---|
| 1️⃣ | Create Teacher | Teacher Management | Teacher record saved |
| 2️⃣ | Create Course & Assign Teacher | Course Management | Course linked to teacher |
| 3️⃣ | Create Student | Student Management | Student record saved |
| 4️⃣ | Enroll Student in Course | Enrollment | Enrollment record created |
| 5️⃣ | Enter Academic Progress | Academic Progress | Marks & grade recorded |
| 6️⃣ | Generate Reports | Reports | Formatted reports displayed |

---

## ⚙ Installation & Setup

### Prerequisites

- A **ServiceNow Developer Account** — [Register Here](https://developer.servicenow.com/)
- A **Personal Developer Instance (PDI)**
- Web browser (Chrome recommended)

### Setup Steps

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/setup-steps.png?raw=true" alt="Setup Steps" width="80%"/>
</p>

---

## 📂 Project Structure

### Branch Structure

| Branch | Purpose |
|---|---|
| `main` | Primary branch — contains README, documentation, and project files |
| `image` | Contains all screenshots and images used in the README |

> 💡 All images in this README are served from the **`image`** branch. To view or update images, switch to the `image` branch.

---

## 🔮 Future Enhancements

| Enhancement | Description | Priority |
|---|---|---|
| 📋 Attendance Module | Track student attendance per course per session | High |
| 💰 Fee Payment | Integrate fee management and payment tracking | Medium |
| 👪 Parent Portal | Allow parents to view student academic records | Medium |
| 📧 Email Notifications | Automated alerts for enrollment & grade updates | High |
| 📊 Dashboard Analytics | Visual dashboards with charts and KPIs | High |
| 🔐 Role-Based Access | Different access levels for Admin, Teacher, Staff | High |
| 📱 Mobile Optimization | Responsive UI for mobile device access | Medium |
| 🔗 API Integration | REST APIs for external system connectivity | Low |

---

## 👥 Team

| Role | Responsibility |
|---|---|
| **Developer** | Table creation, field configuration, reference relationships, business rules |
| **UI Designer** | Form layout, section design, UI Pages, frontend customization |
| **Tester** | Test case design, execution, defect reporting |
| **Documentation Lead** | SRS, design docs, test docs, final report |

**Team ID:** `LTVIP2026TMIDS75171`
**Submission Date:** `28 February 2026`

---

## 📄 License

This project is developed for **educational and academic purposes** as part of the ServiceNow learning program.

---

<p align="center">
  <b>⭐ If you found this project helpful, please give it a star! ⭐</b>
</p>

<p align="center">
  <img src="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/blob/image/footer-banner.png?raw=true" alt="Footer" width="100%"/>
</p>

---

<p align="center">
  Made with ❤️ using ServiceNow Platform
</p>
