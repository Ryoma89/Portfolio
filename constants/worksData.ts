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
    deploy: "https://household-account-book-three.vercel.app/",
    name: "MoneyMate",
    image: "/household-account.png",
  },
  {
    github: "https://github.com/Ryoma89/Household-Account-Book.git",
    deploy: "https://household-account-book-three.vercel.app/",
    name: "BattleQuiz",
    image: "/household-account.png",
  },
  {
    github: "https://github.com/Ryoma89/Household-Account-Book.git",
    deploy: "https://household-account-book-three.vercel.app/",
    name: "Event",
    image: "/household-account.png",
  },
];
