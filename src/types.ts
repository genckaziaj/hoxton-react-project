export type QuestionItem = {
  id: number;
  titleQuestion: string;
  content: string;
  userId: number;
  answers: number;
  answerUser: string;
  date: null;
};

export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
};
