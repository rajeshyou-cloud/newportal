import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Download, ExternalLink } from 'lucide-react';

export default function Resources(){
  const base = import.meta.env.BASE_URL;
  const resources = [
    { title: 'AI Automation Guide', type: 'TXT', size: '12 KB', href: `${base}downloads/ai-automation-guide.txt` },
    { title: 'Product Development Checklist', type: 'TXT', size: '9 KB', href: `${base}downloads/product-development-checklist.txt` },
    { title: 'Digital Marketing Strategy Template', type: 'TXT', size: '11 KB', href: `${base}downloads/digital-marketing-strategy-template.txt` }
  ];

  return (
    <>
      <Helmet>
        <title>Resources | GreyCells Technologies</title>
        <meta name="description" content="Free resources, guides, and tools to help with your digital transformation journey." />
      </Helmet>

      <div className="min-h-screen">
        <div className="bg-primary text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
            <p className="text-xl text-gray-300">Free guides and tools to help your business</p>
          </div>
        </div>

        <div className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-8">Free Downloads</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {resources.map((res, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FileText className="w-10 h-10 text-secondary" />
                    <div>
                      <h3 className="font-bold text-primary">{res.title}</h3>
                      <p className="text-sm text-gray-600">{res.type} • {res.size}</p>
                    </div>
                  </div>
                  <a
                    href={res.href}
                    download
                    className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80"
                  >
                    <Download className="w-5 h-5" />
                    <span className="text-sm">Download</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Useful Links</h2>
              <ul className="space-y-3">
                <li><a href="#" className="text-secondary hover:underline flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Technology Stack Recommendations</a></li>
                <li><a href="#" className="text-secondary hover:underline flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Project Planning Templates</a></li>
                <li><a href="#" className="text-secondary hover:underline flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Industry Best Practices</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
