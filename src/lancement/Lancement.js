// import React from "react";

export const Lancement = () => {
  return (
    <div>
      <title>Rapport de lancement - UE 232</title>
      <div className="p-20 bg-cover bg-top bg-sky-500/50 bg-[url('https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg')]">
        <div className="flex items-center flex-col">
          <h1 className="focus:outline-none pb-20  bg-neutral-200/50 rounded-lg text-5xl lg:text-8xl font-extrabold text-center leading-20 text-gray-800 lg:w-5/12 md:w-9/12 pt-4">
            Rapport de lancement
          </h1>
        </div>
      </div>
      <div className="lg:mx-40 p-5">
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
                Le 9 mars 2022, j’ai visité le site de la French Tech de
                Clermont Ferrand et c’est ici que j’ai découvert l’entreprise.
                J’ai donc envoyé ma candidature pour le stage et nous avons
                convenu un entretien pour le lundi 14 mars. À la suite de cet
                entretien, l’entreprise a répondu favorablement à ma
                candidature. Mon stage a ainsi pu débuter le 28 mars.{" "}
              </p>
            </div>
            <div className="lg:px-5 lg:border-l-2">
              <h3 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
                L'équipe
              </h3>
              <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
                L’entreprise est comsttuée de 12 personnes. L’équipe de
                développement est composée du responsable de service (Jérémy
                Paris, mon tuteur de stage), d’un ingénieur IT (Ozcan Sevik), et
                de trois développeurs full stack (Benjamin Caure, Roméo Brilland
                et Mao De Matos). Je serais intégrée à cette équipe.
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
                et mobile. J'utiliserais de technologies de développement
                modernes tels que la stack MERN (Mongo Express React Node) ou
                PHP. Mon projet principal sera l'amélioration d'une application
                métier en React.js pour le groupe LGMN.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-8xl mx-auto container bg-white pt-16">
          <div role="contentinfo" className="flex items-center flex-col px-4">
            <h2 className="focus:outline-none border-b-2 pb-10 mb-20 lg:pb-16 lg:mb-28 text-2xl lg:text-4xl font-extrabold text-center leading-8 text-amber-600 lg:w-5/12 md:w-9/12 pt-4">
              Détail des missions et planification prévisonnelle de mes actions
            </h2>
          </div>
          <div
            tabIndex={0}
            aria-label="group of cards"
            className="focus:outline-none flex flex-wrap justify-center gap-10 px-4"
          >
            <div
              tabIndex={1}
              aria-label="card 1"
              className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
            >
              <div className="w-20 h-20 relative mr-5">
                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                <div className="absolute text-white bottom-0 left-0 bg-amber-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg"
                    alt="html tag"
                  />
                </div>
              </div>
              <div className="w-10/12">
                <h3
                  tabIndex={0}
                  className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                >
                  Développement :
                </h3>
                <div
                  tabIndex={0}
                  className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                >
                  <ul className="list-disc">
                    <li>
                      Participation à différents projets pour le développement
                      front et back,
                    </li>
                    <li>
                      Découverte des technologies utilisées par l’entreprise
                      (MongoDB, Express et React JS),
                    </li>
                    <li>Découverte de Tailwind (Templates et CSS),</li>
                    <li>
                      Analyse d’applications existantes et de la qualité du
                      code,
                    </li>
                    <li>Correction de bugs,</li>
                    <li>
                      Intégration de fonctionnalités avancées :
                      <ul className="list-disc pl-5">
                        <li>
                          Requêtes à l’API avec ReactQuery et communication avec
                          une base de données
                        </li>
                        <li>Utilisation des Hooks</li>
                        <li>Intégration de modules avec Node.js</li>
                      </ul>
                    </li>
                    <li>
                      Recherche et paramétrage de plugins pour des sites
                      Wordpress,
                    </li>
                    <li>
                      Utilisation concrète de MongoDB avec MongoDBCompass et
                      Mongoose.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              tabIndex={1}
              aria-label="card 2"
              className="focus:outline-none grid grid-col-2 sm:w-full md:w-5/12 pb-20"
            >
              <div className="flex pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-amber-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg"
                      alt="monitor"
                    />
                  </div>
                </div>
                <div className="w-10/12">
                  <h3
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    Référencement et hébergement :
                  </h3>
                  <div
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    <ul className="list-disc">
                      <li>Etude de données de la Google Search Console,</li>
                      <li>Recommandations SEO,</li>
                      <li>Découverte de Digital Ocean et OVH.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-amber-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg"
                      alt="check"
                    />
                  </div>
                </div>

                <div className="w-10/12">
                  <h3
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 flex justify-iten-end"
                  >
                    Participation à des réunions :
                  </h3>
                  <div
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    <ul className="list-disc">
                      <li>
                        Daily meetings : <br /> l’équipe a adopté une méthode de
                        travail agile. Dans cet optique, nous faisons une
                        réunion tous les matins dans laquelle nous détaillons
                        chacun notre tour nos activités de la veille. Ainsi, on
                        sait ce sur quoi travaillent les autres et leur avancée
                        quotidienne sur leur projet.
                      </li>
                      <li>
                        Réuion avec des clients : <br />
                        compréhension du projet et propositions quant aux
                        fonctionnalités demandées.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-8xl mx-auto container bg-white pt-16">
          <div role="contentinfo" className="flex items-center flex-col px-4">
            <h2 className="focus:outline-none border-b-2 text-2xl pb-10 mb-20 lg:pb-16 lg:mb-28 lg:text-4xl font-extrabold text-center leading-8 text-amber-600 lg:w-5/12 md:w-9/12 pt-4">
              Analyse du besoin à l'origine du projet
            </h2>
          </div>
          <div className="lg:flex lg:flex-row">
            <img
              className=" w-auto h-28 flex align-center"
              src="lgmn.png"
              alt="LGMN"
            />
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              LGMN (Louis Geneste et Maurice Nailler) est une groupe spécialisé
              dans la restauration du patrimoine bâti et des monuments
              historiques. L’application métier pour LGMN est une application
              web réalisée avec React qui répertorie des feuilles de présence
              selon les chantiers. Ainsi, l'employeur peut savoir qui a
              travaillé sur quel chantier, combien d'heures il a effectué dans
              la semaine, quel est le motif des absences, si le salarié a
              utilisé son véhicule personnel pour les notes de frais, etc. Mes
              missions sur ce projet seront : analyser le code existant, repérer
              les bugs et les réparer, rendre génériques certaines parties,
              améliorer le formulaire de présence et la page du chantier qui
              liste les feuilles de présence. Les objectifs sont de faire en
              sorte que tout soit clair et précis et que l’application soit
              responsive puisqu’elle sera utilisée en majeure partie sur
              téléphone.
            </p>
          </div>
        </section>
        <section className="max-w-8xl mx-auto container bg-white pt-16">
          <div role="contentinfo" className="flex items-center flex-col px-4">
            <h2 className="focus:outline-none border-b-2 text-2xl pb-10 mb-20 lg:pb-16 lg:mb-28 lg:text-4xl font-extrabold text-center leading-8 text-amber-600 lg:w-5/12 md:w-9/12 pt-4">
              Veille technologique
            </h2>
          </div>
          <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
            Les technologies utilisées par l’entreprise sont la stack MERN
            (MongoDB, Express, ReactJS et NodeJS), des CMS comme Wordpress ou
            Prestashop avec PHP, les API REST, Tailwind, Auth0, DigitalOcean et
            Ovh.
          </p>
          <img
            className="lg:w-8/12 block lg:ml-10"
            src="schema-techno.png"
            alt="Schéma des technologies de l'entreprise"
          />
          <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
            {" "}
            MongoDB est un système de base de données déstructurée. Dans les
            bases de données classiques, les tables ont des champs obligatoires
            (et si vides sont nuls). L’avantage du NoSQL et de la
            déstructuration de données est que les champs ne sont pas forcément
            obligatoires, et donc ne seront pas « nuls », ce qui simplifie la
            programmation et réduit les lignes de code. Pour manipuler ces
            données, le lien entre la base de données et le front end sera les
            API. Pour communiquer avec celles-ci, nous utiliseront des requêtes
            ReactQueries.
          </p>
          <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
            {" "}
            Les applications web sont donc réalisées en React.js. Pour apprendre
            à manier cette technologie, je me baserais essentiellement sur la
            documentation officielle. L'entreprise utilise les Hooks : ce sont
            des fonctions qui permettent l’utilisation de fonctionnalités de
            React sans écrire de classe.
          </p>
          <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
            {" "}
            Node.js permet d’installer des modules dans l’application, notamment
            Express.js ou Tailwind. Express est un framework permettant le
            développement de serveur en Node.js et la création d’API. Tailwind
            est un moteur de templates css.
          </p>
          <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
            L’entreprise utilise également twin.macro, une extension qui
            remplasse les classes Tailwind en objets CSS. Auth0 est un système
            d’authentification : l’API d’auth0 est utilisée pour sécuriser les
            authentifications à l’application.
          </p>
          <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
            {" "}
            Les sites e-commerce réalisés avec Wordpress ou Prestashop seront
            hébergés avec OVH. Les autres sites et applications seront hébergés
            avec DigitalOcean.
          </p>
        </section>
      </div>
    </div>
  );
};
