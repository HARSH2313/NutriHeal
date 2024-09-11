// /src/components/ServicesOverview.js
import { Container, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

const services = [
  {
    title: 'Nutrition Consultation',
    description: 'Personalized nutrition plans to help you achieve your health goals.',
    href: '/services/nutrition',
  },
  {
    title: 'Yoga Sessions',
    description: 'Yoga sessions designed to improve flexibility, strength, and mental clarity.',
    href: '/services/yoga',
  },
  {
    title: 'Meditation Guidance',
    description: 'Techniques and practices to enhance mindfulness and reduce stress.',
    href: '/services/meditation',
  },
];

const ServicesOverview = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {services.map((service) => (
          <Box key={service.title} sx={{ p: 2, border: '1px solid', borderColor: 'grey.300', borderRadius: 1 }}>
            <Typography variant="h6">{service.title}</Typography>
            <Typography variant="body1" paragraph>
              {service.description}
            </Typography>
            <Link href={service.href} passHref>
              <Button variant="outlined">Learn More</Button>
            </Link>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ServicesOverview;
