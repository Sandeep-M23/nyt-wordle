import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import { ThemeContext, themes } from "./contexts/ThemeContext";
import "./index.css";

function App() {
    const [solution, setSolution] = useState(null);

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/Sandeep-M23/nyt-wordle/main/public/solution.json"
        )
            .then((res) => res.json())
            .then((json) => {
                const randomSolution =
                    json[Math.floor(Math.random() * json.length)];
                setSolution(randomSolution.word);
            });
    }, [setSolution]);

    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className="App">
            <nav>
                <p>{"   "}</p>
                <h1>Wordle</h1>
                <ThemeContext.Consumer>
                    {({ changeTheme }) => (
                        <button
                            onClick={() => {
                                setDarkMode(!darkMode);
                                changeTheme(
                                    darkMode ? themes.light : themes.dark
                                );
                            }}
                        >
                            {darkMode ? "Dark" : "Light"}
                        </button>
                    )}
                </ThemeContext.Consumer>
            </nav>
            {solution && <Wordle solution={solution} />}
        </div>
    );
}

export default App;
