// /src/components/Footer.js
import { Container, Typography, Box, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', backgroundColor: 'grey.200' }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} NutriHeal. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 2 }}>
          <Link href="https://facebook.com/nutriheal" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </Link>
          <Link href="https://twitter.com/nutriheal" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </Link>
          <Link href="https://instagram.com/nutriheal" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Link href="/" passHref>
            <Typography variant="body2">Home</Typography>
          </Link>
          <Link href="/appointments" passHref>
            <Typography variant="body2">Appointments</Typography>
          </Link>
          <Link href="/about" passHref>
            <Typography variant="body2">About</Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
