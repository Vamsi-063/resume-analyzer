import { useEffect, useState } from "react";
import api from "../services/api";
import ResumeCard from "../components/ResumeCard";

function Resumes() {
  const [resumes, setResumes] = useState([]);
  const [search, setSearch] = useState("");
  const [minScore, setMinScore] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetchResumes();
  }, []);

  async function fetchResumes() {
    const response = await api.get("/resumes");
    setResumes(response.data);
  }

 const filteredResumes = resumes.filter(
  (resume) =>
    resume.name
      .toLowerCase()
      .includes(search.toLowerCase()) &&
    Number(resume.score) >= minScore &&
    (statusFilter === "All" ||
      resume.status === statusFilter)
);

  let sortedResumes = [...filteredResumes];

  if (sortBy === "high") {
    sortedResumes.sort(
      (a, b) => b.score - a.score
    );
  }

  if (sortBy === "low") {
    sortedResumes.sort(
      (a, b) => a.score - b.score
    );
  }

  if (sortBy === "az") {
    sortedResumes.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Resume..."
          className="search-input"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="search-input"
          value={minScore}
          onChange={(e) =>
            setMinScore(
              Number(e.target.value)
            )
          }
        >
          <option value={0}>
            All Scores
          </option>
          <option value={60}>
            60+
          </option>
          <option value={70}>
            70+
          </option>
          <option value={80}>
            80+
          </option>
          <option value={90}>
            90+
          </option>
        </select>

        <select
          className="search-input"
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >
          <option value="">
            Sort By
          </option>
          <option value="high">
            Score High-Low
          </option>
          <option value="low">
            Score Low-High
          </option>
          <option value="az">
            Name A-Z
          </option>
        </select>
      </div>

      <div className="resumes-container">
        {sortedResumes.map((resume) => (
          <ResumeCard
            key={resume.id}
            resume={resume}
          />
        ))}
      </div>
    </>
  );
}

export default Resumes;