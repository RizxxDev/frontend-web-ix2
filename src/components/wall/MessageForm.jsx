export default function MessageForm() {
  return (
    <section className="lg:col-span-1 bg-surface-container-lowest p-lg border-2 border-primary postit-shadow transform -rotate-2 relative z-10">
      {/* Washi Tape decoration */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-secondary-container/60 transform rotate-3 border-x-4 border-dashed border-background"></div>
      <h2 className="font-headline-md text-headline-md text-primary mb-md">Tulis Pesanmu!</h2>
      <form className="space-y-lg">
        <div>
          <label className="font-label-caps text-label-caps text-on-surface-variant block mb-xs">NAMA KAMU</label>
          <input className="notebook-input font-body-lg text-body-lg text-primary placeholder:text-outline" placeholder="Siapa namamu?" type="text" />
        </div>
        <div>
          <label className="font-label-caps text-label-caps text-on-surface-variant block mb-xs">PESAN MANIS</label>
          <textarea className="notebook-input font-subheading-quote text-subheading-quote text-primary placeholder:text-outline resize-none" placeholder="Tulis sesuatu yang berkesan..." rows="4"></textarea>
        </div>
        <div>
          <label className="font-label-caps text-label-caps text-on-surface-variant block mb-xs">PILIH WARNA KERTAS</label>
          <div className="flex gap-sm">
            <div className="w-8 h-8 bg-postit-yellow border-2 border-primary cursor-pointer ring-2 ring-primary ring-offset-2"></div>
            <div className="w-8 h-8 bg-postit-pink border-2 border-primary cursor-pointer hover:-translate-y-1 transition-transform"></div>
            <div className="w-8 h-8 bg-postit-blue border-2 border-primary cursor-pointer hover:-translate-y-1 transition-transform"></div>
          </div>
        </div>
        <button className="w-full py-sm border-2 border-primary bg-primary text-on-primary font-label-caps text-label-caps hover:bg-surface-container-lowest hover:text-primary transition-colors active:translate-y-1 active:translate-x-1" type="button">
          TEMPEL DI MADING
        </button>
      </form>
    </section>
  );
}
