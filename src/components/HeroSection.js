"use client";

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();

  const handleBookNowClick = () => {
    router.push('/appointments');
  };

  return (
    <Box sx={{ position: 'relative', textAlign: 'center', color: 'white', mb: 4 }}>
      <Image
        src="/images/hero-image.png"
        alt="Hero Background"
        layout="responsive"
        width={1200}
        height={800}
        style={{ objectFit: 'cover' }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: 4,
          borderRadius: 2,
          maxWidth: '90%',
          width: '100%',
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Book Your Consultation with Richa Sharma
        </Typography>
        <Typography variant="h5" paragraph sx={{ fontWeight: 300 }}>
          Discover personalized nutrition and yoga guidance tailored to your needs.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBookNowClick}
          sx={{ mt: 2, padding: '12px 24px', fontSize: '1rem' }}
        >
          Book Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
