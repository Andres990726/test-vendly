import { Grid } from "@mui/material";
import { useCategories } from "../hooks/useCatergories";
import CardCategory from "../componentes/CardCategory";
import { api } from "../services/endpoints";
import { keys } from "../utils/storage";
import useSWR from "swr";

export default function Home() {
  const { categories } = useCategories();
  const { data, isLoading } = useSWR(keys.movies, api.getMovies);
  console.log(isLoading ? "" : data);
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center" // Alineación horizontal en el centro
    >
      {categories?.map((category, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
          <CardCategory name={category.name} type={category.type} />
        </Grid>
      ))}
    </Grid>
  );
}
