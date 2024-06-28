export default function Hero() {
    return (
      <section id="hero" className="h-screen flex flex-col justify-center items-center bg-primary text-white text-center p-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins mb-4 animate-fadeIn">
          HEY, I'M <span className="text-accent">MUHAMMAD AUN AFZAL</span>
        </h1>
        <p className="text-xl mb-8 animate-fadeIn">A skilled web developer, crafting and managing websites and web applications to ensure the success of the entire product with finesse.</p>
        <a href="/Muhammad Aun Afzal_Resume.pdf" download className="bg-accent text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition animate-fadeIn">
          Download CV
        </a>

      </section>
    );
  }
  