const express = require('express');
const router = express.Router();
const axios = require('axios');

// Hugging Face API
const HF_API_URL = process.env.HF_API_URL;
const HF_API_KEY = process.env.HF_API_KEY;

// Route to Evaluate Lesson Plans
router.post('/score', async (req, res) => {
  const { lesson, purpose, objectives } = req.body;

  const prompt = `
    Evaluate the following lesson plan:
    Lesson: ${lesson}
    Purpose: ${purpose}
    Objectives: ${objectives}

    Provide a score (1-10) and detailed suggestions for improvement.
  `;

  try {
    const response = await axios.post(
      HF_API_URL,
      { inputs: prompt },
      {
        headers: { Authorization: `Bearer ${HF_API_KEY}` },
      }
    );

    res.json({ evaluation: response.data[0].generated_text });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error evaluating lesson plan.');
  }
});

// Route to Generate Lesson Plans
router.post('/generate', async (req, res) => {
  const { purpose, objectives, gradeLevel, topic } = req.body;

  const prompt = `
    Create a detailed lesson plan based on the following criteria:
    - Purpose: ${purpose}
    - Objectives: ${objectives}
    - Grade Level: ${gradeLevel}
    - Topic: ${topic}

    Include:
    1. An introduction.
    2. Main activities or teaching strategies.
    3. Assessment methods to evaluate learning.
    4. Adaptations for diverse learners.
  `;

  try {
    const response = await axios.post(
      HF_API_URL,
      { inputs: prompt },
      {
        headers: { Authorization: `Bearer ${HF_API_KEY}` },
      }
    );

    res.json({ lessonPlan: response.data[0].generated_text });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating lesson plan.');
  }
});

module.exports = router;