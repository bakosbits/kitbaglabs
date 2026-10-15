export type ProductGlyph = "choice" | "documents" | "discovery" | "maphoist";

export interface Product {
  number: string;
  name: string;
  category: string;
  description: string;
  note: string;
  href?: string;
  glyph: ProductGlyph;
  accent: string;
}

export const products: Product[] = [
  {
    number: "01",
    name: "maphoist",
    category: "Local growth service",
    description: "Local visibility and customer acquisition management.",
    note: "Be found by more prospects.",
    href: "/maphoist",
    glyph: "maphoist",
    accent: "#19ad98",
  },
  {
    number: "02",
    name: "docinject",
    category: "Workflow automation",
    description: "Document automation and data injection built to maximize workflow efficiency.",
    note: "Less copying. More getting on with it.",
    href: "https://docinject.com",
    glyph: "documents",
    accent: "#8797e8",
  },
  {
    number: "03",
    name: "bouttabuy",
    category: "Everyday decisions",
    description: "What should I buy? A focused little tool to help with purchase decisions.",
    note: "What Should I Buy? Check the app. ;-) ",
    href: "https://bouttabuy.com",
    glyph: "choice",
    accent: "#20b39e",
  },  
  {
    number: "04",
    name: "aitoolpouch",
    category: "AI discovery",
    description: "A curated hub for discovering and leveraging cutting-edge AI technologies.",
    note: "Good tools, easier to find.",
    href: "https://aitoolpouch.com",
    glyph: "discovery",
    accent: "#e9a361",
  },
];
