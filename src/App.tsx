import { useState } from 'react'
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';

import { Grid } from '@mui/material';
import './App.css'
import SelectorUI from './components/SelectorUI';

import IndicatorUI from './components/IndicatorUI';
import useFetchData from './functions/useFetchData';

function App() {
  const [] = useState(0)
  const dataFetcherOutput = useFetchData();

  return (
    <div >
      <h1>Bienvenido al Dashboard</h1>

      <Grid container spacing={5} justifyContent="center" alignItems="center">

        {/* Encabezado */}
        <Grid size={{ xs: 12, md: 12 }} ><HeaderUI /> </Grid>

        {/* Alertas */}
        <Grid container justifyContent="right" alignItems="center"> <AlertUI description="No se preveen lluvias" /></Grid>

        {/* Selector */}
        <Grid size={{ xs: 12, md: 3 }}><SelectorUI /></Grid>

        {/* Indicadores */}
        <Grid container size={{ xs: 12, md: 9 }} >

          <Grid size={{ xs: 12, md: 3 }}>
            {dataFetcherOutput &&
              (<IndicatorUI
                title='Temperatura (2m)'
                description={`${dataFetcherOutput.current.temperature_2m} ${dataFetcherOutput.current_units.temperature_2m}`} />)
            }
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            {dataFetcherOutput &&
              (<IndicatorUI
                title='Temperatura Aparente'
                description={`${dataFetcherOutput.current.apparent_temperature} ${dataFetcherOutput.current_units.apparent_temperature}`} />)
            }
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            {dataFetcherOutput &&
              (<IndicatorUI
                title='Velocidad del Viento'
                description={`${dataFetcherOutput.current.wind_speed_10m} ${dataFetcherOutput.current_units.wind_speed_10m}`} />)
            }
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            {dataFetcherOutput &&
              (<IndicatorUI
                title='Humedad Relativa en %'
                description={`${dataFetcherOutput.current.relative_humidity_2m} ${dataFetcherOutput.current_units.relative_humidity_2m}`} />)
            }

          </Grid>
        </Grid>
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
