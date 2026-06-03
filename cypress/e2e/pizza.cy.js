/* global cy, describe, it, before, beforeEach */

describe("Teknolojik Yemekler - Pizza Sipariş Formu Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/pizza");
  });

  it("Sipariş notu alanına metin girilebilmeli", () => {
    cy.get('textarea[name="siparisNotu"]')
      .type("Lütfen pizzam sıcak gelsin ve kenarları ince olsun.")
      .should("have.value", "Lütfen pizzam sıcak gelsin ve kenarları ince olsun.");
  });

  it("Birden fazla ek malzeme başarıyla seçilebilmeli", () => {
    cy.get('input[type="checkbox"][value="pepperoni"]').check().should("be.checked");
    cy.get('input[type="checkbox"][value="sucuk"]').check().should("be.checked");
    cy.get('input[type="checkbox"][value="sogan"]').check().should("be.checked");
    cy.get('input[type="checkbox"]:checked').should("have.length", 3);
  });

  it("Zorunlu alanlar doldurulduğunda formu göndermeli ve başarı sayfasına yönlendirmeli", () => {
    cy.get('input[type="radio"][value="Orta"]').check();
    cy.get('select[name="hamur"]').select("Standart");
    cy.get('button').contains("SİPARİŞ VER").click();
    cy.url({ timeout: 10000 }).should("include", "/success");
    cy.get("h2").contains("TEBRİKLER!");
  });
});