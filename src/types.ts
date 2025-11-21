export interface Screening {
  id: string;
  city: string;
  venue: string;
  date: string;
  time: string;
  ticketLink: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'print' | 'calendar' | 'merch';
  isDigital?: boolean;
  link?: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  GALLERY = 'gallery',
  SCREENINGS = 'screenings',
  SHOP = 'shop',
  DOWNLOAD = 'download',
}
