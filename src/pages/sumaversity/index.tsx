import Link from "next/link";
import React from "react";
import { BsBookFill, BsFillCameraVideoFill } from "react-icons/bs";
import { MdSchool } from "react-icons/md";

type Props = {};

const categories: {
  id: number;
  icon: JSX.Element;
  text: string;
  link: string;
}[] = [
  {
    id: 1,
    icon: <BsBookFill />,
    text: "Articles",
    link: "/sumaversity/articles",
  },
  {
    id: 2,
    icon: <BsFillCameraVideoFill />,
    text: "Videos",
    link: "/sumaversity/videos",
  },
  {
    id: 3,
    icon: <MdSchool />,
    text: "School",
    link: "/sumavesity/school",
  },
];

const articles: { id: number; title: string; pic: string; content: string }[] =
  [
    {
      id: 1,
      title: "Learning to save",
      pic: "article1.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deleniti praesentium dignissimos maxime fugiat non voluptatibus aliquam, nesciunt quam eveniet quae, harum mollitia ab facilis asperiores nisi doloribus. Eveniet, quisquam.",
    },
  ];

const SumaversityPage = (props: Props) => {
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
        <h2 className="text-2xl font-bold ">Sumaversity</h2>
        <p>
          Here you can find resouces to learn how to make your money grow. Click
          on the different categories you would like to know or scroll down!
        </p>
      </header>

      <div className="grid grid-cols-2 gap-2">
        {categories.map((c) => (
          <Link
            href={c.link}
            key={c.id}
            className={`${c.id == 3 ? "col-span-2" : ""}`}
          >
            <div
              className={`flex flex-col items-center gap-2 rounded-md border border-well-red-300 p-4 text-center`}
            >
              {c.icon}
              <p>{c.text}</p>
            </div>
          </Link>
        ))}
      </div>

      <div>
        {articles.map((a) => (
          <div key={a.id} className={'flex flex-col gap-4'}>
            <h3 className="text-2xl font-semibold">{a.title}</h3>
            <div className="h-48 bg-well-red-400 rounded-md"></div>
            <p>{a.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SumaversityPage;
