import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { useTranslation } from 'react-i18next';

import Content from './components/Content';
import TopBar from './components/TopBar';

const queryClient = new QueryClient();

function App() {
  const { t } = useTranslation();
  

  return (
  <QueryClientProvider client={queryClient}>
    <div className="App">
      
        <TopBar />
        <div>
          <Content />
        </div>
      
    </div>
    </QueryClientProvider>
  );
}

export default App;
