
import React from 'react';

export const CandlestickIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 6l0 5"></path>
    <path d="M7 6l0 8"></path>
    <path d="M12 4l0 16"></path>
    <path d="M15 8l0 4"></path>
    <path d="M18 6l0 8"></path>
    <rect x="2" y="11" width="4" height="5" rx="1"></rect>
    <rect x="10" y="8" width="4" height="8" rx="1"></rect>
    <rect x="16" y="14" width="4" height="4" rx="1"></rect>
  </svg>
);
