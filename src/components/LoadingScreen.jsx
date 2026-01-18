import React from 'react';

const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <div className="text-white text-xl font-medium">Loading...</div>
    </div>
  </div>
);

export default LoadingScreen;