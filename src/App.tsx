import { useState } from 'react'
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';

import { Grid } from '@mui/material';
import './App.css'

function App() {
  const [] = useState(0)

  return (
    <div >
      <h1>Bienvenido al Dashboard</h1>

      <Grid container spacing={5} justifyContent="center" alignItems="center">

      {/* Encabezado */}
      <Grid size={{ xs: 12, md: 12 }} ><HeaderUI /> </Grid>

      {/* Alertas */}
      <Grid container justifyContent="right" alignItems="center"> <AlertUI description="No se preveen lluvias"/></Grid>

      {/* Selector */}
      <Grid size={{ xs: 12, md: 3 }}>Elemento: Selector</Grid>

      {/* Indicadores */}
      <Grid size={{ xs: 12, md: 9 }}>Elemento: Indicadores</Grid>

      {/* Gráfico */}
      <Grid
        sx={{ display: { xs: "none", md: "block" } }} >
        Elemento: Gráfico
      </Grid>

      {/* Tabla */}
      <Grid
        sx={{ display: { xs: "none", md: "block" } }}>
        Elemento: Tabla
      </Grid>

      {/* Información adicional */}
      <Grid>Elemento: Información adicional</Grid>

    </Grid>
    </div >
  )
}

export default App
