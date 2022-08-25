export function Question({ postQuestion }: any) {
  return (
    <div>
      <div className="question ask">
        <button>Ask Question</button>
      </div>

      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name" autoComplete="off" />
            <input type="password" placeholder="password" autoComplete="off" />
            <input type="text" placeholder="email address" autoComplete="off" />
            <button>create</button>
            <p className="message">
              Already registered? <a href="#">Sign In</a>
            </p>
          </form>
          <form className="login-form">
            <input type="text" placeholder="username" autoComplete="off" />
            <input type="password" placeholder="password" autoComplete="off" />
            <button>login</button>
            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>

      <div className="question">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            postQuestion(event.target.title.value, event.target.content.value);
            event.target.reset();
          }}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            autoComplete="off"
          />
          <label htmlFor="content">Body</label>
          <textarea
            id="content"
            name="content"
            placeholder="Information someone would need to answer your question"
            autoComplete="off"
          ></textarea>
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="e.g. (iphone android sql)"
            autoComplete="off"
          />
          <button>Post your question</button>
        </form>
      </div>
    </div>
  );
}
