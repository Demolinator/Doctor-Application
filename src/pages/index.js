import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Head from 'next/head';
import DoctorList from '../components/doctorlist/DoctorList';
import ServiceList from '../components/servicelist/ServiceList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Find Doctors</title>
        <meta name="description" content="Find the best doctors in your area" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="logo">Doctors Way</div>
        <nav>
          <Link href="/auth/login" className="button">Login</Link>
          <Link href="/auth/signup" className="button">Register</Link>
        </nav>
      </header>

      <main>
        <section className="search-tab">
          <h2>Find Doctors</h2>
          <div className="search-form">
            <input type="text" placeholder="Enter a location (e.g., city, country)" className="search-input" />
            <select className="doctor-type">
              <option value="all">All Types of Doctors</option>
              <option value="cardiologist">Cardiologist</option>
              <option value="dermatologist">Dermatologist</option>
              <option value="dentist">Dentist</option>
              {/* Add more doctor types as needed */}
            </select>
            <button className="search-button">Search</button>
          </div>
        </section>

        <section className="hero">
          <h1>Find the Best Doctors in Your Area</h1>
          <p>Discover top-rated doctors and healthcare services near you.</p>
        </section>

        <section className="featured-doctors">
          <h2>Featured Doctors</h2>
          <DoctorList />
        </section>

        <section className="services">
          <h2>Our Services</h2>
          <ServiceList />
        </section>

        <section className="about-us">
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              At Doctors Way, our mission is to provide you with the highest quality healthcare information and services. We understand that finding the right doctor and healthcare services can be a daunting task. That's why we've made it our goal to simplify the process for you. Our platform connects you with top-rated doctors and a wide range of healthcare services in your area.
            </p>
          </div>
        </section>
      </main>


      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Doctors Way. All rights reserved.</p>
          <p>Contact us: <a href="mailto:info@doctorsway.com">info@doctorsway.com</a></p>
          <div className="social-media">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
