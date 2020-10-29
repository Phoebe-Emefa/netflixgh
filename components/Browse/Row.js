import { Box, Heading, Image, Flex } from "@chakra-ui/core";
import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log("movies", movies);

  return (
    <Box>
      <Heading as="h2" fontSize="lg">
        {title}
      </Heading>
      <Flex overflowY="hidden" overflowX="scroll" p={2}>
        {movies.map((movie) => (
          <Image
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            mr={2}
            w={{ md: "100%" }}
            objectFit="contain"
            maxHeight={{ md: isLargeRow ? "350px" : "120px" }}
            transition="transform 450ms"
            _hover={{ transform: "scale(1.08)" }}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Row;
