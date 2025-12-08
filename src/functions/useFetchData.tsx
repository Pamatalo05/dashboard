import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

export default function useFetchData() {

    const URL =
      "https://api.open-meteo.com/v1/forecast?latitude=-0.9494&longitude=-80.7314&hourly=temperature_2m,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&timezone=auto";

    const [data, setData] = useState<OpenMeteoResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(URL);
                if (!res.ok) throw new Error("Error al cargar datos");

                const json: OpenMeteoResponse = await res.json();
                setData(json);

            } catch (err: any) {
                setError(err.message);

            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { data, loading, error };
}
