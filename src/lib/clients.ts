export type ClientLogo = {
  name: string;
  src: string;
  /** Full-bleed square mark (e.g. app-icon style) that should fill its tile. */
  fill?: boolean;
};

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: "McDonald's Qatar",
    src: "/landing/images/client%201_%20mcdonalds.jpeg",
    fill: true,
  },
  {
    name: "Qatar Development Bank",
    src: "/landing/images/qatar-development-bank-vector-logo-2022.png",
  },
  {
    name: "ELAN media",
    src: "/landing/images/elaan.png",
  },
  {
    name: "DAISO",
    src: "/landing/images/daisa.png",
  },
  {
    name: "Homes",
    src: "/landing/images/homes%20client.webp",
  },
];
