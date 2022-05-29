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
              <p className="text-lg leading-6 text-gray-600">
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
        <div className="border-b-2 pt-10 m-20 flex"></div>
        <div className="w-full lg:mx-40 p-5 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800">
            Remerciements
          </h1>
          <p className="text-lg leading-6 text-gray-600 flex flex-wrap">
            Ce stage m'a beaucoup apporté sur le plan professionnel mais aussi
            personnel. C'est pourquoi je tiens à remercier toutes les personnes
            qui m'ont apporté leur aide pendant ce stage.
            <br /> Dans un premier temps, je souhaite remercier mon tuteur
            pédagogique Monsieur Philippe Vignoles, ainsi que toute l'équipe
            pédagogique du DEUST Webmaster et Métiers de l'Internet.
            <br />
            Je voudrais remercier Monsieur Mathieu Paris, le gérant de Becoms,
            pour m'avoir accueillie dans son entreprise et pour avoir pris du
            temps pour m'aiguiller sur un projet en fin de stage.
            <br /> Je remercie tout particulièrement mon tuteur de stage,
            Monsieur Jérémy Paris, repsonsable du service développement. Il a
            été très pédagogue et j'ai beaucoup appris grâce à lui. Il m'a aidé
            dès que j'en avais besoin, il a été patient et il m'a accordé sa
            confiance dès les premiers instants.
            <br />
            Pour finir, je tiens à témoigner toute ma reconnaissance à toute
            l'équipe de développement : Monsieur Ozcan Sevik, Monsieur Benjamin
            Caure, Monsieur Roméo Brilland et Monsieur Mao De Matos. Ils ont
            tous pris du temps pour m'aider et m'intégrer à l'équipe.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
