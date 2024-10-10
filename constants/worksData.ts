// data/worksData.ts

type Work = {
  github: string;
  deploy: string;
  name: string;
  image: string;
};

export const worksData: Work[] = [
  {
    github: "https://github.com/Ryoma89/Household-Account-Book.git",
    deploy: "https://household-account-book-two.vercel.app/",
    name: "MoneyMate",
    image: "/household-account.png",
  },
  {
    github: "https://github.com/Ryoma89/EventFlow.git",
    deploy: "event-flow-frontend-wine.vercel.app",
    name: "EventFlow",
    image: "/eventFlow.png",
  },
  {
    github: "https://github.com/Ryoma89/BattleQuiz.git",
    deploy: "https://battle-quiz-beryl.vercel.app/",
    name: "Battle Quiz",
    image: "/battle-quiz.png",
  },
];
