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
      <section className="max-w-8xl mx-auto container bg-white pt-16">
        <div role="contentinfo" className="flex items-center flex-col px-4">
          <h2 className="focus:outline-none border-b-2 text-2xl pb-10 mb-20 lg:pb-16 lg:mb-28 lg:text-4xl font-extrabold text-center leading-8 text-amber-600 lg:w-5/12 md:w-9/12 pt-4">
            Présentation détaillée du sujet de stage
          </h2>
        </div>
        <div className="lg:flex lg:flex-row">
          <div className="pr-5">
            <h3 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
              Prise de contact
            </h3>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              Le 9 mars 2022, j’ai visité le site de la French Tech de Clermont
              Ferrand et c’est ici que j’ai découvert l’entreprise. J’ai donc
              envoyé ma candidature pour le stage et nous avons convenu un
              entretien pour le lundi 14 mars. À la suite de cet entretien,
              l’entreprise a répondu favorablement à ma candidature. Mon stage a
              ainsi pu débuter le 28 mars.{" "}
            </p>
          </div>
          <div className="lg:px-5 lg:border-l-2">
            <h3 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
              L'équipe
            </h3>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              L’entreprise est constituée de 12 personnes. L’équipe de
              développement est composée du responsable de service (Jérémy
              Paris, mon tuteur de stage), d’un ingénieur IT (Ozcan Sevik), et
              de trois développeurs full stack (Benjamin Caure, Roméo Brilland
              et Mao De Matos). Je serai intégrée à cette équipe.
            </p>
          </div>
          <div className="lg:pl-5 lg:border-l-2">
            <h3 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
              Sujet du stage
            </h3>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              Je serais associée à différents projets (internes ou à la
              prestation de service), pour la participation à la conception,
              l’architecture, l’analyse et le développement d’applications web
              et mobile. J'utiliserais de technologies de développement modernes
              tels que la stack MERN (Mongo Express React Node) ou PHP. Mon
              projet principal sera l'amélioration d'une application métier en
              React.js pour le groupe LGMN.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
