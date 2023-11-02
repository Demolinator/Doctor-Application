// pages/api/appointments.js

import { getSession } from 'next-auth/react';

export default async (req, res) => {
  const session = await getSession({ req });

  if (req.method === 'POST' && session) {
    const { date, time, doctor } = req.body;

    // You can add additional validation or processing here
    // For example, check if the doctor exists in your data, format the date/time, etc.

    // Add the appointment to the user's profile
    const user = { ...session.user };
    if (!user.appointments) {
      user.appointments = [];
    }
    user.appointments.push({ date, time, doctor });

    // Send a success response
    res.status(201).json({ message: 'Appointment added successfully' });
  } else {
    res.status(400).json({ message: 'Invalid request' });
  }
};
