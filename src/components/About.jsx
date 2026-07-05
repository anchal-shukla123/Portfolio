import stackImage from '../assets/anchal/hero.png';
import javaIcon from "../assets/anchal/skills/java.png";
import springIcon from "../assets/anchal/skills/spring.png";
import nodeIcon from "../assets/anchal/skills/node.png";
import reactIcon from "../assets/anchal/skills/react.png";
import sqlIcon from "../assets/anchal/skills/sql.png";
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const JavaIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <img
      src={javaIcon}
      alt="Java"
      className="w-16 h-16 md:w-20 md:h-20 object-contain"
    />
    <span className="text-xs font-bold text-[#F9DBBD]/70 uppercase tracking-wider">Java</span>
  </div>
);

const SpringBootIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <img
      src={springIcon}
      alt="Spring Boot"
      className="w-16 h-16 md:w-20 md:h-20 object-contain"
    />
    <span className="text-xs font-bold text-[#F9DBBD]/70 uppercase tracking-wider">Spring Boot</span>
  </div>
);

const MernIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <img
      src={reactIcon}
      alt="MERN Stack"
      className="w-16 h-16 md:w-20 md:h-20 object-contain"
    />
    <span className="text-xs font-bold text-[#F9DBBD]/70 uppercase tracking-wider">MERN Stack</span>
  </div>
);

const NodeIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <img
      src={nodeIcon}
      alt="Node.js"
      className="w-16 h-16 md:w-20 md:h-20 object-contain"
    />
    <span className="text-xs font-bold text-[#F9DBBD]/70 uppercase tracking-wider">Node.js</span>
  </div>
);

const SQLIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <img
      src={sqlIcon}
      alt="SQL"
      className="w-16 h-16 md:w-20 md:h-20 object-contain"
    />
    <span className="text-xs font-bold text-[#F9DBBD]/70 uppercase tracking-wider">SQL</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#A53860] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-[#450920] transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-[#F9DBBD] rounded border border-[#DA627D]/50 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-[#450920] w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-[#450920] rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-[#450920]/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-[#450920]/80 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Anchal Shukla - Full Stack Developer" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-[#F9DBBD] mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-[#450920] mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <JavaIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <SpringBootIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <MernIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <SQLIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#F9DBBD]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-[#450920] opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-[#450920] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;





