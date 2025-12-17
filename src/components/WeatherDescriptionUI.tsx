interface WeatherDescriptionUIProps {
    temperature: number;
    humidity: number;
}

const WeatherDescriptionUI = ({
    temperature,
    humidity,
}: WeatherDescriptionUIProps) => {

    const describeWeather = (): string => {
        if (temperature > 30 && humidity < 60) return "caluroso y seco";
        if (temperature > 30 && humidity >= 60) return "caluroso y húmedo";
        if (temperature > 20) return "templado";
        return "fresco";
    };

    return (
        <div>
            En la Ciudad seleccionada el clima es{" "}
            <strong>{describeWeather()}</strong>.
        </div>
    );
};

export default WeatherDescriptionUI;
