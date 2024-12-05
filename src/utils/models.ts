export interface ICategory {
  id: string;
  name: string;
  type: string;
}
export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovies {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

interface IVideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}
export interface IDetailMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string | null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Record<string, string>[];
  production_countries: Record<string, string>[][];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Record<string, string>[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: { results: IVideo[] }; 
  vote_average: number;
  vote_count: number;
}
