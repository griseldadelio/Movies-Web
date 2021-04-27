import React, { createContext, useState, useEffect } from "react";
import { API_KEY } from "../../utils/API_KEY";
import { useFetch } from "../../hooks/useFetch";

const DiscoverContext = createContext();

const DiscoverProvider = ({ children }) => {
  const [mediaAdvance, setMediaAdvance] = useState("movie");
  const [genres, setGenres] = useState([]);
  const [genresAdvance, setGenresAdvance] = useState("");
  const [interval, setInterval] = useState("after");
  const [orderBy, setOrderBy] = useState("popularity.desc");
  const [discover, setDiscover] = useState([]);
  const [discoverMaxPage, setDiscoverMaxPage] = useState(1000);
  const [discoverPage, setDiscoverPage] = useState(1);

  const areGenres = genresAdvance ? `&with_genres=${genresAdvance}` : "";

  const handleMediaChange = (event) => {
    setMediaAdvance(event.target.value);
  };

  const handleGenreChange = (event) => setGenresAdvance(event.target.value);

  const handleIntervalChange = (event) => setInterval(event.target.value);



  const handleOrderByChange = (event) => {
    setOrderBy(event.target.value);
  };


  const dataGenres = useFetch(
    `https://api.themoviedb.org/3/genre/${mediaAdvance}/list?api_key=${API_KEY}&language=en-US`,
    [mediaAdvance]
  );

  const dataSortBy = useFetch(
    `https://api.themoviedb.org/3/discover/${mediaAdvance}?api_key=${API_KEY}&language=en-US${areGenres}${
    orderBy !== "original_name.asc" &&
    orderBy !== "original_name.desc" &&
    `&sort_by=${orderBy}`
    }&page=${discoverPage}`,
    [
      areGenres,
      mediaAdvance,
      genresAdvance,
      orderBy,
      interval,
      discoverPage,
    ]
  );


  useEffect(() => {
    dataGenres && setGenres(dataGenres.genres);
    dataGenres && setGenresAdvance(false);
  }, [dataGenres])


  useEffect(() => {
    dataSortBy && setDiscover(dataSortBy.results);
    dataSortBy && setDiscoverMaxPage(dataSortBy.total_pages);
    dataSortBy && setDiscover(dataSortBy.results);
    dataSortBy && setDiscoverMaxPage(dataSortBy.total_pages);
  }, [dataSortBy, mediaAdvance]);


  return (
    <DiscoverContext.Provider
      value={{
        discover,
        genres,
        interval,
        mediaAdvance,
        orderBy,
        genresAdvance,
        discoverMaxPage,
        discoverPage,
        handleIntervalChange,
        handleMediaChange,
        handleGenreChange,
        handleOrderByChange,
        setDiscoverPage,
      }}
    >
      {children}
    </DiscoverContext.Provider>
  );
};

export default DiscoverContext;
export { DiscoverProvider };
