import { User } from "../types";
import { Link } from "react-router-dom";

type Props = {
  signIn: (user: User) => void;
};

export function LogIn({ signIn }: Props) {
  function handleSubmit(event: any) {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;

    fetch(`http://localhost:3001/users/${email}`)
      .then((resp) => resp.json())
      .then((user) => {
        if (user.password === password) {
          signIn(user);
        } else {
          alert("Your email/password id invalid.");
        }
      });
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
          <button>login</button>
          <p className="message">
            Not registered? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
