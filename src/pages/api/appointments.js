import mongoose from 'mongoose';
import Appointment from '../../models/Appointment';

const MONGODB_URI = 'your-mongodb-uri';

async function connectToDatabase() {
  if (mongoose.connections[0].readyState) {
    return;
  }
  await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { name, email, date, time } = req.body;

    try {
      const appointment = await Appointment.create({
        name,
        email,
        date,
        time,
      });
      res.status(201).json(appointment);
    } catch (error) {
      console.error('Error creating appointment:', error);
      res.status(500).json({ error: 'Failed to create appointment' });
    }
  } else if (req.method === 'GET') {
    try {
      const appointments = await Appointment.find({});
      res.status(200).json(appointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      res.status(500).json({ error: 'Failed to fetch appointments' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
