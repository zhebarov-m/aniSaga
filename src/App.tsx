import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {FaqPageAsync} from "./pages/FAQPage/FaqPage.async";

const App = () => {
    return (
        <div className="App">
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