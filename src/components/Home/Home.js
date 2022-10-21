import React, { useEffect, useState } from "react";

const Home = () => {
  const [randomFood, setRandomFood] = useState({});
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRandomFood(data.meals));
  }, []);
  console.log(randomFood[0]);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div className="lg:max-w-sm lg:w-6/12 md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={randomFood[0]?.strMealThumb}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
              {randomFood[0]?.strMeal}
            </h1>
            <p className="mb-8 leading-relaxed">
              Category: {randomFood[0]?.strCategory}
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
