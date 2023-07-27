import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';

import Content from './components/Content';
import TopBar from './components/TopBar';


function App() {
  const { t } = useTranslation()
  return (
    <div className="App">
      <TopBar />
      <div>  
        <h4>{t('welcome')}</h4>
        <Content />
      </div>
    </div>
  );
}

export default App;
