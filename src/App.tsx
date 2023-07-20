import './App.css';
import { useTranslation } from 'react-i18next';
import LangSwitcher from './components/LangSwitcher'
import Pig from './components/Pig';

function App() {
  const { t } = useTranslation()
  return (
    <div className="App">
      <header className="App-header">
        <LangSwitcher />
        <Pig />
        <h4>{t('welcome')}</h4>
      </header>
    </div>
  );
}

export default App;
