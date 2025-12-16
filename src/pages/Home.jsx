import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome to Hybrid Woodworks</h1>
        <p>Handcrafted reclaimed wood wall art...</p>
        {/* Your hero, gallery, etc. */}
      </main>
      <Footer />
    </>
  );
};

export default Home;