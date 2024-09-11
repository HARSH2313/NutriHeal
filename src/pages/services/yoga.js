import { Container, Typography, Box, Button, Grid, TextField } from '@mui/material';
import Link from 'next/link';

const Yoga = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Yoga Sessions
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="body1" paragraph>
          Our yoga sessions are designed to improve flexibility, strength, and mental clarity. We offer various types of yoga practices to suit all levels, from beginners to advanced practitioners.
        </Typography>
        <Typography variant="body1" paragraph>
          Join our experienced instructors for a transformative experience that will enhance your physical and mental well-being.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom>
        Benefits of Our Yoga Sessions
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Increased Flexibility</Typography>
            <Typography variant="body1">
              Improve your range of motion and flexibility through various yoga poses.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Enhanced Strength</Typography>
            <Typography variant="body1">
              Build core strength and overall muscle tone with our structured sessions.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Mental Clarity</Typography>
            <Typography variant="body1">
              Experience reduced stress and increased mental clarity through mindfulness and meditation techniques.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Typography variant="h5" gutterBottom>
        Testimonials
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" paragraph>
          "The yoga sessions have been a fantastic addition to my routine. I've noticed significant improvements in my flexibility and mental clarity." - Sarah P.
        </Typography>
        <Typography variant="body1" paragraph>
          "The instructors are incredibly skilled and the sessions are always invigorating. Highly recommend!" - John T.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <Box sx={{ mb: 4 }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField label="Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Email" type="email" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Message" variant="outlined" multiline rows={4} fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Link href="/" passHref>
          <Button variant="contained" color="primary">
            Back to Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Yoga;
