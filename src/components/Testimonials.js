// /src/components/Testimonials.js
import { Container, Typography, Box } from '@mui/material';

const testimonials = [
  {
    quote: 'Richa Sharma’s nutrition advice transformed my life. Highly recommend!',
    author: 'Jane Doe',
  },
  {
    quote: 'The yoga sessions have been life-changing. Thank you, Richa!',
    author: 'John Smith',
  },
  {
    quote: 'Excellent guidance on meditation. I feel more focused and calm.',
    author: 'Emily Johnson',
  },
];

const Testimonials = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        What Our Clients Say
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ p: 2, border: '1px solid', borderColor: 'grey.300', borderRadius: 1 }}>
            <Typography variant="body1" paragraph>
              “{testimonial.quote}”
            </Typography>
            <Typography variant="body2" align="right">
              — {testimonial.author}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Testimonials;
