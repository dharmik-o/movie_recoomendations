"use client";
export default function MovieCard({ movie }) {
  const { original_title, release_date, title, poster_path, overview } = movie;
  return (
    <div className="flex flex-row h-[350px]">
      <img
        className="h-[250px] w-[250px] object-cover"
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
      />
      <div className="flex flex-col">
        <h1 className="text-2xl">{original_title}</h1>
        <h1 className="text-lg">{title}</h1>
        <p>{release_date}</p>
        <p>{overview}</p>
      </div>
    </div>
  );
}
