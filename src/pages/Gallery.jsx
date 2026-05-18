import GalleryHeader from '../components/gallery/GalleryHeader';
import ClassMeetingSection from '../components/gallery/ClassMeetingSection';
import StudyTourSection from '../components/gallery/StudyTourSection';

export default function Gallery() {
  return (
    <main className="flex-grow max-w-container-max mx-auto w-full px-4 md:px-xl py-lg md:py-xl flex flex-col gap-xl">
      <GalleryHeader />
      <ClassMeetingSection />
      <StudyTourSection />
    </main>
  );
}
