export default function App() {
  return (
    <div className="min-h-screen text-brandSlate">
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

      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Data & Fraud Analytics Portfolio
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Rebuilt independent of Lovable. Same look, faster deploys, Netlify-ready.
          </p>
        </section>

        <section id="about" className="mb-20">
          <h2 className="text-2xl font-semibold mb-3">About</h2>
          <p className="text-gray-700">
            This is a fresh React + Vite + Tailwind base. We’ll bring your exact Lovable design over section by section.
          </p>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-2xl font-semibold mb-3">Projects</h2>
          <p className="text-gray-700">Coming next as we mirror your UI.</p>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-700">
            We’ll wire this to a Netlify Function + Resend shortly.
          </p>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Shaneeza Hasnani
        </div>
      </footer>
    </div>
  );
}
