import { useState } from 'react';
import GalleryHeader from '../components/gallery/GalleryHeader';
import ClassMeetingSection from '../components/gallery/ClassMeetingSection';
import StudyTourSection from '../components/gallery/StudyTourSection';
import PhotoModal from '../components/gallery/PhotoModal';

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <main className="flex-grow max-w-container-max mx-auto w-full px-4 md:px-xl py-lg md:py-xl flex flex-col gap-xl relative">
      <GalleryHeader />
      <ClassMeetingSection onPhotoClick={setSelectedPhoto} />
      <StudyTourSection onPhotoClick={setSelectedPhoto} />
      
      <PhotoModal 
        isOpen={!!selectedPhoto} 
        photo={selectedPhoto} 
        onClose={() => setSelectedPhoto(null)} 
      />
    </main>
  );
}
