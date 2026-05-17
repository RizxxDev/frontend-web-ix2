export default function ClassMeetingSection() {
  return (
    <section className="mb-xl">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-headline-md text-headline-md text-primary relative inline-block">
          <span className="relative z-10">01. Class Meeting &amp; Lomba</span>
          <div className="absolute bottom-1 left-0 w-full h-3 bg-secondary-container/50 -rotate-1 z-0 mix-blend-multiply"></div>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Polaroid 1 */}
        <div className="bg-surface-container-lowest p-2 pb-8 shadow-[6px_6px_0px_0px_rgba(29,53,87,1)] relative -rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-tertiary-fixed-dim/60 washi-tape -rotate-3 mix-blend-multiply z-10"></div>
          <div className="aspect-square bg-surface-variant overflow-hidden mb-4 border border-outline-variant">
            <img 
              alt="Tarik Tambang" 
              className="w-full h-full object-cover grayscale-[20%] sepia-[10%] filter" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSJj7hQ9sKKVxg0nkJX4FbVogBjwq7UWsXVxe7UJ2LehDzPxl9UKWbB_H_hC6eKzhPSzWpm5I358ncpsMXg7ic7hujCyCzGqvv0-_kPbMzLGIlSsSe96VDIhr0jC7e3A8ifdvYReTawkhZatEGhAGK6mVO07eUNqJsMkhSaK4v-povpwsw-J8sAtzynlpr5CC66wJ22Hpee7oj6KlQq-VNGOaLrNH-4Kviru0fBN5vI-5uOy_AXGjPKzk1jhTFNB1ILPFAb3Ej2kA4"
            />
          </div>
          <p className="font-subheading-quote text-subheading-quote text-center text-primary-container px-2">Tarik tambang epik vs IX-A</p>
        </div>
        {/* Polaroid 2 */}
        <div className="bg-surface-container-lowest p-2 pb-8 shadow-[6px_6px_0px_0px_rgba(29,53,87,1)] relative rotate-1 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 lg:translate-y-4">
          <div className="aspect-[4/3] bg-surface-variant overflow-hidden mb-4 border border-outline-variant">
            <img 
              alt="Futsal" 
              className="w-full h-full object-cover sepia-[20%] filter" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMHL3vLLj345X4WaGju587kq4znRPyKyuKH0w-eIZiSPyt5d5Q5aK-2Kvq8p0hldR8Ickhq3xGELdRo7Hj9fdo4BguIRDulwlISpLdAXbXB6ai2_DOBQWutIZp04aYFA7P6PLVViAh-3rwiOqfGHV2xbJq5KM4NL6sqh2n2P1QnWCq08zStKw2rNFifNnLFR6VESXWxtO3MibTRK9ZBvHNH0BnnJmjYMS8lc0nyQJ-I__Z9vG6AIfByMgAmAG62e94uDtr6hOgWjaS"
            />
          </div>
          <p className="font-subheading-quote text-subheading-quote text-center text-primary-container px-2">Juara 1 Futsal!</p>
        </div>
        {/* Text Card/Sticker */}
        <div className="bg-secondary-fixed p-6 shadow-[4px_4px_0px_0px_rgba(29,53,87,1)] border-2 border-primary flex flex-col justify-center rotate-3 self-center max-w-sm mx-auto">
          <span className="material-symbols-outlined text-display-lg text-primary mb-4">trophy</span>
          <p className="font-body-lg text-body-lg font-bold text-primary">"Walau kalah di lomba balap karung, setidaknya suporter kita paling berisik di angkatan."</p>
        </div>
      </div>
    </section>
  );
}
