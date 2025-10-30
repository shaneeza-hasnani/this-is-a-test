import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="min-h-screen text-brandSlate">
      {/* Header */}
      <header className="px-6 py-4 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-xl font-semibold">Shaneeza Hasnani</div>
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-brandRose">About</a>
            <a href="#projects" className="hover:text-brandRose">Projects</a>
            <a href="#contact" className="hover:text-brandRose">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero / Intro */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Data & Fraud Analytics Portfolio
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Rebuilt independently from Lovable — same look, faster performance, and fully hosted on Netlify.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-2xl font-semibold mb-3">About</h2>
          <p className="text-gray-700">
            I’m Shaneeza Hasnani — a data and fraud analytics professional who transforms complex data into clear, actionable insights. 
            This site showcases my portfolio, technical skills, and personal projects — rebuilt fully independent of Lovable using React, Vite, and Tailwind.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-2xl font-semibold mb-3">Projects</h2>
          <p className="text-gray-700">
            My recent projects include fraud detection dashboards, predictive analytics, and end-to-end data pipeline optimization.
            (Coming soon: a showcase gallery of selected works.)
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-700 mb-6">
            I’d love to hear from you! Fill out the form below and I’ll reply soon.
          </p>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Shaneeza Hasnani — Built with ❤️ using React + Vite + Tailwind + Netlify
        </div>
      </footer>
    </div>
  );
}
