//Import components
import Header from "./components/header";
import Navbar from "./components/navbar";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import AboutSection from "./pages/aboutSection";
import TeamSection from "./pages/teamSection";
import Clients from "./pages/clients";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import PortfolioModals from "./components/portfolio/portfolioModals";

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Services/>
      <Portfolio />
      <AboutSection/>
      <TeamSection/>
      <Clients/>
      <Contact/>
      <Footer/>
      <PortfolioModals/>
    </>
  );
}

export default App;