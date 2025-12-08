import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import useFetchData from "../functions/useFetchData";

// Función para combinar los tres arrays en un solo arreglo de objetos
function combineArrays(arrLabels: string[], arrValues1: number[], arrValues2: number[]): { id: number, label: string, value1: number, value2: number }[] {
   return arrLabels.map((label, index) => ({
      id: index,  // Usamos el índice como ID único para cada fila
      label,      // Label de la posición actual
      value1: arrValues1[index],  // Valor de arrValues1 en el índice actual
      value2: arrValues2[index],  // Valor de arrValues2 en el índice actual
   }));
}

// Definir las columnas para la tabla
const columns: GridColDef[] = [
   { field: 'id', headerName: 'ID', width: 80 },
   { field: 'label', headerName: 'Hora', width: 200 },
   { field: 'value1', headerName: 'Temperatura (°C)', width: 150 },
   { field: 'value2', headerName: 'Viento (Km/h)', width: 150 },
   {
      field: 'resumen',
      headerName: 'Resumen',
      description: 'No es posible ordenar u ocultar esta columna.',
      sortable: false,
      hideable: false,
      width: 200,
      // Actualizamos el valueGetter para que use `label`, `value1` y `value2`
      valueGetter: (_, row) => `${row.label || ''} - Temp: ${row.value1 || ''}°C, Viento: ${row.value2 || ''} km/h`,
   },
];

export default function TableUI() {

   const { data, loading, error } = useFetchData();

   if (loading) return <p>Cargando tabla...</p>;
   if (error) return <p>Error: {error}</p>;
   if (!data) return null;

   // Filtrar las primeras 10 filas
   const rows = combineArrays(
      data.hourly.time.slice(0, 10), 
      data.hourly.temperature_2m.slice(0, 10), 
      data.hourly.wind_speed_10m.slice(0, 10)
   );

   return (
      <Box sx={{ height: 350, width: '100%' }}>
         <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 5,
                  },
               },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
         />
      </Box>
   );
}
