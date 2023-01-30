import React, { useState } from "react";
import { BsQuestionSquare } from "react-icons/bs";

type Props = {};

interface Option {
  id: number;
  value: number;
  text: string;
}
interface QuizQuestion {
  id: number;
  title: string;
  options: Option[];
}

const Quiz: QuizQuestion[] = [
  {
    id: 1,
    title: "Question 1",
    options: [
      {
        id: 1,
        value: 1,
        text: "Answer 1",
      },
      {
        id: 2,
        value: 2,
        text: "Answer 2",
      },
      {
        id: 3,
        value: 3,
        text: "Answer 3",
      },
    ],
  },
  {
    id: 2,
    title: "Question 2",
    options: [
      {
        id: 1,
        value: 1,
        text: "Answer 1",
      },
      {
        id: 2,
        value: 2,
        text: "Answer 2",
      },
      {
        id: 3,
        value: 3,
        text: "Answer 3",
      },
    ],
  },
  {
    id: 3,
    title: "Question 3",
    options: [
      {
        id: 1,
        value: 1,
        text: "Answer 1",
      },
      {
        id: 2,
        value: 2,
        text: "Answer 2",
      },
      {
        id: 3,
        value: 3,
        text: "Answer 3",
      },
    ],
  },
  {
    id: 4,
    title: "Question 4",
    options: [
      {
        id: 1,
        value: 1,
        text: "Answer 1",
      },
      {
        id: 2,
        value: 2,
        text: "Answer 2",
      },
      {
        id: 3,
        value: 3,
        text: "Answer 3",
      },
    ],
  },
];

const OnboardingPage = () => {
  const [step, setStep] = useState<number>(1);
  const [score, setScore] = useState<number>(0);

  const done = () => {};
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

      <div className={"flex flex-col gap-4"}>
        <h3 className={" font-semibold"}>Question 1</h3>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-3xl">Lorem ipsum dolor sit amet?</h3>

          <div className="flex flex-col gap-2">
            <button className="rounded-md border-2 border-well-red-200 py-3">
              Answer 1
            </button>
            <button className="rounded-md border-2 border-well-red-200 py-3">
              Answer 2
            </button>
            <button className="rounded-md border-2 border-well-red-200 py-3">
              Answer 3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
