import React from "react";

export const Planning = () => {
  return (
    <section className="max-w-8xl mx-auto container bg-white pt-16">
      <div role="contentinfo" className="flex items-center flex-col p-4">
        <h2 className="focus:outline-none border-b-2 text-2xl pb-10 mb-20 lg:pb-16 lg:mb-28 lg:text-4xl font-extrabold text-center leading-8 text-amber-600 lg:w-5/12 md:w-9/12 pt-4">
          Planning du travail réalisé
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap mb-10">
          <div className="md:w-full h-full p-2">
            <h3 className="sm:w-auto leading-4 text-center py-6 px-16 focus:outline-none font-semibold bg-amber-600 text-white mb-6">
              Semaine 1
            </h3>
            <p className=" text-gray-600 font-normal text-base leading-7">
              Veille technologique et étude des technologies utilisées par
              l'entreprise, découverte du projet Geneste. Commencement du
              dévelopement sur Geneste avec des petits éléments de mise en page.
              Première réunion avec un client.
            </p>
          </div>
          <div className="md:w-full h-full relative p-2">
            <h3
              className="sm:w-auto leading-4 text-center py-6 px-16 focus:outline-none 
            font-semibold bg-amber-600 text-white mb-6"
            >
              Semaine 2
            </h3>
            <p className=" text-gray-600 font-normal text-base leading-7">
              Référencement du site Comptoir Sports ; Projet geneste : rendre
              code générique ; communication avec BDD pour le formulaire ;
              commencement de l'edition du formulaire Aide sur un projet interne
              (OMS formation), et réunion avec l'entrepreneuse de Gaia Tree
              Yoga.
            </p>
          </div>
          <div className="md:w-full h-full relative p-2">
            <h3
              className="sm:w-auto leading-4 text-center py-6 px-16 focus:outline-none 
            font-semibold bg-amber-600 text-white mb-6"
            >
              Semaine 3
            </h3>
            <p className=" text-gray-600 font-normal text-base leading-7">
              Projet Geneste : fin des tâches concernant le formulaire, mise en
              page, et gestion des dates et de l'export CSV des données par
              semaine des chantiers.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap mb-10">
          <div className="md:w-full h-full relative p-2">
            <h3
              className="sm:w-auto leading-4 text-center py-6 px-16 focus:outline-none
            font-semibold bg-amber-600 text-white mb-6"
            >
              Semaine 4
            </h3>
            <p className=" text-gray-600 font-normal text-base leading-7">
              Gaia tree yoga : mise en page, installation et paramétrage de
              plug-ins. Problème avec WordPress : déterminer d'où il vient et
              revenir en arrière dans les sauvegarde (grâce à OVH).
            </p>
          </div>
          <div className="md:w-full h-full relative p-2">
            <h3
              className="sm:w-auto leading-4 text-center py-6 px-16 focus:outline-none 
              
            font-semibold bg-amber-600 text-white mb-6"
            >
              Semaine 5
            </h3>
            <p className=" text-gray-600 font-normal text-base leading-7">
              Gaia tree yoga : descendre le theme en local pour tester d'où
              vient le problème, initialisation des cookies / mentions légales /
              CGU ; création compte stripe du client, recherche de plug in de
              reservation.
            </p>
          </div>
          <div className="md:w-full h-full relative p-2">
            <h3
              className="sm:w-auto leading-4 text-center py-6 px-16 focus:outline-none 
            font-semibold bg-amber-600 text-white mb-6"
            >
              Semaine 6
            </h3>
            <p className=" text-gray-600 font-normal text-base leading-7">
              Acoudesign : traduction avec i18 Next ; fusion de deux zones qui
              utilisaient le même document ; mise en page ; export HTML (réussi
              à exporter un fichier, stocker dans un contexte (hook) les données
              nécessaires au document HTML à exporter) commencement CSS du
              fichier d'export ; <br />
              Gaia tree yoga : barre de cookies; mises à jour.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap mb-10">
          <div className="md:w-full h-full relative p-2">
            <h3
              className="sm:w-auto leading-4 text-center py-6 px-16 focus:outline-none
            font-semibold bg-amber-600 text-white mb-6"
            >
              Semaine 7
            </h3>
            <p className=" text-gray-600 font-normal text-base leading-7">
              Acoudesign : html2canvas, transformer les screens en base64 pour
              les mettre dans le fichier HTML sans avoir à créer de fichier ZIP
              ; mise en page CSS de l'export ; ajout d'un loader.
            </p>
          </div>
          <div className="md:w-full h-full relative p-2">
            <h3
              className="sm:w-auto leading-4 text-center py-6 px-16 focus:outline-none 
            font-semibold bg-amber-600 text-white mb-6"
            >
              Semaine 8
            </h3>
            <p className=" text-gray-600 font-normal text-base leading-7">
              Acoudesign : tests et déploiement.
              <br />
              Gaia Tree Yoga : reprise du projet, paramétrage de plug-ins et
              gestion du système de code promo.
            </p>
          </div>
          <div className="md:w-full h-full relative p-2">
            <h3
              className="sm:w-auto leading-4 text-center py-6 px-16 focus:outline-none
            font-semibold bg-amber-600 text-white mb-6"
            >
              Semaine 9
            </h3>
            <p className=" text-gray-600 font-normal text-base leading-7">
              Gaia Tree Yoga : Paramétrage du plug-in de réservation,
              perfectionnement de la mise en page. Fin de stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
