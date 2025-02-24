import {
  CircleUser,
  Cross,
  Fingerprint,
  Handshake,
  Sprout,
  Target,
  TreeDeciduous,
  Vegan,
} from "lucide-react";

export const ABOUTUS_DATA = {
  features: [
    {
      title: "Sostenibilidad",
      description:
        "Implementamos prácticas ecológicas en todas nuestras actividades.",
      icon: Vegan,
    },
    {
      title: "Autenticidad",
      description:
        "Creamos experiencias genuinas en contacto con la naturaleza y las comunidades locales.",
      icon: Fingerprint,
    },
    {
      title: "Conservación",
      description:
        "Contribuimos  a la preservación del ecosistema a través de la siembra de árboles en el Bosque San Antonio, Km 18.",
      icon: Cross,
    },
    {
      title: "Compromiso comunitario",
      description:
        "Trabajamos con guías baqueanos en proceso de capacitación y profesionales certificados.",
      icon: CircleUser,
    },
  ],
  sustainability: {
    title: "Nuestro Compromiso con la Sostenibilidad",
    actions: [
      {
        title: "Siembra de árboles para la restauración del ecosistema",
        icon: TreeDeciduous,
      },
      {
        title: "Alianzas con la Red de Turismo de Naturaleza de Cali",
        icon: Handshake,
      },
      {
        title:
          "Implementación de prácticas ecológicas en cada una de nuestras actividades",
        icon: Sprout,
      },
      {
        title: "Contribución a los Objetivos de Desarrollo Sostenible (ODS)",
        icon: Target,
      },
    ],
  },
};
