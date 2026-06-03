import { useState } from "react";
import "./Popular.css";

const pizzaData = [
  {
    id: 1,
    isim: "Terminal Pizza",
    resim: "./public/images/Terminal-pizza.png",
    puan: "4.9",
    yorumSayisi: 200,
    fiyat: 60,
  },
  {
    id: 2,
    isim: "Position Absolute Acı Pizza",
    resim: "./public/images/Aci-pizza.png",
    puan: "4.9",
    yorumSayisi: 200,
    fiyat: 60,
  },
  {
    id: 3,
    isim: "useEffect Tavuklu Burger",
    resim: "./public/images/Tavuk-burger.png",
    puan: "4.9",
    yorumSayisi: 200,
    fiyat: 60,
  },
];

const kategoriler = [
  { id: "ramen", isim: "Ramen", resim: "/images/Kore.png" },
  { id: "pizza", isim: "Pizza", resim: "/images/Pizza.png" },
  { id: "burger", isim: "Burger", resim: "/images/Burger.png" },
  { id: "fries", isim: "French fries", resim: "/images/Fries.png" },
  { id: "fastfood", isim: "Fast food", resim: "/images/Fast-food.png" },
  { id: "drinks", isim: "Soft drinks", resim: "/images/Soda.png" },
];

function Popular() {
  const [aktifKategori, setAktifKategori] = useState("pizza");

  return (
    <section className="menu-wrapper">
      <div className="title-area">
        <p>en çok paketlenen menüler</p>
        <h2>
          Acıktıran
          <br className="mobile-active" /> Kodlara Doyuran
          <br className="mobile-active" /> Lezzetler
        </h2>
      </div>

      <nav className="category-nav">
        <div className="button-group">
          {kategoriler.map((kategori) => {
            const durum = aktifKategori === kategori.id;
            return (
              <button
                className="category-btn"
                key={kategori.id}
                onClick={() => setAktifKategori(kategori.id)}
                style={
                  durum
                    ? { backgroundColor: "black", color: "#fff" }
                    : { backgroundColor: "#fff", color: "black" }
                }
              >
                <img src={kategori.resim} />
                <span>{kategori.isim}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="menu-grid">
        {pizzaData.map((pizza) => (
          <article className="menu-card" key={pizza.id}>
            <img src={pizza.resim} />
            <h3>{pizza.isim}</h3>
            <div className="meta">
              <span>{pizza.puan}</span>
              <span>({pizza.yorumSayisi})</span>
              <span className="price">{pizza.fiyat}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Popular;
