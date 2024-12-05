import {
  Dialog,
  DialogContent,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useMovie } from "../hooks/useMovie";

export default function DetailCategory({
  id,
  open,
  handleClose,
}: {
  id: number;
  open: boolean;
  handleClose: () => void;
}) {
  const { movie, isLoading } = useMovie(id);
  const hasVideos = movie?.videos.results && movie.videos.results.length > 0;
  console.log(isLoading ? "" : movie);
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
      {isLoading ? (
        <LinearProgress />
      ) : (
        <DialogContent style={{ position: "relative", height: "500px" }}>
          {hasVideos && (
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?autoplay=1&loop=1&controls=0&mute=0`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
          {/* Si no hay videos, muestra la imagen de la película */}
          {!hasVideos && (
            <img
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt={movie?.title}
            />
          )}
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "10%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h6" color={"white"}>
              {movie?.title}
            </Typography>
            <Typography variant="body1" color={"white"}>
              {movie?.overview}
            </Typography>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
