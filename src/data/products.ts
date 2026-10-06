export type ProductGlyph = "choice" | "documents" | "discovery" | "maphoist";

export interface Product {
  number: string;
  name: string;
  domain?: string;
  category: string;
  description: string;
  note: string;
  href?: string;
  glyph: ProductGlyph;
  accent: string;
  status?: string;
}

export const products: Product[] = [
  {
    number: "01",
    name: "maphoist",
    category: "Local growth service",
    description: "Local visibility and customer acquisition management.",
    note: "A Kitbag Labs service.",
    glyph: "maphoist",
    accent: "#19ad98",
    status: "Be found by more prospects",
  },
  {
    number: "02",
    name: "docinject",
    domain: "docinject.com",
    category: "Workflow automation",
    description: "Seamless document automation and data injection tools built to maximize workflow efficiency.",
    note: "Less copying. More getting on with it.",
    href: "https://docinject.com",
    glyph: "documents",
    accent: "#8797e8",
  },
  {
    number: "03",
    name: "bouttabuy",
    domain: "bouttabuy.com",
    category: "Everyday decisions",
    description: "What should I buy? A focused little tool for getting past the scroll and onto the right choice.",
    note: "What Should I Buy? Check the app. ;-) ",
    href: "https://bouttabuy.com",
    glyph: "choice",
    accent: "#20b39e",
  },  
  {
    number: "04",
    name: "aitoolpouch",
    domain: "aitoolpouch.com",
    category: "AI discovery",
    description: "A curated, comprehensive hub for discovering and leveraging cutting-edge AI technologies.",
    note: "Good tools, easier to find.",
    href: "https://aitoolpouch.com",
    glyph: "discovery",
    accent: "#e9a361",
  },
];
