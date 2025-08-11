'use client';

import React from 'react';
import clsx from 'clsx';

const variants = {
  h1: 'text-4xl font-bold',
  h2: 'text-4xl lg:text-4xl font-bold text-primary-text mb-6',
  h3: 'text-[2rem] text-primary-text font-bold mb-4',
  h4: 'text-xl  text-white font-bold mb-2',
  h5: 'text-lg font-semibold text-gray-800 mb-1',
  h6:'text-xl font-semibold mb-2',
  p: 'text-base text-secondary-text leading-[1.6]',
  span: 'text-sm text-white',
};

export default function Text({ variant = 'p', className, children, ...props }) {
  const Component = variant; 

  return (
    <Component className={clsx(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
}
