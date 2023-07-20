import Button from '@mui/material/Button';
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';

const lngs: string[] = ['pl', 'en']
type LangKey = keyof typeof lngs;

const Switcher = styled.div`
  position: fixed; 
  left: 10px; 
  top: 10px;
`

const LangSwitcher = () => {
  const { t, i18n } = useTranslation()

  return (
    <Switcher>
      {lngs.map((lng, i) => (
        <Button sx={{fontWeight: 'bold'}} variant="contained" key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>
          {t(lng)}
        </Button>
      ))}
    </Switcher>
  );
};


export default LangSwitcher;