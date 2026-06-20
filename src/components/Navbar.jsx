import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged Out Successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h1>SkillScan</h1>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/favorites">Favorites</Link>
        </li>

        {isLoggedIn ? (
          <li>
            <button
              onClick={handleLogout}
              className="logout-btn"
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;