import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';
import useFetchData from "../functions/useFetchData";

export default function ChartUI() {

    const { data, loading, error } = useFetchData();

    if (loading) return <p>Cargando gráfico...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return null;


    // Filtrar los primeros 10 puntos
    const labels = data.hourly.time.slice(0, 10);                // Primeras 10 horas
    const temps = data.hourly.temperature_2m.slice(0, 10);        // Primeras 10 temperaturas
    const winds = data.hourly.wind_speed_10m.slice(0, 10);        // Primeros 10 valores de viento

    return (
        <>
            <Typography variant="h5" component="div">
                Temperatura vs Velocidad del viento
            </Typography>

            <LineChart
                height={300}
                series={[
                    { data: temps, label: 'Temperatura (°C)', color: 'red' },
                    { data: winds, label: 'Viento (km/h)', color: 'blue' },
                ]}
                xAxis={[{ scaleType: 'point', data: labels }]}
            />
        </>
    );
}
