import React from 'react';

import { Container } from './styles';

interface Tooltip {
  title: string;
}

const Tooltip: React.FC = ({ title, children }) => {
  return (
    <Container>
      {children}
      <span>{title}</span>
    </Container>
  )
}

export default Tooltip;
