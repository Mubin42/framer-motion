import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Flex
      bgColor='gray.400'
      h='100vh'
      w='100vw'
      justify='center'
      align='center'
    >
      {children}
    </Flex>
  );
};

export default PageLayout;
