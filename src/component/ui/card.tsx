'use client';

import * as React from 'react';

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      {children}
    </div>
  );
};
export default Card;
