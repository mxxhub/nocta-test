import React from "react";

const FuturisticElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 transform translate-x-8 translate-y-8">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-white/10 shadow-2xl">
            <div className="absolute inset-4 bg-gradient-to-br from-white/5 to-transparent rounded-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-20 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-yellow-400/50 rotate-12"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-80 h-80 transform -translate-y-16 translate-x-16">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full backdrop-blur-sm border border-blue-400/20 shadow-2xl shadow-blue-400/20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full">
              <div className="absolute inset-4 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full">
                <div className="absolute top-8 left-8 w-12 h-8 bg-green-400/30 rounded-full"></div>
                <div className="absolute bottom-12 right-12 w-16 h-10 bg-green-400/30 rounded-full"></div>
                <div className="absolute top-1/2 right-8 w-8 h-12 bg-green-400/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-yellow-400/60 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/60 rounded-full animate-pulse animation-delay-2000"></div>
    </div>
  );
};

export default FuturisticElements;
