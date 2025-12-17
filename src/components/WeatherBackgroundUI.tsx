import { useMemo } from "react";

interface WeatherBackgroundUIProps {
    temperature: number;
    humidity: number;
}

const WeatherBackgroundUI = ({
    temperature,
    humidity,
}: WeatherBackgroundUIProps) => {
    const videoSrc = useMemo(() => {
        const hour = new Date().getHours();
        const isNight = hour >= 18 || hour < 6;

        const isRainy = humidity >= 80;
        const isSunny = temperature >= 28 && humidity < 70;

        if (isNight) {
            return isRainy
                ? "/videos/night_rain.mp4"
                : "/videos/night_clear.mp4";
        }

        return isSunny
            ? "/videos/day_sunny.mp4"
            : "/videos/day_cloudy.mp4";
    }, [temperature, humidity]);

    return (
        <div className="weather-bg">
            <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
            />
            <div className="overlay" />
        </div>
    );
};

export default WeatherBackgroundUI;
