import { Link } from "react-router-dom";
import { User } from "../types";

type Props = {
  signOut: () => void;
  user: User | null;
};

export function Navigation({ signOut, user }: Props) {
  return (
    <div>
      <div className="nav">
        <div className="topnav">
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
          <a>Contact</a>
          {user === null ? (
            <div className="login-container">
              <Link to="/login">
                <button className="button">Log in</button>
              </Link>
            </div>
          ) : (
            <div className="login-container">
              <Link to="/login">
                <button className="button" onClick={signOut}>
                  Log out
                </button>
              </Link>
            </div>
          )}
          {user !== null ? (
            <div className="login-container">
              <div className="username">{user.username}</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
