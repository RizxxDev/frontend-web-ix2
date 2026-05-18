export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
      {/* Left: Hero Copy & Identity */}
      <div className="lg:col-span-5 flex flex-col gap-md pt-lg relative z-10">
        {/* Washi Tape Identity */}
        <div className="self-start bg-primary/20 text-primary px-md py-sm rotate-[-3deg] shadow-sm transform hover:rotate-0 transition-transform cursor-default inline-flex items-center gap-sm">
          <span className="material-symbols-outlined text-[20px]">school</span>
          <span className="font-label-caps text-label-caps tracking-widest uppercase">IX-2 • Solidaritas Tanpa Batas</span>
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mt-md leading-tight">
          Ingat masa-masa indah di kelas IX-2?
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">
          Buku tahunan digital ini adalah mesin waktu kita. Berisi tawa, cerita konyol, dan kenangan yang terukir di bangku sekolah. Mari buka halamannya.
        </p>
        {/* Sticker Button */}
        <button className="mt-md self-start bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-xl py-sm border-2 border-primary shadow-[4px_4px_0px_0px_rgba(3,31,65,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(3,31,65,1)] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
          MULAI JELAJAH
        </button>
      </div>
      {/* Right: Big Polaroid Photo */}
      <div className="lg:col-span-7 relative mt-xl lg:mt-0">
        {/* Decorative element behind photo */}
        <div className="absolute -top-lg -right-md w-32 h-32 bg-tertiary-fixed-dim rotate-12 z-0 hidden md:block"></div>
        {/* The Polaroid Container */}
        <div className="bg-surface-container-lowest p-[8px] pb-[32px] md:pb-[48px] shadow-[6px_6px_0px_0px_rgba(29,53,87,1)] rotate-[2deg] hover:rotate-0 transition-transform duration-500 relative z-10 border border-outline-variant/30 group">
          {/* Top tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#E5E0D8]/80 rotate-[-1deg] shadow-sm z-20 mix-blend-multiply"></div>
          <div className="aspect-[4/3] w-full overflow-hidden bg-surface-dim relative">
            <img 
              alt="Class photo" 
              className="w-full h-full object-cover grayscale-[20%] sepia-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" 
              src="https://ik.imagekit.io/f893bdhuo/WhatsApp%20Image%202026-04-25%20at%2015.51.42.jpeg"
            />
          </div>
          <div className="mt-md text-center">
            <span className="font-subheading-quote text-subheading-quote text-primary/80 block transform -rotate-1">
              "Formasi Lengkap, Sebelum Berpisah."
            </span>
            <span className="font-caption text-caption text-on-surface-variant mt-2 block">
              Halaman Sekolah, Mei 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
