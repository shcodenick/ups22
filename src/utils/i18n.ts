import i18next from 'i18next'
import { initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector'

import { en } from '../translations/en';
import { pl } from '../translations/pl';

i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
    fallbackLng: "en",
    resources: {
        en,
        pl
    }
})