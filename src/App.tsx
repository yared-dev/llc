
import Navigation from './components/Navigation';
import './App.css';
import Presentation from './pages/Presentation';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import MyHistory from './pages/MyStory';
import ContactUs from './pages/ContactUs';
import Footer from './pages/Footer';




function App() {
  return (
    <>
     
      <Navigation />
      <OurServices />
      <AboutUs />
      <MyHistory />
      <Presentation />
      <ContactUs />
      <Footer />
    </>

  );
}

export default App;
