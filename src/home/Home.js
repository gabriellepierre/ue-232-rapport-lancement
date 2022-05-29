import { Cards } from "../shared/Cards";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex items-center p-20 bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2015/01/08/18/11/laptops-593296_960_720.jpg')]">
        <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
          <h1 className="text-6xl font-semibold lg:leading-9 text-amber-600 text-center">
            Rapport de stage - Parcours 1
          </h1>
          <p className="text-base leading-normal text-center text-white mt-6">
            Participation à la conception, l’architecture, l’analyse et le
            développement d’applications web et mobile. <br /> J'utiliserai des
            technologies de développement modernes tels que la stack MERN (Mongo
            Express React Node) ou PHP.
          </p>
        </div>
      </div>
      {/* <div className="p-20 bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2015/01/08/18/11/laptops-593296_960_720.jpg')]">
        <div className="flex items-center flex-col">
          <h1 className="focus:outline-none pb-20 bg-neutral-200/50 rounded-lg text-5xl lg:text-8xl font-extrabold text-center leading-20 text-amber-600 lg:w-5/12 md:w-9/12 pt-4">
            Rapport de stage - Parcours 1
          </h1>
        </div>
      </div> */}
      <div className="px-10">
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 h-auto ">
              <img
                className="w-full h-full"
                src="https://th.bing.com/th/id/R.d248425db9e2bc958d24e3019386efd7?rik=ZgJwCbfXaJBu1A&pid=ImgRaw&r=0"
                alt="Becoms"
              />
            </div>
            <div className="w-full lg:w-6/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                L'entreprise Becoms
              </h1>
              <p className="text-lg leading-6 text-gray-600 ">
                BECOMS est un assembleur de technologies. <br /> L’entreprise
                propose 3 services : infrastructure et Cloud, software et web,
                et consulting et sécurité. Concernant le service développement,
                ils sont spécialisés en applications web et mobile, en site web
                et e-commerce, et en Progressive Web App.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b-2 pt-10 flex"></div>
        <Cards />
        <div className="border-b-2 pb-10 flex"></div>
        <div className="w-full lg:w-6/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            L'entreprise Becoms
          </h1>
          <p className="text-lg leading-6 text-gray-600 ">
            BECOMS est un assembleur de technologies. <br /> L’entreprise
            propose 3 services : infrastructure et Cloud, software et web, et
            consulting et sécurité. Concernant le service développement, ils
            sont spécialisés en applications web et mobile, en site web et
            e-commerce, et en Progressive Web App.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
