export default function PhotoModal({ isOpen, photo, onClose }) {
  if (!isOpen || !photo) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      ></div>
      
      {/* Modal Content - Polaroid Style */}
      <div className="relative bg-surface-container-lowest p-md pb-xl md:p-lg md:pb-24 shadow-[8px_8px_0px_0px_rgba(25,28,32,1)] max-w-3xl w-full max-h-[90vh] overflow-y-auto transform -rotate-1 z-10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-error text-white rounded-full flex items-center justify-center border-2 border-white shadow-md hover:scale-110 transition-transform z-20"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        {/* Washi Tape */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-secondary/80 washi-tape-edge -rotate-2 mix-blend-multiply z-10"></div>
        
        <div className="relative w-full aspect-video bg-surface-dim overflow-hidden border border-outline-variant/30 bg-grain mb-md">
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
  );
}
