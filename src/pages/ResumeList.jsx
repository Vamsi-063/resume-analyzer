import { useEffect, useState } from "react";
import api from "../services/api";

function ResumeList() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const res = await api.get("/resumes");
      setResumes(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Resume List</h2>

      <div className="row">
        {resumes.map((resume) => (
          <div className="col-md-4 mb-3" key={resume.id}>
            <div className="card p-3 shadow">
              <h4>{resume.name}</h4>
              <p><strong>Email:</strong> {resume.email}</p>
              <p><strong>Experience:</strong> {resume.experience}</p>
              <p><strong>Education:</strong> {resume.education}</p>
              <p><strong>Score:</strong> {resume.score}</p>
              <p><strong>Status:</strong> {resume.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResumeList;