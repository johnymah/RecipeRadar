import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material"

export const MuiNavbar = () => {
    return (
        <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component='div' style={{ flex: 1 }}>
                        Recipe Radar
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button 
                        color='inherit'
                        href="../chart.html">
                        Home
                        </Button>
                        <Button color='inherit'>Flavor Profiles</Button>
                        <Button color='inherit'>Nutrition</Button>
                        <Button color='inherit'>Ingredients</Button>
                        <Button color='inherit'>Meet the Team</Button>
                    </Stack>
                </Toolbar>
        </AppBar>
    )
}