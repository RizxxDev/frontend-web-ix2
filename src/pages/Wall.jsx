import WallHeader from '../components/wall/WallHeader';
import MessageForm from '../components/wall/MessageForm';
import BulletinBoard from '../components/wall/BulletinBoard';

export default function Wall() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-md py-xl md:px-xl flex flex-col gap-xl">
      <WallHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-start">
        <MessageForm />
        <BulletinBoard />
      </div>
    </main>
  );
}
