export default function BulletinBoard() {
  return (
    <section className="lg:col-span-2 relative">
      {/* Board Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZTRlM2Q3IiAvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjY2M0YzZjZiIgLz4KPC9zdmc+')] opacity-50 rounded-xl border-4 border-outline-variant p-md"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg p-md relative z-10">
        {/* Note 1 */}
        <div className="bg-postit-yellow p-md border-2 border-primary postit-shadow transform rotate-2 hover:rotate-0 transition-transform cursor-pointer relative">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-tertiary-fixed-dim/50 transform -rotate-4 border-x-2 border-dashed border-background"></div>
          <p className="font-subheading-quote text-subheading-quote text-primary mb-md leading-relaxed">
            "Jangan lupa pas kemah kita hampir dihukum bareng gara-gara telat bangun! Bakal kangen banget sama kalian semua."
          </p>
          <div className="flex items-center justify-between border-t border-primary/20 pt-sm">
            <span className="font-label-caps text-label-caps text-primary">- Raka Dimas</span>
            <span className="material-symbols-outlined text-primary/50 text-sm">favorite</span>
          </div>
        </div>
        {/* Note 2 */}
        <div className="bg-postit-pink p-md border-2 border-primary postit-shadow transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer relative mt-8">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-secondary-fixed/50 transform rotate-2 border-x-2 border-dashed border-background"></div>
          <p className="font-subheading-quote text-subheading-quote text-primary mb-md leading-relaxed">
            "Pak Budi guru paling the best! Terima kasih buat 3 tahun yang luar biasa IX-B. See you on top guys!"
          </p>
          <div className="flex items-center justify-between border-t border-primary/20 pt-sm">
            <span className="font-label-caps text-label-caps text-primary">- Sarah A.</span>
            <span className="material-symbols-outlined text-primary/50 text-sm">sentiment_satisfied</span>
          </div>
        </div>
        {/* Note 3 */}
        <div className="bg-postit-blue p-md border-2 border-primary postit-shadow transform rotate-1 hover:rotate-0 transition-transform cursor-pointer relative">
          <div className="absolute -top-2 right-4 w-10 h-10 rounded-full bg-error-container border-2 border-primary flex items-center justify-center transform rotate-12 shadow-sm">
            <span className="material-symbols-outlined text-error text-xs">push_pin</span>
          </div>
          <p className="font-subheading-quote text-subheading-quote text-primary mb-md leading-relaxed">
            "Pensi kemaren epik banget woi! Makasih buat panitia yang udah kerja keras. Sukses SMA nya!"
          </p>
          <div className="flex items-center justify-between border-t border-primary/20 pt-sm">
            <span className="font-label-caps text-label-caps text-primary">- Kevin W.</span>
          </div>
        </div>
        {/* Note 4 */}
        <div className="bg-surface-container-lowest p-md border-2 border-primary postit-shadow transform -rotate-1 hover:rotate-0 transition-transform cursor-pointer relative mt-4">
          <div className="absolute -top-2 left-4 w-12 h-4 bg-primary-container/30 transform rotate-6"></div>
          <p className="font-subheading-quote text-subheading-quote text-primary mb-md leading-relaxed">
            "Pojok kantin bakal sepi tanpa kita. Tetep solid ya walau nanti beda sekolah."
          </p>
          <div className="flex items-center justify-between border-t border-primary/20 pt-sm">
            <span className="font-label-caps text-label-caps text-primary">- Dinda</span>
          </div>
        </div>
      </div>
    </section>
  );
}
