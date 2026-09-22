const API_BASE_URL = "http://localhost:5000/api";

export const api = {
    // Get all courses
  getCourses: async () => {
    const response = await fetch(`${API_BASE_URL}/courses`);

    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }

    return response.json();
  },

  // Get all trainers

  getTrainers: async () => {
    const response = await fetch(`${API_BASE_URL}/trainers`);

    if (!response.ok) {
      throw new Error("Failed to fetch trainers");
    }

    return response.json();
  },

  // Get all batches

  getBatches: async () => {
    const response = await fetch(`${API_BASE_URL}/batches`);

     if (!response.ok) {
      throw new Error("Failed to fetch batches");
    }

    return response.json();
  },

  //submit enquiry

  submitEnquiry: async (enquiryData) => {
    const response = await fetch(`${API_BASE_URL}/enquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enquiryData),
    });

     if (!response.ok) {
      throw new Error("Failed to submit enquiry");
    }

    return response.json();
  },
};