# **VisionEd: Education AI Platform**

VisionEd is a web-based platform designed to assist educators in improving and generating lesson plans using the power of AI. It leverages modern React on the frontend and a Node.js/Express.js backend integrated with the Hugging Face API to provide intelligent scoring and generation capabilities.

---

## **Features**
1. **Lesson Plan Scoring**:
   - Educators can submit their lesson plans to receive a score (1-10).
   - Detailed suggestions for improvement are provided.

2. **Lesson Plan Generation**:
   - Educators can input criteria such as purpose, objectives, grade level, and topic.
   - The platform generates a detailed and adaptable lesson plan based on the provided inputs.

3. **Seamless User Experience**:
   - Built with a modern React frontend for a smooth and responsive UI.
   - Backend powered by Node.js, Express.js, and the Hugging Face AI API.

---

## **Project Structure**
### Backend (`education_platform/backend_dev`):
Handles API requests and communicates with the Hugging Face AI API.

- **Endpoints**:
  - `/score`: Accepts a lesson plan and returns a score with suggestions.
  - `/generate`: Accepts criteria and generates a detailed lesson plan.

- **Technologies**:
  - Node.js
  - Express.js
  - Hugging Face AI API
  - Axios for HTTP requests
  - Body-Parser and CORS for middleware
  - React
  - Axios
  - Tailwind CSS

- **Key Files**:
  - `server.js`: Entry point of the backend application.
  - `routes/api.js`: API endpoint definitions.
  - `controllers/scoreController.js`: Logic for scoring and generating lesson plans.

### Frontend (`frontend_dev`):
Provides an interactive UI for educators to interact with the platform.

- **Features**:
  - Tab-based navigation for scoring and generating lesson plans.
  - Responsive design powered by Tailwind CSS.
  - Axios for sending requests to the backend.

- **Key Files**:
  - `src/App.jsx`: Main React component handling scoring and generation.
  - `src/App.css`: Styles for the application.
  - `public/index.html`: Base HTML file.
  - `src/index.js`: Entry point for rendering the React app.

---

## **Installation**

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)
- npm (comes with Node.js)
- [Git](https://git-scm.com/)

### **How to Use**
1. Start both the backend (npm run dev) and frontend (npm start) servers.
2. Open your browser and navigate to http://localhost:3000.
3. Choose between:
    - Score Lesson Plan: Enter a lesson plan to get a score and suggestions.
    - Generate Lesson Plan: Input criteria to generate a lesson plan.
4. Review the AI-powered response displayed on the page.

## **Future Enhancements**
- Add authentication for secure user access.
- Allow users to save and download lesson plans.
- Integrate a database for storing user-generated content.
- Improve UI/UX with more interactive elements for better user experience.
