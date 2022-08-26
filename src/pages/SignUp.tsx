import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(event: any) {
    event.preventDefault();
    let newUser = {
      id: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((resp) => resp.json())
      .then((userFromServer) => {
        console.log(userFromServer);
      });

    navigate("/login");
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            autoComplete="off"
          />
          <input
            type="text"
            name="username"
            placeholder="username"
            autoComplete="off"
          />
          <button>Sign up</button>
          <p className="message">
            Already registered? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
