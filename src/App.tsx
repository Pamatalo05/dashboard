import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Grid } from '@mui/material';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>

      <Grid>

        {/* Encabezado */}
        <Grid>Elemento: Encabezado</Grid>

        {/* Alertas */}
        <Grid>Elemento: Alertas</Grid>

        {/* Selector */}
        <Grid>Elemento: Selector</Grid>

        {/* Indicadores */}
        <Grid>Elemento: Indicadores</Grid>

        {/* Gráfico */}
        <Grid>Elemento: Gráfico</Grid>

        {/* Tabla */}
        <Grid>Elemento: Tabla</Grid>

        {/* Información adicional */}
        <Grid>Elemento: Información adicional</Grid>

      </Grid>
    </div>
  )
}

export default App
