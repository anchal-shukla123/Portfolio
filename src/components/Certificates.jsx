import { certificates } from '../data/portfolioData';

const CertificateCard = ({ cert, aosDelay }) => (
  <div
    data-aos="zoom-in"
    data-aos-delay={aosDelay}
    className="bg-[#450920]/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#F9DBBD]/10 hover:border-[#F9DBBD]/25 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all duration-500 cursor-default group"
  >
    <div className="aspect-[4/3] bg-[#F9DBBD] overflow-hidden">
      <img
        src={cert.image}
        alt={`${cert.name} certificate`}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h3 className="text-[#F9DBBD] font-bold text-sm md:text-base leading-tight mb-1 group-hover:text-[#F9DBBD] transition-colors">
        {cert.name}
      </h3>
      <p className="text-[#F9DBBD]/50 text-xs font-semibold uppercase tracking-wider">
        {cert.issuer}
      </p>
    </div>
  </div>
);

const Certificates = () => {
  return (
    <section id="certificates" className="bg-[#A53860] pt-20 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#450920]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#450920] mb-4 tracking-tight">
            Certifications
          </h2>
          <p className="text-[#F9DBBD] text-base md:text-lg font-semibold max-w-lg mx-auto">
            Certificates, hackathon awards, and technical achievements from my development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {certificates.featured.map((cert, index) => (
            <CertificateCard
              key={cert.name}
              cert={cert}
              aosDelay={String((index + 1) * 100)}
            />
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="700" className="flex justify-center">
          <a
            href={certificates.viewAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#F9DBBD] text-[#450920] font-bold text-base hover:bg-[#F9DBBD] hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 group"
          >
            <svg className="w-5 h-5 text-[#A53860]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Resume
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute top-16 left-6 md:left-16 text-[#450920] opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-[#450920] opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Certificates;



