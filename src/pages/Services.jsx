import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code2, Zap, TrendingUp, CheckCircle } from 'lucide-react';

export default function Services(){
  const services = [
    {
      icon: Code2,
      title: 'Product Development',
      desc: 'Build custom web and mobile applications tailored to your business needs.',
      features: ['Full-stack development', 'Mobile-first design', 'Cloud deployment', 'API integrations']
    },
    {
      icon: Zap,
      title: 'AI Automation',
      desc: 'Leverage AI to streamline processes, reduce costs, and boost productivity.',
      features: ['Workflow automation', 'ML model deployment', 'Chatbots & NLP', 'Data analytics']
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      desc: 'Grow your online presence with data-driven marketing strategies.',
      features: ['SEO optimization', 'Social media strategy', 'Content marketing', 'PPC campaigns']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | GreyCells Technologies</title>
        <meta name="description" content="Product development, AI automation, and digital marketing services for modern businesses." />
      </Helmet>

      <div className="min-h-screen">
        {/* Header */}
        <div className="bg-primary text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-300">End-to-end solutions for digital transformation</p>
          </div>
        </div>

        {/* Services */}
        <div className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {services.map((service, i) => (
              <div key={i} className="mb-16 last:mb-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <service.icon className="w-16 h-16 text-secondary mb-4" />
                    <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-lg mb-6">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-secondary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-primary to-primary/70 h-64 rounded-lg"></div>
                </div>
                {i < services.length - 1 && <hr className="my-16 border-gray-300" />}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 px-4 bg-primary text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <Link to="/contact" className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-8 rounded-lg inline-block">
            Contact Us Today
          </Link>
        </div>
      </div>
    </>
  );
}
