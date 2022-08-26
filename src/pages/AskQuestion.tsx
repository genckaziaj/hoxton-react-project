import { Link } from "react-router-dom";
import { User } from "../types";

type Props = {
  user: User | null;
};

export function AskQuestion({ user }: Props) {
  return (
    <div className="question ask">
      <Link to={user ? "/question" : "/login"}>
        <button className="button">Ask a question</button>
      </Link>
    </div>
  );
}
