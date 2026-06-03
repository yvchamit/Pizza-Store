import React from "react";
import { MALZEME_LISTESI } from "../../utils/toppings";


function Toppings({ form, setForm }) {
  const tiklamaYapildi = (malzemeValue) => {
    let mevcutMalzemeler = [...form.malzemeler];
    if (mevcutMalzemeler.includes(malzemeValue)) {
      mevcutMalzemeler = mevcutMalzemeler.filter(
        (item) => item !== malzemeValue,
      );
    } else {
      if (mevcutMalzemeler.length < 10) mevcutMalzemeler.push(malzemeValue);
    }
    setForm({ ...form, malzemeler: mevcutMalzemeler });
  };

  return (
    <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 tw-gap-4 tw-w-full">
      {MALZEME_LISTESI.map((malzeme) => {
        const seciliMi = form.malzemeler.includes(malzeme.value);
        const kilitliMi = form.malzemeler.length >= 10 && !seciliMi;

        return (
          <label
            key={malzeme.id}
            className={`tw-flex tw-items-center tw-gap-3 tw-text-base tw-font-bold tw-select-none tw-transition-opacity
              ${kilitliMi ? "tw-opacity-30 tw-cursor-not-allowed" : "tw-opacity-100 tw-cursor-pointer"}`}
          >
            <input
              type="checkbox"
              className="tw-w-4 tw-h-4 tw-accent-blue-600 tw-cursor-pointer"
              value={malzeme.value}
              checked={seciliMi}
              disabled={kilitliMi}
              onChange={() => tiklamaYapildi(malzeme.value)}
            />
            <span className="tw-text-[#5F5F5F]">{malzeme.isim}</span>
          </label>
        );
      })}
    </div>
  );
}

export default Toppings;
