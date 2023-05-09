import React from "react";

import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";

import { PhotoCamera } from "@mui/icons-material";
import "./styles.css";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  return (
    <>
      <CssBaseline>
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera injectfirst className="icon" />
            <Typography variant="h6"> Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className="haut">
            <Container maxWidth="md">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Album Photo Template
              </Typography>

              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
                Salut tout le monde, vous pour éditer ici, le descriptif de
                votre application de photo. Ceci est juste un template pour
                l'aspect front-end réalisé à l'aide de Material UI et React.
              </Typography>
              <div className="bas">
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      {" "}
                      Regarder mes photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        window.open(
                          "https://github.com/brunoCo-de/material-ui-project"
                        )
                      }
                    >
                      {" "}
                      DEPÔT GITHUB
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container maxWidth="md" injectfirst className="cardGrid">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card injectfirst className="card">
                    <CardMedia
                      image="https://source.unsplash.com/featured/300x201"
                      title="Image randon"
                      injectfirst
                      className="cardMedia"
                    ></CardMedia>
                    <CardContent injectfirst className="cardContent">
                      <Typography gutterBottom variant="h6">
                        Entête
                      </Typography>
                      <Typography gutterBottom variant="h7" injectfirst>
                        Ceci est une carte d'explication.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Visualiser
                      </Button>
                      <Button size="small" color="primary">
                        Editer
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <footer>
          <Typography variant="h5" align="center" gutterBottom>
            Pied de page
          </Typography>
          <Typography variant="subtitle1" align="center" color="text-secondary">
            {" "}
            Vous pouvez ajouter les éléments qui vous intéresse à cet endroit.
          </Typography>
          <Typography variant="subtitle1" align="center" color="text-secondary">
            {" "}
            brunoCo_De @
          </Typography>
        </footer>
      </CssBaseline>
    </>
  );
};

export default App;
