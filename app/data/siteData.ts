type Location = {
  id: number;
  name: string;
  description: string;
  coordinates: [number, number];
  image: string;
};

export const LOCATIONS_DATA: Location[] = [
  {
    id: 1,
    name: "Bello horizonte",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coordinates: [3.4899235, -76.6158009],
    image: "/mapBello.png",
  },
  {
    id: 2,
    name: "Cerro de las Tres Cruces",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coordinates: [3.4674048, -76.5450713],
    image:
      "https://idiomasblendex.com/wp-content/uploads/2018/11/Cero-las-tres-cruces-ingles-en-medellin.jpg",
  },
  {
    id: 3,
    name: "Pico de Aguila",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coordinates: [3.3123883, -76.6028285],
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/1f/4c/a9/caption.jpg?w=900&h=500&s=1",
  },
];

export const FOOTER_LINKS = [
  { heading: "Inicio", links: [{ title: "Inicio", href: "/" }] },
  {
    heading: "Experiencias",
    links: [
      { title: "Caminata por el bosque", href: "/" },
      { title: "Avistamiento", href: "/" },
    ],
  },
  {
    heading: "Destinos",
    links: [
      { title: "Bello horizonte", href: "/" },
      { title: "Casa Tucán", href: "/" },
    ],
  },
  {
    heading: "Nosotros",
    links: [{ title: "Nuestra historia", href: "/" }],
  },
  {
    heading: "Blog",
    links: [{ title: "Artículos", href: "/" }],
  },
  {
    heading: "Reservas",
    links: [{ title: "Haz tu reserva aquí", href: "/" }],
  },
  {
    heading: "Contacto",
    links: [
      { title: "ecoturismo@gmail.com", href: "mailto:ecoturismo@gmail.com" },
      { title: "WhatsApp", href: "/" },
      { title: "+57 123 456 7890", href: "tel:+571234567890" },
    ],
  },
];
