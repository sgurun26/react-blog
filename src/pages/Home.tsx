import React from "react";

const Home = () => {
  return (
    <section className="py-28 relative bg-[#1e72bd]">
      <div className="relative z-10 mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-3xl md:mx-auto">
          <h1 className="text-white text-3xl font-extrabold sm:text-4xl">
            Exploring Maine Coon Cats: Graceful Giants of Feline Majesty
          </h1>
          <p className="text-[rgba(255,255,255,0.8)] text-[20px] my-[2rem]">
            Did you know that the average American household spends around $770
            per year on their pets?1 Of course, the majority of that is likely
            spent on necessities, such as food and vet care.
          </p>
        </div>
        <div className="mt-4">
          <a
            href="/"
            className="inline-block py-4 px-8 text-gray-800 text-[20px] font-[600] bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="absolute top-0 w-full h-full"></div>
    </section>
  );
};

export default Home;
