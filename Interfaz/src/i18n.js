import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Café Cata Platform",
      description: "Taste, evaluate and connect producers, roasters and buyers."
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido a la Plataforma de Cata de Café",
      description: "Prueba, evalúa y conecta productores, tostadores y compradores."
    }
  },
  pt: {
    translation: {
      welcome: "Bem-vindo à Plataforma de Prova de Café",
      description: "Prove, avalie e conecte produtores, torrefadores e compradores."
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: { escapeValue: false }
})

export default i18n
