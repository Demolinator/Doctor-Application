// pages/profile.js

import Link from 'next/link';
import { getSession } from 'next-auth/react';
import users from '@/data/users.json'; // Assuming 'users.json' is in the '@/data' directory

export default function Profile({ user }) {
  return (
    <div className="container">
      <div className="logo">
        <img src="/D-logo.png" alt="logo" />
      </div>
      <h1 className="profile-heading">Welcome, {user.firstname} {user.lastname}!</h1>
      <p className="profile-info">Email: {user.email}</p>
      <p className="profile-info">Location: {user.location}</p>
      <p className="profile-info">Phone: {user.phone}</p>
      <h2 className="appointments-heading">Your Appointments</h2>
      <ul>
        <li className="appointment-item">
          <p className="appointment-details">
            <strong>Doctor:</strong> Dr. John Smith
          </p>
          <p className="appointment-details">
            <strong>Date:</strong> November 15, 2023
          </p>
          <p className="appointment-details">
            <strong>Time:</strong> 2:30 PM
          </p>
        </li>
        {/* Add more appointment items as needed */}
      </ul>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  // Fetch user data from the 'users' array based on the session or other criteria
  const user = users[0]; // In this example, we assume there's only one user

  return {
    props: {
      user,
    },
  };
}
