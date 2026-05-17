export default function StudyTourSection() {
  return (
    <section className="mb-xl">
      <div className="flex items-center gap-4 mb-8 justify-end">
        <h2 className="font-headline-md text-headline-md text-primary relative inline-block text-right">
          <span className="relative z-10">02. Study Tour Yogya</span>
          <div className="absolute bottom-1 right-0 w-full h-3 bg-primary-fixed-dim/50 rotate-1 z-0 mix-blend-multiply"></div>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
        <div className="sm:col-span-2">
          <div className="bg-surface-container-lowest p-2 pb-10 shadow-[8px_8px_0px_0px_rgba(29,53,87,1)] relative -rotate-1">
            <div className="absolute top-4 -left-4 w-12 h-12 bg-on-tertiary-container rounded-full flex items-center justify-center shadow-sm z-10 transform -rotate-12">
              <span className="font-label-caps text-label-caps text-on-tertiary font-bold">HOT!</span>
            </div>
            <div className="aspect-video bg-surface-variant overflow-hidden mb-4 border border-outline-variant">
              <img 
                alt="Borobudur" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwaJanUc2olzXSq-nUpmbABBeVNfmrgHo_rumiWRgA8CsUniammnd9nNBLrVGBWe2g0y6EvL79hScYytTqJ0yVCou_xouIU6vpbYr9t756LlT4AtgJQVtKcGopv61Q7SgODtaT-f7C3h559_bIl-y1RbsBiSJpJOe4DnMWDCa8EQuqqy0U7UDI54qqTpglinZpXeVpjZ-GfHeS3AHNpYLBMt3LGhxyHVeK47mxDc2m7qG_ckIiqOF5CD8HlA6AQ9NIWajhC5dfnQ0A"
              />
            </div>
            <p className="font-subheading-quote text-subheading-quote text-center text-primary-container px-4">Panas terik tapi tetap eksis di Borobudur.</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <div className="bg-surface-container-lowest p-2 pb-8 shadow-[4px_4px_0px_0px_rgba(29,53,87,1)] relative rotate-4 w-3/4 self-end">
            <div className="absolute -top-3 right-4 w-16 h-6 bg-secondary/40 washi-tape rotate-6 mix-blend-multiply z-10"></div>
            <div className="aspect-square bg-surface-variant overflow-hidden mb-3 border border-outline-variant">
              <img 
                alt="Oleh-oleh" 
                className="w-full h-full object-cover contrast-125 saturate-50" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6bvGVsjBPKooJA-6zIKHEbFPGisP1tmAeNcmDzQzHmQNDwMRH25aI0hzfIl8cVzouZlrKYr8OmGyDcgEO87k4naE3luvkrn7OSNTUgueNaadcql7dhWHPq0iNCxVp54WSAw1IfppAvTWfzo8EXRoiwu41qrqX_3bhoiM4bBOWdY9KyZiDkaXlbn7dO2ZYRzm9slcy-RPP2pB6a7HIeHvuCLKjIi7EmPVIAGTWUe5QV5cPRi6fxdlFhEVYZHWkQJKOTNS-vFJNWST_"
              />
            </div>
            <p className="font-caption text-caption text-center text-primary-container">Hasil rampokan Malioboro.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
