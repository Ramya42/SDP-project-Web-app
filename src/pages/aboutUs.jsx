import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Welcome, a cutting-edge software firm dedicated to harnessing technology for the greater good.</h1>
          <p className="text-gray-700">
            Our mission is to empower the public and conservation institutions in the fight against wildlife, forestry, and environmental crimes through innovative software solutions.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            We envision a world where technology serves as a powerful ally in the preservation of our precious natural resources. We believe in the transformative impact of efficient, secure, and user-friendly software in facilitating the reporting, investigation, and monitoring of environmental crimes.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">What Sets Us Apart</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Innovative Solutions</h3>
            <p className="text-gray-700">
              Our team of dedicated professionals is committed to developing state-of-the-art online and mobile applications that streamline the process of reporting environmental crimes. We stay at the forefront of technological advancements to ensure our solutions are effective and adaptable.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Collaborative Network</h3>
            <p className="text-gray-700">
              We have established a unified network that brings together wildlife conservation and forestry conservation institutions under a single communication and complaints management platform. This collaborative approach enhances accountability, transparency, and the collective impact of conservation efforts.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">User-Centric Design</h3>
            <p className="text-gray-700">
              Our software is designed with multiple user roles, ensuring that each institutional framework can tailor the system to match their unique needs. User role customization capabilities empower our clients to make the most of the software's features.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Security and Reliability</h3>
            <p className="text-gray-700">
              We understand the critical nature of the work carried out by conservation institutions. Our software employs robust security measures, including device-based authentication for officers' mobile applications. A disaster recovery mechanism ensures high availability, safeguarding the continuity of operations.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Accountability and Transparency</h3>
            <p className="text-gray-700">
              The software provides an audit trail for all actions, allowing system administrators to review records when needed. Officers can update the status of investigations, keeping complainants informed and engaged throughout the process.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
