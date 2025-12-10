import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';
import { type OpenMeteoResponse } from "../types/DashboardTypes";

interface ChartProps {
    data: OpenMeteoResponse;
}

export default function ChartUI({ data }: ChartProps) {
    /*
    // Datos reales desde OpenMeteo
    const labels = data.hourly.time.slice(0, 10).map(time => {
        const date = new Date(time);
        return date.getHours().toString().padStart(2, '0') + ':00';
    });                // etiquetas (fechas/horas)
    const tempValues = data.hourly.temperature_2m.slice(0, 10);   // serie 1
    const windValues = data.hourly.wind_speed_10m.slice(0, 10);   // serie 2
*/
    // Tomar cada 3 horas (primeras 24 horas, ejemplo)
    const labels = data.hourly.time
        .slice(0, 24)        // tomar 24 horas
        .filter((_, index) => index % 3 === 0) // cada 3 horas
        .map(time => {
            const date = new Date(time);
            return date.getHours().toString().padStart(2, '0') + ':00';
        });

    const tempValues = data.hourly.temperature_2m
        .slice(0, 24)
        .filter((_, index) => index % 3 === 0);

    const windValues = data.hourly.wind_speed_10m
        .slice(0, 24)
        .filter((_, index) => index % 3 === 0);

    return (
        <>
            <Typography variant="h5" component="div">
                Temperatura y Velocidad del Viento (pronóstico por hora)
            </Typography>

            <LineChart
                height={300}
                xAxis={[{ scaleType: "point", data: labels }]}
                series={[
                    { data: tempValues, label: "Temperatura (°C)" },
                    { data: windValues, label: "Viento (m/s)" },
                ]}
            />
        </>
    );
}