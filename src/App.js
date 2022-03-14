import Footer from './organisms/footer/Footer';
import Header from './organisms/header/Header';

import './css/styles.css';

function App() {
  return (
    <div className="app">
      <div className="layout">
        <Header />
        <div className="item"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
