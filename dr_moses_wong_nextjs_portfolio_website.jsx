export default function DrMosesPortfolio() {
  const research = [
    'Consumer Behaviour in Digital Environments',
    'AI Adoption in Sales & Customer Engagement',
    'Human–AI Interaction in Revenue Systems',
    'Service Quality in Contact Centers',
    'Digital Transformation in SMEs',
  ];

  const clients = [
    'CelcomDigi',
    'U Mobile',
    'Telekom Malaysia',
    'ACCA',
    'Costa Coffee (UK)',
    'Ariston Group',
  ];

  const journals = [
    {
      title: 'AI & Consumer Behaviour',
      description:
        'Research on AI-driven customer engagement systems and behavioural response patterns.',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Digital Transformation in SMEs',
      description:
        'Understanding technology adoption frameworks in modern SMEs.',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Service Quality & Contact Centers',
      description:
        'Exploring scalable customer service systems and operational excellence.',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 font-bold">
              MW
            </div>

            <div>
              <h1 className="text-lg font-semibold">Dr. Moses Wong</h1>
              <p className="text-xs text-slate-400">
                Consumer Behaviour and AI Research
              </p>
            </div>
          </div>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#experience">Experience</a>
            <a href="#journals">Journals</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pb-28 pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-emerald-900/20" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              Malaysia-Based AI and Consumer Behaviour Specialist
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Bridging Consumer Behaviour, AI Innovation and Digital Service Systems
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300">
              Dr. Moses Wong Sin Fatt is a business practitioner and researcher specializing in consumer behaviour, AI-driven customer engagement, and Business Process Outsourcing systems.
            </p>

            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 font-medium transition hover:scale-105">
              View Journals
            </button>

            <div className="mt-16 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-4xl font-bold text-blue-400">15+</h3>
                <p className="mt-2 text-sm text-slate-400">Years Experience</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-purple-400">100+</h3>
                <p className="mt-2 text-sm text-slate-400">Corporate Engagements</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-emerald-400">5+</h3>
                <p className="mt-2 text-sm text-slate-400">Research Areas</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
                alt="Professional portrait"
                className="h-[600px] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/5 px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
              alt="Research and innovation"
              className="rounded-[32px] border border-white/10 shadow-2xl"
            />
          </div>

          <div>
            <div className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              Academic and Professional Profile
            </div>

            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Academic Excellence Combined With Industry Leadership
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-300">
              Dr. Moses Wong holds a PhD in Business Management from the University of Malaya and bridges academic theory with real-world implementation.
            </p>

            <p className="mb-10 leading-relaxed text-slate-400">
              As Founder and Managing Director of Wingo Starr Group Sdn Bhd, he oversees AI contact center solutions including telesales, customer service outsourcing, omnichannel engagement and VoIP infrastructure.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="mb-2 text-xl font-semibold text-blue-400">
                  Education
                </h3>
                <p className="text-slate-300">
                  PhD in Business Management
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="mb-2 text-xl font-semibold text-emerald-400">
                  Specialization
                </h3>
                <p className="text-slate-300">
                  AI Customer Engagement and Consumer Behaviour
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-6 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            Industry Clients
          </div>

          <h2 className="mb-6 text-5xl font-bold">
            Trusted Across Multiple Industries
          </h2>

          <p className="mx-auto mb-14 max-w-3xl text-lg text-slate-400">
            Wingo Starr Group has supported local and international organizations through scalable customer engagement and AI-driven service systems.
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
              >
                <p className="font-semibold text-slate-200">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <div className="mb-6 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              Research Interests
            </div>

            <h2 className="mb-6 text-5xl font-bold">Areas of Expertise</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {research.map((item) => (
              <div
                key={item}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2"
              >
                <div className="mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500" />

                <h3 className="mb-4 text-2xl font-semibold">{item}</h3>

                <p className="leading-relaxed text-slate-400">
                  Advanced research and practical application in modern AI-driven consumer engagement ecosystems.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-white/5 px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-bold">Professional Experience</h2>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <h3 className="mb-3 text-3xl font-bold text-blue-400">
              Wingo Starr Group Sdn Bhd
            </h3>

            <p className="mb-6 text-xl text-slate-300">
              Founder and Managing Director
            </p>

            <ul className="space-y-3 text-slate-400">
              <li>
                Heads a Business Process Outsourcing organization focusing on contact center solutions.
              </li>
              <li>
                Implements data-driven customer interaction frameworks.
              </li>
              <li>
                Works with corporate and SME clients across industries.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="journals" className="border-t border-white/5 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="mb-4 text-5xl font-bold">
                Journals and Publications
              </h2>

              <p className="max-w-2xl text-lg text-slate-400">
                Future-ready publication system integrated for research uploads.
              </p>
            </div>

            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 font-medium transition hover:scale-105">
              Upload Journal
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {journals.map((journal) => (
              <div
                key={journal.title}
                className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <img
                  src={journal.image}
                  alt={journal.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-bold">
                    {journal.title}
                  </h3>

                  <p className="mb-8 leading-relaxed text-slate-400">
                    {journal.description}
                  </p>

                  <button className="font-medium text-blue-400">
                    Read Publication
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-14 backdrop-blur-2xl">
            <h2 className="mb-6 text-5xl font-bold">
              Open for Collaboration and Research Partnerships
            </h2>

            <div className="mb-12 grid gap-8 text-left md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 font-semibold text-blue-400">Email</h3>
                <p className="text-slate-300">Moses@wsg.my</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 font-semibold text-purple-400">
                  LinkedIn
                </h3>
                <p className="text-slate-300">
                  linkedin.com/in/mosesarthur
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 font-semibold text-emerald-400">
                  Location
                </h3>
                <p className="text-slate-300">
                  Wisma Pantai, Kuala Lumpur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
