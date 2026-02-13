import { FaBlog, FaHome, FaPlusSquare, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { SiPubg } from "react-icons/si";

const Navbar = ({ onLogout }) => {
  // Get user email from localStorage to display
  const loginData = JSON.parse(localStorage.getItem("loginData") || "{}");
  const userName = loginData?.email?.split("@")[0] || "User";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <SiPubg className="logo-icon" />
          <span className="logo-text">Pubg</span>
        </div>

        <div className="navbar-links">
          <NavLink to="/dashboard" className="nav-item">
            <FaHome className="nav-icon" /> Home
          </NavLink>

          <NavLink to="/create-post" className="nav-item">
            <FaPlusSquare className="nav-icon" /> Create Post
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