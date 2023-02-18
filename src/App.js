import "./styling/style.css";
import "./styling/general.css";
import "./styling/queries.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import UsedBySection from "./components/UsedBySection";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturesSection from "./components/FeaturesSection";
import RemainingSection from "./components/RemainingSection";
import ContactUsSection from "./components/ContactUsSection";
import FAQSection from "./components/FAQSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <HeroSection />
      <UsedBySection />
      <HowItWorksSection />
      <FeaturesSection />
      <RemainingSection />
      <ContactUsSection />
      <FAQSection />
      <TestimonialsSection />

      <Footer />
    </div>
  );
}

export default App;