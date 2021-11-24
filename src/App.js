import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/NavbarSection/Navbar";
import GlobalStyle from './globalStyle';
import InfoSection from "./components/Info/InfoSection";
import Question from "./components/QuestionSection/Question";
import Footer from "./components/Final/Footer";


function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <InfoSection />
      <Question />
      <Footer />
      
    </>
  );
}

export default App
