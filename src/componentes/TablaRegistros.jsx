
import DeleteIcon from '@mui/icons-material/Delete';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';

import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

function TablaRegistros({
    registros,
    onEliminar,
    filasArriba = [],
    filasAbajo = [],
    onFijarArriba,
    onFijarAbajo
}) {
    const registrosNormales = registros.filter(
        (registro) =>
            !filasArriba.some(
                (fila) => fila.id === registro.id
            ) &&
            !filasAbajo.some(
                (fila) => fila.id === registro.id
            )
    );

    const crearFila = (
        registro,
        indice,
        fijada = false
    ) => (

        <TableRow key={registro.id}>
            <TableCell>
                {indice + 1}
            </TableCell>
            <TableCell>
                {registro.nombre}
            </TableCell>
            <TableCell>
                {registro.email}
            </TableCell>
            <TableCell>
                {registro.edad}
            </TableCell>
            <TableCell>
                <Stack
                    direction="row"
                    spacing={1}>
                    {!fijada && (
                        <>
                            {/* FIJAR ARRIBA */}
                            <IconButton
                                size="small"
                                color="primary"
                                onClick={() =>
                                    onFijarArriba(registro)
                                }
                                aria-label="Fijar arriba"
                            >
                                <VerticalAlignTopIcon />
                            </IconButton>

                            {/* FIJAR ABAJO */}
                            <IconButton
                                size="small"
                                color="primary"
                                onClick={() =>
                                    onFijarAbajo(registro)
                                }
                                aria-label="Fijar abajo"
                            >
                                <VerticalAlignBottomIcon />
                            </IconButton>
                        </>
                    )}

                    {/* ELIMINAR */}
                    <IconButton
                        size="small"
                        color="error"
                        onClick={() =>
                            onEliminar(registro.id)
                        }
                        aria-label="Eliminar registro"
                    >
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            </TableCell>
        </TableRow>
    );

    return (
        <TableContainer
            component={Paper}
            elevation={2}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            #
                        </TableCell>
                        <TableCell>
                            Nombre
                        </TableCell>
                        <TableCell>
                            Email
                        </TableCell>
                        <TableCell>
                            Edad
                        </TableCell>
                        <TableCell>
                            Acciones
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* FIJADOS ARRIBA */}
                    {filasArriba
                        .filter((registro) =>
                            registros.some(
                                (r) => r.id === registro.id
                            )
                        )
                        .map((registro, indice) =>
                            crearFila(
                                registro,
                                indice,
                                true
                            )
                        )}

                    {/* REGISTROS NORMALES */}
                    {registrosNormales.length > 0 ? (

                        registrosNormales.map(
                            (registro, indice) =>
                                crearFila(
                                    registro,
                                    indice,
                                    false
                                )
                        )

                    ) : (

                        filasArriba.length === 0 &&
                        filasAbajo.length === 0 && (

                            <TableRow>

                                <TableCell
                                    colSpan={5}
                                >
                                    <Typography>
                                        Aún no hay registros
                                    </Typography>
                                </TableCell>

                            </TableRow>

                        )
                    )}

                    {/* FIJADOS ABAJO */}
                    {filasAbajo
                        .filter((registro) =>
                            registros.some(
                                (r) => r.id === registro.id
                            )
                        )
                        .map((registro, indice) =>
                            crearFila(
                                registro,
                                indice,
                                true
                            )
                        )}

                </TableBody>

            </Table>

        </TableContainer>
    );
}

export default TablaRegistros;
