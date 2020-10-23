import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faEnvelope,
  faMapMarked,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

// Foto
import Foto1 from "../../../Assets/contact/workspace.jpg";
// import Foto2 from "../../../Assets/about-foto/Gaun jawa 3.png";
// import Foto3 from "../../../Assets/about-foto/Gaun jawa 4.png";
// import Foto4 from "../../../Assets/about-foto/Gaun jawa 5.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Grid: {
    justifyContent: "center",
  },
  itemGrid: {
    color: "#555555",
    fontFamily: "Mulish",
    fontSize: 30,
    fontWeight: 900,
    marginTop: "1rem",
  },
  itemGrid2: {
    fontSize: 26,
    fontWeight: 700,
  },
  itemGrid3: {
    fontSize: 19,
  },
  itemGrid4: {
    fontSize: 26,
    fontWeight: 900,
  },
}));

export default function Item() {
  const classes = useStyles();

  return (
    <div className="root">
      <Grid container style={{ marginLeft: "3rem" }}>
        <Grid sm={6}>
          <Grid
            item
            xs={6}
            sm={12}
            className={classes.Grid}
            style={{ marginTop: "2rem" }}
          >
            <img src={Foto1} alt="gaun jawa 1" />
          </Grid>
          {/* <Grid container spacing={2} className={classes.Grid}>
            <Grid item xs={6} sm={3}>
              <img src={Foto2} alt="gaun jawa 2" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img src={Foto3} alt="gaun jawa 3" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img src={Foto4} alt="gaun jawa 4" />
            </Grid>
          </Grid> */}
        </Grid>
        <Grid
          sm={4}
          container
          style={{ marginTop: "1rem", marginLeft: "3rem" }}
          className={classes.itemGrid}
        >
          <Grid spacing={2}>
            <Grid style={{ textAlign: "left" }}>
              <Typography
                gutterBottom
                variant="subtitle1"
                className={classes.itemGrid3}
                style={{ marginTop: "3rem" }}
              >
                <FontAwesomeIcon
                  icon={faMapMarked}
                  className={classes.itemGrid}
                />
                &nbsp; Building Office 3 Jakarta, Indonesia
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.itemGrid3}
                style={{ marginTop: "2rem" }}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={classes.itemGrid}
                />
                &nbsp; Wearel@gmail.com
              </Typography>
              <Typography
                variant="body2"
                className={classes.itemGrid3}
                style={{ marginTop: "2rem" }}
              >
                <FontAwesomeIcon icon={faMobile} className={classes.itemGrid} />
                &nbsp; +62858489433
              </Typography>
              <Typography
                variant="body2"
                className={classes.itemGrid3}
                style={{ marginTop: "2rem" }}
              >
                <FontAwesomeIcon icon={faPhone} className={classes.itemGrid} />
                &nbsp; (0286) 394843
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}