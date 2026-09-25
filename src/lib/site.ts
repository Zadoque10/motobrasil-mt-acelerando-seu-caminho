// Dados da loja — edite aqui e todo o site atualiza.
export const SITE = {
  name: "Moto Brasil",
  fullName: "Moto Brasil Peças, Acessórios e Oficina Multimarcas",
  foundedYear: 2002,
  whatsapp: "5565984049701",
  whatsappDisplay: "(65) 98404-9701",
  phone: "556530237777",
  phoneDisplay: "(65) 3023-7777",
  address: {
    street: "Av. General Mello, 180",
    district: "Dom Aquino",
    city: "Cuiabá",
    state: "MT",
    zip: "78015-300",
  },
  geo: { lat: -15.6041035, lng: -56.0943194 },
  hours: [
    { days: "Segunda a sexta", time: "08h às 18h" },
    { days: "Sábado", time: "08h às 13h" },
  ],
  instagram: "https://www.instagram.com/motobrasilmt/",
  instagramHandle: "@motobrasilmt",
  facebook: "https://www.facebook.com/motobrasilmt",
  staffLogin: "https://www.motobrasil.net:2096/",
};

export const yearsInBusiness = () => new Date().getFullYear() - SITE.foundedYear;

export const waLink = (msg = "Olá! Vim pelo site e gostaria de mais informações.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:+${SITE.phone}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Moto Brasil, Av. General Mello, 180 - Dom Aquino, Cuiabá - MT",
)}`;

export const mapsEmbed = `https://maps.google.com/maps?q=${SITE.geo.lat},${SITE.geo.lng}&z=16&output=embed`;
