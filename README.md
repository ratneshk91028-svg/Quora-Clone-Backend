# Quora-Clone-Backend
Quora Clone Web App | Built with HTML, CSS, JavaScript, and Node.js/Express

# RESTful Posts Application (CRUD)

A simple backend web application that demonstrates the implementation of RESTful API architecture. It allows users to perform full CRUD (Create, Read, Update, Delete) operations on user blog posts.

## ✨ Features
* **Read All:** View all user posts on a single dashboard (`GET /posts`).
* **Create:** Add new posts with automatic, unique UUID generation (`POST /posts`).
* **View Single:** Inspect a specific post via its unique ID (`GET /posts/:id`).
* **Update:** Edit the content of any existing post using `PATCH` via `method-override`.
* **Delete:** Permanently remove a post from the array memory (`DELETE /posts/:id`).

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Templating Engine:** EJS (Embedded JavaScript)
* **Libraries:** `uuid` (for unique IDs), `method-override` (for PATCH/DELETE requests)

## 🚀 Quick Setup & Installation

1. Clone this repository to your local machine:
   ```bash
   git clone <your-repository-link>
   ```
2. Navigate into the project folder and install dependencies:
   ```bash
   npm install
   ```
3. Start the local server:
   ```bash
   node index.js
   ```
4. Open your browser and explore the project at:
   `http://localhost:8080/posts`
