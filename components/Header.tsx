import React from 'react';
import { ChartPatternIcon } from './icons/ChartPatternIcon.tsx';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <div className="inline-flex items-center justify-center bg-slate-800 p-4 rounded-full mb-4">
          <ChartPatternIcon className="h-12 w-12 text-teal-400" />
      </div>
      <h1 className="text-4xl font-bold text-slate-100">Stock Market Tutor</h1>
      <p className="mt-2 text-lg text-slate-400">Your AI-powered guide to the world of trading.</p>
    </header>
  );
};

export default Header;