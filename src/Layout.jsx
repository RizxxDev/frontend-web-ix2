import { Outlet } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';

export default function Layout() {
  return (
    <>
      <TopNavBar />
      <Outlet />
      <Footer />
    </>
  );
}
