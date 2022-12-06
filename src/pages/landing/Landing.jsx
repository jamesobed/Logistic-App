import './landing.scss';
// import { SampleComponent } from '../../components';
import Nav from '../../components/landingPage/navBar/Nav';
import Hero from '../../components/landingPage/hero/Hero';
import Footer from '../../components/landingPage/Footer/Footer';
import Service from '../../components/landingPage/serviceCard/Service';
import Testimony from '../../components/landingPage/testimony/Testimony';
import Carosel from '../../components/landingPage/carosel/Carosel';

function Landing() {
  return (
    <>
      <Nav />
      <Hero />
      <Service />
      <Carosel />
      <Testimony />
      <Footer />
    </>
  );
}

export default Landing;
