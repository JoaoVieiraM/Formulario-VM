
import React from 'react';

interface Props {
  className?: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const CircuitDecoration: React.FC<Props> = ({ className = '', position }) => {
  const isTop = position.startsWith('top');
  const isLeft = position.endsWith('left');

  return (
    <div className={`absolute pointer-events-none opacity-20 ${isTop ? 'top-0' : 'bottom-0'} ${isLeft ? 'left-0' : 'right-0'} ${className}`}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10H40V40H10V10Z" stroke="#00FF00" strokeWidth="1"/>
        <path d="M40 25H110" stroke="#00FF00" strokeWidth="1" strokeDasharray="4 4"/>
        <path d="M25 40V110" stroke="#00FF00" strokeWidth="1" strokeDasharray="4 4"/>
        <circle cx="110" cy="25" r="3" fill="#00FF00"/>
        <circle cx="25" cy="110" r="3" fill="#00FF00"/>
        <path d="M40 40L80 80" stroke="#00FF00" strokeWidth="0.5"/>
      </svg>
    </div>
  );
};
