import React, { useTransition } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
 

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
            <button key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{ lngs[lng as LangKey].nativeName }</button>
          ))}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('welcome')}
        </a>
      </header>
    </div>
  );
}

export default App;
