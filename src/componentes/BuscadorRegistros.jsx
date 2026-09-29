import { TextField } from '@mui/material';

function BuscadorRegistros({
    busqueda,
    onBuscar
}) {

    return (
        <TextField
            fullWidth
            label="Buscar registro"
            placeholder="Buscar por nombre o email..."
            value={busqueda}
            onChange={(evento) =>
                onBuscar(evento.target.value)
            }
            sx={{  mb: 2 }}
        />
    );
}

export default BuscadorRegistros;