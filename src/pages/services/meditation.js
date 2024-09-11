import { Container, Typography, Box, Button, Grid, TextField } from '@mui/material';
import Link from 'next/link';

const Meditation = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Meditation Guidance
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="body1" paragraph>
          Our meditation guidance services provide you with techniques and practices to enhance mindfulness and reduce stress. We offer sessions and workshops tailored to your needs and experience level.
        </Typography>
        <Typography variant="body1" paragraph>
          Explore different meditation techniques, develop a personal practice, and achieve greater mental clarity and peace.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom>
        Benefits of Our Meditation Guidance
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Enhanced Mindfulness</Typography>
            <Typography variant="body1">
              Develop greater awareness and presence in your daily life.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Stress Reduction</Typography>
            <Typography variant="body1">
              Learn techniques to manage and reduce stress effectively.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Improved Focus</Typography>
            <Typography variant="body1">
              Achieve better concentration and mental clarity through regular practice.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Typography variant="h5" gutterBottom>
        Testimonials
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" paragraph>
          "The meditation guidance has been incredibly helpful in managing my stress and improving my focus. Highly recommended!" - Lisa M.
        </Typography>
        <Typography variant="body1" paragraph>
          "The sessions have transformed my approach to mindfulness and have been a valuable addition to my daily routine." - Alex R.
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

export default Meditation;
