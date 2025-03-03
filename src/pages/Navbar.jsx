import { useNavigate } from "react-router-dom";
import useStore from "../store/store";
import "../styles/nav.css";
export default function NavBar() {
  const navigate = useNavigate();
  const { username, isloggedIn, toggleLoggedIn } = useStore();
  return (
    <div className="container">
      <div>
        <ul>
          <li onClick={() => navigate("/marks-project/about")}>About</li>
          {!isloggedIn && (
            <li onClick={() => navigate("/marks-project")}>Login</li>
          )}
          {isloggedIn && <li>{username}</li>}
        </ul>
      </div>
      <div className="sign-btn">
        {isloggedIn && (
          <button
            onClick={() => {
              toggleLoggedIn();
              window.location.reload();
              navigate("/marks-project");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
