
import React from 'react';

export const ChartPatternIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 18l3.5 -3.5l2.5 2.5l2 -2l2.5 2.5l3.5 -3.5"></path>
    <path d="M4 6l3.5 3.5l2.5 -2.5l2 2l2.5 -2.5l3.5 3.5"></path>
    <path d="M4 12h16"></path>
  </svg>
);
