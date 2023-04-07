import { CssBaseline } from '@mui/material'
import './App.css'
import { BaseLayout } from './BaseLayout'
import { Main } from './Main/Index'



function App() {
  return (
    <>
    <CssBaseline/>
      <BaseLayout title={'LOCALIZADOR DE PERFIS'}/>
      <Main title={'LOCALIZAR PERFIL'}/>
    </>
  )
}

export default App
