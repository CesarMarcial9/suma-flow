import React from "react";

type Props = {};

const AboutUsPage = (props: Props) => {
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
        <h2 className="text-2xl font-bold">About us page</h2>
      </header>

      <div className="h-48 bg-well-red-400 rounded-md"></div>

      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam hic magnam blanditiis voluptatem vel neque ea quia voluptatum! Accusamus velit eos placeat quisquam eaque, magnam quod illo optio debitis atque.</p>
      </div>

      <div className="h-24 bg-well-red-400 rounded-md">

      </div>

      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, illum repellat consequuntur maxime quam dolores dignissimos hic tempore perspiciatis quia eaque impedit rem? Cupiditate maiores eius ducimus optio reiciendis eum!</p>
      </div>
    </div>
  );
};

export default AboutUsPage;
