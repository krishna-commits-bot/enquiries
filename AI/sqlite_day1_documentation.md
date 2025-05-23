
# 📘 SQLite – Day 1 Documentation

This file covers foundational knowledge and questions related to SQLite, as outlined in the 4-day backend development plan.

---

## ✅ What is SQLite?

SQLite is a lightweight, file-based relational database management system (RDBMS). Unlike traditional databases that require a server process, SQLite is embedded directly into applications.

- **Self-contained**: No external dependencies.
- **Zero configuration**: No setup required.
- **Cross-platform**: Runs on Windows, Linux, macOS, Android, iOS.
- **Single-file storage**: Database is stored in one `.sqlite` or `.db` file.

---

## ✅ When and Why to Use SQLite?

**Use SQLite when:**
- You need a local, embedded database.
- The application is small to medium scale.
- No need for concurrent multi-user writes.
- Ideal for mobile apps, small web apps, prototyping, testing, and desktop tools.

**Why SQLite:**
- Lightweight and fast.
- Portable and easy to back up.
- Minimal setup for developers.

---

## ✅ Advantages of SQLite

| Advantage          | Description                                                  |
|--------------------|--------------------------------------------------------------|
| Zero Configuration | No setup or installation needed                              |
| Lightweight        | Small binary (~500 KB)                                       |
| Portable           | Entire database is in a single file                          |
| ACID Compliant     | Ensures reliable transactions                                |
| Serverless         | Runs in-process with your application                        |
| Cross-platform     | Works on all OS platforms and mobile devices                 |

---

## ✅ Disadvantages of SQLite

| Disadvantage              | Description                                              |
|---------------------------|----------------------------------------------------------|
| Limited concurrency       | Only one write operation at a time                       |
| Size limits               | Better for databases <1GB (can handle more with caution) |
| No user management        | Lacks roles or permissions support                       |
| Not scalable              | Not suitable for high-traffic, multi-user applications   |

---

## ✅ FAQs

### 🔄 Concurrency
- SQLite supports **multiple readers**, but only **one writer** at a time.
- Concurrency is limited due to database-level locking.
- WAL (Write-Ahead Logging) improves write concurrency somewhat.

### 📂 File-Based Database
- Everything is stored in a single file.
- Makes backup and deployment very easy.
- File corruption risk exists if writes are interrupted improperly.

### 🔐 Locking
- Uses the following locking strategy:
  - **Shared Lock**: For reading
  - **Reserved/Exclusive Lock**: For writing
- WAL mode reduces locking conflicts and improves concurrency.

### ⚡ Performance
- Fast for read-heavy applications.
- Slower under heavy concurrent writes.
- Indexes and normalization are critical for optimal speed.

### 🔒 Security
- No built-in authentication or encryption.
- Use **SQLCipher** to encrypt the database.
- Security must be handled in the application layer.

---
