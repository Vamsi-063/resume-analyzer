import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favoritesSlice";

function Favorites() {
  const favorites = useSelector(
    (state) => state.favorites.items
  );

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div className="resumes-container">
      <h2 className="favorites-title">⭐Favorite Resumes</h2>

      {favorites.length === 0 ? (
        <p className="empty-favorites">No Favorites Added</p>
      ) : (
        favorites.map((resume) => (
          <div key={resume.id} className="favorite-card">
            <h3>{resume.name}</h3>

            <p>📧 {resume.email}</p>

            <p>💼 {resume.experience}</p>

            <p>⭐ ATS Score: {resume.score}%</p>

            <button className="remove-btn"onClick={() => handleRemove(resume.id)}>Remove Favorite</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Favorites;