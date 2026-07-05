import { educationList } from '../data/portfolioData';

const EducationCard = ({ item, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 120}
    className="bg-[#F9DBBD]/5 backdrop-blur-md border border-[#F9DBBD]/10 rounded-2xl p-6 hover:border-[#A53860]/45 hover:shadow-[0_15px_35px_rgba(165,56,96,0.1)] transition-all duration-500"
  >
    <div className="flex items-start justify-between gap-4 mb-6">
      <span className="text-5xl font-black text-[#F9DBBD]/10 font-serif italic">0{index + 1}</span>
      <span className="text-[#FFA5AB] text-xs font-bold font-mono tracking-wider uppercase text-right">{item.duration}</span>
    </div>
    <h3 className="text-[#F9DBBD] text-xl md:text-2xl font-black mb-2 tracking-tight">
      {item.degree}
    </h3>
    <p className="text-[#F9DBBD]/60 text-sm md:text-base font-medium mb-5">
      {item.institution}
    </p>
    <span className="inline-block bg-[#A53860]/20 text-[#A53860] text-xs font-black tracking-widest uppercase py-2 px-4 rounded-full border border-[#A53860]/30">
      {item.score}
    </span>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="bg-[#450920] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#A53860]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-[#F9DBBD]/20 rounded-full px-5 py-1.5 text-sm text-[#F9DBBD]/60 font-bold mb-6 shadow-sm bg-[#F9DBBD]/5 backdrop-blur-sm">
            Education
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#F9DBBD] tracking-tight mb-4 uppercase">
            Academic Journey
          </h2>
          <p className="text-[#F9DBBD]/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            A strong computer science foundation backed by consistent academic performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {educationList.map((item, index) => (
            <EducationCard key={item.degree} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;



