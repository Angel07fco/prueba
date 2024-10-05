// src/App.jsx
import "./App.css";
import Menu from "./assets/components/Menu.jsx";
import Content from "./assets/components/Content";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <header>
        <Menu />
      </header>

      <main>
        <Content />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
