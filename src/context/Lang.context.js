import { createContext, useState } from 'react'

export const Lang = createContext()

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('es')

  return <Lang.Provider value={{ lang, setLang }}>{children}</Lang.Provider>
}
export default LangProvider
