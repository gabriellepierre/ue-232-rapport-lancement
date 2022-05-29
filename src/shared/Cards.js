import React from "react";
import { Link } from "./Link";

export const Cards = () => {
  return (
    <>
      <div className="md:mx-auto md:container lg:px-20">
        <div className="pt-5 md:pt-28">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
              <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <div className="py-2 text-color">
                  <h1 className=" md:leading-snug f-f-l text-3xl lg:text-4xl font-bold text-gray-800">
                    Rapport de lancement
                  </h1>
                  <div className="text-lg text-gray-600 lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                    <p>Dans ce rapport, vous trouverez :</p>
                    <ul className="list-disc pl-10">
                      <li>
                        Une présentation détaillée du sujet/projet de stage :
                        structure d'accueil, contexte, équipe, etc.
                      </li>
                      <li>
                        Le détail de mes missions au sein de ce projet et
                        planification prévisionnelle de mes actions
                      </li>
                      <li>L'analyse du besoin à l'origine du projet</li>
                      <li>Et une veille technologique.</li>
                    </ul>
                  </div>

                  <Link to="/lancement">
                    <div className="flex items-center cursor-pointer md:pb-0">
                      <h3 className="f-f-r text-lg lg:text-2xl font-semibold hover:underline text-amber-600 hover:text-gray-800">
                        Lire le rapport
                      </h3>
                      <div className="pl-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                            fill="#D53F8C"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  className="absolute w-full h-full object-cover object-center rounded-md"
                  src="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_960_720.jpg"
                  alt="Brainstorming"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <div className="mx-auto">
            <div className="flex flex-wrap flex-row-reverse items-center">
              <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                <div className="py-2 text-color">
                  <h1 className="md:leading-snug f-f-l text-3xl lg:text-4xl font-bold text-gray-800">
                    Rapport final
                  </h1>
                  <div className="text-lg text-gray-600 lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                    <p>Dans ce rapport, vous trouverez :</p>
                    <ul className="list-disc pl-10">
                      <li>
                        Une description du projet et des missions réalisées,
                      </li>
                      <li>
                        Un planning du travail réalisé dans l'organisme
                        d'accueil,{" "}
                      </li>
                      <li>L'analyse du travail réalisé, </li>
                      <li>Mon bilan personnel</li>
                    </ul>
                  </div>
                  <Link to="/final">
                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                      <h3 className="f-f-r text-lg lg:text-2xl font-semibold hover:underline text-amber-600 hover:text-gray-800">
                        Lire le rapport
                      </h3>
                      <div className="pl-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                            fill="#D53F8C"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  className="absolute w-full h-full object-cover object-center rounded-md"
                  src="https://cdn.pixabay.com/photo/2017/02/05/20/07/dresden-2041065_960_720.jpg"
                  alt="Brainstorming"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
