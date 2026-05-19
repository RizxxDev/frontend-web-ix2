export default function PhotoModal({ isOpen, photo, onClose }) {
  if (!isOpen || !photo) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      ></div>
      
      {/* Outer Wrapper for absolute decorations (so they don't get clipped by overflow) */}
      <div className="relative max-w-3xl w-full z-10 transform -rotate-1">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 md:-right-6 w-10 h-10 bg-error text-white rounded-full flex items-center justify-center border-2 border-white shadow-md hover:scale-110 transition-transform z-20"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        {/* Washi Tape */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-secondary/80 washi-tape-edge -rotate-2 mix-blend-multiply z-20"></div>

        {/* Modal Content - Polaroid Style with scroll */}
        <div className="bg-surface-container-lowest p-md pb-xl md:p-lg md:pb-24 shadow-[8px_8px_0px_0px_rgba(25,28,32,1)] max-h-[85vh] overflow-y-auto rounded-sm">
          
          <div className="relative w-full aspect-video bg-surface-dim overflow-hidden border border-outline-variant/30 bg-grain mb-md mt-4">
            <img 
              src={photo.src} 
              alt={photo.caption}
              className="w-full h-full object-contain" 
            />
          </div>
          
          <div className="text-center">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-2">{photo.title || 'Momen Spesial'}</h3>
            <p className="font-subheading-quote text-body-lg text-on-surface-variant italic">"{photo.story}"</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
