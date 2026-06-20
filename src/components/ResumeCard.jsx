import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/favoritesSlice";
import api from "../services/api";

function ResumeCard({ resume, fetchResumes }) {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(addFavorite(resume));
    alert("Added To Favorites ⭐");
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (confirmDelete) {
      await api.delete(`/resumes/${resume.id}`);

      alert("Resume Deleted Successfully 🗑️");

      fetchResumes();
    }
  };

  return (
    <div className="card">
      <h2>{resume.name}</h2>

      <p>📧 {resume.email}</p>

      <p>💼 {resume.experience}</p>

      <p>🎓 {resume.education}</p>

      <p>⭐ ATS Score: {resume.score}%</p>

      <p>📌 Status: {resume.status}</p>

      <div className="card-actions">
        <Link
          to={`/resume/${resume.id}`}
          className="details-btn"
        >
          View Details
        </Link>

        <button
          onClick={handleFavorite}
          className="submit-btn"
        >
          ⭐ Add To Favorite
        </button>

        <button
          onClick={handleDelete}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ResumeCard;