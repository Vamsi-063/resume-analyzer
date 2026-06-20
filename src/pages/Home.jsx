import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>🚀 Resume Analyzer</h1>

        <p>
          Upload, Manage and Analyze resumes easily.
          Find the best candidates with smart scoring.
        </p>

        <div className="hero-buttons">
          <Link to="/resumes" className="view-btn">
            View Resumes
          </Link>

          <Link to="/add-resume" className="add-btn">
            Add Resume
          </Link>

          <Link to="/upload-resume" className="upload-btn">
            Upload Resume
          </Link>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>📄 Resume Management</h3>
          <p>Add, edit and organize resumes easily.</p>
        </div>

        <div className="feature-card">
          <h3>📊 Smart Scoring</h3>
          <p>Evaluate candidates based on resume scores.</p>
        </div>

        <div className="feature-card">
          <h3>🎯 Easy Filtering</h3>
          <p>Search and filter resumes instantly.</p>
        </div>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h2>25+</h2>
          <p>Resumes Added</p>
        </div>

        <div className="stat-card">
          <h2>15</h2>
          <p>Selected Candidates</p>
        </div>

        <div className="stat-card">
          <h2>8</h2>
          <p>Pending Reviews</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>
      </div>
    </div>
  );
}

export default Home;