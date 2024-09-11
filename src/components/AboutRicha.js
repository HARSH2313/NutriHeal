// /src/components/AboutRicha.js
import { Container, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

const AboutRicha = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Richa Sharma
      </Typography>
      <Typography variant="body1" paragraph>
        Richa Sharma holds advanced degrees in Foods & Nutrition and Yoga & Meditation. As the Head of the Department at Kailash Deepak Hospital, she brings a wealth of knowledge and experience to her consultations. Her holistic approach integrates nutrition, yoga, and meditation to promote overall wellness.
      </Typography>
      <Link href="/about" passHref>
        <Button variant="outlined">Read More</Button>
      </Link>
    </Container>
  );
};

export default AboutRicha;
