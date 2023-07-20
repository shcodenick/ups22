import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
 

const lngs = {
  en: { nativeName: 'English' },
  pl: { nativeName: 'Polski' }
};
type LangKey = keyof typeof lngs;


function App() {
  const { t, i18n } = useTranslation()
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {Object.keys(lngs).map((lng) => (
            <Button variant="contained" key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{ lngs[lng as LangKey].nativeName }</Button>
          ))}
        </div>
        <h1>
          {t('welcome')}
        </h1>
      </header>
    </div>
  );
}

export default App;
