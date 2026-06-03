import React from "react";

function OrderSummary({
  adet,
  arttir,
  azalt,
  secimlerUcreti,
  toplamUcret,
  handleSiparisVer,
  isDisabled,
  isLoading,
}) {
  return (
    <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-items-start tw-gap-6 tw-w-full">
      
      <div className="tw-hidden sm:tw-flex tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-overflow-hidden tw-shrink-0">
        <button
          type="button"
          className="tw-bg-[#FDC913] hover:tw-bg-[#E2B310] tw-w-12 tw-h-12 tw-text-xl tw-font-bold tw-border-none tw-cursor-pointer tw-transition-colors"
          onClick={azalt}
        >
          -
        </button>
        <div className="tw-bg-white tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-font-bold">
          {adet}
        </div>
        <button
          type="button"
          className="tw-bg-[#FDC913] hover:tw-bg-[#E2B310] tw-w-12 tw-h-12 tw-text-xl tw-font-bold tw-border-none tw-cursor-pointer tw-transition-colors"
          onClick={arttir}
        >
          +
        </button>
      </div>

      <div className="tw-flex-grow tw-w-full sm:tw-max-w-[320px] sm:tw-border sm:tw-border-solid sm:tw-border-gray-300 sm:tw-rounded sm:tw-bg-white sm:tw-overflow-hidden tw-flex tw-flex-col tw-gap-8 sm:tw-gap-0">

        <div className="tw-p-6 tw-bg-white tw-border tw-border-solid tw-border-gray-300 sm:tw-border-none tw-rounded sm:tw-rounded-none">
          <h3 className="tw-text-xl tw-font-semibold tw-m-0 tw-mb-4 tw-text-[#292929]">
            Sipariş Toplamı
          </h3>
          <div className="tw-flex tw-justify-between tw-mb-2 tw-text-lg tw-font-semibold tw-text-[#5F5F5F]">
            <span>Seçimler</span>
            <span>{secimlerUcreti.toFixed(2)} ₺</span>
          </div>
          <div className="tw-flex tw-justify-between tw-mt-4 tw-text-lg tw-font-semibold tw-text-[#CE2829]">
            <span>Toplam</span>
            <span>{toplamUcret.toFixed(2)} ₺</span>
          </div>
        </div>

        <button
          onClick={handleSiparisVer}
          type="button"
          disabled={isDisabled}
          className={`tw-hidden sm:tw-block tw-w-full tw-py-4 tw-text-lg tw-font-semibold tw-uppercase tw-tracking-wider tw-border-none tw-transition-colors ${
            isDisabled
              ? "tw-bg-gray-300 tw-text-gray-500 tw-cursor-not-allowed"
              : "tw-bg-[#FDC913] hover:tw-bg-[#E2B310] tw-cursor-pointer"
          }`}
        >
          {isLoading ? "GÖNDERİLİYOR..." : "SİPARİŞ VER"}
        </button>

        <div className="tw-flex sm:tw-hidden tw-gap-3 tw-bg-transparent">
          
          <div className="tw-flex-1 tw-flex tw-justify-between tw-items-center tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-overflow-hidden tw-h-14 tw-bg-white">
            <button
              type="button"
              className="tw-bg-[#FDC913] hover:tw-bg-[#E2B310] tw-flex-1 tw-h-full tw-text-xl tw-font-bold tw-border-none tw-cursor-pointer"
              onClick={azalt}
            >
              -
            </button>
            <div className="tw-bg-white tw-flex-1 tw-h-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-lg">
              {adet}
            </div>
            <button
              type="button"
              className="tw-bg-[#FDC913] hover:tw-bg-[#E2B310] tw-flex-1 tw-h-full tw-text-xl tw-font-bold tw-border-none tw-cursor-pointer"
              onClick={arttir}
            >
              +
            </button>
          </div>

          <button
            onClick={handleSiparisVer}
            type="button"
            disabled={isDisabled}
            className={`tw-flex-1 tw-h-14 tw-text-base tw-font-semibold tw-uppercase tw-tracking-wider tw-border-none tw-rounded tw-transition-colors ${
              isDisabled
                ? "tw-bg-gray-300 tw-text-gray-500 tw-cursor-not-allowed"
                : "tw-bg-[#FDC913] hover:tw-bg-[#E2B310] tw-cursor-pointer"
            }`}
          >
            {isLoading ? "GÖNDERİLİYOR..." : "SİPARİŞ VER"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default OrderSummary;