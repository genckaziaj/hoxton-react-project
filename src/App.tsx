import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { ForumHeader } from "./components/ForumHeader";
import { Question } from "./components/Question";
import { QuestionItem, User } from "./types";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    fetch("http://localhost:3001/questions")
      .then((resp) => resp.json())
      .then((questionsFromServer) => {
        setQuestions(questionsFromServer);
      });
  }, []);

  function postQuestion(titleQuestion: string, content: string) {
    let newQuestion = {
      titleQuestion: titleQuestion,
      content: content,
    };

    console.log(newQuestion);

    fetch("http://localhost:3001/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    })
      .then((resp) => resp.json())
      .then((questionFromServer) => {
        setQuestions([...questions, questionFromServer]);
      });
  }

  return (
    <div className="App">
      <Navigation />
      <Question postQuestion={postQuestion} />
      <div className="forum-wrapper">
        <div className="categories">
          <ForumHeader />
          {questions.map((question) => (
            <div key={question.id} className="content">
              <div className="topic-content">
                <div className="tc-description">
                  <div className="d-title">{question.titleQuestion}</div>
                  <div className="d-description">
                    <p>{question.content}</p>
                  </div>
                </div>
                <div className="tc-topic">{question.userId}</div>
                <div className="tc-post">{question.answers}</div>
                <div className="tc-l-post">
                  <div className="lp-user">by {question.answerUser}</div>
                  <div className="lp-date">{question.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
