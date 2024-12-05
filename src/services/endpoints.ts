import { categoryData } from "../mocks/data";
import { ICategory, IDetailMovie, IMovies } from "../utils/models";
import { keys } from "../utils/storage";
import axios from "axios";

const getMovies: () => Promise<IMovies> = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      api_key: "f7218bfa940e99e8e8d8a839445a68d8",
      include_adult: "false",
      include_video: "true",
      language: "es-CO",
      page: "1",
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzIxOGJmYTk0MGU5OWU4ZThkOGE4Mzk0NDVhNjhkOCIsInN1YiI6IjY1ZWUzMDkyMWJmODc2MDE4NTc3NTc2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CS0QrTebkBH1K4S8buLr5KSrQm-LwX_gSwuJ0IfYb7Y",
    },
  };

  const response = await axios.request(options);
  return response.data;
};

const getMovie: (url: string) => Promise<IDetailMovie> = async (
  url: string
) => {
  const options = {
    method: "GET",
    url: url,
    params: {
      api_key: "f7218bfa940e99e8e8d8a839445a68d8",
      append_to_response: "videos",
      language: "es-CO",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzIxOGJmYTk0MGU5OWU4ZThkOGE4Mzk0NDVhNjhkOCIsInN1YiI6IjY1ZWUzMDkyMWJmODc2MDE4NTc3NTc2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CS0QrTebkBH1K4S8buLr5KSrQm-LwX_gSwuJ0IfYb7Y",
    },
  };
  const response = await axios.request(options);
  return response.data;
};

const auth = {
  email: "codegods@codegods.com",
  fullname: "codegods",
  password: "codegods",
  jwt: "",
  username: "codegods",
};

const deleteAuth = () => {
  window.localStorage.removeItem(keys.auth);
};

const setAuth = ({ email, password }: { email: string; password: string }) => {
  if (email === auth.email && password === auth.password) {
    window.localStorage.setItem(keys.auth, JSON.stringify(auth));
    return true;
  } else return false;
};

const getAuth = () => {
  if (window.localStorage.getItem(keys.auth) !== undefined)
    return JSON.parse(window.localStorage.getItem(keys.auth) ?? "");
  else return undefined;
};

const signInWithEmailAndPassword = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = setAuth({ email, password });
      resolve(response);
    }, 1000);
  });
};

const signOut = () => {
  deleteAuth();
};

const getCategories: () => Promise<ICategory[]> = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categoryData);
    }, 1000);
  });
};
export const api = {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  getCategories,
  getMovies,
  getMovie,
};
