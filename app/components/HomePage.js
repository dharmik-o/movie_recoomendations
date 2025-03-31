"use client ";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const callMovies = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

      const res = await fetch(url, { method: "GET" });
      const data = await res.json();

      setMovies(data.results.slice(0, 10));
    };
    callMovies();
  }, []);
  return (
    <div className="flex flex-col">
      <div className="h-screen flex flex-col items-center justify-center bg-black">
        <h1 className="text-5xl font-thin font-serif text-white">WELCOME</h1>
        <p className="text-[#f4f4f4]">
          Scroll down to find amazing movie reviews and watchlists
        </p>
      </div>
      <div className="bg-black m-2 p-2 bor">
        <h1 className="text-3xl mt-5 text-white">Movie Recommendations</h1>
        <div className="bg-white m-3 flex flex-col h-screen">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
