import React from 'react';
import hospitalImage from '../../assets/Required/hospital.webp';
import expert1 from '../../assets/Doctors/doctor.png';
import expert2 from '../../assets/Doctors/doctor1.png';
import expert3 from '../../assets/Doctors/doctor2.png';

const About = () => {
  return (
    <div className="bg-base-200 min-h-screen p-10">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={hospitalImage}
            alt="Hospital"
            className="rounded-lg shadow-2xl w-full lg:w-1/2 mb-5 lg:mb-0"
          />
          <div className="lg:ml-10 w-full lg:w-1/2">
            <h1 className="text-4xl font-bold text-primary">
              About Our Hospital
            </h1>
            <p className="py-6 text-lg">
              Our hospital, <span className="font-semibold">Doc House</span>, is
              committed to providing world-class healthcare services. We have
              been at the forefront of medical innovation and patient care,
              serving our community with compassion, skill, and the latest
              technology for over 20 years. Our highly skilled doctors, nurses,
              and healthcare professionals work tirelessly to ensure the
              well-being of each patient, making healthcare accessible and
              comfortable.
            </p>
          </div>
        </div>

        {/* Mission, Vision, and Values Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Our Mission
            </h2>
            <p>
              To deliver the highest quality of healthcare services to our
              patients through a team of dedicated professionals, ensuring
              excellence, empathy, and integrity in every aspect of care.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Our Vision
            </h2>
            <p>
              To be a leading healthcare provider recognized globally for our
              innovative approach, compassionate patient care, and commitment to
              the well-being of the community.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Our Values
            </h2>
            <p>
              <strong>Compassion:</strong> We care for every patient with
              empathy and respect.
              <br />
              <strong>Innovation:</strong> We bring the latest technology and
              advanced treatment options.
              <br />
              <strong>Integrity:</strong> We uphold the highest standards of
              ethics and transparency.
              <br />
              <strong>Collaboration:</strong> We believe in working as a team to
              provide the best possible care.
            </p>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            Our Expert Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <img
                src={expert1}
                alt="Dr. John Doe"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                Dr. John Doe
              </h3>
              <p className="text-center">Chief Medical Officer, Cardiology</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <img
                src={expert2}
                alt="Dr. Jane Smith"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                Dr. Jane Smith
              </h3>
              <p className="text-center">Senior Pediatric Specialist</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <img
                src={expert3}
                alt="Dr. Emily Brown"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                Dr. Emily Brown
              </h3>
              <p className="text-center">Orthopedic Surgeon</p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-10">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary">20+</h3>
              <p className="mt-2">Years of Service</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">500+</h3>
              <p className="mt-2">Doctors and Staff</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">1000+</h3>
              <p className="mt-2">Successful Surgeries</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">50,000+</h3>
              <p className="mt-2">Satisfied Patients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
