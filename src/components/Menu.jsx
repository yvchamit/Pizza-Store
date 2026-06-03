import "./Menu.css";

const menuler = [
  {
    id: 1,
    isim: "YENİ! Kore",
    resim: "/images/Kore.png",
    altText: "Kore",
  },
  {
    id: 2,
    isim: "Pizza",
    resim: "/images/Pizza.png",
    altText: "Pizza",
  },
  {
    id: 3,
    isim: "Burger",
    resim: "/images/Burger.png",
    altText: "Burger",
  },
  {
    id: 4,
    isim: "Kızartmalar",
    resim: "/images/Fries.png",
    altText: "Kızartmalar",
  },
  {
    id: 5,
    isim: "Fast food",
    resim: "/images/Fast-food.png",
    altText: "Fast food",
  },
  {
    id: 6,
    isim: "Gazlı İçecek",
    resim: "/images/Soda.png",
    altText: "Soda",
  },
];

function Menu() {
  return (
    <section className="menu-section">
      <div className="menu-container">
        <nav>
          <ul className="menu-nav">
            {menuler.map((menu) => (
              <li className="menu-list" key={menu.id}>
                <a href="#" className="menu-item">
                  <img src={menu.resim} alt={menu.altText} />
                  <span>{menu.isim}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Menu;
