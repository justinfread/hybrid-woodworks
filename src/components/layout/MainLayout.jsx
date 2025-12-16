import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'

const MainLayout = () => (
  <>
    <Header />
    <Outlet />  {/* Page content here */}
    <Footer />
  </>
);

export default MainLayout;