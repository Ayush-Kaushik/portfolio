import './App.scss';
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Aboutme from "./pages/Aboutme";
import Footer from "./pages/Footer";

function App() {
    return (
        <div>
            <Aboutme/>
            <Projects/>
            <Articles/>
            <Footer/>
        </div>
    );
}

export default App;
