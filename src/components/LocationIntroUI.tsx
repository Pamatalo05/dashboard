import { Typography } from "@mui/material";

interface LocationIntroUIProps {
  city: string | null;
}

const cityDescriptions: Record<string, string> = {
  cuenca: "Patrimonio Cultural de la Humanidad",
  guayaquil: "La Perla del Pacífico",
  quito: "Capital del Ecuador y ciudad del medio del mundo",
  manta: "Ciudad portuaria y turística",
};

const normalize = (value: string) =>
  value.toLowerCase().trim();

const LocationIntroUI = ({ city }: LocationIntroUIProps) => {
  if (!city) {
    return (
      <Typography
        variant="h6"
        sx={{ textAlign: "center", mb: 3, opacity: 0.7 }}
      >
        Seleccione una ciudad para ver la información
      </Typography>
    );
  }

  const key = normalize(city);
  const description =
    cityDescriptions[key] ?? "una ciudad llena de historia";

  return (
    <Typography
      variant="h5"
      sx={{
        textAlign: "center",
        fontWeight: 500,
        mb: 3,
        animation: "fadeIn 1s ease-in",
      }}
    >
      Estás en la ciudad de <strong>{city}</strong>, {description}.
    </Typography>
  );
};

export default LocationIntroUI;
