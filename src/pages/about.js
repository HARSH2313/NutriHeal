// /src/pages/about.js
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        About Richa Sharma
      </Typography>
      <Typography variant="h5" paragraph>
        Richa Sharma holds advanced degrees in Foods & Nutrition and Yoga & Meditation. As the Head of the Department at Kailash Deepak Hospital, she brings a wealth of knowledge and experience to her consultations. Her holistic approach integrates nutrition, yoga, and meditation to promote overall wellness.
      </Typography>
      <Typography variant="body1" paragraph>
        With years of experience in the field, Richa has helped numerous individuals achieve their health and wellness goals. Her approach is personalized and considers each individual's unique needs.
      </Typography>
    </Container>
  );
};

export default About;
