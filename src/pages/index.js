// /src/pages/index.js
import { Container } from '@mui/material';
import HeroSection from '../components/HeroSection';
import AboutRicha from '../components/AboutRicha';
import ServicesOverview from '../components/ServicesOverview';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <HeroSection />
      <AboutRicha />
      <ServicesOverview />
      <Testimonials />
    </Container>
  );
}
