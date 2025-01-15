# Full-Stack Application: Spring Boot Backend with React Frontend

## Project Overview
This project is a full-stack application that integrates a Spring Boot backend with a React frontend. It demonstrates functionality such as fetching and displaying data, handling user interactions, authentication, and error handling. The project is deployed and can be accessed using the link below.

**Deployed Link:** [https://visitly-2ghj.vercel.app/](https://visitly-2ghj.vercel.app/)

---

## Features Implemented
### Backend (Spring Boot with MySQL)
1. **Setup:**
   - Spring Boot project created using Maven with the following dependencies:
     - Spring Web
     - Spring Data JPA
     - MySQL Driver
     - Lombok (for concise code)

2. **Environment Configuration:**
   - Separate environment property files for development (`application-dev.properties`) and production (`application-prod.properties`).
   - Used profiles to switch between environments.

3. **Database Integration:**
   - MySQL database configured to store and manage data.
   - Spring Data JPA used for repository layer with CRUD operations.

4. **API Development:**
   - RESTful APIs developed for Create, Read, Update, and Delete (CRUD) operations.
   - Input validation and error handling implemented.

5. **Authentication & Authorization:**
   - Basic authentication implemented to secure APIs.
   - Role-based access control for sensitive endpoints.

6. **Testing:**
   - Unit tests written using JUnit and Mockito for service and repository layers.

---

### Frontend (React)
1. **Setup:**
   - React project created using Vite for a faster development experience.
   - React Bootstrap used for styling and UI components.

2. **Components:**
   - Modular components developed to display data fetched from the backend.
   - Components include lists, forms for adding/updating data, and detail views.

3. **API Integration:**
   - Axios library used to interact with the backend REST APIs.
   - Data fetched and displayed dynamically in the UI.

4. **User Interactions:**
   - Handlers implemented for button clicks, form submissions, and other user actions.
   - API calls made to create, update, and delete data in real-time.

5. **Error Handling:**
   - Error messages displayed in the UI for API call failures.
   - Backend validation errors properly communicated to the frontend.

6. **Responsive Design:**
   - Mobile-friendly UI implemented using responsive design techniques.

---

### Deployment
1. **Backend:**
   - Deployed on a cloud platform/server.
   - Configured environment variables for database credentials and security keys.

2. **Frontend:**
   - Deployed on [Vercel](https://vercel.com/) with seamless integration and CI/CD setup.
   - Accessible at [https://visitly-2ghj.vercel.app/](https://visitly-2ghj.vercel.app/).

---

## Additional Considerations
1. **Authentication & Authorization:**
   - Implemented security mechanisms using Spring Security on the backend.
   - Token-based authentication planned for future iterations.

2. **Error Handling:**
   - Comprehensive error handling for both backend and frontend.

3. **Testing:**
   - Unit and integration tests written for both backend and frontend.
   - Ensures functionality works as intended and edge cases are covered.

4. **Continuous Integration and Delivery (CI/CD):**
   - GitHub Actions configured for build, test, and deployment pipelines.

---

## Technologies Used
- **Backend:** Spring Boot, MySQL, Spring Data JPA, Lombok
- **Frontend:** React.js, React Bootstrap
- **Deployment:** Vercel (Frontend), AWS, Railway (Backend)

---

## Getting Started
### Prerequisites
- Java 17+
- Node.js 18+
- MySQL Server
- Maven

### Run Locally
#### Backend:
1. Clone the repository and navigate to the backend directory.
2. Create a database named `fullstack_app` in MySQL.
3. Configure `application-dev.properties` with your database credentials.
4. Run the application:
   ```bash
   mvn spring-boot:run

Access the backend APIs at http://localhost:8090


####Frontend:

Navigate to the frontend directory.

Install dependencies:

npm install


Start the development server:
npm run dev

Open the application at http://localhost:5173
Deployment

Backend and frontend configured for production environments.
Backend uses environment variables for sensitive credentials.
Frontend deployed on Vercel, accessible at https://visitly-2ghj.vercel.app/.


Author

Vikrant Kumar Yadav
GitHub Repository
