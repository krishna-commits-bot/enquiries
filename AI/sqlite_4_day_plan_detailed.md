
# SQLite Backend Plan – 4-Day Detailed Task List

## 👨‍💻 Raj – SQLite (Relational Database)

This plan outlines a detailed schedule for working with SQLite from scratch, including development tasks, documentation, and technical exploration.

---

### 📅 Day 1 – Setup, Learning Basics

#### ✅ Tasks:
- Install **SQLite CLI** and **DB Browser for SQLite**.
- Learn and practice basic SQL commands:
  - `CREATE`
  - `INSERT`
  - `SELECT`
  - `UPDATE`
  - `DELETE`
- Create a sample HR database with tables:
  - `employees`
  - `roles`
  - `attendance`

#### 📝 Documentation:
- What is **SQLite**?
- When and why should we use SQLite?
- **Advantages** & **disadvantages**
- FAQs:
  - How does concurrency work in SQLite?
  - What are the limitations of file-based databases?
  - How is locking handled?
  - Performance characteristics and edge cases
  - Is it secure for production?

---

### 📅 Day 2 – Schema Design & Queries

#### ✅ Tasks:
- Design a **normalized database schema** for the HR system.
- Implement common constraints:
  - `PRIMARY KEY`
  - `FOREIGN KEY`
  - `UNIQUE`
  - `NOT NULL`
- Add and test **indexes** for performance.
- Execute:
  - **JOINs** (INNER, LEFT)
  - **Aggregate queries** (`COUNT`, `SUM`, `AVG`)
  - **Subqueries**

#### 📝 Documentation:
- Schema decisions and reasons
- Performance of different queries
- Effect and role of indexes
- Handling **transactions** and **locks**

---

### 📅 Day 3 – Advanced Topics & Integration

#### ✅ Tasks:
- Use **transactions** in SQLite:
  - `BEGIN`
  - `COMMIT`
  - `ROLLBACK`
- Simulate **concurrent access** with multiple scripts
- Explore and test **Full-Text Search (FTS)** in SQLite
- Integrate with a backend script:
  - Node.js (with `sqlite3` package)
  - Python (with `sqlite3` module)

#### 📝 Documentation:
- Limitations of concurrency in SQLite
- Use cases for Full-Text Search
- Integration process, steps, and problems faced

---

### 📅 Day 4 – Use Case Demo & Summary

#### ✅ Tasks:
- Build a simple **Command Line Interface (CLI)** app using the HR database
- Populate database with **100,000+ rows** for stress testing
- Run performance and query efficiency tests

#### 📝 Final Documentation:
- Final **schema design**
- **Q&A section** (~50 common developer questions with answers)
- Benchmark and **performance metrics**
- Tips for:
  - **Backups**
  - **Optimization**
  - **Known limitations**
  - Lessons learned throughout the journey

---

## 📦 Deliverables
- Complete Markdown documentation
- SQL scripts for schema and data generation
- CLI app (optional but recommended)
- Performance benchmark report
- Q&A section to assist future developers
