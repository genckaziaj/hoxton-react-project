import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AskQuestion } from "./AskQuestion";
import { ForumHeader } from "./ForumHeader";
import { QuestionItem, User } from "../types";

type Props = {
  user: User | null;
};

export function UserProfile({ user }: Props) {
  const [questionsUser, setQuestionsUser] = useState<QuestionItem[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.id;
    if (userId) {
      fetch(`http://localhost:3001/users/${userId}/questions`)
        .then((resp) => resp.json())
        .then((questions) => {
          setQuestionsUser(questions);
        });
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <AskQuestion user={user} />
      <div className="forum-wrapper">
        <div className="categories">
          <ForumHeader />
          {questionsUser.map((question) => (
            <div key={question.id} className="content">
              <div className="topic-content">
                <div className="tc-description">
                  <div className="d-title">{question.titleQuestion}</div>
                  <Link to={`/question/${question.id}`}>
                    <div className="d-description">
                      <p>{question.content}</p>
                    </div>
                  </Link>
                </div>
                <div className="tc-topic">{user?.username}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
