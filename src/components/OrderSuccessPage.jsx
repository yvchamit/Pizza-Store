import React from "react";
import Footer from "./Footer";
import OrderDetailsCard from "./OrderDetailsCard";

function OrderSuccessPage(props) {
  const history = props.history;

  const siparis = props.history?.location?.state?.siparis;

  return (
    <>
      <div className="tw-bg-[#CE2829] tw-min-h-screen tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center tw-px-4 tw-pt-12 tw-pb-16 md:tw-pb-0 tw-font-['Barlow']">
        <div className="tw-text-center tw-pt-8 tw-pb-8">
          <p className="tw-font-['Londrina_Solid'] tw-font-normal tw-text-5xl tw-text-white tw-m-0 tw-mb-6 tw-tracking-wide">
            Teknolojik Yemekler
          </p>
        </div>

        <div className="tw-max-w-[800px] tw-mx-auto">
          <p className="tw-font-['Satisfy',_cursive] tw-text-[#FDC913] tw-text-3xl tw-m-0 tw-mb-4">
            lezzetin yolda
          </p>

          <h2 className="tw-text-white tw-text-7xl tw-font-light tw-uppercase tw-m-0 tw-mb-8 tw-leading-tight">
            TEBRİKLER!
            <br className="block md:hidden" />
            SİPARİŞİNİZ ALINDI
          </h2>
        </div>

        <hr className="tw-w-full tw-max-w-[400px] tw-border-0 tw-border-t tw-border-[#FAF7F2] tw-my-6 tw-pb-10" />

        <OrderDetailsCard siparis={siparis} />

        <button
          type="button"
          onClick={() => history.push("/")}
          className="tw-font-['Barlow'] tw-font-semibold tw-text-[1.2rem] tw-text-center tw-uppercase tw-w-[15rem] tw-h-[4rem] tw-bg-[#FDC913] hover:tw-bg-[#E2B310] tw-rounded-[50px] tw-border-0 tw-cursor-pointer tw-transition-colors"
        >
          ANASAYFAYA DÖN
        </button>
      </div>
      <Footer />
    </>
  );
}

export default OrderSuccessPage;
