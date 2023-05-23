import React from 'react';

import {
  ProductOverview,
  Navigation,
  Container,
} from './components/ExportComponents';

function App() {
  return (
    <Container>
      <Navigation />
      <ProductOverview />
    </Container>
  );
}

export default App;
