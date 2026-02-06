import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Target, Award } from 'lucide-react';

export default function About(){
  return (
    <>
      <Helmet>
        <title>About Us | GreyCells Technologies</title>
        <meta name="description" content="Learn about GreyCells Technologies: our mission, team, and commitment to digital transformation." />
      </Helmet>

      <div className="min-h-screen">
        {/* Header */}
        <div className="bg-primary text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About GreyCells</h1>
            <p className="text-xl text-gray-300">Transforming businesses through technology since 2020</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg">
                To empower businesses of all sizes with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe that technology should be accessible, affordable, and impactful.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg">
                To be the trusted technology partner for businesses seeking to innovate and scale. We envision a future where AI and automation are seamlessly integrated into every business process.
              </p>
            </div>
          </div>
        </div>

        {/* Why Us */}
        <div className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Target className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-primary">Focused Approach</h3>
                <p className="text-gray-600">We understand your business goals and deliver solutions that align with your objectives.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-primary">Expert Team</h3>
                <p className="text-gray-600">Our team consists of experienced developers, designers, and strategists passionate about your success.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-primary">Proven Track Record</h3>
                <p className="text-gray-600">We've delivered successful projects for startups and enterprises across multiple industries.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="py-16 px-4 bg-primary text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-gray-300">Projects Delivered</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">30+</div>
                <p className="text-gray-300">Happy Clients</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4+</div>
                <p className="text-gray-300">Years in Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
