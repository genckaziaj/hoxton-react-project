import { useEffect, useState } from "react";
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./pages/Navigation";
import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { UserProfile } from "./pages/UserProfile";
import { QuestionForm } from "./pages/QuestionForm";
import { Answer } from "./pages/Answer";
import { QuestionItem, User } from "./types";
import { AboutPage } from "./pages/AboutPage";
import { PageNotFound } from "./pages/PageNotFound";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [user, setUser] = useState<null | User>(null);

  const navigate = useNavigate();

  function signIn(user: User) {
    localStorage.id = user.id;
    setUser(user);
    navigate("/profile");
  }

  function signOut() {
    localStorage.removeItem("id");
    setUser(null);
  }

  function postQuestion(
    titleQuestion: string,
    content: string,
    userId: string
  ) {
    let newQuestion = {
      titleQuestion: titleQuestion,
      content: content,
      userId: userId,
    };

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

  useEffect(() => {
    const userId = localStorage.id;
    fetch("http://localhost:3001/questions")
      .then((resp) => resp.json())
      .then((questionsFromServer) => {
        setQuestions(questionsFromServer);
        if (userId) setUser(userId);
      });
  }, []);

  return (
    <div className="App">
      <Navigation signOut={signOut} user={user} />
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={<Home questions={questions} user={user} />}
        />
        <Route path="/login" element={<LogIn signIn={signIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserProfile user={user} />} />
        <Route
          path="/question"
          element={<QuestionForm postQuestion={postQuestion} />}
        />
        <Route path="/question/:questionId" element={<Answer />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
