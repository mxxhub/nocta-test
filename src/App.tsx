import React from "react";

const links = [
  {
    title: "About",
    link: "https://x.com/noctacaelus",
  },
  {
    title: "Collabo",
    link: "mailto:d@nocta.dev",
  },
];
function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat relative sm:bg-center bg-right"
      style={{
        backgroundImage: "url(/assets/bg.png)",
      }}
    >
      <div className="absolute top-1/4 left-6 sm:left-10 md:left-20 lg:left-40 p-4 sm:p-8 md:p-12">
        <div className="text-white max-w-xs sm:max-w-md md:max-w-lg">
          <img
            className="hover:scale-110 duration-300 mb-6 w-32 sm:w-40 md:w-48"
            src="/assets/nocta.png"
            alt="Logo"
          />

          <div className="space-y-5 mb-8 sm:space-y-6 sm:mb-12">
            {links.map((item) => (
              <a
                target="_blank"
                href={item.link}
                className="text-base sm:text-lg font-normal hover:translate-x-2 transition-transform duration-300 block"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
