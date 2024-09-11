"use client";

import { useState } from 'react';
import { Button, TextField, Typography, Box, Container } from '@mui/material';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Reset error message

    // Basic form validation
    if (!name || !email || !date || !time) {
      setError('Please fill out all fields.');
      return;
    }

    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, date, time }),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage('Appointment booked successfully!');
      setName('');
      setEmail('');
      setDate('');
      setTime('');
    } else {
      setMessage('');
      setError('Failed to book appointment. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        noValidate 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2, 
          mt: 4,
          p: 2,
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Book Your Appointment
        </Typography>

        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Date"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <TextField
          label="Time"
          type="time"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Book Appointment
        </Button>
        
        {message && <Typography variant="body1" color="success.main" mt={2}>{message}</Typography>}
        {error && <Typography variant="body1" color="error.main" mt={2}>{error}</Typography>}
      </Box>
    </Container>
  );
};

export default AppointmentForm;
