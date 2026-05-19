export default function SuperlativesSection() {
  const superlatives = [
    {
      title: "Si Paling Rajin",
      winner: "Nadia",
      desc: "Selalu ngumpulin tugas H-3 sebelum deadline.",
      icon: "menu_book",
      color: "bg-[#d9f2e6]",
      textColor: "text-[#006b3e]"
    },
    {
      title: "Si Tukang Tidur",
      winner: "Rendy",
      desc: "Bisa tidur nyenyak meski guru lagi marah-marah di depan.",
      icon: "bedtime",
      color: "bg-[#e0e8f5]",
      textColor: "text-[#1a4b8c]"
    },
    {
      title: "Si Paling Lucu",
      winner: "Bima",
      desc: "Kalo gak ada dia, kelas rasanya kayak kuburan.",
      icon: "sentiment_very_satisfied",
      color: "bg-[#fcebb6]",
      textColor: "text-[#b28a00]"
    }
  ];

  return (
    <section className="space-y-lg pt-xl">
      <div className="flex justify-between items-end mb-md border-b-2 border-outline-variant pb-sm border-dashed">
        <div className="flex items-center space-x-sm">
          <span className="material-symbols-outlined text-secondary text-[32px]">emoji_events</span>
          <h2 className="font-headline-md text-headline-md text-primary">Nominasi Kelas</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {superlatives.map((item, idx) => (
          <div key={idx} className={`${item.color} p-md border-2 border-primary shadow-[6px_6px_0px_0px_rgba(3,31,65,1)] rotate-${idx % 2 === 0 ? '1' : '-1'} hover:rotate-0 transition-transform relative group`}>
            {/* Medallion / Ribbon effect */}
            <div className="absolute -top-6 -right-4 bg-error text-white w-14 h-14 rounded-full flex items-center justify-center border-4 border-white shadow-md z-10 group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
            </div>
            
            <h3 className={`font-display-md text-display-md ${item.textColor} mb-2 pr-8`}>{item.title}</h3>
            
            <div className="bg-white/60 p-sm border border-white/50 rounded-sm mb-sm backdrop-blur-sm">
              <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">Pemenang:</span>
              <span className="font-headline-sm text-headline-sm text-primary">{item.winner}</span>
            </div>
            
            <p className="font-body-md text-body-md text-on-surface">"{item.desc}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
