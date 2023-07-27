import React from 'react'
import Button from '@mui/material/Button';
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next';
import { translations } from '../translations/index'


const Switcher = styled.div`
float: right;
margin: 20px;
`

const LangSwitcher = () => {
  const { t, i18n } = useTranslation()

  return (
    <Switcher>
      {Object.keys(translations).map((lng, i) => (
        <Button sx={{fontWeight: 'bold'}} variant="contained" key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>
          {t(`lngSwitchButton.${lng}`)}
        </Button>
      ))}
    </Switcher>
  );
};


export default LangSwitcher;