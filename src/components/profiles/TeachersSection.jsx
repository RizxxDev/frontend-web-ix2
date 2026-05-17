export default function TeachersSection() {
  return (
    <section className="space-y-lg relative">
      <div className="flex items-center space-x-sm mb-md">
        <span className="material-symbols-outlined text-secondary text-[32px]">school</span>
        <h2 className="font-headline-md text-headline-md text-primary">Guru Panutan Kami</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {/* Teacher Card 1 */}
        <div className="bg-surface-container-lowest p-md border-2 border-primary shadow-[4px_4px_0px_0px_rgba(3,31,65,1)] transform rotate-1 hover:-translate-y-1 transition-transform">
          <div className="flex items-start space-x-md mb-sm">
            <img 
              alt="Pak Budi" 
              className="w-20 h-20 rounded-full border-2 border-primary object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9YNPNtLnT06Gp9V7Gc4XeGtrNXZsnfSQi9esU9LKBR7Jj3-g5Tar5QSMeNWyttHTe0CfPT4p2xkCBLG-ZBft06x9PQQpXyuLbx58kjyKaDS-PXt0_HRqWqDOcCnxCo6p7vM0cmZow7KzsWMkPzIE-mCM-NCWIqtAe93XS5o7D-N-jMk9J1xzodxpdCbZZV1yHBNR8k8HdRnwoh-mFGbbnYn7lEoBqccO8rV1fuDPGP6Ehlc7LJH8ELBbMzHJsb0jNouWaAohVbL0G"
            />
            <div>
              <h3 className="font-headline-md text-headline-md text-primary text-[24px]">Pak Budi</h3>
              <span className="inline-block bg-primary text-on-primary font-label-caps text-label-caps px-2 py-1 mt-1 rounded-sm">Wali Kelas</span>
            </div>
          </div>
          <div className="post-it p-sm transform -rotate-2 mt-sm">
            <p className="font-subheading-quote text-subheading-quote text-[18px] text-on-surface">"Jangan pernah berhenti belajar, karena hidup tak pernah berhenti mengajarkan."</p>
          </div>
        </div>
        {/* Teacher Card 2 */}
        <div className="bg-surface-container-lowest p-md border-2 border-primary shadow-[4px_4px_0px_0px_rgba(3,31,65,1)] transform -rotate-1 hover:-translate-y-1 transition-transform">
          <div className="flex items-start space-x-md mb-sm">
            <img 
              alt="Bu Rini" 
              className="w-20 h-20 rounded-full border-2 border-primary object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8824XPI4XGa73BS0bZZglC6WhSKYOw1GoBrMVXEKLPWgBR6VDBEDmmVzqzaroRw2AYaP1f5f1d6mwNvKazz3Aaoq_scj28L-8dydLV5PwA77_Lv_DhkbQPslTNBN4ABW4LnEo6vliso-62Am_hfCUc8BsV9V8dWs1hkjJYLHdeYFoeuZilpeCwiT5-l8w3EjWnQ6ohE4c1QS_XCgIlF2cNyeheIK0Fta5r6cGV3SCbJz1-D-gHXOO-XoO-B5WMaVw56fgkmKDF6lg"
            />
            <div>
              <h3 className="font-headline-md text-headline-md text-primary text-[24px]">Bu Rini</h3>
              <span className="inline-block bg-secondary text-on-secondary font-label-caps text-label-caps px-2 py-1 mt-1 rounded-sm">Guru Matematika</span>
            </div>
          </div>
          <div className="post-it p-sm transform rotate-1 mt-sm" style={{ backgroundColor: '#ffdad8' }}>
            <p className="font-subheading-quote text-subheading-quote text-[18px] text-tertiary">"Angka itu jujur, sama seperti kerja keras kalian."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
