import { FaBlog, FaHome, FaPlusSquare, FaSignOutAlt  } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FcScatterPlot } from "react-icons/fc";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  // FIXED: Handle loginData safely
  const loginData = JSON.parse(localStorage.getItem("loginData") || "{}");

  // FIXED: Handle authData safely - ensure it's an array
  let allUsers = [];
  try {
    const storedAuth = localStorage.getItem("authData");
    if (storedAuth) {
      const parsed = JSON.parse(storedAuth);
      allUsers = Array.isArray(parsed) ? parsed : [];
    }
  } catch (error) {
    console.error("Error parsing authData:", error);
    allUsers = [];
  }

  // FIXED: Safe check for find method
  const currentUser = loginData?.email && Array.isArray(allUsers)
    ? allUsers.find((user) => user && user.email === loginData.email)
    : null;
    
  const userName = currentUser?.username || loginData?.email?.split("@")[0] || "User";

  const handleCreatePostClick = (e) => {
    e.preventDefault();
    navigate("/create-post");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate("/dashboard")}>
          <FaBlog className="logo-icon" />
          <span className="logo-text">BlogPost</span>
        </div>

        <div className="navbar-links">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "navbar-item active" : "navbar-item"
            }
          >
            <FaHome className="nav-icon" /> Home
          </NavLink>

          <NavLink
            to="/create-post"
            className={({ isActive }) =>
              isActive ? "navbar-item active" : "navbar-item"
            }
            onClick={handleCreatePostClick}
          >
            <FaPlusSquare className="nav-icon" /> Create Post
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive ? "navbar-item active" : "navbar-item"
            }
            onClick={handleCreatePostClick}
          >
            <FcScatterPlot  className="nav-icon" /> Analytics
          </NavLink>
        </div>

        <div className="navbar-actions">
          <span className="user-name">Hi, {userName}</span>
          <button className="logout-btn" onClick={onLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;