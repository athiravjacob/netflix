import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { fetchMovie } from '@/api/tmdb';

export default function MovieModal({ movie}) {
  const [open, setOpen] = useState(true);
  const [trailer, setTrailer] = useState(null);
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);
  

  useEffect(() => {
    async function fetchTrailer() {
      try {
        const videos = await fetchMovie(`/movie/${movie.id}/videos`);

        const youtubeTrailer = videos.find(
          video =>
            video.site === 'YouTube' &&
            (video.type === 'Trailer' || video.type === 'Teaser')
        );

        if (youtubeTrailer) {
          setTrailer(youtubeTrailer);
        }
      } catch (error) {
        console.error('Failed to fetch trailer:', error);
      }
    }

    fetchTrailer();
  }, [movie.id]);

  const handlePlayTrailer = () => {
    if (trailer) {
      setIsTrailerPlaying(true);
    }
  };

  const handleCloseTrailer = () => {
    setIsTrailerPlaying(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isTrailerPlaying && trailer) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <button
          onClick={handleCloseTrailer}
          className="absolute top-4 right-4 text-white z-60"
        >
          <CloseIcon />
        </button>
        <iframe
          className="w-full max-w-7xl aspect-video"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=0`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto',
      }}
    >
      <Box
        sx={{
          width: { xs: '95%', sm: '85%', md: '70%' },
          maxWidth: '1000px',
          height: { xs: '90%', sm: '80%' },
          bgcolor: 'transparent',
          borderRadius: '10px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 110%), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: { xs: '20px', sm: '30px', md: '40px' },
            color: 'white',
            height: '100%',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontSize: { xs: '1.5rem', md: '2.5rem' },
            }}
          >
            {movie.title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
              <StarIcon sx={{ color: 'gold', mr: 1 }} />
              <Typography variant="h6">
                {movie.vote_average ? `${movie.vote_average.toFixed(1)}/10` : 'No Rating'}
              </Typography>
            </Box>
            <Typography variant="body1">
              {movie.release_date && new Date(movie.release_date).getFullYear()}
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              maxWidth: { xs: '100%', md: '600px' },
              lineHeight: 1.5,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            {movie.overview || 'No description available.'}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              startIcon={<PlayArrowIcon />}
              sx={{
                bgcolor: 'white',
                color: 'black',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.8)',
                },
                px: { xs: 2, md: 3 },
                py: { xs: 1, md: 1.5 },
                fontSize: { xs: '0.8rem', md: '1rem' },
              }}
              onClick={handlePlayTrailer}
            >
              Play
            </Button>
            <Button
              variant="outlined"
              startIcon={<InfoOutlinedIcon />}
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.2)',
                },
                px: { xs: 2, md: 3 },
                py: { xs: 1, md: 1.5 },
                fontSize: { xs: '0.8rem', md: '1rem' },
              }}
              onClick={handleClose}
            >
              Back
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
