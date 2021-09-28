import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Title from "../Title";

export default function FavouriteItem({ coins }) {
  return (
    // <div className="fav-items">
    <>
      {coins &&
        coins.map((obj, i) => {
          return (
            <Grid item xs={12} md={4} lg={2} key={Object.keys(obj)}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                  <Title>Favourite Coins</Title>
                  <Typography component="p" variant="h6">
                    {Object.keys(obj).toString().toUpperCase()}
                  </Typography>
                  <Typography color="text.secondary" sx={{ flex: 1 }}>
                    {`${Object.values(obj)} CAD` }
                  </Typography>
                  <Link
                    to={{ pathname: `/coin/${Object.keys(obj).join("")}` }}
                    key={i}
                  >
                    More Details
                  </Link>
              </Paper>
            </Grid>
          );
        })}
        </>
    // </div>
  );
}
