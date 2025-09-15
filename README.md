
 # MERN Stack Task Manager

A full-stack web application for managing tasks, built with MongoDB, Express.js, React, and Node.js. This project features a complete user authentication system, a drag-and-drop interface for task management, and a clean, modern UI.

---

## Features

* **User Authentication:** Secure user registration and login using JSON Web Tokens (JWT) and password hashing with bcryptjs.
* **Full CRUD Functionality:** Users can Create, Read, Update, and Delete their own tasks.
* **Interactive Kanban Board:** A drag-and-drop interface to easily move tasks between statuses ('To-Do', 'In Progress', 'Done').
* **Task Details:** Assign priority levels (Low, Medium, High) and due dates to tasks.
* **Responsive Design:** A seamless user experience across desktop and mobile devices.
* **Theme Switching:** A toggle for light and dark mode preferences.

---

## Tech Stack

The project is built using the MERN stack and other modern web technologies.

* **Frontend:**
    * React
    * React Router
    * Axios
    * React-beautiful-dnd (for drag-and-drop)
    * Material-UI / Tailwind CSS
    * Framer Motion (for animations)
* **Backend:**
    * Node.js
    * Express.js
    * Mongoose
* **Database:**
    * MongoDB (via MongoDB Atlas)
* **Authentication:**
    * JSON Web Tokens (JWT)
    * bcryptjs

---

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need the following software installed on your computer:

* Node.js (which includes npm)
* Git
* A free MongoDB Atlas account for the database

### Installation

1.  **Clone the repository:**
    Open your terminal and clone the project to your local machine.
    ```bash
    git clone [https://github.com/Your-Username/Task-Manager.git](https://github.com/Your-Username/Task-Manager.git)
    cd Task-Manager
    ```

2.  **Backend Setup:**
    Navigate to the backend directory and install the necessary dependencies.
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory and add the following configuration variables. Replace the placeholder values with your own.
    ```env
    MONGO_URI=mongodb+srv://tabilij462_db_user:JRqWwcg1f67ixTXK@cluster0.ejataji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    JWT_SECRET=abc@123-19309
    ```
    Start the backend server.
    ```bash
    npm start
    ```
    The server will be running on `http://localhost:5000`.

3.  **Frontend Setup:**
    Open a new terminal window, navigate to the frontend directory, and install its dependencies.
    ```bash
    cd frontend
    npm install
    ```
    Start the frontend React application.
    ```bash
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.

---

## Usage

Once both the backend and frontend servers are running, you can use the application:
1.  Register for a new account.
2.  Log in with your credentials.
3.  You will be redirected to the main task board where you can start adding, updating, and organizing your tasks.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
