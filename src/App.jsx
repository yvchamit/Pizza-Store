import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Popular from "./components/Popular";
import OrderPage from "./components/OrderPage";
import { Switch, Route } from "react-router-dom";
import OrderSuccessPage from "./components/OrderSuccessPage";

function App() {
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

        <Route path="/pizza" component={OrderPage} />

        <Route path="/success" component={OrderSuccessPage} />
      </Switch>
    </>
  );
}

export default App;
