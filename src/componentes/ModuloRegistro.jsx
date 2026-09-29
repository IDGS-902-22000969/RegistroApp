import { useState } from 'react';
import { Container } from '@mui/material';

import Header from './Header';
import FormularioRegistro from './FormularioRegistro';
import BuscadorRegistros from './BuscadorRegistros';
import PanelFilasFijadas from './PanelFilasFijadas';
import TablaRegistros from './TablaRegistros';
import Footer from './Footer';

function ModuloRegistros() {

    const [registros, setRegistros] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [filasArriba, setFilasArriba] = useState([]);
    const [filasAbajo, setFilasAbajo] = useState([]);

    const agregarRegistro = (nuevoRegistro) => {
        setRegistros((registrosPrevios) => [
            ...registrosPrevios,
            nuevoRegistro
        ]);

    };

    const eliminarRegistro = (id) => {
        setRegistros((registrosPrevios) =>
            registrosPrevios.filter(
                (registro) => registro.id !== id
            )
        );
        setFilasArriba((filasPrevias) =>
            filasPrevias.filter(
                (filaId) => filaId !== id
            )
        );
        setFilasAbajo((filasPrevias) =>
            filasPrevias.filter(
                (filaId) => filaId !== id
            )
        );

    };

    const fijarArriba = (registro) => {
        setFilasAbajo((filasPrevias) =>
            filasPrevias.filter(
                (filaId) => filaId !== registro.id
            )
        );
        setFilasArriba((filasPrevias) => {
            if (filasPrevias.includes(registro.id)) {
                return filasPrevias;
            }
            return [
                ...filasPrevias,
                registro.id
            ];

        });

    };

    const fijarAbajo = (registro) => {
        setFilasArriba((filasPrevias) =>
            filasPrevias.filter(
                (filaId) => filaId !== registro.id
            )
        );
        setFilasAbajo((filasPrevias) => {
            if (filasPrevias.includes(registro.id)) {
                return filasPrevias;
            }
            return [
                ...filasPrevias,
                registro.id
            ];

        });

    };

    const textoBusqueda =
        busqueda.toLowerCase();
    const registrosFiltrados =
        registros.filter((registro) =>

            (registro.nombre || '')
                .toLowerCase()
                .includes(textoBusqueda)

            ||

            (registro.email || '')
                .toLowerCase()
                .includes(textoBusqueda)

        );

    const registrosArriba =
        filasArriba
            .map((id) =>
                registros.find(
                    (registro) => registro.id === id)
            )
            .filter(Boolean);
    const registrosAbajo =
        filasAbajo
            .map((id) =>
                registros.find(
                    (registro) => registro.id === id
                )
            )
            .filter(Boolean);
    return (
        <>
            <Header
                titulo="Módulo de Registros"
                totalRegistros={registros.length}
            />
            <Container maxWidth="md">
                <FormularioRegistro
                    onAgregar={agregarRegistro}
                />
                <BuscadorRegistros
                    busqueda={busqueda}
                    onBuscar={setBusqueda}
                />
                <PanelFilasFijadas
                    filasArriba={registrosArriba}
                    filasAbajo={registrosAbajo}
                />
                <TablaRegistros
                    registros={registrosFiltrados}
                    onEliminar={eliminarRegistro}
                    filasArriba={registrosArriba}
                    filasAbajo={registrosAbajo}
                    onFijarArriba={fijarArriba}
                    onFijarAbajo={fijarAbajo}
                />
                <Footer />
            </Container>
        </>
    );
}

export default ModuloRegistros;