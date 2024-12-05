import { Box, Grid, LinearProgress } from "@mui/material";
import { useMovies } from "../hooks/useMovies";
import { useState } from "react";
import DetailCategory from "./DetailCategory";

export default function ContentCategory() {
  const { movies, isLoading } = useMovies();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  return isLoading ? (
    <LinearProgress />
  ) : (
    <>
      <Grid container spacing={2}>
        {movies?.results.map((movie) => (
          <Grid item key={movie.id} xs={6} sm={4} md={3} lg={2}>
            <Box
              onClick={() => {
                setOpen(true);
                setId(movie.id);
              }}
            >
              <img
                src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                alt={movie.title}
                height={500}
                width={"100%"}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      <DetailCategory id={id} open={open} handleClose={handleClose} />
    </>
  );
}
