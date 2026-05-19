import { useState } from 'react';

const studentData = [
  {
    id: 1,
    name: "Siska",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Tiada hari tanpa seblak jeletot.",
    hobby: "Kuliner pedas",
    ig: "@siska_spicy",
    tilt: "-rotate-2",
    tape: "red"
  },
  {
    id: 2,
    name: "Rendy",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd4CiigC9vh8g8KnMy5n5UtO8uYoLZ4DP_nCr8BZtM5QDatx2hmouJV1SgAhqA4vY7thrxgLfjAYbalUO4IRhomJPVsZRWbjjuGm3iQgyY9xORxupKvckr3XyglCgjgDJ07k_W6UXlk4eHgdV2-JaOOuQTPoXOZmCI-kq2NYxf0KGVZhrqwLTdMtduWgkRQ-244MZ1eGF1c_082uzBwVJzvNa5yYF4F44mJ6_CPc2hWbO2_a48ygqTjunVgLZOIscenkEdggvFBNH7",
    quote: "Push rank sampai subuh, tidur pas mapel sejarah.",
    hobby: "Esports",
    ig: "@rendy_pro",
    tilt: "rotate-1",
    filter: "grayscale contrast-125"
  },
  {
    id: 3,
    name: "Nadia",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZCO25L3lKrJaESVQXMOnluvuuVZi58rQI9a1j9fbEQ2UT8FBI0IJjg5YwKEBr23rU_Aurj7XQvZtulCgrsV5wH0rxcObQAE2Cp456wBVwzNR1BO6s_TyfP0sMCDgeycr3nJ9JcsUsQtaJQtwfJFugzOsAnGN5d8pwZABPqRyiZburmm8Ii237npDnhBnr9p-FjzhItAqfLa_851jrXp9b9u715IX58ICWaDpkLnsxcxhp6Ci3qPMqw6_i_YIyTZf21roExCLZBs3j",
    quote: "Buku adalah jendela dunia, drakor adalah pintu kebahagiaan.",
    hobby: "Marathon K-Drama",
    ig: "@nadia_kim",
    tilt: "-rotate-1",
    filter: "sepia-[.3]",
    star: true
  },
  {
    id: 4,
    name: "Bima",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDm3LpJsEZsqK7Qw2Rlt9X1LRGD5UUmgVol2bvTFCi61eQUI7dktrJ0gTdn6WBtUjbS7hjROKR8-o4DubZgBIZhDU0m7omsD9aEfwXRGGSo7IyQyudMIF_vc9EdZJGjMc15toWJ0e9_BH-K_CY65nEG9XrpoWqFuYJeb2yPT2ZfS_8O6wkYQ-xvtVzdPBpK8ft8Y2xcTGGRwrlaSC95hs9lGugA148ABbMUpuUAOSVwVUO5J4cS2jenTuGN0SszByKQIfSYeewikRt",
    quote: "Lebih baik telat daripada tidak datang sama sekali.",
    hobby: "Futsal",
    ig: "@bima_striker",
    tilt: "rotate-3"
  },
  {
    id: 5,
    name: "Ayu",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd-j_zn6vo8J3TVKFNvSoo55XO9xTwu5OFie6oaKT2bdsoZPu6ojGK6apu5NvDeZND0jXNHwzIRRrdyZ7gROTK8-cv-HEAvZgi2iOPc_jX0Idpjg9YKon502oPyIsD8UgsNTVpWhEcmt_9uXQvdZfVxcbqU_7pMjfAkXqw4SEmPd6jHcWZ1IfKtfc8t4OH7wjPvKdVw4Mggx91nf6WhjI5ushwChy3BT33NoXoi14wDDyavODqU9BBlSodC8EZHzUpuIq6sa4Z69HX",
    quote: "Sedia payung sebelum hujan, sedia jawaban sebelum ujian.",
    hobby: "Membaca",
    ig: "@ayu_lestari",
    tilt: "-rotate-2",
    tape: "blue"
  }
];

export default function StudentsSection() {
  return (
    <section className="space-y-lg pt-xl">
      <div className="flex justify-between items-end mb-md border-b-2 border-outline-variant pb-sm border-dashed">
        <div className="flex items-center space-x-sm">
          <span className="material-symbols-outlined text-secondary text-[32px]">groups</span>
          <h2 className="font-headline-md text-headline-md text-primary">Kawan Seperjuangan</h2>
        </div>
        <span className="font-label-caps text-label-caps text-on-surface-variant">33 SISWA</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-gutter">
        {studentData.map((student) => (
          <div key={student.id} className={`polaroid transform ${student.tilt} relative group cursor-pointer`}>
            {/* Tapes / Stickers */}
            {student.tape === 'red' && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-red-400 opacity-60 transform -rotate-3 z-10"></div>
            )}
            {student.tape === 'blue' && (
              <div className="absolute -top-3 left-4 w-10 h-4 bg-primary opacity-40 transform rotate-6 z-10"></div>
            )}
            {student.star && (
              <div className="absolute -top-2 right-2 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center z-10 border border-primary">
                <span className="material-symbols-outlined text-[16px] text-on-secondary-container">star</span>
              </div>
            )}

            {/* Default State: Photo */}
            <img 
              alt={student.name} 
              className={`w-full aspect-square object-cover mb-3 ${student.filter || ''}`} 
              src={student.img}
            />
            
            {/* Interactive Hover State: Details Overlay */}
            <div className="absolute inset-0 bg-surface-container-lowest/95 p-4 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-sm border-b-4 border-primary">
              <span className="font-label-caps text-label-caps text-secondary mb-1">Hobi: {student.hobby}</span>
              <p className="font-subheading-quote text-body-md text-primary italic mb-3">"{student.quote}"</p>
              <div className="flex items-center gap-1 text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-sm border border-outline-variant">
                <span className="material-symbols-outlined text-[16px]">alternate_email</span>
                <span className="font-caption text-caption">{student.ig}</span>
              </div>
            </div>

            <p className="font-subheading-quote text-subheading-quote text-center text-primary mt-2">{student.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
