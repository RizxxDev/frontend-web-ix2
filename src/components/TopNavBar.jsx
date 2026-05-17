import { NavLink, Link } from 'react-router-dom';

export default function TopNavBar() {
  const getNavClass = ({ isActive }) =>
    isActive
      ? "font-body-md text-body-md text-secondary font-bold border-b-2 border-secondary pb-1"
      : "font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors";

  return (
    <header className="w-full top-0 sticky bg-background border-b-2 border-primary shadow-[4px_4px_0px_0px_rgba(29,53,87,1)] z-50">
      <div className="flex justify-between items-center px-md py-sm max-w-container-max mx-auto">
        {/* Brand */}
        <Link to="/" className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
          Class IX-2
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-md">
          <NavLink to="/" className={getNavClass}>Home</NavLink>
          <NavLink to="/profiles" className={getNavClass}>Profiles</NavLink>
          <NavLink to="/gallery" className={getNavClass}>Gallery</NavLink>
          <NavLink to="/flashback" className={getNavClass}>Flashback</NavLink>
          <NavLink to="/wall" className={getNavClass}>Wall</NavLink>
        </nav>
        {/* Actions */}
        <div className="flex items-center space-x-sm">
          {/* Search */}
          <div className="hidden md:flex items-center border-2 border-primary rounded-full px-sm py-xs bg-surface-container-lowest">
            <span className="material-symbols-outlined text-primary">search</span>
            <input className="border-none bg-transparent focus:ring-0 text-body-md w-32" placeholder="Search..." type="text" />
          </div>
          <button className="hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(29,53,87,1)] transition-all bg-secondary-container text-primary rounded-full p-2 border-2 border-primary">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
}
