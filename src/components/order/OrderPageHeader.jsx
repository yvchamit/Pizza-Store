import React from 'react';

function OrderPageHeader() {
  return (
    <header className="tw-bg-[#CE2829] tw-py-4 tw-px-4">
      
      <div className="tw-text-center tw-pt-8 tw-pb-8">
        <p 
          className="tw-font-['Londrina_Solid'] tw-font-normal tw-text-5xl tw-text-white tw-m-0 tw-mb-6 tw-tracking-wide"
        >
          Teknolojik Yemekler
        </p>
      </div>

      <div className="tw-max-w-[600px] tw-mx-auto tw-text-left tw-px-8 sm:tw-px-8">
        <p className="tw-text-white tw-text-base tw-m-0 tw-opacity-90">
          Anasayfa - Seçenekler - <span className="tw-font-bold tw-opacity-100">Sipariş Oluştur</span>
        </p>
      </div>

    </header>
  );
}

export default OrderPageHeader;