import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddResume() {
const navigate = useNavigate();

const [resume, setResume] = useState({
name: "",
email: "",
experience: "",
education: "",
score: "",
status: "Pending",
});

const handleChange = (e) => {
setResume({
...resume,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await api.post("/resumes", resume);

    alert("Resume Saved Successfully!");
    navigate("/resumes");
  } catch (error) {
    console.error(error);
    alert("Failed to save resume");
  }
};

return ( <div className="form-container"> <h2 className="form-title">Add Resume</h2>
<form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label>Name</label>
      <input
        type="text"
        name="name"
        className="form-control"
        value={resume.name}
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <label>Email</label>
      <input
        type="email"
        name="email"
        className="form-control"
        value={resume.email}
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <label>Experience</label>
      <input
        type="text"
        name="experience"
        className="form-control"
        value={resume.experience}
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <label>Education</label>
      <input
        type="text"
        name="education"
        className="form-control"
        value={resume.education}
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <label>Score</label>
      <input
        type="number"
        name="score"
        className="form-control"
        value={resume.score}
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <label>Status</label>
      <select
        name="status"
        className="form-control"
        value={resume.status}
        onChange={handleChange}
      >
        <option value="Pending">Pending</option>
        <option value="Selected">Selected</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>

    <button type="submit" className="submit-btn">
  Save Resume
</button>
  </form>
</div>
);
}

export default AddResume;
