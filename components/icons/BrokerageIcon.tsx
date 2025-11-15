
import React from 'react';

export const BrokerageIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 21l18 0"></path>
    <path d="M3 10l18 0"></path>
    <path d="M5 6l14 0"></path>
    <path d="M4 10l0 11"></path>
    <path d="M20 10l0 11"></path>
    <path d="M8 14l0 3"></path>
    <path d="M12 14l0 3"></path>
    <path d="M16 14l0 3"></path>
    <path d="M12 6l-2 -4l-2 4"></path>
    <path d="M12 6l2 -4l2 4"></path>
  </svg>
);
