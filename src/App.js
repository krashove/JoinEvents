//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './components/styles/style.css';
import Navbar from './components/navbar.js';
import Banner from './components/images/main-slider/2.jpg';

function App() {
  return (
    <div>
      <Navbar />

      <section className="banner-conference">
        <div className="banner-carousel owl-carousel owl-theme owl-loaded owl-drag">
          <div className="slide-item" style={{backgroundImage: `url(${Banner})`}}>
            <div className="auto-container">
              <div className="content-box">
                <span className="title">January 20, 2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="coming-soon-section">
        <div className="auto-container">
            <div className="outer-box">
                <div className="time-counter"><div className="time-countdown clearfix" data-countdown="12/10/2021"></div></div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
