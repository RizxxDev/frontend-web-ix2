export default function Footer() {
  return (
    <footer className="w-full mt-xl border-t-2 border-dashed border-outline-variant bg-surface-variant">
      <div className="flex flex-col md:flex-row justify-between items-center px-md py-lg max-w-container-max mx-auto">
        <div className="font-headline-md text-headline-md text-primary mb-4 md:mb-0">
          © Class of IX-2 • Ever Onward • Est. 2026
        </div>
        <ul className="flex flex-wrap justify-center gap-md font-caption text-caption text-primary">
          <li><a className="opacity-80 hover:opacity-100 hover:text-secondary transition-opacity" href="https://mtsn3langkat.sch.id/">School Website</a></li>
          <li><a className="opacity-80 hover:opacity-100 hover:text-secondary transition-opacity" href="#">Contact Faculty</a></li>
          <li><a className="opacity-80 hover:opacity-100 hover:text-secondary transition-opacity" href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}
