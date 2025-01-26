const axios = require('axios');

// Load environment variables
const HF_API_URL = process.env.HF_API_URL;
const HF_API_KEY = process.env.HF_API_KEY;

// Function to handle scoring a lesson plan
const scoreLessonPlan = async (req, res) => {
  // Extract the lesson plan details from the request body
  const { lesson, purpose, objectives } = req.body;

  // Check if all required fields are provided
  if (!lesson || !purpose || !objectives) {
    return res.status(400).json({ error: "Missing required fields: 'lesson', 'purpose', or 'objectives'" });
  }

  // Construct the prompt for Hugging Face API
  const prompt = `
  Evaluate the following lesson plan:
  Lesson: ${lesson}
  Purpose: ${purpose}
  Objectives: ${objectives}

  Provide a score (1-10) and detailed suggestions for improvement.
  `;

  try {
    // Send a POST request to Hugging Face API
    const response = await axios.post(
      HF_API_URL,
      { inputs: prompt },
      {
        headers: { Authorization: `Bearer ${HF_API_KEY}` },
      }
    );

    // Extract the evaluation from the response
    const evaluation = response.data[0]?.generated_text || "No evaluation received.";

    // Send the evaluation back to the client
    res.status(200).json({ evaluation });
  } catch (error) {
    console.error('Error evaluating the lesson plan:', error.message);

    // Send an error response
    res.status(500).json({ error: 'Failed to evaluate the lesson plan. Please try again later.' });
  }
};

module.exports = { scoreLessonPlan };