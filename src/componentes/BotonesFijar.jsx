import { Button, Stack } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';

function BotonesFijar({ registro, onFijarArriba, onFijarAbajo }) {
    return (
        <Stack direction="row" spacing={1}>
            <Button
                size="small"
                variant="outlined"
                startIcon={<VerticalAlignTopIcon />}
                onClick={() => onFijarArriba(registro)}
            >
                Arriba
            </Button>

            <Button
                size="small"
                variant="outlined"
                startIcon={<VerticalAlignBottomIcon />}
                onClick={() => onFijarAbajo(registro)}
            >
                Abajo
            </Button>
        </Stack>
    );
}

export default BotonesFijar;

