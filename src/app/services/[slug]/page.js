'use client';

import TextCard from '@/app/components/common/TextCard';
import { useParams } from 'next/navigation';
import Text from '../../components/common/Text';

export async function generateStaticParams() {
  return [
    { slug: 'app-development' },
    { slug: 'web-development' },
    { slug: 'design' },
  ];
}

export default function ServiceDetailPage() {
  const { slug } = useParams();

  const serviceContent = {
    'app-development': {
      title: 'App Development',
      description:
        'We craft high-performance, scalable, and visually stunning applications for mobile, web, and cross-platform solutions. Our team combines design thinking with cutting-edge technology to deliver seamless user experiences.',
      features: [
        'Custom Mobile App Development',
        'Cross-platform Solutions',
        'Performance Optimization',
        'End-to-End Testing',
      ],
    },
    'web-development': {
      title: 'Web Development',
      description:
        'Building fast, responsive, and user-friendly websites tailored to your needs.',
      features: ['Custom Websites', 'E-commerce', 'SEO Optimized', 'Responsive Design'],
    },
    design: {
      title: 'Design Services',
      description: 'Creating visually stunning designs that make your brand stand out.',
      features: ['Branding', 'UI/UX', 'Print Design', 'Illustrations'],
    },
  };

  const content = serviceContent[slug] || {
    title: 'Service Not Found',
    description: 'The service you are looking for does not exist.',
    features: [],
  };

  return (
    <div className="min-h-screen mt-8">
      <section className="text-center py-20 bg-primary-bg">
        <h1 className="text-5xl font-bold text-[#b72960]">{content.title}</h1>
        <Text variant="p">{content.description}</Text>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#b72960] mb-6">About Our {content.title}</h2>
        <Text variant="p">
          We believe in delivering excellence through creativity, innovation, and attention to detail.
          Our team ensures every project is tailored specifically to your needs, blending aesthetic
          appeal with functionality for the best possible results.
        </Text>
      </section>

      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-[#b72960] mb-10 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-xl font-bold text-[#b72960] mb-3">{feature}</h3>
                <p className="text-gray-600">
                  Our {feature} service ensures top-notch quality and attention to detail for maximum impact.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-[#b72960] mb-10 text-center">Our Process</h2>
        <div className="space-y-10">
          {['Research & Planning', 'Creative Design', 'Development & Execution', 'Delivery & Support'].map(
            (step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-bold text-[#b72960] mb-2">{step}</h3>
                <p className="text-gray-600">
                  We follow a structured process to ensure every step is executed with precision and creativity.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-[#b72960] mb-10 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Priya Sharma', feedback: 'Absolutely loved the service! The team is highly skilled and professional.' },
              { name: 'Amit Verma', feedback: 'The final output exceeded my expectations. Great communication throughout.' },
              { name: 'Sara Khan', feedback: 'Creative, fast, and reliable. Will definitely work with them again.' },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
                <h4 className="font-bold text-[#b72960]">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center bg-[#608BC1] text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Contact us today to discuss your project and let’s bring your vision to life.
        </p>
        <a
          href="/contact"
          className="bg-white text-[#b72960] px-6 py-3 rounded-lg font-semibold hover:bg-pink-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
