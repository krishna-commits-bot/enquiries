
# Backend Project Plan: SQLite & VectorDB (4-Day Task List)

## Overview

This project involves two separate backend modules:
- **SQLite** (handled by Raj)
- **Vector Database for Search Embeddings** (handled by Colleague)

Both components are to be built from scratch, with full documentation of questions, challenges, issues, and benefits. This document outlines a structured 4-day task list for each.

---

## 👨‍💻 Raj – SQLite (Relational DB)

### Day 1 – Setup, Learning Basics
- Install SQLite CLI & DB Browser.
- Learn basic SQL commands: `CREATE`, `INSERT`, `SELECT`, `UPDATE`, `DELETE`.
- Create sample HR database (tables: employees, roles, attendance).
- Document:
  - What is SQLite?
  - When and why to use SQLite?
  - Advantages & disadvantages.
  - FAQs: concurrency, file-based DBs, locking, performance, security.

### Day 2 – Schema Design & Queries
- Design normalized schema.
- Implement constraints: `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `NOT NULL`.
- Use indexes to improve performance.
- Execute JOINs, aggregate queries, subqueries.
- Document:
  - Schema decisions.
  - Query performance.
  - Index impact.
  - Transactions & locks.

### Day 3 – Advanced Topics & Integration
- Use transactions: `BEGIN`, `COMMIT`, `ROLLBACK`.
- Simulate concurrency scenarios.
- Explore Full-Text Search (FTS).
- Try integrating with a Node.js/Python script.
- Document:
  - Concurrency limitations.
  - FTS use cases.
  - Integration steps and challenges.

### Day 4 – Use Case Demo & Summary
- Create a CLI app using SQLite.
- Stress-test with 100k+ rows.
- Document:
  - Final schema design.
  - Q&A (~50 developer questions).
  - Performance metrics.
  - Backups, limitations, lessons learned.

---

## 👨‍💻 Colleague – VectorDB (Search Embeddings)

### Day 1 – Research & Setup
- Explore FAISS, Pinecone, Weaviate, ChromaDB, Qdrant.
- Choose and install one (e.g., Chroma or FAISS).
- Learn:
  - Embeddings
  - Vector similarity metrics
- Document:
  - What is a vector DB?
  - Use cases and comparison with relational DBs.
  - FAQ: performance, scaling, architecture.

### Day 2 – Embeddings & Indexing
- Generate embeddings using OpenAI/HuggingFace.
- Insert documents and vectors into DB.
- Run similarity searches.
- Document:
  - ANN (Approximate Nearest Neighbors).
  - Vector space theory.
  - Questions: vector size limits, storage, latency.

### Day 3 – Advanced Operations
- Apply metadata filters with vector search.
- Benchmark with 10k+ entries.
- Test persistent storage options.
- Document:
  - Index updates/deletion.
  - Embedding versioning.
  - Troubleshooting.

### Day 4 – Use Case Demo & Summary
- Build a semantic search prototype.
- Test on various query types.
- Document:
  - End-to-end pipeline.
  - Q&A (~50 questions).
  - Challenges faced.
  - Final architecture diagram.

---

## Final Deliverables
- ✅ Markdown documentation for both modules.
- ✅ SQLite + VectorDB comparison table.
- ✅ Developer Q&A, use cases, issues, and resolutions.
- ✅ Sample code (optional).
- ✅ GitHub/Drive-ready files for review.

