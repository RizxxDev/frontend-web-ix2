import PageHeader from '../components/profiles/PageHeader';
import TeachersSection from '../components/profiles/TeachersSection';
import StudentsSection from '../components/profiles/StudentsSection';

export default function Profiles() {
  return (
    <main className="flex-grow max-w-container-max mx-auto w-full px-4 md:px-xl py-lg md:py-xl space-y-xl overflow-hidden">
      <PageHeader />
      <TeachersSection />
      <StudentsSection />
    </main>
  );
}
