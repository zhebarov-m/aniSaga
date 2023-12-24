import {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {FaqPageAsync} from "./pages/FAQPage/FaqPage.async";
import './styles/main.scss'
import {useTheme} from "./theme/useTheme";



const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Change Theme</button>
            <Link to="/">Главная</Link>
            <Link to="/faq">Вопросы</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync/>}/>
                    <Route path="/faq" element={<FaqPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;