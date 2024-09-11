import { Container, Typography, Box, Button, Grid, TextField } from '@mui/material';
import Link from 'next/link';

const Nutrition = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Nutrition Consultation
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="body1" paragraph>
          Our personalized nutrition consultation service is designed to help you achieve your health and wellness goals. We provide expert advice and tailored nutrition plans that cater to your specific needs.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you're looking to lose weight, gain muscle, or simply improve your overall health, our nutrition experts are here to guide you every step of the way.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom>
        Benefits of Our Nutrition Consultation
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Customized Plans</Typography>
            <Typography variant="body1">
              Receive a nutrition plan tailored specifically to your health goals and dietary preferences.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Expert Guidance</Typography>
            <Typography variant="body1">
              Get advice from certified nutritionists who are dedicated to your success.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Ongoing Support</Typography>
            <Typography variant="body1">
              Enjoy continuous support and adjustments to your plan as you progress.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Typography variant="h5" gutterBottom>
        Testimonials
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" paragraph>
          "The nutrition consultation was a game-changer for me. I finally have a plan that works and I feel better than ever!" - Jane D.
        </Typography>
        <Typography variant="body1" paragraph>
          "The personalized advice and ongoing support have been invaluable. Highly recommend!" - Mark S.
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

export default Nutrition;
