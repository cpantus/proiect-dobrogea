
import { Product, Screening } from './types';

export const SCREENINGS: Screening[] = [
  {
    id: '1',
    city: 'Bucharest',
    venue: 'Cinema City AFI Cotroceni',
    date: 'Oct 24, 2024',
    time: '19:00',
    ticketLink: 'https://www.iabilet.ro',
  },
  {
    id: '2',
    city: 'Cluj-Napoca',
    venue: 'Cinema Florin Piersic',
    date: 'Oct 26, 2024',
    time: '20:00',
    ticketLink: 'https://www.iabilet.ro',
  },
  {
    id: '3',
    city: 'Constanța',
    venue: 'Jean Constantin Center',
    date: 'Oct 28, 2024',
    time: '18:30',
    ticketLink: 'https://www.iabilet.ro',
  },
  {
    id: '4',
    city: 'Tulcea',
    venue: 'Teatrul Jean Bart',
    date: 'Nov 02, 2024',
    time: '19:00',
    ticketLink: 'https://www.iabilet.ro',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p5',
    name: 'Dobrogea: The Album',
    description: 'The definitive photographic collection. 300 pages of the wild ancient land.',
    price: 85,
    image: 'https://imgur.com/RPHn40X.png',
    category: 'merch',
    link: 'https://www.rbsservice.ro/proiectdobrogea',
  },
  {
    id: 'p1',
    name: 'The Blue Hour Tree',
    description: 'Limited edition fine art print. The iconic solitary oak standing against the winter night.',
    price: 180,
    image: 'https://imgur.com/ZgULn43.png',
    category: 'print',
    link: 'https://www.rbsservice.ro/proiectdobrogea',
  },
  {
    id: 'p2',
    name: 'Fortress Storm',
    description: 'Dramatic lightning strike over the ancient Enisala ruins. High-gloss acrylic finish.',
    price: 220,
    image: 'https://imgur.com/5SkKEK4.png',
    category: 'print',
    link: 'https://www.rbsservice.ro/proiectdobrogea',
  },
  {
    id: 'p3',
    name: 'Golden Morning',
    description: '2025 Calendar featuring the warm embrace of the Dobrogea sun.',
    price: 35,
    image: 'https://imgur.com/fuSOkq5.png',
    category: 'calendar',
    link: 'https://www.rbsservice.ro/proiectdobrogea',
  },
];
