import { AskQuestion } from "./AskQuestion";
import { ForumHeader } from "./ForumHeader";
import { QuestionItem, User } from "../types";
import { Link } from "react-router-dom";

type Props = {
  questions: QuestionItem[];
  user: User | null;
};

export function Home({ questions, user }: Props) {
  return (
    <div>
      <AskQuestion user={user} />
      <div className="forum-wrapper">
        <div className="categories">
          <ForumHeader />
          {questions.map((question) => (
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

                <div className="tc-topic">{question.userId}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
