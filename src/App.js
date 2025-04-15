import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          <div class="container text-center mt-5">
            <div class="d-flex justify-content-center gap-4 mt-3">
              <a
                href="https://github.com/ElizabethBenitez20/dictionary-react"
                target="_blank"
                title="GitHub"
              >
                <i class="fa-brands fa-github fa-2x"></i>
              </a>
              <a
                href="https://shecodes-dictionary-react.netlify.app/"
                target="_blank"
                title="Netlify"
              >
                <i class="fa-solid fa-globe fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/elizabeth-benitez-81a5b7275/"
                target="_blank"
                title="LinkedIn"
              >
                <i class="fa-brands fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
          <br />
          Coded by Elizabeth Benitez - Open sourced
        </footer>
      </div>
    </div>
  );
}

export default App;
