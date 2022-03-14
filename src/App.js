import Footer from './organisms/footer/Footer';
import Header from './organisms/header/Header';
import Main from './organisms/main/Main';

import './css/styles.css';

function App() {
  return (
    <div className="app">
      <div className="layout">
        <Header />
        <Main>
          <div className="item b"></div>
          <div className="item e"></div>
        </Main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
