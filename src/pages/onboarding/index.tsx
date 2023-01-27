import React, { useState } from "react";

type Props = {};

interface Option {
  id: number;
  value: number;
  text: string;
}
interface QuizQuestion {
  id: number;
  title: string;
  options: {
    one: Option;
    two: Option;
    three: Option;
  };
}

const Quiz: QuizQuestion[] = [
  {
    id: 1,
    title: "Question 1",
    options: {
      one: {
        id: 1,
        value: 1,
        text: "Answer 1 with value 1",
      },
      two: {
        id: 2,
        value: 2,
        text: "Answer 2 with value 2",
      },
      three: {
        id: 3,
        value: 3,
        text: "Answer 3 with value 3",
      },
    },
  },
  {
    id: 2,
    title: "Question 2",
    options: {
      one: {
        id: 1,
        value: 1,
        text: "Answer 1 with value 1",
      },
      two: {
        id: 2,
        value: 2,
        text: "Answer 2 with value 2",
      },
      three: {
        id: 3,
        value: 3,
        text: "Answer 3 with value 3",
      },
    },
  },
  {
    id: 3,
    title: "Question 3",
    options: {
      one: {
        id: 1,
        value: 1,
        text: "Answer 1 with value 1",
      },
      two: {
        id: 2,
        value: 2,
        text: "Answer 2 with value 2",
      },
      three: {
        id: 3,
        value: 3,
        text: "Answer 3 with value 3",
      },
    },
  },
  {
    id: 4,
    title: "Question 4",
    options: {
      one: {
        id: 1,
        value: 1,
        text: "Answer 1 with value 1",
      },
      two: {
        id: 2,
        value: 2,
        text: "Answer 2 with value 2",
      },
      three: {
        id: 3,
        value: 3,
        text: "Answer 3 with value 3",
      },
    },
  },
];

const OnboardingPage = () => {
  const [step, setStep] = useState<number>(1);
  const [score, setScore] = useState<number>(0);


  const done = () => {

  }
  return (
    <div
      className="flex min-h-screen flex-col gap-6
      bg-well-red-500
      p-6
      text-white 
      md:py-12 
      md:px-48
      lg:py-16 
      lg:px-72
      xl:px-96 xl:py-24
      "
    >
      <header>
        <h2 className="text-2xl font-bold ">Quiz</h2>
      </header>

      <button onClick={() => done()} >
        laksmlbkm
      </button>
    </div>
  );
};

export default OnboardingPage;
