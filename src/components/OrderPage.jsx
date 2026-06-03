import React, { useState } from "react";
import OrderPageHeader from "./order/OrderPageHeader";
import OrderSummary from "./order/OrderSummary";
import Toppings from "./order/Toppings";
import PizzaDetail from "./order/PizzaDetail";
import OrderSuccessPage from "./OrderSuccessPage";
import Footer from "./Footer";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";

const createPizzaOrder = (siparisData) => {
  return axios.post("https://reqres.in/api/users", siparisData, {
    headers: {
      "x-api-key": import.meta.env.VITE_PIZZA_API_KEY,
    },
  });
};

function OrderPage(props) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    boyut: "",
    hamur: "",
    malzemeler: [],
    siparisNotu: "",
    adet: 1,
  });

  const isFormInvalid = () => {
    if (!form.boyut || !form.hamur) return true;
    if (form.malzemeler.length > 10) return true;
    return false;
  };

  const pizzaTabanFiyat = 85.5;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const arttir = () => setForm({ ...form, adet: form.adet + 1 });

  const azalt = () =>
    setForm({ ...form, adet: form.adet > 1 ? form.adet - 1 : 1 });

  const secimlerUcreti = form.malzemeler.length * 5;

  const toplamUcret = (pizzaTabanFiyat + secimlerUcreti) * form.adet;

  const handleSiparisVer = (e) => {
    e.preventDefault();

    if (isFormInvalid() || isLoading) return;

    setIsLoading(true);

    const siparisData = { ...form, secimlerUcreti, toplamUcret };

    createPizzaOrder(siparisData)
      .then((response) => {
        console.log("Sipariş Başarılı! Response:", response.data);

        props.setSiparis(response.data);

        history.push("/success");
      })
      .catch((error) => {
        console.error("Hata:", error);
        alert(
          "Siparişiniz iletilemedi. Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.",
        );
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="tw-min-h-screen tw-font-['Barlow'] tw-pb-12">
      <OrderPageHeader />

      <div className="tw-px-4 sm:tw-px-8">
        <main className="tw-max-w-[600px] tw-mx-auto tw-my-12 tw-bg-white tw-p-6 sm:tw-p-0 tw-rounded-lg">
          <PizzaDetail tabanFiyat={pizzaTabanFiyat} />

          <section className="tw-flex tw-flex-row tw-justify-between tw-gap-4 sm:tw-gap-8 tw-mb-8">
            <div className="tw-flex-1">
              <h3 className="tw-text-xl tw-font-semibold tw-mt-0 tw-mb-4">
                Boyut Seç <span className="tw-text-[#CE2829]">*</span>
              </h3>
              {["Küçük", "Orta", "Büyük"].map((boy) => (
                <label
                  key={boy}
                  className="tw-flex tw-items-center tw-gap-3 tw-mb-3 tw-text-base tw-font-medium tw-cursor-pointer tw-text-[#5F5F5F]"
                >
                  <input
                    type="radio"
                    name="boyut"
                    value={boy}
                    className="tw-w-3 tw-h-3 tw-accent-blue-600"
                    onChange={handleInputChange}
                  />
                  {boy}
                </label>
              ))}
            </div>

            <div className="tw-flex-1">
              <h3 className="tw-text-xl tw-font-semibold tw-mt-0 tw-mb-4">
                Hamur Seç <span className="tw-text-[#CE2829]">*</span>
              </h3>
              <select
                name="hamur"
                className="tw-w-full tw-p-3 tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-text-sm tw-font-semibold tw-outline-none tw-cursor-pointer"
                onChange={handleInputChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Hamur Kalınlığı Seç
                </option>
                <option value="İnce">İnce Hamur</option>
                <option value="Standart">Standart Hamur</option>
                <option value="Kalın">Kalın Hamur</option>
              </select>
            </div>
          </section>

          <section className="tw-mb-8">
            <h3 className="tw-text-xl tw-font-semibold tw-m-0 tw-pb-2">
              Ek Malzemeler
            </h3>
            <p className="tw-text-base tw-text-[#5F5F5F] tw-font-semibold tw-mt-1 tw-mb-5 tw-pb-3">
              En Fazla 10 malzeme seçebilirsiniz. 5₺
            </p>
            <Toppings form={form} setForm={setForm} />
          </section>

          <section className="tw-mb-8">
            <h3 className="tw-text-xl tw-font-semibold tw-mt-0 tw-mb-3">
              Sipariş Notu
            </h3>
            <textarea
              name="siparisNotu"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              className="tw-font-['Barlow'] tw-font-medium tw-w-full tw-h-20 tw-p-4 tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-text-sm tw-resize-none tw-outline-none tw-box-border"
              onChange={handleInputChange}
            />
          </section>

          <hr className="tw-border-0 tw-border-t tw-border-solid tw-border-gray-200 tw-my-8" />

          <OrderSummary
            adet={form.adet}
            arttir={arttir}
            azalt={azalt}
            secimlerUcreti={secimlerUcreti}
            toplamUcret={toplamUcret}
            handleSiparisVer={handleSiparisVer}
            isDisabled={isFormInvalid() || isLoading}
            isLoading={isLoading}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default OrderPage;
