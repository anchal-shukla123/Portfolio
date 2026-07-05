import { projects, socialLinks } from '../data/portfolioData';

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ProjectCard = ({ project, aosDelay }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className={`relative rounded-2xl p-[1px] group transition-all duration-500 ${
      project.isFlagship
        ? 'bg-gradient-to-br from-[#DA627D]/60 via-[#F9DBBD]/10 to-[#A53860]/45 hover:from-[#DA627D] hover:via-[#FFA5AB]/35 hover:to-[#DA627D]/60'
        : 'bg-[#F9DBBD]/10 hover:bg-[#F9DBBD]/20'
    }`}
  >
    <div className={`rounded-2xl p-5 md:p-8 h-full backdrop-blur-md transition-all duration-500 ${
      project.isFlagship
        ? 'bg-[#0f0f0f]/95 group-hover:bg-[#0f0f0f]/90'
        : 'bg-[#450920]/90 group-hover:bg-[#450920]/80'
    }`}>
      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.15fr] gap-6 md:gap-8 items-stretch">
        {project.image && (
          <div className="relative overflow-hidden rounded-xl border border-[#F9DBBD]/10 bg-[#450920]/50 min-h-[260px] lg:min-h-full">
            <img
              src={project.image}
              alt={project.imageAlt}
              className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${project.id === 'vyom' ? 'object-contain bg-[#F9DBBD]' : 'object-cover object-top'}`}
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        )}

        <div className="flex flex-col justify-between">
          <div>
            {project.badge && (
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#FFA5AB] bg-[#DA627D]/15 px-3 py-1 rounded-full border border-[#DA627D]/25 mb-4">
                {project.badge}
              </span>
            )}

            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-5xl font-black text-[#F9DBBD]/10 font-serif italic">{project.number}</span>
              <h3 className="text-2xl md:text-3xl font-black text-[#F9DBBD] tracking-tight">{project.title}</h3>
            </div>

            <p className="text-[#F9DBBD]/60 text-sm md:text-base leading-relaxed mb-6 max-w-2xl font-medium">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-bold text-[#F9DBBD]/70 bg-[#F9DBBD]/5 rounded-full border border-[#F9DBBD]/10 hover:bg-[#DA627D]/25 hover:border-[#A53860]/45 hover:text-[#FFA5AB] transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9DBBD]/10 border border-[#F9DBBD]/20 text-[#F9DBBD] text-sm font-semibold hover:bg-[#F9DBBD] hover:text-[#450920] transition-all duration-300 group/btn"
              >
                <GitHubIcon />
                GitHub
              </a>
            )}

            {project.links.demo !== undefined && (
              <a
                href={project.links.demo || undefined}
                target={project.links.demo ? '_blank' : undefined}
                rel={project.links.demo ? 'noopener noreferrer' : undefined}
                aria-disabled={!project.links.demo}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  project.links.demo
                    ? 'bg-[#A53860] text-[#F9DBBD] hover:bg-[#A53860] hover:shadow-[0_0_20px_rgba(165,56,96,0.4)]'
                    : 'bg-[#F9DBBD]/5 text-[#F9DBBD]/40 border border-[#F9DBBD]/10 pointer-events-none'
                }`}
              >
                <ExternalLinkIcon />
                {project.links.demo ? 'Live Demo' : 'Demo Coming Soon'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-[#450920] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-[#F9DBBD]/20 rounded-full px-5 py-1.5 text-sm text-[#F9DBBD]/60 font-bold mb-8 shadow-sm bg-[#F9DBBD]/5 backdrop-blur-sm">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F9DBBD] leading-[1.1] mb-6 tracking-tight">
            Work that speaks <br className="hidden md:block" />for itself
          </h2>
          <p className="text-[#F9DBBD]/50 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            A selection of mobile, web, AI, and developer-tool projects shaped from my resume and project screenshots.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={String((index + 1) * 100)}
            />
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="500" className="mt-16 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-[#F9DBBD]/20 text-[#F9DBBD] font-bold text-lg hover:bg-[#F9DBBD] hover:text-[#450920] hover:shadow-[0_0_30px_rgba(249,219,189,0.18)] transition-all duration-500 group"
          >
            <GitHubIcon />
            Explore All My Repositories
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;



