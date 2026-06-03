import "./Footer.css";

const hotMenuler = [
  { id: "hot-1", isim: "Terminal Pizza" },
  { id: "hot-2", isim: "5 Kişilik Hackathlon Pizza" },
  { id: "hot-3", isim: "useEffect Tavuklu Pizza" },
  { id: "hot-4", isim: "Beyaz Console Frosty" },
  { id: "hot-5", isim: "Testler Geçti Mutlu Burger" },
  { id: "hot-6", isim: "Position Absolute Acı Burger" },
];

const instagramResimler = [
  { id: 1, src: "/images/insta1.png", alt: "Pizza sunumu" },
  { id: 2, src: "/images/insta2.png", alt: "Burger sunumu" },
  { id: 3, src: "/images/insta3.png", alt: "Tatlı sunumu" },
  { id: 4, src: "/images/insta4.png", alt: "İçecek sunumu" },
  { id: 5, src: "/images/insta5.png", alt: "Restoran atmosferi" },
  { id: 6, src: "/images/insta6.png", alt: "Lezzet detay" },
];

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col footer-contact">
          <a href="/" className="footer-logo">
            Teknolojik
            <br />
            Yemekler
          </a>

          <address className="contact-info">
            <div className="contact-item">
              <img src="./public/images/location.png" alt="" />
              <span>
                341 Londonderry Road
                <br />
                Istanbul Türkiye
              </span>
            </div>

            <div className="contact-item">
              <img src="./public/images/Envelope.png" alt="" />
              <a href="mailto:aciktim@teknolojikyemekler.com">
                aciktim@teknolojikyemekler.com
              </a>
            </div>

            <div className="contact-item">
              <img src="./public/images/phone.png" alt="" />
              <a href="tel:+902161234567">+90 216 123 45 67</a>
            </div>
          </address>
        </div>

        <div className="footer-col footer-menu">
          <nav>
            <h4 className="footer-title">Hot Menu</h4>

            <ul className="footer-menu-list">
              {hotMenuler.map((hotMenu) => (
                <li key={hotMenu.id}>
                  <a href="#">{hotMenu.isim}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-col footer-instagram">
          <h4 className="footer-title">Instagram</h4>

          <ul className="instagram-list">
            {instagramResimler.map((resim) => (
              <li key={resim.id}>
                <a href="#">
                  <img src={resim.src} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="copyright-wrapper">
        <div className="copyright-container">
          <small className="copyright-text">© 2026 Teknolojik Yemekler.</small>
          <ul className="social-icons">
            <li>
              <a
                href="https://twitter.com/teknolojikyemekler"
                aria-label="Twitter"
              >
                <img src="./public/images/Twitter.svg" alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
