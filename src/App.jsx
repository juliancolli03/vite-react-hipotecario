import "./styles/App.css"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/HeroSection";
import AssistanceSection from "./components/Assistance/AssistanceSection";
import AdvantageSection from "./components/Advantages/AdvantagesSection";
import AssistanceExtra from "./components/AssistanceExtra/AssistanceExtra";
import QuestionSection from "./components/Questions/QuestionSection";
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <>
    <Header/>
    <div className="container">
    <Hero />
    <AssistanceSection />
    <AdvantageSection />
        </div>
    <AssistanceExtra />
    <QuestionSection />
    <Footer/>
    </>
  )
}

export default App
