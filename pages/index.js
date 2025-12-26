import React from 'react';
import { ArrowRight, Code, Zap, Users, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">BuildNext</div>
          <div className="flex gap-8">
            <a href="/" className="text-white hover:text-blue-400 transition">Home</a>
            <a href="/services" className="text-white/80 hover:text-blue-400 transition">Services</a>
            <a href="/about" className="text-white/80 hover:text-blue-400 transition">About</a>
            <a href="/contact" className="text-white/80 hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Elite Software Delivery,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Minus the Overhead</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            We help founders, startups, and scaling companies bring ideas to life with high-performing engineering talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition flex items-center justify-center gap-2">
              Get Started <ArrowRight size={20} />
            </a>
            <a href="/services" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition backdrop-blur-sm">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <div className="bg-blue-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Code className="text-blue-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">End-to-End Development</h3>
            <p className="text-gray-300 leading-relaxed">
              From MVPs and SaaS platforms to AI integrations and internal tools, we provide full-stack development that scales with your vision.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <div className="bg-cyan-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Zap className="text-cyan-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">BuildMore Subscriptions</h3>
            <p className="text-gray-300 leading-relaxed">
              Monthly engineering resources tailored to your product's needs. Predictable pricing, consistent support, zero hiring headaches.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <div className="bg-purple-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-purple-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Elite Global Talent</h3>
            <p className="text-gray-300 leading-relaxed">
              Access world-class developers, designers, and PMs without the overhead. We're your technical team, on-demand.
            </p>
          </div>
        </div>
      </section>

      {/* Why BuildNext */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why BuildNext?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Access to elite global engineering talent',
              'No hiring headaches or turnover risk',
              'Faster time-to-market',
              'Transparent deliverables and timelines',
              'Weekly sprint-based communication',
              'Scale resources up or down as needed'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              "BuildNext delivered our entire AI product end-to-end. Their speed, quality, and communication were unmatched."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
              <div>
                <p className="text-white font-semibold">Kevin Moore</p>
                <p className="text-gray-400 text-sm">Founder @ Angel Beta</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              "We completely overhauled our website and internal tools with BuildNext. They feel like an extension of our own team."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
              <div>
                <p className="text-white font-semibold">Minlopro Executive Team</p>
                <p className="text-gray-400 text-sm">Technology Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how BuildNext can accelerate your development timeline.
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
