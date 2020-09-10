import React from 'react';

import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div>
      <Header />
      <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;
