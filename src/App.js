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
          <div className="item b">
            <div className="intro">
              <h1>Jesse Sandvik</h1>
              <h2>Software Developer</h2>
            </div>
          </div>
          <div className="item c">
            <span className="btns">
              <button className="btn-port">View My Portfolio</button>
              <button className="btn-cont">contact Me</button>
            </span>
          </div>
          <div className="item e"></div>
          <div className="item f"></div>
        </Main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
