import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function Answer() {
  const [answers, setAnswers] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  function handleSubmit(event: any) {
    event.preventDefault();
    const userId = localStorage.id;
    let newAnswer = {
      questionId: params.questionId,
      content: event.target.contentAnswer.value,
      userId: userId,
    };

    if (userId) {
      fetch("http://localhost:3001/answers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAnswer),
      })
        .then((resp) => resp.json())
        .then((answerFromServer) => {
          setAnswers([...answers, answerFromServer]);
        });
    } else {
      navigate("/login");
    }

    event.target.reset();
  }

  useEffect(() => {
    fetch(`http://localhost:3001/questions/${params.questionId}/answers`)
      .then((resp) => resp.json())
      .then((answersFromServer) => setAnswers(answersFromServer));
  }, []);

  return (
    <div>
      {answers.map((answer: any) => (
        <div key={answer.id} className="question ask">
          {answer.content}
        </div>
      ))}
      <div className="question">
        <form onSubmit={handleSubmit}>
          <textarea
            id="contentAnswer"
            name="contentAnswer"
            autoComplete="off"
          ></textarea>
          <button>Post your answer</button>
        </form>
      </div>
    </div>
  );
}
