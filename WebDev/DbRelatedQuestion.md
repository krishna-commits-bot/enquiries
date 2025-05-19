# Local Database Strategy for Hybrid Mobile Applications

## ✅ Our Core Requirements

* Offline-first design.
* All data stored locally.
* No cloud, no external server-side infrastructure.

## Available Solutions for Storing/Managing DB Locally

---

### 1. SQLite

* A lightweight, serverless, and widely-used relational database.
* Ideal for structured data (tables with rows and columns).
* Available in hybrid frameworks via plugins like `cordova-sqlite-storage` (for Ionic) or `react-native-sqlite-storage` (for React Native).
* Supports complex queries and is highly reliable.
* **Storage limit:** Up to available device storage (typically several GB).

### 2. PouchDB

* A JavaScript-based database inspired by CouchDB.
* Stores data in JSON format, making it easy to work with in web-based hybrid apps.
* Runs in the browser or Node.js environment and uses IndexedDB or WebSQL under the hood.
* Great for NoSQL-style data and simple key-value storage.
* **Storage limit:** Depends on browser storage (e.g., \~50MB in some browsers, but can be higher with proper configuration).

### 3. IndexedDB

* A browser-based NoSQL database built into modern browsers.
* Suitable for storing large amounts of structured data.
* Accessible directly in hybrid apps built with Ionic or Framework7.
* **Storage limit:** Varies by browser (often 10-50% of available disk space).

### 4. Realm

* A mobile-first, object-oriented database.
* Easy to use with React Native or Flutter.
* Optimized for mobile apps with fast queries and low memory usage.
* **Storage limit:** Up to available device storage.

### 5. LocalStorage

* Simple key-value storage in browsers.
* Only suitable for very small datasets (e.g., user preferences, settings).
* **Storage limit:** Typically 5-10MB.

---

## ❌ Why We Can't Use Other Databases Like MySQL, PostgreSQL

| External DB          | Reason to Avoid in Your Case                          |
| -------------------- | ----------------------------------------------------- |
| Firebase / Firestore | Cloud-hosted, requires network. Data goes off-device. |
| MongoDB Atlas        | Cloud-based NoSQL. Requires account, backend logic.   |
| MySQL/PostgreSQL     | Server-dependent. Not suited for offline hybrid apps. |
| Supabase / Hasura    | Backend-as-a-service—still cloud reliant.             |
| AWS DynamoDB         | Cloud-native. Overhead of IAM, network, latency.      |

All of these solutions **contradict our requirements**: they store data on **external infrastructure**, require **internet connectivity**, and may involve **vendor lock-in**, **security implications**, and **cost**.
