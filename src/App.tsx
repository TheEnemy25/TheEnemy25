import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './page/Main';
import Header from './components/header/Header';
import SupportPanel from './components/panel/SupportPanel';


function App() {

  return (
    <>
      <Router>
        <Header />
        <SupportPanel />
        {/* <Loader /> */}
        <main className='wrapper'>
          <Main />
        </main>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
