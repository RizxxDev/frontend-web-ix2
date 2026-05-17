export default function TimelineSection() {
  return (
    <>
      {/* Page Header */}
      <div className="text-center mb-xl relative">
        <h1 className="font-display-lg text-display-lg md:text-display-lg text-primary inline-block relative z-10 -rotate-1">
          Jejak Langkah Kita
          {/* Washi tape accent */}
          <span className="absolute -top-sm -left-md bg-secondary/40 washi-tape-edge w-24 h-6 -rotate-6 z-[-1]"></span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-sm">
          Dari awal yang canggung hingga perpisahan yang manis. Ini adalah cerita tiga tahun perjalanan Kelas IX-B.
        </p>
      </div>
      {/* Timeline Container */}
      <div className="relative w-full">
        {/* Center Vertical Line (Dashed pencil look) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-[3px] border-dashed border-primary/30 z-0 hidden md:block"></div>
        {/* Mobile Left Line */}
        <div className="absolute left-4 h-full border-l-[3px] border-dashed border-primary/30 z-0 md:hidden"></div>
        {/* Timeline Item 1: Kelas 7 */}
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start w-full mb-xl group">
          {/* Mobile dot */}
          <div className="absolute left-[9px] top-8 w-4 h-4 bg-secondary rounded-full border-2 border-background z-10 md:hidden"></div>
          {/* Left Content (Text) */}
          <div className="w-full md:w-[45%] pl-xl md:pl-0 pr-0 md:pr-lg text-left md:text-right mt-lg md:mt-0 relative">
            {/* Center dot for desktop */}
            <div className="hidden md:block absolute right-[-24px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-secondary rounded-full border-[3px] border-background z-10 shadow-[2px_2px_0px_0px_rgba(29,53,87,1)]"></div>
            <div className="inline-block bg-surface-container-low p-md border-2 border-primary tactile-shadow rotate-1 transform transition-transform group-hover:rotate-0">
              <div className="inline-block bg-primary text-on-primary px-sm py-xs font-label-caps text-label-caps mb-sm washi-tape-edge -rotate-2">KELAS 7</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-xs">Masa MPLS Canggung</h3>
              <p className="font-body-md text-body-md text-on-surface">Masih ingat hari pertama? Seragam kebesaran, rambut rapi, dan senyum malu-malu saat perkenalan lewat Zoom awal. Kita bahkan belum tahu nama panggilan masing-masing.</p>
            </div>
          </div>
          {/* Right Content (Photo) */}
          <div className="w-full md:w-[45%] pl-xl md:pl-lg mt-md md:mt-0 flex justify-start md:justify-start">
            <div className="bg-surface-container-lowest p-[8px] pb-[32px] tactile-shadow -rotate-2 group-hover:rotate-1 group-hover:-translate-y-1 transition-all max-w-[300px]">
              <div className="w-full aspect-[4/3] bg-surface-dim overflow-hidden border border-outline-variant/30 bg-grain">
                <img 
                  alt="MPLS Photo" 
                  className="w-full h-full object-cover grayscale-[30%] sepia-[20%]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5ySgvFkCo2B8uOmap6AXFJcrL6_Gihs5hSNR3OA6zLBb94trBCkGRrEA7--xgwPdbJvZ3WfOJDwfReAlBt-xFkyethMU8WHCBQhNQurLDU2DELZZiowIdJgJ2BbhhZtt18EUGmGSo7E708UzeGJnOpOZFS1iaHNzlf7BlWrw25iJ2MidXAm1gMQWj809UY3_sPFtkPAfDi43g7Z8X-3_Jr_WGffYjRkXq2bi6G8GBCy9vo9WHP3zQ6EcPyxGDrL76b3jIp9H7BTsd"
                />
              </div>
              <p className="font-subheading-quote text-subheading-quote text-primary text-center mt-sm">Si Paling Kaku 😬</p>
            </div>
          </div>
        </div>
        {/* Timeline Item 2: Kelas 8 */}
        <div className="relative flex flex-col md:flex-row-reverse justify-between items-center md:items-start w-full mb-xl group">
          {/* Mobile dot */}
          <div className="absolute left-[9px] top-8 w-4 h-4 bg-tertiary rounded-full border-2 border-background z-10 md:hidden"></div>
          {/* Right Content (Text) */}
          <div className="w-full md:w-[45%] pl-xl md:pl-lg pr-0 text-left mt-lg md:mt-0 relative">
            {/* Center dot for desktop */}
            <div className="hidden md:block absolute left-[-24px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-tertiary rounded-full border-[3px] border-background z-10 shadow-[2px_2px_0px_0px_rgba(29,53,87,1)]"></div>
            <div className="inline-block bg-[#fff5cc] p-md shadow-[4px_4px_0px_0px_rgba(125,88,0,0.5)] -rotate-2 transform transition-transform group-hover:-rotate-1 relative">
              {/* Pin graphic simulation */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-tertiary-container rounded-full shadow-md z-20"></div>
              <div className="inline-block bg-tertiary text-on-tertiary px-sm py-xs font-label-caps text-label-caps mb-sm washi-tape-edge rotate-1">KELAS 8</div>
              <h3 className="font-headline-md text-headline-md text-tertiary mb-xs">Era Belajar Daring</h3>
              <p className="font-body-md text-body-md text-on-surface">Mulai kompak tapi ketemunya di layar kotak. Drama mic bocor, lupa absen, sampai mabar diem-diem pas jam kosong. Meski jauh, kita ngerasa makin deket.</p>
            </div>
          </div>
          {/* Left Content (Photo) */}
          <div className="w-full md:w-[45%] pl-xl md:pl-0 pr-0 md:pr-lg mt-md md:mt-0 flex justify-start md:justify-end">
            <div className="bg-surface-container-lowest p-[8px] pb-[32px] tactile-shadow rotate-3 group-hover:rotate-2 group-hover:-translate-y-1 transition-all max-w-[300px]">
              <div className="w-full aspect-square bg-surface-dim overflow-hidden border border-outline-variant/30 bg-grain">
                <img 
                  alt="Online Learning Photo" 
                  className="w-full h-full object-cover filter contrast-125" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7Z4v-i446dEv0X97E5otQaEfCHmm-tp97WdTbOMFG7NHkwb2h62QeItelp8-58ExlrtR8B0wY0uuQ-k0iRYs35fkYdb8UqdJ2EcozPuQMNjJPv7eR6TZnV01l90nVEPol5NpbUgaPje3U6Cj9EBmCUWcoUJuJ_MagrGjzo9zcItI2VV1wNRGtsUXWExzulaRcuNsSokeoBvmRyrteRY4D-3ExJr4uhYe1cbRg9IBowiiW2hHIu6reKl1n-EN2Ifjv-znxvA9qZ5TH"
                />
              </div>
              <p className="font-subheading-quote text-subheading-quote text-primary text-center mt-sm">Mabar on Cam off 💻</p>
            </div>
          </div>
        </div>
        {/* Timeline Item 3: Kelas 9 */}
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start w-full group">
          {/* Mobile dot */}
          <div className="absolute left-[9px] top-8 w-4 h-4 bg-primary rounded-full border-2 border-background z-10 md:hidden"></div>
          {/* Left Content (Text) */}
          <div className="w-full md:w-[45%] pl-xl md:pl-0 pr-0 md:pr-lg text-left md:text-right mt-lg md:mt-0 relative">
            {/* Center dot for desktop */}
            <div className="hidden md:block absolute right-[-24px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-primary rounded-full border-[3px] border-background z-10 shadow-[2px_2px_0px_0px_rgba(29,53,87,1)]"></div>
            <div className="inline-block bg-surface-container-high p-md border-2 border-primary tactile-shadow rotate-1 transform transition-transform group-hover:-rotate-1 relative">
              {/* Tape strip */}
              <div className="absolute -right-4 -top-4 w-12 h-6 bg-secondary/50 rotate-45 washi-tape-edge"></div>
              <div className="inline-block bg-secondary text-on-secondary px-sm py-xs font-label-caps text-label-caps mb-sm washi-tape-edge -rotate-2">KELAS 9</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-xs">Ujian &amp; Perpisahan Solid</h3>
              <p className="font-body-md text-body-md text-on-surface">Tahun penuh tekanan tryout tapi juga penuh tawa di kantin. Belajar bareng sampai sore, bikin jaket kelas, dan nyiapin acara perpisahan yang bakal terus kita inget selamanya.</p>
            </div>
          </div>
          {/* Right Content (Photo) */}
          <div className="w-full md:w-[45%] pl-xl md:pl-lg mt-md md:mt-0 flex justify-start md:justify-start">
            <div className="bg-surface-container-lowest p-[8px] pb-[32px] shadow-[6px_6px_0px_0px_rgba(29,53,87,1)] -rotate-3 group-hover:-rotate-1 group-hover:-translate-y-2 transition-all max-w-[320px] relative z-20">
              <div className="w-full aspect-[4/3] bg-surface-dim overflow-hidden border border-outline-variant/30 bg-grain">
                <img 
                  alt="Farewell Photo" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_WdbbGUacHyxQ8qP2ZZaWjKYrpIKhZLxjxZ6AD0JwqRtnT4hiwh2_6C0mjckDoFdieyn5FTZ2sAeb56-PoDMz0zzViinHllVAGT1mU--r2DF7mNW_wHRqgSNI-kyMpN7Yfz_Jb-Yq-kufQ4DC1xrQfgGc7OZC67rYUSudfvO-qpbKq9PHPIOekv3t7f1130pIZpatO61iTTnwUwvsxQ7Sx-rDallXP4hYDUu3KeIDxrdcqLdnBQxilVCJ7qVFqTMMyNLaFrWOimXS"
                />
              </div>
              <p className="font-subheading-quote text-subheading-quote text-primary text-center mt-sm">We made it! 🎉</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
