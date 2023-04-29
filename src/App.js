import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
// import hero from './assets/hero.png'
import CarBook from './components/CarBook';
import Footer from './components/Footer';
import Features from './components/Features';
import PickCar from './components/PickCar';
import SmallBanner from './components/SmallBanner';
import ChooseUs from './components/ChooseUs';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
import AppBanner from './components/AppBanner';

function App() {
  return (
    <div className={`bg-no-repeat bg-right-top md:bg-[url('./assets/hero.png')]`}>
      <Header />
      <MainContent />
      <CarBook />
      <Features />
      <PickCar />
      <SmallBanner />
      <ChooseUs />
      <Testimonial />
      <Faq />
      <AppBanner />
      <Footer />
    </div>
  );
}

export default App;
