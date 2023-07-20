import './App.css';
import { useTranslation } from 'react-i18next';
import LangSwitcher from './components/LangSwitcher'


function App() {
  const { t, i18n } = useTranslation()
  return (
    <div className="App">
      <header className="App-header">
        <LangSwitcher />
        <h1>{t('welcome')}</h1>
      </header>
    </div>
  );
}

export default App;
