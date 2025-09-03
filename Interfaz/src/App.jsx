import React from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => i18n.changeLanguage('es')}>Español</button>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('pt')}>Português</button>
    </div>
  )
}

export default App
