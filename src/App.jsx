import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Popular from "./components/Popular";
import OrderPage from "./components/OrderPage";
import { Switch, Route } from "react-router-dom";
import OrderSuccessPage from "./components/OrderSuccessPage";
import { useState } from "react";

function App() {
  const [siparis, setSiparis] = useState(null);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <main>
            <Menu />
            <Hero />
            <Popular />
          </main>
          <Footer />
        </Route>

        <Route path="/pizza">
          <OrderPage setSiparis={setSiparis} />
        </Route>

        <Route path="/success">
          <OrderSuccessPage siparis={siparis} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
