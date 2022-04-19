// import React from "react";

import { Link } from "../shared/Link";

export const Final = () => {
  return (
    <div style={{ fontFamily: '"Lato", sans-serif' }}>
      <title>Rapport final - UE 232</title>
      <div className="p-20 bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg')]">
        <div className="flex items-center flex-col">
          <h1 className="focus:outline-none pb-20  bg-neutral-200/50 rounded-lg text-5xl lg:text-8xl font-extrabold text-center leading-20 text-white lg:w-5/12 md:w-9/12 pt-4">
            Rapport final
          </h1>
        </div>
      </div>

      <div role="contentinfo" className="flex items-center flex-col p-4">
        <h2 className="focus:outline-none border-b-2 text-2xl pb-10 mb-20 lg:pb-16 lg:mb-28 lg:text-4xl font-extrabold text-center leading-8 text-amber-600 lg:w-5/12 md:w-9/12 pt-4">
          Il n'y a rien ici pour le moment.
        </h2>
      </div>
      <div className="relative flex flex-col justify-center items-center">
        <Link to="/">
          <button className="w-full sm:w-auto text-base leading-4 text-center text-white py-6 px-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-gray-500 ">
            Retourner à l'accueil
          </button>
        </Link>
      </div>
    </div>
  );
};
