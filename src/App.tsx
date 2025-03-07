import "./styles/App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./page/Main";
import Header from "./components/header/Header";
import Anchor from "./components/anchor/Anchor";
import Footer from "./components/footer/Footer";
import ContactsPanel from "./components/contacts-panel/ContactsPanel";

function App() {

  return (
    <>
      <div className="layout">
        <Router>
          <Header />

          <ContactsPanel />
          <Anchor />

          <main className="main">
            <Main />
          </main>

          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App;
