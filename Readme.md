# Task Management System

![GitHub repo size](https://img.shields.io/github/repo-size/Riyas-k/tasks-mern-interval)
![GitHub contributors](https://img.shields.io/github/contributors/Riyas-k/tasks-mern-interval)
![GitHub stars](https://img.shields.io/github/stars/Riyas-k/tasks-mern-interval?style=social)
![GitHub forks](https://img.shields.io/github/forks/Riyas-k/tasks-mern-interval?style=social)
![GitHub issues](https://img.shields.io/github/issues-raw/Riyas-k/tasks-mern-interval)

Task Management System is a full-stack web application for managing tasks with a Node.js, Express, and AWS S3 Bucket backend server, and a Vite-powered frontend server. It allows you to create, update, list, and delete tasks, along with task images stored in an S3 bucket.

**Developer:** Riyas
**Email:** mohammedriyazriyaz04@gmail.com

## Postman API Documentation

You can find detailed API documentation for this project in our Postman collection:

[View API Documentation](https://documenter.getpostman.com/view/23154953/2s9YRB4CkP)


## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create tasks with headings, descriptions, dates, times, and images.
- Update tasks, including image updates.
- List tasks with filtering options (e.g., priority) and sorting by the added date.
- Delete tasks along with their associated images.
- Store task images in an AWS S3 Bucket.

## Technologies

- **Backend:** Node.js, Express.js, Sequelize (with MySQL), AWS SDK
- **Frontend:** Vite, React
- **Database:** MySQL
- **AWS:** Amazon S3 Bucket
- **Version Control:** Git, GitHub

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Riyas-k/tasks-mern-interval.git
Install dependencies:

bash
Copy code
cd tasks-mern-interval/backend
npm install
bash
Copy code
cd tasks-mern-interval/frontend
npm install
Configuration
Before running the application, you need to configure some environment variables:

Backend Configuration: Create a .env file in the backend directory with the following content:

env
Copy code
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_HOST=your_database_host
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_S3_BUCKET_NAME=your_s3_bucket_name
Frontend Configuration: Create a .env file in the frontend directory with the following content:

env
Copy code
VITE_BACKEND_API_URL=http://localhost:3000/api
VITE_AWS_S3_BUCKET_URL=https://your-s3-bucket-url
Running the Application
Start the Backend Server:

bash
Copy code
cd tasks-mern-interval/backend
npm start
The backend server will run on http://localhost:3000.

Start the Frontend Server:

bash
Copy code
cd tasks-mern-interval/frontend
npm run dev
The frontend server will run on http://localhost:5173.

Access the application in your web browser at http://localhost:5173.

Contributing
We welcome contributions from the community. To contribute to this project, please follow these steps:

Fork the repository on GitHub.
Create a new branch with a descriptive name: git checkout -b feature/my-feature or fix/issue-description.
Commit your changes: git commit -m 'Add new feature'.
Push to your branch: git push origin feature/my-feature.
Create a Pull Request on GitHub.
License
This project is licensed under the MIT License.