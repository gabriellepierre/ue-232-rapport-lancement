export const Footer = () => {
  return (
    <div className="pt-12 mb-0">
      <footer id="footer" as="footer" className="relative z-50 pt-24 bottom-0">
        <div className="2xl:container md:py-12 py-9">
          <div className=" bg-gray-50 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-12 gap-20 lg:px-20 lg:py-12 py-10 md:px-12 px-4">
            {/* Delivery grid Card */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">
                Gabrielle PIERRE
              </h3>
              <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
                DEUST Webmaster et Métiers de l'internet 2ème année - Parcours 1
                : <br />
                Développement web et plateformes mobiles
              </p>
              <br />
              <a
                href="https://www.linkedin.com/in/gabrielle-pierre-64b65a205/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="h-8 w-auto hover:opacity-60"
                  src="https://www.svgrepo.com/show/107799/linkedin.svg"
                  alt="Linkedin"
                />
              </a>
            </div>

            {/* customer Grid Card */}

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 pb-1">
                SARL Becoms
              </h3>
              <a href="https://becoms.tech/" target="_blank" rel="noreferrer">
                <img
                  className=" h-10 w-auto"
                  src="https://th.bing.com/th/id/R.d248425db9e2bc958d24e3019386efd7?rik=ZgJwCbfXaJBu1A&pid=ImgRaw&r=0"
                  alt="Becoms"
                />
              </a>
              <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
                42B Rue Joseph Desaymard, 63000 Clermont-Ferrand
                <br /> Maître de stage : Jérémy PARIS
                <br />
                <span className=" font-semibold cursor-pointer">
                  jeremy@becoms.tech
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
