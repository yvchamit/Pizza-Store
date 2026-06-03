import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Hero.css'

function Hero() {

  const history = useHistory();

  return (
          <section className="hero-section">
            <div className="hero-container">
              
              <div className="left-card">
                <div className="left-card-content">
                  <h2>Özel<br/>Lezzetus</h2>
                  <p>Position:Absolute Acı Burger</p>
                  <button className="hero-section_order-btn" onClick={() => history.push("/pizza")} >SİPARİŞ VER</button>
                </div>
              </div>

              <div className="right-cards">
                
                <div className="right-card top-card">
                  <h3>Hackathlon<br/>Burger Menü</h3>
                  <button className="hero-section_order-btn" onClick={() => history.push("/pizza")} >SİPARİŞ VER</button>
                  <img src="/images/Adv-burger.png" alt="İlgili Ürün"/>
                </div>

                <div className="right-card bottom-card">
                  <h3><span>Çoooook</span> hızlı<br/>npm gibi kurye</h3>
                  <button className="hero-section_order-btn" onClick={() => history.push("/pizza")} >SİPARİŞ VER</button>
                  <img src="/images/Adv-kurye.png" alt="İlgili Ürün"/> 
                </div>
              </div>
            </div>
          </section>
  )
}

export default Hero;