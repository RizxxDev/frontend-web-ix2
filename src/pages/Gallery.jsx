import GalleryHeader from '../components/gallery/GalleryHeader';
import ClassMeetingSection from '../components/gallery/ClassMeetingSection';
import StudyTourSection from '../components/gallery/StudyTourSection';

export default function Gallery() {
  return (
    <main className="flex-grow max-w-container-max mx-auto px-4 sm:px-md py-xl w-full">
      <GalleryHeader />
      <ClassMeetingSection />
      <StudyTourSection />
    </main>
  );
}
