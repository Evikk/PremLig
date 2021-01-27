import { Header } from "./cmps/Header";
import { Main } from "./views/Main";
import "./assets/styles/base.css";

export function App() {
    return (
        <div className="App">
            <Header />
            <div className="main-container">
                <Main />
            </div>
        </div>
    );
}
