import React from "react";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 sm:px-12"
      style={{
        backgroundImage: "url(https://suhasxi.com/imgbg.png)",
      }}
    >
      <div className="text-white w-full max-w-md sm:max-w-xl lg:max-w-2xl text-center sm:text-left">
        <img
          className="mx-auto sm:mx-0 hover:scale-110 duration-300 mb-6 w-32 sm:w-40 md:w-48"
          src="https://cdn.discordapp.com/attachments/1389579519295488000/1392411176352350270/nocta.png?ex=686f6f76&is=686e1df6&hm=7f2d1abbd8b1d816fbaa20d4d6f43e574c6d0e40fcfa390816cb93a923817114&"
          alt="Logo"
        />

        <nav className="space-y-3 mb-8 sm:space-y-4 sm:mb-12">
          {["About", "Projects", "Writings", "Curator's Corner"].map((item) => (
            <div
              key={item}
              className="text-base sm:text-lg font-normal hover:translate-x-2 transition-transform duration-300"
            >
              {item}
            </div>
          ))}
        </nav>

        <a
          href="https://x.com/noctacaelus"
          className="inline-block transform transition-transform duration-300 hover:scale-110 space-y-1 sm:space-y-2"
        >
          <div className="text-base sm:text-xl font-bold">
            You can find me on
          </div>
          <div className="text-base sm:text-lg font-bold">X</div>
        </a>
      </div>
    </div>
  );
}

export default App;
