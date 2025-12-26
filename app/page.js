
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">BuildNext</h1>
        <p className="text-xl text-gray-300">Elite software delivery, minus the overhead.</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-300">
          BuildNext is a team of committed, high-performing software engineers specializing in web & mobile development,
          UX/UI design, API integrations, internal dashboards, AI features, CRM systems, and more. We've completed 5 diverse projects,
          consistently delivering reliable, scalable software with speed and quality.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Custom website design & development</li>
          <li>Mobile app development (iOS/Android)</li>
          <li>SaaS platforms & MVP builds</li>
          <li>Internal tools, dashboards, and CRM integrations</li>
          <li>AI-powered features like chatbots, generators, automation</li>
          <li>UX/UI design and usability optimization</li>
          <li>Architecture, devops, and scalable system design</li>
          <li>Full-stack development teams and dedicated engineering pods</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Selected Work</h2>
        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="text-xl font-bold">Angel Beta – AI-Powered MVP</h3>
            <p className="text-gray-400">
              A full-stack AI web app for business plan generation and launch roadmaps. Features include KYC, GPT-4 integration,
              roadmap engines, and export tools. Delivered from scratch with a focus on speed, security, and usability.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="text-xl font-bold">Minlopro Website Redesign</h3>
            <p className="text-gray-400">
              End-to-end rebuild for a Salesforce healthcare partner, including modern UX, mobile-first design, SEO optimization,
              admin tools, analytics integration, and career blog support.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 border border-gray-700 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 border border-gray-700 rounded" />
          <textarea placeholder="Your Message" rows={5} className="w-full p-3 bg-gray-800 border border-gray-700 rounded" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
