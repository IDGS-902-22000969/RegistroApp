import { Alert, Stack } from '@mui/material';

function PanelFilasFijadas({
    filasArriba,
    filasAbajo
}) {
    return (
        <Stack
            spacing={1}
            sx={{ mb: 2 }}>
            <Alert severity="info">
                Filas fijadas arriba: {filasArriba.length}
            </Alert>
            <Alert severity="success">
                Filas fijadas abajo: {filasAbajo.length}
            </Alert>
        </Stack>
    );
}

export default PanelFilasFijadas;
