import React from 'react';
import { Code, Smartphone, Database, Bot, Layout, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">BuildNext</div>
          <div className="flex gap-8">
            <a href="/" className="text-white/80 hover:text-blue-400 transition">Home</a>
            <a href="/services" className="text-white hover:text-blue-400 transition">Services</a>
            <a href="/about" className="text-white/80 hover:text-blue-400 transition">About</a>
            <a href="/contact" className="text-white/80 hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            From one-time builds to ongoing subscriptions, we've got your development needs covered.
          </p>
        </div>
      </section>

      {/* BuildNext Services */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">BuildNext: End-to-End Development</h2>
          <p className="text-xl text-gray-300">
            Tailored development solutions for your unique business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Code size={24} />, title: 'Web & Mobile Apps', desc: 'Custom applications built with modern frameworks and best practices' },
            { icon: <Layout size={24} />, title: 'SaaS Products & MVPs', desc: 'Launch your product faster with our proven development process' },
            { icon: <Bot size={24} />, title: 'AI & Automation', desc: 'Chatbots, integrations, and intelligent automation solutions' },
            { icon: <Database size={24} />, title: 'CRM Integrations', desc: 'Connect your systems and streamline your workflows' },
            { icon: <Smartphone size={24} />, title: 'UX/UI Design', desc: 'Beautiful, intuitive interfaces that users love' },
            { icon: <Users size={24} />, title: 'Dedicated Teams', desc: 'Full engineering pods scaled to your project needs' }
          ].map((service, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
              <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Access to elite global development talent',
              'No hiring costs, no turnover risk',
              'Faster time-to-market',
              'Scalable development resources',
              'End-to-end project management',
              'Transparent communication and deliverables'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BuildMore Subscriptions */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">BuildMore: Monthly Dev Subscriptions</h2>
          <p className="text-xl text-gray-300">
            Predictable pricing, consistent support, and zero hiring headaches.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Intern Tier */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Intern Tier</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-white">$1,700</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-400">or $16,000/year</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                <span>3-5 features shipped per year</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                <span>Basic priority scheduling</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                <span>Light maintenance support</span>
              </li>
            </ul>
            <p className="text-sm text-gray-400 italic mb-6">
              Ideal for small businesses and marketing websites needing occasional updates.
            </p>
            <a href="/contact" className="block text-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition">
              Get Started
            </a>
          </div>

          {/* Junior Dev Tier */}
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border-2 border-blue-500 rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Junior Dev Tier</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-white">$4,200</span>
                <span className="text-gray-300">/month</span>
              </div>
              <p className="text-sm text-gray-300">or $45,000/year</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-100">
                <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
                <span>Full-year ongoing maintenance</span>
              </li>
              <li className="flex items-start gap-3 text-gray-100">
                <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
                <span>Major feature updates</span>
              </li>
              <li className="flex items-start gap-3 text-gray-100">
                <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
                <span>Higher priority than Intern tier</span>
              </li>
              <li className="flex items-start gap-3 text-gray-100">
                <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
                <span>Performance monitoring</span>
              </li>
            </ul>
            <p className="text-sm text-gray-300 italic mb-6">
              Best for active SaaS products and growing businesses needing consistent support.
            </p>
            <a href="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              Get Started
            </a>
          </div>

          {/* Senior Dev Tier */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Senior Dev Tier</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-white">$12,500</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-400">or $125,000/year</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={18} />
                <span>Dedicated developer assigned</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={18} />
                <span>High-priority feature shipments</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={18} />
                <span>Urgent support included</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={18} />
                <span>End-to-end coverage</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={18} />
                <span>Architecture guidance</span>
              </li>
            </ul>
            <p className="text-sm text-gray-400 italic mb-6">
              Ideal for large platforms and mission-critical products with long-term scaling needs.
            </p>
            <a href="/contact" className="block text-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss which service fits your needs best and how we can help accelerate your development.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            Contact Us Today <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">BuildNext</h3>
              <p className="text-gray-400 text-sm">Elite software delivery for modern businesses.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/services" className="hover:text-white transition">BuildNext</a></li>
                <li><a href="/services" className="hover:text-white transition">BuildMore</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">yasir@buildnext.org</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 BuildNext. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
