
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BuildNext() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <header className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-2">BuildNext</h1>
        <p className="text-xl text-gray-300">Elite software delivery, minus the overhead.</p>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-300 mb-4">
          BuildNext is a team of committed, high-performing software engineers specializing in web & mobile development,
          UX/UI design, API integrations, internal dashboards, AI features, CRM systems, and more. With 5 projects already
          delivered across healthcare, productivity, and SaaS industries, we bring reliable execution and scalable engineering
          to teams who need it done right.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Custom website design & development</li>
          <li>Mobile app development (iOS/Android)</li>
          <li>SaaS platform builds</li>
          <li>Internal tools & dashboards</li>
          <li>CRM integrations</li>
          <li>AI features (chatbots, generators, automation)</li>
          <li>UX/UI design</li>
          <li>System architecture and technical strategy</li>
          <li>Dedicated engineering pods & team augmentation</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Selected Work</h2>
        <Card className="bg-gray-900 border-gray-800 mb-4">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">Angel Beta – AI-Powered MVP</h3>
            <p className="text-gray-400 mt-2">
              Designed and developed a full-stack AI-powered platform to help entrepreneurs generate complete business plans
              and launch roadmaps. Delivered KYC intake, GPT integration, interactive roadmap engine, export tools, and user interface —
              all deployed and maintained under tight timelines.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">Minlopro Website Redesign</h3>
            <p className="text-gray-400 mt-2">
              Complete website overhaul for a Salesforce Partner firm, focusing on mobile responsiveness, improved usability,
              modern UX, and SEO optimization. Built new pages for Services, About, Careers, Blog, and more — plus integrated analytics
              and blog CMS features.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 border border-gray-700 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 border border-gray-700 rounded" />
          <textarea placeholder="Your Message" rows={5} className="w-full p-3 bg-gray-800 border border-gray-700 rounded" />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
        </form>
      </section>

      <footer className="text-center py-8 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} BuildNext. All rights reserved.
      </footer>
    </div>
  );
}
