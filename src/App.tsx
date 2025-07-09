import React from "react";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url(https://suhasxi.com/imgbg.png)",
      }}
    >
      <div className="absolute top-1/4 left-40 p-12">
        <div className="text-white">
          <h1 className="text-5xl font-light mb-8 italic hover:scale-110 duration-300">
            Nocta
          </h1>

          <nav className="space-y-4 mb-12">
            <div className="text-lg font-normal hover:translate-x-2 duration-300 transition-transform">
              About
            </div>
            <div className="text-lg font-normal hover:translate-x-2 duration-300 transition-transform">
              Projects
            </div>
            <div className="text-lg font-normal hover:translate-x-2 duration-300 transition-transform">
              Writings
            </div>
            <div className="text-lg font-normal hover:translate-x-2 duration-300 transition-transform">
              Curator's Corner
            </div>
          </nav>

          <a
            href="https://x.com/noctacaelus"
            className="inline-block space-y-2 transform transition-transform duration-300 hover:scale-110"
          >
            <div className="text-[22px] font-bold">You can find me on</div>
            <div className="text-lg font-bold">X</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
