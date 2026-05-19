export default function GalleryHeader() {
  return (
    <section className="mb-xl relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div className="relative z-10 max-w-2xl">
        <div className="absolute -top-6 -left-6 w-16 h-8 bg-secondary-container/60 washi-tape -rotate-6 z-20 mix-blend-multiply"></div>
        <h1 className="font-display-lg text-display-lg text-primary mb-4 relative z-10">Kapsul Waktu</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Kumpulan memori acak, tawa di kantin, keringat saat class meeting, hingga tangis bangga saat kelulusan. Ini adalah kepingan cerita Kelas IX-2 yang terekam selamanya.</p>
      </div>
      {/* Post-it Note */}
      <div className="bg-surface-container-high p-6 w-64 shadow-[4px_4px_0px_0px_#1d3557] rotate-3 relative shrink-0">
        <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-12 h-6 bg-primary/40 washi-tape mix-blend-multiply"></div>
        <p className="font-subheading-quote text-subheading-quote text-primary">"Jangan pernah lupa dari mana kita mulai. Terus maju!"</p>
        <p className="font-label-caps text-label-caps mt-4 text-secondary text-right">- Wali Kelas</p>
      </div>
    </section>
  );
}
