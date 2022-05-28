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
      <div className="lg:mx-40 p-5">
        <section className="max-w-8xl mx-auto container bg-white pt-16">
          <div role="contentinfo" className="flex items-center flex-col p-4">
            <h2 className="focus:outline-none border-b-2 text-2xl pb-10 mb-20 lg:pb-16 lg:mb-28 lg:text-4xl font-extrabold text-center leading-8 text-amber-600 lg:w-5/12 md:w-9/12 pt-4">
              Description du projet et des missions réalisées
            </h2>
          </div>
          <div>
            <h3 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
              L'application Geneste
            </h3>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              Après avoir étudié les technologies de l'entreprise, le premier
              projet qu'on m'a confié est l'application métier Geneste. Pour
              commencer, on m'a présenté l'application déjà réalisée par mon
              collègue Roméo. Elle n'était pas tout à fait finalisée, et le
              client avait des recommandations. Nous avons donc commencé par
              éplucher l'application pour faire la liste des choses à changer.
              Il y avait quelques éléments de mise en page à modifier, mais le
              changement le plus important était le formulaire de présence à
              remplir par les employés, le coeur de l'application.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Tout d'abord, j'ai étudié le code existant. Découvrant React, j'ai
              mis du temps à bien comprendre l'arborescence de l'application et
              les composants et fonctions qui la constituent. J'ai choisi de
              commencer par le plus simple pour m'habituer plus facilement au
              framework. J'ai modifié des tailles de boutons, ajusté les
              dimensions de la page pour l'aspect responsive, corrigé quelques
              fautes d'orthographe, harmonisé la mise en page de formulaires...
              Une fois tous ces petits éléments corrigés, j'étais plus à l'aise
              avec les fichiers et la structure de l'application et de React.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Les applications web sont donc réalisées en React.js. Pour
              apprendre à manier cette technologie, je me baserai
              essentiellement sur la documentation officielle. L'entreprise
              utilise les Hooks : ce sont des fonctions qui permettent
              l’utilisation de fonctionnalités de React sans écrire de classe.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Avant d'attaquer la feuille de présence, j'ai construit les
              squelettes de certaines pages pour le chargement au cas où
              l'utilisateur n'aurait pas une bonne connexion. Le code se
              présente ainsi :
            </p>
            {/* <img
            className="lg:w-8/12 block lg:ml-10"
            src="schema-techno.png"
            alt="Schéma des technologies de l'entreprise"
            /> */}
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Dans React, on peut stocker l'état d'une variable grâce au Hook
              useState. Celui-ci permet notamment de définir l'état de
              chargement, et ainsi faire afficher les fonctions de chargement
              lorsque la page n'est pas tout à fait chargée. Il suffit de mettre
              une condition qui indique le contenu à afficher si le chargement
              de la page est en "isLoading", et afficher le résultat final si le
              chargement de la page est en "success".
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              {" "}
              Concernant la feuille de présence, j'ai d'abord fait une maquette
              pour téléphone de la page de présence comme je l'avais envisagée.
            </p>
            {/* <img
            className="lg:w-8/12 block lg:ml-10"
            src="schema-techno.png"
            alt="Schéma des technologies de l'entreprise"
            /> */}
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              J'ai voulu garder un design proche de celui déjà fait puisqu'il me
              semblait sobre et moderne.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Nous devions faire en sorte que l'utilisateur puisse marquer le
              nombre d'heures effectuées pour chaque journée de la semaine,
              indiquer s'il avait pris son véhicule personnel ou non, et
              renseigner le motif de son absence. Au départ, la feuille était
              constituée du nombre d'heures par jour de la semaine, avec deux
              boutons à cocher (un pour le véhicule personnel sous forme de logo
              de voiture, et un pour l'absence sous forme de logo d'oeil barré).
              Nous avons pensé qu'il était plus judicieux d'enlever le bouton
              pour l'absence, et ajouter "0" au nombre d'heures. Je devais donc
              insérer une condition qui afficherait une liste déroulante de
              motifs d'absence si le nombre d'heures était égal à zéro, et
              afficher une checkbox pour la voiture si le nombre d'heures était
              supérieur à zéro. C'est lors de cette tâche que j'ai commencé à
              manipuler des éléments de la base de données.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              J'ai constaté que le code pouvait être refactorisé et être plus
              générique. J'ai alors décidé de reprendre le formulaire de
              timesheet du début, pour ainsi faire fusionner les composants de
              création et d'édition (au départ très similaires mais dans deux
              composants différents). En recommençant du début, j'ai remarqué
              que les éléments de la BDD comme les heures effectuées dans la
              journée étaient séparées pour chaque jour de la semaine: je ne
              pouvais donc pas faire une partie de code commune à chaque jour,
              mais je devais réécrire cette partie pour chacun d'eux.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              J'ai ainsi dû garder un structure similaire à celle d'avant.
              Cependant, j'ai créé un composant contenant le formulaire
              (TimesheetForm) partagé par la création et l'édition, ce qui
              allègera ces deux composants. Même si je n'ai pas pu rendre le
              code aussi générique que je le souhaitais, j'ai quand même pu
              refactoriser une partie du code. <br />
              Pour ce faire, j'ai inséré des conditions notamment pour changer
              le titre si des données sont déjà existantes ou non :
            </p>

            {/* <img
            className="lg:w-8/12 block lg:ml-10"
            src="schema-techno.png"
            alt="Schéma des technologies de l'entreprise"
            /> */}
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Le composant de création n'aura plus que la déclaration du
              formulaire sous cette forme :<br />
              <span>{/* Screen timesheetform */}</span>
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Et le composant d'édition aura sensiblement la même chose, mais
              avec l'insertion de données déjà existantes :<br />
              <span>{/* Screen timesheetform */}</span>
            </p>

            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              {" "}
              Dans le composant de formulaire, j'ai rentré en propriété
              "timesheet", qui représente les données de la feuille de présence.
            </p>
            {/* <img
            className="lg:w-8/12 block lg:ml-10"
            src="schema-techno.png"
            alt="Schéma des technologies de l'entreprise"
            /> */}
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              Toutes mes conditions concernant la création ou l'édition sont
              faites en fonction de "timesheet" au sein du formulaire. Cette
              variable est affiliée à "dataTimesheetById" dans le composant
              d'édition. Ce "dataTimesheetById" est déclaré ainsi :<br />
              {/* <span>screen bout de code</span> */}
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              On comprend ici que pour déterminer la valeur de la donnée, on
              utilise le hook "useTimesheetByIdQuery". Il est créé au sein de
              l'application, et il s'agit d'un useQuery du paquet React Query.
              Son utilité est de faire des requêtes concernant des données
              asynchrones via une API. J'ai d'ailleurs pu manipuler ce type de
              requête. Initialement, il y avait deux requêtes définies dans
              l'API : une qui permettait d'entrer des données (POST) et une
              autre qui permettait de les modifier (FETCH). Cependant, en ayant
              plus qu'un formulaire utilisé pour la création et l'édition et non
              plus deux formulaires distincts, je devais utiliser une seule
              requête qui permettait à la fois le POST et le FETCH.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Au départ, chaque variable était stockée dans un useState, ce qui
              signifie que son état était enregistré et mis à jour régulièrement
              même lorsque la donnée ne changeait pas. J'ai modifié cette partie
              en stockant les variables dans des useWatch, ce qui correpond à
              stocker l'état de la variable uniquement lorsque celle-ci change.
              Cela permet d'améliorer les performances de l'application.
              useWatch fait partie du paquet React Hook Form.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              React Hook Form est une librairie de React qui accorde
              l'utilisation du hook useForm. Comme son nom l'indique, ce hook
              permet la création de formulaires, mais en simplifiant le code et
              en améliorant la performance. Pour la feuille de présence, nous
              avons donc utilisé cette librairie, en l'installant avec npm. Les
              données entrées dans le formulaire sont renseignées ainsi :
              {/* // Avant le rendu du formulaire :
              // (insérer screen)
              // Au sein du formulaire :
              // (insérer screen) */}
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Une des fonctionnalités les plus dificiles à réaliser fut
              l'insertion des dates de la semaine. Ainsi, j'ai inclut un input
              de calendrier avec un jour à choisir. Pour chaque jour choisi,
              j'enregistre en BDD le premier jour de la semaine pour inscrire
              dans le tableau récapitulatif cette date. Ensuite, j'ai inséré un
              tri par date dans le tableau récapitulatif du chantier pour
              afficher les plus récents au début :{/* // (insérer tableau) */}
              {/* // (insérer code) */}
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              On remarque que j'ai pris la date au format rendu sans la modifier
              pour pouvoir mieux la manipuler.
              {/* (explication code de date). */}
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Afin de vérifier quelle donnée était inscrite en BDD lorsque
              l'application ne fonctionnait pas à cause d'une erreur, j'ai
              utilisé MongoCompass, une application qui marche avec MongoDB et
              permet d'afficher toutes les données d'une application ainsi que
              leurs types :{/* // (exemple mongocompass). */}
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Pour finir, j'ai testé toute l'application pour pouvoir la mettre
              en production et la rendre au client.
            </p>
          </div>

          <div>
            <h3 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
              Gaia Tree Yoga
            </h3>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              Gaia Tree Yoga est un site e-commerce réalisé avec WordPress. Il
              s'agit d'une entrepreneuse qui donne des cours yoga et souhaitait
              avoir un site pour présenter sa micro-entreprise et permettre aux
              clients de réserver leurs cours par ce biais.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Pour ce projet, mes missions étaient de mettre en place un système
              de réservation, améliorer la mise en page et l'ergonomie du site
              et installer différents plug-ins.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              J'ai fait une réunion avec la cliente le 8 avril, ce qui nous a
              permis de faire le point sur tout ce qu'il y avait à améliorer.
              Pour la mise en page, j'ai harmonisé tout le site en grande partie
              avec l'outil WPBakery Page Builder.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Concernant les extensions, j'ai installé une extension qui gère
              les cookies : GRDP cookies ; une extension de sécurité : Wordfence
              ; une extension pour gérer l'envoi de mail : Easy WP SMTP. J'ai
              également configuré ces extensions ainsi que WP Fastest Cache,
              EWWWW Optimiser, et surtout Woocommerce et le module de
              réservation.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Concernant les packs de cours à acheter, nous avons mis en place
              un système de code promo transmis lors de l'achat d'un pack et
              utilisable lors de la réservation d'un cours. Pour ce faire, j'ai
              dû modifier le fichier "function.php". J'ai créé une fonction
              ("generate_coupon") qui permettait la création d'un code aléatoire
              :
            </p>
            {/* <img
            className="lg:w-8/12 block lg:ml-10"
            src="schema-techno.png"
            alt="Schéma des technologies de l'entreprise"
          /> */}
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              {" "}
              Ensuite, j'ai ajouté une condition qui ajustait les paramètres du
              coupon en fonction du pack acheté (par exemple : utilisable 10
              fois pour le pack de 10 séances) :
            </p>
            {/* <img
            className="lg:w-8/12 block lg:ml-10"
            src="schema-techno.png"
            alt="Schéma des technologies de l'entreprise"
          /> */}

            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              Il fallait alors générer un mail au client lors du paiement pour
              lui transmettre le code promo en question :
            </p>
            {/* <img
            className="lg:w-8/12 block lg:ml-10"
            src="schema-techno.png"
            alt="Schéma des technologies de l'entreprise"
          /> */}
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Cette fonction est réalisée lors du paiement grâce au hook
              woocommerce "woocommerce_order_status_completed" renseigné de
              cette manière : <br />
              add_action (woocommerce_order_status_completed, generate_coupon);{" "}
              <br />
              Cette ligne signifie qu'une action est ajouté : lors du changement
              du statut de la commande en "Terminée", la fonction
              "generate_coupon" est lancée.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Pour arriver au bon résultat, j'ai tout testé en local : j'ai
              descendu le thème du site, j'ai recréé les pages et produits, et
              j'ai rajouté tous les plug-ins utilisés. Pour tester les mails,
              j'ai utilisé smtp4dev, un serveur d'email permettant de tester les
              mails en local. Pour tester les paiements, j'ai utilisé Stripe en
              version test avec une fausse carte de crédit renseignée sur
              Stripe.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Ma reproduction en locale m'a également servie à tester d'autres
              aspects, et notamment à réparer une erreur que j'avais eu à cause
              du thème. Elle s'est avérée venir de la version de php, non
              compatible avec le thème.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Pour en revenir au système de réservation, je devais tout d'abord
              chercher des extensions de réservation qui permettraient à
              l'utilisateur de réserver une ou plusieurs scéances en payant en
              ligne (avec Paypal et Stripe dans l'idéal) et de permettre la
              réservation par plusieurs personnes du même créneau horaire. Nous
              avons donc installé le plug-in Woocommerce Appointments, une
              extension qui permet la réservation de créneaux horaires,
              directement liée avec Woocommerce. J'ai créé grâce à ce plug-in
              des produits planifiables (un pour chaque cours différent).
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Pour finir, j'ai regardé les performances grâce au DevTool
              Lighthouse qui génère des rapports de performance et indique la
              marche à suivre pour l'améliorer.
            </p>
          </div>
          <div>
            <h3 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
              L'application Acoudesign
            </h3>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              Acoudesign est une entreprise de "solutions d’insonorisation et de
              sonorisation pour le confort acoustique des interieurs dans le
              domaine du bâtiment et des transports". Ils réalisent ainsi des
              tests sur des enceintes, et fournissent un rapport pour chaque
              test avec :
            </p>
            <ul>
              <li>le diagramme du transducteur,</li>
              <li>les paramètres,</li>
              <li>
                un graphique d’impédance et un graphique d’impédance inversée,
              </li>
              <li> un graphique sur l’évolution de la température,</li>
              <li>et un graphique de réponse en fréquence.</li>
            </ul>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              L’application à réaliser consiste en la production du rapport en
              lui même. Il doit ainsi contenir des champs qui vont calculer les
              graphiques selon les données d’un fichier, un champs pour insérer
              l’image du diagramme du transducteur, et des inputs pour le titre,
              sous-titre et commentaire. Je me suis occupée principalement de
              l’export de ces données en html.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Pour ce faire, j’ai d’abord créé une fonction d’export qui
              exportait un fichier HTML vide pour tester.
            </p>
            {/* <img
            className="lg:w-8/12 block lg:ml-10"
            src="schema-techno.png"
            alt="Schéma des technologies de l'entreprise"
          /> */}
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              J’ai utilisé le hook useContext pour stocker les données remplies
              et les faire passer d’un composant à un autre pour tout déplacer
              vers la fonction d’export et ainsi construire la page HTML à
              rendre. Après avoir réussi à exporter les données des inputs, j’ai
              réalisé qu’il serait trop compliqué et trop long de faire passer
              les graphiques en passant par le contexte. J'ai alors utilisé une
              autre méthode que celle que j’avais Initialement envisagée :
              mettre dans le contexte des captures d’écrans des graphiques grâce
              à html2canvas.
              <br />« html2canvas » permet de transformer tout ou partie d’une
              page en canvas, et donc en image. Pour l’utiliser, il faut faire
              ainsi :
            </p>
            {/* // html2canvas(document.body).then(function(canvas) {
            //     document.body.appendChild(canvas);
            // }); */}
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              {" "}
              Comme on peut le voir, il s’agit d’une promesse. Il faudra la
              réaliser en asynchrone, de cette manière :
            </p>
            {/* <img
            className="lg:w-8/12 block lg:ml-10"
            src="schema-techno.png"
            alt="Schéma des technologies de l'entreprise"
          /> */}
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              L’écran est donc capturé. Mais dans un fichier HTML seul, les
              images ne s’affichent pas. Il faut alors les traduire en format
              base64 pour que le HTML puisse les lire et les afficher sans avoir
              à joindre de fichier.
            </p>
            {/* <img
            className="lg:w-8/12 block lg:ml-10"
            src="schema-techno.png"
            alt="Schéma des technologies de l'entreprise"
          /> */}
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              On stocke le résultat dans le contexte pour les afficher dans le
              fichier HTML exporté. <br />
              Ensuite, j'ai rajouté des "loaders" (trouvés sur TailwindUI) pour
              montrer à l'utilisateur que le fichier ou l'export est en train de
              charger.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Pour finir, j'ai testé l'application pour trouver toutes les
              failles et bugs, les régler et mettre le projet en production
              (comme pour Geneste). Le client a vite donné un retour, qui fût
              par ailleurs très positif.
            </p>
          </div>
        </section>
        <section className="max-w-8xl mx-auto container bg-white pt-16">
          <div role="contentinfo" className="flex items-center flex-col p-4">
            <h2 className="focus:outline-none border-b-2 text-2xl pb-10 mb-20 lg:pb-16 lg:mb-28 lg:text-4xl font-extrabold text-center leading-8 text-amber-600 lg:w-5/12 md:w-9/12 pt-4">
              Analyse du travail réalisé (points forts, points d'amélioration et
              actions correctives)
            </h2>
          </div>
          <div>
            {" "}
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Pour l'application Geneste, les défis étaient de manipuler les
              technologies tout juste découvertes et d'imaginer quelque chose
              qui plairait au client alors que sa demande était floue. En effet,
              nous n'avions pas beaucoup de directives du client : nous avions
              seulement le format papier des feuilles de présence qu'il
              utilisait jusqu'ici et quelques recommandations sur l'application
              et son design. Il était donc compliqué de développer une
              application qui correspondrait à ses attentes.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              (...)
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Sur le site Gaia Tree Yoga, je mettais trop de temps à le
              finaliser. Je devais le terminer avant la fin de mon stage, et
              j'avais la sensation que j'avançais assez vite et, sans m'en
              rendre compte, j'ai été moins concentrée. A la dernière semaine,
              on m'a fait remarqué que je n'étais pas assez rapide, et j'ai pris
              conscience de mon relâchement. Aussitôt, j'ai repris mon travail
              sérieusement et je me suis impliquée même sur mon temps personnel.
              J'ai ainsi pu rattraper mon retard.
            </p>
          </div>
        </section>
        <section className="max-w-8xl mx-auto container bg-white pt-16">
          <div role="contentinfo" className="flex items-center flex-col p-4">
            <h2 className="focus:outline-none border-b-2 text-2xl pb-10 mb-20 lg:pb-16 lg:mb-28 lg:text-4xl font-extrabold text-center leading-8 text-amber-600 lg:w-5/12 md:w-9/12 pt-4">
              Bilan personnel
            </h2>
          </div>
          <div>
            {" "}
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Globalement, mon stage s'est très bien passé. Il correspond à mes
              attentes sur tous les points. En termes techniques, j'ai pu
              apprendre de nouvelles technologies, j'ai développé celles que
              j'avais déjà étudié, j'ai observé au plus près le quotidien d'un
              développeur, j'ai appris à adopter une approche du travail
              différente de celle que j'avais en cours pour m'adapter au mieux.
              En termes humains, le travail au sein d'une équipe est très
              stimulant, je me suis facilement sentie à l'aise avec mes
              collègues . Cependant, je dirais que je n'ai pas eu assez de
              retour sur le travail que je fournissais. Avant la dernière
              semaine, je n'ai pas vraiment eu d'avis sur ce que je faisais, et
              il m'était donc impossible de savoir quoi améliorer.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Pour en revenir aux technologies, j'ai apprécié toutes celles que
              j'ai apprises.
            </p>
          </div>
        </section>

        <div className="relative flex flex-col justify-center items-center">
          <Link to="/">
            <button className="w-full sm:w-auto text-base leading-4 text-center text-white py-6 px-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-gray-500 ">
              Retourner à l'accueil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
