import Head from "next/head";
import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Navbar = (open: boolean) => {

  if (open) {
    return (
      <div className="flex flex-col gap-2">
        <Link href={'#home'}>Home</Link>
        <Link href={'#features'}>Features</Link>
        <Link href={'#sumaversity'}>Sumaversity</Link>
        <Link href={'#toolkit'}>Toolkit</Link>
        <Link href={'#investing'}>Investing</Link>
        <Link href={'#about'}>About us</Link>
        <Link href={'#press'}>Press</Link>
        <Link href={'#blog'}>Blog</Link>
        <Link href={'#newsletter'}>NEWSLETTER</Link>
        <Link href={'#footer'}>footer</Link>

      </div>
    )
  }

  return (
    <div>

    </div>
  )
}

const Homepage = () => {
  const toolkit: { id: number; title: string; image: string }[] = [
    {
      id: 1,
      title: "Saving juntos",
      image: "",
    },
    {
      id: 2,
      title: "Goooal! Juntos",
      image: "",
    },
    {
      id: 3,
      title: "Renta or homeowner",
      image: "",
    },
    {
      id: 4,
      title: "Grow your ahorros",
      image: "",
    },
    {
      id: 5,
      title: "Paga tu credit card",
      image: "Freelance or self-empleado?",
    },
    {
      id: 6,
      title: "More coming soon",
      image: "",
    },
  ];

  const footerLinks: { id: number; text: string; url: string }[] = [
    {
      id: 1,
      text: "Rent or homeowner?",
      url: "/",
    },
    {
      id: 2,
      text: "Grow your dinero",
      url: "/",
    },
    {
      id: 3,
      text: "Pay your credit card",
      url: "/",
    },
    {
      id: 4,
      text: "Freelance or self-employed",
      url: "/",
    },
    {
      id: 5,
      text: "More coming soon...",
      url: "/",
    },
  ];

  const blogPosts: { id: number; title: string; description: string }[] = [
    {
      id: 1,
      title: "post 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum, molestias perspiciatis aspernatur eveniet accusantium nostrum consequatur, vel libero facilis, nulla fuga? Nulla amet quaerat ipsa non distinctio, quasi culpa!",
    },
    {
      id: 2,
      title: "post 2",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto odit beatae veniam. Recusandae, harum ipsa similique necessitatibus alias, labore accusantium corporis tenetur exercitationem architecto vero eligendi blanditiis! Culpa, dolor labore!",
    },
    {
      id: 3,
      title: "post 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores repudiandae voluptates incidunt consequatur at mollitia explicabo suscipit dolor? Porro, magnam quia veniam atque aperiam quidem amet nisi quod ullam sapiente.",
    },
  ];

  return (
    <>
      <Head>
        <title>Suma Wealth</title>
      </Head>
      <div
        className="flex min-h-screen flex-col gap-6
      bg-well-red-500
      p-6 
      md:py-12 
      md:px-48
      lg:py-16 
      lg:px-72
      xl:px-96 xl:py-24
      "
      >
        <header>
          <h1 className="text-2xl font-bold text-white">SUMA</h1>
        </header>
        
        <main className=" text-white">
          <h2 className="text-5xl font-black md:text-4xl lg:text-4xl ">
            WE'RE MAKING FINANCIAL INCLUSION FUN, ACCESSIBLE AND SIMPLE.
          </h2>
          <p>
            SUMA Wealth is the leading financial technology company devoted to
            increasing prosperity, opportunity, and financial inclusion for
            young, U.S. Latinos.
          </p>
        </main>

        <div className="flex flex-col gap-2">
          <Link
            href={"/"}
            passHref
            className="flex w-2/3 items-center justify-center bg-white px-8 py-2 font-bold text-well-red-500"
          >
            Download the app
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-6 min-h-screen bg-white text-well-red-500 p-6 lg:px-96 lg:py-24">
        <header>
          <h2 className="text-4xl font-black">Product features</h2>
          <p>Here we could see the apps features at a glance</p>
        </header>

        <div className="flex-1 border-2 rounded-md flex justify-center items-center p-4">
          <p>We could place a phone image with the ojective of showing multiple screens directly pulled from the app</p>
        </div>
      </div>

      <div className="min-h-screen bg-well-red-500 text-white p-6 lg:px-96 lg:py-24">
        <header>
          <h2 className="text-4xl font-black">Sumaversity</h2>
          <p>Here we can place a couple of sample videos maybe, along with a link to go into the sumaversity route.</p>
        </header>

        
      </div>

      <div className="min-h-screen bg-white p-6 lg:px-96 lg:py-24">
        <header>
          <h2 className="text-4xl font-black">DINERO TOOLKIT</h2>
          <p>We have the tools you need to take charge of your finances. </p>
        </header>

        <div className="mt-12 grid grid-cols-2 gap-2">
          {toolkit.map((tool) => (
            <div key={tool.id} className="border-main flex items-center justify-center border-2 py-6">
              <h2>{tool.title}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-screen bg-white text-well-red-500 p-6 lg:px-96 lg:py-24">
        <header>
          <h2 className="text-4xl font-black">Investing</h2>
          <p>We have the tools you need to take charge of your finances. </p>
        </header>

        <div className="mt-12 grid grid-cols-2 gap-2">
          {toolkit.map((tool) => (
            <div key={tool.id} className="border-main flex items-center justify-center border-2 py-6">
              <h2>{tool.title}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-screen bg-well-red-500 text-white p-6 lg:px-96 lg:py-24">
        <header>
          <h2 className="text-4xl font-black"></h2>
          <p>We have the tools you need to take charge of your finances. </p>
        </header>

        
      </div>

      <div className="min-h-screen bg-white p-6 lg:px-96 lg:py-24">
        <header>
          <h2 className="text-4xl font-black">DINERO TOOLKIT</h2>
          <p>We have the tools you need to take charge of your finances. </p>
        </header>

        <div className="mt-12 grid grid-cols-2 gap-2">
          {toolkit.map((tool) => (
            <div key={tool.id} className="border-main flex items-center justify-center border-2 py-6">
              <h2>{tool.title}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-bg-well-red-500 min-h-screen bg-well-red-500 p-6 text-white lg:px-96 lg:py-24">
        <h2 className="text-4xl font-black">WHO ARE WE</h2>
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

      <div className=" min-h-screen  p-6 lg:px-96 lg:py-24">
        <h2 className="text-4xl font-black">PRESS</h2>

        <div className="flex gap-12">
          <p>logo 1</p>
          <p>logo 2</p>
          <p>logo 3</p>
          <p>logo 4</p>
        </div>
      </div>

      <div className="min-h-[50vh] bg-well-red-500 p-6 text-white lg:px-96 lg:py-24">
        <header>
          <h2 className="text-4xl font-black">BLOG & SOCIALS</h2>
          <p>We can include a couple blog posts here.</p>
        </header>

        <div className="py-6">
          {blogPosts.map((post) => (
            <div key={post.id}>
              <div className="h-48 rounded-md bg-white"></div>
              <div className="py-4">
                <h3 className="text-2xl font-black uppercase">{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </div>
          ))}
        </div>

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

      <div className="min-h-[50vh] bg-white p-6 lg:px-96 lg:py-24">
        <header>
          <h2 className="text-4xl font-black">SUBSCRIBE TO OUR NEWSLETTER</h2>
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
              className="border-main border-b-2 pb-2"
            />
          </form>
        </div>
      </div>

      <footer className="min-h-screen bg-well-red-500 p-6 text-white lg:px-96 lg:py-24">
        <header>
          <h2 className="text-4xl font-black">
            THANK YOU FOR CHECKING US OUT!
          </h2>
        </header>

        <ul>
          {footerLinks.map((item) => (
            <li key={item.id}>
              <Link href={item.url} passHref>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
};

export default Homepage;
