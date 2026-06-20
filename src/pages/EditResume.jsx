import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditResume() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    education: "",
    score: "",
    status: ""
  });

  useEffect(() => {
    getResume();
  }, []);

  async function getResume() {
    try {
      const response = await api.get(`/resumes/${id}`);

      setFormData({
        name: response.data.name || "",
        email: response.data.email || "",
        skills: response.data.skills?.join(", ") || "",
        experience: response.data.experience || "",
        education: response.data.education || "",
        score: response.data.score || "",
        status: response.data.status || ""
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const updatedResume = {
      ...formData,
      skills: formData.skills
        .split(",")
        .map(skill => skill.trim())
    };

    try {
      await api.put(
        `/resumes/${id}`,
        updatedResume
      );

      navigate("/resumes");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">
      <h2>Edit Resume</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Candidate Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills (React, JavaScript, CSS)"
          value={formData.skills}
          onChange={handleChange}
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
        />

        <input
          type="text"
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
        />

        <input
          type="number"
          name="score"
          placeholder="ATS Score"
          value={formData.score}
          onChange={handleChange}
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">
            Select Status
          </option>

          <option value="Selected">
            Selected
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Rejected">
            Rejected
          </option>
        </select>

        <button className="submit-btn">
          Update Resume
        </button>

      </form>
    </div>
  );
}

export default EditResume;