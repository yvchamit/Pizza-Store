import React from "react";
import { MALZEME_LISTESI } from "../utils/toppings";


function OrderDetailsCard({ siparis }) {

  if (!siparis) return null;

  const secimlerUcreti = (siparis.malzemeler?.length || 0) * 5;

  const formatliMalzemeler = siparis.malzemeler?.map((secilenMalzemeValue) => {
    const bulunanMalzeme = MALZEME_LISTESI.find(
      (m) => m.value === secilenMalzemeValue
    );
    return bulunanMalzeme ? bulunanMalzeme.isim : secilenMalzemeValue;
  });

  return (
    <div className="tw-w-full tw-max-w-[400px] tw-mx-auto tw-text-white tw-font-['Barlow'] tw-pb-12">
      <h3 className="tw-text-center tw-text-2xl tw-font-bold tw-m-0 tw-mb-12">
        Position Absolute Pizza
      </h3>

      <div className="tw-flex tw-flex-col tw-gap-3 tw-text-left tw-max-w-[280px] tw-mx-auto tw-mb-12">
        <p className="tw-m-0 tw-text-base tw-font-normal">
          Boyut: <span className="tw-font-semibold">{siparis.boyut}</span>
        </p>
        <p className="tw-m-0 tw-text-base tw-font-normal">
          Hamur: <span className="tw-font-semibold">{siparis.hamur}</span>
        </p>
        <p className="tw-m-0 tw-text-base tw-font-normal tw-leading-relaxed">
          Ek Malzemeler:{" "}
          <span className="tw-font-semibold">
            {formatliMalzemeler?.length > 0
              ? formatliMalzemeler.join(", ")
              : "Seçilmedi"}
          </span>
        </p>
      </div>

      <div className="tw-w-full tw-border tw-border-solid tw-border-white tw-rounded-md tw-p-12 tw-text-left tw-box-border tw-bg-transparent">
        <h4 className="tw-text-xl tw-font-bold tw-m-0 tw-mb-4">
          Sipariş Toplamı
        </h4>

        <div className="tw-flex tw-justify-between tw-items-center tw-text-lg tw-font-semibold">
          <span className="tw-font-medium tw-text-white">Seçimler</span>
          <span>{secimlerUcreti.toFixed(2)}₺</span>
        </div>

        <div className="tw-flex tw-justify-between tw-items-center tw-pt-4 tw-text-lg tw-font-semibold">
          <span>Toplam</span>
          <span className="tw-text-xl">{siparis.toplamUcret?.toFixed(2)}₺</span>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsCard;
