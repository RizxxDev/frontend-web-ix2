import { useState } from 'react';

const studentData = [
  {
    id: 1,
    name: "Adinda Putri Widiansyah Saragih",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Tiada hari tanpa seblak jeletot level 5.",
    hobby: "Kuliner pedas & mukbang",
    ig: "@adinda_putri",
    tilt: "-rotate-2",
    tape: "red"
  },
  {
    id: 2,
    name: "Ahmad Naufal al-Abrar",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd4CiigC9vh8g8KnMy5n5UtO8uYoLZ4DP_nCr8BZtM5QDatx2hmouJV1SgAhqA4vY7thrxgLfjAYbalUO4IRhomJPVsZRWbjjuGm3iQgyY9xORxupKvckr3XyglCgjgDJ07k_W6UXlk4eHgdV2-JaOOuQTPoXOZmCI-kq2NYxf0KGVZhrqwLTdMtduWgkRQ-244MZ1eGF1c_082uzBwVJzvNa5yYF4F44mJ6_CPc2hWbO2_a48ygqTjunVgLZOIscenkEdggvFBNH7",
    quote: "Push rank sampai subuh, tidur pas mapel sejarah.",
    hobby: "Esports & Mobile Legends",
    ig: "@naufal_al",
    tilt: "rotate-1",
    filter: "grayscale contrast-125",
    star: true
  },
  {
    id: 3,
    name: "Aisyah Nabila Borumanik",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZCO25L3lKrJaESVQXMOnluvuuVZi58rQI9a1j9fbEQ2UT8FBI0IJjg5YwKEBr23rU_Aurj7XQvZtulCgrsV5wH0rxcObQAE2Cp456wBVwzNR1BO6s_TyfP0sMCDgeycr3nJ9JcsUsQtaJQtwfJFugzOsAnGN5d8pwZABPqRyiZburmm8Ii237npDnhBnr9p-FjzhItAqfLa_851jrXp9b9u715IX58ICWaDpkLnsxcxhp6Ci3qPMqw6_i_YIyTZf21roExCLZBs3j",
    quote: "Buku adalah jendela dunia, drakor adalah pintu kebahagiaan.",
    hobby: "Marathon K-Drama",
    ig: "@aisyah_nabi",
    tilt: "-rotate-1",
    filter: "sepia-[.3]",
    star: true
  },
  {
    id: 4,
    name: "Alya Azzahra Hakim",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDm3LpJsEZsqK7Qw2Rlt9X1LRGD5UUmgVol2bvTFCi61eQUI7dktrJ0gTdn6WBtUjbS7hjROKR8-o4DubZgBIZhDU0m7omsD9aEfwXRGGSo7IyQyudMIF_vc9EdZJGjMc15toWJ0e9_BH-K_CY65nEG9XrpoWqFuYJeb2yPT2ZfS_8O6wkYQ-xvtVzdPBpK8ft8Y2xcTGGRwrlaSC95hs9lGugA148ABbMUpuUAOSVwVUO5J4cS2jenTuGN0SszByKQIfSYeewikRt",
    quote: "Lebih baik telat daripada tidak datang sama sekali.",
    hobby: "Futsal & Olahraga",
    ig: "@alya_azza",
    tilt: "rotate-3",
    tape: "blue"
  },
  {
    id: 5,
    name: "Aprillia",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd-j_zn6vo8J3TVKFNvSoo55XO9xTwu5OFie6oaKT2bdsoZPu6ojGK6apu5NvDeZND0jXNHwzIRRrdyZ7gROTK8-cv-HEAvZgi2iOPc_jX0Idpjg9YKon502oPyIsD8UgsNTVpWhEcmt_9uXQvdZfVxcbqU_7pMjfAkXqw4SEmPd6jHcWZ1IfKtfc8t4OH7wjPvKdVw4Mggx91nf6WhjI5ushwChy3BT33NoXoi14wDDyavODqU9BBlSodC8EZHzUpuIq6sa4Z69HX",
    quote: "Sedia payung sebelum hujan, sedia jawaban sebelum ujian.",
    hobby: "Membaca Buku",
    ig: "@aprillia_lestari",
    tilt: "-rotate-2",
    tape: "blue"
  },
  {
    id: 6,
    name: "Bagus Prasetyo",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Es teh manis kantin Mak Nyak adalah bahan bakar utamaku.",
    hobby: "Mabar MLBB & Ngemil",
    ig: "@bagus_prst",
    tilt: "rotate-1",
    tape: "red"
  },
  {
    id: 7,
    name: "Citra Lestari",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Belajar dengan tekun, beristirahat lebih tekun lagi.",
    hobby: "Menulis Novel & Puisi",
    ig: "@citra_lestari",
    tilt: "-rotate-1",
    star: true
  },
  {
    id: 8,
    name: "Dimas Aditya",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Jangan remehkan orang pendiam, dia lagi mikirin build item Savage.",
    hobby: "Esports & Gaming",
    ig: "@dimas_adit",
    tilt: "rotate-3",
    tape: "blue"
  },
  {
    id: 9,
    name: "Elisa Fitriani",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Tugas menumpuk? Tenang, sistem kebut semalam tak pernah mengecewakan.",
    hobby: "Nonton K-Drama & Menulis",
    ig: "@elisa_fit",
    tilt: "rotate-2"
  },
  {
    id: 10,
    name: "Farhan Ramadhan",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Setiap hari adalah petualangan, terutama pas lari menghindari gerbang sekolah tutup.",
    hobby: "Futsal & Olahraga",
    ig: "@farhan_rmdn",
    tilt: "-rotate-3"
  },
  {
    id: 11,
    name: "Gita Cahyani",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Suara merduku hanya terdengar saat nyanyi pake shower di kamar mandi.",
    hobby: "Menyanyi & Musik",
    ig: "@gita_cahya",
    tilt: "-rotate-2",
    tape: "red"
  },
  {
    id: 12,
    name: "Hadi Sulistyo",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Rumus fisika itu sebenarnya gampang, yang sulit itu mengerjakannya.",
    hobby: "Membaca Komik & Gambar",
    ig: "@hadi_sulis",
    tilt: "rotate-1"
  },
  {
    id: 13,
    name: "Indah Permatasari",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Senyummu adalah semangatku, tapi kuota WiFi gratisan tetap yang nomor satu.",
    hobby: "Ngevlog & Kuliner",
    ig: "@indah_permata",
    tilt: "-rotate-1",
    tape: "blue"
  },
  {
    id: 14,
    name: "Joko Wahyudi",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Hidup ini bagaikan roda berputar, kadang di atas, kadang ketiduran di pojok kelas.",
    hobby: "Tidur Siang & Santai",
    ig: "@joko_wahyu",
    tilt: "rotate-3"
  },
  {
    id: 15,
    name: "Kartika Sari",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Bikin catatan estetik pakai pulpen warna-warni biar kelihatan rajin pas disidak.",
    hobby: "Menggambar Doodling",
    ig: "@kartika_sari",
    tilt: "rotate-2"
  },
  {
    id: 16,
    name: "Luthfi Pratama",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Cita-cita setinggi langit, tapi mager di kasur rasanya setengah mati.",
    hobby: "Esports & Gaming",
    ig: "@luthfi_pratama",
    tilt: "-rotate-3",
    tape: "red"
  },
  {
    id: 17,
    name: "Mahendra Putra",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Jangan panggil saya bos, panggil saja ketua kelas paling ramah sedunia.",
    hobby: "Basket & Olahraga",
    ig: "@mahendra_p",
    tilt: "-rotate-2"
  },
  {
    id: 18,
    name: "Nabila Syafitri",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Hidup tanpa bakso pedas bagaikan langit sore tanpa warna jingga.",
    hobby: "Kuliner & Jajan",
    ig: "@nabila_syaf",
    tilt: "rotate-1",
    tape: "blue"
  },
  {
    id: 19,
    name: "Oki Setiawan",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Kamera HP ini saksi bisu dari seluruh kekonyolan anak-anak IX-2.",
    hobby: "Fotografi & Desain",
    ig: "@oki_setiawan",
    tilt: "-rotate-1"
  },
  {
    id: 20,
    name: "Putri Handayani",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Drakor adalah caraku melarikan diri dari rumus matematika yang mematikan.",
    hobby: "Nonton K-Drama & Seni",
    ig: "@putri_handayani",
    tilt: "rotate-3",
    star: true
  },
  {
    id: 21,
    name: "Rian Hidayat",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Remedial bukanlah aib, melainkan sebuah proses silaturahmi dengan guru piket.",
    hobby: "Gaming & Mabar",
    ig: "@rian_hidayat",
    tilt: "rotate-2",
    tape: "red"
  },
  {
    id: 22,
    name: "Siti Aminah",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Selalu mendengarkan musik santai biar kepala tetap dingin saat ujian fisika.",
    hobby: "Mendengarkan Musik & Baca",
    ig: "@siti_aminah",
    tilt: "-rotate-3"
  },
  {
    id: 23,
    name: "Taufik Ismail",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Senin upacara bendera, selasa nungguin hari sabtu libur sekolah.",
    hobby: "Skateboard & Musik",
    ig: "@taufik_ismail",
    tilt: "-rotate-2",
    tape: "blue"
  },
  {
    id: 24,
    name: "Umar Al-Faruq",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Tugas kelompok selalu dikerjakan bareng, meskipun mabar-nya 90% dan ngerjainnya 10%.",
    hobby: "Mabar & Game",
    ig: "@umar_alfaruq",
    tilt: "rotate-1"
  },
  {
    id: 25,
    name: "Vina Amelia",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Jangan lupa tersenyum ramah hari ini, besok kan jadwal pembagian rapor.",
    hobby: "Seni Tari & Musik",
    ig: "@vina_amelia",
    tilt: "-rotate-1"
  },
  {
    id: 26,
    name: "Wahyu Saputra",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Datang, duduk santai, diam menyimak, pulang cepat. Prinsip hidup mandiri.",
    hobby: "Nonton Anime & Komik",
    ig: "@wahyu_saputra",
    tilt: "rotate-3",
    tape: "red"
  },
  {
    id: 27,
    name: "Yusuf Maulana",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Kesuksesan itu butuh proses panjang, kalo mau instan ya makan mi instan di kantin.",
    hobby: "Membaca & Catur",
    ig: "@yusuf_maulana",
    tilt: "rotate-2"
  },
  {
    id: 28,
    name: "Zahra Aulia",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Selalu siap mendengarkan cerita dan gosip terbaru dari teman semeja.",
    hobby: "Mendengarkan Musik & Cerita",
    ig: "@zahra_aulia",
    tilt: "-rotate-3",
    tape: "blue"
  },
  {
    id: 29,
    name: "Rizky Ramadhan",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Setengah jiwaku ada di kelas IX-2, setengahnya lagi tertinggal di kantin.",
    hobby: "Kulineran & Makan",
    ig: "@rizky_ramadhan",
    tilt: "-rotate-2"
  },
  {
    id: 30,
    name: "Siti Nurhaliza",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Mempersiapkan pulpen terbaik sebelum dipinjam teman lalu hilang secara misterius.",
    hobby: "Handcrafting & Seni",
    ig: "@siti_nur",
    tilt: "rotate-1"
  },
  {
    id: 31,
    name: "Dwi Cahyo",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Si paling tenang sedunia pas ujian, karena pasrah adalah koentji.",
    hobby: "Mendengarkan Podcast & Baca",
    ig: "@dwi_cahyo",
    tilt: "-rotate-1",
    tape: "red"
  },
  {
    id: 32,
    name: "Tama Vilardo Sitepu",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Pemberani pas bertanding di lapangan futsal, pemalu pas lewat depan kelas gebetan.",
    hobby: "Futsal & Sepakbola",
    ig: "@tama_v",
    tilt: "rotate-3"
  },
  {
    id: 33,
    name: "Zafira Khaifa Nakiya",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRnLjLb7h5w0e_VNe7w1t0CebORtaIH5so9WrpT7b7HymCZvgJsGmr9MytvB0m8qFWyrrlnut3cW4w8oHUgTmhpCtW-FDEYKZOvlUtyD2joz0-s04VHljDxNk3TivN6pibH2CPTEuStBP7yL1dARZEqHO32yudisbHL9VDnMJY6wKmO6rXRYOW20jzIHN7aKcYMiNKbMtWQEFgFEDfgUp5bRS7P4RJ2TKX54gTDGRyI7902-TLDC4QeMJM46EMT-IYAlMpZBbWlgc",
    quote: "Tugas sekolah kukerjakan tuntas, drakor favorit kutonton, masa depan tetap kuperjuangkan.",
    hobby: "Menulis Novel & Drakor",
    ig: "@zafira_kh",
    tilt: "rotate-2",
    tape: "blue",
    star: true
  }
];

export default function StudentsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Filter students based on search term and category filter
  const filteredStudents = studentData.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.hobby.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.quote.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === 'all') return matchesSearch;
    if (activeFilter === 'starred') return matchesSearch && student.star;
    if (activeFilter === 'gamers') return matchesSearch && (
      student.hobby.toLowerCase().includes('game') || 
      student.hobby.toLowerCase().includes('esports') ||
      student.hobby.toLowerCase().includes('mlbb') ||
      student.hobby.toLowerCase().includes('mabar')
    );
    if (activeFilter === 'art') return matchesSearch && (
      student.hobby.toLowerCase().includes('menyanyi') || 
      student.hobby.toLowerCase().includes('menggambar') ||
      student.hobby.toLowerCase().includes('menari') ||
      student.hobby.toLowerCase().includes('menulis') ||
      student.hobby.toLowerCase().includes('drakor') ||
      student.hobby.toLowerCase().includes('handcrafting') ||
      student.hobby.toLowerCase().includes('membaca')
    );
    if (activeFilter === 'sports') return matchesSearch && (
      student.hobby.toLowerCase().includes('futsal') || 
      student.hobby.toLowerCase().includes('basket') ||
      student.hobby.toLowerCase().includes('olahraga') ||
      student.hobby.toLowerCase().includes('sepakbola') ||
      student.hobby.toLowerCase().includes('skateboard')
    );
    return matchesSearch;
  });

  return (
    <section className="space-y-lg pt-xl relative">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-md border-b-2 border-outline-variant pb-sm border-dashed">
        <div className="flex items-center space-x-sm">
          <span className="material-symbols-outlined text-secondary text-[32px]">groups</span>
          <h2 className="font-headline-md text-headline-md text-primary">Kawan Seperjuangan</h2>
        </div>
        <span className="font-label-caps text-label-caps text-on-surface-variant">33 SISWA</span>
      </div>
      
      {/* Scrapbook Search & Filter Panel */}
      <div className="bg-surface-container-low border-2 border-primary p-md rounded-md shadow-[4px_4px_0px_0px_rgba(3,31,65,1)] space-y-md">
        <div className="flex flex-col md:flex-row md:items-center gap-md">
          {/* Search Input Box */}
          <div className="relative flex-grow">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
            <input 
              type="text" 
              placeholder="Cari nama, hobi, atau kutipan teman..." 
              className="w-full pl-10 pr-10 py-2 border-2 border-primary rounded-sm bg-surface-container-lowest font-body-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            )}
          </div>
          
          {/* Matches Count Tag */}
          <div className="text-right text-caption font-label-caps text-on-surface-variant flex items-center justify-end gap-1">
            <span className="material-symbols-outlined text-[16px] text-secondary">search_check</span>
            Ditemukan: <span className="font-bold text-primary">{filteredStudents.length}</span> siswa
          </div>
        </div>

        {/* Washi Tape Filter Chips */}
        <div className="flex flex-wrap gap-sm pt-sm border-t border-dashed border-outline-variant">
          {[
            { id: 'all', label: 'Semua Teman', icon: 'groups', color: 'bg-primary/10 text-primary border-primary' },
            { id: 'starred', label: 'Terfavorit ⭐', icon: 'star', color: 'bg-[#fcebb6] text-[#b28a00] border-[#b28a00]' },
            { id: 'gamers', label: 'Gamers 🎮', icon: 'sports_esports', color: 'bg-[#e0e8f5] text-[#1a4b8c] border-[#1a4b8c]' },
            { id: 'art', label: 'Seni & Sastra 🎨', icon: 'palette', color: 'bg-[#d9f2e6] text-[#006b3e] border-[#006b3e]' },
            { id: 'sports', label: 'Olahraga ⚽', icon: 'sports_soccer', color: 'bg-[#ffdad8] text-[#ba1a1a] border-[#ba1a1a]' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`flex items-center gap-1 px-3 py-1.5 text-label-caps font-label-caps border-2 rounded-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${
                activeFilter === tab.id 
                  ? `${tab.color} shadow-[2px_2px_0px_0px_currentColor] scale-105 font-bold`
                  : 'bg-surface-container-lowest text-on-surface-variant border-outline hover:border-primary hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Polaroid Student Cards */}
      {filteredStudents.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-gutter">
          {filteredStudents.map((student) => (
            <div 
              key={student.id} 
              onClick={() => setSelectedStudent(student)}
              className={`polaroid transform ${student.tilt} relative group cursor-pointer hover:scale-[1.03] transition-all duration-200`}
            >
              {/* Washi Tapes */}
              {student.tape === 'red' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-red-400 opacity-60 transform -rotate-3 z-10 washi-tape"></div>
              )}
              {student.tape === 'blue' && (
                <div className="absolute -top-3 left-4 w-10 h-4 bg-primary opacity-40 transform rotate-6 z-10 washi-tape"></div>
              )}
              {student.tape === 'green' && (
                <div className="absolute -top-3 right-4 w-11 h-4 bg-green-400 opacity-55 transform -rotate-6 z-10 washi-tape"></div>
              )}
              {student.tape === 'yellow' && (
                <div className="absolute -top-3 left-1/3 w-10 h-4 bg-yellow-300 opacity-60 transform rotate-2 z-10 washi-tape"></div>
              )}

              {/* Gold Star Badge */}
              {student.star && (
                <div className="absolute -top-2 right-2 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center z-10 border border-primary shadow-sm transform hover:scale-115 transition-transform">
                  <span className="material-symbols-outlined text-[16px] text-on-secondary-container">star</span>
                </div>
              )}

              {/* Photo Frame */}
              <div className="overflow-hidden bg-black/5 aspect-square mb-3">
                <img 
                  alt={student.name} 
                  className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${student.filter || ''}`} 
                  src={student.img}
                />
              </div>
              
              {/* Interaction Overlay indicator */}
              <div className="absolute top-2 left-2 bg-primary/85 text-on-primary text-[10px] px-1.5 py-0.5 rounded font-label-caps opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center gap-0.5 shadow-sm">
                <span className="material-symbols-outlined text-[11px]">touch_app</span>
                Detail
              </div>

              {/* Name Caption */}
              <p className="font-subheading-quote text-subheading-quote text-center text-primary mt-2 truncate px-1" title={student.name}>
                {student.name}
              </p>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-surface-container-low border-2 border-dashed border-outline-variant p-xl text-center rounded-md space-y-sm">
          <span className="material-symbols-outlined text-outline text-[48px]">search_off</span>
          <h3 className="font-headline-md text-headline-sm text-primary">Siswa Tidak Ditemukan</h3>
          <p className="font-body-md text-on-surface-variant max-w-md mx-auto">
            Kami tidak menemukan kawan kelas IX-2 dengan nama, hobi, atau kutipan "<strong>{searchTerm}</strong>". Silakan coba kata kunci lain.
          </p>
          <button 
            onClick={() => { setSearchTerm(''); setActiveFilter('all'); }} 
            className="btn-text bg-primary text-on-primary font-label-caps text-label-caps px-4 py-2 border-2 border-primary rounded-sm hover:-translate-y-0.5 active:translate-y-0 transition-transform shadow-[2px_2px_0px_0px_rgba(3,31,65,1)]"
          >
            Reset Pencarian
          </button>
        </div>
      )}

      {/* Scrapbook Polaroid Detail Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 md:p-6 bg-primary/45 backdrop-blur-md flex justify-center items-start md:items-center transition-opacity">
          {/* Click outside backdrop to close (use fixed inset-0 to cover whole scrollable backdrop) */}
          <div className="fixed inset-0" onClick={() => setSelectedStudent(null)}></div>
          
          {/* Modal Container */}
          <div className="relative my-auto bg-surface-container-lowest max-w-3xl w-full rounded-md border-3 border-primary shadow-[6px_6px_0px_0px_rgba(3,31,65,1)] md:shadow-[10px_10px_0px_0px_rgba(3,31,65,1)] overflow-visible z-10 animate-reveal-scale revealed">
            
            {/* Top Washi Tape Sticker */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-36 h-8 bg-secondary opacity-90 transform -rotate-2 z-20 washi-tape shadow-sm flex items-center justify-center text-[10px] font-label-caps text-on-secondary tracking-widest border border-dashed border-white/50">
              MEMORI IX-2
            </div>
            
            {/* Hand-Drawn Styled Close Button */}
            <button 
              onClick={() => setSelectedStudent(null)}
              className="absolute -top-3 -right-2 md:-right-3 w-9 h-9 rounded-full bg-error text-on-error border-2 border-primary flex items-center justify-center shadow-md hover:bg-error-container hover:scale-110 active:scale-95 transition-all z-30"
              title="Tutup"
            >
              <span className="material-symbols-outlined font-bold text-[20px]">close</span>
            </button>

            {/* Modal Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-md p-sm md:p-lg">
              
              {/* Left Column: Huge Polaroid Picture */}
              <div className="md:col-span-5 flex flex-col items-center justify-center p-sm">
                <div className="bg-white p-4 pb-8 shadow-lg border border-outline-variant transform -rotate-1 w-full max-w-[260px] relative">
                  
                  {/* Photo Mounting Corners */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary/20"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/20"></div>
                  <div className="absolute bottom-6 left-2 w-6 h-6 border-b-2 border-l-2 border-primary/20"></div>
                  <div className="absolute bottom-6 right-2 w-6 h-6 border-b-2 border-r-2 border-primary/20"></div>

                  <img 
                    src={selectedStudent.img} 
                    alt={selectedStudent.name} 
                    className={`w-full aspect-square object-cover border border-outline-variant shadow-inner ${selectedStudent.filter || ''}`}
                  />
                  
                  {/* Cursive Name Signature */}
                  <p className="font-subheading-quote text-headline-sm text-center text-primary mt-4 select-none">
                    {selectedStudent.name.split(' ')[0]}
                  </p>
                </div>
                
                {/* Starred tag */}
                {selectedStudent.star && (
                  <div className="mt-4 flex items-center gap-1.5 bg-[#fcebb6] text-[#b28a00] border border-[#b28a00] px-3 py-1 rounded-full text-caption font-label-caps shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">star_rate</span>
                    <span>Teman Terfavorit</span>
                  </div>
                )}
              </div>

              {/* Right Column: Lined Paper Biodata */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div className="bg-[#fefef6] border-2 border-primary p-sm md:p-md rounded-sm relative overflow-hidden shadow-inner flex-grow flex flex-col justify-between min-h-[280px] md:min-h-[320px] bg-grain">
                  
                  {/* Lined Notebook Paper Background lines */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[linear-gradient(#031f41_1px,transparent_1px)] bg-[size:100%_28px] mt-4"></div>
                  
                  <div className="relative z-10 space-y-md">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b-2 border-primary/20 pb-xs">
                      <span className="font-label-caps text-label-caps text-secondary tracking-wider">Buku Kenangan</span>
                      <span className="font-caption text-caption text-outline">ID: {selectedStudent.id.toString().padStart(2, '0')}</span>
                    </div>

                    {/* Full Name */}
                    <div>
                      <span className="font-label-caps text-[9px] text-outline block">NAMA LENGKAP</span>
                      <h3 className="font-headline-md text-headline-md text-primary leading-tight mt-0.5">{selectedStudent.name}</h3>
                    </div>

                    {/* Hobby Badge */}
                    <div className="flex items-center gap-sm bg-surface-container-low/60 p-sm rounded-sm border border-outline-variant/60">
                      <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-[20px]">
                          {selectedStudent.hobby.toLowerCase().includes('game') || selectedStudent.hobby.toLowerCase().includes('esports') ? 'sports_esports' :
                           selectedStudent.hobby.toLowerCase().includes('kuliner') ? 'restaurant' :
                           selectedStudent.hobby.toLowerCase().includes('buku') || selectedStudent.hobby.toLowerCase().includes('membaca') ? 'book' :
                           selectedStudent.hobby.toLowerCase().includes('futsal') || selectedStudent.hobby.toLowerCase().includes('olahraga') || selectedStudent.hobby.toLowerCase().includes('sepakbola') ? 'sports_soccer' :
                           selectedStudent.hobby.toLowerCase().includes('musik') || selectedStudent.hobby.toLowerCase().includes('menyanyi') ? 'music_note' : 'palette'}
                        </span>
                      </div>
                      <div>
                        <span className="font-label-caps text-[9px] text-outline block">HOBI</span>
                        <span className="font-body-md text-body-md text-on-surface font-bold">{selectedStudent.hobby}</span>
                      </div>
                    </div>

                    {/* Diary Quote Area */}
                    <div className="relative pt-xs">
                      <span className="font-label-caps text-[9px] text-outline block mb-1">KATA-KATA MUTIARA</span>
                      <div className="bg-[#fff9e6] p-sm md:p-md border-l-4 border-[#b28a00] rounded-r-sm shadow-sm relative">
                        <span className="material-symbols-outlined text-[24px] text-[#b28a00]/15 absolute -top-2.5 -left-1.5">format_quote</span>
                        <p className="font-subheading-quote text-body-lg text-primary italic pl-xs relative z-10">
                          "{selectedStudent.quote}"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Footer */}
                  <div className="relative z-10 border-t border-dashed border-outline-variant/60 pt-sm mt-md flex justify-between items-center">
                    <div>
                      <span className="font-label-caps text-[9px] text-outline block">INSTAGRAM</span>
                      <a 
                        href={`https://instagram.com/${selectedStudent.ig.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-secondary hover:text-primary transition-colors hover:underline font-caption text-caption"
                      >
                        <span className="material-symbols-outlined text-[16px]">alternate_email</span>
                        <span className="font-bold">{selectedStudent.ig}</span>
                        <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                      </a>
                    </div>
                    
                    {/* Class Stamp */}
                    <div className="transform rotate-3 opacity-25 select-none">
                      <span className="font-display-lg text-[20px] text-outline border-2 border-dashed border-outline px-2 py-0.5 rounded">IX-2 solid</span>
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
