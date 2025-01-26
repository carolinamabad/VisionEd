import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/upload" element={<UploadScreen />} />
        <Route path="/generate" element={<GenerateLessonPlan />} />
      </Routes>
    </Router>
  );
};

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-screen">
      <div>
        <h1 className="text-5xl font-bold">VisionEd</h1>
        <p className="text-2xl mt-4">"Empowering educators, one lesson at a time."</p>
        <button
          className="mt-8 px-6 py-2 bg-[#8CC63F] rounded-full text-white text-lg"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

const LoginScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center h-screen bg-[#F5F5F5]">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-3xl font-bold text-[#333333] mb-4">Welcome Teachers</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#333333] text-left">Username</label>
          <input
            type="text"
            className="w-full border border-[#4A90E2] p-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#333333] text-left">Password</label>
          <input
            type="password"
            className="w-full border border-[#4A90E2] p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <a
          href="#"
          className="text-sm text-[#1C3D63] underline hover:text-[#F67A3B] block mb-4"
        >
          Forgot Password?
        </a>
        <button
          className="w-full bg-[#4A90E2] text-white py-2 rounded"
          onClick={() => navigate("/upload")}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

const UploadScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-[#FFFFFF]">
      <header className="flex justify-between p-4 bg-[#F5F5F5] shadow-md">
        <h1 className="text-xl font-bold text-[#333333]">Lesson Plan Scorer</h1>
        <button
          className="bg-[#FFCC00] text-[#333333] px-4 py-2 rounded"
          onClick={() => navigate("/generate")}
        >
          Generate Lesson Plan
        </button>
      </header>
      <main className="flex flex-col justify-center items-center flex-grow">
        <h2 className="text-lg font-medium text-[#333333] mb-4">
          Upload Your Lesson Plan for Scoring
        </h2>
        <input type="file" className="border border-[#4A90E2] p-2 rounded" />
        <button className="mt-4 bg-[#8CC63F] text-white py-2 px-6 rounded">
          Submit
        </button>
      </main>
    </div>
  );
};

const GenerateLessonPlan = () => {
  const [formData, setFormData] = useState({
    purpose: "",
    objectives: "",
    gradeLevel: "",
    topic: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Generated Lesson Plan Data:", formData);
    // Call backend API to generate lesson plan here
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#F5F5F5]">
      <h2 className="text-xl font-bold text-[#333333] mb-4">Generate a New Lesson Plan</h2>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#333333]">Purpose</label>
          <input
            type="text"
            name="purpose"
            className="w-full border border-[#4A90E2] p-2 rounded"
            value={formData.purpose}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#333333]">Objectives</label>
          <input
            type="text"
            name="objectives"
            className="w-full border border-[#4A90E2] p-2 rounded"
            value={formData.objectives}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#333333]">Grade Level</label>
          <input
            type="text"
            name="gradeLevel"
            className="w-full border border-[#4A90E2] p-2 rounded"
            value={formData.gradeLevel}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#333333]">Topic</label>
          <input
            type="text"
            name="topic"
            className="w-full border border-[#4A90E2] p-2 rounded"
            value={formData.topic}
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full bg-[#4A90E2] text-white py-2 rounded"
          onClick={handleSubmit}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default App;