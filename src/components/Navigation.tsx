export function Navigation({ postQuestion }: any) {
  return (
    <div className="nav">
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <div className="login-container">
          <button>Log in</button>
        </div>
      </div>
    </div>
  );
}
