# Tasks API - RESTful CRUD Application

This is a simple RESTful API built with Node.js and Express.js for managing a list of tasks (to-do items). The data is stored in memory, and the API allows basic CRUD operations: Create, Read, Update, and Delete.

## 📁 Project Structure

```
.
├── controllers
│   │
│   └── taskController.js
│
├── middleware
│   │
│   └── errorHandler.js
│
├── routes
│   │
│   └── taskRoutes.js
│
├── .gitignore //Ensures sensitive or unnecessary files don't get committed.
│
├── index.js
│
├── package-lock.json
│
├── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine
- Postman or curl for API testing

### Installation

```bash
git clone https://github.com/Marmik-Soni/to-do-list-backend-assessment.git
cd to-do-list-backend-assessment
npm install
```

### Run the server

```bash
npx nodemon index.js
```

Server will run on: `http://localhost:3000`

---

## 🛠️ API Endpoints

### 1. Get all tasks

**GET** `/tasks`

**Response:**

```json
[
  {
    "id": "1744294427998",
    "title": "Learn Node.js",
    "description": "Crash course on YouTube",
    "completed": false
  }

  {
    "id": "17442944216518",
    "title": "Learn React.js",
    "description": "Go through React.js crash course",
    "completed": false
  }
]
```

---

### 2. Get a specific task

**GET** `/tasks/:id`

```json
[
  {
    "id": "1744294427998",
    "title": "Learn Node.js",
    "description": "Crash course on YouTube",
    "completed": false
  }
]
```

---

### 3. Create a new task

**POST** `/tasks`

**Body (JSON):**

```json
{
  // ID will be automatically generated
  "title": "Learn Express.js",
  "description": "Look for good Express.js playlist!",
  "completed": false
}
```

---

### 4. Update a task

**PUT** `/tasks/:id`

**Response:**

```json
// Existing record
[
  {
    "id": "1744294427998",
    "title": "Learn Node.js",
    "description": "Crash course on YouTube",
    "completed": false
  }
]
```

```json
// After Update
[
  {
    "id": "1744294427998",
    "title": "Learn Node.js",
    "description": "Go through Node.js crash course",
    "completed": true
  }
]
```

---

### 5. Delete a task

**DELETE** `/tasks/:id`

**Response:**

```json
[
  {
    "message": "Task deleted successfully"
  }
]
```

---

## ⚠️ Validation

- `title` and `description` are required for creating or updating tasks.
- Returns `400 Bad Request` if missing.
- Returns `404 Not Found` for invalid task ID.

---

## 🧪 Testing

Use Postman or curl to interact with the API.  
Ensure to set `Content-Type: application/json` for `POST` and `PUT` requests and use **raw JSON** in the request body.

---

## ❗Note

Data will reset when the server restarts since it's stored in memory (no database used).

---
