// import React from "react";

// import { Link } from "../shared/Link";
import { Planning } from "./Planning";

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
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
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
              Avant d'attaquer la feuille de présence, j'ai construit les
              squelettes de certaines pages pour le chargement au cas où
              l'utilisateur n'aurait pas une bonne connexion. Par exemple avec
              un titre :
            </p>
            <div className="flex justify-center">
              <img
                className=" block py-5"
                src="SkeletonTitre.png"
                alt="Squelette du titre"
              />
            </div>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Dans React, on peut stocker l'état d'une variable grâce au Hook
              useState. Celui-ci permet notamment de définir l'état de
              chargement, et ainsi faire afficher les fonctions de chargement
              lorsque la page n'est pas tout à fait chargée. Il suffit de mettre
              une condition qui indique le contenu à afficher si le chargement
              de la page est en "isLoading", et afficher le résultat final si le
              chargement de la page est en "success".
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Concernant la feuille de présence, nous devions faire en sorte que
              l'utilisateur puisse marquer le nombre d'heures effectuées pour
              chaque journée de la semaine, indiquer s'il avait pris son
              véhicule personnel ou non, et renseigner le motif de son absence.
              Au départ, la feuille était constituée du nombre d'heures par jour
              de la semaine, avec deux boutons à cocher (un pour le véhicule
              personnel sous forme de logo de voiture, et un pour l'absence sous
              forme de logo d'oeil barré). Nous avons pensé qu'il était plus
              judicieux d'enlever le bouton pour l'absence, et ajouter "0" au
              nombre d'heures. Je devais donc insérer une condition qui
              afficherait une liste déroulante de motifs d'absence si le nombre
              d'heures était égal à zéro, et afficher une checkbox pour la
              voiture si le nombre d'heures était supérieur à zéro. C'est lors
              de cette tâche que j'ai commencé à manipuler des éléments de la
              base de données.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-10">
              {" "}
              Pour le visuel, j'ai voulu garder un design proche de celui déjà
              fait puisqu'il me semblait sobre et moderne. Voici une maquette
              pour téléphone de la page de présence comme je l'avais envisagée.
            </p>
            <div className="flex justify-center">
              <img
                className="block py-5"
                src="MAQUETTE.png"
                alt="Maquette fueille de présence"
              />
            </div>
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
              refactoriser une partie du code.
            </p>
            <div className="lg:flex">
              <p className="focus:outline-none text-base text-gray-600 leading-normal pt-2 pb-2">
                Le composant de création n'aura plus que la déclaration du
                formulaire sous cette forme :
              </p>
              <img
                className="lg:flex h-full lg:ml-10"
                src="TimesheetForm.png"
                alt="TimesheetForm"
              />
            </div>
            <div className="lg:flex lg:flex-row">
              <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
                Et le composant d'édition aura sensiblement la même chose, mais
                avec l'insertion de données déjà existantes :
              </p>
              <img
                className="mt-1 block lg:ml-10"
                src="TimesheetFormProp.png"
                alt="TimesheetForm avec a propriété timesheet définie"
              />
            </div>

            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Dans le composant de formulaire, j'ai rentré en propriété
              "timesheet", qui représente les données de la feuille de présence.
            </p>
            <div className="flex justify-center">
              <img
                className="block py-5"
                src="TimesheetFormPropDecla.png"
                alt="Déclaration de dataTimesheetById"
              />
            </div>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Toutes mes conditions concernant la création ou l'édition sont
              faites en fonction de "timesheet" au sein du formulaire. Cette
              variable est affiliée à "dataTimesheetById" dans le composant
              d'édition. Ce "dataTimesheetById" est déclaré ainsi :
            </p>
            <div className="flex justify-center">
              <img
                className="block py-5"
                src="datatimesheetbyiddecla.png"
                alt="Déclaration de dataTimesheetById"
              />
            </div>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              On comprend ici que pour déterminer la valeur de la donnée, on
              utilise le hook "useTimesheetByIdQuery". Il est créé au sein de
              l'application, et il s'agit d'un useQuery du paquet React Query.
              Son utilité est de faire des requêtes concernant des données
              asynchrones via une API. J'ai d'ailleurs pu manipuler ce type de
              requête. Initialement, il y avait deux requêtes définies dans
              l'API : une qui permettait d'entrer des données (POST) et une
              autre qui permettait de les modifier (PATCH). Cependant, en ayant
              plus qu'un formulaire utilisé pour la création et l'édition et non
              plus deux formulaires distincts, je devais utiliser une seule
              requête qui permettait à la fois le POST et le PATCH.
            </p>
            <div className="flex justify-center">
              <img
                className="block py-5"
                src="ApiUsetimecheetmutation.png"
                alt="API"
              />
            </div>
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
            </p>
            <div className="lg:flex lg:flex-row">
              <div className="lg:pr-5">
                <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
                  Avant le rendu du formulaire :
                </p>
                <div className="flex justify-center">
                  <img
                    className="block py-5"
                    src="useformdecla.png"
                    alt="Déclaration useForm"
                  />
                </div>
              </div>
              <div>
                <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
                  Au sein du formulaire pour insérer les données entrées :
                </p>
                <div className="flex justify-center">
                  <img
                    className="block py-5"
                    src="useforminscriptiondonnee.png"
                    alt="Inscription de données dans le useForm"
                  />
                </div>
              </div>
            </div>

            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Une des fonctionnalités les plus dificiles à réaliser fut
              l'insertion des dates de la semaine. Ainsi, j'ai inclut un input
              de calendrier avec un jour à choisir. Pour chaque jour choisi,
              j'enregistre en BDD le premier jour de la semaine pour inscrire
              dans le tableau récapitulatif cette date. Ensuite, j'ai inséré un
              tri par date dans le tableau récapitulatif du chantier pour
              afficher les plus récents au début ("sort" permettant de trier) :
            </p>
            <div className="flex justify-center">
              <img
                className="block py-5"
                src="tripardate.png"
                alt="Tri par date"
              />
            </div>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Cette partie a été difficle à réaliser car j'avais besoin
              d'utiliser la date en format par défaut pour trier le tableau
              (voir code ci-dessus), mais je devais l'afficher en format
              DD/MM/YYYY (format français) notamment dans le tableau. J'ai donc
              créé une fonction qui serait utilisable partout où je devais
              afficher la date en format français :
            </p>
            <div className="flex justify-center">
              <img
                className="block py-5"
                src="Datefonction.png"
                alt="Fonction de formattage de la date"
              />
            </div>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Afin de vérifier quelle donnée était inscrite en BDD lorsque
              l'application ne fonctionnait pas à cause d'une erreur, j'ai
              utilisé MongoCompass, une application qui marche avec MongoDB et
              permet d'afficher toutes les données d'une application ainsi que
              leurs types. <br /> Pour finir, j'ai testé toute l'application
              pour pouvoir la mettre en production et la rendre au client.
            </p>
          </div>

          <div>
            <h3 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 pt-10">
              Gaia Tree Yoga
            </h3>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
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
              ("generate_coupon") :
            </p>
            <div className="flex justify-center">
              <img
                className="block py-5"
                src="codepromo.png"
                alt="Gnération aléatoire du code promo"
              />
            </div>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Cette capture est un bout de cette fonction. On y voit la création
              d'un code aléatoire composé de 10 caractères (l. 56 et 57) avec
              une durée de vie limitée (l.55), et les conditions pour pouvoir
              utiliser ce code promo (l. 58 à 87). Ces paramètres sont mis en
              place en fonction du pack acheté (par exemple : utilisable 10 fois
              pour le pack de 10 séances (l. 53)).
              <br />
              Ensuite, il fallait alors générer un mail au client lors du
              paiement pour lui transmettre le code promo en question :
            </p>

            <div className="flex justify-center">
              <img
                className="block py-5"
                src="email.png"
                alt="Gnération de l'email avec le code promo"
              />
            </div>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Cette fonction est réalisée lors du paiement grâce au hook
              woocommerce "woocommerce_order_status_completed" renseigné de
              cette manière : <br />
              <span className="italic">
                add_action (woocommerce_order_status_completed,
                generate_coupon);
              </span>
              <br />
              Cette ligne signifie qu'une action est ajouté : lors du changement
              du statut de la commande en "Terminée" (completed), la fonction
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
            <h3 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 pt-10">
              L'application Acoudesign
            </h3>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5">
              Acoudesign est une entreprise de "solutions d’insonorisation et de
              sonorisation pour le confort acoustique des interieurs dans le
              domaine du bâtiment et des transports". Ils réalisent ainsi des
              tests sur des enceintes, et fournissent un rapport pour chaque
              test avec :
            </p>
            <ul className="list-disc pl-10 text-gray-600 pb-2">
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
              <br />
              Pour ce faire, j’ai d’abord créé une fonction d’export qui
              exportait un fichier HTML vide pour tester.
            </p>
            <div className="flex justify-center">
              <img
                className="block py-5"
                src="exportfilehtml.png"
                alt="Fonction qui exporte un fichier html"
              />
            </div>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              A la deuxième ligne, on remarque que l'export se fait selon la
              fonction "exportHTML" avec les données en propriété "exportData".
              Dans cette fonction, je vais rendre la construction de la page
              HTML à exporter. Pour les données, j’ai utilisé le hook useContext
              pour les stocker et les faire passer d’un composant à un autre
              pour tout déplacer vers la fonction d’export et ainsi construire
              la page HTML à rendre. Après avoir réussi à exporter les données
              des inputs, j’ai réalisé qu’il serait trop compliqué et trop long
              de faire passer les graphiques en passant par le contexte. J'ai
              alors utilisé une autre méthode que celle que j’avais Initialement
              envisagée : mettre dans le contexte des captures d’écrans des
              graphiques grâce à html2canvas.
              <br />« html2canvas » permet de transformer tout ou partie d’une
              page en canvas, et donc en image. <br />
              L’écran est donc capturé. Mais dans un fichier HTML seul, les
              images ne s’affichent pas. Il faut alors les traduire en format
              base64 pour que le HTML puisse les lire et les afficher sans avoir
              à joindre de fichier.
            </p>
            <div className="flex justify-center">
              <img
                className="block py-5"
                src="elementToCanvas.png"
                alt="Changement du format des images en base64"
              />
            </div>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              On a donc une variable "transductorCanvas" qui comprend la capture
              d'un élément (constante "el"). Cette variable est traduite en
              base64 grâce à "toDataURL()". On stocke alors le résultat dans le
              contexte pour les afficher dans le fichier HTML exporté. <br />
              Ensuite, j'ai rajouté des "loaders" (trouvés sur TailwindUI) pour
              montrer à l'utilisateur que le fichier ou l'export est en train de
              charger.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Pour finir, j'ai testé l'application pour trouver toutes les
              failles et bugs, les régler et mettre le projet en production. Le
              client a vite donné un retour, qui fût par ailleurs très positif.
              Vous trouverez l'application{" "}
              <a
                href="https://g3aezf5t5f0udbof6txz8fi8szaanrb9-33hpg.ondigitalocean.app/"
                className="text-amber-600 hover:text-amber-800"
              >
                ici
              </a>
              .
            </p>
          </div>
        </section>
        <Planning />
        <section className="max-w-8xl mx-auto container bg-white pt-16">
          <div role="contentinfo" className="flex items-center flex-col p-4">
            <h2 className="focus:outline-none border-b-2 text-2xl pb-10 mb-20 lg:pb-16 lg:mb-28 lg:text-4xl font-extrabold text-center leading-8 text-amber-600 lg:w-5/12 md:w-9/12 pt-4">
              Analyse du travail réalisé
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
              Le projet Acoudesign s'est très bien passé. D'après moi, c'est dû
              au fait que j'ai eu plus de facilité à demander de l'aide. Avant
              ce projet, j'osais moins par peur de ralentir les autres. Je
              voulais devenir autonome au plus vite pour intégrer l'équipe au
              mieux, ce qui n'a évidemment pas été la bonne approche.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Sur le site Gaia Tree Yoga, j'ai effectué énormément de recherches
              pour les plug-ins de réservation, et j'en ai installé et configuré
              4 avant d'avoir l'extension définitive. J'ai perdu énormément de
              temps à faire ça. Plus j'avançais de ce côté, plus j'avais
              l'impression, comme le dit l'expression, de faire des boucles sur
              une calvitie. Entre autres à cause du changement de plug-ins à
              répétition, je mettais trop de temps à finaliser le site. Je
              devais le terminer avant la fin de mon stage. Cependant, j'avais
              la sensation que j'avançais assez vite pour le terminer à temps.
              Sans m'en rendre compte, j'ai été moins concentrée. A la dernière
              semaine, on m'a fait remarqué que je n'étais pas assez rapide, et
              j'ai pris conscience de mon relâchement. Aussitôt, j'ai repris mon
              travail sérieusement et je me suis impliquée même sur mon temps
              personnel.
              <br /> J'ai ainsi pris conscience de ma faiblesse. Désormais, je
              pense pouvoir mieux déterminer quand je relâche mon attention et
              réagir plus rapidement. Néanmoins, j'ai été agréablement surprise
              par ma faculté à reprendre en main le projet. Mon implication a
              d'ailleurs été remarquée par l'entreprie, qui m'a proposé une
              alternance pour l'année scolaire prochaine.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Concernant mon apprentissage de React en général, j'ai voulu aller
              trop vite au début. J'aurais dû prendre plus le temps d'étudier
              tous les aspects de la technologie afin de gagner du temps
              ailleurs. Lors de mes projets, j'ai souvent eu ce mauvais réflexe
              d'aller trop vite. Si j'avais une idée du résultat final désiré,
              j'allais directement essayer de le rendre, sans forcément passer
              par des intermédiaires. J'ai réalisé vers la moitié de mon stage
              comme les étapes de transition sont importantes, surtout à mon
              niveau actuel.
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
              Je suis entièrement satisfaite de mon stage. Il correspond à mes
              attentes sur tous les points. En termes techniques, j'ai pu
              apprendre de nouvelles technologies, j'ai développé celles que
              j'avais déjà étudié, j'ai observé au plus près le quotidien d'un
              développeur, et j'ai appris à adopter une approche du travail
              différente de celle que j'avais en cours pour m'adapter au mieux.
              En termes humains, le travail au sein d'une équipe est très
              stimulant, et je me suis facilement sentie à l'aise avec mes
              collègues. Il y a eu néanmoins des moments difficiles où j'ai
              beaucoup douté de mon travail et de ma productivité, mais ces
              remises en question font partie du métier de développeur et seront
              moins fréquentes quand j'aurais des compétences plus larges.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              {" "}
              Pour en revenir aux technologies, j'ai particulièrement apprécié
              manier React, surtout avec Acoudesign. Avec l'application Geneste,
              je n'avais pas assez de recul pour avoir un avis complet puisque
              j'étais en pleine découverte. J'admets avoir moins aimé travailler
              sur WordPress. Toutefois, toute expérience est bonne à prendre et
              je suis satisfaite d'avoir pu voir des aspects du CMS que je
              n'avais pas abordé auparavant.
            </p>
            <p className="focus:outline-none text-base text-gray-600 leading-normal pt-5 pb-2">
              Je conclue donc ce stage avec une ambition déterminée : devenir
              développeur front-end. Je suis particulièrement attachée au fait
              d'apporter mes idées et réfléchir à l'articulation d'une
              application web, et endosser ce rôle pendant ce stage a été très
              gratifant.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
