export default function BentoGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-lg py-xl items-center relative">
      {/* Connection lines (decorative) */}
      <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-outline-variant/50 -z-10 hidden md:block"></div>
      {/* Stat 1: Paper Scrap */}
      <div className="bg-surface-container p-lg shadow-[4px_4px_0px_0px_rgba(29,53,87,1)] rotate-[-1deg] border border-outline-variant flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform">
        <span className="material-symbols-outlined text-[48px] text-primary mb-sm">group</span>
        <span className="font-display-lg text-display-lg text-primary">33</span>
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mt-2">Siswa/i Tangguh</span>
      </div>
      {/* Quote: Post-it Note */}
      <div className="bg-secondary-fixed p-xl shadow-[4px_4px_0px_0px_rgba(29,53,87,1)] rotate-[3deg] relative flex flex-col justify-center h-full min-h-[250px]">
        {/* Pin */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-error shadow-sm border-2 border-white"></div>
        <p className="font-subheading-quote text-subheading-quote text-on-secondary-fixed leading-relaxed text-center">
          "Tugas boleh numpuk, tapi jam istirahat tetap harus nongkrong di kantin."
        </p>
        <span className="font-caption text-caption text-on-secondary-fixed/80 text-center mt-md italic">
          - Kutipan Angkatan
        </span>
      </div>
      {/* Stat 2: Paper Scrap */}
      <div className="bg-surface-container p-lg shadow-[4px_4px_0px_0px_rgba(29,53,87,1)] rotate-[-2deg] border border-outline-variant flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform">
        <span className="material-symbols-outlined text-[48px] text-secondary mb-sm">photo_library</span>
        <span className="font-display-lg text-display-lg text-primary">500+</span>
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mt-2">Foto Kenangan</span>
      </div>
    </section>
  );
}
