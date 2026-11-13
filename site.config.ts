import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Weekend Kitchen",
  tagline: "Signature cheesecakes and bakes, and Sri Lankan favourites.",
  category: "Weekend kitchen",
  schemaType: "FoodEstablishment",
  area: "Oshawa and the Durham Region, ON",
  siteUrl: "https://weekend-kitchen-ca.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#b85c38" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "Weekend pre-orders",
    headline: "Cheesecakes, bakes and Sri Lankan favourites",
    subhead: "Weekend Kitchen makes signature cheesecakes and bakes, and authentic Sri Lankan favourites, for weekend pickup in Oshawa and the Durham Region. Pre-orders close Thursday at 10 PM. Send a message to order.",
    images: [
      { src: "/images/post-1.jpg", alt: "A homemade New York style cheesecake from Weekend Kitchen", width: 1080, height: 1080 },
      { src: "/images/post-4.jpg", alt: "Seeraga Samba mutton biryani with raita from Weekend Kitchen", width: 1080, height: 1080 },
      { src: "/images/post-6.jpg", alt: "Sri Lankan fish cutlets from Weekend Kitchen", width: 1080, height: 1080 },
    ],
    primaryCta: { label: "DM to pre-order", href: "https://ig.me/m/weekendkitchen25" },
    secondaryCta: { label: "See the menu", href: "#gallery" },
  },

  highlights: [
    "Signature cheesecakes and bakes",
    "Authentic Sri Lankan favourites",
    "Weekend pickup in Oshawa and the Durham Region",
    "Pre-orders close Thursday at 10 PM",
  ],

  about: {
    title: "Welcome to Weekend Kitchen",
    body: [
      "Weekend Kitchen makes signature cheesecakes and bakes, and authentic Sri Lankan favourites, for weekend pickup in Oshawa and the Durham Region, and serves the GTA. The kitchen uses Seeraga Samba rice for biryani, cooked in the traditional style.",
      "Pre-orders close Thursday at 10 PM. Send a message on Instagram to reserve cheesecake, a bake or a weekend plate.",
    ],
    image: { src: "/images/post-1.jpg", alt: "A homemade New York style cheesecake from Weekend Kitchen", width: 1080, height: 1080 },
  },

  menu: {
    label: "Menu",
    title: "This week's favourites",
    variant: "list",
    showPrices: false,
    priceNote: "Send a message to pre-order. Orders close Thursday at 10 PM for weekend pickup.",
    groups: [
      {
        title: "Cheesecakes and bakes",
        items: [
          { name: "New York style cheesecake", description: "Full cakes can be reserved for weekend pickup." },
          { name: "Date cake" },
          { name: "Pistachio brownies" },
        ],
      },
      {
        title: "Sri Lankan favourites",
        items: [
          { name: "Seeraga Samba mutton biryani", description: "Served with curry gravy and onion raita." },
          { name: "Crab biryani", description: "Served with raita." },
          { name: "Sri Lankan fish cutlets" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent plates",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1080, alt: "A homemade New York style cheesecake from Weekend Kitchen", caption: "New York style cheesecake", href: "https://www.instagram.com/p/DfGehGYxiBW/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1080, alt: "A classic New York style cheesecake from Weekend Kitchen", caption: "A classic cheesecake", href: "https://www.instagram.com/p/DbMCXiYRqSA/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1080, alt: "Seeraga Samba mutton biryani with raita from Weekend Kitchen", caption: "Mutton biryani", href: "https://www.instagram.com/p/DdnJ9kvMXdr/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1080, alt: "Crab biryani with raita from Weekend Kitchen", caption: "Crab biryani", href: "https://www.instagram.com/p/DdkmRUGsZCp/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1080, alt: "Sri Lankan fish cutlets from Weekend Kitchen", caption: "Fish cutlets", href: "https://www.instagram.com/p/DdflZCUMLEL/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1080, alt: "A pistachio brownie from Weekend Kitchen", caption: "Pistachio brownies", href: "https://www.instagram.com/p/DbS_sxExqVd/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "weekendkitchen25",
    embeds: ["https://www.instagram.com/p/DfGehGYxiBW/", "https://www.instagram.com/p/DdnJ9kvMXdr/", "https://www.instagram.com/p/DdflZCUMLEL/"],
  },

  order: {
    label: "How to order",
    title: "Pre-order in a DM by Thursday 10 PM",
    intro: "Send a message on Instagram to pre-order. Orders close Thursday at 10 PM for weekend pickup in Oshawa and the Durham Region.",
    dmMessage: "Hi Weekend Kitchen! I would like to pre-order.\nItems:\nPickup weekend:",
    headerCtaLabel: "DM to pre-order",
    links: [
      { label: "DM to pre-order", href: "https://ig.me/m/weekendkitchen25" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a message on Instagram to pre-order. Orders close Thursday at 10 PM for weekend pickup." },
    { q: "Where is pickup?", a: "Weekend pickup is in Oshawa and the Durham Region. Weekend Kitchen also serves the GTA." },
    { q: "What do you make?", a: "New York style cheesecake, date cake and pistachio brownies, plus Seeraga Samba mutton biryani, crab biryani and Sri Lankan fish cutlets." },
  ],

  contact: {
    title: "Contact",
    area: "Oshawa and the Durham Region, Ontario, serving the GTA",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/weekendkitchen25/" }],
  },

  seo: {
    title: "Weekend Kitchen | Cheesecakes and Sri Lankan favourites in Oshawa",
    description: "Cheesecakes, bakes and Sri Lankan favourites for weekend pickup in Oshawa and the Durham Region. Pre-orders close Thursday at 10 PM. Send an Instagram DM.",
    keywords: ["weekend kitchen Oshawa", "Sri Lankan food Durham", "cheesecake Oshawa"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
