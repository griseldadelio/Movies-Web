import React, { createContext, useState, useEffect } from 'react';
import { api } from '../../utils'

const DiscoverContext = createContext();

const DiscoverProvider = ({ children }) => {
  const [mediaAdvance, setMediaAdvance] = useState("movie");
  const [genres, setGenres] = useState([]);
  const [genresAdvance, setGenresAdvance] = useState("");
  const [orderBy, setOrderBy] = useState("popularity.desc");
  const [discover, setDiscover] = useState([]);
  const [discoverPage, setDiscoverPage] = useState(1);

  const areGenres = genresAdvance ? `&with_genres=${genresAdvance}` : "";

  const handleMediaChange = (event) => {
    setMediaAdvance(event.target.value);
  };

  const handleGenreChange = (event) => setGenresAdvance(event.target.value);



  const handleOrderByChange = (event) => {
    setOrderBy(event.target.value);
  };


  const dataGenres = async () => {
    const { data } = await api.get(`/genre/${mediaAdvance}/list?`, {
      params: {
        mediaAdvance
      }
    });
    return data.results
  }


  const dataSortBy = async () => {
    const { data } = await api.get(`/discover/${mediaAdvance}?${areGenres}${
      orderBy !== "original_name.asc" &&
      orderBy !== "original_name.desc" &&
      `&sort_by=${orderBy}`
      }&page=${discoverPage}`, {
      params: {
        mediaAdvance,
        areGenres,
        orderBy,
        discoverPage
      }
    });
    return data.results
  }




  useEffect(() => {
    dataGenres()
      .then(response => {
        setGenres(response);
      })
    setGenresAdvance(false);
  }, [])


  useEffect(() => {
    dataSortBy()
      .then(response => {
        setDiscover(response.results)
      });
  }, []);


  return (
    <DiscoverContext.Provider
      value={{
        discover,
        genres,
        mediaAdvance,
        orderBy,
        genresAdvance,
        discoverPage,
        handleMediaChange,
        handleGenreChange,
        handleOrderByChange,
      }}
    >
      {children}
    </DiscoverContext.Provider>
  );
};

export default DiscoverContext;
export { DiscoverProvider };
