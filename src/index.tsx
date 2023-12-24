import {render} from "react-dom";
import App from "./App";
import './styles/main.scss'
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)