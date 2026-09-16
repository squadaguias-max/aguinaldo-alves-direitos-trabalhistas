export const templateConfig = {
  brand: { name: "Aguinaldo Alves", descriptor: "Advogados Associados" },
  contact: { whatsapp: "553333318421", phone: "553333318421", phoneLabel: "(33) 3331-8421", email: "aguinaldo@adv.oabmg.org.br", instagram: "@aguinaldoalves.adv", instagramUrl: "https://www.instagram.com/aguinaldoalves.adv/" },
  office: { address: "Av. José Florêncio da Silva, 72 · Manhuaçu/MG · 36900-000" },
};
export function whatsappUrl(message = "Olá! Gostaria de analisar meu caso trabalhista.") { return `https://wa.me/${templateConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`; }
