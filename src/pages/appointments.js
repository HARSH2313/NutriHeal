"use client"
// /src/pages/appointments.js
import { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch('/api/appointments');
      const data = await response.json();
      setAppointments(data);
    };

    fetchAppointments();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Appointments
      </Typography>
      <Box>
        {appointments.length === 0 ? (
          <Typography variant="body1">No appointments available.</Typography>
        ) : (
          appointments.map((appointment) => (
            <Box key={appointment._id} mb={2} p={2} border={1} borderColor="grey.300">
              <Typography variant="h6">{appointment.name}</Typography>
              <Typography>Email: {appointment.email}</Typography>
              <Typography>Date: {new Date(appointment.date).toLocaleDateString()}</Typography>
              <Typography>Time: {appointment.time}</Typography>
            </Box>
          ))
        )}
      </Box>
    </Container>
  );
}
