import { AppBar, Toolbar, Typography } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';

function Header({ titulo, totalRegistros }) {
    return (
        <AppBar position="static" sx={{ mb: 3 }}>
            <Toolbar>
                <AddReactionIcon sx={{ mr: 1 }} />
                <Typography variant="h3" sx={{ flexGrow: 1 }}>
                    {`${titulo} - ${totalRegistros} registros :D`}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;