import { useState, useEffect } from 'react';

export default function Footer() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    // 1. Konfigurasi API
    const hasVisitedThisSession = sessionStorage.getItem('yearbook_visited_session');
    const baseEndpoint = 'https://api.counterapi.dev/v2/rizzxdevs-team-4183/first-counter-4183';
    
    // GANTI TEKS DI BAWAH DENGAN API KEY DARI MENU "API Tokens"
    const apiKey = 'ut_hikc3P11AUAb3DOriJSpsa6vC3EXMCEHD9kqBRm8'; 

    // 2. Cek Lingkungan (Environment)
    // Trik agar mendukung Vite (import.meta) atau Next.js/CRA (process.env)
    const isLocal = typeof import.meta !== 'undefined' && import.meta.env 
      ? import.meta.env.DEV 
      : process.env.NODE_ENV === 'development';

    // Jika di lokal = null, Jika sudah deploy = susun URL berdasarkan sesi
    const apiURL = isLocal 
      ? null 
      : (hasVisitedThisSession ? baseEndpoint : `${baseEndpoint}/up`);

    // 3. Fungsi Fallback (Local Storage)
    const runLocalFallback = () => {
      if (!isMounted) return;
      let localViews = parseInt(localStorage.getItem('yearbook_local_views') || '148');
      
      if (!hasVisitedThisSession) {
        localViews += 1;
        localStorage.setItem('yearbook_local_views', localViews.toString());
        sessionStorage.setItem('yearbook_visited_session', 'true');
      }
      setViews(localViews);
    };

    // 4. Fungsi Utama Penarik Data API
    const fetchViews = async () => {
      // Jika masih ngoding di localhost, jalankan mode offline agar API asli tidak kotor
      if (!apiURL) {
        console.log('👨‍💻 Mode Lokal Aktif: Counter API ditahan.');
        runLocalFallback();
        return;
      }

      // Tembak server CounterAPI jika sudah di-deploy
      try {
        const response = await fetch(apiURL, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) throw new Error('Server CounterAPI menolak permintaan');
        
        const data = await response.json();
        const viewCount = data.count !== undefined ? data.count : data.value;
        
        if (isMounted && typeof viewCount === 'number') {
          setViews(viewCount);
          sessionStorage.setItem('yearbook_visited_session', 'true');
        }
      } catch (err) {
        console.warn('⚠️ Gagal terhubung ke CounterAPI, beralih ke offline mode:', err);
        runLocalFallback();
      }
    };

    fetchViews();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer className="w-full mt-xl border-t-2 border-dashed border-outline-variant bg-surface-variant z-10 relative">
      <div className="flex flex-col md:flex-row justify-between items-center px-md py-lg max-w-container-max mx-auto gap-md">
        
        {/* Left Side: Copyright */}
        <div className="font-headline-md text-headline-md text-primary text-center md:text-left">
          © Class of IX-2 • MtsN 3 Langkat • Est. 2026
        </div>

        {/* Middle: Retro Guestbook Style Visitor Counter */}
        <div className="flex items-center gap-2 bg-[#fcfcf4] border-2 border-primary px-3 py-1.5 rounded-sm shadow-[3px_3px_0px_0px_rgba(3,31,65,1)] transform -rotate-1 hover:rotate-0 transition-transform">
          <span className="material-symbols-outlined text-secondary text-[20px]">visibility</span>
          <span className="font-label-caps text-[11px] text-outline select-none">PENGUNJUNG KELAS:</span>
          <span className="font-mono font-bold bg-[#031f41] text-[#fbfaee] px-2 py-0.5 rounded-sm tracking-wider text-[13px] shadow-inner select-all" title="Total kunjungan halaman">
            {views !== null ? views.toString().padStart(6, '0') : '------'}
          </span>
        </div>

        {/* Right Side: Links */}
        <ul className="flex flex-wrap justify-center gap-md font-caption text-caption text-primary">
          <li>
            <a 
              className="opacity-80 hover:opacity-100 hover:text-secondary transition-opacity hover:underline" 
              href="https://mtsn3langkat.sch.id/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              School Website
            </a>
          </li>
          <li>
            <a className="opacity-80 hover:opacity-100 hover:text-secondary transition-opacity hover:underline" href="#">
              Contact Faculty
            </a>
          </li>
          <li>
            <a className="opacity-80 hover:opacity-100 hover:text-secondary transition-opacity hover:underline" href="#">
              Privacy Policy
            </a>
          </li>
        </ul>
        
      </div>
    </footer>
  );
}