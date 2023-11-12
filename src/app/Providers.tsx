'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
