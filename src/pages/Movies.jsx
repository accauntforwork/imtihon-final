import { useState } from "react";
import List from "../Components/List";
import useApiData from "../hooks/useApiDate";
import Loading from "../Components/Loading";

function Movies() {
  const apiKey = "Z06JP4Z-N3NMDS9-N2MV574-9T28R04";
  const apiUrl = "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=30";

  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading } = useApiData(
    searchQuery
      ? `https://api.kinopoisk.dev/v1.4/movie/search?query=${searchQuery}`
      : apiUrl,
    apiKey
  );

  const handleSearch = () => {
    setSearchQuery(document.getElementById("inputSearch").value);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <label className="input flex items-center gap-7 bg-transparent border-none outline-none text-2xl w-[80vw] mt-5">
              <svg
                id="searchButton"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-6 opacity-70 cursor-pointer"
                onClick={handleSearch}
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                id="inputSearch"
                className="w-96"
                placeholder="Search for movies or TV series"
              />
            </label>
          </div>
          <div className="p-[36px]">
            <h2 className="mb-10 text-3xl">Movies</h2>
            <List docs={data.docs} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies;
