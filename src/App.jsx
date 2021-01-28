import { Header } from "./cmps/Header";
import { Main } from "./views/Main";
import './styles/styles.scss'

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
