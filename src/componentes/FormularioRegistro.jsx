import { useState } from 'react';
import {Box,TextField,Button,Alert} from '@mui/material';

function FormularioRegistro({ onAgregar }) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [error, setError] = useState('');

    const limpiarFormulario = () => {
        setNombre('');
        setEmail('');
        setEdad('');
    };

    const validarCampos = () => {
        const campos = [
            {valor: nombre,etiqueta: 'Nombre' },
            {valor: email,etiqueta: 'Email' },
            {valor: edad,etiqueta: 'Edad'}
        ];

        let mensaje = '';
        campos.forEach((campo) => {
            if (
                !campo.valor.trim() &&
                !mensaje
            ) { mensaje =`El campo ${campo.etiqueta} es obligatorio`; }
        });
        return mensaje;
    };

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        const mensajeError =
            validarCampos();
        if (mensajeError) {
            setError(mensajeError);
            return;
        }
        const nuevoRegistro = {
            id: `reg-${Date.now()}`,nombre, email, edad };
        onAgregar(nuevoRegistro);
        setError('');
        limpiarFormulario();
    };

    return (
        <Box
            component="form"
            onSubmit={manejarEnvio}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                mb: 3
            }} >
            {error && (
                <Alert severity="error">
                    {error}
                </Alert>
            )}
            <TextField
                label="Nombre"
                value={nombre}
                onChange={(evento) =>
                    setNombre(evento.target.value)
                }
                fullWidth />

            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(evento) =>
                    setEmail(evento.target.value)
                }
                fullWidth />

            <TextField
                label="Edad"
                type="number"
                value={edad}
                onChange={(evento) =>
                    setEdad(evento.target.value)
                }
                fullWidth />

            <Button
                type="submit"
                variant="contained" >
                Agregar registro
            </Button>
        </Box>
    );
}
export default FormularioRegistro;