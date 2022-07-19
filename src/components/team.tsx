import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material"

export const Team = () => {
    return (
        <><Typography variant="h3">
            Meet the Team
        </Typography><Stack direction='row'>
                <Card sx={{ maxWidth: 350 }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={require('../avatars/john.jpg')}
                        alt="john" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            John Mah - Developer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Responsible for data procurement, data visualizations, and
                            end-to-end product delivery.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            href="https://www.linkedin.com/in/johnathansmah/">
                            LinkedIn
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 350 }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={require('../avatars/cody.png')}
                        alt="cody" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Cody Burker - Developer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Responsible for data visualizations.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            href="https://www.linkedin.com/in/cody-burker/">
                            LinkedIn
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 350 }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={require('../avatars/margo.png')}
                        alt="margo" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Margo Suryanaga - Developer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Responsible for data visualizations.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            href="https://www.linkedin.com/in/margo-suryanaga/">
                            LinkedIn
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 350 }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={require('../avatars/rishika.jpg')}
                        alt="rishika" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Rishika Pulvender - Developer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Responsible for data visualizations.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            href="https://www.linkedin.com/in/rishika-p-ab900a9b/">
                            LinkedIn
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 350 }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={require('../avatars/robert.jpg')}
                        alt="robert" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Robert Turnage - Developer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Responsible for data visualizations.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            href="https://www.linkedin.com/in/turnagerobert/">
                            LinkedIn
                        </Button>
                    </CardActions>
                </Card>
            </Stack></>    
    )
}