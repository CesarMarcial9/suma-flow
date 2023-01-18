import Head from "next/head";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Suma Wealth</title>
      </Head>
      <div className="min-h-screen bg-main p-6 lg:px-96 lg:py-24">
        <header>
          <h1 className="text-2xl font-bold text-white">SUMA</h1>
        </header>
        <main className=" text-white">
          <h2 className="text-4xl font-black md:text-4xl lg:text-6xl">
            WE'RE MAKING FINANCIAL INCLUSION FUN, ACCESSIBLE AND SIMPLE.
          </h2>
          <p>
            SUMA Wealth is the leading financial technology company devoted to
            increasing prosperity, opportunity, and financial inclusion for
            young, U.S. Latinos.
          </p>
        </main>
      </div>

      <div className="min-h-screen p-6 text-main lg:px-96 lg:py-24">
        <h2 className="text-6xl font-black">WELCOME TO THE SUMA UNIVERSE</h2>
      </div>

      <div className="min-h-screen bg-main p-6 text-white lg:px-96 lg:py-24">
        <h2 className="text-6xl font-black">WHO ARE WE</h2>
        <div>
          <p>
            Suma is a revolutionary financial inclusion brand that inspires,
            informs and empowers the Latinx community.
          </p>
          <p>
            By creating culturally relevant content, virtual experiences, and
            providing financial tools that demystify and reimagine financial
            inclusion through entertainment, we aim to become the trusted source
            for the Latinx community to help them both overcome current
            financial challenges, and better prepare for a more prosperous
            future.
          </p>
          <p>
            Founded by an experienced team of entrepreneurs, financial
            professionals and socially minded change agents with a track record
            of successfully building iconic brands for Latinx audiences, SUMA
            leverages a deep knowledge of what moves this influential
            demographic.
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-white p-6 text-main lg:px-96 lg:py-24">
        <h2 className="text-6xl font-black">PRESS</h2>

        <div className="flex gap-12">
          <p>logo 1</p>
          <p>logo 1</p>
          <p>logo 1</p>
          <p>logo 1</p>
        </div>
      </div>

      <div className="min-h-[50vh] bg-main p-6 text-white lg:px-96 lg:py-24">
        <header>
          <h2 className="text-2xl font-bold">SOCIALITÉS</h2>
        </header>
        <div>
          <div>
            <div className="flex items-center gap-6">
              <span>Facebook</span>
              <AiFillFacebook />
            </div>
            <div className="flex items-center gap-6">
              <span>Instagram</span>
              <AiFillInstagram />
            </div>
            <div className="flex items-center gap-6">
              <span>Twitter</span>
              <AiFillTwitterCircle />
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[50vh] bg-white p-6 text-main lg:px-96 lg:py-24">
        <header>
          <h2 className="text-2xl font-bold">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p>
            Stay up to date with the latest financial resources and tools for
            Latinos.
          </p>
        </header>

        <div>
          <form action="" className="flex flex-col gap-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              className="border-b-2 border-main pb-2"
            />
          </form>
        </div>
      </div>

      <footer className="min-h-screen bg-main lg:px-96 lg:py-24"></footer>
    </>
  );
};

export default Homepage;
