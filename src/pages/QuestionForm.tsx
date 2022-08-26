import { useNavigate } from "react-router-dom";

export function QuestionForm({ postQuestion }: any) {
  const navigate = useNavigate();

  function handleSubmit(event: any) {
    event.preventDefault();
    const userId = localStorage.id;
    postQuestion(event.target.title.value, event.target.content.value, userId);
    event.target.reset();
    navigate("/profile");
  }

  return (
    <div className="question">
      <form onSubmit={handleSubmit}>
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
        <button>Post your question</button>
      </form>
    </div>
  );
}
