// Curated multi-city routes for the Rajasthan flagship package page.
// Only Rajasthan gets hand-curated routes (verified logical city order); the
// other 35 states use their real "places covered" list from
// state-hub-children.json instead of an invented route — see
// docs/new-information-architecture.md §6.
export const rajasthanRoutes = [
  {
    name: "Jaipur → Jodhpur → Udaipur",
    desc: "The core Rajasthan circuit — Pink City forts, the Blue City, and lake palaces",
    stops: [
      { label: "Jaipur", href: "/blog/jaipur-travel-guide" },
      { label: "Jodhpur", href: "/blog/jodhpur-travel-guide" },
      { label: "Udaipur", href: "/blog/udaipur-city-of-lakes-travel-guide" },
    ],
  },
  {
    name: "Delhi → Agra → Jaipur",
    desc: "The Golden Triangle — Mughal monuments plus Rajasthan's capital",
    stops: [
      { label: "Delhi", href: "/blog/delhi-travel-guide" },
      { label: "Agra", href: "/blog/agra-travel-guide" },
      { label: "Jaipur", href: "/blog/jaipur-travel-guide" },
    ],
  },
  {
    name: "Jaipur → Jaisalmer → Jodhpur → Udaipur",
    desc: "The full desert-to-lakes circuit, including Thar Desert camps",
    stops: [
      { label: "Jaipur", href: "/blog/jaipur-travel-guide" },
      { label: "Jaisalmer / Thar Desert", href: "/blog/rajasthan-desert-travel-guide" },
      { label: "Jodhpur", href: "/blog/jodhpur-travel-guide" },
      { label: "Udaipur", href: "/blog/udaipur-city-of-lakes-travel-guide" },
    ],
  },
];
