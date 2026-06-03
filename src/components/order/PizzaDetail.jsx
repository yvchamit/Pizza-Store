import React from 'react';

function PizzaDetail({ tabanFiyat }) {
  return (
    <section className="tw-mb-8">
      <h2 className="tw-font-['Barlow'] tw-text-[22px] tw-font-semibold tw-mt-0 tw-mb-3 tw-text-[#292929] tw-pb-6">
        Position Absolute Acı Pizza
      </h2>
      
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
        <span className="tw-text-[28px] tw-font-bold tw-text-[#292929]">
          {tabanFiyat.toFixed(2)} ₺
        </span>
        <div className="tw-text-sm tw-text-[#5F5F5F] tw-font-medium">
          <span className="tw-mr-16">4.9</span>
          <span>(200)</span>
        </div>
      </div>

      <p className="tw-text-base tw-text-[#5F5F5F] tw-leading-relaxed tw-m-0">
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>
    </section>
  );
}

export default PizzaDetail;