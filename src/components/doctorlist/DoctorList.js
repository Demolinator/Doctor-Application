import React, { useState } from 'react';

const doctors = [
  {
    id: 1,
    name: 'Dr. John Smith',
    location: 'New York',
    country: 'USA',
    city: 'New York City',
    specialty: 'Cardiologist',
    image: 'https://picsum.photos/200/300',
    availability: ['Monday', 'Wednesday', 'Friday'],
    price: 100,
  },
  // Add more doctor data as needed
];

const DoctorList = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const toggleAppointmentForm = (doctor) => {
    setSelectedDoctor(doctor);
    setSelectedDate('');
    setSelectedTime('');
    setShowAppointmentForm(true);
  };

  const handleBookAppointment = () => {
    // Handle booking the appointment, e.g., by sending a request to the server.
    // Update the UI to reflect the booked appointment if the booking is successful.
    // You can use the state variables to manage appointments.
    setShowAppointmentForm(false); // Hide the form after booking.
  };

  return (
    <div className="doctor-list">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          <h3>{doctor.name}</h3>
          <p className="specialty">Specialty: {doctor.specialty}</p>
          <p className="location">
            Location: {doctor.location}, {doctor.city}, {doctor.country}
          </p>
          {!showAppointmentForm && selectedDoctor && selectedDoctor.id === doctor.id && (
            <button
              className="book-appointment-button"
              onClick={() => toggleAppointmentForm(doctor)}
            >
              Book Appointment
            </button>
          )}
          {showAppointmentForm && selectedDoctor && selectedDoctor.id === doctor.id && (
            <div className="appointment-form">
              <h4>Book an Appointment with {selectedDoctor.name}</h4>
              <form>
                <label htmlFor="date">Select a Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <label htmlFor="time">Select a Time:</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
              </form>
              <button
                type="button"
                className="book-appointment-button"
                onClick={handleBookAppointment}
              >
                Book
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
