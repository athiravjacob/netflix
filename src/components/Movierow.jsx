import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchMovie } from "../api/tmdb"; // Ensure this function is correctly implemented
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieModal from "./MovieModal";

function Movierow({ title, fetchURL }) {
  const [movie, setMovie] = useState([]);
  const [selected, setSelect] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const handleModal = (movie) => {
    setOpen(!isOpen);
    setSelect(movie);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovie(fetchURL);
        setMovie(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [fetchURL]);

  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Extra small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="movie-row mx-6 sm:mx-12 lg:mx-36 my-8 sm:my-12">
      <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10">
        {title}
      </h2>
      <Slider {...settings}>
        {movie.map((movie) => (
          <div key={movie.id} className="relative overflow-hidden px-1 sm:px-2">
            <img
              className="w-full h-48 sm:h-60 lg:h-72 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title || movie.name}
              onClick={() => handleModal(movie)}
            />
          </div>
        ))}
      </Slider>

      {isOpen && <MovieModal movie={selected} />}
    </div>
  );
}

export default Movierow;
