
import Navigation from './components/Navigation';
import './App.css';
import Us from './pages/AboutUs';
import OurServices from './pages/OurServices';
import MyHistory from './pages/MyStory';
import ContactUs from './pages/ContactUs';
import Footer from './pages/Footer';

function App() {
  return (
<>
<Navigation/>
    <Us />
    <OurServices />
    <MyHistory />
    <ContactUs />
    <Footer />
</>
   
  );
}

export default App;
