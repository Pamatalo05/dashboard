import { useState } from "react";
import { CohereClient } from "cohere-ai";
import { Button, Typography } from "@mui/material";


interface CohereAssistantUIProps {
    temperature: number;
    humidity: number;
    windSpeed: number;
}

const cohere = new CohereClient({
    token: import.meta.env.VITE_COHERE_API_KEY,
});

let lastCallTime = 0;
const CALL_INTERVAL = 5000; // 5 segundos

const CohereAssistantUI = ({
    temperature,
    humidity,
    windSpeed,
}: CohereAssistantUIProps) => {
    const [response, setResponse] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleAskAssistant = async () => {
        const now = Date.now();

        // ⏱ Control de límite de llamadas
        if (now - lastCallTime < CALL_INTERVAL) {
            setError("Espere unos segundos antes de realizar otra consulta.");
            return;
        }

        lastCallTime = now;
        setError("");

        try {
            const prompt = `
        Temperatura actual: ${temperature} °C
        Humedad relativa: ${humidity} %
        Velocidad del viento: ${windSpeed} km/h

        Describe el clima de forma clara para un usuario común.
      `;

            const chatResponse = await cohere.chat({
                model: "command-r",
                message: prompt,
            });

            setResponse(chatResponse.text || "No se obtuvo respuesta del asistente.");
        } catch (err) {
            console.error(err);

            setResponse(
                "Según los datos actuales, el clima es moderado. Se recomienda vestir ropa ligera y mantenerse hidratado."
            );

            setError(
                "Respuesta simulada (la API de Cohere requiere backend por seguridad)."
            );
        }

    };

    return (
        <div>
            <Button variant="contained" onClick={handleAskAssistant}>
                Consultar asistente climático
            </Button>

            {response && (
                <Typography sx={{ mt: 2 }}>
                    {response}
                </Typography>
            )}

            {error && (
                <Typography color="error" sx={{ mt: 2 }}>
                    {error}
                </Typography>
            )}
        </div>
    );
};

export default CohereAssistantUI;
