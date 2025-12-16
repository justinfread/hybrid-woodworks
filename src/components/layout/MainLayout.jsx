import { Outlet } from 'react-router-dom';  // Note: vite-plugin-pages uses react-router under hood
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />  {/* Renders the current page */}
    </main>
    <Footer />
  </>
);

export default MainLayout;