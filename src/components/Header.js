"use client";
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ boxShadow: 3, bgcolor: '#003366', padding: 1 }}> {/* Deep Blue background */}
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo Section */}
            <Box>
              <Typography variant="h6" component="div" sx={{ color: '#E0F7FA', fontWeight: 'bold', cursor: 'pointer' }}>
                NutriHeal
              </Typography>
            </Box>

            {/* Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              <Button
                color="inherit"
                component={Link}
                href="/"
                sx={{ fontWeight: 'bold', color: '#E0F7FA', '&:hover': { bgcolor: '#00509E' } }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                href="/appointments"
                sx={{ fontWeight: 'bold', color: '#E0F7FA', '&:hover': { bgcolor: '#00509E' } }}
              >
                Appointments
              </Button>
              <Button
                color="inherit"
                component={Link}
                href="/about"
                sx={{ fontWeight: 'bold', color: '#E0F7FA', '&:hover': { bgcolor: '#00509E' } }}
              >
                About
              </Button>
            </Box>

            {/* Contact Section */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Button
                color="inherit"
                component={Link}
                href="/appointments"
                sx={{ fontWeight: 'bold', color: '#E0F7FA', '&:hover': { bgcolor: '#00509E' } }}
              >
                Contact Us
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ bgcolor: '#F5F5F5' }}> {/* Light Gray background */}
        <Box sx={{ width: 250, padding: 2, position: 'relative' }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ position: 'absolute', top: 10, right: 10, color: '#003366' }}>
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem button component={Link} href="/" onClick={toggleDrawer(false)} sx={{ color: '#003366', '&:hover': { bgcolor: '#E0F7FA' } }}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} href="/appointments" onClick={toggleDrawer(false)} sx={{ color: '#003366', '&:hover': { bgcolor: '#E0F7FA' } }}>
              <ListItemText primary="Appointments" />
            </ListItem>
            <ListItem button component={Link} href="/about" onClick={toggleDrawer(false)} sx={{ color: '#003366', '&:hover': { bgcolor: '#E0F7FA' } }}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component="a" href="mailto:info@nutriheal.com" onClick={toggleDrawer(false)} sx={{ color: '#003366', '&:hover': { bgcolor: '#E0F7FA' } }}>
              <ListItemText primary="Contact: info@nutriheal.com" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
