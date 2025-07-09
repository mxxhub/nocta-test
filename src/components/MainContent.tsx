import React from "react";

const MainContent = () => {
  return (
    <div className="ml-80 min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-6xl font-thin text-white mb-4 tracking-wider">
              Welcome to the Future
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              Exploring the intersection of technology, creativity, and human
              potential
            </p>
          </div>

          <div className="flex justify-center space-x-8 mt-12">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
